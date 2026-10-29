"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("platform");

    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const categories = [
        { id: "platform", label: "Amazon Ecosystem" },
        { id: "optimization", label: "Bid & PPC" },
        { id: "intelligence", label: "Data Intelligence" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string }[]> = {
        platform: [
            { name: "Advertising Console", description: "Campaign Management", logo: "/images/performance-marketing-logos/Amazon-ads-logo.svg" },
            { name: "Seller Central", description: "Inventory & Sales", logo: "/images/performance-marketing-logos/Amazon-ads-logo.svg" },
            { name: "Amazon DSP", description: "Programmatic", logo: "/images/performance-marketing-logos/Amazon-ads-logo.svg" },
        ],
        optimization: [
            { name: "Helium 10", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Keyword Research</Link>, logo: "/images/techstack_logos/Helium-10-logo.png" },
            { name: "Jungle Scout", description: "Product Research", logo: "/images/techstack_logos/Jungle-Scout-logo.png" },
            { name: "Pacvue", description: "Enterprise PPC", logo: "/images/techstack_logos/Pacvue-logo.png" },
        ],
        intelligence: [
            { name: "DataHawk", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">SEO & Analytics</Link>, logo: "/images/techstack_logos/DataHawk-logo.png" },
            { name: "Keepa", description: "Price Tracking", logo: "/images/techstack_logos/Keepa-logo.png" },
            { name: "Teikametrics", description: "AI Optimization", logo: "/images/techstack_logos/Teikametrics-logo.jpg" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Advanced{" "}
                        <span
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Leveraging best-in-class tools for keyword dominance and bid optimization.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-bold transition-all duration-300"
                            style={{
                                backgroundColor: activeTab === cat.id ? amazonBlue : "var(--card-bg)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: `1px solid ${activeTab === cat.id ? amazonBlue : "var(--border-color)"}`,
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center border bg-white p-3"
                                    style={{
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Using next/image with fallback handling ideally, but strictly paths here. 
                                        Note: Some logos might need placeholder logic if not found, 
                                        but using reasonable guesses for standard stack. 
                                    */}
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 group-hover:text-[var(--accent-orange-text)] transition-colors" style={{ color: "var(--foreground)" }}>
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
