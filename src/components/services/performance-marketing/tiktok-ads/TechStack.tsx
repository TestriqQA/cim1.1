"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("ads");

    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    const categories = [
        { id: "ads", label: "Ads & Creative" },
        { id: "tracking", label: "Tracking" },
        { id: "automation", label: "Automation" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        ads: [
            { name: "TikTok Ads Manager", description: "Campaign Management", logo: "/images/performance-marketing-logos/tiktok-ads-logo.webp" },
            { name: "CapCut", description: "Video Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
            { name: "Canva", description: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Creative Design</Link>, logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "Figma", description: "Ad Design", logo: "/images/techstack_logos/figma-logo.svg" },
        ],
        tracking: [
            { name: "TikTok Pixel", description: "Conversion Tracking", logo: "/images/performance-marketing-logos/tiktok-ads-logo.webp" },
            { name: "TikTok Events API", description: "Server-Side Events", logo: "/images/performance-marketing-logos/tiktok-ads-logo.webp" },
            { name: "Google Analytics", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Web Analytics</Link>, logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Triple Whale", description: "Attribution", logo: "/images/techstack_logos/triple-whale-logo.png" },
        ],
        automation: [
            { name: "Zapier", description: <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--primary)] transition-colors">Workflow Automation</Link>, logo: "/images/ai_automation_logos/zapier-logo.svg" },
            { name: "HubSpot", description: <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--primary)] transition-colors">CRM Integration</Link>, logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Shopify", description: <Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--primary)] transition-colors">E-commerce Sync</Link>, logo: "/images/techstack_logos/shopify-logo.png" },
            { name: "Supermetrics", description: "Data Pipeline", logo: "/images/techstack_logos/Supermetrics-logo.jpg" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Premium tools for creating viral content and tracking performance.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                            style={{
                                background: activeTab === cat.id
                                    ? `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})`
                                    : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${tiktokPink}40` : "none"
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid with Glow Effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--background)",
                                        boxShadow: "none",
                                    }}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold mb-1 transition-colors group-hover:text-[var(--accent-pink-text)]" style={{ color: "var(--foreground)" }}>
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
