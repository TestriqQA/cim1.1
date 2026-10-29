"use client";

import { useState } from "react";
import {
    Zap,
    DollarSign,
    Clock,
    Users,
    RefreshCw,
    HeartHandshake,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Native-Like Performance",
            description: "Gone are the days of laggy hybrid apps. Our optimization techniques and use of native modules ensure your app performs at 60fps, indistinguishable from native apps.",
            gradient: "from-[#667eea] to-[#764ba2]",
            shadowColor: "rgba(102, 126, 234, 0.3)",
        },
        {
            icon: DollarSign,
            title: "40% Cost Savings",
            description: <><span className="text-inherit">Developing two separate native apps is expensive. Our </span><Link href="/services/mobile-app-development/hybrid-app-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Hybrid Mobile App Development Company</Link> approach saves you up to 40% by maintaining a Unified Codebase, reducing resource requirements.</>,
            gradient: "from-[#764ba2] to-[#667eea]",
            shadowColor: "rgba(118, 75, 162, 0.3)",
        },
        {
            icon: Clock,
            title: "Faster Time-to-Market",
            description: "Beat the competition. With Hot Reload and Fast Refresh, we iterate quickly. You get a market-ready product in weeks, not months.",
            gradient: "from-[#00d4ff] to-[#667eea]",
            shadowColor: "rgba(0, 212, 255, 0.3)",
        },
        {
            icon: Users,
            title: "Code Reusability & Scalability",
            description: "We write code once and use it everywhere. High Code Reusability means easier updates and scaling. Add new features to both platforms instantly.",
            gradient: "from-[#667eea] to-[#00d4ff]",
            shadowColor: "rgba(102, 126, 234, 0.3)",
        },
        {
            icon: RefreshCw,
            title: "Dedicated React & Flutter Experts",
            description: "Work with the best. Our team comprises senior engineers who contribute to the open-source community and stay ahead of Post-2025 core updates.",
            gradient: "from-[#764ba2] to-[#00d4ff]",
            shadowColor: "rgba(118, 75, 162, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Post-Launch Support",
            description: <><span className="text-inherit">We are your long-term partner. We provide ongoing cross-platform app </span><Link href="/services/additional-support-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">maintenance and support</Link>, ensuring your app remains compatible with the latest OS versions and devices.</>,
            gradient: "from-[#00d4ff] to-[#764ba2]",
            shadowColor: "rgba(0, 212, 255, 0.3)",
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
                    style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #764ba2, #00d4ff)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(102, 126, 234, 0.1)",
                            borderColor: "rgba(102, 126, 234, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-indigo-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Results-Driven</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Cross-Platform App Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Maximize ROI with reduced TTM and development costs without sacrificing quality or performance.
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
                                        borderColor: isHovered ? "#667eea" : "var(--border-color)",
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
                                            color: isHovered ? "var(--accent-indigo-text)" : "var(--foreground)",
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
