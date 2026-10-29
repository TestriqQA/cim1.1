"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("campaign");

    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";

    const categories = [
        { id: "campaign", label: "Campaign Tools" },
        { id: "analytics", label: "Analytics" },
        { id: "integration", label: "Integrations" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        campaign: [
            { name: "LinkedIn Campaign Manager", description: "Ad Management", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "LinkedIn Sales Navigator", description: "Prospecting", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "Canva", description: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Creative Design</Link>, logo: "/images/brand-identity-design-logos/canva-logo.png" },
            { name: "Figma", description: "Ad Design", logo: "/images/techstack_logos/figma-logo.svg" },
        ],
        analytics: [
            { name: "LinkedIn Insight Tag", description: "Conversion Tracking", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "Google Analytics", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Traffic Analysis</Link>, logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Google Looker Studio", description: "Reporting", logo: "/images/techstack_logos/Google-Looker-Studio-logo.svg" },
            { name: "Supermetrics", description: "Data Pipeline", logo: "/images/techstack_logos/Supermetrics-logo.jpg" },
        ],
        integration: [
            { name: "HubSpot", description: <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--primary)] transition-colors">CRM Sync</Link>, logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Salesforce", description: "Lead Routing", logo: "/images/techstack_logos/Salesforce-logo.png" },
            { name: "Zapier", description: <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--primary)] transition-colors">Automation</Link>, logo: "/images/ai_automation_logos/zapier-logo.svg" },
            { name: "Mailchimp", description: "Email Marketing", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
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
                        Enterprise-grade tools for LinkedIn advertising success.
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
                                backgroundColor: activeTab === cat.id ? linkedInBlue : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${linkedInBlue}40` : "none"
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid with Zoom Effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#0a66c2]"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:border-[#0a66c2]"
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
                                    <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-blue-text)] transition-colors" style={{ color: "var(--foreground)" }}>
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
