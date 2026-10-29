"use client";

import { useState, useEffect } from "react";
import {
    Wallet,
    HeartPulse,
    ShoppingCart,
    Truck,
    BarChart3,
    Building,
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
            icon: Building,
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
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(109, 179, 63, 0.05)",
                            borderColor: "rgba(109, 179, 63, 0.2)",
                        }}
                    >
                        <Building className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Industry</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6DB33F, #5A9A32)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Solutions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Java&apos;s reliability and Spring&apos;s productivity power mission-critical applications across industries.
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
                                    ${isActive ? "ring-2 ring-[#6DB33F] ring-offset-2" : "hover:border-[#6DB33F]/50"}
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
                                        background: `linear-gradient(135deg, #6DB33F, #5A9A32)`,
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
                                            ? `linear-gradient(135deg, #6DB33F, #5A9A32)`
                                            : "rgba(109, 179, 63, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-green-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green-text)]" />
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
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-green-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
