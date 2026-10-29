"use client";

import { useState } from "react";
import { Shield, Target, BarChart3, Users, CheckCircle, Award } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const benefits = [
        {
            id: 1,
            icon: Shield,
            title: "100% White-Hat",
            description: "We only use ethical, Google-approved link building tactics. No PBNs, no spam, no risk.",
            highlight: "Zero Penalty Risk",
        },
        {
            id: 2,
            icon: Target,
            title: "Niche Relevance",
            description: <>Every link we build is from a site relevant to your industry, maximizing <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>SEO value</Link>.</>,
            highlight: "Industry-Targeted",
        },
        {
            id: 3,
            icon: BarChart3,
            title: "Transparent Reporting",
            description: "Monthly reports with every link, its DA/DR, traffic, and placement context.",
            highlight: "Full Visibility",
        },
        {
            id: 4,
            icon: Users,
            title: "Dedicated Team",
            description: "A dedicated outreach specialist and content writer assigned to your campaign.",
            highlight: "Personal Attention",
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
                            backgroundColor: `${linkCyan}15`,
                            borderColor: `${linkCyan}40`,
                        }}
                    >
                        <Award className="w-4 h-4" style={{ color: linkCyan }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose <span style={{ color: "var(--accent-cyan-text)" }}>Us</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with a team that prioritizes quality, transparency, and results.
                    </p>
                </div>

                {/* Benefits Grid with 3D Tilt Effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === benefit.id ? linkCyan : "var(--border-color)",
                                transform: hoveredCard === benefit.id
                                    ? "perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.02)"
                                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                                boxShadow: hoveredCard === benefit.id
                                    ? `0 20px 40px ${linkCyan}20, 0 0 0 1px ${linkCyan}`
                                    : "none",
                            }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Highlight Badge */}
                            <div
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{
                                    backgroundColor: "#155e75",
                                    color: "white",
                                }}
                            >
                                {benefit.highlight}
                            </div>

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: `${linkCyan}15` }}
                            >
                                <benefit.icon className="w-7 h-7" style={{ color: linkCyan }} />
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
                                <CheckCircle className="w-4 h-4" style={{ color: linkCyan }} />
                                <span className="text-xs font-medium" style={{ color: "var(--accent-cyan-text)" }}>
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
