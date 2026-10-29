"use client";

import { useState } from "react";
import {
    Search,
    Target,
    Palette,
    Rocket,
    BarChart3,
    RefreshCw,
    CheckCircle2,
    Clock,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Map the decorative step colour -> theme-aware text token (contrast-safe in light & dark).
    // Only used where the colour is applied to TEXT; gradients/borders/icons keep the raw value.
    const accentTextMap: Record<string, string> = {
        "#3b82f6": "var(--brand-blue-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#ec4899": "var(--accent-pink-text)",
        "#f59e0b": "var(--accent-amber-text)",
        "#10b981": "var(--accent-green-text)",
        "#06b6d4": "var(--accent-cyan-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex.toLowerCase()] ?? hex;

    const steps = [
        {
            icon: Search,
            title: "Account Audit & Research",
            description: "We begin with a comprehensive Facebook ads audit and optimization services session. We analyze your history, competitor strategies, and pixel health to identify 24-hour \"quick wins.\"",
            details: [
                "Technical pixel & CAPI audit",
                "Competitor ad library research",
                "Historical data mining",
                "Conversion gap analysis",
                "Quick-win optimization roadmap",
            ],
            duration: "Phase 1",
            color: "#3B82F6",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Target,
            title: "Strategy & Audience Building",
            description: <>We develop a custom <Link href="/services/social-media-marketing-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">social media marketing strategy</Link> using Lookalike audience creation and specific interest clusters. We map out the full funnel from awareness to conversion.</>,
            details: [
                "TOFU/MOFU/BOFU funnel mapping",
                "Lookalike audience creation",
                "Interest cluster research",
                "Custom audience segmentation",
                "Budget scaling strategy",
            ],
            duration: "Phase 2",
            color: "#8B5CF6",
            gradient: "from-violet-500 to-purple-600",
        },
        {
            icon: Palette,
            title: "Creative Development",
            description: <>Our designers provide professional <Link href="/services/web-design-development/branding-services" className="text-[var(--accent-pink-text)] hover:underline underline underline-offset-2">Facebook ad creative design services</Link>, crafting a mix of carousel ads and high-definition <Link href="/services/social-media-marketing-services/video-marketing-agency" className="text-[var(--accent-pink-text)] hover:underline underline underline-offset-2">video ads</Link> that stops the scroll.</>,
            details: [
                "Scroll-stopping video ads",
                "Carousel ads optimization",
                "Carousel ads optimization",
                <Link href="/services/seo-services/seo-content-writing-services" className="hover:underline text-inherit" key="copywriting">High-conversion copywriting</Link>,
                "Dynamic creative testing",
                "Dynamic creative testing",
                "Mobile-first design focus",
            ],
            duration: "Phase 3",
            color: "#EC4899",
            gradient: "from-pink-500 to-rose-600",
        },
        {
            icon: Rocket,
            title: "Campaign Launch & Tracking",
            description: "We handle technical heavy lifting, including Facebook Pixel setup and tracking, CAPI integration, and event deduplication for precise ROI tracking.",
            details: [
                "Pixel & CAPI implementation",
                "Event tracking setup",
                "Campaign structure launch",
                "A/B test configuration",
                "Data accuracy verification",
            ],
            duration: "Phase 4",
            color: "#F59E0B",
            gradient: "from-amber-500 to-orange-600",
        },
        {
            icon: BarChart3,
            title: "Optimization & Scaling",
            description: <>Data leads the way. We monitor <Link href="/blog/data-analytics-insights-action" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Facebook ads reporting</Link> and analytics services daily, killing underperforming ads and aggressively scaling winners.</>,
            details: [
                "Daily performance monitoring",
                "Bid & budget optimization",
                "Creative refresh cycles",
                "Audience expansion scaling",
                "ROAS maximization",
            ],
            duration: "Phase 5",
            color: "#10B981",
            gradient: "from-emerald-500 to-green-600",
        },
        {
            icon: RefreshCw,
            title: "Reporting & Iteration",
            description: "You receive transparent, bi-weekly reports. We iterate based on performance, refreshing creatives and refining audiences to ensure long-term health.",
            details: [
                "Bi-weekly transparency reports",
                "Real-time dashboard access",
                "Strategic growth iteration",
                "Market shift adaptation",
                "Meta algorithm alignment",
            ],
            duration: "Ongoing",
            color: "#06B6D4",
            gradient: "from-cyan-500 to-teal-600",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 mb-6" style={{ backgroundColor: "var(--card-bg)" }}>
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-[var(--brand-blue-text)]">6-Step Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Facebook Ads</span>{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step methodology to launch, optimize, and scale profitable Facebook advertising campaigns.
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
                                {/* Outer glow effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-500
                                        ${isHovered ? "opacity-20" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}, transparent)`,
                                    }}
                                />

                                <div
                                    className={`
                                        relative p-8 rounded-3xl border backdrop-blur-sm
                                        transition-all duration-500 h-full overflow-hidden
                                        ${isHovered ? "shadow-2xl scale-[1.03]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className={`
                                            absolute inset-0 opacity-0 transition-opacity duration-500
                                            ${isHovered ? "opacity-[0.03]" : ""}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, transparent)`,
                                        }}
                                    />

                                    {/* Animated corner accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500
                                            ${isHovered ? "opacity-10 scale-100" : "opacity-0 scale-0"}
                                        `}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number Badge */}
                                    <div
                                        className={`
                                            absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center 
                                            text-white font-bold shadow-lg transition-all duration-500
                                            ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}DD)`,
                                        }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>

                                        {/* Pulse ring on hover */}
                                        {isHovered && (
                                            <div
                                                className="absolute inset-0 rounded-2xl animate-ping"
                                                style={{
                                                    backgroundColor: step.color,
                                                    opacity: 0.3,
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration Row */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`
                                                    w-14 h-14 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                    ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}
                                                `}
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${step.color}, ${step.color}CC)`
                                                        : `${step.color}15`,
                                                }}
                                            >
                                                <Icon
                                                    className={`
                                                        w-7 h-7 transition-all duration-500
                                                        ${isHovered ? "scale-110" : "scale-100"}
                                                    `}
                                                    style={{
                                                        color: isHovered ? "white" : step.color,
                                                    }}
                                                />
                                            </div>

                                            {/* Duration Badge */}
                                            <div
                                                className={`
                                                    flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                                                    transition-all duration-500
                                                    ${isHovered ? "scale-105" : "scale-100"}
                                                `}
                                                style={{
                                                    backgroundColor: isHovered ? `${step.color}20` : `${step.color}10`,
                                                    color: textAccent(step.color),
                                                }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {step.duration}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`
                                                text-xl font-bold mb-3 transition-all duration-500
                                            `}
                                            style={{
                                                color: isHovered ? textAccent(step.color) : "var(--foreground)",
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {step.description}
                                        </p>

                                        {/* Details List - Always Visible */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className={`
                                                        flex items-start gap-3 transition-all duration-300
                                                        ${isHovered ? "translate-x-1" : "translate-x-0"}
                                                    `}
                                                    style={{
                                                        transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className={`
                                                            mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0
                                                            transition-all duration-300
                                                            ${isHovered ? "scale-110 rotate-90" : "scale-100 rotate-0"}
                                                        `}
                                                        style={{
                                                            backgroundColor: isHovered ? `${step.color}25` : `${step.color}15`,
                                                            transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms",
                                                        }}
                                                    >
                                                        <CheckCircle2
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: step.color }}
                                                        />
                                                    </div>
                                                    <span
                                                        className={`
                                                            text-sm leading-relaxed transition-all duration-300
                                                            ${isHovered ? "font-medium" : ""}
                                                        `}
                                                        style={{
                                                            color: "var(--secondary-text)",
                                                        }}
                                                    >
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Progress Bar */}
                                        <div
                                            className="mt-6 pt-6 border-t"
                                            style={{
                                                borderColor: isHovered ? `${step.color}20` : "var(--border-color)",
                                            }}
                                        >
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`
                                                        absolute inset-y-0 left-0 rounded-full transition-all duration-700
                                                        ${isHovered ? "w-full" : "w-0"}
                                                    `}
                                                    style={{
                                                        background: `linear-gradient(90deg, ${step.color}, ${step.color}AA)`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative dots */}
                                    {isHovered && (
                                        <>
                                            <div
                                                className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                                                style={{ backgroundColor: step.color, opacity: 0.4 }}
                                            />
                                            <div
                                                className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: step.color,
                                                    opacity: 0.4,
                                                    animationDelay: "0.5s",
                                                }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: "3s" }} />
                        <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                            Process iterates continuously based on performance data
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}