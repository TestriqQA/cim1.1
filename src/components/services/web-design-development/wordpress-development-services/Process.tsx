"use client";

import { useState } from "react";
import {
    ClipboardList,
    PenTool,
    Code,
    Search,
    Rocket,
    CheckCircle,
} from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: ClipboardList,
            title: "Discovery & Strategy",
            description: "We analyze your WordPress development cost for business 2026 and ROI goals.",
            details: ["WordPress cost analysis", "ROI & conversion goals", "Competitive research", "Strategic roadmap"],
        },
        {
            number: "02",
            icon: PenTool,
            title: "Design & Prototyping",
            description: "UX-focused responsive WordPress design mockups tailored to your brand.",
            details: ["Responsive UI/UX design", "Interactive WordPress mockups", "Brand-specific styling", "User flow optimization"],
        },
        {
            number: "03",
            icon: Code,
            title: "Custom Development",
            description: "Hire WordPress developer specialists for clean code and high-performance custom builds.",
            details: ["Clean code architecture", "Custom theme & plugin builds", "Performance-first approach", "Expert developer specialists"],
        },
        {
            number: "04",
            icon: Search,
            title: "SEO & QA",
            description: "Comprehensive WordPress SEO setup and rigorous cross-device testing.",
            details: ["Strategic SEO configuration", "Rigorous cross-device QA", "Speed & performance testing", "Security & audit checks"],
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Support",
            description: "Seamless deployment plus WordPress maintenance and support services for 24/7 peace of mind.",
            details: ["Seamless global deployment", "24/7 maintenance & support", "Uptime monitoring", "Continuous growth strategy"],
        },
    ];

    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section id="process" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#0073AA" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-20">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 115, 170, 0.05)",
                            borderColor: "rgba(0, 115, 170, 0.2)",
                        }}
                    >
                        <ClipboardList className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our </span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Process
                        </span>
                    </h2>
                    <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                        A proven approach to WordPress development success.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#0073AA",
                            opacity: 0.5
                        }}
                    />

                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;
                            const isHovered = hoveredStep === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col lg:flex-row items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => setHoveredStep(idx)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Content Card */}
                                    <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                                        <div
                                            className={`
                                                p-8 rounded-3xl border transition-all duration-300
                                                ${isHovered ? "shadow-xl border-[#0073AA]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                                                    style={{ background: "linear-gradient(135deg, #0073AA, #0096D6)" }}
                                                >
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle className="w-4 h-4 text-[var(--brand-blue-text)]" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                                        <div
                                            className={`
                                                w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                                                ${isHovered ? "border-[#0073AA] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#0073AA]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector */}
                                    <div className="lg:hidden h-12 w-0.5 bg-gradient-to-b from-[#0073AA] to-transparent opacity-30 my-2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
