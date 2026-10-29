"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("analysis");

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const categories = [
        { id: "analysis", label: "Analysis Tools" },
        { id: "optimization", label: "Optimization" },
        { id: "monitoring", label: "Monitoring" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        analysis: [
            { name: "Screaming Frog", description: "Deep-crawl technical on-page SEO audits.", logo: "/images/organic_growth_and_seo/screaming-frog-logo.png", link: "/services/seo-services/technical-seo-services" },
            { name: "Ahrefs & SEMrush", description: "Competitive keyword mapping and gap analysis.", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png", link: "/services/seo-services/link-building" },
            { name: "Surfer SEO", description: "Real-time content relevance and quality optimization.", logo: "/images/techstack_logos/Surfer-SEO-logo.webp", link: "/services/seo-services/seo-content-writing-services" },
            { name: "Google Search Console", description: "Monitoring Core Web Vitals optimization and indexing.", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp", link: "/services/performance-marketing" },
            { name: "Clearscope", description: "Ensuring semantic search optimization for AI-era rankings.", logo: "/images/techstack_logos/Clearscope-logo.jpg" },
            { name: "Hotjar", description: "Analyzing User experience SEO and page interaction.", logo: "/images/techstack_logos/Hotjar-logo.png" },
        ],
        optimization: [
            { name: "Yoast SEO", description: "WordPress SEO", logo: "/images/techstack_logos/Yoast-SEO-logo.png", link: "/services/web-design-development/wordpress-development-services" },
            { name: "Rank Math", description: "SEO Plugin", logo: "/images/techstack_logos/RankMath-logo.jpg" },
            { name: "Schema Pro", description: "Structured Data", logo: "/images/techstack_logos/Schema-Pro-logo.jpg" },
            { name: "TinyPNG", description: "Image Compression", logo: "/images/techstack_logos/Tinypng-logo.jpg" },
        ],
        monitoring: [
            { name: "Google Search Console", description: "Performance Tracking", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp", link: "/services/performance-marketing" },
            { name: "Google Analytics 4", description: "Traffic Analysis", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/performance-marketing" },
            { name: "PageSpeed Insights", description: "Speed Testing", logo: "/images/techstack_logos/PageSpeed-Insights-logo.svg" },
            { name: "GTmetrix", description: "Performance", logo: "/images/techstack_logos/Gtmetrix-logo.webp" },
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
                        Precision Tools for <span style={{ color: "var(--accent-green-text)" }}>Data-Backed Results</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage the industry's most advanced tools to conduct your <strong><Link href="/contact" className="hover:underline underline underline-offset-2">on-page SEO audit</Link></strong> and monitor performance in real-time.
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
                                backgroundColor: activeTab === cat.id ? "#166534" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${seoGreen}40` : "none"
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
