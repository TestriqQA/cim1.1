import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createMailTransport, getMissingSmtpConfig } from '@/lib/cim/mail';

interface GetInTouchFormData {
    name: string;
    website: string;
    email: string;
    phone: string;
    referral: string;
    services: string[];
    goal: string;
    budget: string;
    timeline: string;
}

// Map service values to human-readable labels
const serviceLabels: Record<string, string> = {
    'web-design': 'Web Design & Development',
    'mobile-app': 'Mobile App Development',
    'social-media': 'Social Media Marketing',
    'ai-workflows': 'AI Workflows & Automations',
    'ai-chatbots': 'AI-Powered Chatbots',
    'seo': 'Organic Growth & SEO',
    'performance-marketing': 'Performance Marketing',
    'brand-identity': 'Brand Identity & Design',
    'support-services': 'Additional Support Services',
};

// Map budget values to human-readable labels
const budgetLabels: Record<string, string> = {
    'under-15k': 'Under ₹15,000',
    '15k-50k': '₹15,000 – ₹50,000',
    '50k-100k': '₹50,000 – ₹1,00,000',
    '100k-plus': '₹1,00,000+',
    'finalizing': 'Finalizing budget (Need suggestions)',
};

// Map timeline values to human-readable labels
const timelineLabels: Record<string, string> = {
    'right-away': 'Right away',
    'this-week': 'This week',
    'this-month': 'This month',
    'exploring': 'Just exploring',
};

export async function POST(request: Request) {
    try {
        const body: GetInTouchFormData = await request.json();
        if ((body as { hp_field?: string }).hp_field) return NextResponse.json({ success: true }); // honeypot
        const GetInTouchSchema = z.object({
            name: z.string().trim().min(1).max(100),
            email: z.string().trim().email().max(150),
            phone: z.string().trim().min(1).max(30),
            services: z.array(z.string()).min(1),
            goal: z.string().trim().min(1).max(2000),
            budget: z.string().trim().min(1).max(100),
            timeline: z.string().trim().min(1).max(100),
            website: z.string().trim().max(200).default(''),
            referral: z.string().trim().max(200).default(''),
        });
        const parsed = GetInTouchSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: parsed.error.issues.map((i) => i.path.join('.') + ': ' + i.message) },
                { status: 400 }
            );
        }
        const { name, website, email, phone, referral, services, goal, budget, timeline } = parsed.data;

        // Configuration validation
        const missingVars = getMissingSmtpConfig();
        if (missingVars.length > 0) {
            console.error('Missing SMTP configuration variables:', missingVars.join(', '));
            return NextResponse.json(
                { error: `Server configuration error. Please try again later.` },
                { status: 500 }
            );
        }

        const transporter = createMailTransport();

        // Verify connection
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP Connection verification failed:', verifyError);
            return NextResponse.json(
                { error: `Email service temporarily unavailable. Please try again later.` },
                { status: 500 }
            );
        }

        // Email Template Helpers
        const brandColor = '#4b277a'; // Purple from get-in-touch page
        const accentColor = '#fab900'; // Gold accent
        const brandLogoCid = 'brandLogo@cinuteinfomedia.com';

        const logoAttachment = {
            filename: 'CIM-LOGO.png',
            path: 'https://www.cinuteinfomedia.com/images/CIM-LOGO-Bold-with-white-BG.png',
            cid: brandLogoCid
        };

        const generateEmailTemplate = (title: string, content: string) => `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                    .header { background: linear-gradient(135deg, ${brandColor}, #97288e); padding: 30px 20px; text-align: center; }
                    .header img { max-height: 50px; }
                    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
                    .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; }
                    .footer a { color: ${brandColor}; text-decoration: none; }
                    .btn { display: inline-block; background: linear-gradient(135deg, ${brandColor}, #97288e); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 10px; }
                    .info-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    .info-table td { padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; }
                    .info-table td:first-child { width: 35%; font-weight: bold; color: #555; }
                    .highlight { color: ${brandColor}; font-weight: bold; }
                    .tag { display: inline-block; background-color: #f0f0f0; padding: 4px 10px; margin: 2px; border-radius: 12px; font-size: 13px; }
                </style>
            </head>
            <body>
                <div style="padding: 20px;">
                    <div class="container">
                        <div class="header">
                            <img src="cid:${brandLogoCid}" alt="Cinute InfoMedia" />
                        </div>
                        <div class="content">
                            ${content}
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} Cinute InfoMedia. All rights reserved.</p>
                            <p>Mumbai, India | <a href="mailto:contact@cinuteinfomedia.com">contact@cinuteinfomedia.com</a></p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Format services as readable labels
        const formattedServices = services.map(s => serviceLabels[s] || s).join(', ');
        const formattedBudget = budgetLabels[budget] || budget;
        const formattedTimeline = timelineLabels[timeline] || timeline;

        // Admin Notification Email
        const adminHtmlContent = `
            <h2 style="color: #333; margin-top: 0;">🚀 New Get In Touch Lead</h2>
            <p>You have received a new inquiry from the Get In Touch form.</p>
            
            <table class="info-table">
                <tr><td>Name</td><td><strong>${name}</strong></td></tr>
                <tr><td>Email</td><td><a href="mailto:${email}" style="color: ${brandColor}">${email}</a></td></tr>
                <tr><td>Phone</td><td>${phone}</td></tr>
                <tr><td>Website/Socials</td><td><a href="${website.startsWith('http') ? website : 'https://' + website}" target="_blank" style="color: ${brandColor}">${website}</a></td></tr>
                <tr><td>Found us via</td><td>${referral}</td></tr>
                <tr><td>Services Interested</td><td>${formattedServices}</td></tr>
                <tr><td>Budget Range</td><td><span class="highlight">${formattedBudget}</span></td></tr>
                <tr><td>Timeline</td><td>${formattedTimeline}</td></tr>
            </table>
            
            <div style="margin-top: 25px; background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid ${accentColor};">
                <h3 style="margin-top: 0; font-size: 16px; color: #555;">Goal/Challenge:</h3>
                <p style="margin-bottom: 0; white-space: pre-wrap;">${goal}</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}?subject=Re: Your Inquiry - Cinute InfoMedia" class="btn" style="color: #ffffff;">Reply to Lead</a>
            </div>
        `;

        const adminMailOptions = {
            from: process.env.SMTP_FROM || `"Get In Touch Form" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.SMTP_TO || process.env.SMTP_USER,
            cc: process.env.CC_EMAIL,
            bcc: process.env.BCC_EMAIL,
            subject: `[New Lead] ${name} - ${formattedServices.split(',')[0]}`,
            html: generateEmailTemplate(`New Lead: ${name}`, adminHtmlContent),
            attachments: [logoAttachment]
        };

        // User Confirmation Email
        const userHtmlContent = `
            <h2 style="color: ${brandColor}; margin-top: 0;">Thanks for reaching out, ${name}! 🎉</h2>
            <p>We're thrilled that you're interested in working with us!</p>
            <p>Our team has received your inquiry and is already reviewing your requirements. You can expect to hear back from us within <strong>24 business hours</strong>.</p>
            
            <div style="margin: 25px 0; padding: 20px; background: linear-gradient(135deg, ${brandColor}10, #97288e10); border-left: 4px solid ${brandColor}; border-radius: 4px;">
                <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 16px;">Here's a quick summary of your inquiry:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li><strong>Services:</strong> ${formattedServices}</li>
                    <li><strong>Budget:</strong> ${formattedBudget}</li>
                    <li><strong>Timeline:</strong> ${formattedTimeline}</li>
                </ul>
            </div>
            
            <div style="margin: 25px 0; padding: 20px; background-color: #f0f8ff; border-radius: 6px;">
                <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 16px;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555;">
                    <li>We analyze your requirements and goals.</li>
                    <li>We prepare a tailored strategy plan for you.</li>
                    <li>We schedule a quick discovery call if needed.</li>
                </ul>
            </div>
            
            <p>In the meantime, feel free to explore our work on our <a href="https://www.cinuteinfomedia.com" style="color: ${brandColor}">website</a>.</p>
            <p style="margin-top: 20px;">Best Regards,<br><strong>Team Cinute InfoMedia</strong></p>
        `;

        const userConfirmationOptions = {
            from: process.env.SMTP_FROM || `"Cinute InfoMedia" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thanks for reaching out! - Cinute InfoMedia`,
            html: generateEmailTemplate('Thank You', userHtmlContent),
            attachments: [logoAttachment]
        };

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userConfirmationOptions)
        ]);

        console.log('Get In Touch: Admin notification and user confirmation emails sent successfully');
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error: unknown) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to send email' },
            { status: 500 }
        );
    }
}
