"use client";

import { useState } from "react";
import { TrendingUp, ShieldCheck, Zap, BarChart3, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const benefits = [
        {
            icon: TrendingUp,
            decorIcon: BarChart3,
            title: "Data-Driven Organic Growth SEO",
            description: "We don't guess. We analyze. Using advanced tools (Semrush, Ahrefs, Python scripts), we reverse-engineer competitor success and identify gaps in the SERPs (Search Engine Results Pages) to give you a competitive edge.",
            highlight: "Analytics-First",
            color: "#3b82f6",
        },
        {
            icon: ShieldCheck,
            decorIcon: Sparkles,
            title: "White Hat Organic SEO Services",
            description: <span>Safety first. We strictly adhere to Google's webmaster guidelines. Our ethical, White hat <Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">organic SEO services</Link> protect your site from penalties while building a "moat" around your rankings that survives core updates.</span>,
            highlight: "Google Compliant",
            color: "#10b981",
        },
        {
            icon: Zap,
            decorIcon: ArrowUpRight,
            title: "Technical Excellence",
            description: <span>Our team has delivered rigorously tested web architectures for clients. We speak the language of developers, ensuring your <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">Technical SEO Audit</Link> translates into perfect code, schema, and Core Web Vitals scores.</span>,
            highlight: "Dev-Ready Code",
            color: "#8b5cf6",
        },
        {
            icon: BarChart3,
            decorIcon: CheckCircle2,
            title: "Continuous Optimization",
            description: <span>SEO is a marathon, not a sprint. We provide Organic search engine optimization for growth that evolves. We monitor daily, adapting to algorithm shifts like the <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">2026 Helpful Content Update</Link> to keep you ahead.</span>,
            highlight: "Always Improving",
            color: "#f59e0b",
        },
    ];

    // Map per-card brand hue (used for borders/glows/icons) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textColorMap: Record<string, string> = {
        "#3b82f6": "var(--brand-blue-text)",
        "#10b981": "var(--accent-green-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#f59e0b": "var(--accent-amber-text)",
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>
            {/* Animated background elements */}

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <CheckCircle2 className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-green-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Partner with Our <span style={{ color: "var(--accent-green-text)" }}>SEO Agency</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We aren't just another vendor; we are your growth partners. Here is why global brands trust our Organic SEO Consulting:
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? benefit.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                    }}
                                >
                                    {/* Floating decorative icon */}
                                    <div
                                        className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${benefit.color}15`,
                                            opacity: 0.6,
                                        }}
                                    >
                                        <DecorIcon className="w-6 h-6" style={{ color: benefit.color }} />
                                    </div>

                                    {/* Highlight Badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                                        style={{
                                            backgroundColor: `${benefit.color}20`,
                                            color: textColorMap[benefit.color],
                                        }}
                                    >
                                        {benefit.highlight}
                                    </div>

                                    {/* Animated gradient background */}

                                    {/* Icon Container */}
                                    <div className="relative my-6">
                                        <div
                                            className="relative w-14 h-14 rounded-xl p-3"
                                            style={{ backgroundColor: `${benefit.color}20` }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: benefit.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-all duration-300"
                                        style={{
                                            color: isHovered ? textColorMap[benefit.color] : "var(--foreground)",
                                        }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                        }}
                                    >
                                        {benefit.description}
                                    </p>
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

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}