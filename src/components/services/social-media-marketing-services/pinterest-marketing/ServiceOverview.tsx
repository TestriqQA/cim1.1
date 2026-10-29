"use client";

import { useState } from "react";
import {
    Megaphone,
    Image as ImageIcon,
    ShoppingCart,
    TrendingUp,
    Search,
    BarChart,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Pinterest brand color
    const pinterestRed = "#E60023";

    const services = [
        {
            icon: Megaphone,
            title: <Link href="/services/performance-marketing" className="hover:underline">Pinterest Advertising</Link>,
            description: "Promoted Pins, Shopping Ads, and Video campaigns that reach users at the moment of inspiration.",
            color: pinterestRed,
        },
        {
            icon: ImageIcon,
            title: "Pin Strategy & Creation",
            description: "Eye-catching pins optimized for discovery, engagement, and click-through rates.",
            color: "#FF6B6B",
        },
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Shopping Catalog Integration</Link>,
            description: "Seamless product catalog sync to enable shoppable pins and drive direct sales.",
            color: "#4ECDC4",
        },
        {
            icon: TrendingUp,
            title: "Trend Analysis",
            description: "Leverage Pinterest Trends to create timely content that captures seasonal demand.",
            color: "#FFE66D",
        },
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:underline">Pinterest SEO</Link>,
            description: "Keyword-optimized boards, pins, and descriptions to maximize organic discovery.",
            color: "#95E1D3",
        },
        {
            icon: BarChart,
            title: <Link href="/services/seo-services/technical-seo-services" className="hover:underline">Analytics & Insights</Link>,
            description: "Comprehensive reporting on pin performance, audience insights, and conversion tracking.",
            color: "#DDA0DD",
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
                        backgroundColor: pinterestRed,
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
                                backgroundColor: `${pinterestRed}10`,
                                borderColor: `${pinterestRed}30`,
                                color: "var(--accent-red-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Pinterest{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Marketing Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        End-to-end Pinterest marketing to inspire your audience and drive measurable results.
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
