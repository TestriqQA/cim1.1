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
            description: <><span className="text-inherit">We analyze your market, define user personas, and select the best tech stack (Native vs. Flutter/</span><Link href="/services/mobile-app-development/cross-platform-app-development-company" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">React Native</Link>).</>,
            details: [
                "Technical Specification Document (TSD)",
                "Market analysis",
                "User persona definition",
                "Tech stack selection",
                "Project roadmap",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Palette,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-green-text)]">UI/UX Design</Link>,
            description: <><span className="text-inherit">Distinctive designs following Material Design 3 principles. We create intuitive wireframes and </span><Link href="/services/brand-identity-design" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">interactive prototypes</Link>.</>,
            details: [
                "Material Design 3 compliance",
                "Interactive prototypes",
                "Figma & Adobe XD",
                "User journey mapping",
                "Accessibility focus",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development",
            description: "Clean, documented coding using MVVM/Clean Architecture. We focus on Kotlin-first development for safety and conciseness.",
            details: [
                "Kotlin-first development",
                "MVVM/Clean Architecture",
                "Jetpack Libraries",
                "Secure API integration",
                "Coroutines for async tasks",
            ],
            duration: "6-12 Weeks",
        },
        {
            icon: TestTube2,
            title: "Testing & Quality Assurance",
            description: "Rigorous Android app testing services across 50+ real devices. We test for battery drain, memory leaks, and network volatility.",
            details: [
                "<1% crash rate post-launch",
                "Battery drain analysis",
                "Memory leak detection",
                "Network volatility tests",
                "50+ real devices testing",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "Deployment & ASO",
            description: "We handle the complex Google Play Console submission process, ensuring unmatched Google Play Store publish success rates.",
            details: [
                "Google Play Console submission",
                "ASO optimization",
                "Metadata preparation",
                "Release build management",
                "Compliance check",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: CheckCircle2,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-green-text)]">Maintenance & Support</Link>,
            description: "Ongoing Android app maintenance and support services including OS updates, security patches, and Android app performance optimization.",
            details: [
                "OS updates support",
                "Security patches",
                "Performance optimization",
                "Feature enhancements",
                "24/7 monitoring",
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
                            backgroundColor: "rgba(61, 220, 132, 0.1)",
                            borderColor: "rgba(61, 220, 132, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>6-Step Agile</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Methodology for Perfection
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step agile methodology that ensures your Android app is delivered on time, on budget, and exceeds expectations.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            background: "linear-gradient(180deg, #3DDC84, #78C257, #3DDC84)",
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
                                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                                boxShadow: isActive ? "0 8px 30px rgba(61, 220, 132, 0.4)" : "none",
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
                                            borderColor: isActive ? "#3DDC84" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ background: "linear-gradient(135deg, #3DDC84, #78C257)" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(61, 220, 132, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[var(--accent-green-text)]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(120, 194, 87, 0.1)",
                                                            color: "var(--accent-green-text)",
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
                                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green-text)] flex-shrink-0" />
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
