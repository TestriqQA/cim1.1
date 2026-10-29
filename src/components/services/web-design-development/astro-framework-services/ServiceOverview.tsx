"use client";

import { useState } from "react";
import {
    Megaphone,
    FileText,
    ShoppingBag,
    BookOpen,
    Layers,
    ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Megaphone,
            title: "Marketing & Landing Pages",
            description: "High-converting Astro development for marketing landing pages that load instantly and rank higher. Perfect for product launches and lead generation.",
            gradient: "from-violet-600 to-purple-400",
            shadowColor: "rgba(124, 58, 237, 0.4)",
        },
        {
            icon: FileText,
            title: "Content-Driven Websites",
            description: <>Best Astro agency for high-performance <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">blogs, portfolios, and publishing platforms</Link> optimized for SEO and reader experience. Built-in MDX support.</>,
            gradient: "from-orange-500 to-amber-400",
            shadowColor: "rgba(255, 93, 1, 0.4)",
        },
        {
            icon: ShoppingBag,
            title: "E-commerce Storefronts",
            description: <>Fast Astro framework for <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-pink-text)] hover:underline underline underline-offset-2">ecommerce websites</Link> with product catalogs and storefronts that convert. Integrate with Shopify or headless CMSs.</>,
            gradient: "from-pink-500 to-rose-400",
            shadowColor: "rgba(236, 72, 153, 0.4)",
        },
        {
            icon: BookOpen,
            title: "Documentation Sites",
            description: "Astro framework for SaaS documentation sites, developer portals, and knowledge bases with excellent search, versioning, and navigation.",
            gradient: "from-blue-500 to-cyan-400",
            shadowColor: "rgba(59, 130, 246, 0.4)",
        },
        {
            icon: Layers,
            title: "Multi-Framework Projects",
            description: "Astro integration with React and Vue components in a single project using Astro islands architecture. Build hybrid applications seamlessly.",
            gradient: "from-emerald-500 to-teal-400",
            shadowColor: "rgba(16, 185, 129, 0.4)",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration to Astro",
            description: <>Astro migration services from <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Next.js</Link> or Gatsby to reduce bundle sizes by 90% and improve <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Core Web Vitals</Link> instantly.</>,
            gradient: "from-indigo-500 to-violet-400",
            shadowColor: "rgba(99, 102, 241, 0.4)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #FF5D01, #FF8534)",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(168, 85, 247, 0.1))",
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
                        What We{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Build with Astro
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From simple landing pages to complex multi-framework applications, we leverage Astro component-based architecture and modern hydration strategies in web development for exceptional performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.shadowColor}, transparent)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, transparent, ${service.shadowColor})`,
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${service.gradient}`}
                                            style={{
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
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
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            background: `linear-gradient(90deg, ${service.gradient})`,
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
