import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import { z } from "zod";
import { createMailTransport, getMissingSmtpConfig } from "@/lib/cim/mail";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        if (formData.get("hp_field")) return NextResponse.json({ success: true }); // honeypot

        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const linkedin = formData.get("linkedin") as string;
        const portfolio = formData.get("portfolio") as string;
        const jobTitle = formData.get("jobTitle") as string;
        const coverLetter = formData.get("coverLetter") as string;
        const resumeFile = formData.get("resume") as File | null;

        const CareersSchema = z.object({
            fullName: z.string().trim().min(1).max(100),
            email: z.string().trim().email().max(150),
            phone: z.string().trim().min(1).max(30),
            jobTitle: z.string().trim().min(1).max(150),
            linkedin: z.string().trim().max(300).nullish(),
            portfolio: z.string().trim().max(300).nullish(),
            coverLetter: z.string().trim().max(10000).nullish(),
        });
        const parsed = CareersSchema.safeParse({ fullName, email, phone, jobTitle, linkedin, portfolio, coverLetter });
        if (!parsed.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: parsed.error.issues.map((i) => i.path.join('.') + ': ' + i.message) },
                { status: 400 }
            );
        }
        if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: 'Resume exceeds 5MB limit' }, { status: 400 });
        }

        // 1. Google Sheets & Drive Authentication
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/drive.file',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const drive = google.drive({ version: 'v3', auth });
        let resumeUrl = "No Resume Uploaded";

        // 2. Upload to Drive (if file exists)
        if (resumeFile) {
            try {
                // Convert File to Buffer/Stream
                const arrayBuffer = await resumeFile.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const stream = Readable.from(buffer);

                const fileMetadata = {
                    name: `${fullName}_${resumeFile.name}`,
                    parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!], // Upload to specific folder
                };

                const media = {
                    mimeType: resumeFile.type,
                    body: stream,
                };

                const driveResponse = await drive.files.create({
                    requestBody: fileMetadata,
                    media: media,
                    fields: 'id, webViewLink, webContentLink',
                    supportsAllDrives: true,
                });

                resumeUrl = driveResponse.data.webViewLink || "Upload Failed";

            } catch (driveError) {
                console.error("Drive Upload Error:", driveError);
                resumeUrl = "Upload Failed: " + (driveError instanceof Error ? driveError.message : "Unknown Error");
            }
        }

        // 3. Prepare Data Row
        // Correct Order: 
        // A: Date, B: Job Title, C: Name, D: Email, E: Phone, F: LinkedIn, G: Portfolio, H: Resume, I: Cover Letter
        const row = [
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // A
            jobTitle,                 // B
            fullName,                 // C
            email,                    // D
            phone,                    // E
            linkedin || "N/A",        // F
            portfolio || "N/A",       // G
            resumeUrl,                // H (Resume Link)
            coverLetter               // I (Cover Letter)
        ];

        // 4. Append to Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row],
            },
        });

        // 5. Send Email Notifications (New Step)
        // Email is best-effort: the application is already persisted to
        // Sheets/Drive above, so a mail failure must NOT fail the request.
        // We surface it via `emailSent` in the response instead of a 500.
        let emailSent = false;
        try {
            const missingVars = getMissingSmtpConfig();
            if (missingVars.length > 0) {
                throw new Error(`Missing SMTP configuration: ${missingVars.join(", ")}`);
            }
            const transporter = createMailTransport();
            await transporter.verify();

            // --- HTML Templates ---
            const BRAND_BLUE = "#008ac1";
            const BRAND_PURPLE = "#bc3feb";
            const BG_COLOR = "#f4f4f5";
            const CARD_BG = "#ffffff";
            const TEXT_main = "#333333";
            const TEXT_sec = "#666666";

            const emailHeader = `
                <div style="background: linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_PURPLE}); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-family: Arial, sans-serif; font-size: 24px;">Cinute Infomedia Careers</h1>
                </div>
            `;

            const emailFooter = `
                <div style="text-align: center; padding: 20px; color: ${TEXT_sec}; font-size: 12px; font-family: Arial, sans-serif;">
                    <p>&copy; ${new Date().getFullYear()} Cinute Infomedia. All rights reserved.</p>
                </div>
            `;

            const containerStyle = `background-color: ${BG_COLOR}; padding: 40px 20px; font-family: Arial, sans-serif;`;
            const cardStyle = `background-color: ${CARD_BG}; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto;`;

            // --- Send to HR ---
            await transporter.sendMail({
                from: `"Cinute Careers" <${process.env.SMTP_USER}>`,
                to: process.env.HR_EMAIL,
                subject: `New Application: ${jobTitle} - ${fullName}`,
                html: `
                    <div style="${containerStyle}">
                        <div style="${cardStyle}">
                            ${emailHeader}
                            <div style="padding: 20px 0;">
                                <h2 style="color: ${TEXT_main}; margin-top: 0;">New Job Application</h2>
                                <p style="color: ${TEXT_sec}; margin-bottom: 20px;">A new candidate has applied for the <strong>${jobTitle}</strong> position.</p>
                                
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                    <tr>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_sec}; width: 120px;"><strong>Name</strong></td>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_main};"><strong>${fullName}</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_sec};"><strong>Email</strong></td>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_main};"><a href="mailto:${email}" style="color: ${BRAND_BLUE}; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_sec};"><strong>Phone</strong></td>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_main};">${phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_sec};"><strong>LinkedIn</strong></td>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_main};">${linkedin ? `<a href="${linkedin}" style="color: ${BRAND_BLUE};">Profile Link</a>` : "N/A"}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_sec};"><strong>Portfolio</strong></td>
                                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: ${TEXT_main};">${portfolio ? `<a href="${portfolio}" style="color: ${BRAND_BLUE};">Portfolio Link</a>` : "N/A"}</td>
                                    </tr>
                                </table>

                                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                                    <strong style="color: ${TEXT_main}; display: block; margin-bottom: 8px;">Cover Letter:</strong>
                                    <p style="color: ${TEXT_sec}; margin: 0; white-space: pre-wrap; line-height: 1.5;">${coverLetter}</p>
                                </div>

                                <div style="text-align: center; margin-top: 30px;">
                                    <a href="${resumeUrl}" style="background-color: ${BRAND_BLUE}; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">View Resume</a>
                                </div>
                            </div>
                            ${emailFooter}
                        </div>
                    </div>
                `,
            });

            // --- Send to Applicant ---
            await transporter.sendMail({
                from: `"Cinute Careers" <${process.env.SMTP_USER}>`,
                to: email,
                subject: `Application Received: ${jobTitle}`,
                html: `
                    <div style="${containerStyle}">
                        <div style="${cardStyle}">
                            ${emailHeader}
                            <div style="padding: 20px 0; text-align: center;">
                                <h2 style="color: ${TEXT_main}; margin-top: 0;">Verified! We received your application.</h2>
                                <p style="color: ${TEXT_sec}; line-height: 1.6;">
                                    Hi <strong>${fullName}</strong>,<br/><br/>
                                    Thanks for applying to the <strong>${jobTitle}</strong> position at Cinute Infomedia. 
                                    Our team is currently reviewing your application and we'll be in touch if your qualifications match our needs.
                                </p>
                                <div style="margin: 30px 0;">
                                    <a href="https://cinuteinfomedia.com" style="color: ${BRAND_BLUE}; text-decoration: none; font-weight: bold;">Visit our website &rarr;</a>
                                </div>
                                <p style="color: ${TEXT_sec}; font-size: 14px;">
                                    Best Regards,<br/>
                                    <strong>Cinute Infomedia Recruitment Team</strong>
                                </p>
                            </div>
                            ${emailFooter}
                        </div>
                    </div>
                `,
            });

            emailSent = true;
        } catch (emailError) {
            console.error("Email Sending Error:", emailError);
            // We don't fail the request if email fails, but we log it.
        }

        return NextResponse.json({ success: true, emailSent });

    } catch (error) {
        console.error("Handler Error:", error);
        return NextResponse.json({ success: false, error: "Failed to process application" }, { status: 500 });
    }
}
