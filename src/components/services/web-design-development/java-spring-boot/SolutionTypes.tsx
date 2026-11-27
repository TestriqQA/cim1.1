"use client";

import { useState, useEffect } from "react";
import {
    Wallet,
    HeartPulse,
    ShoppingCart,
    Truck,
    BarChart3,
    CheckCircle2,
    Landmark,
    Factory,
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
            icon: Wallet,
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--accent-green-text)] transition-colors">Banking & FinTech</Link>,
            description: "Secure financial applications with transaction processing, compliance, and real-time analytics.",
            features: [
                "Payment processing",
                "Risk management",
                "Regulatory compliance",
                "Fraud detection",
            ],
            gradient: "from-[#6DB33F] to-[#5A9A32]",
        },
        {
            icon: HeartPulse,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-orange-text)] transition-colors">Healthcare Systems</Link>,
            description: "HIPAA-compliant healthcare applications with EHR integration and patient portals.",
            features: [
                "EHR/EMR integration",
                "Patient portals",
                "HL7/FHIR support",
                "Telehealth ready",
            ],
            gradient: "from-[#F89820] to-[#E88B1C]",
        },
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-green-text)] transition-colors">E-commerce Platforms</Link>,
            description: "High-traffic e-commerce solutions with inventory management and order processing.",
            features: [
                "Catalog management",
                "Order processing",
                "Payment gateways",
                "Inventory sync",
            ],
            gradient: "from-[#6DB33F] to-[#4A8A2A]",
        },
        {
            icon: Truck,
            title: "Logistics & Supply Chain",
            description: "Real-time tracking, fleet management, and supply chain optimization systems.",
            features: [
                "Real-time tracking",
                "Route optimization",
                "Warehouse management",
                "Shipping integration",
            ],
            gradient: "from-[#5A9A32] to-[#6DB33F]",
        },
        {
            icon: BarChart3,
            title: "Data Analytics Platforms",
            description: "Big data processing, reporting dashboards, and business intelligence solutions.",
            features: [
                "ETL pipelines",
                "Real-time dashboards",
                "Predictive analytics",
                "Report generation",
            ],
            gradient: "from-[#6DB33F] to-[#F89820]",
        },
        {
            icon: Landmark,
            title: "Government & Public Sector",
            description: "Secure, scalable applications for government agencies with compliance requirements.",
            features: [
                "Citizen portals",
                "Document management",
                "Workflow automation",
                "Audit trails",
            ],
            gradient: "from-[#F89820] to-[#6DB33F]",
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
                            backgroundColor: "rgba(109, 179, 63, 0.05)",
                            borderColor: "rgba(109, 179, 63, 0.2)",
                        }}
                    >
                        <Factory className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Industry</span>{" "}
                        <span style={{ color: "var(--accent-green-text)" }}>
                            Solutions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Java&apos;s reliability and Spring&apos;s productivity power mission-critical applications across industries.
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
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#6DB33F]/50" : "border-[var(--border-color)]"}`}
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
                                    style={{ background: "linear-gradient(135deg, #6DB33F, #5A9A32)" }}
                                />

                                {/* Icon: the green fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(109, 179, 63, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #467F27, #3A6B1F)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--accent-green-text)]"}`}
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
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-green-text)]" />
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
