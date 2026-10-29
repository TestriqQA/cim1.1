"use client";

import { useState } from "react";
import { Coffee, Server, Shield, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Coffee,
            description: "Java ecosystem fundamentals",
            technologies: [
                { name: "Java 25", description: "Core Language", logo: "/images/techstack_logos/java-logo.svg" },
                { name: "Spring Boot 3.4", description: "Application Framework", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "Spring Framework", description: "Enterprise Foundation", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "Maven", description: "Build Tool", logo: "/images/techstack_logos/Maven-logo.png" },
                { name: "Gradle", description: "Modern Build", logo: "/images/techstack_logos/Gradle-logo.png" },
            ],
        },
        {
            id: "web",
            title: "Web & API",
            icon: Server,
            description: "Building robust APIs",
            technologies: [
                { name: "Spring MVC", description: "Web Framework", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "Spring WebFlux", description: "Reactive Web", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "GraphQL", description: "Query Language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "Swagger/OpenAPI", description: "API Documentation", logo: "/images/techstack_logos/OpenAPI-Swagger-logo.png" },
            ],
        },
        {
            id: "security",
            title: "Security",
            icon: Shield,
            description: "Enterprise security",
            technologies: [
                { name: "Spring Security", description: "Security Framework", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "OAuth2/OIDC", description: "Authorization", logo: "/images/techstack_logos/OAuth2-logo.jpg" },
                { name: "JWT", description: "Token Auth", logo: "/images/techstack_logos/jwt-logo.webp" },
                { name: "Keycloak", description: "Identity Management", logo: "/images/techstack_logos/keycloak-logo.webp" },
            ],
        },
        {
            id: "data",
            title: "Data & Persistence",
            icon: Database,
            description: "Data storage solutions",
            technologies: [
                { name: "Spring Data JPA", description: "Data Access", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "Hibernate", description: "ORM Framework", logo: "/images/techstack_logos/hibernate-logo.png" },
                { name: "PostgreSQL", description: "Primary Database", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "MongoDB", description: "NoSQL Database", logo: "/images/techstack_logos/mongodb-logo.svg" },
                { name: "Redis", description: "Cache & Messaging", logo: "/images/techstack_logos/redis-logo.svg" },
            ],
        },
        {
            id: "cloud",
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Deployment and infrastructure",
            technologies: [
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Kubernetes", description: "Orchestration", logo: "/images/techstack_logos/K8s-logo.png" },
                { name: "AWS", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Spring Cloud", description: "Microservices", logo: "/images/techstack_logos/spring-logo.svg" },
                { name: "Jenkins", description: "CI/CD", logo: "/images/techstack_logos/jenkins-logo.svg" },
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
                        <Coffee className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
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
                                background: "linear-gradient(135deg, #6DB33F, #5A9A32)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Spring
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Enterprise-proven technologies that power the world&apos;s largest applications.
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
                                    backgroundColor: isActive ? "#6DB33F" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#6DB33F" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(109, 179, 63, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(109, 179, 63, 0.1)",
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
