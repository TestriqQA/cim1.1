"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("management");

    // Pinterest brand color
    const pinterestRed = "#E60023";

    const categories = [
        { id: "management", label: "Management" },
        { id: "analytics", label: "Analytics" },
        { id: "design", label: "Design Tools" },
    ];

    const technologies: Record<string, { name: string; description: string; logo: string; link?: string }[]> = {
        management: [
            { name: "Pinterest Business", description: "Native Platform", logo: "/images/techstack_logos/Pinterest-logo.png" },
            { name: "Tailwind", description: "Smart Scheduler", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
            { name: "Hootsuite", description: "Multi-Platform", logo: "/images/techstack_logos/Hootsuite-logo.png" },
            { name: "Buffer", description: "Publishing", logo: "/images/techstack_logos/Buffer-logo.webp" },
            { name: "Sprout Social", description: "Enterprise Suite", logo: "/images/techstack_logos/Sprout-Social-logo.png" },
            { name: "Later", description: "Visual Planning", logo: "/images/techstack_logos/Later-logo.png" },
        ],
        analytics: [
            { name: "Pinterest Analytics", description: "Native Insights", logo: "/images/techstack_logos/Pinterest-logo.png" },
            { name: "Google Analytics 4", description: "Traffic Tracking", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp", link: "/services/seo-services/technical-seo-services" },
            { name: "Iconosquare", description: "Advanced Metrics", logo: "/images/techstack_logos/Iconosquare-logo.webp" },
            { name: "Pinterest Trends", description: "Trend Research", logo: "/images/techstack_logos/Pinterest-logo.png" },
        ],
        design: [
            { name: "Canva Pro", description: "Pin Design", logo: "/images/brand-identity-design-logos/canva-logo.png", link: "/services/web-design-development/branding-services" },
            { name: "Adobe Creative Suite", description: "Pro Design", logo: "/images/ai_automation_logos/adobe-logo.png" },
            { name: "Figma", description: "Templates", logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Vista Create", description: "Quick Graphics", logo: "/images/techstack_logos/Vista-Create-logo.png" },
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
                        Our Pinterest <span style={{ color: "var(--accent-red-text)" }}>Tech Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-leading tools for scheduling, analytics, and pin creation.
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
                                backgroundColor: activeTab === cat.id ? pinterestRed : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${pinterestRed}40` : "none"
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
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" style={{ color: pinterestRed }}>
                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                        </svg>
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
