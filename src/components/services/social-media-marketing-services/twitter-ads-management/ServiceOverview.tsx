"use client";

import { useState } from "react";
import {
    MessageSquare,
    Hash,
    Megaphone,
    Users,
    TrendingUp,
    ShieldAlert,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Megaphone,
            title: "X Advertising & Twitter Ads Management",
            description: <>ROI-driven <Link href="/services/performance-marketing" className="hover:underline underline underline-offset-2">Twitter ads management</Link> including promoted tweets, <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:underline underline underline-offset-2">X video ads</Link>, and <Link href="/services/seo-services/technical-seo-services" className="hover:underline underline underline-offset-2">Twitter conversion tracking</Link> setup.</>,
            color: "var(--secondary-text)",
        },
        {
            icon: MessageSquare,
            title: "Professional X Account Management",
            description: <>Comprehensive <Link href="/services/social-media-marketing-services" className="hover:underline underline underline-offset-2">X channel audit</Link> and strategy with technical X profile optimization for maximum business authority.</>,
            color: "#1D9BF0", // Twitter Blue accent
        },
        {
            icon: Users,
            title: <Link href="/services/social-media-marketing-services" className="hover:underline">Influencer Marketing & Community</Link>,
            description: "Connecting brands with niche leaders for X algorithm visibility optimization and active community management.",
            color: "var(--secondary-text)",
        },
        {
            icon: TrendingUp,
            title: "Real-Time Trend Jacking",
            description: "24/7 monitoring to insert your brand into viral moments through strategic X trend hijacking marketing.",
            color: "#1D9BF0",
        },
        {
            icon: Hash,
            title: "Viral Marketing Strategy",
            description: "Engineering strategic threads and hashtag optimization to gain massive reach without the premium price tag.",
            color: "var(--secondary-text)",
        },
        {
            icon: ShieldAlert,
            title: "PR & Crisis Management",
            description: "Protecting brand integrity with proactive crisis management and authoritative real-time engagement services.",
            color: "#1D9BF0",
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
                        backgroundColor: "var(--foreground)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#1D9BF0",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border border-border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                color: "var(--foreground)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        X (Twitter){" "}
                        <span style={{ color: "var(--secondary-text)" }}>
                            Marketing Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive strategies to build authority, drive conversations, and convert followers on X.
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
                                        ${isHovered ? "opacity-20" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}, transparent)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full
                                        ${isHovered ? "bg-accent -translate-y-2" : "bg-card"}
                                    `}
                                    style={{
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
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
                                                className={`w-8 h-8 transition-all duration-500`}
                                                style={{
                                                    color: isHovered ? (service.color === "#FFFFFF" ? "black" : "white") : "var(--foreground)",
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

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: service.color,
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
