"use client";

import { useState } from "react";
import {
    MessageSquare,
    Layers,
    Code,
    TestTube,
    Rocket,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            icon: MessageSquare,
            title: "Discovery & Planning",
            description: "We analyze your requirements, target devices, and HMS integration needs to create a comprehensive development roadmap.",
            details: [
                "Requirements analysis",
                "Device strategy",
                "HMS services selection",
                "Technical architecture",
                "Project timeline",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Layers,
            title: "UI/UX Design",
            description: <><Link href="/services/brand-identity-design" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">Design intuitive interfaces</Link> following HarmonyOS design guidelines with adaptive layouts for multi-device support.</>,
            details: [
                "HarmonyOS design system",
                "Multi-device layouts",
                "Distributed UI patterns",
                "Interactive prototypes",
                "Accessibility review",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development",
            description: "Agile development using ArkTS and ArkUI with HMS Core integration. Regular builds and progress updates.",
            details: [
                "ArkTS development",
                "HMS Core integration",
                "Distributed capabilities",
                "API development",
                "Code reviews",
            ],
            duration: "8-16 Weeks",
        },
        {
            icon: TestTube,
            title: "Testing & QA",
            description: "Comprehensive testing across multiple HarmonyOS devices using DevEco testing tools and real device cloud.",
            details: [
                "Unit testing",
                "Device compatibility",
                "Performance testing",
                "Security scanning",
                "User acceptance",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "AppGallery Launch",
            description: "Submission to Huawei AppGallery with optimization for discoverability and ongoing maintenance support.",
            details: [
                "App review preparation",
                "ASO optimization",
                "AppGallery submission",
                "Launch monitoring",
                <Link href="/services/additional-support-services" className="text-[var(--accent-red-text)] hover:underline">Post-launch support</Link>,
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
                            backgroundColor: "rgba(199, 0, 11, 0.05)",
                            borderColor: "rgba(199, 0, 11, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our HarmonyOS</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology for building high-quality HarmonyOS applications with HMS integration.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            backgroundColor: "#C7000B",
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
                                                backgroundColor: "#C7000B",
                                                boxShadow: isActive ? "0 8px 30px rgba(199, 0, 11, 0.4)" : "none",
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
                                            borderColor: isActive ? "#C7000B" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ backgroundColor: "#C7000B" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(199, 0, 11, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[var(--accent-red-text)]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(199, 0, 11, 0.1)",
                                                            color: "var(--accent-red-text)",
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
                                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-text)] flex-shrink-0" />
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
