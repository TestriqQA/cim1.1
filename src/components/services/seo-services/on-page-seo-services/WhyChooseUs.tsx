"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp, Target, Award, Clock, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const benefits = [
        {
            icon: CheckCircle,
            title: "Deep Combined Experience",
            description: "Our strategists have survived every major Google algorithm update.",
        },
        {
            icon: TrendingUp,
            title: "Data-Driven Methodology",
            description: "Decisions based on conversion metrics, not just vanity traffic.",
        },
        {
            icon: Target,
            title: "No Black-Hat Shortcuts",
            description: "We build sustainable authority that withstands the 2026 Core Updates.",
        },
        {
            icon: Award,
            title: "Transparent Reporting",
            description: "See exactly how your On-page SEO cost translates into bottom-line revenue.",
        },
        {
            icon: Clock,
            title: "Global/Multilingual Support",
            description: "Optimizing for US, EU, and APAC markets with proper hreflang implementation.",
        },
        {
            icon: Users,
            title: "ROI-First Focus",
            description: "We prioritize the 20% of optimizations that drive 80% of your traffic growth.",
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
                                backgroundColor: `${seoGreen}15`,
                                borderColor: `${seoGreen}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: seoGreen }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Global Expertise. Local Impact. <span style={{ color: "var(--accent-green-text)" }}>Proven ROI.</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Why <strong><Link href="/contact" className="hover:underline underline underline-offset-2">hire an on-page SEO expert</Link></strong> from our team? Because we deliver results, not just reports.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-green-text)" }}>30+</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Years Combined Exp.</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-green-text)" }}>Sustainable</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Organic Results</p>
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
                                        borderColor: isHovered ? seoGreen : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${seoGreen}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? seoGreen : `${seoGreen}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : seoGreen }}
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
