"use client";

import { useState, useEffect } from "react";
import {
    Building2,
    Cloud,
    BarChart3,
    FileText,
    Layers,
    Brain,
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
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(48, 105, 152, 0.05)",
                            borderColor: "rgba(48, 105, 152, 0.2)",
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
                                background: "linear-gradient(135deg, #306998, #4B8BBE)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Build
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Python&apos;s versatility enables us to build sophisticated solutions across industries.
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
                                    ${isActive ? "ring-2 ring-[#306998] ring-offset-2" : "hover:border-[#306998]/50"}
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
                                        background: `linear-gradient(135deg, #306998, #4B8BBE)`,
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
                                            ? `linear-gradient(135deg, #306998, #4B8BBE)`
                                            : "rgba(48, 105, 152, 0.1)",
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
