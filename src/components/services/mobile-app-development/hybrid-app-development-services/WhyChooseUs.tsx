"use client";

import { useState } from "react";
import {
    Zap,
    DollarSign,
    Code2,
    Users,
    RefreshCw,
    Globe,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: DollarSign,
            title: "Cost-Effective Mobile Solutions",
            description: "Save up to 50% on development costs compared to separate native builds without losing feature parity.",
            gradient: "from-[#00b4d8] to-[#0077b6]",
            shadowColor: "rgba(0, 180, 216, 0.3)",
        },
        {
            icon: Zap,
            title: "Time-to-Market Advantage",
            description: "Launch on both iOS and Android in half the time, letting you capture market share while competitors are still coding.",
            gradient: "from-[#0077b6] to-[#00b4d8]",
            shadowColor: "rgba(0, 119, 182, 0.3)",
        },
        {
            icon: Sparkles,
            title: "Post-2025 SEO & EEAT Strategy",
            description: <><span className="text-inherit">Our content and apps are optimized for Google’s latest core updates, ensuring your brand ranks high and builds trust with our </span><Link href="/services/seo-services" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">SEO</Link> strategy.</>,
            gradient: "from-[#48cae4] to-[#00b4d8]",
            shadowColor: "rgba(72, 202, 228, 0.3)",
        },
        {
            icon: Users,
            title: "Expert Authoritative Team",
            description: "With 120+ successful projects, our team consists of verified industry experts in HTML5, JavaScript, and Native Bridge integration.",
            gradient: "from-[#00b4d8] to-[#48cae4]",
            shadowColor: "rgba(0, 180, 216, 0.3)",
        },
        {
            icon: RefreshCw,
            title: "Proactive Hybrid App Maintenance",
            description: <><span className="text-inherit">Post-launch support includes performance monitoring, periodic security audits, and regular updates for latest OS versions and comprehensive </span><Link href="/services/additional-support-services" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">maintenance</Link>.</>,
            gradient: "from-[#0077b6] to-[#48cae4]",
            shadowColor: "rgba(0, 119, 182, 0.3)",
        },
        {
            icon: Globe,
            title: "Full Lifecycle Support",
            description: "From Web to App conversion to hybrid app performance tuning, we are your long-term growth partner.",
            gradient: "from-[#48cae4] to-[#0077b6]",
            shadowColor: "rgba(72, 202, 228, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #00b4d8, #0077b6)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #0077b6, #48cae4)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 180, 216, 0.1)",
                            borderColor: "rgba(0, 180, 216, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Hybrid Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Get the competitive edge with a partner that understands the 2026 digital landscape.
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
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ background: reason.shadowColor }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#00b4d8" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                            bg-gradient-to-br ${reason.gradient}
                                        `}
                                        style={{
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "var(--accent-cyan-text)" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 transition-all duration-500
                                            bg-gradient-to-r ${reason.gradient}
                                        `}
                                        style={{
                                            width: isHovered ? "100%" : "0%",
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
