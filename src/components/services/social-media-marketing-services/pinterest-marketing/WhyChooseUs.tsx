"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp, Target, Award, Clock, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Pinterest brand color
    const pinterestRed = "#E60023";

    const benefits = [
        {
            icon: CheckCircle,
            title: <Link href="/about" className="hover:underline">Pinterest Partner</Link>,
            description: "Certified expertise with access to beta features and priority support from Pinterest.",
        },
        {
            icon: TrendingUp,
            title: "Trend Expertise",
            description: "Deep understanding of Pinterest Trends to capitalize on seasonal and emerging interests.",
        },
        {
            icon: Target,
            title: "Intent-Driven Strategy",
            description: "Targeting users actively planning purchases, not just casually browsing.",
        },
        {
            icon: Award,
            title: "Proven Results",
            description: "Consistent track record of driving traffic, saves, and conversions for our clients.",
        },
        {
            icon: Clock,
            title: "Evergreen Content",
            description: "Pins that continue driving traffic for months, unlike fleeting social posts.",
        },
        {
            icon: Users,
            title: "Dedicated Team",
            description: "Pinterest specialists who live and breathe visual discovery marketing.",
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
                                backgroundColor: `${pinterestRed}15`,
                                borderColor: `${pinterestRed}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: pinterestRed }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose <span style={{ color: "var(--accent-red-text)" }}>Us</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We understand Pinterest's unique position as a visual discovery and planning platform.
                            Our strategies are built to capture high-intent users at the moment of inspiration.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-red-text)" }}>Higher</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Users say Pinterest helps them start new projects</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--accent-red-text)" }}>Strong</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Higher conversion rate vs. other platforms</p>
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
                                        borderColor: isHovered ? pinterestRed : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${pinterestRed}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? pinterestRed : `${pinterestRed}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : pinterestRed }}
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
