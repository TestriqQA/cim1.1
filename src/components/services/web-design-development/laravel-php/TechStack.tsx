"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Code2, Server, Database, Cloud, Globe, TestTube2 } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);
    // The fade-in runs only after a real tab switch: this component's <style jsx>
    // CSS is injected on the client, so animating on first load would flash.
    const [switched, setSwitched] = useState(false);

    // The content box eases between heights when the tab changes, so switching
    // between a 6-tool and a 5-tool tab glides instead of jumping (phones). The
    // height is fixed only for the 400ms of the change; at rest it is auto, so
    // a resize (or printing) can never clip the cards.
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
                { name: "Laravel Forge", description: "Server Management", logo: "", icon: Server }, // no Forge logo in the project: a related icon
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "Nginx", description: "Web Server", logo: "/images/techstack_logos/nginx-logo.svg" },
            ],
        },
        {
            id: "testing",
            title: "Testing & Quality",
            icon: TestTube2,
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
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
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
                        <Server className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-red-text)" }}>
                            Our Tech Stack
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
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
                                type="button"
                                onClick={() => selectCategory(idx)}
                                aria-label={category.title}
                                aria-pressed={isActive}
                                className={`flex items-center justify-center min-h-11 min-w-11 sm:min-h-0 sm:min-w-0 gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm border transition duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                    ? "bg-[#E0261A] border-[#E0261A] text-white focus-visible:brightness-120"
                                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#FF2D20]/50 focus-visible:border-[#FF2D20]/50"
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
                        <div>
                            {/* The open tab's name and short description, centred above
                                the cards at every size (phones show icon-only tabs). Keyed
                                on the tab so it fades in with the cards. */}
                            <div
                                key={`name-${activeCategory}`}
                                className={`mb-4 sm:mb-6 text-center ${switched ? "tech-card-in" : ""}`}
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-[var(--accent-red-text)]">
                                    {categories[activeCategory].title}
                                </h3>
                                <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--secondary-text)" }}>
                                    {categories[activeCategory].description}
                                </p>
                            </div>
                            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {categories[activeCategory].technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#FF2D20]/50 hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${switched ? "tech-card-in" : ""}`}
                                        style={{
                                            backgroundColor: "var(--background)",
                                            animationDelay: switched ? `${idx * 40}ms` : undefined,
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
                                            ) : tech.icon ? (
                                                <tech.icon
                                                    aria-hidden="true"
                                                    className="w-6 h-6"
                                                    style={{ color: "var(--accent-red-text)" }}
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
