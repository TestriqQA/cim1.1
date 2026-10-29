"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Repeat2, Zap, TrendingUp } from "lucide-react";

export default function Process() {
    const xBlue = "#1D9BF0";

    const steps = [
        {
            icon: Zap,
            title: "Setup & Pixel",
            description: "Install the X Pixel and configure conversion events to track real impact.",
        },
        {
            icon: MessageCircle,
            title: <Link href="/services/brand-identity-design" className="hover:text-[var(--primary)] transition-colors">Creative Strategy</Link>,
            description: "Design 'Stop the Scroll' assets optimized for mobile feed consumption.",
        },
        {
            icon: Repeat2,
            title: "Launch & Amplify",
            description: "Deploy campaigns targeting high-intent conversations and keywords.",
        },
        {
            icon: TrendingUp,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Analysis & Scale</Link>,
            description: "Optimize based on engagement rates and cost-per-acquisition metrics.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t border-gray-400 dark:border-gray-800"
            style={{
                backgroundColor: "var(--background)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Campaign Velocity
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From setup to viral scale in four strategic steps.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) with animated pulse */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 z-0 overflow-hidden" style={{ backgroundColor: "var(--border-color)" }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-400/50 dark:via-white/20 to-transparent animate-shimmer" />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group z-10 pt-16 lg:pt-0">
                                {/* Step Node */}
                                <div
                                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-8 transition-all duration-300 relative border shadow-lg"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)"
                                    }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <step.icon className="w-8 h-8 transition-transform group-hover:scale-110" style={{ color: "var(--foreground)" }} />

                                    {/* Number Badge */}
                                    <div
                                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center border text-xs font-bold transition-colors"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                            color: "var(--foreground)"
                                        }}
                                    >
                                        0{idx + 1}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className="text-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
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
