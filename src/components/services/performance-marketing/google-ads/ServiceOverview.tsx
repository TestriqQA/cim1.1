"use client";

import { useState } from "react";
import { Search, ShoppingCart, Play, Monitor, Smartphone, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";
    const googleYellow = "#fbbc04";
    const googleRed = "#ea4335";

    // Map brand hue → theme-aware text token (WCAG-safe in light & dark)
    const textAccent = (c: string) =>
        c === googleBlue ? "var(--brand-blue-text)" :
        c === googleGreen ? "var(--accent-green-text)" :
        c === googleYellow ? "var(--accent-amber-text)" :
        c === googleRed ? "var(--accent-red-text)" : c;

    const services = [
        {
            icon: Search,
            title: "Search Campaigns",
            description: "Appear at the top of Google when users search for your products or services.",
            highlights: ["Keyword targeting", "Ad extensions", "Quality Score optimization"],
            color: googleBlue,
        },
        {
            icon: Monitor,
            title: "Display Network",
            description: "Reach 90% of internet users with visually engaging banner ads across millions of websites.",
            highlights: ["Remarketing", "Audience targeting", "Responsive ads"],
            color: googleGreen,
        },
        {
            icon: ShoppingCart,
            title: "Shopping Ads",
            description: "Showcase your products with images, prices, and reviews directly in search results.",
            highlights: ["Product feed optimization", "Smart Shopping", "Local inventory"],
            color: googleYellow,
        },
        {
            icon: Play,
            title: <Link href="/services/performance-marketing/youtube-ads" className="hover:text-[var(--primary)] transition-colors">YouTube Ads</Link>,
            description: "Engage audiences with video ads on the world's second-largest search engine.",
            highlights: ["Skippable ads", "Bumper ads", "Discovery ads"],
            color: googleRed,
        },
        {
            icon: Rocket,
            title: "Performance Max",
            description: "AI-powered campaigns that optimize across all Google channels automatically.",
            highlights: ["Smart bidding", "Asset automation", "Cross-channel reach"],
            color: googleBlue,
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Campaigns</Link>,
            description: "Drive app installs and engagement across Google's entire ecosystem.",
            highlights: ["Install campaigns", "Engagement ads", "Pre-registration"],
            color: googleGreen,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: googleBlue }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: googleGreen }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Google Ads <span style={{ color: "var(--brand-blue-text)" }}>Services</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-spectrum Google advertising expertise to capture demand across every touchpoint.
                    </p>
                </div>

                {/* Services Grid with Hover Reveal */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: hoveredCard === idx ? service.color : "var(--border-color)",
                                    transform: hoveredCard === idx ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: hoveredCard === idx
                                        ? `0 20px 40px ${service.color}20, 0 0 0 1px ${service.color}`
                                        : "none",
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                                        opacity: hoveredCard === idx ? 1 : 0,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300"
                                    style={{
                                        backgroundColor: `${service.color}15`,
                                        transform: hoveredCard === idx ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                    }}
                                >
                                    <service.icon className="w-7 h-7" style={{ color: textAccent(service.color) }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Highlights - revealed on hover */}
                                <div
                                    className="space-y-2 transition-all duration-500 relative z-10"
                                    style={{
                                        maxHeight: hoveredCard === idx ? "200px" : "0px",
                                        opacity: hoveredCard === idx ? 1 : 0,
                                        overflow: "hidden",
                                    }}
                                >
                                    {service.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-center gap-2">
                                            <ArrowUpRight className="w-4 h-4" style={{ color: textAccent(service.color) }} />
                                            <span className="text-sm font-medium" style={{ color: textAccent(service.color) }}>
                                                {highlight}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
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
