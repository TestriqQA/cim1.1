"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("performance");

    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const categories = [
        { id: "performance", label: "Performance" },
        { id: "crawling", label: "Crawling & Indexing" },
        { id: "monitoring", label: "Monitoring" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        performance: [
            { name: "Google PageSpeed", description: "Speed Testing", logo: "/images/techstack_logos/PageSpeed-Insights-logo.svg" },
            { name: "GTmetrix", description: "Performance", logo: "/images/techstack_logos/Gtmetrix-logo.webp" },
            { name: "Lighthouse", description: "Core Web Vitals", logo: "/images/techstack_logos/Lighthouse-logo.png" },
            { name: "WebPageTest", description: "Deep Analysis", logo: "/images/techstack_logos/WebPageTest-logo.png" },
        ],
        crawling: [
            { name: "Screaming Frog", description: "Site Crawling", logo: "/images/organic_growth_and_seo/screaming-frog-logo.png" },
            { name: "Sitebulb", description: "Auditing", logo: "/images/techstack_logos/Sitebulb-logo.jpg" },
            { name: "DeepCrawl", description: "Enterprise Crawl", logo: "/images/techstack_logos/DeepCrawl-logo.webp" },
            { name: "Botify", description: "Log Analysis", logo: "/images/techstack_logos/Botify-logo.png" },
        ],
        monitoring: [
            { name: "Google Search Console", description: "Index Status", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp", link: "/services/performance-marketing" },
            { name: "Bing Webmaster", description: "Bing Indexing", logo: "/images/techstack_logos/Bing-Webmaster-logo.svg" },
            { name: "Ahrefs", description: "Technical Audits", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
            { name: "SEMrush", description: "Site Audit", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
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
                        Precision Tools for <span style={{ color: "var(--accent-violet-text)" }}>Deep Technical Audits</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use the industry's most advanced tools to conduct your <Link href="/contact" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">technical SEO audit</Link> and monitor performance in real-time.
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
                                backgroundColor: activeTab === cat.id ? "#6d28d9" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${techPurple}40` : "none"
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
                                        <span className="font-bold text-lg" style={{ color: "var(--accent-violet-text)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:text-[var(--accent-violet-text)] transition-colors">
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
