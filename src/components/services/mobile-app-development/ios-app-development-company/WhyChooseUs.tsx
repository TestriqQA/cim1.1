"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Award,
    HeartHandshake,
    Users,
    Clock,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Native Performance First",
            description: <><span className="text-inherit">We prioritize native technologies. </span><Link href="/services/mobile-app-development/hybrid-app-development-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Hybrid</Link> to native iOS app conversion services are a specialty. We help clients migrate from sluggish <Link href="/services/mobile-app-development/cross-platform-app-development-company" className="text-[var(--accent-sky-text)] hover:underline underline underline-offset-2">cross-platform apps</Link>.</>,
            gradient: "from-[#007AFF] to-[#5AC8FA]",
            shadowColor: "rgba(0, 122, 255, 0.3)",
        },
        {
            icon: Shield,
            title: "Apple Guidelines Expertise",
            description: "Rejection is not an option. Our deep knowledge of the Apple Developer Program and review guidelines ensures faster time-to-market.",
            gradient: "from-[#5AC8FA] to-[#007AFF]",
            shadowColor: "rgba(90, 200, 250, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Dedicated iOS Team",
            description: "Hire a team that lives and breathes mobile. Our developers are certified experts in Custom API integration, Push Notifications, and On-device Intelligence.",
            gradient: "from-[#007AFF] to-[#0055D4]",
            shadowColor: "rgba(0, 122, 255, 0.3)",
        },
        {
            icon: Users,
            title: "Enterprise Experience",
            description: "We have scaled apps to millions of users. From iOS app migration to legacy code modernization, we handle enterprise-grade loads.",
            gradient: "from-[#5AC8FA] to-[#0055D4]",
            shadowColor: "rgba(90, 200, 250, 0.3)",
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
                    style={{ background: "linear-gradient(135deg, #007AFF, #5AC8FA)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #5AC8FA, #007AFF)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 122, 255, 0.05)",
                            borderColor: "rgba(0, 122, 255, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            iOS Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Expertise that delivers <Link href="/services/performance-marketing" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">measurable ROI</Link>.
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
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500 pointer-events-none
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
                                        borderColor: isHovered ? "#007AFF" : "var(--border-color)",
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
                                            color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
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
        </section >
    );
}
