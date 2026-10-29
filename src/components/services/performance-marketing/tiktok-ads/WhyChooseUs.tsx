"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Shield, TrendingUp, Users, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    // Map brand color -> theme-aware text token (contrast-safe in light & dark)
    const textAccent = (c: string) =>
        c === tiktokCyan ? "var(--accent-cyan-text)" : "var(--accent-pink-text)";

    const benefits = [
        {
            id: 1,
            icon: Award,
            title: "TikTok Partner",
            description: "Certified TikTok Marketing Partner with platform expertise.",
            stat: "Certified",
            color: tiktokPink,
        },
        {
            id: 2,
            icon: TrendingUp,
            title: "Viral Expertise",
            description: "We know what makes content pop on TikTok's algorithm.",
            stat: "High View Volume",
            color: tiktokCyan,
        },
        {
            id: 3,
            icon: Shield,
            title: "Full Transparency",
            description: "Real-time dashboards with complete visibility into performance.",
            stat: "24/7 Access",
            color: tiktokPink,
        },
        {
            id: 4,
            icon: Zap,
            title: "Creative First",
            description: "In-house creative team producing scroll-stopping content.",
            stat: "High Output",
            color: tiktokCyan,
        },
        {
            id: 5,
            icon: Users,
            title: "Gen Z Experts",
            description: "We understand the audience that lives on TikTok.",
            stat: "Native Team",
            color: tiktokPink,
        },
        {
            id: 6,
            icon: BarChart3,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Data-Driven</Link>,
            description: "Every decision backed by real performance data and trends.",
            stat: "Weekly Reports",
            color: tiktokCyan,
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
                            backgroundColor: `${tiktokPink}15`,
                            borderColor: `${tiktokPink}40`,
                        }}
                    >
                        <Award className="w-4 h-4" style={{ color: tiktokPink }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-pink-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Us
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with TikTok experts who understand viral content.
                    </p>
                </div>

                {/* Benefits Grid with 3D Tilt */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === benefit.id ? benefit.color : "var(--border-color)",
                                transform: hoveredCard === benefit.id
                                    ? "translateY(-8px) rotateX(5deg) rotateY(-5deg)"
                                    : "translateY(0) rotateX(0deg) rotateY(0deg)",
                                boxShadow: hoveredCard === benefit.id
                                    ? `0 20px 40px ${benefit.color}25, 0 0 0 1px ${benefit.color}`
                                    : "none",
                                transformStyle: "preserve-3d",
                                perspective: "1000px",
                            }}
                            onMouseEnter={() => setHoveredCard(benefit.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Stat Badge */}
                            <div
                                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 z-10"
                                style={{
                                    backgroundColor: hoveredCard === benefit.id ? benefit.color : `${benefit.color}20`,
                                    color: hoveredCard === benefit.id ? "white" : textAccent(benefit.color),
                                    transform: hoveredCard === benefit.id ? "scale(1.05)" : "scale(1)",
                                }}
                            >
                                {benefit.stat}
                            </div>

                            {/* Icon with bounce */}
                            <div
                                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
                                style={{
                                    backgroundColor: `${benefit.color}15`,
                                    transform: hoveredCard === benefit.id ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
                                }}
                            >
                                <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
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
                                <CheckCircle className="w-4 h-4" style={{ color: benefit.color }} />
                                <span className="text-xs font-medium" style={{ color: textAccent(benefit.color) }}>
                                    Included
                                </span>
                            </div>

                            {/* Bottom gradient line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500"
                                style={{
                                    background: `linear-gradient(90deg, ${tiktokPink}, ${tiktokCyan})`,
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
