"use client";

import { useState } from "react";
import {
    Award,
    Target,
    Layers,
    Zap,
    Globe,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Award,
            title: "Certified Shopify Partners",
            description:
                "As a certified Shopify marketing agency, we have direct access to the latest beta features and priority support from Shopify experts.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
        },
        {
            icon: Target,
            title: "Conversion-First Approach",
            description:
                "Our Shopify conversion rate optimization (CRO) services help clients see a 35% average increase in AOV through strategic upsells.",
            gradient: "from-[#5c8a1e] to-[#b4d97c]",
        },
        {
            icon: TrendingUp,
            title: "2026 SEO Readiness",
            description:
                <span>Optimized for the post-December 2025 Google core update, we implement high-E-E-A-T content and JSON-LD schema to dominate <Link href="/services/seo-services/ecommerce-seo-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">AI search results</Link>.</span>,
            gradient: "from-[#96bf48] to-[#b4d97c]",
        },
        {
            icon: Globe,
            title: "Global Scale Support",
            description:
                "Specializing in multi-currency setups and global trade nuances to help brands expand seamlessly into US, EU, and APAC markets.",
            gradient: "from-[#b4d97c] to-[#96bf48]",
        },
        {
            icon: Zap,
            title: "Thoroughly Tested Deployment",
            description:
                "Rigorous QA involving automated load testing and manual checks to ensure stable launches and maintain customer trust.",
            gradient: "from-[#5c8a1e] to-[#96bf48]",
        },
        {
            icon: Layers,
            title: "Data Security & Trust",
            description:
                "Prioritizing Shopify maintenance and ongoing support with regular security patches and GDPR/CCPA compliance audits.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
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
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
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
                        rgba(150, 191, 72, 0.1),
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
                    style={{ backgroundColor: "#96bf48" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#5c8a1e" }}
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
                        <Zap className="w-4 h-4" style={{ color: "#96bf48" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-lime-text)" }}>
                            Why Partner With Our Shopify Agency?
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            E-commerce
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Stop losing customers to slow load times and generic designs. We combine technical
                        excellence with data-driven marketing to build Shopify stores that dominate search and drive revenue.
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
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
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
                                        borderColor: isHovered ? "#96bf4850" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#96bf48" }}
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
                                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(150, 191, 72, 0.5)" : "0 4px 16px rgba(150, 191, 72, 0.3)",
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
                                            style={{ borderColor: "#96bf48" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-2 transition-all duration-300"
                                        style={{
                                            color: isHovered ? "#96bf48" : "var(--foreground)",
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
                                            background: "linear-gradient(90deg, #96bf48, #5c8a1e)",
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
