
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef } from "react";
import { Loader2, Upload, Paperclip, CheckCircle2 } from "lucide-react";

// Define validation schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
    portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
    coverLetter: z.string().optional().or(z.literal("")),
    resume: z.any()
        .refine((files) => files?.length === 1, "Resume is required")
        .refine((files) => files?.[0]?.size <= 5000000, "Max file size is 5MB")
        .refine(
            (files) => ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(files?.[0]?.type),
            "Only .pdf, .doc, and .docx formats are supported"
        )
});

type FormData = z.infer<typeof formSchema>;

interface ApplicationFormProps {
    jobTitle: string;
    onSuccess: () => void;
    onCancel: () => void;
}

export default function ApplicationForm({ jobTitle, onSuccess, onCancel }: ApplicationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    // Watch for file changes to update the file name display
    const file = watch("resume");
    if (file && file.length > 0 && file[0].name !== fileName) {
        setFileName(file[0].name);
    }

    const hpRef = useRef<HTMLInputElement>(null);
    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("fullName", data.fullName);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("linkedin", data.linkedin || "");
            formData.append("portfolio", data.portfolio || "");
            formData.append("coverLetter", data.coverLetter || "");
            formData.append("jobTitle", jobTitle);
            formData.append("hp_field", hpRef.current?.value || "");

            if (data.resume && data.resume.length > 0) {
                formData.append("resume", data.resume[0]);
            }

            const response = await fetch('/api/careers/submit', {
                method: 'POST',
                // Body is FormData; Content-Type header is auto-set by browser
                body: formData,
            });

            if (!response.ok) throw new Error('Submission failed');

            console.log("Application Submitted Successfully");
            onSuccess();
            try { (window as any).gtag?.("event", "generate_lead", { form_id: "careers" }); } catch { /* analytics best-effort */ }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input ref={hpRef} type="text" name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
            <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("fullName")}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"
                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                        placeholder="John Doe"
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-xs">{errors.fullName.message as string}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"
                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message as string}</p>
                    )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"
                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                        placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone.message as string}</p>
                    )}
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        LinkedIn Profile
                    </label>
                    <input
                        {...register("linkedin")}
                        type="url"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"
                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                        placeholder="https://linkedin.com/in/johndoe"
                    />
                    {errors.linkedin && (
                        <p className="text-red-500 text-xs">{errors.linkedin.message as string}</p>
                    )}
                </div>
            </div>

            {/* Portfolio */}
            <div className="space-y-2">
                <label htmlFor="portfolio" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    Portfolio / Website
                </label>
                <input
                    {...register("portfolio")}
                    type="url"
                    className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"
                    style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                    placeholder="https://johndoe.com"
                />
                {errors.portfolio && (
                    <p className="text-red-500 text-xs">{errors.portfolio.message as string}</p>
                )}
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
                <label className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    Resume/CV <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                        {...register("resume")}
                        type="file"
                        id="resume-upload"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                    />
                    <label
                        htmlFor="resume-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-[var(--card-bg)]/50 transition-colors"
                        style={{ borderColor: "var(--border-color)" }}
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {fileName ? (
                                <>
                                    <CheckCircle2 className="w-8 h-8 mb-2 text-green-500" />
                                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{fileName}</p>
                                    <p className="text-xs text-green-500 mt-1">Ready to upload</p>
                                </>
                            ) : (
                                <>
                                    <Upload className="w-8 h-8 mb-2" style={{ color: "var(--secondary-text)" }} />
                                    <p className="text-sm mb-1" style={{ color: "var(--foreground)" }}>
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>PDF, DOC, DOCX (Max 5MB)</p>
                                </>
                            )}
                        </div>
                    </label>
                </div>
                {errors.resume && (
                    <p className="text-red-500 text-xs">{errors.resume.message as string}</p>
                )}
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    Cover Letter <span className="text-[var(--secondary-text)] font-normal">(Optional)</span>
                </label>
                <textarea
                    {...register("coverLetter")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border bg-transparent transition-colors focus:ring-2 focus:ring-[var(--brand-blue)] outline-none resize-none"
                    style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                    placeholder="Tell us why you're a great fit for this role..."
                />
                {errors.coverLetter && (
                    <p className="text-red-500 text-xs">{errors.coverLetter.message as string}</p>
                )}
            </div>

            <div className="flex gap-4 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-6 py-3 rounded-full font-semibold border hover:bg-[var(--card-bg)] transition-colors"
                    style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Application"
                    )}
                </button>
            </div>
        </form>
    );
}
