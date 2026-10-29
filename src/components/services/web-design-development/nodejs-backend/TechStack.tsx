"use client";

import { useState } from "react";
import { Code2, Server, Database, Cloud, Shield, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "languages",
            title: "Languages & Runtimes",
            icon: Code2,
            description: "Core programming languages",
            technologies: [
                { name: "Node.js", description: "JavaScript runtime", logo: "/images/techstack_logos/nodejs-logo.svg" },
                { name: "TypeScript", description: "Typed JavaScript", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "Python", description: "General purpose", logo: "/images/techstack_logos/python-logo.svg" },
                { name: "Go", description: "High performance", logo: "/images/techstack_logos/go-logo-new.png" },
                { name: "Rust", description: "Systems programming", logo: "/images/techstack_logos/rust-logo.png" },
                { name: "Java", description: "Enterprise standard", logo: "/images/techstack_logos/java-logo.svg" },
            ],
        },
        {
            id: "frameworks",
            title: "Frameworks",
            icon: Server,
            description: "Backend frameworks we use",
            technologies: [
                { name: "Express.js", description: "Minimalist Node.js", logo: "/images/techstack_logos/express-logo1.webp" },
                { name: "NestJS", description: "Enterprise Node.js", logo: "/images/techstack_logos/NestJS-logo.svg" },
                { name: "Fastify", description: "High performance", logo: "/images/techstack_logos/Fastify-logo.png" },
                { name: "Django", description: "Python framework", logo: "/images/techstack_logos/django-logo.svg" },
                { name: "FastAPI", description: "Modern Python API", logo: "/images/techstack_logos/fastapi-logo.webp" },
                { name: "Spring Boot", description: "Java framework", logo: "/images/techstack_logos/spring-logo.svg" },
            ],
        },
        {
            id: "databases",
            title: "Databases",
            icon: Database,
            description: "Data storage solutions",
            technologies: [
                { name: "PostgreSQL", description: "Relational DB", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MongoDB", description: "Document DB", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "Redis", description: "In-memory cache", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "MySQL", description: "Popular SQL DB", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "Elasticsearch", description: "Search engine", logo: "/images/techstack_logos/Elasticsearch-logo.webp" },
                { name: "DynamoDB", description: "AWS NoSQL", logo: "/images/techstack_logos/DynamoDB-logo.png" },
            ],
        },
        {
            id: "cloud",
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Infrastructure and deployment",
            technologies: [
                { name: "AWS", description: "Amazon Web Services", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Kubernetes", description: "Container orchestration", logo: "/images/techstack_logos/kubernetes-logo.svg" },
                { name: "GitHub Actions", description: "CI/CD pipelines", logo: "/images/techstack_logos/Github-actions-logo.png" },
                { name: "Terraform", description: "Infrastructure as code", logo: "/images/techstack_logos/terraform-logo.webp" },
                { name: "Nginx", description: "Web server", logo: "/images/techstack_logos/nginx-logo.svg" },
            ],
        },
        {
            id: "apis",
            title: "APIs & Auth",
            icon: Shield,
            description: "API protocols and security",
            technologies: [
                { name: "GraphQL", description: "Query language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "REST API", description: "Standard HTTP APIs", logo: "/images/techstack_logos/REST-API-logo.png" },
                { name: "OAuth 2.0", description: "Authorization", logo: "/images/techstack_logos/OAuth2-logo.jpg" },
                { name: "JWT", description: "Token auth", logo: "/images/techstack_logos/jwt-logo.webp" },
                { name: "Passport.js", description: "Node.js auth", logo: "/images/techstack_logos/passportjs-logo.png" },
                { name: "Socket.io", description: "Real-time", logo: "/images/techstack_logos/Socket-io-logo.png" },
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
                    style={{ backgroundColor: "#339933" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#68a063" }}
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
                        <Layers className="w-4 h-4" style={{ color: "#339933" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Built With{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #339933, #68a063)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Modern Tech
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We use battle-tested technologies to build reliable,
                        performant backend systems.
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
                                    backgroundColor: isActive ? "#339933" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#339933" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(51, 153, 51, 0.4)" : "none",
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
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12"
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
                                {/* Link rendering removed as per user request */}
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "color-mix(in srgb, #339933 15%, transparent)",
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
                                            style={{ color: "var(--accent-green-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--accent-green-text)" }}
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
