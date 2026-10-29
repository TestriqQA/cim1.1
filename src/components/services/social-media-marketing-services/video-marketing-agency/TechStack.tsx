"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("ads");

    const categories = [
        { id: "ads", label: "Ads & Analytics" },
        { id: "production", label: "Video Production" },
        { id: "optimization", label: "SEO & Growth" },
        { id: "design", label: "Creative Design" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        ads: [
            { name: "Google Ads", description: "Ad Management", logo: "/images/performance-marketing-logos/google-ads-logo.svg", link: "/services/performance-marketing/google-ads" },
            { name: "YouTube Analytics", description: "Native Data", logo: "/images/performance-marketing-logos/youtube-ads-logo.png" },
            { name: "Google Analytics 4", description: "Cross-Platform", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/seo-services/technical-seo-services" },
            { name: "Google Tag Manager", description: "Tracking", logo: "/images/techstack_logos/google-tag-manager-logo.svg" },
            { name: "Looker Studio", description: "Reporting", logo: "/images/ai_automation_logos/looker-logo.svg" },
            { name: "Supermetrics", description: "Data Integration", logo: "/images/techstack_logos/Supermetrics-logo.jpg" },
        ],
        production: [
            { name: "Adobe Premiere", description: "Pro Editing", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Final Cut Pro", description: "Mac Editing", logo: "/images/techstack_logos/Final-Cut-Pro-logo.png" },
            { name: "DaVinci Resolve", description: "Color Grading", logo: "/images/techstack_logos/DaVinci-Resolve-logo.png" },
            { name: "After Effects", description: "Motion Graphics", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "CapCut", description: "Shorts Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
            { name: "Envato Elements", description: "Stock Assets", logo: "/images/techstack_logos/Envato-Elements-logo.jpg" },
        ],
        optimization: [
            { name: "TubeBuddy", description: "Channel Growth", logo: "/images/techstack_logos/TubeBuddy-logo.jpg" },
            { name: "VidIQ", description: "Video SEO", logo: "/images/techstack_logos/VidIQ-logo.png" },
            { name: "Social Blade", description: "Competitor Stats", logo: "/images/techstack_logos/Social-Blade-logo.jpg" },
            { name: "Google Trends", description: "Topic Research", logo: "/images/techstack_logos/Google-Trends-logo.jpg" },
            { name: "Ahrefs", description: "Keyword Research", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png", link: "/services/seo-services" },
            { name: "SEMrush", description: "Market Insights", logo: "/images/organic_growth_and_seo/semrush-logo.png", link: "/services/seo-services" },
        ],
        design: [
            { name: "Canva Pro", description: "Thumbnails", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Photoshop", description: "Pro Graphics", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Figma", description: "UI Design", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Midjourney", description: "AI Art", logo: "/images/techstack_logos/Midjourney-logo.png" },
            { name: "DALL-E 3", description: "AI Generation", logo: "/images/techstack_logos/OpenAI-logo.png" },
            { name: "Adobe Express", description: "Quick Design", logo: "/images/ai_automation_logos/adobe-logo.png" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our YouTube</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Cutting-edge tools for video production, ad management, and channel optimization.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id ? "text-white shadow-lg transform scale-105" : "hover:bg-accent"}`}
                            style={{
                                backgroundColor: activeTab === cat.id ? "#c5221f" : "var(--background)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: activeTab === cat.id ? "none" : "1px solid var(--border-color)",
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
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: tech.logo ? "var(--card-bg)" : "#c5221f",
                                        border: tech.logo ? "1px solid var(--border-color)" : "none",
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
                                        <span className="text-white font-bold text-lg">
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:text-[var(--accent-red-text)] transition-colors">
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
