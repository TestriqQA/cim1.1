"use client";

import { useState } from "react";
import { Code2, Server, Database, Cloud, Globe, Smartphone } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Ecosystem",
            icon: Code2,
            description: "The TALL stack and core PHP technologies",
            technologies: [
                { name: "Laravel", description: "PHP Framework", logo: "/images/techstack_logos/Laravel-logo.png" },
                { name: "PHP 8.4+", description: "Core Language", logo: "/images/techstack_logos/php-logo.svg" },
                { name: "Livewire", description: "Full-stack Framework", logo: "/images/techstack_logos/Livewire-logo.png" },
                { name: "Alpine.js", description: "Minimal JS", logo: "/images/techstack_logos/Alpinejs-logo.svg" },
                { name: "Filament", description: "Admin Panels", logo: "/images/techstack_logos/Filament-logo.png" },
                { name: "Tailwind CSS", description: "Utility-first CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
            ],
        },
        {
            id: "frontend",
            title: "Frontend & JS",
            icon: Globe,
            description: "Frontend frameworks integrated with Laravel",
            technologies: [
                { name: "Vue.js", description: "Progressive Framework", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "React", description: "UI Library", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Inertia.js", description: "Modern Monolith", logo: "/images/techstack_logos/Inertiajs-logo.png" },
                { name: "Blade", description: "Templating Engine", logo: "/images/techstack_logos/Blade-logo.png" },
                { name: "Vite", description: "Build Tool", logo: "/images/techstack_logos/vitejs-logo.svg" },
            ],
        },
        {
            id: "database",
            title: "Data & Cache",
            icon: Database,
            description: "Reliable storage and caching solutions",
            technologies: [
                { name: "MySQL", description: "Relational DB", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "PostgreSQL", description: "Advanced SQL", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "Redis", description: "Caching & Queues", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "MariaDB", description: "Open Source DB", logo: "/images/techstack_logos/MariaDB-logo.png" },
                { name: "Meilisearch", description: "Search Engine", logo: "/images/techstack_logos/Meilisearch-logo.webp" },
            ],
        },
        {
            id: "infrastructure",
            title: "Infrastructure",
            icon: Cloud,
            description: "Deployment and server management",
            technologies: [
                { name: "AWS", description: "Cloud Provider", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "DigitalOcean", description: "Cloud VPS", logo: "/images/techstack_logos/DigitalOcean-logo.svg" },
                { name: "Laravel Forge", description: "Server Management", logo: "" }, // Logo not found in directory
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Nginx", description: "Web Server", logo: "/images/techstack_logos/nginx-logo.svg" },
            ],
        },
        {
            id: "testing",
            title: "Testing & Quality",
            icon: Smartphone, // Using generic icon
            description: "Ensuring code reliability and quality",
            technologies: [
                { name: "Pest", description: "Testing Framework", logo: "/images/techstack_logos/Pest-logo.jpg" },
                { name: "PHPUnit", description: "Unit Testing", logo: "/images/techstack_logos/PHPUnit-logo.png" },
                { name: "Laravel Dusk", description: "Browser Testing", logo: "/images/techstack_logos/Laravel-Dusk-logo.webp" },
                { name: "GitHub Actions", description: "CI/CD", logo: "/images/techstack_logos/Github-actions-logo.png" },
                { name: "Sentry", description: "Error Tracking", logo: "/images/techstack_logos/sentry-logo.svg" },
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
                        <Server className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
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
                                background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Laravel
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We master the modern PHP landscape to build robust solutions.
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
                                    backgroundColor: isActive ? "#FF2D20" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#FF2D20" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(255, 45, 32, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(255, 45, 32, 0.1)",
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
                                            style={{ color: "var(--accent-red-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--accent-red-text)" }}
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
