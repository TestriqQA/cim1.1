"use client";

import { useState } from "react";
import Link from "next/link";
import { Newspaper, FileText, Rss, Search, Users, Zap, Shield, Globe, BarChart3, Palette } from "lucide-react";

export default function ServiceOverview() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Newspaper,
            title: "Custom News Portal Design",
            description: <>Transform your journalism with a <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Custom news portal design</Link> for media agencies. We implement News portal security.</>,
            details: ["Mobile-responsive layouts", "Video-centric design", "Seamless streaming", "Adaptive user interfaces"]
        },
        {
            icon: Palette,
            title: "Specialized Blog Design",
            description: "Stand out with bespoke Blog Design services. From Niche blog development to Multi-author management systems.",
            details: ["Zero-downtime migration", "Headless WP setups", "Interactive polling", "Gamification tools"]
        },
        {
            icon: Zap,
            title: "Automated Publishing",
            description: <>Efficiency is key. We deploy <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Automated news aggregation</Link> and portal setup workflows to keep content fresh.</>,
            details: ["Global CDN integration", "Reuters/AP API connect", "News portal analytics", "Reader behavior insights"]
        },
        {
            icon: BarChart3,
            title: "Monetization & Growth",
            description: <>Turn views into revenue. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal monetization</Link> strategies optimize AdSense and paywalls.</>,
            details: ["Programmatic ad setup", "Paywall integration", "Audience growth SEO", "UGC community modules"]
        },
        {
            icon: FileText,
            title: "Professional Content",
            description: <><Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Blog writing services</Link> and <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Professional editorial services</Link> providing high-E-E-A-T content that ranks.</>,
            details: ["Content strategy", "Topic clusters", "Editorial workflows", "Brief creation"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #a855f7 8%, transparent), color-mix(in srgb, #ec4899 8%, transparent))",
                            borderColor: "color-mix(in srgb, #a855f7 20%, transparent)",
                            color: "#a855f7",
                        }}
                    >
                        <Newspaper className="w-4 h-4" />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>What We Offer</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Comprehensive <span style={{ color: "#a855f7" }}>Website Management</span> & Portal Solutions
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We don&apos;t just build websites; we engineer digital equity. Our recurring Website Management Services and development packages are designed for growth.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Feature List */}
                    <div className="space-y-4">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
                                    style={{
                                        backgroundColor: isActive ? "color-mix(in srgb, #a855f7 10%, var(--card-bg))" : "var(--card-bg)",
                                        borderColor: isActive ? "#a855f7" : "var(--border-color)",
                                        boxShadow: isActive ? "0 10px 30px -10px rgba(168, 85, 247, 0.3)" : "none"
                                    }}
                                    onClick={() => setActiveFeature(idx)}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl transition-colors"
                                            style={{
                                                background: isActive
                                                    ? "linear-gradient(135deg, #a855f7, #ec4899)"
                                                    : "color-mix(in srgb, #a855f7 15%, transparent)"
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: isActive ? "white" : "#a855f7" }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Feature Details */}
                    <div
                        className="sticky top-24 p-8 rounded-3xl border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="mb-6">
                            <div
                                className="inline-flex p-4 rounded-2xl mb-4"
                                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                            >
                                {(() => {
                                    const Icon = features[activeFeature].icon;
                                    return <Icon className="w-8 h-8 text-white" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                {features[activeFeature].description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-purple-text)" }}>
                                Key Features
                            </h4>
                            <ul className="grid grid-cols-2 gap-3">
                                {features[activeFeature].details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-sm"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
