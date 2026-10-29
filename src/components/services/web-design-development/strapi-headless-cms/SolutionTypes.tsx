"use client";

import { useState, useEffect } from "react";
import {
    ShoppingCart,
    Megaphone,
    Smartphone,
    Layers,
    Briefcase,
    Newspaper,
    ArrowRight,
    CheckCircle2,
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
            icon: Layers,
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
            icon: Briefcase,
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
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solution</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #4945FF, #7B79FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Types
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Strapi powers content for any digital experience - from e-commerce to <Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">enterprise applications</Link>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#4945FF] ring-offset-2" : "hover:border-[#4945FF]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #4945FF, #7B79FF)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        background: isActive
                                            ? `linear-gradient(135deg, #4945FF, #2F2DC8)`
                                            : "rgba(73, 69, 255, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-indigo-text)]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-indigo-text)]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-indigo-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
