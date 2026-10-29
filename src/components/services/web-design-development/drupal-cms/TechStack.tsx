"use client";

import { useState } from "react";
import { Droplets, Server, Shield, Database, Cloud } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Droplets,
            description: "Drupal ecosystem fundamentals",
            technologies: [
                { name: "Drupal 10/11", description: "CMS Platform", logo: "/images/techstack_logos/Drupal-logo.png" },
                { name: "PHP 8.4+", description: "Server Language", logo: "/images/techstack_logos/php-logo.svg" },
                { name: "Symfony", description: "PHP Framework", logo: "/images/techstack_logos/symfony-logo.png" },
                { name: "Twig", description: "Templating Engine", logo: "/images/techstack_logos/twig-logo.png" },
                { name: "Composer", description: "Dependency Manager", logo: "/images/techstack_logos/composer-logo.svg" },
            ],
        },
        {
            id: "frontend",
            title: "Frontend",
            icon: Server,
            description: "User interface technologies",
            technologies: [
                { name: "Twig Templates", description: "Theme Engine", logo: "/images/techstack_logos/twig-logo.png" },
                { name: "JavaScript", description: "Interactivity", logo: "/images/techstack_logos/javascript-logo.svg" },
                { name: "CSS/SCSS", description: "Styling", logo: "/images/techstack_logos/css3-logo.svg" },
                { name: "jQuery", description: "DOM Manipulation", logo: "/images/techstack_logos/jquery-logo.png" },
            ],
        },
        {
            id: "security",
            title: "Security",
            icon: Shield,
            description: "Enterprise-grade security",
            technologies: [
                { name: "HTTPS/SSL", description: "Transport Security", logo: "" },
                { name: "OAuth2", description: "Authorization", logo: "/images/techstack_logos/OAuth2-logo.jpg" },
                { name: "SAML", description: "SSO Integration", logo: "/images/techstack_logos/saml-logo.svg" },
                { name: "Two-Factor Auth", description: "2FA Support", logo: "" },
            ],
        },
        {
            id: "data",
            title: "Databases",
            icon: Database,
            description: "Data storage solutions",
            technologies: [
                { name: "MySQL", description: "Primary Database", logo: "/images/techstack_logos/mysql-logo.svg" },
                { name: "PostgreSQL", description: "Alternative DB", logo: "/images/techstack_logos/postgresql-logo.svg" },
                { name: "Redis", description: "Caching Layer", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "Elasticsearch", description: "Search Engine", logo: "/images/techstack_logos/Elasticsearch-logo.webp" },
                { name: "Solr", description: "Advanced Search", logo: "/images/techstack_logos/Solr-logo.webp" },
            ],
        },
        {
            id: "cloud",
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Deployment and hosting",
            technologies: [
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Acquia Cloud", description: "Drupal Hosting", logo: "/images/techstack_logos/Acquia-cloud-logo.png" },
                { name: "Pantheon", description: "Drupal Platform", logo: "/images/techstack_logos/Pantheon-logo-1.png" },
                { name: "AWS", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "NGINX", description: "Web Server", logo: "/images/techstack_logos/nginx-logo.svg" },
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
                        <Droplets className="w-4 h-4" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-sky-text)" }}>
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
                                background: "linear-gradient(135deg, #0678BE, #29A8DF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Drupal
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Built on enterprise-proven open source technologies that power millions of websites globally.
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
                                    backgroundColor: isActive ? "#0678BE" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#0678BE" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(6, 120, 190, 0.4)" : "none",
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
                                        backgroundColor: tech.logo ? "transparent" : "rgba(6, 120, 190, 0.1)",
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
                                            style={{ color: "var(--accent-sky-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--accent-sky-text)" }}
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
