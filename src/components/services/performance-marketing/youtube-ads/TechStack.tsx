"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("platform");

    // YouTube brand colors
    const youtubeRed = "#FF0000";

    const categories = [
        { id: "platform", label: "Ad Platform" },
        { id: "creative", label: "Creative Tools" },
        { id: "analytics", label: "Analytics & Data" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        platform: [
            { name: "Google Ads", description: "Campaign Manager", logo: "/images/performance-marketing-logos/google-ads-logo.svg" },
            { name: "YouTube Studio", description: "Channel Management", logo: "/images/performance-marketing-logos/youtube-ads-logo.png" },
            { name: "DV360", description: "Programmatic", logo: "/images/techstack_logos/DV360-Logo.webp" },
        ],
        creative: [
            { name: "Adobe Premiere", description: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video Editing</Link>, logo: "/images/techstack_logos/Adobe-Premiere-logo.png" },
            { name: "After Effects", description: "Motion Graphics", logo: "/images/brand-identity-design-logos/Adobe_After_Effects_logo.png" },
            { name: "Canva", description: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Thumnails & Assets</Link>, logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "CapCut", description: "Shorts Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
        ],
        analytics: [
            { name: "Google Analytics 4", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Web Tracking</Link>, logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Google Tag Manager", description: "Tag Implementation", logo: "/images/techstack_logos/google-tag-manager-logo.svg" },
            { name: "Looker Studio", description: "Reporting", logo: "/images/techstack_logos/Google-Looker-Studio-logo.svg" },
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
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(to right, ${youtubeRed}, #ff5555)` }}
                        >
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Professional tools for high-quality video production and precise ad targeting.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300"
                            style={{
                                backgroundColor: activeTab === cat.id ? "#c5221f" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: `1px solid ${activeTab === cat.id ? youtubeRed : "var(--border-color)"}`,
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center border bg-white p-3"
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

                                {/* Info */}
                                <div>
                                    <h3 className="font-bold mb-1 transition-colors group-hover:text-[var(--accent-red-text)]" style={{ color: "var(--foreground)" }}>
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
