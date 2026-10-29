"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("tracking");

    // Google Ads brand colors
    const googleBlue = "#4285f4";

    const categories = [
        { id: "tracking", label: "Tracking & Analytics" },
        { id: "automation", label: "Automation" },
        { id: "optimization", label: "Optimization" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        tracking: [
            { name: "Google Analytics 4", description: "Event Tracking", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Google Tag Manager", description: "Tag Management", logo: "/images/techstack_logos/google-tag-manager-logo.svg" },
            { name: "Google Looker Studio", description: "Reporting", logo: "/images/techstack_logos/Google-Looker-Studio-logo.svg" },
            { name: "Supermetrics", description: "Data Pipeline", logo: "/images/techstack_logos/Supermetrics-logo.jpg" },
        ],
        automation: [
            { name: "Google Ads Scripts", description: "Custom Automation", logo: "/images/performance-marketing-logos/google-ads-logo.svg" },
            { name: "Google Ads API", description: "Integration", logo: "/images/performance-marketing-logos/google-ads-logo.svg" },
            { name: "Zapier", description: "Workflow Automation", logo: "/images/ai_automation_logos/zapier-logo.svg" },
            { name: "HubSpot", description: "CRM Integration", logo: "/images/ai_automation_logos/hubspot-logo.png" },
        ],
        optimization: [
            { name: "Optmyzr", description: "PPC Management", logo: "/images/techstack_logos/Optmyzr-logo.webp" },
            { name: "Google Optimize", description: "A/B Testing", logo: "/images/techstack_logos/google-optimize-logo.svg" },
            { name: "Hotjar", description: "User Behavior", logo: "/images/techstack_logos/Hotjar-logo.png" },
            { name: "Semrush", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Keyword Research</Link>, logo: "/images/organic_growth_and_seo/semrush-logo.png" },
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
                        Premium tools for tracking, automation, and continuous optimization.
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
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${googleBlue}40` : "none"
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
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
