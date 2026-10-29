"use client";

import { useState, useEffect } from "react";
import {
    Briefcase,
    Building2,
    LayoutDashboard,
    ShoppingCart,
    Users,
    Zap,
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
                setColumns(3); // lg:grid-cols-3
            } else if (window.innerWidth >= 768) {
                setColumns(2); // md:grid-cols-2
            } else {
                setColumns(1); // grid-cols-1
            }
        };

        // Initial check
        updateColumns();

        // Listen for resize
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Building2,
            title: "Enterprise ERP & CRM",
            description: "Custom ERP and CRM systems to streamline complex business processes and data management.",
            features: [
                "Role-based access control",
                "Automated workflows",
                "Advanced reporting dashboards",
                "Multi-department integration",
            ],
            gradient: "from-[#FF2D20] to-[#E0261A]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Platforms",
            description: <>High-performance, scalable <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">online stores</Link> built with Laravel to handle high traffic and sales.</>,
            features: [
                "Multi-vendor support",
                "Custom checkout flows",
                "Inventory management",
                "Payment gateway integration",
            ],
            gradient: "from-[#F05340] to-[#FF2D20]",
        },
        {
            icon: LayoutDashboard,
            title: "SaaS Applications",
            description: <>Multi-tenant <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">SaaS solutions</Link> with robust subscription billing and user management.</>,
            features: [
                "Tenant isolation",
                "Subscription billing (Stripe/Paddle)",
                "Team management",
                "API-first architecture",
            ],
            gradient: "from-[#FF2D20] to-[#C92218]",
        },
        {
            icon: Users,
            title: "Customer Portals",
            description: "Secure portals for clients to access services, support, and data self-service.",
            features: [
                "Secure authentication",
                "Document management",
                "Support ticketing",
                "Personalized dashboards",
            ],
            gradient: "from-[#E0261A] to-[#F05340]",
        },
        {
            icon: Briefcase,
            title: "B2B Marketplaces",
            description: "Complex marketplaces connecting businesses with advanced search and transaction capabilities.",
            features: [
                "Advanced search & filtering",
                "Messaging systems",
                "Escrow payments",
                "User verification",
            ],
            gradient: "from-[#FF2D20] to-[#E0261A]",
        },
        {
            icon: Zap,
            title: "API Backends",
            description: <>Robust REST and GraphQL APIs to power <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">mobile apps</Link> and frontend frameworks.</>,
            features: [
                "High performance",
                "Swagger documentation",
                "Rate limiting",
                "Secure authentication (Passport/Sanctum)",
            ],
            gradient: "from-[#F05340] to-[#FF2D20]",
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
                            backgroundColor: "rgba(255, 45, 32, 0.05)",
                            borderColor: "rgba(255, 45, 32, 0.2)",
                        }}
                    >
                        <Building2 className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Architect
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We don&apos;t just write code; we architect solutions that solve real business problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;

                        // Row calculation logic
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        // Active if this card is in the same row as the actively hovered card
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#FF2D20] ring-offset-2" : "hover:border-[#FF2D20]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => setActiveSolution(idx)}
                                onMouseLeave={() => setActiveSolution(null)}
                            >
                                {/* Gradient Background on Hover (Active Row) */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #FF2D20, #F05340)`,
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
                                            ? `linear-gradient(135deg, #FF2D20, #F05340)`
                                            : "rgba(255, 45, 32, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-red-text)]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List (Visible on Hover/Active Row) */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-text)]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow (Visible on Hover/Active Row) */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-red-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
