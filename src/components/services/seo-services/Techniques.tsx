"use client";

import { useState } from "react";
import Link from "next/link";
import {
    FileText, Code, Globe, Store, Link2, MousePointerClick, Settings,
    CheckCircle2, Zap, Search, Rocket, Target, BarChart,
    TrendingUp, Award, Sparkles
} from "lucide-react";

export default function Techniques() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const techniques = [
        {
            icon: FileText,
            decorIcon: Search,
            title: "On-Page Optimization",
            description: "We optimize every pixel. From H1 tags to semantic HTML, we ensure your content speaks the language of search engines.",
            features: ["Search Intent Optimization", "Generative Engine Optimization (GEO)", "Schema Markup Implementation"],
            badge: "Foundation",
            color: "#3b82f6",
            gradient: "from-blue-500 to-cyan-500",
            link: "/services/seo-services/on-page-seo-services",
        },
        {
            icon: Code,
            decorIcon: Settings,
            title: "Technical SEO",
            description: "The foundation of growth. We fix crawl errors, optimize site speed, and ensure mobile-first indexing compliance.",
            features: ["Technical SEO Audit & Remediation", "Core Web Vitals Optimization", "JavaScript SEO for Next.js/React"],
            badge: "Technical",
            color: "#8b5cf6",
            gradient: "from-purple-500 to-pink-500",
            link: "/services/seo-services/technical-seo-services",
        },
        {
            icon: Globe,
            decorIcon: Sparkles,
            title: "Content Strategy & Marketing",
            description: "Content is King, but Context is Queen. Our Organic SEO content marketing strategy builds topical authority through expert-led articles, whitepapers, and guides.",
            features: ["Topical Authority Mapping", "E-E-A-T Content Updates", "Video & Visual SEO"],
            badge: "Content",
            color: "#10b981",
            gradient: "from-green-500 to-emerald-500",
            link: "/services/seo-services/seo-content-writing-services",
        },
        {
            icon: Settings,
            decorIcon: Target,
            title: "Local SEO",
            description: "Dominate your neighborhood. Our Organic SEO for local business growth puts you on the map—literally.",
            features: ["Google Business Profile Optimization", "Localized Content & Citations", "Reviews Management"],
            badge: "Local",
            color: "#f59e0b",
            gradient: "from-amber-500 to-orange-500",
            link: "/services/seo-services/local-seo-services",
        },
        {
            icon: Store,
            decorIcon: BarChart,
            title: "E-commerce SEO",
            description: "Turn browsers into buyers. Our Organic growth SEO for ecommerce optimizes product pages and category architecture for maximum conversion.",
            features: ["Product Schema & Structured Data", "Faceted Navigation Optimization", "Seasonal Campaign SEO"],
            badge: "E-commerce",
            color: "#0EA5E9",
            gradient: "from-sky-400 to-cyan-500",
            link: "/services/seo-services/ecommerce-seo-services",
        },
        {
            icon: Link2,
            decorIcon: Award,
            title: "Link Building",
            description: "Vote of confidence. We secure high-quality backlinks from authoritative domains to boost your site's trustworthiness.",
            features: ["Backlink Profile Analysis", "Digital PR & Outreach", "Guest Posting on Industry Hubs"],
            badge: "Authority",
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-500",
            link: "/services/seo-services/link-building",
        },
    ];

    // Map per-card brand hue (used for borders/gradients/icons) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textColorMap: Record<string, string> = {
        "#3b82f6": "var(--brand-blue-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#10b981": "var(--accent-green-text)",
        "#f59e0b": "var(--accent-amber-text)",
        "#0EA5E9": "var(--accent-sky-text)",
        "#06b6d4": "var(--accent-cyan-text)",
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-seo) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    animation: 'gridMove 20s linear infinite'
                }}></div>
            </div>

            {/* Floating Elements */}

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
                        <Rocket className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-green-text)" }}>
                            SEO Techniques
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Types of <span style={{ color: "var(--accent-green-text)" }}>SEO Techniques</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We offer a holistic suite of solutions tailored to your specific needs, from <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">Organic SEO for SaaS companies</Link> to <Link href="/services/seo-services/local-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">local brick-and-mortar growth</Link>.
                    </p>
                </div>

                {/* Techniques Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techniques.map((tech, index) => {
                        const Icon = tech.icon;
                        const DecorIcon = tech.decorIcon;
                        const isHovered = hoveredIndex === index;
                        const linkProp = 'link' in tech ? (tech as { link?: string }).link : undefined;

                        const cardContent = (
                            <div
                                className="group relative h-full"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: `fadeInScale 0.6s ease-out ${index * 0.08}s both`,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 90%, transparent)",
                                        borderColor: isHovered ? tech.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        // the coloured hover glow went with the rest of the page's glows
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Hover lift and border colour are the only card effects left —
                                        same treatment as the Why Choose Us cards. The hover tint,
                                        spinning decoration, badge pulse, icon tilt and glow, corner
                                        brackets, sliding bottom bar and glass sweep are removed. */}

                                    {/* Decoration (static) */}
                                    <div
                                        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${tech.color}15`,
                                            opacity: 0.4,
                                        }}
                                    >
                                        <DecorIcon className="w-10 h-10" style={{ color: tech.color }} />
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <div
                                            className="px-3 py-1 rounded-full text-xs font-bold"
                                            style={{
                                                backgroundColor: `${tech.color}25`,
                                                color: textColorMap[tech.color],
                                            }}
                                        >
                                            {tech.badge}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className="relative w-16 h-16 rounded-xl p-3.5"
                                            style={{ backgroundColor: `${tech.color}20` }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: tech.color }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-all duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? textColorMap[tech.color] : "var(--foreground)",
                                        }}
                                    >
                                        {tech.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-5 transition-colors duration-300 relative z-10"
                                        style={{
                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                        }}
                                    >
                                        {tech.description}
                                    </p>

                                    {/* Features — tick sized under the text (16px ring, 10px glyph)
                                        and text raised to the description's size, as on the chatbot cards */}
                                    <div className="space-y-2 relative z-10">
                                        {tech.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div
                                                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: `${tech.color}15` }}
                                                >
                                                    <CheckCircle2 className="w-2.5 h-2.5" style={{ color: tech.color }} />
                                                </div>
                                                <span
                                                    className="text-sm font-medium transition-colors duration-300"
                                                    style={{
                                                        color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );

                        return linkProp ? (
                            <Link href={linkProp} key={index} className="block h-full">
                                {cardContent}
                            </Link>
                        ) : (
                            <div key={index} className="h-full">{cardContent}</div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(120deg); }
                    66% { transform: translate(-20px, 20px) rotate(240deg); }
                }

                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(40px, 40px); }
                }

                .animate-float {
                    animation: float 15s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float 18s ease-in-out 2s infinite;
                }

                .animate-float-slow {
                    animation: float 20s ease-in-out 4s infinite;
                }
            `}</style>
        </section>
    );
}