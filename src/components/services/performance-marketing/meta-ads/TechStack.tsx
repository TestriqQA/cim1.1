"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("management");

    // Meta brand colors
    const metaBlue = "#1877f2";

    const categories = [
        { id: "management", label: "Campaign Management" },
        { id: "creative", label: "Creative Tools" },
        { id: "analytics", label: "Analytics & Reporting" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        management: [
            { name: "Meta Ads Manager", description: "Campaign Control", logo: "/images/techstack_logos/Meta-Ads-Manager-logo.png" },
            { name: "Meta Business Suite", description: "Unified Management", logo: "/images/performance-marketing-logos/meta-ads-logo.png" },
            { name: "HubSpot", description: <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--primary)] transition-colors">CRM Integration</Link>, logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Zapier", description: "Workflow Automation", logo: "/images/ai_automation_logos/zapier-logo.svg" },
        ],
        creative: [
            { name: "Canva", description: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Design Creation</Link>, logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "CapCut", description: "Video Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
            { name: "Figma", description: "Design System", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Midjourney", description: "AI Imagery", logo: "/images/techstack_logos/Midjourney-logo.png" },
        ],
        analytics: [
            { name: "Meta Pixel", description: "Conversion Tracking", logo: "/images/performance-marketing-logos/meta-ads-logo.png" },
            { name: "Google Analytics", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Web Analytics</Link>, logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Triple Whale", description: "Attribution", logo: "/images/techstack_logos/triple-whale-logo.png" },
            { name: "Northbeam", description: "MMM Analytics", logo: "/images/techstack_logos/Northbeam-logo.png" },
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
                        Our <span style={{ color: "var(--brand-blue-text)" }}>Tech Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Premium tools for campaign management, creative production, and analytics.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id
                                ? "shadow-lg"
                                : ""
                                }`}
                            style={{
                                backgroundColor: activeTab === cat.id ? "#1d4ed8" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${metaBlue}40` : "none"
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid with Float Animation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)",
                                animationDelay: `${idx * 100}ms`,
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Logo with bounce */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--background)"
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
                                    <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
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
