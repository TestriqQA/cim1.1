"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Globe, Smartphone, ShoppingBag } from "lucide-react";

export default function ServiceOverview() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Meta brand colors
    const metaBlue = "#1877f2";
    const metaPurple = "#8b5cf6";
    const instaGradient = "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";

    // Theme-aware token for the brand hue when used as TEXT (backgrounds keep the raw hue)
    const textAccent = (hex: string) => ({
        "#1877f2": "var(--brand-blue-text)",
        "#0084ff": "var(--brand-blue-text)",
        "#e4405f": "var(--accent-pink-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#00b894": "var(--accent-teal-text)",
        "#6c5ce7": "var(--accent-violet-text)",
    }[hex.toLowerCase()] ?? hex);

    const services = [
        {
            icon: Facebook,
            title: <Link href="/services/social-media-marketing-services/facebook-marketing-services" className="hover:text-[var(--primary)] transition-colors">Facebook Ads</Link>,
            description: "Reach 2.9B monthly active users with precision-targeted campaigns.",
            features: ["News Feed Ads", "Stories", "Marketplace", "Video Ads"],
            color: metaBlue,
            bgGradient: `linear-gradient(135deg, ${metaBlue}15, ${metaBlue}05)`,
        },
        {
            icon: Instagram,
            title: <Link href="/services/social-media-marketing-services/instagram-marketing-services" className="hover:text-[var(--primary)] transition-colors">Instagram Ads</Link>,
            description: "Engage visual-first audiences with stunning creative formats.",
            features: ["Reels Ads", "Stories", "Feed Posts", "Explore Ads"],
            color: "#E4405F",
            bgGradient: `${instaGradient.replace(")", ", 0.1)")}`,
        },
        {
            icon: MessageCircle,
            title: "Messenger Ads",
            description: "Start conversations that convert with Click-to-Messenger campaigns.",
            features: ["Sponsored Messages", "Click-to-Chat", "Story Ads", "Inbox Ads"],
            color: "#0084FF",
            bgGradient: `linear-gradient(135deg, #0084FF15, #0084FF05)`,
        },
        {
            icon: Globe,
            title: "Audience Network",
            description: "Extend your reach beyond Meta to thousands of partner apps and sites.",
            features: ["Native Ads", "Banner Ads", "Interstitials", "Rewarded Video"],
            color: metaPurple,
            bgGradient: `linear-gradient(135deg, ${metaPurple}15, ${metaPurple}05)`,
        },
        {
            icon: ShoppingBag,
            title: <Link href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--primary)] transition-colors">Advantage+ Shopping</Link>,
            description: "AI-powered campaigns that automatically optimize for e-commerce sales.",
            features: ["Catalog Sales", "Dynamic Ads", "Collection Ads", "Shop Ads"],
            color: "#00B894",
            bgGradient: `linear-gradient(135deg, #00B89415, #00B89405)`,
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Install Campaigns</Link>,
            description: "Drive quality app installs and in-app conversions at scale.",
            features: ["App Installs", "App Events", "Value Optimization", "Playable Ads"],
            color: "#6C5CE7",
            bgGradient: `linear-gradient(135deg, #6C5CE715, #6C5CE705)`,
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
                        Meta Ads <span style={{ color: "var(--brand-blue-text)" }}>Services</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-funnel advertising across the entire Meta ecosystem.
                    </p>
                </div>

                {/* Services Grid with Magnetic Hover */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setActiveCard(idx)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: activeCard === idx ? service.color : "var(--border-color)",
                                    transform: activeCard === idx
                                        ? "translateY(-12px) scale(1.02)"
                                        : "translateY(0) scale(1)",
                                    boxShadow: activeCard === idx
                                        ? `0 25px 50px ${service.color}25, 0 0 0 1px ${service.color}`
                                        : "none",
                                }}
                            >
                                {/* Animated background gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                    style={{
                                        background: service.bgGradient,
                                        opacity: activeCard === idx ? 1 : 0,
                                    }}
                                />

                                {/* Glow effect */}
                                <div
                                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500"
                                    style={{
                                        backgroundColor: service.color,
                                        opacity: activeCard === idx ? 0.15 : 0,
                                    }}
                                />

                                {/* Icon with pulse effect */}
                                <div
                                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${service.color}15`,
                                        transform: activeCard === idx ? "scale(1.15) rotate(5deg)" : "scale(1)",
                                    }}
                                >
                                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                                    {activeCard === idx && (
                                        <div
                                            className="absolute inset-0 rounded-2xl animate-ping"
                                            style={{ backgroundColor: service.color, opacity: 0.2 }}
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Features - staggered reveal */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {service.features.map((feature, fIdx) => (
                                        <span
                                            key={fIdx}
                                            className="px-2 py-1 rounded-full text-xs font-medium transition-all duration-300"
                                            style={{
                                                backgroundColor: activeCard === idx ? `${service.color}20` : "var(--background)",
                                                color: activeCard === idx ? textAccent(service.color) : "var(--secondary-text)",
                                                transform: activeCard === idx ? `translateY(-${fIdx * 2}px)` : "translateY(0)",
                                                transitionDelay: `${fIdx * 50}ms`,
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom gradient line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
                                        width: activeCard === idx ? "100%" : "0%",
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
