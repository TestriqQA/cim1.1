"use client";

import { useState } from "react";
import Link from "next/link";
import { Import, Settings, TrendingUp, Search } from "lucide-react";

export default function Process() {
    const msBlue = "#0078D4";

    const steps = [
        {
            icon: Import,
            title: "Import & Setup",
            description: "Seamlessly import high-performing Google Ads campaigns or structure new ones from scratch.",
        },
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Keyword Expansion</Link>,
            description: "Identify unique keywords and opportunities specific to the Bing search landscape.",
        },
        {
            icon: Settings,
            title: "Audience Calibration",
            description: "Fine-tune targeting using LinkedIn profile data for precise B2B reach.",
        },
        {
            icon: TrendingUp,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Scale & Optimize</Link>,
            description: "Expand to the Audience Network and optimize for ROAS across all placements.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${msBlue} 1px, transparent 1px), linear-gradient(90deg, ${msBlue} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Execution{" "}
                        <span
                            style={{ color: "var(--brand-blue-text)" }}
                        >
                            Framework
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        How we drive results on the Microsoft Advertising platform.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0" style={{ backgroundColor: "var(--border-color)" }} />

                    <div className="grid lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group z-10">
                                {/* Step Node */}
                                <div
                                    className="w-16 h-16 mx-auto rounded-none rotate-45 flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-0"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        border: `2px solid ${msBlue}`,
                                        boxShadow: `0 0 20px ${msBlue}20`
                                    }}
                                >
                                    <div className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                                        <step.icon className="w-8 h-8" style={{ color: msBlue }} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className="text-center p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 bg-background"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    <div
                                        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                                        style={{ backgroundColor: `${msBlue}10`, color: "var(--brand-blue-text)" }}
                                    >
                                        Step 0{idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
