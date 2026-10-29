"use client";

import { useState } from "react";
import {
    ShoppingBag,
    Tag,
    Layers,
    Code,
    Smartphone,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const services = [
        {
            icon: ShoppingBag,
            title: "Product Page Optimization",
            description: <>Transform underperforming product pages into revenue engines. Our ecommerce <Link href="/services/seo-services/on-page-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>product page SEO</Link> service crafts compelling titles, descriptions, and meta tags optimized for high-intent buyer keywords. We analyze user intent for ecommerce search to match what shoppers actually search for - implementing semantic search optimization that captures long-tail product queries. Each page gets unique, conversion-focused content that ranks and converts.</>,
            color: commerceBlue,
        },
        {
            icon: Layers,
            title: "Category Architecture & Faceted Navigation SEO",
            description: <>Structuring intuitive category pages that capture broad search intent while solving the faceted navigation SEO challenge. We implement canonical tags, parameter handling, and crawl budget optimization to ensure search engines index the right pages. Our <Link href="/blog/mastering-seo-organic-growth" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>internal linking</Link> for ecommerce stores strategy passes authority to your best-selling products while improving user navigation.</>,
            color: "#8B5CF6",
        },
        {
            icon: Code,
            title: "Technical SEO for Ecommerce Websites",
            description: <>Deep <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>technical ecommerce SEO</Link> audit identifies critical issues killing your rankings: duplicate content from filter pages, orphaned products, slow page speed, mobile usability errors, and crawl budget waste. We fix XML sitemap errors, implement proper robots.txt directives, optimize Core Web Vitals for ecommerce sites (LCP, FID, CLS), and ensure clean indexing for thousands of SKUs. Perfect for enterprise ecommerce SEO services requiring complex technical solutions.</>,
            color: "#3B82F6",
        },
        {
            icon: Tag,
            title: "Schema Markup for Ecommerce Products",
            description: <>Implementing Product, Review, Offer, and Breadcrumb structured data to get rich snippets in search results - increasing CTR by 30-40%. We add <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>schema markup</Link> for price, availability, ratings, brand, and SKU to make your products stand out in SERPs with star ratings, pricing info, and stock status visible before users click.</>,
            color: "#F59E0B",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Ecommerce SEO & Page Speed",
            description: <>Ensuring seamless, fast, responsive shopping experiences for <Link href="/blog/web-performance-optimization-speed" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>mobile-first</Link> users who represent 65%+ of ecommerce traffic. We optimize images, leverage browser caching, minimize JavaScript, and implement lazy loading to achieve sub-2-second load times - critical for ecommerce website optimization and Google&apos;s mobile-first indexing.</>,
            color: "#10B981",
        },
        {
            icon: TrendingUp,
            title: "Ecommerce Conversion Rate Optimization (CRO)",
            description: <>Aligning user experience with SEO to not just get traffic, but drive sales. We A/B test product page layouts, optimize call-to-action buttons, streamline checkout flows, and reduce cart abandonment. Our ecommerce <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>conversion rate optimization</Link> strategy integrates heat mapping, session recording, and user behavior analysis to maximize revenue per visitor.</>,
            color: "#EF4444",
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
                    className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: commerceBlue,
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
                                backgroundColor: `${commerceBlue}10`,
                                borderColor: `${commerceBlue}30`,
                                color: "var(--accent-sky-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive Ecommerce SEO <span style={{ color: "var(--accent-sky-text)" }}>Solutions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Holistic ecommerce SEO services designed to maximize visibility for every product in your catalog and drive measurable online sales growth.
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
