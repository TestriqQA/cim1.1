"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("management");

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const categories = [
        { id: "management", label: "Listing Management" },
        { id: "reviews", label: "Review & Reputation" },
        { id: "tracking", label: "Rank Tracking" },
    ];

    const technologies: Record<string, { name: string; link?: string; description: string; logo: string }[]> = {
        management: [
            { name: "Google Business", description: "Profile Mgmt", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp" },
            { name: "Yext", description: "Listings Sync", logo: "/images/techstack_logos/Yext-logo.png" },
            { name: "Moz Local", description: "Citation Audit", logo: "/images/organic_growth_and_seo/Moz_logo.png" },
            { name: "HubSpot", description: "Location Mktg", logo: "/images/ai_automation_logos/hubspot-logo.png" },
        ],
        reviews: [
            { name: "Birdeye", description: "Review Gen", logo: "/images/techstack_logos/Birdeye-logo.png" },
            { name: "Yotpo", description: "Social Proof", logo: "/images/techstack_logos/Yotpo-Logo.png" },
            { name: "Trustpilot", description: "Social Proof", logo: "/images/techstack_logos/Trustpilot-logo.webp" },
            { name: "GatherUp", description: "Customer Feedback", logo: "" },
        ],
        tracking: [
            { name: "BrightLocal", link: "/services/seo-services", description: "Local Rank", logo: "/images/techstack_logos/BrightLocal-logo.jpg" },
            { name: "Mapbox", description: "Geocoding", logo: "/images/techstack_logos/mapbox-logo.webp" },
            { name: "OpenStreetMap", description: "Mapping", logo: "/images/techstack_logos/Openstreetmap-logo.png" },
            { name: "Semrush", link: "/services/performance-marketing", description: "Listing Mgmt", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
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
                        Local <span style={{ color: "var(--accent-amber-text)" }}>Tool Stack</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Advanced software for consistent business data everywhere. We leverage the most advanced Google Maps marketing services tools to ensure your NAP data is accurate, synchronized, and optimized across every platform.
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
                                backgroundColor: activeTab === cat.id ? "#b45309" : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                boxShadow: activeTab === cat.id ? `0 4px 20px ${localAmber}40` : "none"
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
                                        <span className="font-bold text-xl" style={{ color: "var(--accent-amber-text)" }}>
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                        {tech.link ? (
                                            <Link href={tech.link} className="hover:text-[var(--accent-amber-text)] transition-colors">
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
