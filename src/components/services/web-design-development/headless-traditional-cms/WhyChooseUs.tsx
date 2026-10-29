"use client";

import { useState } from "react";
import {
    Layers,
    Target,
    Database,
    ArrowRightLeft,
    Zap,
    HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Layers,
            title: "Multi-Platform Expertise",
            description:
                <>Deep experience across <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">WordPress</Link>, <Link href="/services/web-design-development/drupal-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Drupal</Link>, <Link href="/services/web-design-development/contentful-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Contentful</Link>, <Link href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Strapi</Link>, and <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Sanity</Link>. We know the strengths of each platform.</>,
            gradient: "from-[#9333ea] to-[#a855f7]",
        },
        {
            icon: Target,
            title: "Content Strategy Focus",
            description:
                "We design systems for how your team actually works - not just what technology allows. Content-first approach.",
            gradient: "from-[#a855f7] to-[#c084fc]",
        },
        {
            icon: Database,
            title: "API-First Mindset",
            description:
                "Architect for omnichannel delivery from day one. Your content ready for web, mobile, IoT, and beyond.",
            gradient: "from-[#9333ea] to-[#c084fc]",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration Specialists",
            description:
                "Safely move millions of content pieces without downtime. Proven migration scripts and validation processes.",
            gradient: "from-[#c084fc] to-[#9333ea]",
        },
        {
            icon: Zap,
            title: "Performance Obsessed",
            description:
                "Optimized delivery with edge caching, CDN integration, and smart content preloading strategies.",
            gradient: "from-[#a855f7] to-[#9333ea]",
        },
        {
            icon: HeadphonesIcon,
            title: "Long-term Partnership",
            description:
                "Ongoing maintenance, security updates, and feature development. We grow with your content needs.",
            gradient: "from-[#9333ea] to-[#a855f7]",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .card-shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(147, 51, 234, 0.1),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                }
                .icon-glow {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#9333ea" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#c084fc" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Zap className="w-4 h-4" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>
                            Why Work With Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            CMS
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in building content management solutions that
                        empower your team and scale with your business.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animationDelay: `${idx * 100}ms`,
                                }}
                            >
                                {/* Glow effect behind card */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                        ${isHovered ? "opacity-30" : "opacity-0"}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #9333ea, #c084fc)`,
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 rounded-2xl border overflow-hidden
                                        transition-all duration-500 ease-out
                                        ${isHovered ? "shadow-2xl -translate-y-3 scale-[1.02]" : "shadow-md"}
                                        ${isHovered ? "card-shimmer" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? "#9333ea50" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#9333ea" }}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-4">
                                        <div
                                            className={`
                                                w-14 h-14 rounded-xl flex items-center justify-center
                                                transition-all duration-500
                                                ${isHovered ? "scale-110 rotate-6" : ""}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #9333ea, #a855f7)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(147, 51, 234, 0.5)" : "0 4px 16px rgba(147, 51, 234, 0.3)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Animated ring on hover */}
                                        <div
                                            className={`
                                                absolute inset-0 w-14 h-14 rounded-xl border-2
                                                transition-all duration-500
                                                ${isHovered ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: "#9333ea" }}
                                        />

                                        {/* Orbiting dot */}
                                        {isHovered && (
                                            <div
                                                className="absolute w-2 h-2 rounded-full animate-spin"
                                                style={{
                                                    backgroundColor: "#9333ea",
                                                    top: "-4px",
                                                    left: "50%",
                                                    transformOrigin: "0 35px",
                                                    animationDuration: "2s",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Title with gradient on hover */}
                                    <h3
                                        className={`
                                            text-xl font-bold mb-2 transition-all duration-300
                                        `}
                                        style={{
                                            color: isHovered ? "#9333ea" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`
                                            text-sm leading-relaxed transition-all duration-300
                                            ${isHovered ? "translate-x-1" : ""}
                                        `}
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-500
                                            ${isHovered ? "w-full" : "w-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(90deg, #9333ea, #c084fc)",
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
