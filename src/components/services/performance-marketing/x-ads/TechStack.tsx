"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("creative");

    const categories = [
        { id: "creative", label: "Creative Studio" },
        { id: "targeting", label: "Audience & Targeting" },
        { id: "analytics", label: "Measurement" },
    ];

    const technologies: Record<string, { name: string; description: string | React.ReactNode; logo: string; invert?: boolean }[]> = {
        creative: [
            { name: "X Ad Composer", description: "Native Ad Creation", logo: "/images/techstack_logos/X-logo-hero-image.png", invert: false },
            { name: "Creative Studio", description: <Link href="/services/web-design-development" className="hover:text-[var(--primary)] transition-colors">Visual Design</Link>, logo: "/images/techstack_logos/Vista-Create-logo.png" }, // Better design placeholder
            { name: "Adobe Premiere", description: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video Editing</Link>, logo: "/images/techstack_logos/Adobe-Premiere-logo.png" },
        ],
        targeting: [
            { name: "Keyword Targeting", description: "Contextual Reach", logo: "/images/techstack_logos/X-logo-hero-image.png", invert: true },
            { name: "Follower Lookalikes", description: "Audience Expansion", logo: "/images/techstack_logos/X-logo-hero-image.png", invert: true },
            { name: "Conversation Targeting", description: "Topic Based", logo: "/images/ai_powered_chatbots_logos/web-chat.png", invert: true },
        ],
        analytics: [
            { name: "X Pixel", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Conversion Tracking</Link>, logo: "/images/techstack_logos/X-logo-hero-image.png", invert: true },
            { name: "Google Analytics 4", description: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Cross-Channel</Link>, logo: "/images/performance-marketing-logos/google-ads-logo.svg" },
            { name: "Moat (Oracle)", description: "Viewability", logo: "/images/techstack_logos/Oracle-logo.svg" }, // Correct parent company
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden border-t border-gray-400 dark:border-gray-800"
            style={{
                backgroundColor: "var(--background)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Tech Infrastructure
                    </h2>
                    <p className="text-lg mx-auto max-w-lg" style={{ color: "var(--secondary-text)" }}>
                        Tools to craft, target, and measure your viral campaigns.
                    </p>

                    <div
                        className="flex flex-wrap items-center justify-center gap-2 mt-10 p-1 rounded-lg border w-fit mx-auto"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 whitespace-nowrap`}
                                style={{
                                    backgroundColor: activeTab === cat.id ? "var(--background)" : "transparent",
                                    color: activeTab === cat.id ? "var(--foreground)" : "var(--secondary-text)",
                                    boxShadow: activeTab === cat.id ? "0 2px 10px rgba(0,0,0,0.1)" : "none"
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all cursor-pointer hover:shadow-lg"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center p-3 border transition-colors"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)"
                                    }}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className={`object-contain ${tech.invert ? "dark:invert" : ""}`}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg transition-colors group-hover:text-[var(--brand-blue-text)]" style={{ color: "var(--foreground)" }}>
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
