"use client";

import { useState } from "react";
import {
    Gauge,
    Smartphone,
    Shield,
    FileCode,
    Globe,
    LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const services = [
        {
            icon: Gauge,
            title: "Website Performance Analysis & Site Speed",
            description: <>Speed isn't just a luxury; it's a critical ranking factor. Our <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">professional website speed optimization services</Link> leverage server-side rendering and edge caching to ensure your site loads faster than the competition.</>,
            color: techPurple,
        },
        {
            icon: Smartphone,
            title: "Mobile-First Indexing Optimization Services",
            description: <>With Google's mobile-first approach, your mobile site is your primary site. We conduct a thorough <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">technical SEO audit for WordPress</Link> sites and custom builds to ensure 100% mobile parity and responsiveness.</>,
            color: "#3B82F6",
        },
        {
            icon: Shield,
            title: "HTTPS, SSL & Security for SEO",
            description: <>Security is a core trust signal. We implement advanced <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">HTTPS and SSL security for SEO</Link>, including security headers (HSTS) and malware protection, to build ultimate E-E-A-T.</>,
            color: "#22C55E",
        },
        {
            icon: FileCode,
            title: "XML Sitemap & Robots.txt Optimization",
            description: <>Guide search engines to your most valuable content. We provide expert <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">XML sitemap and robots.txt optimization</Link> to prevent crawl waste and ensure your priority pages are indexed instantly.</>,
            color: "#F59E0B",
        },
        {
            icon: Globe,
            title: <Link href="/services/seo-services/local-seo-services" className="hover:underline">Technical SEO for International Websites</Link>,
            description: <>Scaling globally? Our <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">technical SEO for international websites</Link> includes precise hreflang tag implementation and geo-targeting strategies to capture audiences in the US, EU, and APAC markets.</>,
            color: "#EC4899",
        },
        {
            icon: LayoutGrid,
            title: "Scalable Website Architecture",
            description: <>Structure is everything. We optimize your website structure and <Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">internal link structure optimization</Link> to distribute authority efficiently, ensuring even the deepest pages find their way to the top of SERPs.</>,
            color: "#06B6D4",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300 border-t"
            style={{
                backgroundColor: "var(--background)",
                borderColor: "#555555"
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: techPurple,
                        animationDuration: "4s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${techPurple}30`,
                                color: "var(--accent-violet-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive Technical SEO{" "}
                        <span style={{ color: "var(--accent-violet-text)" }}>
                            Services for Scalable Growth
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Search engine algorithms are more complex than ever. Our technical SEO services go beyond the basics, solving the deep-rooted issues that hinder your organic growth and user experience.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full
                                        ${isHovered ? "-translate-y-2" : ""}
                                    `}
                                    style={{
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    {/* Hover Gradient BG */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "scale-110 rotate-3" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-500"
                                                style={{
                                                    color: isHovered ? "white" : "var(--foreground)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
