"use client";

import { useState } from "react";
import { Rocket, Layers, FileText, Palette, Cloud } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Rocket,
            description: "Astro ecosystem fundamentals for near-perfect PageSpeed",
            technologies: [
                { name: "Astro", description: "Zero JS by default, Islands Architecture, near-perfect PageSpeed", logo: "/images/techstack_logos/Astro-logo.svg" },
                { name: "TypeScript", description: "Type safety, better IDE support, enterprise-ready", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "JavaScript", description: "Universal language, ecosystem compatibility", logo: "/images/techstack_logos/javascript-logo.svg" },
                { name: "HTML5", description: "SEO excellence, accessibility, web standards", logo: "/images/techstack_logos/html5-logo.svg" },
                { name: "CSS3", description: "Modern styling, responsive design, animations", logo: "/images/techstack_logos/css3-logo.svg" },
            ],
        },
        {
            id: "frameworks",
            title: "UI Frameworks",
            icon: Layers,
            description: "Reusable islands for rich ecosystem features",
            technologies: [
                { name: "React", description: "Rich ecosystem, familiar developer experience", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Vue.js", description: "Lightweight components, simple integration", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Svelte", description: "Zero runtime, smallest bundles, blazing performance", logo: "/images/techstack_logos/Svelte-Logo.png" },
                { name: "Solid.js", description: "Reactive Framework", logo: "/images/techstack_logos/solidjs-logo.png" },
                { name: "Tailwind CSS", description: "Rapid prototyping, design consistency", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
            ],
        },
        {
            id: "content",
            title: "Content & CMS",
            icon: FileText,
            description: "Optimized content management solutions",
            technologies: [
                { name: "MDX", description: "Rich content, component embedding", logo: "/images/techstack_logos/mdx-logo.webp" },
                { name: "Markdown", description: "Simple authoring, version control friendly", logo: "/images/techstack_logos/Markdown-logo.png" },
                { name: "Contentful", description: "Headless CMS, API-first publishing", logo: "/images/techstack_logos/Contentful-logo.webp" },
                { name: "Sanity", description: "Structured content platform", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Strapi", description: "Open source CMS, flexible management", logo: "/images/techstack_logos/Strapi-logo.png" },
            ],
        },
        {
            id: "tools",
            title: "Build & Deploy",
            icon: Cloud,
            description: "Modern static site generator solutions",
            technologies: [
                { name: "Vite", description: "Lightning-fast HMR, optimized builds", logo: "/images/techstack_logos/vitejs-logo.svg" },
                { name: "Vercel", description: "Global CDN, edge deployment, instant rollbacks", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", description: "Global CDN, preview deployments", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "Cloudflare", description: "Edge Network", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
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
                        <Rocket className="w-4 h-4" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>
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
                                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Astro
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Astro framework ecosystem and integrations seamlessly connect with your favorite tools and frameworks for modern static site generator solutions.
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
                                aria-label={category.title}
                                onClick={() => setActiveCategory(idx)}
                                className={`
                                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "#7C3AED" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#7C3AED" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(124, 58, 237, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(124, 58, 237, 0.1)",
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
