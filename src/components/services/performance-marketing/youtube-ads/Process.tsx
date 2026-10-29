"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, PenTool, Video, Target, Play, BarChart2 } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // YouTube brand colors
    const youtubeRed = "#FF0000";

    const steps = [
        {
            id: 1,
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Audience Research</Link>,
            description: "Deep dive into viewer behaviors, interests, and competitor channels.",
            deliverables: ["Audience personas", "Keyword analysis", "Placement lists"],
        },
        {
            id: 2,
            icon: PenTool,
            title: "Script & Storyboard",
            description: "Crafting compelling narratives designed to hook viewers in 5 seconds.",
            deliverables: ["Video scripts", "Storyboards", "Visual style guide"],
        },
        {
            id: 3,
            icon: Video,
            title: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Production & Editing</Link>,
            description: "Creating high-quality video assets optimized for all devices.",
            deliverables: ["Raw footage", "Motion graphics", "Sound design"],
        },
        {
            id: 4,
            icon: Target,
            title: "Campaign Setup",
            description: "Structuring campaigns with precise targeting and bidding strategies.",
            deliverables: ["Campaign structure", "Audience segments", "Conversion tracking"],
        },
        {
            id: 5,
            icon: Play,
            title: "Launch & Iterate",
            description: "Going live and continuously testing creatives and audiences.",
            deliverables: ["A/B testing", "Bid adjustments", "Creative refresh"],
        },
        {
            id: 6,
            icon: BarChart2,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Analysis & Scaling</Link>,
            description: "Detailed reporting and scale-up strategies for topperformers.",
            deliverables: ["Performance reports", "ROI analysis", "Scaling plan"],
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-widest uppercase mb-2 block" style={{ color: "var(--accent-red-text)" }}>
                        Our Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Video Advertising{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(to right, ${youtubeRed}, #ff4444)` }}
                        >
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From script to scale, we handle every aspect of your YouTube campaigns.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Central Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{
                            background: `linear-gradient(to bottom, transparent, ${youtubeRed}, transparent)`,
                        }}
                    />

                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isHovered = hoveredStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative lg:flex items-center gap-12 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                    onMouseEnter={() => setHoveredStep(step.id)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Timeline Node */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 items-center justify-center bg-background z-10"
                                        style={{
                                            borderColor: isHovered ? youtubeRed : "var(--border-color)",
                                            backgroundColor: "var(--background)",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: isHovered ? youtubeRed : "var(--secondary-text)" }} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="lg:w-1/2">
                                        <div
                                            className="p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden"
                                            style={{
                                                backgroundColor: "var(--background)",
                                                borderColor: isHovered ? youtubeRed : "var(--border-color)",
                                                transform: isHovered ? "scale(1.02)" : "scale(1)",
                                            }}
                                        >
                                            {/* Step Number BG */}
                                            <div
                                                className="absolute -right-4 -top-4 text-9xl font-bold opacity-5 pointer-events-none"
                                                style={{ color: youtubeRed }}
                                            >
                                                {step.id}
                                            </div>

                                            <div className="flex flex-col gap-4 relative z-10">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${youtubeRed}15` }}
                                                >
                                                    <step.icon className="w-6 h-6" style={{ color: "var(--accent-red-text)" }} />
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                                        {step.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {step.deliverables.map((item, dIdx) => (
                                                            <span
                                                                key={dIdx}
                                                                className="text-xs px-2 py-1 rounded border"
                                                                style={{
                                                                    borderColor: "var(--border-color)",
                                                                    color: "var(--secondary-text)"
                                                                }}
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block lg:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
