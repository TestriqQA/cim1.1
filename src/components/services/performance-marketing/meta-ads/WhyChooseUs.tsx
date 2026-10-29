"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Shield, TrendingUp, Users, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Meta brand colors
    const metaBlue = "#1877f2";
    const metaPurple = "#8b5cf6";

    const benefits = [
        {
            id: 1,
            icon: Award,
            title: "Meta Business Partner",
            description: "Certified partner with direct access to Meta support and beta features.",
            stat: "Top 5%",
        },
        {
            id: 2,
            icon: TrendingUp,
            title: "Proven Results",
            description: "Average strong ROAS across 300+ e-commerce and lead gen campaigns.",
            stat: "Strong ROAS",
        },
        {
            id: 3,
            icon: Shield,
            title: "Full Transparency",
            description: "Real-time reporting dashboards with complete visibility into spend and performance.",
            stat: "24/7 Access",
        },
        {
            id: 4,
            icon: Zap,
            title: "Creative Excellence",
            description: "In-house creative team producing high-converting ads for every format.",
            stat: "500+ Creatives",
        },
        {
            id: 5,
            icon: Users,
            title: "Dedicated Team",
            description: "A strategist, creative designer, and data analyst assigned to your account.",
            stat: "3-Person Team",
        },
        {
            id: 6,
            icon: BarChart3,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Data-Driven</Link>,
            description: "Every decision backed by data. Weekly optimization cycles for continuous improvement.",
            stat: "100+ Data Points",
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
                            backgroundColor: `${metaBlue}15`,
                            borderColor: `${metaBlue}40`,
                        }}
                    >
                        <Award className="w-4 h-4" style={{ color: metaBlue }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose <span style={{ color: "var(--brand-blue-text)" }}>Us</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with certified experts who deliver measurable results.
                    </p>
                </div>

                {/* Benefits Grid with Glassmorphism */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-pointer"
                            style={{
                                backgroundColor: hoveredCard === benefit.id
                                    ? `color-mix(in srgb, ${metaBlue} 5%, var(--card-bg))`
                                    : "var(--card-bg)",
                                borderColor: hoveredCard === benefit.id ? metaBlue : "var(--border-color)",
                                transform: hoveredCard === benefit.id
                                    ? "translateY(-8px) scale(1.02)"
                                    : "translateY(0) scale(1)",
                                boxShadow: hoveredCard === benefit.id
                                    ? `0 20px 40px ${metaBlue}20, 0 0 0 1px ${metaBlue}`
                                    : "none",
                            }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Floating Stat Badge */}
                            <div
                                className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                                style={{
                                    backgroundColor: hoveredCard === benefit.id ? metaBlue : `${metaBlue}20`,
                                    color: hoveredCard === benefit.id ? "white" : "var(--brand-blue-text)",
                                    transform: hoveredCard === benefit.id ? "translateY(-4px)" : "translateY(0)",
                                }}
                            >
                                {benefit.stat}
                            </div>

                            {/* Icon with morph effect */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
                                style={{
                                    backgroundColor: `${metaBlue}15`,
                                    borderRadius: hoveredCard === benefit.id ? "50%" : "1rem",
                                    transform: hoveredCard === benefit.id ? "rotate(360deg)" : "rotate(0deg)",
                                }}
                            >
                                <benefit.icon className="w-7 h-7" style={{ color: metaBlue }} />
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
                                <CheckCircle className="w-4 h-4" style={{ color: metaPurple }} />
                                <span className="text-xs font-medium" style={{ color: "var(--accent-violet-text)" }}>
                                    Included
                                </span>
                            </div>

                            {/* Bottom gradient accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500"
                                style={{
                                    background: `linear-gradient(90deg, ${metaBlue}, ${metaPurple})`,
                                    opacity: hoveredCard === benefit.id ? 1 : 0,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
