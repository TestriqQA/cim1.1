"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Code2, Server, Database, Cloud, Shield, Layers } from "lucide-react";
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
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "#339933" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Built With{" "}
                        <span style={{ color: "var(--accent-green-text)" }}>
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

                {/* Category Tabs: no glow or grow. The selected tab is #2B7F2B (white
                    text 5.0:1; #339933 is 3.7:1); the others get a 50% green border
                    on hover. Icon-only 44x44 tabs on phones. */}
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
                                    ? "bg-[#2B7F2B] border-[#2B7F2B] text-white focus-visible:brightness-120"
                                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#339933]/50 focus-visible:border-[#339933]/50"
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
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#339933]/50 hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${switched ? "tech-card-in" : ""}`}
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
