
"use client";

import { useEffect, useState } from "react";
import { X, MapPin, Clock, Briefcase, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Job } from "@/types/careers";
import ApplicationForm from "./ApplicationForm";

interface JobModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
}

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
            // Reset state when opening
            setShowForm(false);
            setIsSuccess(false);
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    const handleBack = () => {
        setShowForm(false);
        setIsSuccess(false);
    };

    const handleSuccess = () => {
        setIsSuccess(true);
    };

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl transition-all duration-300 transform ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                    } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600`}
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                }}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md bg-[var(--card-bg)]/80" style={{ borderColor: "var(--border-color)" }}>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                        {showForm && !isSuccess ? (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-1 hover:text-[var(--brand-blue-text)] transition-colors"
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
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 md:p-10">
                    {isSuccess ? (
                        <div className="text-center py-12 space-y-6">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                                <p className="text-[var(--secondary-text)]">
                                    Thanks for applying for the <strong>{job.title}</strong> position. <br />
                                    We've received your application and will be in touch soon.
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
                        <div className="space-y-6">
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
                        <div className="space-y-8">
                            {/* Title & Info */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
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
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
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
                    <div className="sticky bottom-0 p-6 border-t backdrop-blur-md bg-[var(--card-bg)]/90 flex justify-end" style={{ borderColor: "var(--border-color)" }}>
                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-lg"
                            style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}
                        >
                            Apply for this Role
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
