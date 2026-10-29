"use client";

import { useState } from "react";
import {
    Cloud,
    Server,
    Globe,
    Settings,
    Code2,
    Layers,
    Sparkles,
    Check,
    ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: Cloud,
            title: <Link href="/services/web-design-development/contentful-headless-cms" className="hover:text-inherit">Contentful Projects</Link>,
            description:
                "Enterprise content infrastructure for global brands. Structured content, powerful APIs, and scalable architecture.",
            features: [
                "Content Modeling",
                "GraphQL & REST APIs",
                "Multi-language Support",
                "Enterprise Security",
            ],
            accentColor: "#9333ea",
            type: "headless",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/strapi-headless-cms" className="hover:text-inherit">Strapi Development</Link>,
            description:
                "Open-source headless CMS with full customization. Self-hosted control with enterprise-grade features.",
            features: [
                "Self-Hosted Option",
                "Custom Plugins",
                "Role-Based Access",
                "Database Flexibility",
            ],
            accentColor: "#a855f7",
            type: "headless",
        },
        {
            icon: Layers,
            title: <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="hover:text-inherit">Sanity CMS</Link>,
            description:
                "Real-time content collaboration and structured data. Flexible schemas for modern digital products.",
            features: [
                "Real-time Collaboration",
                "GROQ Query Language",
                "Portable Text",
                "Custom Studio",
            ],
            accentColor: "#c084fc",
            type: "headless",
        },
        {
            icon: Globe,
            title: <Link href="/services/web-design-development/wordpress-development-services" className="hover:text-inherit">WordPress Development</Link>,
            description:
                "World's most popular CMS with endless possibilities. Themes, plugins, and custom development.",
            features: [
                "Custom Themes",
                "Plugin Development",
                "Gutenberg Blocks",
                "WooCommerce",
            ],
            accentColor: "#9333ea",
            type: "traditional",
        },
        {
            icon: Settings,
            title: <Link href="/services/web-design-development/drupal-cms" className="hover:text-inherit">Drupal Enterprise</Link>,
            description:
                "Robust security and complex content workflows. Perfect for government, healthcare, and enterprise.",
            features: [
                "Enterprise Security",
                "Complex Workflows",
                "Multi-site Support",
                "API-First Option",
            ],
            accentColor: "#a855f7",
            type: "traditional",
        },
        {
            icon: Code2,
            title: "Custom CMS Solutions",
            description:
                "Tailored platforms for unique requirements. When off-the-shelf solutions don't fit your needs.",
            features: [
                "Bespoke Architecture",
                "Perfect Fit",
                "Full Ownership",
                "Unlimited Flexibility",
            ],
            accentColor: "#c084fc",
            type: "custom",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(5px, -5px) rotate(1deg); }
                    50% { transform: translate(0, -10px) rotate(0deg); }
                    75% { transform: translate(-5px, -5px) rotate(-1deg); }
                }
                @keyframes border-dance {
                    0%, 100% { border-color: var(--border-color); }
                    50% { border-color: currentColor; }
                }
                @keyframes icon-bounce {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    25% { transform: scale(1.1) rotate(-3deg); }
                    50% { transform: scale(1) rotate(0deg); }
                    75% { transform: scale(1.1) rotate(3deg); }
                }
                .card-float:hover {
                    animation: float-slow 3s ease-in-out infinite;
                }
            `}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#9333ea" }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#c084fc", animationDelay: "1s" }}
                />
                {/* Floating particles */}
                <div
                    className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: "#9333ea", animationDuration: "3s" }}
                />
                <div
                    className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full animate-bounce"
                    style={{ backgroundColor: "#a855f7", animationDuration: "4s", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>
                            CMS Solutions
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span
                            style={{
                                background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Platforms
                        </span>{" "}
                        We Master
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From enterprise headless solutions to battle-tested traditional CMS platforms,
                        we deliver content management systems tailored to your needs.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #9333ea, #c084fc)",
                        }}
                    />
                </div>

                {/* Section Labels */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #9333ea 10%, transparent)" }}>
                        <Cloud className="w-4 h-4" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Headless CMS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #a855f7 10%, transparent)" }}>
                        <Globe className="w-4 h-4" style={{ color: "#a855f7" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Traditional CMS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #c084fc 10%, transparent)" }}>
                        <Code2 className="w-4 h-4" style={{ color: "#c084fc" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Custom Solutions</span>
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative card-float cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(isActive ? null : idx)}
                                style={{
                                    perspective: "1000px",
                                }}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`
                                        absolute -inset-2 rounded-3xl blur-2xl transition-all duration-700
                                        ${isHovered || isActive ? "opacity-25" : "opacity-0"}
                                    `}
                                    style={{
                                        background: `radial-gradient(circle at center, ${solution.accentColor}, transparent 70%)`,
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border-2 cursor-pointer
                                        transition-all duration-500 ease-out
                                        ${isActive ? "shadow-2xl" : "shadow-md hover:shadow-xl"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isActive || isHovered
                                            ? solution.accentColor
                                            : "var(--border-color)",
                                        transform: isHovered && !isActive
                                            ? "translateY(-12px) rotateX(2deg)"
                                            : isActive
                                                ? "scale(1.02)"
                                                : "translateY(0)",
                                    }}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-3xl transition-opacity duration-500
                                            ${isHovered || isActive ? "opacity-100" : "opacity-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}08, transparent)`,
                                        }}
                                    />

                                    {/* Type Badge */}
                                    <div
                                        className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium uppercase"
                                        style={{
                                            backgroundColor: `${solution.accentColor}15`,
                                            color: "var(--accent-violet-text)",
                                        }}
                                    >
                                        {solution.type}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6 relative">
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                `}
                                                style={{
                                                    background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}cc)`,
                                                    boxShadow: isHovered || isActive
                                                        ? `0 12px 32px ${solution.accentColor}50`
                                                        : `0 4px 12px ${solution.accentColor}30`,
                                                    transform: isHovered || isActive
                                                        ? "scale(1.15) rotate(6deg)"
                                                        : "scale(1) rotate(0)",
                                                }}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Animated Ring */}
                                            {(isHovered || isActive) && (
                                                <>
                                                    <div
                                                        className="absolute inset-0 w-16 h-16 rounded-2xl border-2 animate-ping"
                                                        style={{
                                                            borderColor: solution.accentColor,
                                                            animationDuration: "1.5s",
                                                        }}
                                                    />
                                                    {/* Secondary ring */}
                                                    <div
                                                        className="absolute inset-0 w-16 h-16 rounded-2xl border animate-pulse"
                                                        style={{
                                                            borderColor: `${solution.accentColor}50`,
                                                            transform: "scale(1.3)",
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-3 transition-all duration-300"
                                            style={{
                                                color: isActive || isHovered
                                                    ? solution.accentColor
                                                    : "var(--foreground)",
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed transition-all duration-300"
                                            style={{
                                                color: "var(--secondary-text)",
                                                opacity: isActive ? 0.9 : 1,
                                            }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features List */}
                                        <div
                                            className={`
                                                space-y-3 overflow-hidden transition-all duration-500
                                                ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            {solution.features.map((feature, fidx) => (
                                                <div
                                                    key={fidx}
                                                    className="flex items-center gap-3 transition-all duration-300"
                                                    style={{
                                                        transform: isActive ? "translateX(0)" : "translateX(-20px)",
                                                        opacity: isActive ? 1 : 0,
                                                        transitionDelay: isActive ? `${fidx * 100}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}20`,
                                                            boxShadow: `0 0 12px ${solution.accentColor}30`,
                                                        }}
                                                    >
                                                        <Check
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--foreground)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom indicator */}
                                        <div
                                            className={`
                                                mt-4 flex items-center gap-2 text-sm font-medium
                                                transition-all duration-500
                                                ${isActive ? "opacity-0 h-0" : "opacity-100"}
                                            `}
                                            style={{ color: "var(--accent-violet-text)" }}
                                        >
                                            <span>Click to explore</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Bottom progress bar */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-700
                                            ${isActive ? "w-full" : isHovered ? "w-1/2" : "w-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(90deg, ${solution.accentColor}, ${solution.accentColor}80)`,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
