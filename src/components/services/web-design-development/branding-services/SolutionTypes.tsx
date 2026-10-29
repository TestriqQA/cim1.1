"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Code2, Palette, Briefcase, Mic, PenTool, ArrowRight } from "lucide-react";

export default function SolutionTypes() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: Camera,
            title: "Photographer Portfolio",
            description: "Stunning, immersive, full-screen galleries with smart lazy-loading and image protection to showcase your art safely.",
            features: ["Full-screen galleries", "Smart lazy-loading", "Image protection", "High-end presentation"],
            accentColor: "#06b6d4",
            link: "/services/web-design-development"
        },
        {
            icon: Code2,
            title: "Developer Portfolio",
            description: "Show, don't just tell. Integrate live GitHub repositories, technical blogs, and interactive code snippets.",
            features: ["Live GitHub repos", "Technical blogs", "Code snippets", "Full stack demos"],
            accentColor: "#0891b2",
            link: "/services/web-design-development/nextjs-development-services"
        },
        {
            icon: Palette,
            title: "Designer Portfolio",
            description: "A canvas for your creativity. Custom blog and portfolio setup featuring before-and-after sliders and Figma prototype embeds.",
            features: ["Before/after sliders", "Process documentation", "Figma embeds", "Design thinking"],
            accentColor: "#14b8a6",
            link: "/services/web-design-development"
        },
        {
            icon: Briefcase,
            title: "Freelancer Portfolio",
            description: <>Your 24/7 sales rep. Sites that highlight offerings and packages, integrated with <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-inherit">digital footprint cleanup</Link> services.</>,
            features: ["Service offerings", "Package highlights", "Polished image", "High-value contracts"],
            accentColor: "#0d9488",
        },
        {
            icon: Mic,
            title: "Creator Portfolio",
            description: "Hub for your content universe. Centralize your output with social feeds, newsletters, and personal brand monitoring.",
            features: ["Social feeds", "Newsletter signups", "Brand monitoring", "Community engagement"],
            accentColor: "#06b6d4",
        },
        {
            icon: PenTool,
            title: "Artist Portfolio",
            description: "Elegant, minimalist luxury. Strip away noise to focus on art, creating a gallery experience that rivals physical exhibitions.",
            features: ["Minimalist luxury", "Digital gallery", "Collector attraction", "Focus on art"],
            accentColor: "#0891b2",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(6, 182, 212, 0.05)",
                            borderColor: "rgba(6, 182, 212, 0.2)",
                        }}
                    >
                        <Camera className="w-4 h-4" style={{ color: "#06b6d4" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Portfolio <span style={{ color: "var(--accent-cyan-text)" }}>Solutions</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: "var(--secondary-text)" }}>
                        Tailored portfolio designs for every creative profession, each optimized for your specific needs.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-500"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? solution.accentColor : "var(--border-color)",
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: isHovered ? `0 20px 40px -15px ${solution.accentColor}30` : "none"
                                }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${solution.accentColor}05, ${solution.accentColor}10)`,
                                        opacity: isHovered ? 1 : 0
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            background: isHovered
                                                ? `linear-gradient(135deg, ${solution.accentColor}, #0891b2)`
                                                : `${solution.accentColor}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : solution.accentColor }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {/* @ts-ignore */}
                                        {solution.link ? (
                                            /* @ts-ignore */
                                            <Link href={solution.link} className="hover:underline">
                                                {solution.title}
                                            </Link>
                                        ) : (
                                            solution.title
                                        )}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {solution.features.map((feature, fidx) => (
                                            <div key={fidx} className="flex items-center gap-2 text-sm">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: solution.accentColor }}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                            boxShadow: "0 8px 20px -4px rgba(6, 182, 212, 0.4)",
                        }}
                    >
                        Discuss Your Portfolio
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
