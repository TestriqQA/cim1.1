"use client";

import { useState } from "react";
import {
    Trophy,
    LayoutGrid,
    Shield,
    Server,
    Brain,
    HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Trophy,
            title: "Python Expertise",
            description: "Deep, dedicated Python development across diverse industries and applications.",
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            bgColor: "rgba(251, 191, 36, 0.15)",
            iconColor: "#f59e0b",
            particles: 3,
        },
        {
            icon: LayoutGrid,
            title: "Scalable Architecture",
            description: <>We design systems that grow with your business, from <Link href="/services/web-design-development/saas-development-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">startup to enterprise scale</Link>.</>,
            gradient: "from-blue-600 via-blue-500 to-cyan-500",
            bgColor: "rgba(48, 105, 152, 0.15)",
            iconColor: "#306998",
            particles: 4,
        },
        {
            icon: Shield,
            title: "Security First",
            description: <>Leveraging <Link href="/blog/cybersecurity-small-businesses" className="text-[var(--accent-green-text)] underline underline-offset-2 hover:underline">Django&apos;s built-in security features</Link> and industry best practices.</>,
            gradient: "from-emerald-500 via-green-500 to-teal-500",
            bgColor: "rgba(34, 197, 94, 0.15)",
            iconColor: "#22c55e",
            particles: 5,
        },
        {
            icon: Server,
            title: "API Specialists",
            description: "Expert REST and GraphQL API development with Django REST Framework and FastAPI.",
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgColor: "rgba(139, 92, 246, 0.15)",
            iconColor: "#8b5cf6",
            particles: 3,
        },
        {
            icon: Brain,
            title: "Data & AI Ready",
            description: <>Seamlessly integrate <Link href="/services/ai-workflows-automations-services" className="text-[var(--accent-pink-text)] underline underline-offset-2 hover:underline">machine learning</Link> and data science into your applications.</>,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            bgColor: "rgba(236, 72, 153, 0.15)",
            iconColor: "#ec4899",
            particles: 4,
        },
        {
            icon: HeartHandshake,
            title: "Ongoing Support",
            description: <>Long-term partnership with <Link href="/services/additional-support-services" className="text-[var(--accent-orange-text)] underline underline-offset-2 hover:underline">maintenance, updates</Link>, and continuous improvements.</>,
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            bgColor: "rgba(249, 115, 22, 0.15)",
            iconColor: "#f97316",
            particles: 5,
        },
    ];

    // Map per-card brand hue (used for borders/particles/rings) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textColorMap: Record<string, string> = {
        "#f59e0b": "var(--accent-amber-text)",
        "#306998": "var(--brand-blue-text)",
        "#22c55e": "var(--accent-green-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#ec4899": "var(--accent-pink-text)",
        "#f97316": "var(--accent-orange-text)",
    };

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
                    className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-float"
                    style={{
                        background: "radial-gradient(circle, rgba(48, 105, 152, 0.3), transparent)",
                        animationDuration: "8s",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl animate-float"
                    style={{
                        background: "radial-gradient(circle, rgba(255, 212, 59, 0.3), transparent)",
                        animationDuration: "10s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(48, 105, 152, 0.1), rgba(75, 139, 190, 0.1))",
                            border: "1px solid rgba(48, 105, 152, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why We&apos;re the </span>{" "}
                        <span
                            className="inline-block"
                            style={{
                                background: "linear-gradient(135deg, #306998, #4B8BBE)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Right Choice
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Deep Python expertise combined with a focus on scalable, maintainable solutions.
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
                                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg"
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
                                                    className="absolute w-1.5 h-1.5 rounded-full animate-float-particle"
                                                    style={{
                                                        background: reason.iconColor,
                                                        left: `${20 + i * 25}%`,
                                                        top: `${30 + i * 15}%`,
                                                        animationDelay: `${i * 0.3}s`,
                                                        animationDuration: `${2 + i * 0.5}s`,
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
                                                className="absolute inset-0 rounded-2xl border-2 animate-spin-slow"
                                                style={{
                                                    borderColor: `${reason.iconColor}40`,
                                                    borderTopColor: reason.iconColor,
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3
                                            className="text-xl font-bold mb-3 transition-all duration-500"
                                            style={{
                                                color: isHovered ? textColorMap[reason.iconColor] : "var(--foreground)",
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
                                                color: textColorMap[reason.iconColor],
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

                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }

                .animate-float-particle {
                    animation: float-particle 2s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }

                .group {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
