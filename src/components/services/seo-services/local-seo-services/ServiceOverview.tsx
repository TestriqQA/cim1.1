"use client";

import { useState } from "react";
import {
    MapPin,
    MessageSquare,
    Link as LinkIcon,
    Layout,
    Navigation,
    Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const services = [
        {
            icon: MapPin,
            title: <Link href="/services/seo-services" className="hover:underline">Google Business Profile Management</Link>,
            description: "Complete GBP setup, verification & ongoing optimization - We claim and optimize every field in your Google Business Profile (formerly GMB), including Q&As, posts, booking buttons, and product catalogs.",
            color: localAmber,
        },
        {
            icon: LinkIcon,
            title: <span><Link href="/services/seo-services/link-building" className="hover:underline">Local Citations</Link> & <Link href="/services/seo-services/technical-seo-services" className="hover:underline">NAP Consistency</Link></span>,
            description: "Building authoritative citations across 50+ high-DA directories - Inconsistent NAP data is the #1 reason local businesses fail to rank. We manually audit and correct your business listings.",
            color: "#3B82F6",
        },
        {
            icon: MessageSquare,
            title: <Link href="/services/performance-marketing" className="hover:underline">Review Management & Reputation SEO</Link>,
            description: "Generate 5-star reviews & professionally respond to all feedback - Reviews account for 15.4% of Google's local ranking algorithm. We implement automated SMS/email review request workflows.",
            color: "#10B981",
        },
        {
            icon: Layout,
            title: <span><Link href="/services/seo-services/on-page-seo-services" className="hover:underline">On-Page Localization</Link> & <Link href="/services/web-design-development/landing-pages" className="hover:underline">Landing Pages</Link></span>,
            description: <>Location-specific schema, keywords & geo-targeted content - We create dedicated <Link href="/services/web-design-development/landing-pages" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">landing pages</Link> for each service area with unique LocalBusiness schema markup and city-specific keywords.</>,
            color: "#8B5CF6",
        },
        {
            icon: Navigation,
            title: <Link href="/services/seo-services" className="hover:underline">Google Map Pack Optimization</Link>,
            description: "Proprietary tactics to secure the Local 3-Pack - The Map Pack appears above organic results for 93% of local searches. We optimize for Google's proximity, relevance, and prominence signals.",
            color: "#EC4899",
        },
        {
            icon: Smartphone,
            title: <span><Link href="/services/web-design-development" className="hover:underline">Mobile</Link> & 'Near Me' Search Optimization</span>,
            description: 'Flawless mobile experience for on-the-go searchers - 76% of local searches happen on mobile devices, with 28% converting within 24 hours. We ensure your site has 2-second load times on 4G.',
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
                    className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: localAmber,
                        animationDuration: "6s",
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
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${localAmber}30`,
                                color: "var(--accent-amber-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Local SEO <span style={{ color: "var(--accent-amber-text)" }}>Solutions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive strategies to dominate your neighborhood's search results. Our full-service local SEO company provides end-to-end solutions tailored to your geographic market.
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
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rounded-full" : ""}
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
                                        className="text-xl font-bold mb-3 transition-colors duration-300 relative z-10"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed relative z-10"
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
