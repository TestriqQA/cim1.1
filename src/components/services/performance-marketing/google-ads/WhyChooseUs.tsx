"use client";

import { useState } from "react";
import { Award, Shield, TrendingUp, Users, CheckCircle, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";

    const benefits = [
        {
            id: 1,
            icon: Award,
            title: "Google Premier Partner",
            description: "Top 3% of Google Partners with dedicated support and early access to betas.",
            highlight: "Certified Experts",
        },
        {
            id: 2,
            icon: TrendingUp,
            title: "Proven Track Record",
            description: "500%+ average ROAS across 200+ campaigns in diverse industries.",
            highlight: "500% Avg ROAS",
        },
        {
            id: 3,
            icon: Shield,
            title: "Transparent Reporting",
            description: "Real-time dashboards with full visibility into spend, performance, and ROI.",
            highlight: "Full Transparency",
        },
        {
            id: 4,
            icon: Zap,
            title: "Fast Implementation",
            description: "Campaigns live within 5-7 days with proper tracking and optimization ready.",
            highlight: "Quick Launch",
        },
        {
            id: 5,
            icon: Users,
            title: "Dedicated Team",
            description: "A dedicated strategist, designer, and data analyst assigned to your account.",
            highlight: "Expert Team",
        },
        {
            id: 6,
            icon: BarChart3,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Data-Driven Decisions</Link>,
            description: "Every optimization backed by data, not guesswork. Weekly iteration cycles.",
            highlight: "Analytics First",
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
                            backgroundColor: `${googleBlue}15`,
                            borderColor: `${googleBlue}40`,
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
                        Partner with a team that delivers measurable results.
                    </p>
                </div>

                {/* Benefits Grid with 3D Tilt */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === benefit.id ? googleBlue : "var(--border-color)",
                                transform: hoveredCard === benefit.id
                                    ? "perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.02)"
                                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                                boxShadow: hoveredCard === benefit.id
                                    ? `0 20px 40px ${googleBlue}20, 0 0 0 1px ${googleBlue}`
                                    : "none",
                            }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Highlight Badge */}
                            <div
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{
                                    backgroundColor: "#1d4ed8",
                                    color: "white",
                                }}
                            >
                                {benefit.highlight}
                            </div>

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: `${googleBlue}15` }}
                            >
                                <benefit.icon className="w-7 h-7" style={{ color: "var(--brand-blue-text)" }} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                {benefit.title}
                            </h3>
                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                {benefit.description}
                            </p>

                            {/* Checkmark */}
                            <div className="mt-4 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                                <span className="text-xs font-medium" style={{ color: "var(--accent-green-text)" }}>
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
