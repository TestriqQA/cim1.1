"use client";

import { useState, useEffect } from "react";
import {
    FileText,
    ShoppingCart,
    GraduationCap,
    Building2,
    Zap,
    Network,
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
            icon: FileText,
            title: "Blog & Publishing Platforms",
            description: "Dominate content marketing with lightning-fast editorial interfaces. We optimize for high-rank SEO results globally.",
            features: [
                "Advanced editorial interfaces",
                "WordPress SEO setup",
                <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Content marketing optimization</Link>,
                "Lightning-fast performance",
            ],
            gradient: "from-[#0073AA] to-[#005177]",
        },
        {
            icon: ShoppingCart,
            title: "WooCommerce E-commerce Stores",
            description: <>Scalable <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">online shops</Link> designed for high-volume transactions. Custom checkout flows and seamless API integrations.</>,
            features: [
                "High-volume transaction support",
                "Custom checkout flows",
                "Seamless API integrations",
                "Scalable infrastructure",
            ],
            gradient: "from-[#0096D6] to-[#0073AA]",
        },
        {
            icon: GraduationCap,
            title: "Membership & LMS",
            description: "Advanced membership site and LMS development for online courses with automated billing and gated content.",
            features: [
                "Online course delivery (LMS)",
                "Automated recurring billing",
                "Gated content systems",
                "Advanced user roles",
            ],
            gradient: "from-[#0073AA] to-[#004863]",
        },
        {
            icon: Building2,
            title: "Enterprise & Corporate Portals",
            description: <>Stable, secure, and accessible <Link href="/services/web-design-development/business-corporate" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">corporate solutions</Link>. Prioritizing WCAG 2.2 accessibility compliance for 100% reach.</>,
            features: [
                "WCAG 2.2 accessibility compliance",
                "Enterprise-grade security",
                "Stable corporate portals",
                "Accessible design systems",
            ],
            gradient: "from-[#005177] to-[#0096D6]",
        },
        {
            icon: Network,
            title: "Multisite & Global Networks",
            description: "Manage hundreds of sub-sites from one dashboard using multisite development and management strategies.",
            features: [
                "Centralized sub-site management",
                "Multisite development strategies",
                "Franchise & global brand support",
                "Network-wide deployments",
            ],
            gradient: "from-[#0073AA] to-[#0096D6]",
        },
        {
            icon: Zap,
            title: "Headless WordPress Solutions",
            description: <>Leverage <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">React/Next.js</Link> for decoupling your frontend, delivering unmatched speed and enterprise security.</>,
            features: [
                "Next.js / React integration",
                "Decoupled architecture",
                "Unmatched loading speeds",
                "Enhanced security layers",
            ],
            gradient: "from-[#0096D6] to-[#005177]",
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
                            backgroundColor: "rgba(0, 115, 170, 0.05)",
                            borderColor: "rgba(0, 115, 170, 0.2)",
                        }}
                    >
                        <Building2 className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Build
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We craft tailored WordPress solutions for every business need and industry.
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#0073AA]/50" : "border-[var(--border-color)]"}`}
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
                                    style={{ background: "linear-gradient(135deg, #0073AA, #0096D6)" }}
                                />

                                {/* Icon: the blue fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(0, 115, 170, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #0073AA, #0096D6)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--brand-blue-text)]"}`}
                                    />
                                </div>

                                <h3 className="relative text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="relative text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features list: opens to its real height */}
                                <div
                                    className={`relative grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <div className="space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--brand-blue-text)]" />
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
