"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("creation");

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const categories = [
        { id: "creation", label: "Content Creation" },
        { id: "optimization", label: "SEO Optimization" },
        { id: "management", label: "CMS & Management" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string }[]> = {
        creation: [
            { name: "Grammarly Business", description: "Professional Tone", logo: "/images/techstack_logos/Grammarly-logo.jpg" },
            { name: "Hemmingway", description: "Readability Score", logo: "/images/techstack_logos/Markdown-logo.png" },
            { name: "Custom AI", description: "Brief Generation", logo: "/images/techstack_logos/OpenAI-logo.png" },
            { name: "Canva", description: "Visual Content", logo: "/images/brand-identity-design-logos/canva-logo.png" },
        ],
        optimization: [
            { name: "Surfer SEO", description: "Content Audit", logo: "/images/techstack_logos/Surfer-SEO-logo.webp" },
            { name: "Clearscope", description: "Semantic Depth", logo: "/images/techstack_logos/Clearscope-logo.jpg" },
            { name: "Semrush", description: "KW Research", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
            { name: "Ahrefs", description: "Gap Analysis", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
        ],
        management: [
            { name: "WordPress", description: "CMS Delivery", logo: "/images/techstack_logos/wordpress-logo-hero1.png" },
            { name: "HubSpot", description: "B2B Marketing", logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Notion", description: "Content Calendar", logo: "/images/techstack_logos/Notion-logo.png" },
            { name: "Jira", description: "Async Workflow", logo: "/images/techstack_logos/jira-logo.svg" },
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
                        Content <span style={{ color: "var(--accent-green-text)" }}>Tech Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        The tools we use to craft, optimize, and manage high-quality content.
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
                                backgroundColor: activeTab === cat.id ? "#15803d" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${contentEmerald}40` : "none"
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
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                                        <span className="font-bold text-lg" style={{ color: "var(--accent-green-text)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
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
