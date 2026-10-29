"use client";

import { useState } from "react";
import Link from "next/link";
import { MousePointerClick, RefreshCw, Share2, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#4285f4": "var(--brand-blue-text)",
            "#34a853": "var(--accent-green-text)",
            "#ea4335": "var(--accent-red-text)",
            "#fbbc04": "var(--accent-amber-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const services = [
        {
            icon: MousePointerClick,
            title: "ROI-Focused Google Ads & PPC",
            description: <span>Dominate search results with high-intent <Link href="/services/performance-marketing/google-ads" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Paid Search (PPC)</Link>. We don't just bid on keywords; we dominate search intent.</span>,
            features: ["Search Ads", "Shopping Ads", "Local Services Ads", "Quality Score Optimization"],
            color: "#4285f4",
        },
        {
            icon: Share2,
            title: "Paid Social Media Marketing",
            description: <span>Turn scrollers into buyers on <Link href="/services/performance-marketing/meta-ads" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Meta</Link>, TikTok, and LinkedIn. <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Social media</Link> is no longer just for brand awareness - it is a performance engine.</span>,
            features: ["Meta Ads", "LinkedIn B2B Ads", "TikTok Viral Ads", "Advanced Segmentation"],
            color: "#34a853",
        },
        {
            icon: RefreshCw,
            title: "Precision Retargeting & Remarketing",
            description: <span>Did you know 97% of visitors leave your site without buying? We bring them back with <Link href="/services/performance-marketing/google-ads" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Cross-Platform Retargeting</Link>.</span>,
            features: ["Cross-Platform Retargeting", "Dynamic Product Ads", "Cart Abandonment Flows", "Recover Lost Revenue"],
            color: "#ea4335",
        },
        {
            icon: Layers,
            title: "Programmatic Advertising & Display",
            description: <span>Scale beyond the 'walled gardens'. Access premium inventory across websites, apps, and CTV channels.</span>,
            features: ["Real-Time Bidding (RTB)", "Contextual Targeting", "Native Advertising", "Premium Inventory"],
            color: "#fbbc04",
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            OUR SERVICES
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Full-Funnel <span style={{ color: "var(--accent-orange-text)" }}>Performance Marketing Agency Services</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From the first click to the final sale (and beyond to retention), we optimize every single touchpoint. Whether through <Link href="/services/performance-marketing/google-ads" className="underline underline-offset-2" style={{ color: "var(--accent-orange-text)" }}>Google Ads</Link>, <Link href="/services/performance-marketing/meta-ads" className="underline underline-offset-2" style={{ color: "var(--accent-orange-text)" }}>Meta advertising</Link>, or strategic <Link href="/services/performance-marketing/google-ads" className="underline underline-offset-2" style={{ color: "var(--accent-orange-text)" }}>PPC consulting</Link>, our integrated approach ensures no leak in your funnels. Build sustainable growth by pairing performance marketing with <Link href="/services/seo-services" className="underline underline-offset-2" style={{ color: "var(--accent-orange-text)" }}>organic SEO</Link>.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-5 sm:p-8 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${service.color}40` : "none",
                                    }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${service.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    <div className="relative z-10 flex flex-col md:flex-row gap-6">
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl p-4 flex-shrink-0 transition-all duration-500"
                                            style={{
                                                backgroundColor: `${service.color}20`,
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: service.color }} />
                                        </div>

                                        <div className="flex-1">
                                            <h3
                                                className="text-xl font-bold mb-3 transition-colors duration-300"
                                                style={{ color: isHovered ? textAccent(service.color) : "var(--foreground)" }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                                                {service.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 transition-all duration-300"
                                                        style={{
                                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                            transitionDelay: `${idx * 50}ms`,
                                                        }}
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                                                        <span className="text-xs font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            backgroundColor: service.color,
                                            width: isHovered ? "100%" : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                        style={{ backgroundColor: "#c2410c" }}
                    >
                        Start Your Campaign
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Related Resources */}
                <div className="mt-8 p-6 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>📚 Related Resources</h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/blog/seo-ppc-hybrid-full-stack-funnels-convert-2x-better-2026" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">🔥</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--accent-orange-text)] transition-colors">SEO + PPC Hybrid Funnels</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Why combining organic and paid converts 2x better</p>
                            </div>
                        </Link>
                        <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">📊</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--accent-orange-text)] transition-colors">Maximizing ROI with Performance Marketing</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Complete guide to measuring and improving campaign ROI</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
