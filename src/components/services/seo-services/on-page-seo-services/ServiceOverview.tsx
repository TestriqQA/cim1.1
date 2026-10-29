"use client";

import { useState } from "react";
import {
    FileText,
    Type,
    Image as ImageIcon,
    Link2,
    Gauge,
    Code,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const services = [
        {
            icon: Type,
            title: <Link href="/services/seo-services" className="hover:underline">Multi-Step Title Tag Optimization</Link>,
            description: "We don't just add keywords; we engineer clicks. Our on-page SEO keyword mapping services ensure every title tag is a high-CTR hook that satisfies user intent.",
            color: seoGreen,
        },
        {
            icon: FileText,
            title: <Link href="/services/seo-services/seo-content-writing-services" className="hover:underline">Meta Description & Snippet Engineering</Link>,
            description: "Maximize your real estate on the SERP. We craft persuasive descriptions that improve CTR by 20%+ while naturally integrating on-page SEO variants.",
            color: "#3B82F6",
        },
        {
            icon: ImageIcon,
            title: <Link href="/services/web-design-development" className="hover:underline">Performance-First Image Optimization</Link>,
            description: "Speed is a ranking factor. Our On-page SEO image optimization services include WebP conversion, lazy loading, and accessibility-rich alt text for visual search dominance.",
            color: "#F59E0B",
        },
        {
            icon: Link2,
            title: <Link href="/services/seo-services/link-building" className="hover:underline">Advanced Internal Linking Strategy</Link>,
            description: "Build a topic cluster that search engines love. We use semantic silos to distribute link equity, ensuring your priority pages rank faster.",
            color: "#8B5CF6",
        },
        {
            icon: Gauge,
            title: <Link href="/services/web-design-development" className="hover:underline">Core Web Vitals & Page Speed</Link>,
            description: "2026 updates demand speed. We optimize LCP, FID, and CLS, ensuring a seamless user experience SEO that keeps visitors engaged.",
            color: "#EC4899",
        },
        {
            icon: Code,
            title: <Link href="/services/seo-services" className="hover:underline">High-E-E-A-T Schema Markup Implementation</Link>,
            description: "Speak Google's language. We implement custom on-page SEO schema markup implementation (JSON-LD) for rich snippets, FAQs, and organization authority.",
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
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: seoGreen,
                        animationDuration: "4s",
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
                                backgroundColor: `${seoGreen}10`,
                                borderColor: `${seoGreen}30`,
                                color: "var(--accent-green-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Expert On-Page SEO{" "}
                        <span style={{ color: "var(--accent-green-text)" }}>
                            Optimization for Scalable Growth
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Generic SEO is dead. Our framework focuses on deep <strong><Link href="/services/seo-services/technical-seo-services" className="hover:underline underline underline-offset-2">on-page SEO technical audits</Link> and implementation</strong> to ensure your site is crawlable, relevant, and authoritative.
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
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "scale-110" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
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
