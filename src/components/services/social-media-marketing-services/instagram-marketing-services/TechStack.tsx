"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("content");

    const categories = [
        { id: "content", label: "Content Creation" },
        { id: "scheduling", label: "Scheduling" },
        { id: "analytics", label: "Analytics" },
        { id: "design", label: "Design Tools" },
        { id: "growth", label: "Growth Tools" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        content: [
            { name: "Capcut", description: "Video Editing", logo: "/images/techstack_logos/Capcut-logo.png" },
            { name: "InShot", description: "Mobile Editing", logo: "/images/techstack_logos/InShot-logo.png" },
            { name: "Canva", description: "Graphics Design", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Adobe Premiere", description: "Pro Video", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Lightroom", description: "Photo Editing", logo: "/images/techstack_logos/Lightroom-logo.png" },
            { name: "Unfold", description: "Story Templates", logo: "/images/techstack_logos/Unfold-logo.jpg" },
        ],
        scheduling: [
            { name: "Later", description: "Visual Planner", logo: "/images/techstack_logos/Later-logo.png" },
            { name: "Hootsuite", description: "Social Management", logo: "/images/techstack_logos/Hootsuite-logo.png" },
            { name: "Buffer", description: "Scheduling", logo: "/images/techstack_logos/Buffer-logo.webp" },
            { name: "Planoly", description: "Instagram Focus", logo: "/images/techstack_logos/Planoly-logo.jpg" },
            { name: "Creator Studio", description: "Meta Native", logo: "/images/performance-marketing-logos/meta-ads-logo.png" },
            { name: "Sprout Social", description: "Enterprise", logo: "/images/techstack_logos/Sprout-Social-logo.png" },
        ],
        analytics: [
            { name: "Instagram Insights", description: "Native Analytics", logo: "" },
            { name: "Iconosquare", description: "Deep Analytics", logo: "/images/techstack_logos/Iconosquare-logo.webp" },
            { name: "Google Analytics", description: "Web Traffic", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/seo-services/technical-seo-services" },
            { name: "Hotjar", description: "Heatmaps", logo: "/images/techstack_logos/Hotjar-logo.png" },
            { name: "HypeAuditor", description: "Influencer Data", logo: "/images/techstack_logos/HypeAuditor-logo.png" },
            { name: "Mixpanel", description: "User Analytics", logo: "/images/techstack_logos/mixpanel-logo.png" },
        ],
        design: [
            { name: "Figma", description: "UI Design", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Adobe Creative", description: "Pro Suite", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Canva Pro", description: "Quick Design", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Lottie", description: "Animations", logo: "/images/techstack_logos/Lottie-logo.webp" },
            { name: "Unsplash", description: "Stock Photos", logo: "/images/techstack_logos/Unsplash-logo.png" },
            { name: "Pexels", description: "Free Media", logo: "/images/techstack_logos/Pexels-logo.jpg" },
        ],
        growth: [
            { name: "Linktree", description: "Bio Links", logo: "/images/techstack_logos/Linktree-logo.png" },
            { name: "ManyChat", description: "DM Automation", logo: "/images/techstack_logos/ManyChat-logo.png" },
            { name: "HubSpot", description: "CRM & Marketing", logo: "/images/ai_automation_logos/hubspot-logo.png", link: "/services/ai-workflows-automations-services" },
            { name: "Mailchimp", description: "Email Marketing", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
            { name: "Zapier", description: "Automation", logo: "/images/ai_automation_logos/zapier-logo.svg", link: "/services/ai-workflows-automations-services" },
            { name: "Notion", description: "Content Planning", logo: "/images/techstack_logos/Notion-logo.png" },
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
                        <span style={{ color: "var(--foreground)" }}>Our Instagram</span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-leading tools we use to create, schedule, and analyze your Instagram content.
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
                                background: activeTab === cat.id ? "linear-gradient(135deg, #be185d, #C13584)" : "var(--background)",
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
                                        background: tech.logo ? "var(--card-bg)" : "linear-gradient(135deg, #E1306C, #C13584)",
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
                                            <Link href={tech.link} className="hover:text-[var(--accent-pink-text)] transition-colors">
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
