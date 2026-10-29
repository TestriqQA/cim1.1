"use client";

import { useState } from "react";
import {
    Film,
    Music,
    Radio,
    Newspaper,
    Headphones,
    Gamepad2,
    Sparkles,
    Check,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: Film,
            title: "Video Streaming Platforms",
            description:
                "Netflix-style VOD platforms with content libraries, watchlists, personalized recommendations, and subscription management.",
            features: [
                "Adaptive Bitrate Streaming",
                "Content Recommendations",
                "Multi-Profile Support",
                "Offline Downloads",
            ],
            gradient: "from-purple-500 to-violet-600",
            iconBg: "bg-gradient-to-br from-purple-500 to-violet-600",
            accentColor: "#8b5cf6",
        },
        {
            icon: Music,
            title: "Music & Audio Platforms",
            description:
                "Spotify-style music streaming with playlists, artist pages, social sharing, and high-fidelity audio support.",
            features: [
                "Curated Playlists",
                "Artist Profiles",
                "Lyrics Integration",
                "Cross-device Sync",
            ],
            gradient: "from-pink-500 to-rose-600",
            iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
            accentColor: "#ec4899",
        },
        {
            icon: Radio,
            title: "Live Streaming Solutions",
            description:
                "Twitch-style live broadcasting with real-time chat, donations, subscriptions, and interactive features.",
            features: [
                "Low-latency Streaming",
                "Live Chat & Reactions",
                "Channel Subscriptions",
                "Stream Monetization",
            ],
            gradient: "from-violet-500 to-purple-600",
            iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
            accentColor: "#7c3aed",
        },
        {
            icon: Newspaper,
            title: <Link href="/services/web-design-development/wordpress-development-services" className="hover:underline">News & Magazine Portals</Link>,
            description:
                "Digital publication platforms with paywalls, newsletter integration, and dynamic content delivery.",
            features: [
                "Paywall Integration",
                "Newsletter System",
                "Content Scheduling",
                "Multi-author Support",
            ],
            gradient: "from-blue-500 to-indigo-600",
            iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
            accentColor: "#3b82f6",
        },
        {
            icon: Headphones,
            title: "Podcast Platforms",
            description:
                "Audio content hubs with episode management, RSS feeds, analytics, and monetization options.",
            features: [
                "Episode Management",
                "RSS Feed Generation",
                "Listener Analytics",
                "Sponsorship Tools",
            ],
            gradient: "from-fuchsia-500 to-pink-600",
            iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
            accentColor: "#d946ef",
        },
        {
            icon: Gamepad2,
            title: "Gaming & Esports Sites",
            description:
                "Interactive gaming platforms with leaderboards, tournaments, team profiles, and community features.",
            features: [
                "Tournament Brackets",
                "Team Management",
                "Live Match Tracking",
                "Player Statistics",
            ],
            gradient: "from-indigo-500 to-violet-600",
            iconBg: "bg-gradient-to-br from-indigo-500 to-violet-600",
            accentColor: "#6366f1",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#8b5cf6" }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#ec4899", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Our Expertise
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Platforms
                        </span>{" "}
                        We Build
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From streaming giants to niche content platforms, we create digital
                        experiences that captivate and engage audiences worldwide.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(isActive ? null : idx)}
                            >
                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border-2 cursor-pointer
                                        transition-all duration-500 ease-out
                                        ${isActive ? "shadow-2xl scale-[1.02]" : "shadow-md hover:shadow-xl"}
                                        ${isHovered && !isActive ? "translate-y-[-8px]" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isActive || isHovered
                                            ? solution.accentColor
                                            : "var(--border-color)",
                                        transform: isActive ? "scale(1.02)" : undefined,
                                    }}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                                            ${isHovered || isActive ? "opacity-5" : ""}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}40, transparent)`,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon with Animation */}
                                        <div className="mb-6 relative">
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                    ${solution.iconBg}
                                                    ${isHovered || isActive ? "scale-110 rotate-6" : ""}
                                                `}
                                                style={{
                                                    boxShadow: isHovered || isActive
                                                        ? `0 8px 24px ${solution.accentColor}40`
                                                        : "none",
                                                }}
                                            >
                                                <Icon
                                                    className={`
                                                        w-8 h-8 text-white transition-transform duration-500
                                                        ${isHovered || isActive ? "scale-110" : ""}
                                                    `}
                                                />
                                            </div>

                                            {/* Animated Ring */}
                                            {(isHovered || isActive) && (
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 animate-ping"
                                                    style={{
                                                        borderColor: solution.accentColor,
                                                        animationDuration: "1.5s",
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`
                                                text-xl md:text-2xl font-bold mb-3 transition-colors duration-300
                                            `}
                                            style={{
                                                color: isActive || isHovered
                                                    ? solution.accentColor
                                                    : "var(--foreground)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features List */}
                                        <div
                                            className={`
                                                space-y-3 overflow-hidden transition-all duration-500
                                                ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            {solution.features.map((feature, fidx) => (
                                                <div
                                                    key={fidx}
                                                    className={`
                                                        flex items-center gap-3 transition-all duration-300
                                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-[-20px] opacity-0"}
                                                    `}
                                                    style={{
                                                        transitionDelay: isActive ? `${fidx * 100}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: `${solution.accentColor}20` }}
                                                    >
                                                        <Check
                                                            className="w-3 h-3"
                                                            style={{ color: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--foreground)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-3xl
                                            transition-all duration-500
                                            ${isActive || isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}15, transparent)`,
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
