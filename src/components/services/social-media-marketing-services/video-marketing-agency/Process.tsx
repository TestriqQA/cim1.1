"use client";

import { useState } from "react";
import {
    Search,
    PenTool,
    Film,
    Rocket,
    LineChart,
    RefreshCcw,
    CheckCircle2,
    Clock,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#ff0000": "var(--accent-red-text)",
            "#cc0000": "var(--accent-red-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    // Solid fill behind white text: #FF0000 fails AA (4.00), #c5221f passes (5.80).
    const solidAccent = (c: string): string => (c.toLowerCase() === "#ff0000" ? "#c5221f" : c);

    const steps = [
        {
            icon: Search,
            title: "Channel Audit & Strategy",
            description: "Deep-dive analysis of historical data, competitor gaps, and technical SEO hygiene for a 2026 Growth Roadmap.",
            details: [
                "2026 Growth Roadmap",
                "KW Gap Analysis",
                <Link key="tech-seo" href="/services/seo-services/technical-seo-services" className="hover:text-[var(--accent-red-text)] transition-colors">Technical SEO check</Link>,
                "Competitor audit",
                "Historical data review",
            ],
            duration: "Phase 1",
            color: "#FF0000",
        },
        {
            icon: PenTool,
            title: "Content & Scripting",
            description: <>Expert <Link href="/services/seo-services/seo-content-writing-services" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">YouTube video script</Link> writing weaving LSI keywords and EEAT signals for maximum retention.</>,
            details: [
                "Retention-hook design",
                "Conversion-focused CTAs",
                "LSI keyword weaving",
                "EEAT signal alignment",
                "Authority scripting",
            ],
            duration: "Phase 2",
            color: "#CC0000",
        },
        {
            icon: Film,
            title: "Production Support",
            description: "From professional production to high-CTR thumbnail design, matching your brand's authority.",
            details: [
                <Link key="thumbnails" href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-red-text)] transition-colors">High-CTR thumbnails</Link>,
                "Production workflow",
                "Audio optimization",
                "Visual branding",
                "Quality assurance",
            ],
            duration: "Phase 3",
            color: "#FF0000",
        },
        {
            icon: Rocket,
            title: "Launch & Management",
            description: "Deployment across TrueView, In-stream, and Discovery with precision targeting based on first-party data.",
            details: [
                "TrueView setup",
                "In-stream ads",
                "Discovery campaign",
                "Precision targeting",
                "Account management",
            ],
            duration: "Phase 4",
            color: "#CC0000",
        },
        {
            icon: LineChart,
            title: "Optimization & Testing",
            description: "Continuous creative testing and bid optimization monitoring YouTube Analytics for real-time pivots.",
            details: [
                "A/B creative testing",
                "Bid optimization",
                "Real-time pivoting",
                "Analytics monitoring",
                "Performance scaling",
            ],
            duration: "Ongoing",
            color: "#FF0000",
        },
        {
            icon: RefreshCcw,
            title: "Reporting & ROI",
            description: "Transparent reporting via custom dashboards tracking every dollar from impression to conversion.",
            details: [
                "Custom Dashboards",
                "ROI tracking",
                "Transparency logs",
                "Strategy refinement",
                "Monthly reviews",
            ],
            duration: "Monthly",
            color: "#CC0000",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}08` }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}05`, animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "var(--card-bg)", border: `1px solid ${youtubeRed}30` }}>
                        <Zap className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>6-Step Growth Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our YouTube</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From ideation to execution, we handle every aspect of your YouTube marketing success.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isHovered = hoveredStep === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredStep(idx)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Glow */}
                                <div
                                    className={`absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-20" : ""}`}
                                    style={{ backgroundColor: step.color }}
                                />

                                <div
                                    className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 h-full overflow-hidden ${isHovered ? "shadow-2xl scale-[1.03]" : "shadow-lg"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number */}
                                    <div
                                        className={`absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}`}
                                        style={{ backgroundColor: solidAccent(step.color) }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}`}
                                                style={{
                                                    backgroundColor: isHovered ? step.color : `${step.color}15`,
                                                }}
                                            >
                                                <Icon className={`w-7 h-7 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`} style={{ color: isHovered ? "white" : step.color }} />
                                            </div>

                                            <div
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
                                                style={{ backgroundColor: `${step.color}15`, color: textAccent(step.color) }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {step.duration}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-all duration-500" style={{ color: isHovered ? textAccent(step.color) : "var(--foreground)" }}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {step.description}
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className={`flex items-start gap-3 transition-all duration-300 ${isHovered ? "translate-x-1" : "translate-x-0"}`}
                                                    style={{ transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms" }}
                                                >
                                                    <div
                                                        className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                                        style={{ backgroundColor: `${step.color}15` }}
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                                                    </div>
                                                    <span className={`text-sm leading-relaxed transition-all duration-300 ${isHovered ? "font-medium" : ""}`} style={{ color: "var(--secondary-text)" }}>
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-6 pt-6 border-t" style={{ borderColor: isHovered ? `${step.color}30` : "var(--border-color)" }}>
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
                                                    style={{ backgroundColor: step.color }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
