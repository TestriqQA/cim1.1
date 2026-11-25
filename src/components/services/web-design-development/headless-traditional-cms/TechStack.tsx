"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
    Cloud,
    Code2,
    Database,
    Globe,
    Layers,
    Rocket,
} from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);
    // The fade-in runs only after a real tab switch: this component's <style jsx>
    // CSS is injected on the client, so animating on first load would flash.
    const [switched, setSwitched] = useState(false);

    // The content box eases between heights when the tab changes. The height is
    // fixed only for the 400ms of the change; at rest it is auto, so a resize
    // (or printing) can never clip the cards.
    const boxRef = useRef<HTMLDivElement>(null);
    const fromHeight = useRef<number | null>(null);

    const selectCategory = (idx: number) => {
        if (idx === activeCategory) return;
        fromHeight.current = boxRef.current?.offsetHeight ?? null;
        setActiveCategory(idx);
        setSwitched(true);
    };

    useLayoutEffect(() => {
        const box = boxRef.current;
        const from = fromHeight.current;
        fromHeight.current = null;
        if (!box || from === null) return;
        box.style.height = "";
        const to = box.offsetHeight; // natural height with the new cards
        if (from === to) return;
        box.style.height = `${from}px`;
        void box.offsetHeight; // apply the start height before animating
        box.style.height = `${to}px`;
        const release = () => {
            box.style.height = "";
        };
        box.addEventListener("transitionend", release, { once: true });
        const fallback = window.setTimeout(release, 450);
        return () => {
            window.clearTimeout(fallback);
            box.removeEventListener("transitionend", release);
        };
    }, [activeCategory]);

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
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Built with{" "}
                        <span style={{ color: "var(--accent-violet-text)" }}>
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

                {/* Category Tabs: no glow or grow. The selected tab is #9333ea (white text
                    5.4:1); the others get a 50% accent border on hover. Icon-only 44x44 tabs on phones. */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => selectCategory(idx)}
                                aria-label={category.title}
                                aria-pressed={isActive}
                                className={`flex items-center justify-center min-h-11 min-w-11 sm:min-h-0 sm:min-w-0 gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm border transition duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                    ? "bg-[#9333ea] border-[#9333ea] text-white focus-visible:brightness-120"
                                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#9333ea]/50 focus-visible:border-[#9333ea]/50"
                                    }`}
                            >
                                <Icon className="w-4 h-4" aria-hidden="true" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Height eases between tabs. pt-1/-mt-1 leave room inside the clip
                        for the cards' 4px hover lift. */}
                    <div
                        ref={boxRef}
                        className="-mt-1 pt-1 overflow-hidden transition-[height] duration-[400ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div key={activeCategory}>
                            {/* Names the open tab at every size (phones show icon-only tabs). */}
                            <div className={`text-center mb-8 ${switched ? "tech-card-in" : ""}`}>
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {categories[activeCategory].technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#9333ea]/50 hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${switched ? "tech-card-in" : ""}`}
                                        style={{
                                            backgroundColor: "var(--background)",
                                            animationDelay: switched ? `${idx * 40}ms` : undefined,
                                        }}
                                    >
                                        {/* Logo */}
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={tech.logo}
                                                alt={tech.name}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="font-semibold truncate"
                                                style={{ color: "var(--accent-violet-text)" }}
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
                </div>

                <style jsx>{`
                    @keyframes techCardIn {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .tech-card-in {
                        animation: techCardIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .tech-card-in { animation: none; }
                    }
                `}</style>
            </div>
        </section>
    );
}
