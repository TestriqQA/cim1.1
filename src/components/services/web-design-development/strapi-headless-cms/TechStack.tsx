"use client";

import { useState } from "react";
import { Layers, Server, Database, Cloud, Globe } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Layers,
            description: "Strapi ecosystem fundamentals",
            technologies: [
                { name: "Strapi v5", description: "Headless CMS", logo: "/images/techstack_logos/Strapi-logo.png" },
                { name: "Node.js", description: "Runtime", logo: "/images/techstack_logos/nodejs-logo.svg" },
                { name: "TypeScript", description: "Type Safety", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "Koa.js", description: "HTTP Framework", logo: "/images/techstack_logos/Koajs-logo.gif" },
                { name: "npm/Yarn", description: "Package Manager", logo: "/images/techstack_logos/npm-logo.svg" },
            ],
        },
        {
            id: "api",
            title: "API Layer",
            icon: Server,
            description: "API development tools",
            technologies: [
                { name: "REST API", description: "RESTful Endpoints", logo: "/images/techstack_logos/REST-API-logo.png" },
                { name: "GraphQL", description: "Query Language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "Swagger/OpenAPI", description: "API Docs", logo: "/images/techstack_logos/OpenAPI-Swagger-logo.png" },
                { name: "JWT", description: "Authentication", logo: "/images/techstack_logos/jwt-logo.webp" },
            ],
        },
        {
            id: "database",
            title: "Databases",
            icon: Database,
            description: "Data storage options",
            technologies: [
                { name: "PostgreSQL", description: "Primary DB", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MySQL", description: "Relational DB", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "SQLite", description: "Development", logo: "/images/techstack_logos/sqlite-logo.svg" },
                { name: "MongoDB", description: "NoSQL Option", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "Redis", description: "Caching", logo: "/images/techstack_logos/redis-logo.svg" },
            ],
        },
        {
            id: "frontend",
            title: "Frontend Integrations",
            icon: Globe,
            description: "Connect to any frontend",
            technologies: [
                { name: "Next.js", description: "React Framework", logo: "/images/techstack_logos/nextjs-logo.svg" },
                { name: "React", description: "UI Library", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Vue.js", description: "Progressive Framework", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Nuxt", description: "Vue Framework", logo: "/images/techstack_logos/nuxt-logo.png" },
                { name: "Gatsby", description: "Static Generator", logo: "/images/techstack_logos/Gatsby-logo.png" },
            ],
        },
        {
            id: "cloud",
            title: "Cloud & Hosting",
            icon: Cloud,
            description: "Deployment platforms",
            technologies: [
                { name: "Strapi Cloud", description: "Official Hosting", logo: "/images/techstack_logos/Strapi-logo.png" },
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "AWS", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Vercel", description: "Edge Deployment", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "DigitalOcean", description: "Cloud Hosting", logo: "/images/techstack_logos/DigitalOcean-logo.svg" },
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
                        <Layers className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-indigo-text)" }}>
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
                                background: "linear-gradient(135deg, #4945FF, #7B79FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Strapi
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Modern JavaScript stack powering flexible, scalable content infrastructure.
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
                                    backgroundColor: isActive ? "#4945FF" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#4945FF" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(73, 69, 255, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(73, 69, 255, 0.1)",
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
                                            style={{ color: "var(--accent-indigo-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--accent-indigo-text)" }}
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
