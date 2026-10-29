"use client";

import { useState } from "react";
import {
    Award,
    TrendingUp,
    Users,
    ShieldCheck,
    Zap,
    Clapperboard,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#ff0000": "var(--accent-red-text)",
            "#cc0000": "var(--accent-red-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const reasons = [
        {
            icon: TrendingUp,
            title: "Sustained Traffic Growth",
            description: <>Proven results using the latest <Link href="/services/seo-services" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">video SEO</Link> techniques. We use data to drive real scale.</>,
            color: "#FF0000",
        },
        {
            icon: Users,
            title: "Dedicated Experts",
            description: "Google-certified Campaign Managers assigned to every account for global scale and precision.",
            color: "#CC0000",
        },
        {
            icon: ShieldCheck,
            title: <Link href="/services/seo-services" className="hover:underline">EEAT Certified</Link>,
            description: "Content is fact-checked, authority-driven, and compliant with the latest Google Core updates.",
            color: "#FF0000",
        },
        {
            icon: Zap,
            title: "25% CPA Reduction",
            description: "Optimized funnels and creative testing consistently lower acquisition costs across any niche.",
            color: "#CC0000",
        },
        {
            icon: Clapperboard,
            title: "Multi-Device Mastery",
            description: "Optimized for everything from 4K Smart TVs to mobile devices, ensuring maximum engagement.",
            color: "#FF0000",
        },
        {
            icon: Sparkles,
            title: "95% Client Retention",
            description: "Long-term partnerships built on transparency, results, and consistent ROI growth.",
            color: "#CC0000",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--card-bg)" }}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: youtubeRed }} />
                <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: youtubeRed }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: `${youtubeRed}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            YouTube Marketing
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Maximize your video impact with a team that blends creative storytelling with performance data.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                                    style={{ backgroundColor: `${reason.color}30` }}
                                />

                                {/* Card */}
                                <div
                                    className={`relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${isHovered ? "shadow-2xl" : ""}`}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? reason.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: isHovered ? reason.color : `${reason.color}15`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.color}40` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: isHovered ? "white" : reason.color }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: isHovered ? textAccent(reason.color) : "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: reason.color,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
