"use client";

import { useState } from "react";
import {
    PlayCircle,
    Search,
    Users,
    BarChart2,
    MonitorPlay,
    Clapperboard,
    Megaphone,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#ff0000": "var(--accent-red-text)",
            "#cc0000": "var(--accent-red-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const services = [
        {
            icon: PlayCircle,
            title: <Link href="/services/performance-marketing" className="hover:underline">YouTube Ads & PPC</Link>,
            description: "Expertly managed TrueView, Bumper, and In-stream ads. Rigorous A/B creative testing to maximize your ROAS.",
            color: "#FF0000",
        },
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:underline">YouTube SEO Services</Link>,
            description: "Advanced video SEO beyond tags. Optimizing titles, descriptions, and transcripts for 2026 AI Overviews.",
            color: "#CC0000",
        },
        {
            icon: Users,
            title: "B2B Lead Generation",
            description: "Authority-building content and remarketing ads designed to nurture prospects through the buying cycle.",
            color: "#FF0000",
        },
        {
            icon: Clapperboard,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Ecommerce Ads</Link>,
            description: "Direct-to-consumer shoppable ads leveraging YouTube bumper and TrueView for action formats.",
            color: "#CC0000",
        },
        {
            icon: MonitorPlay,
            title: <Link href="/services/social-media-marketing-services" className="hover:underline">Influencer Marketing</Link>,
            description: "Access our verified creator network. Talent identification, contract management, and ROI tracking.",
            color: "#FF0000",
        },
        {
            icon: BarChart2,
            title: "Shorts Strategy",
            description: "High-retention frameworks for YouTube Shorts to drive viral growth and channel subscriptions.",
            color: "#CC0000",
        },
    ];

    return (
        <section
            className="py-12 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${youtubeRed}30` }}>
                        <Megaphone className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>Full-Funnel Excellence</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive YouTube{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Marketing Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        End-to-end suite of YouTube video SEO and optimization services designed to maximize visibility and audience retention.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 md:gap-8">
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
                                {/* Main card */}
                                <div
                                    className={`
                                        relative p-6 md:p-8 h-full rounded-3xl border transition-all duration-500 bg-card overflow-hidden
                                        ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : `${service.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className={`w-8 h-8 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                                                style={{
                                                    color: isHovered ? "white" : service.color,
                                                }}
                                            />
                                        </div>

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
