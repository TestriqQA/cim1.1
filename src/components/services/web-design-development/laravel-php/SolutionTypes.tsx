"use client";

import { useState, useEffect } from "react";
import {
    Briefcase,
    Building2,
    LayoutDashboard,
    ShoppingCart,
    Users,
    Zap,
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
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(255, 45, 32, 0.05)",
                            borderColor: "rgba(255, 45, 32, 0.2)",
                        }}
                    >
                        <Building2 className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-red-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#FF2D20]/50" : "border-[var(--border-color)]"}`}
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
                                    style={{ background: "linear-gradient(135deg, #FF2D20, #F05340)" }}
                                />

                                {/* Icon: the red fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(255, 45, 32, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #FF2D20, #F05340)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--accent-red-text)]"}`}
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
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-red-text)]" />
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
