"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Monitor, LineChart, Search, Layers, Settings,
    BarChart3, TrendingUp, Eye, Activity, Zap,
    Sparkles
} from "lucide-react";
import Link from "next/link";

export default function ToolsReporting() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reportingFeatures = [
        {
            icon: Search,
            decorIcon: Activity,
            title: "Google Search Console & GA4",
            description: "Truth in data.",
            tools: [
                { name: "Google Analytics", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
                { name: "Search Console", logo: "/images/organic_growth_and_seo/google-search-console-logo.webp" },
            ],
            color: "#4285f4",
            metric: "Real-time Data",
        },
        {
            icon: TrendingUp,
            decorIcon: BarChart3,
            title: "Semrush & Ahrefs",
            description: "Competitive intelligence.",
            tools: [
                { name: "SEMrush", logo: "/images/organic_growth_and_seo/semrush-logo.png" },
                { name: "Ahrefs", logo: "/images/organic_growth_and_seo/Ahrefs-logo.png" },
            ],
            color: "#ea4335",
            metric: "Daily Updates",
        },
        {
            icon: Monitor,
            decorIcon: Eye,
            title: "Custom Data Studio Reports",
            description: <span>Real-time <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-green-text)]">ROI-focused</Link> organic SEO services reporting.</span>,
            tools: [
                { name: "Google Data Studio", logo: "/images/organic_growth_and_seo/google-data-studio-logo.webp" },
                { name: "Tableau", logo: "/images/organic_growth_and_seo/tableau-logo.svg" },
            ],
            color: "#fbbc04",
            metric: "Live Insights",
        },
        {
            icon: Layers,
            decorIcon: Zap,
            title: "Screaming Frog",
            description: <span><Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)]">Deep technical crawls</Link>.</span>,
            tools: [
                { name: "Screaming Frog", logo: "/images/organic_growth_and_seo/screaming-frog-logo.png" },
                { name: "Moz", logo: "/images/organic_growth_and_seo/Moz_logo.png" },
            ],
            color: "#34a853",
            metric: "Deep Analysis",
        },
    ];

    // Map per-card brand hue (used for borders/gradients/icons) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textColorMap: Record<string, string> = {
        "#4285f4": "var(--brand-blue-text)",
        "#ea4335": "var(--accent-red-text)",
        "#fbbc04": "var(--accent-amber-text)",
        "#34a853": "var(--accent-green-text)",
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 border border-current rounded-full animate-pulse-slow"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 border border-current rounded-full animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 border border-current rounded-full animate-pulse-slow animation-delay-4000"></div>
                </div>
            </div>

            {/* Gradient Orbs */}

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <Settings className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-green-text)" }}>
                            Tools & Reporting
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Tools, Analytics & <span style={{ color: "var(--accent-green-text)" }}>Transparent Reporting</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use the best to deliver the best.
                    </p>
                </div>

                {/* Features Grid */}
                {/* Four across only from xl: at 1024px each card is ~210px and the metric
                    badge ran over the icon (24px overlap); two columns hold until 1280px. */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {reportingFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        const DecorIcon = feature.decorIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
                                        borderColor: isHovered ? feature.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
                                        // the coloured hover glow went with the rest of the page's glows
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Hover lift and border colour are the only card effects left —
                                        same treatment as the Why Choose Us and Techniques cards. The
                                        badge slide-in, spinning decoration, icon tilt and glow, title
                                        chevron (these cards aren't links), logo zoom, bottom bar,
                                        corner brackets and light sweep are removed. */}

                                    {/* Metric Badge — at its settled position; it used to rest
                                        10px off and slide in on hover */}
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
                                        style={{
                                            backgroundColor: `${feature.color}20`,
                                            color: textColorMap[feature.color],
                                        }}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {feature.metric}
                                    </div>

                                    {/* Decor Icon (static) */}
                                    <div
                                        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center"
                                        style={{ transform: "scale(0.8)", opacity: 0.2 }}
                                    >
                                        <DecorIcon className="w-8 h-8" style={{ color: feature.color }} />
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className="relative w-16 h-16 rounded-xl p-3.5"
                                            style={{ backgroundColor: `${feature.color}20` }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: feature.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? textColorMap[feature.color] : "var(--foreground)",
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-5 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: "var(--secondary-text)",
                                        }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Tools Logos */}
                                    <div className="flex items-center gap-4 relative z-10">
                                        {feature.tools.map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <div
                                                    className="w-14 h-14 rounded-xl p-2.5 backdrop-blur-sm"
                                                    style={{
                                                        backgroundColor: `${feature.color}15`,
                                                        border: `1px solid ${feature.color}30`,
                                                    }}
                                                >
                                                    <Image
                                                        src={tool.logo}
                                                        alt={tool.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                {/* Tool Name */}
                                                <span
                                                    className="text-xs font-medium text-center transition-colors duration-300"
                                                    style={{
                                                        color: isHovered ? textColorMap[feature.color] : "var(--secondary-text)",
                                                    }}
                                                >
                                                    {tool.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }



                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }



                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}