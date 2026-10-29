"use client";

import { useState } from "react";
import {
    Store,
    Building2,
    Newspaper,
    GraduationCap,
    HeartPulse,
    Scale,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const solutions = [
        {
            id: "ecommerce",
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">E-commerce Websites</Link>,
            description: <span>Specialized on-page SEO optimization for <Link href="/services/seo-services/ecommerce-seo-services" className="hover:underline underline underline-offset-2">ecommerce websites</Link> (Shopify/Magento/WooCommerce). We optimize product pages for high-intent keywords and implement merchant-specific schema.</span>,
            icon: Store,
            color: seoGreen,
        },
        {
            id: "saas",
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">SaaS & Tech Companies</Link>,
            description: "Strategic on-page SEO strategy for SaaS companies. We focus on feature-driven content and technical debt reduction for fast-growing software platforms.",
            icon: Building2,
            color: "#3B82F6",
        },
        {
            id: "healthcare",
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:underline">Medical Practices & Healthcare</Link>,
            description: "Ensuring YMYL (Your Money Your Life) compliance. We implement strict E-E-A-T signals to build patient trust and dominate local healthcare search.",
            icon: HeartPulse,
            color: "#EC4899",
        },
        {
            id: "legal",
            title: "Law Firms & Legal Services",
            description: "Authoritative content optimization for high-competition legal niches. We optimize practice area pages to convert 'searchers' into 'clients.'",
            icon: Scale,
            color: "#06B6D4",
        },
        {
            id: "realestate",
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline">Real Estate & Property Portals</Link>,
            description: <span>Data-driven on-page SEO for <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline underline underline-offset-2">real estate websites</Link>. We optimize dynamic listing pages and local map signals for hyper-local dominance.</span>,
            icon: Building2,
            color: "#F59E0B",
        },
        {
            id: "wordpress",
            title: <Link href="/services/web-design-development/wordpress-development-services" className="hover:underline">WordPress & CMS Optimization</Link>,
            description: "Expert on-page SEO for WordPress websites. From technical plugin configuration to content pruning, we ensure your CMS isn't holding you back.",
            icon: GraduationCap,
            color: "#8B5CF6",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${seoGreen}15`,
                            borderColor: `${seoGreen}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: seoGreen }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Industry Expertise
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Tailored On-Page <span style={{ color: "var(--accent-green-text)" }}>SEO Strategy for Every Niche</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Different industries require different signals. We provide specialized <strong><Link href="/services/seo-services/local-seo-services" className="hover:underline underline underline-offset-2">on-page SEO services for small businesses</Link></strong> and global enterprises alike.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeCard === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div
                                    className={`
                                        relative h-full p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isActive ? "scale-[1.02] -translate-y-1" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 20px 40px ${solution.color}20` : "none"
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-5" : "opacity-0"}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.color}, transparent)`
                                        }}
                                    />

                                    {/* Icon with animated ring */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isActive ? "rotate-6" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-300"
                                                style={{
                                                    color: isActive ? "white" : solution.color,
                                                }}
                                            />
                                        </div>
                                        {/* Animated ring */}
                                        <div
                                            className={`
                                                absolute inset-0 w-16 h-16 rounded-2xl border-2 transition-all duration-500
                                                ${isActive ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: solution.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>
                                        <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
