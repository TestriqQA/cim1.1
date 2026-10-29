"use client";

import { useState } from "react";
import {
    Award,
    TrendingUp,
    Users,
    Shield,
    Zap,
    HeadphonesIcon,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Theme-aware TEXT variants of the per-reason accent hues below.
    // The raw hues stay in the data (they drive gradients/borders/icons/tints);
    // this map is applied ONLY where a hue colors text.
    const accentTextMap: Record<string, string> = {
        "#E1306C": "var(--accent-pink-text)",
        "#C13584": "var(--accent-violet-text)",
        "#833AB4": "var(--accent-violet-text)",
        "#F77737": "var(--accent-orange-text)",
        "#405DE6": "var(--accent-indigo-text)",
        "#FD1D1D": "var(--accent-red-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex] ?? hex;

    const reasons = [
        {
            icon: Award,
            title: "Experience (E)",
            description: "Deep expertise in the digital space. We’ve seen the evolution from the first filter to the AI-driven 2026 algorithm.",
            color: "#E1306C",
        },
        {
            icon: Zap,
            title: "Expertise (E)",
            description: "On-demand Instagram social media managers for hire who specialize in niche-specific growth and Reels production.",
            color: "#C13584",
        },
        {
            icon: TrendingUp,
            title: "Authoritativeness (A)",
            description: <>Recognized leaders in <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Social Media Marketing</Link> with certifications from Meta Blueprint and a 95% success rate.</>,
            color: "#833AB4",
        },
        {
            icon: Shield,
            title: "Trustworthiness (T)",
            description: "100% transparency with real-time dashboards. No vanity metrics - just ROI, CTR, and conversion data.",
            color: "#F77737",
        },
        {
            icon: Sparkles,
            title: "Trend Agility (2026)",
            description: "We stay ahead of algorithm changes and trending content formats to maximize your brand's reach.",
            color: "#405DE6",
        },
        {
            icon: Users,
            title: "Industry-Specific Elite",
            description: <>Custom blueprints for E-commerce, B2B, Luxury, and <Link href="/services/web-design-development/healthcare-portals" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Healthcare</Link> industries that deliver precision targeting.</>,
            color: "#FD1D1D",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--card-bg)" }}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "linear-gradient(135deg, #E1306C, #C13584)" }} />
                <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "linear-gradient(135deg, #F77737, #FCAF45)" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(225, 48, 108, 0.1)",
                            borderColor: "rgba(225, 48, 108, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#E1306C" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-pink-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Instagram Marketing
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with a team that understands Instagram and delivers real results.
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
                                    style={{ background: `${reason.color}30` }}
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
                                            background: isHovered ? `linear-gradient(135deg, ${reason.color}, ${reason.color}CC)` : `${reason.color}15`,
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
                                            background: `linear-gradient(90deg, ${reason.color}, ${reason.color}80)`,
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
