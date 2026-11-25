"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
    Check,
    Cloud,
    Code2,
    Globe,
    Layers,
    Puzzle,
    Server,
    Building2,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    // The hovered (or tapped) card; its whole row opens so the row stays even.
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            setColumns(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Cloud,
            title: <Link href="/services/web-design-development/contentful-headless-cms" className="hover:text-inherit">Contentful Projects</Link>,
            description:
                "Enterprise content infrastructure for global brands. Structured content, powerful APIs, and scalable architecture.",
            features: [
                "Content Modeling",
                "GraphQL & REST APIs",
                "Multi-language Support",
                "Enterprise Security",
            ],
            accentColor: "#9333ea",
            type: "headless",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/strapi-headless-cms" className="hover:text-inherit">Strapi Development</Link>,
            description:
                "Open-source headless CMS with full customization. Self-hosted control with enterprise-grade features.",
            features: [
                "Self-Hosted Option",
                "Custom Plugins",
                "Role-Based Access",
                "Database Flexibility",
            ],
            accentColor: "#a855f7",
            type: "headless",
        },
        {
            icon: Layers,
            title: <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="hover:text-inherit">Sanity CMS</Link>,
            description:
                "Real-time content collaboration and structured data. Flexible schemas for modern digital products.",
            features: [
                "Real-time Collaboration",
                "GROQ Query Language",
                "Portable Text",
                "Custom Studio",
            ],
            accentColor: "#c084fc",
            type: "headless",
        },
        {
            icon: Globe,
            title: <Link href="/services/web-design-development/wordpress-development-services" className="hover:text-inherit">WordPress Development</Link>,
            description:
                "World's most popular CMS with endless possibilities. Themes, plugins, and custom development.",
            features: [
                "Custom Themes",
                "Plugin Development",
                "Gutenberg Blocks",
                "WooCommerce",
            ],
            accentColor: "#9333ea",
            type: "traditional",
        },
        {
            icon: Building2,
            title: <Link href="/services/web-design-development/drupal-cms" className="hover:text-inherit">Drupal Enterprise</Link>,
            description:
                "Robust security and complex content workflows. Perfect for government, healthcare, and enterprise.",
            features: [
                "Enterprise Security",
                "Complex Workflows",
                "Multi-site Support",
                "API-First Option",
            ],
            accentColor: "#a855f7",
            type: "traditional",
        },
        {
            icon: Code2,
            title: "Custom CMS Solutions",
            description:
                "Tailored platforms for unique requirements. When off-the-shelf solutions don't fit your needs.",
            features: [
                "Bespoke Architecture",
                "Perfect Fit",
                "Full Ownership",
                "Unlimited Flexibility",
            ],
            accentColor: "#c084fc",
            type: "custom",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            CMS Solutions
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--accent-violet-text)" }}>
                            Platforms
                        </span>{" "}
                        We Master
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From enterprise headless solutions to battle-tested traditional CMS platforms,
                        we deliver content management systems tailored to your needs.
                    </p>
                </div>

                {/* Section Labels */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #9333ea 10%, transparent)" }}>
                        <Cloud className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Headless CMS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #a855f7 10%, transparent)" }}>
                        <Globe className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Traditional CMS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "color-mix(in srgb, #c084fc 10%, transparent)" }}>
                        <Code2 className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>Custom Solutions</span>
                    </div>
                </div>

                {/* Hovering a card opens the feature lists of its whole row (so the row
                    stays even) but highlights only that card, with a border in its own
                    icon colour. The row stays open while the mouse moves between its
                    cards; it closes when the mouse leaves the grid. Lists open to their
                    real height (grid rows 0fr to 1fr) with one 400ms ease. On touch,
                    tap toggles. */}
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    onMouseLeave={() => {
                        if (window.matchMedia("(hover: hover)").matches) {
                            setActiveSolution(null);
                        }
                    }}
                >
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isOpen = activeSolution !== null && Math.floor(activeSolution / columns) === Math.floor(idx / columns);
                        const isHighlighted = activeSolution === idx;

                        return (
                            <div
                                key={idx}
                                className={`relative p-6 md:p-8 rounded-3xl border transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[var(--card-accent)]" : "border-[var(--border-color)]"}`}
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": solution.accentColor } as CSSProperties}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Type Badge */}
                                <div
                                    className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium capitalize"
                                    style={{
                                        backgroundColor: `${solution.accentColor}15`,
                                        color: "var(--accent-violet-text)",
                                    }}
                                >
                                    {solution.type}
                                </div>

                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                        style={{ background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}cc)` }}
                                    >
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {solution.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features list: opens to its real height */}
                                <div
                                    className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        {/* The gap above the list lives inside the part that
                                            collapses, so a closed card has no empty space. */}
                                        <div className="pt-6 space-y-3">
                                            {solution.features.map((feature, fidx) => (
                                                <div key={fidx} className="flex items-start gap-3">
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: `${solution.accentColor}20` }}
                                                    >
                                                        {/* The text token, not solution.accentColor: #c084fc
                                                            is 2.3:1 on the light card, under the 3:1 an
                                                            icon needs. */}
                                                        <Check
                                                            aria-hidden="true"
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: "var(--accent-violet-text)" }}
                                                        />
                                                    </div>
                                                    <span className="text-base font-medium" style={{ color: "var(--foreground)" }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
