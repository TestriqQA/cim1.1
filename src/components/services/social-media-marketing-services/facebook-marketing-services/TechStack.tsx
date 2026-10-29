"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("ads");

    const categories = [
        { id: "ads", label: "Ad Platforms" },
        { id: "tracking", label: "Tracking & Analytics" },
        { id: "creative", label: "Creative Tools" },
        { id: "automation", label: "Automation" },
        { id: "reporting", label: "Reporting" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        ads: [
            { name: "Meta Ads Manager", description: "Campaign Management", logo: "/images/techstack_logos/Meta-Ads-Manager-logo.png" },
            { name: "Business Suite", description: "Business Hub", logo: "" },
            { name: "Ads Library", description: "Competitor Research", logo: "" },
            { name: "Audience Insights", description: "Audience Data", logo: "" },
            { name: "Creative Hub", description: "Ad Preview", logo: "" },
            { name: "Commerce Manager", description: "E-commerce", logo: "" },
        ],
        tracking: [
            { name: "Meta Pixel", description: "Website Tracking", logo: "" },
            { name: "Conversions API", description: "Server-Side", logo: "" },
            { name: "Google Analytics", description: "Web Analytics", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/seo-services/technical-seo-services" },
            { name: "Google Tag Manager", description: "Tag Management", logo: "/images/techstack_logos/google-tag-manager-logo.svg" },
            { name: "Hotjar", description: "Heatmaps", logo: "/images/techstack_logos/Hotjar-logo.png" },
            { name: "Segment", description: "Data Pipeline", logo: "/images/techstack_logos/Segment-logo.png" },
        ],
        creative: [
            { name: "Figma", description: "Design Tool", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Canva", description: "Quick Graphics", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Adobe Creative", description: "Pro Suite", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Capcut", description: "Video Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
            { name: "Lottie", description: "Animations", logo: "/images/techstack_logos/Lottie-logo.webp" },
            { name: "Unsplash", description: "Stock Images", logo: "/images/techstack_logos/Unsplash-logo.png" },
        ],
        automation: [
            { name: "Zapier", description: "Workflow Automation", logo: "/images/ai_automation_logos/zapier-logo.svg", link: "/services/ai-workflows-automations-services" },
            { name: "Make", description: "Integrations", logo: "/images/ai_automation_logos/make-logo.png", link: "/services/ai-workflows-automations-services" },
            { name: "Revealbot", description: "Ad Automation", logo: "/images/techstack_logos/Revealbot-logo.avif" },
            { name: "AdEspresso", description: "A/B Testing", logo: "" },
            { name: "Madgicx", description: "AI Optimization", logo: "/images/techstack_logos/Madgicx-logo.png" },
            { name: "Smartly.io", description: "Creative AI", logo: "/images/techstack_logos/Smartlyio-logo.png" },
        ],
        reporting: [
            { name: "Google Looker", description: "Data Studio", logo: "/images/ai_automation_logos/looker-logo.svg" },
            { name: "Supermetrics", description: "Data Pull", logo: "/images/techstack_logos/Supermetrics-logo.jpg" },
            { name: "Triple Whale", description: "Attribution", logo: "/images/techstack_logos/triple-whale-logo.png" },
            { name: "Northbeam", description: "Analytics", logo: "/images/techstack_logos/Northbeam-logo.png" },
            { name: "Slack", description: "Notifications", logo: "/images/techstack_logos/slack-logo.svg" },
            { name: "Notion", description: "Documentation", logo: "/images/techstack_logos/Notion-logo.png" },
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
                        <span style={{ color: "var(--foreground)" }}>Our Facebook Ads</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-leading tools and platforms we use to manage and optimize your Facebook advertising campaigns.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${activeTab === cat.id
                                    ? "text-white shadow-lg transform scale-105"
                                    : "hover:bg-accent"
                                }
                            `}
                            style={{
                                backgroundColor: activeTab === cat.id ? "#1d4ed8" : "var(--background)",
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
                                        backgroundColor: tech.logo ? "var(--card-bg)" : "#1d4ed8",
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
