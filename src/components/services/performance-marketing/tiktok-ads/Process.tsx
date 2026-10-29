"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Target, Palette, Rocket, BarChart, RefreshCw, CheckCircle } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    // Map brand color -> theme-aware text token (contrast-safe in light & dark)
    const textAccent = (c: string) =>
        c === tiktokCyan ? "var(--accent-cyan-text)" : "var(--accent-pink-text)";

    const steps = [
        {
            id: 1,
            icon: Search,
            title: "Discovery & Research",
            description: "Analyze your brand, audience, and trending content opportunities on TikTok.",
            deliverables: ["Trend analysis", "Competitor audit", "Audience insights"],
        },
        {
            id: 2,
            icon: Target,
            title: <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="hover:text-[var(--primary)] transition-colors">Strategy Development</Link>,
            description: "Build a content and targeting strategy aligned with TikTok best practices.",
            deliverables: ["Content pillars", "Targeting plan", "Budget allocation"],
        },
        {
            id: 3,
            icon: Palette,
            title: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Creative Production</Link>,
            description: "Produce thumb-stopping video content optimized for TikTok's format.",
            deliverables: ["Video ads", "Spark ads", "UGC briefs"],
        },
        {
            id: 4,
            icon: Rocket,
            title: "Campaign Launch",
            description: "Launch campaigns with proper pixel setup and event tracking.",
            deliverables: ["Pixel setup", "Events API", "Campaign structure"],
        },
        {
            id: 5,
            icon: BarChart,
            title: "Optimize & Test",
            description: "A/B test creatives, audiences, and bids for maximum performance.",
            deliverables: ["Creative testing", "Audience testing", "Bid optimization"],
        },
        {
            id: 6,
            icon: RefreshCw,
            title: "Scale & Report",
            description: "Scale winners and deliver transparent performance reports.",
            deliverables: ["Budget scaling", "Weekly reports", "Trend updates"],
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-5"
                    style={{
                        background: `radial-gradient(circle, ${tiktokPink}, transparent 70%)`,
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                        style={{
                            background: `linear-gradient(135deg, ${tiktokPink}15, ${tiktokCyan}15)`,
                            borderColor: `${tiktokPink}40`,
                        }}
                    >
                        <CheckCircle className="w-4 h-4" style={{ color: tiktokPink }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-pink-text)" }}>
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        How We{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Work
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step process for TikTok Ads success.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full"
                        style={{
                            background: `linear-gradient(to bottom, ${tiktokPink}, ${tiktokCyan}, ${tiktokPink})`,
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isHovered = hoveredStep === step.id;
                            const stepColor = idx % 2 === 0 ? tiktokPink : tiktokCyan;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative lg:flex items-center lg:mb-16 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                    onMouseEnter={() => setHoveredStep(step.id)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Content Card */}
                                    <div className={`lg:w-1/2 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                                        <div
                                            className="group p-6 rounded-2xl border transition-all duration-500"
                                            style={{
                                                backgroundColor: "var(--background)",
                                                borderColor: isHovered ? stepColor : "var(--border-color)",
                                                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                                boxShadow: isHovered
                                                    ? `0 20px 40px ${stepColor}20, 0 0 0 1px ${stepColor}`
                                                    : "none",
                                            }}
                                        >
                                            {/* Mobile Icon */}
                                            <div className="lg:hidden flex items-center gap-3 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                                    style={{ background: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                                                >
                                                    {step.id}
                                                </div>
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${stepColor}15` }}
                                                >
                                                    <step.icon className="w-6 h-6" style={{ color: stepColor }} />
                                                </div>
                                            </div>

                                            {/* Step Badge */}
                                            <div className={`hidden lg:flex items-center gap-2 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                                                <span
                                                    className="text-xs font-bold px-3 py-1 rounded-full"
                                                    style={{
                                                        backgroundColor: `${stepColor}20`,
                                                        color: textAccent(stepColor),
                                                    }}
                                                >
                                                    Step {step.id}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-xl font-bold mb-2 transition-colors duration-300"
                                                style={{ color: isHovered ? textAccent(stepColor) : "var(--foreground)" }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {step.description}
                                            </p>

                                            {/* Deliverables */}
                                            <div className={`flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                                                {step.deliverables.map((item, dIdx) => (
                                                    <span
                                                        key={dIdx}
                                                        className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300"
                                                        style={{
                                                            borderColor: isHovered ? stepColor : `${stepColor}30`,
                                                            color: isHovered ? textAccent(stepColor) : "var(--secondary-text)",
                                                            backgroundColor: isHovered ? `${stepColor}10` : "transparent",
                                                            transitionDelay: `${dIdx * 50}ms`,
                                                        }}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                                        <div
                                            className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? stepColor : `${stepColor}50`,
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                            }}
                                        >
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-ping"
                                                    style={{ backgroundColor: stepColor, opacity: 0.2 }}
                                                />
                                            )}
                                            <step.icon
                                                className="w-6 h-6 transition-transform duration-300"
                                                style={{
                                                    color: stepColor,
                                                    transform: isHovered ? "scale(1.2)" : "scale(1)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Empty Space */}
                                    <div className="hidden lg:block lg:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
