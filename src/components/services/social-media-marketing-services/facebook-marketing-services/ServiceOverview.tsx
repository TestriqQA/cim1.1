"use client";

import { useState } from "react";
import {
    Target,
    Users,
    ShoppingCart,
    Video,
    MessageCircle,
    Repeat,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Target,
            title: "Lead Generation Ads (Small Business & Enterprise)",
            description: "Capture high-quality leads directly within the Meta ecosystem. Our optimized lead forms and Facebook business ads manager services reduce friction, ensuring a seamless bridge between your ad and your CRM. We specialize in Facebook lead generation services for small business that deliver sales-ready prospects.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce & Catalog Ads (DPAs)",
            description: <>Scale your online store with Facebook ads management for <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">ecommerce</Link>. We implement Facebook dynamic product ads for retail that automatically showcase the right products to the right shoppers. Our experts are a leading <Link href="/services/web-design-development/shopify-development-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Shopify</Link> Facebook ads management agency, integrating directly with your store for real-time inventory syncing.</>,
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Video,
            title: "Video & Reels Campaigns",
            description: <>Engage audiences with high-impact Facebook <Link href="/services/social-media-marketing-services/video-marketing-agency" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">video ads</Link> marketing strategy. We design scroll-stopping Reels and video content optimized for mobile-first consumption, driving higher engagement and lower Facebook ads cost for small business 2026.</>,
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Users,
            title: "Lookalike & Custom Audiences",
            description: <>Scale your reach by targeting users identical to your best customers. Using Lookalike audience creation and Custom audience targeting, we find high-intent users who are ready to buy, maximizing your paid <Link href="/services/social-media-marketing-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">social media management</Link> budget.</>,
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Repeat,
            title: "Retargeting & Remarketing Campaigns",
            description: "Don't let interested users slip away. Our Facebook retargeting ads management agency uses advanced Facebook Pixel setup and tracking to re-engage website visitors and cart abandoners with personalized offers that close the deal.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: MessageCircle,
            title: "Messenger & WhatsApp Ads",
            description: "Start meaningful conversations. We build social media engagement services via click-to-message ads that initiate real-time dialogue, shortening the sales cycle for professional services and high-ticket items.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#1877F2",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#1877F2",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                background: "var(--card-bg)",
                                color: "var(--brand-blue-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive Facebook{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Advertising
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        As a full-service Facebook marketing agency, we provide end-to-end Facebook ads management services designed for scalability and technical excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        backgroundColor: "rgba(24, 119, 242, 0.3)",
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#1877F2",
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                                            style={{
                                                backgroundColor: "#1877F2",
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
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
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#1877F2",
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
