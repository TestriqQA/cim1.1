"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Shield, Eye, Award, CheckCircle2, Sparkles, Trophy } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#4285f4": "var(--brand-blue-text)",
            "#34a853": "var(--accent-green-text)",
            "#fbbc04": "var(--accent-amber-text)",
            "#ea4335": "var(--accent-red-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const benefits = [
        {
            icon: BarChart3,
            decorIcon: Sparkles,
            title: "Data-Driven Decisions",
            description: "We don't rely on gut feelings. Every campaign optimization is backed by rigorous A/B testing and statistical significance.",
            highlight: "Scientific Approach",
            color: "#4285f4",
        },
        {
            icon: Shield,
            decorIcon: CheckCircle2,
            title: "Transparent Reporting & Analytics",
            description: <span>Tired of vague reports? You get 24/7 access to <Link href="/blog/data-analytics-insights-action" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">live dashboards showing ROAS, CAC, LTV</Link>, and Net Profit - not just clicks.</span>,
            highlight: "Full Visibility",
            color: "#34a853",
        },
        {
            icon: Eye,
            decorIcon: BarChart3,
            title: "Dedicated Account Team",
            description: "You get a dedicated Senior Strategist, Copywriter, and Media Buyer. No junior hand-offs.",
            highlight: "Senior Experts",
            color: "#fbbc04",
        },
        {
            icon: Award,
            decorIcon: Shield,
            title: "Proven Track Record",
            description: "Significant client revenue generated with a strong average ROAS. We audit and fix inefficient accounts.",
            highlight: "Significant Revenue",
            color: "#ea4335",
        },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated background blobs */}

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10 lg:mb-12">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <Trophy className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Why Partner with Our <span style={{ color: "var(--accent-orange-text)" }}>Performance Marketing Team?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We are not just an external agency; we act as your internal growth engine.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const DecorIcon = benefit.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition duration-300 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? benefit.color : "var(--border-color)",
                                        boxShadow: isHovered ? `0 12px 30px -12px ${benefit.color}40` : "none",
                                    }}
                                >
                                    {/* Decorative icon */}
                                    <div
                                        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${benefit.color}15`, opacity: 0.6 }}
                                    >
                                        <DecorIcon className="w-6 h-6" style={{ color: benefit.color }} />
                                    </div>

                                    {/* Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                                        style={{
                                            backgroundColor: `${benefit.color}20`,
                                            color: textAccent(benefit.color),
                                        }}
                                    >
                                        {benefit.highlight}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative my-6">
                                        <div
                                            className="relative w-14 h-14 rounded-xl p-3"
                                            style={{ backgroundColor: `${benefit.color}20` }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: benefit.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isHovered ? textAccent(benefit.color) : "var(--foreground)" }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
