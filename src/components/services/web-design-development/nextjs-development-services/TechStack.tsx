"use client";

import { useState } from "react";
import { Layers, Palette, Database, TestTube, Cloud, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Framework",
            icon: Code2,
            description: "The foundation of modern React development",
            technologies: [
                { name: "Next.js 16", description: "React framework for production", logo: "/images/techstack_logos/nextjs-logo.svg" },
                { name: "React 19", description: "UI component library", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "TypeScript", description: "Type-safe JavaScript", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "Node.js", description: "JavaScript runtime", logo: "/images/techstack_logos/nodejs-logo.svg" },
                { name: "Vite", description: "Next-gen build tool", logo: "/images/techstack_logos/vitejs-logo.svg" },
                { name: "Webpack", description: "Module bundler", logo: "/images/techstack_logos/webpack-logo.svg" },
            ],
        },
        {
            id: "styling",
            title: "Styling & UI",
            icon: Palette,
            description: "Beautiful, responsive design systems",
            technologies: [
                { name: "Tailwind CSS", description: "Utility-first CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
                { name: "Framer Motion", description: "Animation library", logo: "/images/techstack_logos/framer-motion-logo.svg" },
                { name: "CSS Modules", description: "Scoped CSS", logo: "/images/techstack_logos/css3-logo.svg" },
                { name: "Figma", description: "Design collaboration", logo: "/images/techstack_logos/figma-logo.svg" },
                { name: "Bootstrap", description: "CSS framework", logo: "/images/techstack_logos/bootstrap-logo.svg" },
                { name: "HTML5", description: "Markup language", logo: "/images/techstack_logos/html5-logo.svg" },
            ],
        },
        {
            id: "state",
            title: "State & Data",
            icon: Database,
            description: "State management and data fetching",
            technologies: [
                { name: "React Query", description: "Server state management", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Redux", description: "Predictable state", logo: "/images/techstack_logos/Redux-logo.svg" },
                { name: "Prisma", description: "Type-safe ORM", logo: "/images/techstack_logos/prisma-logo.png" },
                { name: "GraphQL", description: "Data query language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "tRPC", description: "End-to-end typesafe APIs", logo: "/images/techstack_logos/tRPC-logo.png" },
                { name: "PostgreSQL", description: "Relational database", logo: "/images/techstack_logos/postgresql-logo.svg", link: "/services/web-design-development/nodejs-backend" },
            ],
        },
        {
            id: "auth",
            title: "Auth & Security",
            icon: Layers,
            description: "Authentication and security features",
            technologies: [
                { name: "NextAuth.js", description: "Authentication for Next.js", logo: "/images/techstack_logos/nextauthjs-logo.png" },
                { name: "Clerk", description: "User management", logo: "/images/techstack_logos/clerk-logo.png" },
                { name: "Auth0", description: "Identity platform", logo: "/images/techstack_logos/auth0-logo.png" },
                { name: "JWT", description: "JSON Web Tokens", logo: "/images/techstack_logos/jwt-logo.webp" },
                { name: "Firebase Auth", description: "Google auth service", logo: "/images/techstack_logos/firebase-logo.svg" },
                { name: "Supabase Auth", description: "Open-source auth", logo: "/images/techstack_logos/supabase-logo.webp" },
            ],
        },
        {
            id: "testing",
            title: "Testing & QA",
            icon: TestTube,
            description: "Comprehensive testing solutions",
            technologies: [
                { name: "Jest", description: "JavaScript testing", logo: "/images/techstack_logos/jest-logo.webp" },
                { name: "Playwright", description: "E2E testing", logo: "/images/techstack_logos/playwright-logo.webp" },
                { name: "Cypress", description: "Component testing", logo: "/images/techstack_logos/cypress-logo.webp" },
                { name: "React Testing Library", description: "React component testing", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Storybook", description: "UI component dev", logo: "/images/techstack_logos/storybook-logo.webp" },
                { name: "ESLint", description: "Code linting", logo: "/images/techstack_logos/ESLint_logo.png" },
            ],
        },
        {
            id: "deployment",
            title: "Deployment & Hosting",
            icon: Cloud,
            description: "Production deployment platforms",
            technologies: [
                { name: "Vercel", description: "Next.js deployment", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", description: "Web hosting platform", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "AWS", description: "Cloud infrastructure", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Cloudflare", description: "Edge network & CDN", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "Docker", description: "Containerization", logo: "/images/techstack_logos/docker-logo.svg" },
                { name: "GitHub Actions", description: "CI/CD automation", logo: "/images/techstack_logos/Github-actions-logo.png" },
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
                    style={{ backgroundColor: "#61dafb" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#00d4ff" }}
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
                        <Layers className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Built with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Modern
                        </span>{" "}
                        Tools
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We use modern technologies to build robust,
                        scalable, and maintainable React applications.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                aria-label={category.title}
                                onClick={() => setActiveCategory(idx)}
                                className={`
                                    flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "#61dafb" : "var(--card-bg)",
                                    color: isActive ? "#000" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#61dafb" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(97, 218, 251, 0.4)" : "none",
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
                    className="rounded-3xl border p-5 sm:p-8 md:p-12"
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories[activeCategory].technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "color-mix(in srgb, #61dafb 15%, transparent)",
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
                                            style={{ color: "var(--accent-cyan-text)" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold"
                                        style={{ color: "var(--accent-cyan-text)" }}
                                    >
                                        {(tech as any).link ? (
                                            <Link href={(tech as any).link} className="hover:text-[var(--accent-cyan-text)] transition-colors">
                                                {tech.name}
                                            </Link>
                                        ) : (
                                            tech.name
                                        )}
                                    </p>
                                    <p
                                        className="text-sm"
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
