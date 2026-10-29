"use client";

import { useState } from "react";
import {
    Camera,
    Film,
    ShoppingBag,
    Users,
    Megaphone,
    BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Theme-aware TEXT variants of the per-service accent hues below.
    // The raw hues stay in the data (they drive gradients/borders/icons/tints);
    // this map is applied ONLY where a hue colors text.
    const accentTextMap: Record<string, string> = {
        "#E1306C": "var(--accent-pink-text)",
        "#C13584": "var(--accent-violet-text)",
        "#F77737": "var(--accent-orange-text)",
        "#833AB4": "var(--accent-violet-text)",
        "#FD1D1D": "var(--accent-red-text)",
        "#405DE6": "var(--accent-indigo-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex] ?? hex;

    const services = [
        {
            icon: Film,
            title: "Instagram Reels Marketing & Production Agency",
            description: <><Link href="/services/social-media-marketing-services/video-marketing-agency" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Reels</Link> are the primary growth lever in 2026. Our production team crafts viral-worthy, short-form video content that hooks viewers in the first 0.5 seconds.</>,
            color: "#E1306C",
        },
        {
            icon: Camera,
            title: "Custom Instagram Content Creation Services",
            description: <>Static images aren't enough. We build a cohesive <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Brand Identity</Link> and Aesthetic Design Service that makes your profile a destination.</>,
            color: "#C13584",
        },
        {
            icon: Megaphone,
            title: "Instagram Advertising Services & Ad Management",
            description: <>Go beyond 'Boost Post.' Our <Link href="/services/performance-marketing" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram ad campaign management</Link> for ecommerce utilizes advanced Meta Pixel tracking and CAPI integration.</>,
            color: "#F77737",
        },
        {
            icon: Users,
            title: "Influencer Partnerships & UGC",
            description: "Integrating User-Generated Content (UGC) and connecting with the right influencers to build iron-clad trust.",
            color: "#833AB4",
        },
        {
            icon: ShoppingBag,
            title: "Instagram Shopping & Commerce",
            description: <>Set up and optimize your <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram Shop</Link> to drive direct sales with shoppable posts and product tags.</>,
            color: "#FD1D1D",
        },
        {
            icon: BarChart3,
            title: "Post-Conversion & Retargeting",
            description: "Capturing high-intent users who’ve interacted with your brand via retargeting loops and full-funnel ads.",
            color: "#405DE6",
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
                        background: "linear-gradient(135deg, #E1306C, #C13584)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #F77737, #FCAF45)",
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
                                background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))",
                                color: "var(--accent-pink-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Instagram Marketing
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Transform your profile into a revenue-generating engine with our suite of specialized Instagram Management Services.
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
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl opacity-0 transition-all duration-500 blur-xl
                                        ${isHovered ? "opacity-30" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden
                                        ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-32 h-32 transition-all duration-500
                                            ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}
                                        `}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}
                                            `}
                                            style={{
                                                background: isHovered
                                                    ? `linear-gradient(135deg, ${service.color}, ${service.color}CC)`
                                                    : `${service.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className={`w-8 h-8 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                                                style={{
                                                    color: isHovered ? "white" : service.color,
                                                }}
                                            />
                                        </div>

                                        {/* Floating particles */}
                                        {isHovered && (
                                            <>
                                                <div
                                                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                                <div
                                                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color, animationDelay: "0.3s" }}
                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isHovered ? textAccent(service.color) : "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
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
