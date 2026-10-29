"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const technologies = [
        {
            category: "Frontend",
            description: "Modern frameworks for fast, interactive portfolios",
            items: [
                { name: "Next.js", logo: "/images/techstack_logos/nextjs-logo.svg", url: "/services/web-design-development/nextjs-development-services" },
                { name: "React", logo: "/images/techstack_logos/react-logo.svg", url: "/services/web-design-development/nextjs-development-services" },
                { name: "Tailwind CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
                { name: "Framer Motion", logo: "/images/techstack_logos/framer-motion-logo.svg" },
            ],
        },
        {
            category: "CMS Options",
            description: "Easy content management for your portfolio",
            items: [
                { name: "Sanity", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Contentful", logo: "/images/techstack_logos/Contentful-logo.webp", url: "/services/web-design-development/contentful-headless-cms" },
                { name: "Strapi", logo: "/images/techstack_logos/Strapi-logo.png", url: "/services/web-design-development/strapi-headless-cms" },
                { name: "WordPress", logo: "/images/techstack_logos/wordpress-logo-hero1.png", url: "/services/web-design-development/wordpress-development-services" },
            ],
        },
        {
            category: "Design Tools",
            description: "Tools we use to design your perfect portfolio",
            items: [
                { name: "Figma", logo: "/images/techstack_logos/figma-logo.svg" },
                { name: "Adobe", logo: "/images/ai_automation_logos/adobe-logo.png" },
            ],
        },
        {
            category: "Hosting",
            description: "Fast, reliable hosting for global reach",
            items: [
                { name: "Vercel", logo: "/images/techstack_logos/vercel-logo.webp", url: "/services/web-design-development/saas-development-services" },
                { name: "Netlify", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "Cloudflare", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
            ],
        },
        {
            category: "Integrations",
            description: "Connect with your favorite tools and services",
            items: [
                { name: "Calendly", logo: "/images/techstack_logos/calendly-logo.webp" },
                { name: "Mailchimp", logo: "/images/ai_automation_logos/mailchimp-logo.svg", url: "/services/performance-marketing" },
                { name: "HubSpot", logo: "/images/ai_automation_logos/hubspot-logo.png" },
            ],
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Built with <span style={{ color: "var(--accent-cyan-text)" }}>Modern Tech</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use the latest technologies to create fast, beautiful, and maintainable portfolio websites.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {technologies.map((tech, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === idx ? "scale-105 shadow-lg" : "hover:scale-105"
                                }`}
                            style={{
                                background: activeCategory === idx
                                    ? "linear-gradient(135deg, #06b6d4, #0891b2)"
                                    : "var(--card-bg)",
                                color: activeCategory === idx ? "white" : "var(--secondary-text)",
                                border: `1px solid ${activeCategory === idx ? "transparent" : "var(--border-color)"}`,
                            }}
                        >
                            {tech.category}
                        </button>
                    ))}
                </div>

                {/* Logo Display */}
                <div
                    className="p-8 rounded-3xl border transition-all duration-300"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <p className="text-center mb-8" style={{ color: "var(--secondary-text)" }}>
                        {technologies[activeCategory].description}
                    </p>

                    <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
                        {technologies[activeCategory].items.map((item, lidx) => {
                            const commonClasses = "flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110 cursor-pointer";
                            const content = (
                                <>
                                    <div
                                        className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-4 rounded-2xl"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #06b6d4 5%, var(--background))",
                                        }}
                                    >
                                        <Image
                                            src={item.logo}
                                            alt={`${item.name} logo`}
                                            fill
                                            className="object-contain p-3 filter dark:brightness-90"
                                        />
                                    </div>
                                    <span
                                        className="text-xs md:text-sm font-medium text-center"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            );

                            // @ts-ignore
                            if (item.url) {
                                return (
                                    <Link
                                        key={lidx}
                                        // @ts-ignore
                                        href={item.url}
                                        className={commonClasses}
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={lidx}
                                    className={commonClasses}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {[
                        { label: "Page Speed", value: "98+" },
                        { label: "Mobile Score", value: "100" },
                        { label: "Uptime", value: "High" },
                        { label: "SEO Ready", value: "✓" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div
                                className="text-3xl font-bold mb-2"
                                style={{ color: "var(--accent-cyan-text)" }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
