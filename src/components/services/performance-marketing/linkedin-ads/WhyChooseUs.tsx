"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Shield, TrendingUp, Users, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";

    const benefits = [
        {
            id: 1,
            icon: Award,
            title: "LinkedIn Partner",
            description: "Certified LinkedIn Marketing Partner with direct platform support.",
            stat: "Certified",
        },
        {
            id: 2,
            icon: TrendingUp,
            title: "B2B Specialists",
            description: "Focused exclusively on B2B LinkedIn advertising.",
            stat: "B2B Focus",
        },
        {
            id: 3,
            icon: Shield,
            title: "Enterprise Experience",
            description: "Managed campaigns for large enterprises and high-growth startups.",
            stat: "100+ Clients",
        },
        {
            id: 4,
            icon: Zap,
            title: "Fast Results",
            description: "Campaigns live within 7 days with full tracking setup.",
            stat: "7-Day Launch",
        },
        {
            id: 5,
            icon: Users,
            title: "Dedicated Team",
            description: "A B2B strategist and creative designer on every account.",
            stat: "Expert Team",
        },
        {
            id: 6,
            icon: BarChart3,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Transparent Reporting</Link>,
            description: "Weekly reports with full visibility into leads and pipeline.",
            stat: "Real-Time Data",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${linkedInBlue}15`,
                            borderColor: `${linkedInBlue}40`,
                        }}
                    >
                        <Award className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose <span style={{ color: "var(--brand-blue-text)" }}>Us</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        B2B advertising expertise that delivers qualified leads.
                    </p>
                </div>

                {/* Benefits Grid with Card Flip Reveal */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === benefit.id ? linkedInBlue : "var(--border-color)",
                                transform: hoveredCard === benefit.id
                                    ? "translateY(-8px)"
                                    : "translateY(0)",
                                boxShadow: hoveredCard === benefit.id
                                    ? `0 20px 40px ${linkedInBlue}20, 0 0 0 1px ${linkedInBlue}`
                                    : "none",
                            }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Background shine effect */}
                            <div
                                className="absolute inset-0 transition-all duration-700"
                                style={{
                                    background: `linear-gradient(135deg, transparent 40%, ${linkedInBlue}10 50%, transparent 60%)`,
                                    transform: hoveredCard === benefit.id ? "translateX(100%)" : "translateX(-100%)",
                                }}
                            />

                            {/* Stat Badge */}
                            <div
                                className="absolute -top-0 right-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 z-10"
                                style={{
                                    backgroundColor: hoveredCard === benefit.id ? linkedInBlue : `${linkedInBlue}20`,
                                    color: hoveredCard === benefit.id ? "white" : "var(--brand-blue-text)",
                                    transform: hoveredCard === benefit.id ? "translateY(-4px) scale(1.05)" : "translateY(0)",
                                }}
                            >
                                {benefit.stat}
                            </div>

                            {/* Icon */}
                            <div
                                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
                                style={{
                                    backgroundColor: `${linkedInBlue}15`,
                                    transform: hoveredCard === benefit.id ? "rotate(360deg) scale(1.1)" : "rotate(0deg)",
                                }}
                            >
                                <benefit.icon className="w-7 h-7" style={{ color: "var(--brand-blue-text)" }} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>
                                {benefit.title}
                            </h3>
                            <p className="text-sm relative z-10" style={{ color: "var(--secondary-text)" }}>
                                {benefit.description}
                            </p>

                            {/* Checkmark */}
                            <div className="mt-4 flex items-center gap-2 relative z-10">
                                <CheckCircle className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                                <span className="text-xs font-medium" style={{ color: "var(--brand-blue-text)" }}>
                                    Included
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
