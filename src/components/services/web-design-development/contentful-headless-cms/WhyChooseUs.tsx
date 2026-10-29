"use client";

import { useState } from "react";
import {
    Layers,
    Zap,
    Lock,
    Globe,
    Award,
    Headphones,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Layers,
            title: "Composable Architecture",
            description: <><span className="text-inherit">Build modular, </span><Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">reusable content</Link> structures that adapt to any channel or experience without refactoring.</>,
            gradient: "from-blue-600 via-cyan-500 to-sky-500",
            bgColor: "rgba(2, 134, 255, 0.15)",
            iconColor: "#0286FF",
            particles: 3,
        },
        {
            icon: Zap,
            title: "High Availability",
            description: "Enterprise-grade reliability with global CDN, automatic failover, and high availability.",
            gradient: "from-cyan-500 via-blue-500 to-indigo-500",
            bgColor: "rgba(0, 89, 200, 0.15)",
            iconColor: "#0059C8",
            particles: 4,
        },
        {
            icon: Globe,
            title: "Global CDN Delivery",
            description: <><span className="text-inherit">Content delivered at the edge with </span><Link href="/blog/web-performance-optimization-speed" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">99ms average response times</Link> across 200+ points of presence worldwide.</>,
            gradient: "from-sky-500 via-blue-500 to-cyan-500",
            bgColor: "rgba(77, 163, 255, 0.15)",
            iconColor: "#4DA3FF",
            particles: 5,
        },
        {
            icon: Lock,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-indigo-text)] transition-colors">Enterprise Security</Link>,
            description: "SOC 2 Type II certified, GDPR compliant, with SSO, role-based access, and comprehensive audit logs.",
            gradient: "from-indigo-500 via-blue-500 to-violet-500",
            bgColor: "rgba(99, 102, 241, 0.15)",
            iconColor: "#6366f1",
            particles: 3,
        },
        {
            icon: Award,
            title: "Developer Experience",
            description: "Robust APIs, comprehensive SDKs, and extensive documentation for rapid development.",
            gradient: "from-blue-500 via-sky-500 to-cyan-500",
            bgColor: "rgba(14, 165, 233, 0.15)",
            iconColor: "#0ea5e9",
            particles: 4,
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-teal-text)] transition-colors">Premium Support</Link>,
            description: "Dedicated success managers, 24/7 support, and professional services for enterprise customers.",
            gradient: "from-cyan-500 via-teal-500 to-emerald-500",
            bgColor: "rgba(20, 184, 166, 0.15)",
            iconColor: "#14b8a6",
            particles: 5,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div
                    className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(2, 134, 255, 0.3), transparent)",
                        animation: "float 8s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(77, 163, 255, 0.3), transparent)",
                        animation: "float 10s ease-in-out infinite",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(2, 134, 255, 0.1), rgba(0, 89, 200, 0.1))",
                            border: "1px solid rgba(2, 134, 255, 0.2)",
                        }}>
                        <Award className="w-4 h-4" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "var(--accent-sky-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Contentful </span>{" "}
                        <span
                            className="inline-block"
                            style={{
                                background: "linear-gradient(135deg, #0286FF, #4DA3FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        The enterprise composable content platform powering digital experiences at scale.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredIndex(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredIndex(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredIndex(hoveredIndex === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Outer glow effect */}
                                <div
                                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${reason.bgColor}, transparent)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-700 overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? reason.iconColor : "var(--border-color)",
                                        transform: isHovered
                                            ? "translateY(-12px) rotateX(2deg)"
                                            : "translateY(0) rotateX(0deg)",
                                        boxShadow: isHovered
                                            ? `0 25px 50px -12px ${reason.bgColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated gradient background overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${reason.bgColor}, transparent 70%)`,
                                        }}
                                    />

                                    {/* Floating particles */}
                                    {isHovered && (
                                        <div className="absolute inset-0 pointer-events-none">
                                            {Array.from({ length: reason.particles }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1.5 h-1.5 rounded-full"
                                                    style={{
                                                        background: reason.iconColor,
                                                        left: `${20 + i * 25}%`,
                                                        top: `${30 + i * 15}%`,
                                                        animation: `float-particle ${2 + i * 0.5}s ease-in-out infinite`,
                                                        animationDelay: `${i * 0.3}s`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Icon container */}
                                    <div className="relative mb-6 inline-block">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 bg-gradient-to-br ${reason.gradient}`}
                                            style={{
                                                transform: isHovered
                                                    ? "rotate(360deg) scale(1.15)"
                                                    : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 10px 30px ${reason.bgColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-all duration-700"
                                                style={{
                                                    filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
                                                }}
                                            />
                                        </div>

                                        {/* Orbiting ring */}
                                        {isHovered && (
                                            <div
                                                className="absolute inset-0 rounded-2xl border-2"
                                                style={{
                                                    borderColor: `${reason.iconColor}40`,
                                                    borderTopColor: reason.iconColor,
                                                    animation: "spin-slow 3s linear infinite",
                                                    transform: "scale(1.3)",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3
                                            className="text-xl font-bold mb-3 transition-all duration-500"
                                            style={{
                                                color: isHovered ? reason.iconColor : "var(--foreground)",
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                            }}
                                        >
                                            {reason.title}
                                        </h3>
                                        <p
                                            className="leading-relaxed transition-all duration-500"
                                            style={{
                                                color: "var(--secondary-text)",
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                            }}
                                        >
                                            {reason.description}
                                        </p>

                                        {/* Animated progress bar */}
                                        <div
                                            className="mt-6 h-1 rounded-full overflow-hidden"
                                            style={{ backgroundColor: "var(--border-color)" }}
                                        >
                                            <div
                                                className="h-full rounded-full transition-all duration-700"
                                                style={{
                                                    width: isHovered ? "100%" : "0%",
                                                    background: `linear-gradient(90deg, ${reason.gradient})`,
                                                }}
                                            />
                                        </div>

                                        {/* Number indicator */}
                                        <div
                                            className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl opacity-0 group-hover:opacity-10 transition-all duration-500"
                                            style={{
                                                color: reason.iconColor,
                                                transform: isHovered ? "scale(1)" : "scale(0.5)",
                                            }}
                                        >
                                            {String(idx + 1).padStart(2, "0")}
                                        </div>
                                    </div>

                                    {/* Corner decorations */}
                                    <div
                                        className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-20 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 50%, ${reason.bgColor})`,
                                            borderRadius: "100% 0 0 0",
                                            transform: isHovered ? "translate(0, 0)" : "translate(25%, 25%)",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -30px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                @keyframes float-particle {
                    0% {
                        transform: translateY(0) translateX(0) scale(0);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-30px) translateX(10px) scale(1);
                    }
                    100% {
                        transform: translateY(-60px) translateX(-5px) scale(0);
                        opacity: 0;
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg) scale(1.3);
                    }
                    to {
                        transform: rotate(360deg) scale(1.3);
                    }
                }

                .group {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
