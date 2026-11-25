"use client";

import { useEffect, useState } from "react";
import {
    Building2,
    CheckCircle2,
    Globe,
    Megaphone,
    Puzzle,
    ShoppingCart,
    Smartphone,
    Package,
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
            icon: Package,
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
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(2, 134, 255, 0.05)",
                            borderColor: "rgba(2, 134, 255, 0.2)",
                        }}
                    >
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                            What We Build
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solution</span>{" "}
                        <span style={{ color: "var(--accent-sky-text)" }}>
                            Types
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Contentful powers content for any digital experience - from marketing sites to complex enterprise applications.
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#0286FF]/50" : "border-[var(--border-color)]"}`}
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
                                    style={{ background: "linear-gradient(135deg, #0286FF, #4DA3FF)" }}
                                />

                                {/* Icon: the accent fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(2, 134, 255, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #0067D6, #0059C8)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--accent-sky-text)]"}`}
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
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-sky-text)]" />
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
