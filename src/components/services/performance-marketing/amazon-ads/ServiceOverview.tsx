"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, LayoutGrid, Monitor, Video, Store, Target } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Amazon brand colors
    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const services = [
        {
            icon: ShoppingBag,
            title: "Sponsored Products",
            description: "Promote individual product listings on search results and product pages.",
            color: amazonOrange,
        },
        {
            icon: LayoutGrid,
            title: "Sponsored Brands",
            description: "Showcase your brand and product portfolio with custom headlines.",
            color: amazonBlue,
        },
        {
            icon: Monitor,
            title: "Sponsored Display",
            description: "Reach audiences on and off Amazon with auto-generated ads.",
            color: amazonOrange,
        },
        {
            icon: Store,
            title: "Amazon Stores",
            description: "Build a dedicated multi-page brand destination on Amazon.",
            color: amazonBlue,
        },
        {
            icon: Video,
            title: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video Ads</Link>,
            description: "Engage shoppers with autoplay video in search results.",
            color: amazonOrange,
        },
        {
            icon: Target,
            title: "Amazon DSP",
            description: "Programmatically buy display, video, and audio ads at scale.",
            color: amazonBlue,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Comprehensive{" "}
                        <span
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            Ad Solutions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-funnel strategies to capture shoppers at every stage of their journey.
                    </p>
                </div>

                {/* Services Grid with Prime-speed hover effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-8 rounded-3xl border transition-all duration-300 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: hoveredCard === idx ? service.color : "var(--border-color)",
                                    transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)",
                                    boxShadow: hoveredCard === idx ? `0 10px 40px ${service.color}20` : "none",
                                }}
                            >
                                {/* Speed Streak Animation */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 transform origin-left transition-transform duration-500"
                                    style={{
                                        backgroundColor: service.color,
                                        transform: hoveredCard === idx ? "scaleX(1)" : "scaleX(0)",
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: hoveredCard === idx ? service.color : "var(--background)",
                                        border: `1px solid ${hoveredCard === idx ? service.color : "var(--border-color)"}`,
                                    }}
                                >
                                    <service.icon
                                        className="w-7 h-7"
                                        style={{ color: hoveredCard === idx ? "white" : service.color }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
