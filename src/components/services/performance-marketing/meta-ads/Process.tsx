"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbulb, Target, Palette, Rocket, BarChart, RefreshCw, CheckCircle } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Meta brand colors
    const metaBlue = "#1877f2";
    const metaPurple = "#8b5cf6";

    const steps = [
        {
            id: 1,
            icon: Lightbulb,
            title: <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="hover:text-[var(--primary)] transition-colors">Discovery & Strategy</Link>,
            description: "Deep-dive into your business, audience, and goals to craft a winning Meta Ads strategy.",
            deliverables: ["Audience research", "Competitor analysis", "Campaign roadmap"],
        },
        {
            id: 2,
            icon: Target,
            title: "Audience Building",
            description: "Create precise custom and lookalike audiences using your first-party data and Meta's targeting.",
            deliverables: ["Custom audiences", "Lookalikes", "Interest targeting"],
        },
        {
            id: 3,
            icon: Palette,
            title: "Creative Production",
            description: "Design scroll-stopping creatives optimized for each placement and format.",
            deliverables: ["Ad creatives", "Copy variations", "Video content"],
        },
        {
            id: 4,
            icon: Rocket,
            title: "Campaign Launch",
            description: "Strategic launch with proper pixel setup, event tracking, and conversion optimization.",
            deliverables: ["Pixel configuration", "Event setup", "Campaign structure"],
        },
        {
            id: 5,
            icon: BarChart,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Optimization</Link>,
            description: "Continuous testing and optimization based on real performance data and insights.",
            deliverables: ["A/B testing", "Bid optimization", "Creative iteration"],
        },
        {
            id: 6,
            icon: RefreshCw,
            title: "Scale & Iterate",
            description: "Scale winning campaigns and continuously iterate for better results and higher ROAS.",
            deliverables: ["Budget scaling", "Channel expansion", "LTV optimization"],
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-5"
                    style={{
                        background: `radial-gradient(circle, ${metaBlue}, transparent 70%)`,
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                        style={{
                            backgroundColor: `${metaBlue}15`,
                            borderColor: `${metaBlue}40`,
                        }}
                    >
                        <CheckCircle className="w-4 h-4" style={{ color: metaBlue }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        How We <span style={{ color: "var(--brand-blue-text)" }}>Work</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step process for Meta Ads success.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full"
                        style={{
                            background: `linear-gradient(to bottom, ${metaBlue}, ${metaPurple}, ${metaBlue})`,
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isHovered = hoveredStep === step.id;

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
                                                borderColor: isHovered ? metaBlue : "var(--border-color)",
                                                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                                boxShadow: isHovered
                                                    ? `0 20px 40px ${metaBlue}20, 0 0 0 1px ${metaBlue}`
                                                    : "none",
                                            }}
                                        >
                                            {/* Mobile Step Number & Icon */}
                                            <div className="lg:hidden flex items-center gap-3 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${metaBlue}, ${metaPurple})`,
                                                    }}
                                                >
                                                    {step.id}
                                                </div>
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${metaBlue}15` }}
                                                >
                                                    <step.icon className="w-6 h-6" style={{ color: metaBlue }} />
                                                </div>
                                            </div>

                                            {/* Step Badge - Desktop */}
                                            <div
                                                className={`hidden lg:flex items-center gap-2 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}
                                            >
                                                <span
                                                    className="text-xs font-bold px-3 py-1 rounded-full"
                                                    style={{
                                                        backgroundColor: `${metaBlue}20`,
                                                        color: "var(--brand-blue-text)",
                                                    }}
                                                >
                                                    Step {step.id}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-xl font-bold mb-2 transition-colors duration-300"
                                                style={{ color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)" }}
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
                                                            borderColor: isHovered ? metaBlue : `${metaBlue}30`,
                                                            color: isHovered ? "var(--brand-blue-text)" : "var(--secondary-text)",
                                                            backgroundColor: isHovered ? `${metaBlue}10` : "transparent",
                                                            transitionDelay: `${dIdx * 50}ms`,
                                                        }}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node - Desktop Only */}
                                    <div
                                        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center"
                                    >
                                        {/* Outer ring with pulse */}
                                        <div
                                            className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? metaBlue : `${metaBlue}50`,
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                            }}
                                        >
                                            {/* Pulse effect */}
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-ping"
                                                    style={{ backgroundColor: metaBlue, opacity: 0.2 }}
                                                />
                                            )}

                                            {/* Icon */}
                                            <step.icon
                                                className="w-6 h-6 transition-transform duration-300"
                                                style={{
                                                    color: metaBlue,
                                                    transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Empty Space for opposite side */}
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
