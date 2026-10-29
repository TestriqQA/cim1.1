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
            title: "Discovery & Planning",
            description: <><span className="text-inherit">We continually audit your requirements. We define the cross-platform mobile app design and </span><Link href="/services/brand-identity-design" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">UI/UX strategy</Link>, selecting the right framework (Flutter vs. React Native) based on your specific needs.</>,
            details: [
                "Requirement audit",
                "UI/UX strategy definition",
                "Framework selection",
                "Needs assessment",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: <><span className="text-inherit">Our designers create platform-adaptive UI designs that respect </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">iOS</Link> (Human Interface Guidelines) and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Android</Link> (Material Design) conventions while maintaining your unique brand identity.</>,
            details: [
                "Platform-adaptive UI",
                "Human Interface Guidelines",
                "Material Design",
                "Brand identity maintenance",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Agile Development",
            description: "Our on-demand cross-platform app developers write clean, documented code. We implement shared business logic to maximize code reuse (up to 95%) and ensure consistency.",
            details: [
                "Clean, documented code",
                "Shared business logic",
                "Code reusability (95%)",
                "Consistency assurance",
            ],
            duration: "6-12 Weeks",
        },
        {
            icon: TestTube2,
            title: "Testing & QA",
            description: "We don't compromise on quality. Our cross-platform app testing and quality assurance includes automated and manual testing on huge device farms to ensure stable apps and native-like performance.",
            details: [
                "Automated & manual testing",
                "Device farm testing",
                "Quality assurance",
                "Native-like performance",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "Dual Store Launch",
            description: "We handle the complexities of submission. We optimize your store listings and manage the simultaneous deployment to the Apple App Store and Google Play Store.",
            details: [
                "Submission handling",
                "Store listing optimization",
                "Simultaneous deployment",
                "App Store & Google Play",
            ],
            duration: "1-2 Weeks",
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
                            backgroundColor: "rgba(102, 126, 234, 0.1)",
                            borderColor: "rgba(102, 126, 234, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-indigo-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Cross-Platform</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven, agile methodology that delivers transparency, quality, and speed.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            background: "linear-gradient(180deg, #667eea, #764ba2, #667eea)",
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
                                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                                boxShadow: isActive ? "0 8px 30px rgba(102, 126, 234, 0.4)" : "none",
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
                                            borderColor: isActive ? "#667eea" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(102, 126, 234, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[var(--accent-indigo-text)]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(118, 75, 162, 0.1)",
                                                            color: "var(--accent-violet-text)",
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
                                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-indigo-text)] flex-shrink-0" />
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
