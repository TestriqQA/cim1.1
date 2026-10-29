"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("platform");

    const msBlue = "#0078D4";

    const categories = [
        { id: "platform", label: "Core Platform" },
        { id: "analytics", label: "Analytics & Data" },
        { id: "integration", label: "Integrations" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        platform: [
            { name: "Microsoft Advertising", description: "Campaign Manager", logo: "/images/techstack_logos/Microsoft-Advertising-logo.webp" },
            { name: "Editor", description: "Bulk Management", logo: "/images/ai_powered_chatbots_logos/Microsoft-Office-Teams-logo.png" }, // Placeholder for Editor
            { name: "Audience Network", description: "Native Ads", logo: "/images/techstack_logos/Microsoft-365-logo.webp" },
        ],
        analytics: [
            { name: "UET Tag", description: "Conversion Tracking", logo: "/images/techstack_logos/UET-Tag-logo.png" }, // Updated to specific UET logo
            { name: "Microsoft Clarity", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Heatmaps & Recordings</Link>, logo: "/images/techstack_logos/Microsoft-Clarity-logo.png" },
            { name: "Google Import", description: "Sync Campaigns", logo: "/images/performance-marketing-logos/google-ads-logo.svg" },
        ],
        integration: [
            { name: "LinkedIn", description: <Link href="/services/performance-marketing/linkedin-ads" className="hover:text-[var(--primary)] transition-colors">Profile Targeting</Link>, logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "Dynamics 365", description: "CRM Sync", logo: "/images/techstack_logos/Microsoft-365-logo.webp" },
            { name: "Shopify", description: <Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--primary)] transition-colors">E-commerce</Link>, logo: "/images/techstack_logos/shopify-logo.png" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Ecosystem{" "}
                        <span
                            style={{ color: "var(--brand-blue-text)" }}
                        >
                            Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Integrated tools for seamless campaign management and optimization.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className="px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm font-bold transition-all duration-300"
                            style={{
                                backgroundColor: activeTab === cat.id ? msBlue : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: `1px solid ${activeTab === cat.id ? msBlue : "var(--border-color)"}`,
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div
                                    className="w-20 h-20 rounded-xl flex items-center justify-center border bg-white p-3"
                                    style={{
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 group-hover:text-[var(--brand-blue-text)] transition-colors" style={{ color: "var(--foreground)" }}>
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
