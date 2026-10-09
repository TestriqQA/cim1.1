"use client";

import { useEffect, useState } from "react";
import { X, MapPin, Clock, Briefcase, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Job } from "@/types/careers";
import ApplicationForm from "./ApplicationForm";

interface JobDrawerProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
}

export default function JobDrawer({ job, isOpen, onClose }: JobDrawerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
            // Reset state when opening
            setShowForm(false);
            setIsSuccess(false);
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen && !isVisible) return null;

    const handleBack = () => {
        setShowForm(false);
        setIsSuccess(false);
    };

    const handleSuccess = () => {
        setIsSuccess(true);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Drawer Container */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
                className={`fixed inset-y-0 right-0 z-[201] w-full max-w-2xl lg:max-w-4xl h-full shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderLeft: "1px solid var(--border-color)",
                }}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md bg-[var(--card-bg)]/95" style={{ borderColor: "var(--border-color)" }}>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                        {showForm && !isSuccess ? (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-1 hover:text-[var(--brand-blue)] transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Details
                            </button>
                        ) : (
                            <>
                                <Briefcase className="w-4 h-4" />
                                {job.department}
                            </>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition-colors"
                        style={{ color: "var(--foreground)" }}
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="h-[calc(100%-80px)] overflow-y-auto p-6 md:p-8 pb-32 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
                    {isSuccess ? (
                        <div className="text-center py-12 space-y-6 h-full flex flex-col items-center justify-center min-h-[50vh]">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                                <p className="text-[var(--secondary-text)]">
                                    Thanks for applying for the <strong>{job.title}</strong> position. <br />
                                    We&apos;ve received your application and will be in touch soon.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-lg"
                                style={{ background: "var(--brand-blue)" }}
                            >
                                Close
                            </button>
                        </div>
                    ) : showForm ? (
                        <div className="space-y-6 animate-fadeIn">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">Apply for {job.title}</h2>
                                <p className="text-[var(--secondary-text)]">Please fill out the form below to submit your application.</p>
                            </div>
                            <ApplicationForm
                                jobTitle={job.title}
                                onSuccess={handleSuccess}
                                onCancel={handleBack}
                            />
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fadeIn">
                            {/* Title & Info */}
                            <div>
                                <h2 id="drawer-title" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                    {job.title}
                                </h2>
                                <div className="flex flex-wrap gap-4 text-sm md:text-base" style={{ color: "var(--secondary-text)" }}>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border-color)" }}>
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border-color)" }}>
                                        <Clock className="w-4 h-4" />
                                        {job.type}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>About the Role</h3>
                                <p className="leading-relaxed whitespace-pre-line" style={{ color: "var(--secondary-text)" }}>
                                    {job.description}
                                </p>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Requirements</h3>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                            <span style={{ color: "var(--secondary-text)" }}>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer / CTA - Only show when not in form/success mode */}
                {!showForm && !isSuccess && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t backdrop-blur-md bg-[var(--card-bg)]/90 flex justify-end z-20" style={{ borderColor: "var(--border-color)" }}>
                        <button
                            onClick={() => setShowForm(true)}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-lg w-full sm:w-auto"
                            style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}
                        >
                            Apply for this Role
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
