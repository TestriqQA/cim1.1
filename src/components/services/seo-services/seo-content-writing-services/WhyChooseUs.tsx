"use client";

import { useState } from "react";
import { CheckCircle, Zap, UserCheck, Search, Database, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const benefits = [
        {
            icon: Sparkles,
            title: "Proven EEAT Portfolio",
            description: <>Managed 50+ enterprise-scale projects with rigorously tested delivery on <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">technical content</Link>.</>,
        },
        {
            icon: Globe,
            title: "Global Strategy, Local Reach",
            description: <>Expertise in SEO content for <Link href="/services/seo-services/local-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">local business landing pages</Link> across US, EU, and India.</>,
        },
        {
            icon: Zap,
            title: "ROI-First Mindset",
            description: <>Clients see an average lift in <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">MQLs</Link> within 6 months of execution.</>,
        },
        {
            icon: Database,
            title: "Future-Proof Content",
            description: <>Optimized for <Link href="/services/ai-chatbots-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">AI Overviews</Link> with semantic richness and direct answer formatting.</>,
        },
        {
            icon: UserCheck,
            title: "Subject Matter Experts",
            description: <>We match you with <Link href="/about" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">industry-specific SMEs</Link> ensuring lasting authority.</>,
        },
        {
            icon: Search,
            title: "Data-Driven Strategy",
            description: <>Every word aligns with deep user intent and <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">2026 EEAT guidelines</Link>.</>,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: `${contentEmerald}15`,
                                borderColor: `${contentEmerald}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                                Why Partner With Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Partner with <span style={{ color: "var(--accent-green-text)" }}>Cinute Infomedia?</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Transform your content into a non-stop lead engine. We don't just track rankings; we track your bottom line.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-green-text)" }}>5M+</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Words Written</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-green-text)" }}>Significant</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Revenue Driven</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
                                    style={{
                                        borderColor: isHovered ? contentEmerald : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${contentEmerald}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? contentEmerald : `${contentEmerald}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : "var(--accent-green-text)" }}
                                        />
                                    </div>
                                    <h3 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
