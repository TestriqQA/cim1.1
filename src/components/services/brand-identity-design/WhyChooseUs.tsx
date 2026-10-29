"use client";

import { useState } from "react";
import { CheckCircle2, Lightbulb, Target, Palette, Sparkles, TrendingUp, Shield, Award, Search } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Theme-aware text equivalents. Only for TEXT sites — backgrounds/gradients/
    // shadows keep the raw hex so `${color}NN`-style interpolation stays valid.
    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#fab900": "var(--accent-amber-text)",
            "#ee6500": "var(--accent-orange-text)",
            "#bc3feb": "var(--brand-purple-text)",
            "#00b5ca": "var(--accent-teal-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const benefits = [
        {
            icon: TrendingUp,
            decorIcon: CheckCircle2,
            title: "95% Client Retention",
            description: "We prioritize long-term partnerships. Our professional brand guidelines ensure your brand evolves with your business, delivering consistent ROI.",
            highlight: "High Retention",
            color: "#fab900",
        },
        {
            icon: Target,
            decorIcon: Sparkles,
            title: "Global Expertise",
            description: <span>We understand how design translates to code. Our assets are optimized for <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">React</Link>, <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Next.js</Link>, and <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">mobile frameworks</Link>, ensuring 100% implementation fidelity.</span>,
            highlight: "Tech-Ready",
            color: "#ee6500",
        },
        {
            icon: Search,
            decorIcon: Award,
            title: "SEO-First Design",
            description: <span>We integrate <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">Graphic Design Principles</Link> with <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">SEO visibility</Link>. Our assets are optimized for Core Web Vitals, aiding your organic ranking efforts.</span>,
            highlight: "SEO-Optimized",
            color: "#bc3feb",
        },
        {
            icon: Award,
            decorIcon: Shield,
            title: "Award-Winning",
            description: "Explore our creative brand identity design portfolio featuring work for non-profits, hospitality, and real estate firms.",
            highlight: "Top Rated",
            color: "#00b5ca",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <CheckCircle2 className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-amber-text)" }}>
                            WHY CHOOSE US
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Why Partner with Our <span style={{ color: "var(--accent-amber-text)" }}>Creative Team</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We combine strategic thinking with creative excellence to build brands that truly stand out.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const DecorIcon = benefit.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? benefit.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 20px 40px -12px ${benefit.color}40` : "none",
                                    }}
                                >
                                    {/* Decorative icon */}
                                    <div
                                        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                                        style={{
                                            backgroundColor: `${benefit.color}15`,
                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                            opacity: isHovered ? 1 : 0.6,
                                        }}
                                    >
                                        <DecorIcon className="w-6 h-6" style={{ color: benefit.color }} />
                                    </div>

                                    {/* Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                                        style={{
                                            backgroundColor: `${benefit.color}20`,
                                            color: textAccent(benefit.color),
                                            transform: isHovered ? "translateX(0) scale(1)" : "translateX(-20px) scale(0.9)",
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    >
                                        {benefit.highlight}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative my-6">
                                        <div
                                            className="relative w-14 h-14 rounded-xl p-3 transition-all duration-500"
                                            style={{
                                                backgroundColor: `${benefit.color}20`,
                                                transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: benefit.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300"
                                        style={{ color: isHovered ? textAccent(benefit.color) : "var(--foreground)" }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                        style={{
                                            backgroundColor: benefit.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -20px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(20px, 20px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
            `}</style>
        </section>
    );
}
