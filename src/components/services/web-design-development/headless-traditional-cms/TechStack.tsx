"use client";

import { useState } from "react";
import { Cloud, Globe, Code2, Database, Rocket, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "headless",
            title: "Headless CMS",
            icon: Cloud,
            description: "Modern API-first content platforms",
            technologies: [
                { name: "Contentful", description: "Enterprise content infrastructure", logo: "/images/techstack_logos/Contentful-logo.webp" },
                { name: "Strapi", description: "Open-source headless CMS", logo: "/images/techstack_logos/Strapi-logo.png" },
                { name: "Sanity", description: "Real-time content platform", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Ghost", description: "Publishing platform", logo: "/images/techstack_logos/Ghost-logo.jpg" },
                { name: "Directus", description: "Data platform", logo: "/images/techstack_logos/Directus-logo.png" },
                { name: "Prismic", description: "Headless website builder", logo: "/images/techstack_logos/prismic-logo.webp" },
            ],
        },
        {
            id: "traditional",
            title: "Traditional CMS",
            icon: Globe,
            description: "Battle-tested content management systems",
            technologies: [
                { name: "WordPress", description: "World's most popular CMS", logo: "/images/techstack_logos/wordpress-logo-hero1.png" },
                { name: "Drupal", description: "Enterprise CMS platform", logo: "/images/techstack_logos/Drupal-logo.png" },
                { name: "Joomla", description: "Flexible CMS", logo: "/images/techstack_logos/joomla-logo.svg" },
                { name: "WooCommerce", description: "WordPress commerce", logo: "/images/techstack_logos/WooCommerce-logo.png" },
                { name: "Wix", description: "Website builder", logo: "/images/techstack_logos/wix-logo.svg" },
                { name: "Squarespace", description: "Design-focused builder", logo: "/images/techstack_logos/Squarespace-logo.webp" },
            ],
        },
        {
            id: "frontend",
            title: "Frontend Integration",
            icon: Code2,
            description: "Modern frontend frameworks for CMS",
            technologies: [
                { name: "Next.js", link: "/services/web-design-development/nextjs-development-services", description: "React framework", logo: "/images/techstack_logos/nextjs-logo.svg" },
                { name: "React", description: "UI library", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Vue.js", description: "Progressive framework", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Nuxt", description: "Vue framework", logo: "/images/techstack_logos/nuxt-logo.png" },
                { name: "Gatsby", description: "Static site generator", logo: "/images/techstack_logos/Gatsby-logo.png" },
                { name: "Astro", link: "/services/web-design-development/astro-framework-services", description: "Content-focused framework", logo: "/images/techstack_logos/Astro-logo.svg" },
            ],
        },
        {
            id: "data",
            title: "API & Data Layer",
            icon: Database,
            description: "Data fetching and API technologies",
            technologies: [
                { name: "GraphQL", description: "Query language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "REST API", description: "Standard web APIs", logo: "/images/techstack_logos/REST-API-logo.png" },
                { name: "Prisma", description: "Database ORM", logo: "/images/techstack_logos/prisma-logo.png" },
                { name: "PostgreSQL", link: "/services/web-design-development/nodejs-backend", description: "Relational database", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MongoDB", description: "NoSQL database", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "Redis", description: "In-memory cache", logo: "/images/techstack_logos/redis-logo.svg" },
            ],
        },
        {
            id: "hosting",
            title: "Hosting & CDN",
            icon: Rocket,
            description: "Deployment and content delivery",
            technologies: [
                { name: "Vercel", link: "/services/web-design-development/nextjs-development-services", description: "Frontend cloud", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", description: "Web hosting platform", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "AWS", description: "Cloud services", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Cloudflare", description: "CDN & security", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "WP Engine", description: "WordPress hosting", logo: "/images/techstack_logos/WP-Engine-logo.png" },
                { name: "Pantheon", description: "CMS hosting", logo: "/images/techstack_logos/Pantheon-logo-1.png" },
            ],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#9333ea" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-5 blur-3xl"
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
                        <Layers className="w-4 h-4" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Built with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Leading
                        </span>{" "}
                        Platforms
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We work with the best CMS platforms and technologies to deliver
                        content management solutions that scale with your business.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(idx)}
                                aria-label={category.title}
                                className={`
                                    flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "#9333ea" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#9333ea" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(147, 51, 234, 0.4)" : "none",
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
                    className="rounded-3xl border p-8 md:p-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="text-center mb-8">
                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: "var(--foreground)" }}
                        >
                            {categories[activeCategory].title}
                        </h3>
                        <p style={{ color: "var(--secondary-text)" }}>
                            {categories[activeCategory].description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories[activeCategory].technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "color-mix(in srgb, #9333ea 15%, transparent)",
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
                                            style={{ color: "var(--accent-violet-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--accent-violet-text)" }}
                                    >
                                        {/* @ts-ignore */}
                                        {tech.link ? (
                                            /* @ts-ignore */
                                            <Link href={tech.link} className="hover:underline transition-all">
                                                {tech.name}
                                            </Link>
                                        ) : (
                                            tech.name
                                        )}
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
