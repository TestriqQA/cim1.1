"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const technologies = [
        {
            category: "CMS Platforms",
            description: "Powerful CMS options for every scale of publishing",
            items: [
                { name: "WordPress VIP", logo: "/images/techstack_logos/wordpress-logo-hero1.png", url: "/services/web-design-development/wordpress-development-services" },
                { name: "Strapi", logo: "/images/techstack_logos/Strapi-logo.png", url: "/services/web-design-development/strapi-headless-cms" },
                { name: "Ghost", logo: "/images/techstack_logos/Ghost-logo.jpg" },
                { name: "Drupal", logo: "/images/techstack_logos/Drupal-logo.png", url: "/services/web-design-development/drupal-cms" },
            ],
        },
        {
            category: "Frontend",
            description: "Fast, SEO-friendly rendering engines",
            items: [
                { name: "Next.js", logo: "/images/techstack_logos/nextjs-logo.svg", url: "/services/web-design-development/nextjs-development-services" },
                { name: "React", logo: "/images/techstack_logos/react-logo.svg", url: "/services/web-design-development/nextjs-development-services" },
                { name: "Vue.js", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Svelte", logo: "/images/techstack_logos/Svelte-Logo.png" },
            ],
        },
        {
            category: "Backend",
            description: "Robust backend technologies for scalability",
            items: [
                { name: "Node.js", logo: "/images/techstack_logos/nodejs-logo.svg", url: "/services/web-design-development/nodejs-backend" },
                { name: "Python", logo: "/images/techstack_logos/python-logo.svg", url: "/services/web-design-development/python-django" },
                { name: "Laravel", logo: "/images/techstack_logos/Laravel-logo.png", url: "/services/web-design-development/laravel-php" },
                { name: "Django", logo: "/images/techstack_logos/django-logo.svg", url: "/services/web-design-development/python-django" },
            ],
        },
        {
            category: "Infrastructure",
            description: "Cloud infrastructure for global speed and uptime",
            items: [
                { name: "AWS", logo: "/images/techstack_logos/aws-logo.png", url: "/services/web-design-development/saas-development-services" },
                { name: "Google Cloud", logo: "/images/techstack_logos/googlecloud-logo.svg" },
                { name: "Vercel", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "DigitalOcean", logo: "/images/techstack_logos/DigitalOcean-logo.svg" },
            ],
        },
        {
            category: "Integrations",
            description: "Essential tools for distribution and monetization",
            items: [
                { name: "Google Trends", logo: "/images/techstack_logos/Google-Trends-logo.jpg" },
                { name: "SendGrid", logo: "/images/techstack_logos/SendGrid-logo.png" },
                { name: "Mailchimp", logo: "/images/ai_automation_logos/mailchimp-logo.svg", url: "/services/performance-marketing" },
                { name: "Display & Video 360", logo: "/images/techstack_logos/DV360-Logo.webp" },
            ],
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Powered by <span style={{ color: "#a855f7" }}>Modern Digital Journalism Tools</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use industry-leading technologies to build fast, scalable, and easy-to-manage content platforms.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                    ? "linear-gradient(135deg, #a855f7, #ec4899)"
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
                                            backgroundColor: "color-mix(in srgb, #a855f7 5%, var(--background))",
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

                            if (item.url) {
                                return (
                                    <Link
                                        key={lidx}
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
                        { label: "Page Speed", value: "95+" },
                        { label: "SEO Score", value: "90+" },
                        { label: "Uptime", value: "High" },
                        { label: "Security", value: "A+" },
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
                                style={{ color: "var(--brand-purple-text)" }}
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
