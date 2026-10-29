"use client";

import { useState } from "react";
import { Code2, Layout, ShoppingBag, Cloud, Search } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Ecosystem",
            icon: Code2,
            description: "Foundation of future-proof WordPress development",
            technologies: [
                { name: "WordPress 6.7+", description: "Core CMS Platform", logo: "/images/techstack_logos/wordpress-logo-hero1.png" },
                { name: "PHP 8.4+", description: "Server-side Engine", logo: "/images/techstack_logos/php-logo.svg" },
                { name: "MySQL 8", description: "Database Management", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "Gutenberg", description: "Custom Block Dev", logo: "/images/techstack_logos/Gutenberg-logo.svg" },
                { name: "REST/GraphQL", description: "Advanced API Sync", logo: "/images/techstack_logos/REST-API-logo.png" },
                { name: "ACF Pro", description: "Custom Workflows", logo: "/images/techstack_logos/ACF-logo.png" },
            ],
        },
        {
            id: "builders",
            title: "Editor & Performance",
            icon: Layout,
            description: "Visual design and performance builders",
            technologies: [
                { name: "Gutenberg Blocks", description: "Custom Block Logic", logo: "/images/techstack_logos/Gutenberg-logo.svg" },
                { name: "Elementor", description: "Visual Builder", logo: "/images/techstack_logos/Elementor-logo.png" },
                { name: "Tailwind CSS", description: "Utility-first Style", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
                { name: "Vanilla JS", description: "Lightweight Logic", logo: "/images/techstack_logos/javascript-logo.svg" },
                { name: "Bricks Builder", description: "High-Performance", logo: "/images/techstack_logos/Bricks-Builder-logo.svg" },
            ],
        },
        {
            id: "ecommerce",
            title: "E-commerce & Payments",
            icon: ShoppingBag,
            description: "Online store solutions and payment gateways",
            technologies: [
                { name: "WooCommerce", description: "E-commerce Core", logo: "/images/techstack_logos/WooCommerce-logo.png" },
                { name: "Stripe", description: "Payment Infrastructure", logo: "/images/techstack_logos/Stripe-logo.png" },
                { name: "PayPal", description: "Global Payments", logo: "/images/techstack_logos/paypal-logo.png" },
                { name: "Inventory Sync", description: "Smart Stock Sync", logo: "" },
                { name: "Custom Checkout", description: "High Conversion", logo: "" },
            ],
        },
        {
            id: "devops",
            title: "DevOps & Deployment",
            icon: Cloud,
            description: "Managed hosting and automated deployment",
            technologies: [
                { name: "WP Engine", description: "Managed WP Hosting", logo: "/images/techstack_logos/WP-Engine-logo.png" },
                { name: "Git", description: "Version Control", logo: "/images/techstack_logos/git-logo.svg" },
                { name: "Automated Deploy", description: "CI/CD Pipelines", logo: "" },
                { name: "Cloudflare", description: "CDN & Security", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "AWS", description: "Cloud Infrastructure", logo: "/images/techstack_logos/aws-logo.png" },
            ],
        },
        {
            id: "seo",
            title: "SEO & Growth",
            icon: Search,
            description: "Search optimization and marketing tools",
            technologies: [
                { name: "RankMath", description: "SEO Suite", logo: "/images/techstack_logos/RankMath-logo.jpg" },
                { name: "Yoast SEO", description: "SEO Plugin", logo: "/images/techstack_logos/Yoast-SEO-logo.png" },
                { name: "Google Analytics 4", description: "Modern Tracking", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
                { name: "Schema.org", description: "Structured Data", logo: "" },
                { name: "PageSpeed", description: "Core Web Vitals", logo: "" },
            ],
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
                        <Code2 className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Tech Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            WordPress
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We leverage the best tools and technologies in the WordPress ecosystem.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(idx)}
                                aria-label={category.title}
                                className={`
                                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "#0073AA" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#0073AA" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(0, 115, 170, 0.4)" : "none",
                                }}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12 mb-8"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {categories[activeCategory].technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "rgba(0, 115, 170, 0.1)",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span
                                            className="text-lg font-bold"
                                            style={{ color: "var(--brand-blue-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--brand-blue-text)" }}
                                    >
                                        {tech.name}
                                    </p>
                                    <p
                                        className="text-sm truncate"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
