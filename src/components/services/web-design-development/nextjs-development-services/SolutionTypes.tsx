"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
    Building2,
    ShoppingCart,
    LayoutDashboard,
    FileText,
    Smartphone,
    Server,
    Sparkles,
    Check,
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
            icon: Building2,
            title: <Link href="/services/mobile-app-development/enterprise-application-development-services" className="hover:text-inherit">Enterprise React Development</Link>,
            description:
                "Scalable, multi-tenant architectures for large-scale operations. We build robust systems that handle high traffic with ease.",
            features: [
                "Scalable Architectures",
                "Multi-tenant Support",
                "Enterprise Security",
                "Robust Data Handling",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-inherit">Next.js Ecommerce</Link>,
            description:
                "High-performance storefronts with Shopify or BigCommerce integration. Boost your sales with blazing-fast shopping experiences.",
            features: [
                <Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Shopify & BigCommerce</Link>,
                "Measurable CTR Boost",
                "Lower Bounce Rates",
                "Optimized Checkout",
            ],
            accentColor: "#00d4ff",
        },
        {
            icon: LayoutDashboard,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-inherit">SaaS Product Development</Link>,
            description:
                "Expert Next.js agency for SaaS products and dashboards. Secure, scalable, and high-performance applications.",
            features: [
                "SaaS Dashboards",
                "Security-First Approach",
                "High Performance",
                "Subscription Models",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: FileText,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-inherit">Next.js Headless CMS</Link>,
            description:
                "Integration with Contentful, Strapi, or Sanity. Manage your content dynamically with lightning-fast updates.",
            features: [
                <><Link href="/services/web-design-development/contentful-headless-cms" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Contentful</Link> & <Link href="/services/web-design-development/strapi-headless-cms" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Strapi</Link></>,
                "Sanity Integration",
                "Dynamic Content",
                "Faster CMS Updates",
            ],
            accentColor: "#00d4ff",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-inherit">React Native Mobile Apps</Link>,
            description:
                "Cross-platform mobile solutions with shared logic. Build faster and reduce costs while maintaining high quality.",
            features: [
                "Cross-Platform Dev",
                "Shared Logic Patterns",
                "Faster GTM",
                "Reduced Dev Costs",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: Server,
            title: "Next.js Migration Services",
            description:
                "Seamless transition from legacy React, Vue, or Angular. Modernize your tech stack with minimal downtime.",
            features: [
                "Legacy Migration",
                "Zero Downtime",
                "Modernized Stack",
                "Improved Performance",
            ],
            accentColor: "#00d4ff",
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
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Core Services
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Specialized{" "}
                        <span
                            style={{ color: "var(--accent-cyan-text)" }}
                        >
                            Next.js & React
                        </span>{" "}
                        Solutions
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We provide a comprehensive suite of Next.js development services designed to maximize user engagement. Our React development agency specializes in high-performance architectures that scale with multi-national enterprises.
                    </p>
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
                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                        style={{ background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}cc)` }}
                                    >
                                        <Icon className="w-8 h-8 text-black" aria-hidden="true" />
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
                                                        {/* #61dafb / #00d4ff are 1.6-1.8:1 on the light
                                                            card, under the 3:1 an icon needs; the cyan
                                                            text token passes in both themes. */}
                                                        <Check
                                                            aria-hidden="true"
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: "var(--accent-cyan-text)" }}
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
