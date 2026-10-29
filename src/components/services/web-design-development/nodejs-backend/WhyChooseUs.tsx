"use client";

import { useState } from "react";
import {
    Award,
    Zap,
    Shield,
    Users,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Award,
            title: "Senior Engineers Only",
            description:
                "Your project is handled by experienced backend engineers building production systems.",
            gradient: "from-[#339933] to-[#215732]",
        },
        {
            icon: Zap,
            title: <Link href="/services/seo-services/technical-seo-services" className="hover:text-[#339933] transition-colors">Performance First</Link>,
            description:
                "Every API we build is optimized for speed. We obsess over response times and throughput.",
            gradient: "from-[#68a063] to-[#339933]",
        },
        {
            icon: Shield,
            title: "Security Focused",
            description:
                "Security isn't an afterthought. We implement best practices from day one.",
            gradient: "from-[#339933] to-[#68a063]",
        },
        {
            icon: Users,
            title: "Collaborative Process",
            description:
                "We work alongside your team with clear communication and transparent progress.",
            gradient: "from-[#215732] to-[#339933]",
        },
        {
            icon: HeadphonesIcon,
            title: "Ongoing Support",
            description:
                "We don't disappear after launch. Ongoing maintenance and support as you scale.",
            gradient: "from-[#68a063] to-[#215732]",
        },
        {
            icon: TrendingUp,
            title: "Built to Scale",
            description:
                "Architecture that grows with your business - from MVP to millions of users.",
            gradient: "from-[#339933] to-[#68a063]",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .card-shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(51, 153, 51, 0.1),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#339933" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#68a063" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Zap className="w-4 h-4" style={{ color: "#339933" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Why Work With Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #339933, #68a063)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Backend
                        </span>{" "}
                        Partners
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We build backends that power successful products,
                        not just check boxes.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Glow effect behind card */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                        ${isHovered ? "opacity-30" : "opacity-0"}
                                    `}
                                    style={{
                                        background: "linear-gradient(135deg, #339933, #68a063)",
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 rounded-2xl border overflow-hidden
                                        transition-all duration-500 ease-out
                                        ${isHovered ? "shadow-2xl -translate-y-3 scale-[1.02]" : "shadow-md"}
                                        ${isHovered ? "card-shimmer" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? "#33993350" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#339933" }}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-4">
                                        <div
                                            className={`
                                                w-14 h-14 rounded-xl flex items-center justify-center
                                                transition-all duration-500
                                                ${isHovered ? "scale-110 rotate-6" : ""}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #339933, #215732)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(51, 153, 51, 0.5)" : "0 4px 16px rgba(51, 153, 51, 0.3)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Animated ring on hover */}
                                        <div
                                            className={`
                                                absolute inset-0 w-14 h-14 rounded-xl border-2
                                                transition-all duration-500
                                                ${isHovered ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: "#339933" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-2 transition-all duration-300"
                                        style={{
                                            color: isHovered ? "#339933" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`
                                            text-sm leading-relaxed transition-all duration-300
                                            ${isHovered ? "translate-x-1" : ""}
                                        `}
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-500
                                            ${isHovered ? "w-full" : "w-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(90deg, #339933, #68a063)",
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
