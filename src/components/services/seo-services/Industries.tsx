"use client";

import { useState } from "react";
import {
    Rocket,
    Cloud,
    ShoppingCart,
    Building2,
    Briefcase,
    ArrowRight,
    TrendingUp,
    Zap,
    Package,
    MapPin,
    Globe2,
    Target,
    Star,
    Sparkles,
    BarChart3,
    Award,
    Factory,
} from "lucide-react";
import Link from "next/link";

export default function Industries() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const industries = [
        {
            icon: Cloud,
            decorIcon: BarChart3,
            accentIcon: Target,
            title: "Organic SEO for SaaS Companies",
            description: <span>We understand B2B cycles. We reduce CAC and increase LTV by targeting decision-makers searching for <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">software solutions</Link>.</span>,
            color: "#14b8a6",
            gradient: "from-emerald-500 to-teal-600",
            stats: "High LTV",
        },
        {
            icon: ShoppingCart,
            decorIcon: Package,
            accentIcon: Star,
            title: <span><Link href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--accent-green-text)] transition-colors">Organic Growth SEO for Ecommerce</Link></span>,
            description: "Scale your store. We optimize thousands of SKUs programmatically to capture traffic from every product search.",
            color: "#06b6d4",
            gradient: "from-teal-500 to-cyan-600",
            stats: "Scale SKUs",
        },
        {
            icon: Rocket,
            decorIcon: TrendingUp,
            accentIcon: Zap,
            title: "Organic SEO for Startups",
            description: "Growth hacks for search. We help effortless Organic SEO for high-growth companies to gain traction fast with aggressive, safe strategies.",
            color: "#10b981",
            gradient: "from-green-500 to-emerald-600",
            stats: "Fast Traction",
        },
        {
            icon: Briefcase,
            decorIcon: Globe2,
            accentIcon: Sparkles,
            title: "Organic SEO for B2B",
            description: "Lead gen on autopilot. We position your firm as the thought leader, driving qualified inquiries from C-suite executives.",
            color: "#6366f1",
            gradient: "from-blue-500 to-indigo-600",
            stats: "Quality Leads",
        },
    ];

    // Map per-card brand hue (used for borders/gradients/icons) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textColorMap: Record<string, string> = {
        "#14b8a6": "var(--accent-teal-text)",
        "#06b6d4": "var(--accent-cyan-text)",
        "#10b981": "var(--accent-green-text)",
        "#6366f1": "var(--accent-indigo-text)",
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
        }}>


            {/* Floating Particles - Using fixed positions to avoid hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: 10, top: 20, duration: 8, delay: 1 },
                    { left: 85, top: 15, duration: 12, delay: 3 },
                    { left: 25, top: 70, duration: 10, delay: 0 },
                    { left: 70, top: 80, duration: 9, delay: 2 },
                    { left: 50, top: 40, duration: 11, delay: 4 },
                    { left: 15, top: 55, duration: 7, delay: 1.5 },
                    { left: 90, top: 45, duration: 13, delay: 2.5 },
                    { left: 35, top: 25, duration: 8, delay: 0.5 },
                    { left: 60, top: 65, duration: 10, delay: 3.5 },
                    { left: 5, top: 85, duration: 9, delay: 1 },
                    { left: 75, top: 10, duration: 11, delay: 2 },
                    { left: 45, top: 90, duration: 12, delay: 0 },
                    { left: 20, top: 35, duration: 8, delay: 4 },
                    { left: 80, top: 60, duration: 10, delay: 1 },
                    { left: 55, top: 5, duration: 9, delay: 3 },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-current opacity-20"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationName: 'float',
                            animationDuration: `${particle.duration}s`,
                            animationTimingFunction: 'ease-in-out',
                            animationDelay: `${particle.delay}s`,
                            animationIterationCount: 'infinite',
                            animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                        }}
                    />
                ))}
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10" >
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <Factory className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-green-text)" }}>
                            Industries We Serve
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries & <span style={{ color: "var(--accent-green-text)" }}>Growth Use Cases</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our Organic SEO Services are tailored to the unique challenges and opportunities of diverse sectors.
                    </p>
                </div>

                {/* Industries Grid */}
                {/* Four cards, so four columns from lg — three left the last card alone on a second row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const DecorIcon = industry.decorIcon;
                        const AccentIcon = industry.accentIcon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s both`,
                                }}
                            >
                                {/* pt-14 clears the stats badge (now always shown, top-left)
                                    so it can't sit on the centred icon */}
                                <div
                                    className="relative px-6 pb-6 pt-14 rounded-2xl text-center transition-all duration-500 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
                                        borderColor: isHovered ? industry.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-16px) scale(1.05)" : "translateY(0) scale(1)",
                                        // the coloured hover glow went with the rest of the page's glows
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Hover lift and border colour are the only card effects left —
                                        same treatment as the other card sections on this page. The 3D
                                        tilt, spinning decoration, rotating ring, icon tilt and glow,
                                        bouncing chevron (these cards aren't links), bottom bar, sparkle
                                        and corner wedges are removed. */}

                                    {/* Decoration (static) */}
                                    <div
                                        className="absolute -top-6 -right-6 w-24 h-24"
                                        style={{ transform: "scale(0.7)", opacity: 0.15 }}
                                    >
                                        <div
                                            className="w-full h-full rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: `${industry.color}30` }}
                                        >
                                            <DecorIcon className="w-10 h-10" style={{ color: industry.color }} />
                                        </div>
                                    </div>

                                    {/* Stats Badge — always visible; it used to appear only on hover */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
                                        style={{
                                            backgroundColor: `${industry.color}20`,
                                            color: textColorMap[industry.color],
                                            border: `1px solid ${industry.color}40`,
                                        }}
                                    >
                                        <AccentIcon className="w-3 h-3" />
                                        {industry.stats}
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className="relative w-20 h-20 mx-auto rounded-2xl p-4"
                                            style={{ backgroundColor: industry.color }}
                                        >
                                            <Icon className="w-full h-full text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-bold mb-3 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? textColorMap[industry.color] : "var(--foreground)",
                                        }}
                                    >
                                        {industry.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed transition-colors duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                        }}
                                    >
                                        {industry.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes popIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(30px);
                    }
                    50% {
                        transform: scale(1.1) translateY(-5px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translate(0, 0); 
                        opacity: 0.2;
                    }
                    50% { 
                        transform: translate(50px, -50px); 
                        opacity: 0.4;
                    }
                }






            `}</style>
        </section>
    );
}