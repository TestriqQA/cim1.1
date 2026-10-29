"use client";

import { useState, useEffect } from "react";
import {
    FileText,
    ShoppingCart,
    GraduationCap,
    Building2,
    Zap,
    Network,
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
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 115, 170, 0.05)",
                            borderColor: "rgba(0, 115, 170, 0.2)",
                        }}
                    >
                        <Building2 className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                                    ${isActive ? "ring-2 ring-[#0073AA] ring-offset-2" : "hover:border-[#0073AA]/50"}
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
                                        background: `linear-gradient(135deg, #0073AA, #0096D6)`,
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
                                            ? `linear-gradient(135deg, #0073AA, #0096D6)`
                                            : "rgba(0, 115, 170, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--brand-blue-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue-text)]" />
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
                                    <ArrowRight className="w-5 h-5 text-[var(--brand-blue-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
