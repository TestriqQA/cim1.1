"use client";

import { useState } from "react";
import Link from "next/link";
import { PlayCircle, Target, Search, BarChart, Monitor, Video } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // YouTube brand colors
    const youtubeRed = "#FF0000";
    const darkGray = "#282828";

    const services = [
        {
            icon: PlayCircle,
            title: "TrueView In-Stream",
            description: "Skippable ads that play before, during, or after videos. Pay only when viewers watch.",
            features: ["Cost-effective", "Brand awareness", "Retargeting", "Flexible length"],
        },
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Video Discovery Ads</Link>,
            description: "Promote your videos in search results and next to related videos.",
            features: ["High intent", "Subscriber growth", "Content promotion", "Native look"],
        },
        {
            icon: Target,
            title: "Bumper Ads",
            description: "Unskippable 6-second ads designed for reach and frequency.",
            features: ["Quick impact", "High frequency", "Mobile-first", "Recall boost"],
        },
        {
            icon: Monitor,
            title: "Masthead Ads",
            description: "Premium placement on the YouTube homepage for maximum visibility.",
            features: ["Massive reach", "Launch events", "Cross-device", "Premium inventory"],
        },
        {
            icon: Video,
            title: "Non-Skippable Ads",
            description: "15-20 second ads that viewers must watch before their video.",
            features: ["High visibility", "Complete message", "Premium placement", "Brand lift"],
        },
        {
            icon: BarChart,
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">Performance Max</Link>,
            description: "Goal-based campaigns accessing all Google video inventory.",
            features: ["Automated bidding", "Cross-channel", "Conversion focus", "AI optimization"],
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
                        YouTube Ads{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(to right, ${youtubeRed}, #ff5555)` }}
                        >
                            Solutions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Strategic video advertising formats for every stage of the funnel.
                    </p>
                </div>

                {/* Services Grid with Hover Expand Effect */}
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
                                    borderColor: hoveredCard === idx ? youtubeRed : "var(--border-color)",
                                    transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)",
                                    boxShadow: hoveredCard === idx ? `0 10px 40px ${youtubeRed}20` : "none",
                                }}
                            >
                                {/* Background Red Bloom */}
                                <div
                                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ backgroundColor: youtubeRed }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: hoveredCard === idx ? youtubeRed : "var(--background)",
                                        border: `1px solid ${hoveredCard === idx ? youtubeRed : "var(--border-color)"}`,
                                    }}
                                >
                                    <service.icon
                                        className="w-7 h-7"
                                        style={{ color: hoveredCard === idx ? "white" : "var(--accent-red-text)" }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-sm">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: youtubeRed }}
                                            />
                                            <span style={{ color: "var(--foreground)" }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Animated Bottom Border */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-300"
                                    style={{
                                        backgroundColor: youtubeRed,
                                        width: hoveredCard === idx ? "100%" : "0%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
