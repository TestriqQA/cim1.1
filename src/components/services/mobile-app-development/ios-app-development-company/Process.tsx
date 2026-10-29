"use client";

import { useState } from "react";
import {
    Search,
    Palette,
    Code,
    TestTube2,
    Rocket,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            icon: Search,
            title: "Discovery & Strategy",
            description: "We start by understanding your business goals. We analyze iOS app monetization and in-app purchase setup potential and define the technical roadmap.",
            details: [
                "Business goal analysis",
                "Monetization strategy",
                "Technical roadmap",
                "In-app purchase setup",
                "Market analysis",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Palette,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-sky-text)]">UI/UX Design</Link>,
            description: "Adhering strictly to Human Interface Guidelines (HIG), we create high-fidelity prototypes. We focus on Spatial computing and visionOS readiness.",
            details: [
                "HIG compliance",
                "High-fidelity prototypes",
                "Spatial computing",
                "visionOS readiness",
                "Interactive design",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development",
            description: "Agile sprints using Swift and SwiftUI development for business apps. We write clean, self-documenting code and conduct daily standups.",
            details: [
                "Swift & SwiftUI",
                "Agile sprints",
                "Clean code",
                "Daily standups",
                "Business logic",
            ],
            duration: "6-12 Weeks",
        },
        {
            icon: TestTube2,
            title: "Testing & QA",
            description: "Comprehensive iOS app testing and quality assurance services. We use TestFlight Beta Testing to gather real-world feedback.",
            details: [
                "Comprehensive testing",
                "Quality assurance",
                "TestFlight Beta",
                "Real-world feedback",
                "Stable releases",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "Deployment & Support",
            description: "We handle the complex App Store Connect submission process. Post-launch, we offer iOS app maintenance and support services.",
            details: [
                "App Store submission",
                <Link key="support" href="/services/additional-support-services" className="text-secondary-text underline underline-offset-2 hover:text-[var(--brand-blue-text)]">Maintenance & support</Link>,
                "OS updates",
                "New features",
                "Performance monitoring",
            ],
            duration: "Ongoing",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 122, 255, 0.05)",
                            borderColor: "rgba(0, 122, 255, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our iOS</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A transparent, agile workflow designed for speed and quality.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            background: "linear-gradient(180deg, #007AFF, #5AC8FA, #007AFF)",
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        relative flex flex-col md:flex-row items-center gap-8
                                        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                    `}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Step Number Circle */}
                                    <div
                                        className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 hidden lg:flex"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className={`
                                                w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                                                transition-all duration-300
                                                ${isActive ? "scale-110 shadow-lg" : "scale-100"}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                                boxShadow: isActive ? "0 8px 30px rgba(0, 122, 255, 0.4)" : "none",
                                            }}
                                        >
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                                            w-full lg:w-[calc(50%-60px)] p-8 rounded-3xl border transition-all duration-300 cursor-pointer
                                            ${isActive ? "shadow-xl -translate-y-2" : "hover:shadow-lg"}
                                            ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
                                        `}
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: isActive ? "#007AFF" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ background: "linear-gradient(135deg, #007AFF, #5AC8FA)" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(0, 122, 255, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[var(--brand-blue-text)]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(90, 200, 250, 0.1)",
                                                            color: "var(--accent-sky-text)",
                                                        }}
                                                    >
                                                        {step.duration}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>
                                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Expandable Details */}
                                                <div
                                                    className={`
                                                        space-y-2 overflow-hidden transition-all duration-300
                                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                                    `}
                                                >
                                                    {step.details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue-text)] flex-shrink-0" />
                                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                                {detail}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
