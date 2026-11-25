"use client";

import { useState, useEffect } from "react";
import {
    Building2,
    Cloud,
    BarChart3,
    FileText,
    Layers,
    Brain,
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
            icon: Building2,
            title: "Enterprise Web Applications",
            description: "Complex, high-traffic applications with sophisticated business logic and workflow automation.",
            features: [
                "Complex business logic",
                "Role-based access control",
                "Audit logging",
                "Multi-tenant architecture",
            ],
            gradient: "from-[#306998] to-[#4B8BBE]",
        },
        {
            icon: Cloud,
            title: "SaaS Platforms",
            description: <>Multi-tenant <Link href="/services/web-design-development/saas-development-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">software-as-a-service applications</Link> with subscription billing and user management.</>,
            features: [
                "Multi-tenancy",
                "Subscription billing",
                "User onboarding",
                "Usage analytics",
            ],
            gradient: "from-[#FFD43B] to-[#F0C419]",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Dashboards",
            description: "Real-time analytics dashboards with data visualization and reporting capabilities.",
            features: [
                "Real-time updates",
                "Interactive charts",
                "Custom reports",
                "Data exports",
            ],
            gradient: "from-[#306998] to-[#1E4D7A]",
        },
        {
            icon: FileText,
            title: "Content Management Systems",
            description: <>Flexible <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">CMS solutions</Link> with Wagtail or custom Django admin for content teams.</>,
            features: [
                "Drag-and-drop editing",
                "Workflow management",
                "Media library",
                "SEO tools",
            ],
            gradient: "from-[#4B8BBE] to-[#306998]",
        },
        {
            icon: Layers,
            title: "API-First Backends",
            description: <>Headless architectures and <Link href="/services/mobile-app-development" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">microservices</Link> with robust API layers.</>,
            features: [
                "RESTful APIs",
                "GraphQL support",
                "API versioning",
                "Rate limiting",
            ],
            gradient: "from-[#306998] to-[#FFD43B]",
        },
        {
            icon: Brain,
            title: "AI/ML Integrations",
            description: <>Leverage Python&apos;s ML ecosystem to <Link href="/services/ai-workflows-automations-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">integrate intelligent features</Link> into your applications.</>,
            features: [
                "Model integration",
                "Data pipelines",
                "Prediction APIs",
                "Automated insights",
            ],
            gradient: "from-[#FFD43B] to-[#306998]",
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
                            backgroundColor: "rgba(48, 105, 152, 0.05)",
                            borderColor: "rgba(48, 105, 152, 0.2)",
                        }}
                    >
                        <Building2 className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Build
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Python&apos;s versatility enables us to build sophisticated solutions across industries.
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#306998]/50" : "border-[var(--border-color)]"}`}
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
                                    style={{ background: "linear-gradient(135deg, #306998, #4B8BBE)" }}
                                />

                                {/* Icon: the blue fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(48, 105, 152, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #306998, #1E4D7A)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--brand-blue-text)]"}`}
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
