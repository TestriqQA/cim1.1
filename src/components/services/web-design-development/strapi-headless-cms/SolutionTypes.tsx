"use client";

import { useEffect, useState } from "react";
import {
    CheckCircle2,
    Megaphone,
    Newspaper,
    Puzzle,
    ShoppingCart,
    Smartphone,
    MonitorSmartphone,
    Cloud,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-indigo-text)] transition-colors">E-commerce Platforms</Link>,
            description: <><span className="text-inherit">Headless commerce with Strapi powering product catalogs, inventory, and content for </span><Link href="/services/web-design-development/shopify-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Shopify</Link>, Medusa, or custom storefronts.</>,
            features: [
                "Product management",
                "Multi-store support",
                "Dynamic pricing",
                "Inventory sync",
            ],
            gradient: "from-[#4945FF] to-[#2F2DC8]",
        },
        {
            icon: Megaphone,
            title: "Marketing Websites",
            description: "Lightning-fast marketing sites with dynamic content, A/B testing capabilities, and seamless CMS editing experience.",
            features: [
                "Landing pages",
                "Blog management",
                "Lead capture forms",
                "Analytics integration",
            ],
            gradient: "from-[#7B79FF] to-[#4945FF]",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--accent-indigo-text)] transition-colors">Mobile Applications</Link>,
            description: <><span className="text-inherit">Power </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Android</Link> apps with Strapi&apos;s REST and GraphQL APIs for real-time content delivery.</>,
            features: [
                "Push notifications",
                "Offline sync",
                "User-generated content",
                "Real-time updates",
            ],
            gradient: "from-[#4945FF] to-[#7B79FF]",
        },
        {
            icon: MonitorSmartphone,
            title: "Multi-Platform Delivery",
            description: "Single content source for web, mobile, IoT, digital signage, and emerging platforms via unified APIs.",
            features: [
                "Omnichannel content",
                "Device optimization",
                "CDN integration",
                "Edge delivery",
            ],
            gradient: "from-[#2F2DC8] to-[#4945FF]",
        },
        {
            icon: Cloud,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-indigo-text)] transition-colors">SaaS Products</Link>,
            description: "Build multi-tenant SaaS applications with Strapi managing user content, settings, and configurations.",
            features: [
                "Multi-tenancy",
                "Role-based access",
                "White-labeling",
                "API rate limiting",
            ],
            gradient: "from-[#4945FF] to-[#2F2DC8]",
        },
        {
            icon: Newspaper,
            title: "Content Portals",
            description: "Media sites, documentation hubs, and knowledge bases with structured content and powerful search.",
            features: [
                "Rich media handling",
                "Version control",
                "Multi-author workflows",
                "Search indexing",
            ],
            gradient: "from-[#7B79FF] to-[#2F2DC8]",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(73, 69, 255, 0.05)",
                            borderColor: "rgba(73, 69, 255, 0.2)",
                        }}
                    >
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
                            What We Build
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solution</span>{" "}
                        <span style={{ color: "var(--accent-indigo-text)" }}>
                            Types
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Strapi powers content for any digital experience - from e-commerce to <Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">enterprise applications</Link>.
                    </p>
                </div>

                {/* Hovering a card opens the tick lists of its whole row (so the row
                    stays even) but highlights only that card. The row stays open while
                    the mouse moves between its cards; it closes when the mouse leaves
                    the grid. The lists open to their real height (grid rows 0fr to
                    1fr), and everything shares one 400ms ease. On touch, tap toggles. */}
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#4945FF]/50" : "border-[var(--border-color)]"}`}
                                style={{ backgroundColor: "var(--card-bg)" }}
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
                                {/* Light tint on the highlighted card */}
                                <div
                                    className={`absolute inset-0 pointer-events-none transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-5" : "opacity-0"}`}
                                    style={{ background: "linear-gradient(135deg, #4945FF, #7B79FF)" }}
                                />

                                {/* Icon: the accent fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(73, 69, 255, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #4945FF, #2F2DC8)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--accent-indigo-text)]"}`}
                                    />
                                </div>

                                <h3 className="relative text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="relative text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features list: opens to its real height */}
                                <div
                                    className={`relative grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        {/* The gap above the list lives inside the part that
                                            collapses, so a closed card has no empty space. */}
                                        <div className="pt-6 space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-indigo-text)]" />
                                                    <span>{feature}</span>
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
