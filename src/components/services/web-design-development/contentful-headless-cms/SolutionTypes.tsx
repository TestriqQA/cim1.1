"use client";

import { useState, useEffect } from "react";
import {
    ShoppingCart,
    Megaphone,
    Smartphone,
    Building2,
    Briefcase,
    Globe,
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
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-sky-text)] transition-colors">E-commerce Experiences</Link>,
            description: "Headless commerce with Contentful powering product content, marketing pages, and personalized shopping experiences.",
            features: [
                "Product information management",
                "Dynamic landing pages",
                "Personalization",
                "Multi-store content",
            ],
            gradient: "from-[#0286FF] to-[#0059C8]",
        },
        {
            icon: Megaphone,
            title: "Marketing Websites",
            description: "High-performance marketing sites with dynamic content, campaign pages, and real-time updates without deploys.",
            features: [
                "Campaign landing pages",
                "A/B testing support",
                "SEO optimization",
                "Content scheduling",
            ],
            gradient: "from-[#4DA3FF] to-[#0286FF]",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--accent-sky-text)] transition-colors">Mobile Applications</Link>,
            description: <><span className="text-inherit">Power </span><Link href="/services/mobile-app-development/ios-app-development-company" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">Android</Link> apps with Contentful&apos;s APIs for real-time content updates without app store releases.</>,
            features: [
                "Over-the-air content",
                "Push notification content",
                "Offline-first support",
                "Cross-platform sync",
            ],
            gradient: "from-[#0286FF] to-[#4DA3FF]",
        },
        {
            icon: Building2,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-sky-text)] transition-colors">Enterprise Portals</Link>,
            description: "Internal knowledge bases, documentation sites, and employee portals with role-based content access.",
            features: [
                "Access control",
                "Multi-language support",
                "Search integration",
                "Version history",
            ],
            gradient: "from-[#0059C8] to-[#0286FF]",
        },
        {
            icon: Briefcase,
            title: "Digital Products",
            description: <><Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">SaaS applications</Link> with content-driven onboarding, help centers, and in-app messaging powered by Contentful.</>,
            features: [
                "In-app messaging",
                "Help documentation",
                "Release notes",
                "Feature toggles",
            ],
            gradient: "from-[#0286FF] to-[#0059C8]",
        },
        {
            icon: Globe,
            title: "Global Websites",
            description: "Multi-region, multi-language websites with localized content management and regional content variations.",
            features: [
                "50+ locales support",
                "Regional content",
                "Translation workflows",
                "Locale fallbacks",
            ],
            gradient: "from-[#4DA3FF] to-[#0059C8]",
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
                                background: "linear-gradient(135deg, #0286FF, #4DA3FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Types
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Contentful powers content for any digital experience - from marketing sites to complex enterprise applications.
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
                                    ${isActive ? "ring-2 ring-[#0286FF] ring-offset-2" : "hover:border-[#0286FF]/50"}
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
                                        background: `linear-gradient(135deg, #0286FF, #4DA3FF)`,
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
                                            ? `linear-gradient(135deg, #0286FF, #0059C8)`
                                            : "rgba(2, 134, 255, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-sky-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-sky-text)]" />
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
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-sky-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
