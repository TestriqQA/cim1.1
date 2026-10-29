"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("management");

    const categories = [
        { id: "management", label: "Management" },
        { id: "analytics", label: "Analytics" },
        { id: "content", label: "Content Creation" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        management: [
            { name: "X Pro (TweetDeck)", description: "Power User Suite", logo: "/images/techstack_logos/X-logo-hero-image.png" },
            { name: "Hootsuite", description: "Scheduling & Unified Messaging", logo: "/images/techstack_logos/Hootsuite-logo.png" },
            { name: "Buffer", description: "Cross-Platform Publishing", logo: "/images/techstack_logos/Buffer-logo.webp" },
            { name: "Sprout Social", description: "Enterprise-grade CRM", logo: "/images/techstack_logos/Sprout-Social-logo.png" },
            { name: "Typefully", description: "Advanced Thread Writing", logo: "/images/techstack_logos/Typefully-logo.jpg" },
            { name: "Salesforce", description: "CRM Integration", logo: "/images/techstack_logos/Salesforce-logo.png" },
        ],
        analytics: [
            { name: "X Campaign Manager", description: "Deep-Dive Ads Analytics", logo: "/images/techstack_logos/X-logo-hero-image.png" },
            { name: "X Analytics", description: "Native Performance Metrics", logo: "/images/techstack_logos/X-logo-hero-image.png" },
            { name: "Audiense", description: "Audience Intelligence", logo: "/images/techstack_logos/Audiense-logo.png" },
            { name: "Brandwatch", description: "Social Listening", logo: "/images/techstack_logos/Brandwatch-logo.jpg" },
            { name: "Google Analytics 4", description: "Conversion Tracking", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
        ],
        content: [

            { name: "Canva Pro", description: "Visual Design", logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "Adobe Photoshop", description: "Pro Visuals", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "CapCut", description: "X Video Ads Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
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
                        Our X <span style={{ color: "var(--secondary-text)" }}>Tech Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tools that power real-time engagement and data-driven growth.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id
                                ? "shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                : ""
                                }`}
                            style={{
                                backgroundColor: activeTab === cat.id ? "var(--foreground)" : "var(--card-bg)",
                                color: activeTab === cat.id ? "var(--background)" : "var(--secondary-text)",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--background)"
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:underline hover:text-[var(--brand-blue-text)] transition-colors">
                                                {tech.name}
                                            </Link>
                                        ) : (
                                            tech.name
                                        )}
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
