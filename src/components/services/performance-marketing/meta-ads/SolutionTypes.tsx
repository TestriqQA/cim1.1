"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Users, Download, Play, MessageSquare, Repeat, Target } from "lucide-react";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Meta brand colors
    const metaBlue = "#1877f2";

    const objectives = [
        {
            icon: Users,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Awareness</Link>,
            description: "Build brand recognition and reach new audiences.",
            metrics: ["Reach", "Brand Lift", "Ad Recall", "Video Views"],
            color: "#1877f2",
        },
        {
            icon: MessageSquare,
            title: "Consideration",
            description: "Drive engagement and interest in your products.",
            metrics: ["Engagement", "Traffic", "Video Views", "Messages"],
            color: "#8b5cf6",
        },
        {
            icon: ShoppingCart,
            title: "Conversions",
            description: "Generate leads, sales, and valuable customer actions.",
            metrics: ["Purchases", "Leads", "Add to Cart", "Checkout"],
            color: "#00B894",
        },
        {
            icon: Download,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Promotion</Link>,
            description: "Drive installs and engagement for your mobile app.",
            metrics: ["Installs", "App Events", "ROAS", "Retention"],
            color: "#6C5CE7",
        },
        {
            icon: Play,
            title: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video Marketing</Link>,
            description: "Capture attention with immersive video content.",
            metrics: ["ThruPlays", "View Rate", "Watch Time", "Shares"],
            color: "#E4405F",
        },
        {
            icon: Repeat,
            title: "Remarketing",
            description: "Re-engage past visitors and nurture warm leads.",
            metrics: ["Frequency", "Conversions", "ROAS", "LTV"],
            color: "#FF6B6B",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
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
                        <Target className="w-4 h-4" style={{ color: metaBlue }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Campaign Objectives
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Campaign <span style={{ color: "var(--brand-blue-text)" }}>Objectives</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-funnel strategies aligned with your business goals.
                    </p>
                </div>

                {/* Hexagonal-inspired Grid with Expand Animation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {objectives.map((objective, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full overflow-hidden cursor-pointer"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: hoveredCard === idx ? objective.color : "var(--border-color)",
                                    transform: hoveredCard === idx ? "scale(1.05)" : "scale(1)",
                                    boxShadow: hoveredCard === idx
                                        ? `0 20px 60px ${objective.color}30, inset 0 0 60px ${objective.color}05`
                                        : "none",
                                }}
                            >
                                {/* Expanding circle background */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
                                    style={{
                                        width: hoveredCard === idx ? "300%" : "0%",
                                        height: hoveredCard === idx ? "300%" : "0%",
                                        backgroundColor: `${objective.color}08`,
                                    }}
                                />

                                {/* Icon with rotation */}
                                <div
                                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
                                    style={{
                                        backgroundColor: `${objective.color}15`,
                                        transform: hoveredCard === idx ? "rotate(360deg) scale(1.1)" : "rotate(0deg)",
                                    }}
                                >
                                    <objective.icon className="w-8 h-8" style={{ color: objective.color }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>
                                    {objective.title}
                                </h3>
                                <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                    {objective.description}
                                </p>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-2 relative z-10">
                                    {objective.metrics.map((metric, mIdx) => (
                                        <div
                                            key={mIdx}
                                            className="flex items-center gap-2 transition-all duration-300"
                                            style={{
                                                transform: hoveredCard === idx ? `translateX(${mIdx % 2 === 0 ? 4 : -4}px)` : "translateX(0)",
                                                transitionDelay: `${mIdx * 50}ms`,
                                            }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: objective.color }}
                                            />
                                            <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Corner accent */}
                                <div
                                    className="absolute top-0 right-0 w-16 h-16 transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, transparent 50%, ${objective.color}${hoveredCard === idx ? '30' : '10'} 50%)`,
                                        borderTopRightRadius: "1rem",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
