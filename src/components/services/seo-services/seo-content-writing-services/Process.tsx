"use client";

import { FileSearch, PenTool, Edit3, CheckCircle2, TrendingUp, Share2 } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const steps = [
        {
            icon: FileSearch,
            title: <Link href="/services/performance-marketing" className="hover:underline">Phase 1: Deep Search Intent Analysis</Link>,
            description: "We analyze the \"why\" behind the search, identifying keyword research for content opportunities that competitors miss.",
        },
        {
            icon: Share2,
            title: "Phase 2: Strategy & Topic Clusters",
            description: <>Creating <Link href="/services/seo-services/on-page-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">topic clusters SEO</Link> patterns to distribute authority across your domain, making it impossible for Google to ignore you.</>,
        },
        {
            icon: PenTool,
            title: "Phase 3: High-EEAT Content Creation",
            description: <>Our SEO content experts craft <Link href="/blog/mastering-seo-organic-growth" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">long-form SEO content</Link> (1500-2500 words) that solve user pain points deeply.</>,
        },
        {
            icon: CheckCircle2,
            title: "Phase 4: Semantic Content Optimization",
            description: "Integrating LSI/Semantic naturally. No stuffing, just pure content relevance and authority for search dominance.",
        },
        {
            icon: TrendingUp,
            title: "Phase 5: Performance & Engagement Tracking",
            description: "Monitoring engagement metrics and user dwell time to ensure your content isn't just seen, but read and acted upon.",
        },
        {
            icon: Edit3,
            title: <Link href="/services/seo-services" className="hover:underline">Phase 6: Continuous SEO Content Refresh</Link>,
            description: "Regularly updating services to align with the latest 2026 Google guidelines and AI-overview trends.",
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        The Content <span style={{ color: "var(--accent-green-text)" }}>Lifecycle</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A systematic approach to creating content that compounds in value over time.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Connector Line (Desktop) */}
                                {idx < steps.length - 1 && (idx + 1) % 3 !== 0 && (
                                    <div
                                        className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 h-0.5 bg-gradient-to-r from-transparent to-transparent group-hover:from-emerald-500/50 group-hover:to-transparent transition-all"
                                        style={{ backgroundColor: "var(--border-color)", opacity: 0.2 }}
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:rotate-12"
                                    style={{
                                        background: `linear-gradient(135deg, ${contentEmerald}, #059669)`,
                                        color: "white"
                                    }}
                                >
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>

                                {/* Step Indicator */}
                                <div
                                    className="absolute top-6 right-6 text-xs font-bold px-2 py-1 rounded border"
                                    style={{
                                        color: "var(--accent-green-text)",
                                        borderColor: `${contentEmerald}30`,
                                        backgroundColor: `${contentEmerald}05`
                                    }}
                                >
                                    STEP {idx + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
