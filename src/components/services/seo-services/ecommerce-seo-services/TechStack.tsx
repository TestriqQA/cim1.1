"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("platforms");

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const categories = [
        { id: "platforms", label: "E-commerce Platforms" },
        { id: "analysis", label: "Analysis & Audit" },
        { id: "performance", label: "Performance" },
    ];

    const technologies: Record<string, { name: string; link?: string; description: string; logo: string }[]> = {
        platforms: [
            { name: "Shopify", link: "/services/web-design-development/shopify-development-services", description: "SaaS Commerce Platform", logo: "/images/techstack_logos/shopify-logo-hero.png" },
            { name: "Magento", description: "Adobe Commerce", logo: "/images/techstack_logos/Magento-logo.svg" },
            { name: "WooCommerce", description: "WordPress E-commerce", logo: "/images/techstack_logos/WooCommerce-logo.png" },
            { name: "BigCommerce", description: "Enterprise SaaS", logo: "/images/techstack_logos/bigcommerce-logo.png" },
            { name: "Headless Commerce", description: "API-First Architecture", logo: "/images/techstack_logos/shopify-logo-hero.png" },
            { name: "Custom Platforms", description: "Proprietary Builds", logo: "/images/techstack_logos/nextjs-logo.svg" },
        ],
        analysis: [
            { name: "Semrush", link: "/services/performance-marketing", description: "Keyword Research", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
            { name: "Ahrefs", link: "/services/seo-services/link-building", description: "Backlink Analysis", logo: "/images/organic_growth_and_seo/ahrefs-logo.png" },
            { name: "Screaming Frog", description: "Crawling", logo: "/images/organic_growth_and_seo/screaming-frog-logo.png" },
            { name: "GSC", description: "Search Console", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp" },
        ],
        performance: [
            { name: "Google Analytics", link: "/services/performance-marketing", description: "Tracking", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
            { name: "Hotjar", description: "Heatmaps", logo: "/images/techstack_logos/Hotjar-logo.png" },
            { name: "PageSpeed Insights", description: "Core Web Vitals", logo: "/images/techstack_logos/google-optimize-logo.svg" }, // Using optimize as proxy or change if exists
            { name: "Salesforce", description: "CRM Integrated", logo: "/images/techstack_logos/Salesforce-logo.png" },
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
                        Ecommerce Tech Stack <span style={{ color: "var(--accent-sky-text)" }}>Mastery</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Deep expertise across platforms and tools that power modern online retail.
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
                                backgroundColor: activeTab === cat.id ? "#0369a1" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${commerceBlue}40` : "none"
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
                                        <span className="font-bold text-xl" style={{ color: "var(--accent-sky-text)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:text-[--commerceBlue] transition-colors">
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
