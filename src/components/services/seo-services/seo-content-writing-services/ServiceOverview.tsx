"use client";

import { useState } from "react";
import {
    Search,
    PenTool,
    Target,
    BarChart,
    Users,
    RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const services = [
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:underline">SEO Content Strategy</Link>,
            description: "Topic clusters, gap analysis, and 2026 trend forecasting for dominant topical authority.",
            color: contentEmerald,
        },
        {
            icon: PenTool,
            title: "SEO Content Writing Services",
            description: "High-EEAT, long-form articles with data-driven insights driving sustained traffic growth.",
            color: "#3B82F6",
        },
        {
            icon: Target,
            title: <Link href="/services/seo-services/on-page-seo-services" className="hover:underline">Content Optimization Services</Link>,
            description: "Metadata refresh, internal link audits, and LSI integration for 50%+ rank recovery.",
            color: "#F59E0B",
        },
        {
            icon: RefreshCw,
            title: "SEO Copywriting Agency",
            description: <>Conversion-focused <Link href="/services/web-design-development/landing-pages" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">landing pages</Link> elevating CTR by 20% and conversion by 15%.</>,
            color: "#8B5CF6",
        },
        {
            icon: Users,
            title: <Link href="/services/seo-services/technical-seo-services" className="hover:underline">SEO Content Audit</Link>,
            description: "Technical readiness and EEAT scoring to identify high-ROI low-hanging fruits.",
            color: "#EC4899",
        },
        {
            icon: BarChart,
            title: <Link href="/services/seo-services/on-page-seo-services" className="hover:underline">SEO Content Refresh</Link>,
            description: "Post-2025 algorithm alignment and stat updates to maintain AI-overview leadership.",
            color: "#06B6D4",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300 border-t"
            style={{
                backgroundColor: "var(--background)",
                borderColor: "#555555"
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: contentEmerald,
                        animationDuration: "5s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: `${contentEmerald}10`,
                                borderColor: `${contentEmerald}30`,
                                color: "var(--accent-green-text)",
                            }}
                        >
                            Elite SEO Content Agency
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Elite SEO Content Agency for <span style={{ color: "var(--accent-green-text)" }}>Global Market Leaders</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        In the post-December 2025 Google core update era, "content is king" is an understatement. Today, content relevance and authority are the only currencies that matter. At Cinute Infomedia, we don't just write; we architect search engine friendly content that bridges the gap between AI-driven search intent and human experience.
                        <br /><br />
                        Our SEO content strategy is rooted in deep user intent analysis, ensuring every word aligns with the specific needs of your audience whether they are in the US, EU, or APAC. From SEO copywriting agency excellence to complex topic clusters SEO, we deliver the technical depth and creative flair required to dominate the SERPs in 2026.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full
                                        ${isHovered ? "-translate-y-2" : ""}
                                    `}
                                    style={{
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    {/* Hover Gradient BG */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rounded-full rotate-90" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
                                                boxShadow: isHovered ? `0 10px 30px ${service.color}30` : "none"
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-500"
                                                style={{
                                                    color: isHovered ? "white" : "var(--foreground)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
