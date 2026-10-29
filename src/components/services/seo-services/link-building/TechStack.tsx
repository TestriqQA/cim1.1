"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("outreach");

    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const categories = [
        { id: "outreach", label: "Outreach Tools" },
        { id: "analysis", label: "Analysis & Research" },
        { id: "monitoring", label: "Monitoring" },
    ];

    const technologies: Record<string, { name: string; link?: string; description: string; logo: string }[]> = {
        outreach: [
            { name: "BuzzStream", description: "Outreach CRM", logo: "/images/techstack_logos/BuzzStream-logo.webp" },
            { name: "Hunter.io", description: "Email Finder", logo: "/images/techstack_logos/Hunterio-logo.svg" },
            { name: "Pitchbox", description: "Prospecting", logo: "/images/techstack_logos/Pitchbox-logo.webp" },
            { name: "Mailshake", description: "Email Sequences", logo: "/images/techstack_logos/Mailshake-logo.jpg" },
        ],
        analysis: [
            { name: "Ahrefs", description: "Backlink Analysis", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
            { name: "Semrush", description: "Link Gap Analysis", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
            { name: "Moz", description: "Domain Authority", logo: "/images/organic_growth_and_seo/Moz_logo.png" },
            { name: "Majestic", description: "Trust Flow", logo: "/images/techstack_logos/Majestic-logo.png" },
        ],
        monitoring: [
            { name: "Google Search Console", link: "/services/seo-services/technical-seo-services", description: "Link Tracking", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp" },
            { name: "Monitor Backlinks", description: "Backlink Monitoring", logo: "/images/techstack_logos/Monitor-Backlinks-logo.png" },
            { name: "Brand24", description: "Mention Tracking", logo: "/images/techstack_logos/Brand24-logo.jpg" },
            { name: "Ahrefs Alerts", description: "Lost Link Alerts", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
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
                        Link Building <span style={{ color: "var(--accent-cyan-text)" }}>Tech Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-leading tools and platforms for effective link acquisition.
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
                                backgroundColor: activeTab === cat.id ? "#155e75" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${linkCyan}40` : "none"
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
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="font-bold text-xl" style={{ color: "var(--accent-cyan-text)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:underline transition-colors">
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
