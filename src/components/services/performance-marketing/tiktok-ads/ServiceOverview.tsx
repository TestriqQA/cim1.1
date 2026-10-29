"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Video, Sparkles, Megaphone, ShoppingBag, Users } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    // Map brand color -> theme-aware text token (contrast-safe in light & dark)
    const textAccent = (c: string) =>
        c === tiktokCyan ? "var(--accent-cyan-text)" : "var(--accent-pink-text)";

    const services = [
        {
            icon: Play,
            title: "In-Feed Ads",
            description: <><Link href="/services/social-media-marketing-services/video-marketing-agency" className="underline underline-offset-2 hover:text-[var(--primary)] transition-colors">Native video ads</Link> that appear in users' For You feed with full-screen immersive experience.</>,
            highlights: ["Up to 60s video", "CTA buttons", "Sound-on default", "Full-screen"],
            color: tiktokPink,
        },
        {
            icon: Video,
            title: "TopView Ads",
            description: "Premium placement as the first video users see when opening TikTok.",
            highlights: ["60s video", "100% SOV", "Max visibility", "Sound-on"],
            color: tiktokCyan,
        },
        {
            icon: Sparkles,
            title: "Spark Ads",
            description: "Boost organic TikTok posts from your account or creators for authentic engagement.",
            highlights: ["Native feel", "Creator content", "Social proof", "Duets enabled"],
            color: tiktokPink,
        },
        {
            icon: Megaphone,
            title: "Branded Hashtag Challenge",
            description: "Create viral challenges that encourage user-generated content with your brand.",
            highlights: ["UGC driven", "Viral potential", "Custom page", "6-day run"],
            color: tiktokCyan,
        },
        {
            icon: ShoppingBag,
            title: <Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--primary)] transition-colors">Shopping Ads</Link>,
            description: "Drive e-commerce sales with product-focused video ads and catalog integration.",
            highlights: ["Product tags", "Catalog sync", "Shop now CTA", "Dynamic ads"],
            color: tiktokPink,
        },
        {
            icon: Users,
            title: <Link href="/services/web-design-development/landing-pages" className="hover:text-[var(--primary)] transition-colors">Lead Generation</Link>,
            description: "Capture leads directly within TikTok with native instant forms.",
            highlights: ["Instant forms", "Pre-filled data", "CRM integration", "Low friction"],
            color: tiktokCyan,
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
                        TikTok Ads{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Services
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-funnel advertising for the world's most engaging platform.
                    </p>
                </div>

                {/* Services Grid with Glitch/Neon Effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: hoveredCard === idx ? service.color : "var(--border-color)",
                                    transform: hoveredCard === idx
                                        ? "translateY(-12px) scale(1.02)"
                                        : "translateY(0) scale(1)",
                                    boxShadow: hoveredCard === idx
                                        ? `0 20px 50px ${service.color}30, 0 0 20px ${service.color}20`
                                        : "none",
                                }}
                            >
                                {/* Neon glow background */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
                                        opacity: hoveredCard === idx ? 1 : 0,
                                    }}
                                />

                                {/* Icon with pulse */}
                                <div
                                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${service.color}15`,
                                        transform: hoveredCard === idx ? "scale(1.15)" : "scale(1)",
                                        boxShadow: hoveredCard === idx ? `0 0 20px ${service.color}40` : "none",
                                    }}
                                >
                                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                                </div>

                                {/* Content */}
                                <h3
                                    className="text-xl font-bold mb-2 relative z-10 transition-colors duration-300"
                                    style={{ color: hoveredCard === idx ? textAccent(service.color) : "var(--foreground)" }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Highlights with wave animation */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {service.highlights.map((highlight, hIdx) => (
                                        <span
                                            key={hIdx}
                                            className="px-2 py-1 rounded-full text-xs font-medium transition-all duration-300"
                                            style={{
                                                backgroundColor: hoveredCard === idx ? `${service.color}20` : "var(--background)",
                                                color: hoveredCard === idx ? textAccent(service.color) : "var(--secondary-text)",
                                                transform: hoveredCard === idx ? `translateY(-${hIdx * 2}px)` : "translateY(0)",
                                                transitionDelay: `${hIdx * 50}ms`,
                                            }}
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom neon line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${tiktokPink}, ${tiktokCyan})`,
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
