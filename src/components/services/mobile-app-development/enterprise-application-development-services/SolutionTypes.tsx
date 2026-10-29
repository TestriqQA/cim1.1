"use client";

import { useState, useEffect } from "react";
import {
    Factory,
    Heart,
    Landmark,
    Truck,
    Store,
    Building,
    ArrowRight,
    CheckCircle2,
    Sparkles,
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
            icon: Factory,
            title: "Manufacturing",
            description: "Optimize your shop floor with Enterprise business process automation (BPA). We deliver production monitoring and quality control apps that integrate with Legacy system integration and middleware services.",
            features: [
                "Production monitoring",
                "Quality control apps",
                "Legacy system integration",
                "Middleware services",
            ],
        },
        {
            icon: Heart,
            title: "Healthcare",
            description: <><span className="text-inherit">Launch HIPAA and GDPR compliant enterprise software designed for patient engagement, clinical workflows, and secure health record administration. Our </span><Link href="/services/web-design-development/healthcare-portals" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">healthcare</Link> apps meet the highest standards of Application Lifecycle Management (ALM).</>,
            features: [
                "HIPAA & GDPR compliant",
                "Patient engagement",
                "Clinical workflows",
                "ALM standards",
            ],
        },
        {
            icon: Landmark,
            title: "Financial Services",
            description: <><span className="text-inherit">Our Custom </span><Link href="/services/web-design-development/fintech-solutions" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">fintech</Link> and banking enterprise applications feature bank-level encryption and regulatory compliance. We have a proven track record of delivering 100% secure transactional platforms for global financial institutions.</>,
            features: [
                "Custom fintech solutions",
                "Bank-level encryption",
                "Regulatory compliance",
                "Secure transactions",
            ],
        },
        {
            icon: Truck,
            title: "Logistics & Supply Chain",
            description: "Master your logistics with route optimization and real-time shipment tracking. Our Enterprise supply chain management (SCM) apps reduce overhead and improve delivery predictability in the APAC, EU, and US markets.",
            features: [
                "Route optimization",
                "Real-time tracking",
                "SCM apps",
                "Global market reach",
            ],
        },
        {
            icon: Store,
            title: "Retail Enterprise",
            description: <><span className="text-inherit">Scale your </span><Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">retail</Link> operations with omnichannel solutions, automated inventory management, and high-performance employee apps designed for global retail chains.</>,
            features: [
                "Omnichannel solutions",
                "Inventory automation",
                "Retail employee apps",
                "POS cloud integration",
            ],
        },
        {
            icon: Building,
            title: "Government & Public Sector",
            description: <><span className="text-inherit">Deliver secure, compliant </span><Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">citizen portals</Link> and internal operations apps. We specialize in FedRAMP-ready solutions for field inspections and complex case management.</>,
            features: [
                "Secure citizen portals",
                "Field inspection apps",
                "Case management",
                "FedRAMP compliance",
            ],
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
                            backgroundColor: "var(--card-bg)",
                            borderColor: "rgba(37, 99, 235, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Industry-Specific Expertise in</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Global Markets
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Specialized enterprise mobile solutions tailored for your industry requirements and compliance needs in APAC, EU, and US markets.
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
                                    ${isActive ? "ring-2 ring-[#2563eb] ring-offset-2" : "hover:border-[#2563eb]/50"}
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
                                {/* Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "#2563eb",
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        backgroundColor: isActive ? "#2563eb" : "rgba(37, 99, 235, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--brand-blue-text)]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3 relative z-10" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3 relative z-10" style={{ color: "var(--secondary-text)" }}>
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
