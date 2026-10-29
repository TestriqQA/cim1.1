"use client";

import { useState } from "react";
import { Code2, Server, Zap, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Code2,
            description: "Python ecosystem fundamentals",
            technologies: [
                { name: "Python", description: "Core Language", logo: "/images/techstack_logos/python-logo.svg" },
                { name: "Django", description: "Web Framework", logo: "/images/techstack_logos/django-logo.svg" },
                { name: "FastAPI", description: "Modern API Framework", logo: "/images/techstack_logos/fastapi-logo.webp" },
                { name: "SQLAlchemy", description: "ORM Toolkit", logo: "/images/techstack_logos/SQLAlchemy-logo.png" },
                { name: "Pydantic", description: "Data Validation", logo: "/images/techstack_logos/Pydantic-logo.png" },
            ],
        },
        {
            id: "api",
            title: "API & Integration",
            icon: Server,
            description: "Building robust APIs",
            technologies: [
                { name: "Django REST Framework", description: "REST APIs", logo: "/images/techstack_logos/REST-API-logo.png" },
                { name: "GraphQL", description: "Query Language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "OpenAPI/Swagger", description: "API Documentation", logo: "/images/techstack_logos/OpenAPI-Swagger-logo.png" },
                { name: "OAuth2/JWT", description: "Authentication", logo: "/images/techstack_logos/OAuth2-logo.jpg" },
            ],
        },
        {
            id: "async",
            title: "Async & Tasks",
            icon: Zap,
            description: "Background processing and queues",
            technologies: [
                { name: "Celery", description: "Task Queue", logo: "/images/techstack_logos/Celery-logo.png" },
                { name: "Redis", description: "Cache & Broker", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "RabbitMQ", description: "Message Broker", logo: "/images/techstack_logos/RabbitMQ-logo.svg" },
                { name: "AsyncIO", description: "Async Python", logo: "/images/techstack_logos/AsyncIO-logo.jpg" },
            ],
        },
        {
            id: "database",
            title: "Databases",
            icon: Database,
            description: "Data storage solutions",
            technologies: [
                { name: "PostgreSQL", description: "Primary Database", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MySQL", description: "Relational DB", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "MongoDB", description: "NoSQL Document DB", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "Elasticsearch", description: "Search Engine", logo: "/images/techstack_logos/Elasticsearch-logo.webp" },
            ],
        },
        {
            id: "deployment",
            title: "Deployment",
            icon: Cloud,
            description: "Infrastructure and deployment",
            technologies: [
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Kubernetes", description: "Orchestration", logo: "/images/techstack_logos/K8s-logo.png" },
                { name: "AWS", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Gunicorn", description: "WSGI Server", logo: "/images/techstack_logos/Gunicorn-logo.svg" },
                { name: "Nginx", description: "Web Server", logo: "/images/techstack_logos/nginx-logo.svg" },
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
                                background: "linear-gradient(135deg, #306998, #4B8BBE)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Python
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We leverage the best tools in Python&apos;s rich ecosystem.
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
                                    backgroundColor: isActive ? "#306998" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#306998" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(48, 105, 152, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(48, 105, 152, 0.1)",
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
