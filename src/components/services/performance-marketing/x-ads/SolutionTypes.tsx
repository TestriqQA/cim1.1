"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Globe2, Target, Smartphone, Sparkles } from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const xBlue = "#1D9BF0";

    const solutions = [
        {
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Launch & Connect</Link>,
            icon: Flame,
            frontDescription: "Create massive buzz for new product launches or major announcements.",
            backDescription: "Use Trend Takeovers and First View metrics to ensure your brand is the first thing users see. Perfect for maximizing Day 1 impact.",
            stats: "+40% Brand Recall",
        },
        {
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Installs</Link>,
            icon: Smartphone,
            frontDescription: "Drive high-intent downloads with specialized App Cards.",
            backDescription: "Leverage X's mobile-first audience. App Cards feature an 'Install' button and rating preview to drive seamless conversions.",
            stats: "High LTV Users",
        },
        {
            title: "Cultural Relevance",
            icon: Globe2,
            frontDescription: "Join the conversation during live events and trending topics.",
            backDescription: "Target keywords related to live TV, sports events, or cultural moments to insert your brand into the global dialogue.",
            stats: "Real-Time Engagement",
        },
        {
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Precision Targeting</Link>,
            icon: Target,
            frontDescription: "Target based on conversations, keywords, and followalike audiences.",
            backDescription: "Reach people who are talking about specific topics or are similar to followers of your competitors.",
            stats: "Keyword Contextual",
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
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: `${xBlue}15`,
                                borderColor: `${xBlue}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: xBlue }} />
                            <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                                Targeting Precision
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Targeting Precision
                        </h2>
                    </div>
                    <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                        X offers unique targeting signals based on what people are actually talking about right now.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[320px] cursor-pointer"
                            onMouseEnter={() => setActiveCard(idx)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div
                                className="w-full h-full transition-all duration-700 relative"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: activeCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front Side */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-6 border flex flex-col justify-between backdrop-blur-sm"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden",
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    <div>
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border"
                                            style={{
                                                backgroundColor: "rgba(128,128,128,0.1)",
                                                borderColor: "var(--border-color)"
                                            }}
                                        >
                                            <solution.icon className="w-6 h-6" style={{ color: "var(--foreground)" }} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{solution.frontDescription}</p>
                                    </div>
                                    <div className="flex items-center text-xs font-bold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
                                        Explore <ArrowRight className="w-3 h-3 ml-2" />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-6 border flex flex-col justify-between"
                                    style={{
                                        transform: "rotateY(180deg)",
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden",
                                        boxShadow: "0 0 30px rgba(0,0,0,0.1)",
                                        backgroundColor: "var(--foreground)",
                                        color: "var(--background)",
                                        borderColor: "var(--foreground)"
                                    }}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                        <p className="text-sm leading-relaxed opacity-90">
                                            {solution.backDescription}
                                        </p>
                                        <div
                                            className="mt-4 inline-block px-3 py-1 rounded text-xs font-bold"
                                            style={{
                                                backgroundColor: "var(--background)",
                                                color: "var(--foreground)"
                                            }}
                                        >
                                            {solution.stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
