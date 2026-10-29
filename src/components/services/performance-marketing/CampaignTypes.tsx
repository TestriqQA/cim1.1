"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Monitor, Share2, Play, ShoppingCart, RefreshCw, TrendingUp, DollarSign, Users, ArrowRight, Shield } from "lucide-react";

export default function CampaignTypes() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#4285f4": "var(--brand-blue-text)",
            "#1877f2": "var(--brand-blue-text)",
            "#34a853": "var(--accent-green-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const campaigns = [
        {
            icon: ShoppingCart,
            title: "Performance Marketing for eCommerce",
            description: <span>For retail brands, it’s all about ROAS and LTV. We implement advanced <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">shopping campaigns</Link>, dynamic retargeting, and influencer whitelisting to drive direct sales.</span>,
            metrics: { purchases: "Direct Sales", roas: "Maximized", ltv: "Enhanced" },
            features: ["Shopping Campaigns", "Dynamic Retargeting", "Influencer Whitelisting"],
            color: "#4285f4",
        },
        {
            icon: Monitor,
            title: "Performance Marketing for SaaS & B2B",
            description: <span>For software companies, the cycle is longer. We focus on Lead Generation, MQLs, and content syndication for <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">SaaS</Link> to fill the top of the funnel.</span>,
            metrics: { leads: "MQLs", cost: "Cost Per Demo", arr: "Revenue Growth" },
            features: ["LinkedIn Ads", "Content Syndication", "Email Remarketing"],
            color: "#34a853",
        },
        {
            icon: Shield,
            title: "Performance Marketing for Fintech & Healthcare",
            description: <span>Trust is the currency here. We navigate strict compliance regulations (Google’s YMYL) for <Link href="/services/web-design-development/fintech-solutions" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Fintech</Link> and <Link href="/services/web-design-development/healthcare-portals" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Healthcare</Link> to build authority.</span>,
            metrics: { leads: "Verified Leads", accts: "Account Opens", bookings: "Patient Bookings" },
            features: ["Compliance-Ready", "Authority Building", "High-Value Acquisition"],
            color: "#1877f2",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            INDUSTRIES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Performance Marketing Solutions <span style={{ color: "var(--accent-orange-text)" }}>by Industry</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We tailor our strategies to the unique demands of your vertical.
                    </p>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {campaigns.map((campaign, index) => {
                        const Icon = campaign.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isHovered ? campaign.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${campaign.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${campaign.color}10, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl p-3 mb-4 transition-all duration-500"
                                        style={{
                                            backgroundColor: `${campaign.color}20`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        <Icon className="w-full h-full" style={{ color: campaign.color }} />
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-2 transition-colors duration-300"
                                        style={{ color: isHovered ? textAccent(campaign.color) : "var(--foreground)" }}
                                    >
                                        {campaign.title}
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {campaign.description}
                                    </p>

                                    {/* Metrics */}
                                    <div
                                        className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl transition-all duration-300"
                                        style={{
                                            backgroundColor: `${campaign.color}10`,
                                            opacity: isHovered ? 1 : 0.7,
                                        }}
                                    >
                                        {Object.entries(campaign.metrics).map(([key, value], idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-sm font-bold" style={{ color: textAccent(campaign.color) }}>{value}</div>
                                                <div className="text-xs capitalize" style={{ color: "var(--secondary-text)" }}>{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {campaign.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-full text-xs font-medium"
                                                style={{
                                                    backgroundColor: `${campaign.color}15`,
                                                    color: textAccent(campaign.color),
                                                }}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${campaign.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
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
