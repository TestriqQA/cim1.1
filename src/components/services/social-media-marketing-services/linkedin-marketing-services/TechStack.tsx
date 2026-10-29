"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("ads");

    const linkedinBlue = "#0A66C2";

    const categories = [
        { id: "ads", label: "LinkedIn Tools" },
        { id: "crm", label: "CRM & Sales" },
        { id: "analytics", label: "Analytics" },
        { id: "content", label: "Content Tools" },
        { id: "automation", label: "Automation" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        ads: [
            { name: "LinkedIn Campaign Manager", description: "Advanced ad bidding and audience segmentation.", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "LinkedIn Sales Navigator", description: "Hyper-targeted prospecting & outreach automation.", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "LinkedIn Insight Tag", description: "Detailed conversion tracking and Matched Audience remarketing.", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "AI-Audience Modeling", description: "Predictive analytics for 2026 lead forecasting.", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "Sales Navigator Integration", description: "Seamless CRM syncing for sales-ready leads.", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
        ],
        crm: [
            { name: "HubSpot", description: "CRM & Marketing", logo: "/images/ai_automation_logos/hubspot-logo.png", link: "/services/ai-workflows-automations-services" },
            { name: "Salesforce", description: "Enterprise CRM", logo: "/images/ai_automation_logos/salesforce-logo.png" },
            { name: "Pipedrive", description: "Sales CRM", logo: "/images/techstack_logos/Pipedrive-logo.jpg" },
            { name: "Zoho CRM", description: "Business CRM", logo: "/images/techstack_logos/Zoho-CRM-logo.png" },
            { name: "Microsoft Dynamics", description: "Enterprise Suite", logo: "/images/techstack_logos/Microsoft-365-logo.webp" },
            { name: "Apollo.io", description: "Sales Intelligence", logo: "/images/techstack_logos/Apolloio-logo.png" },
        ],
        analytics: [
            { name: "LinkedIn Analytics", description: "Native Insights", logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg" },
            { name: "Google Analytics", description: "Web Traffic", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/seo-services/technical-seo-services" },
            { name: "Google Looker", description: "Data Studio", logo: "/images/ai_automation_logos/looker-logo.svg" },
            { name: "Tableau", description: "Visualization", logo: "/images/ai_automation_logos/tableau-logo.svg" },
            { name: "Mixpanel", description: "Product Analytics", logo: "/images/techstack_logos/mixpanel-logo.png" },
            { name: "Hotjar", description: "Heatmaps", logo: "/images/techstack_logos/Hotjar-logo.png" },
        ],
        content: [
            { name: "Canva", description: "Graphics Design", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Adobe Creative", description: "Pro Design", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Figma", description: "UI Design", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Loom", description: "Video Recording", logo: "/images/techstack_logos/Loom-logo.png" },
            { name: "Grammarly", description: "Writing Assistant", logo: "/images/techstack_logos/Grammarly-logo.jpg" },
            { name: "Notion", description: "Content Planning", logo: "/images/techstack_logos/Notion-logo.png" },
        ],
        automation: [
            { name: "Zapier", description: "Workflow Automation", logo: "/images/ai_automation_logos/zapier-logo.svg", link: "/services/ai-workflows-automations-services" },
            { name: "Make", description: "Integrations", logo: "/images/ai_automation_logos/make-logo.png" },
            { name: "HubSpot Automation", description: "Marketing Automation", logo: "/images/ai_automation_logos/hubspot-logo.png" },
            { name: "Mailchimp", description: "Email Marketing", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
            { name: "Calendly", description: "Scheduling", logo: "/images/techstack_logos/calendly-logo.webp" },
            { name: "Slack", description: "Team Communication", logo: "/images/techstack_logos/slack-logo.svg" },
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
                        <span style={{ color: "var(--foreground)" }}>Our LinkedIn</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use the world&apos;s most advanced B2B tools to scale your business.
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
                                backgroundColor: activeTab === cat.id ? linkedinBlue : "var(--background)",
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
                                        backgroundColor: tech.logo ? "var(--card-bg)" : linkedinBlue,
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
                                            <Link href={tech.link} className="hover:text-[var(--brand-blue-text)] transition-colors">
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
