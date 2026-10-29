"use client";

import { useState, useEffect } from "react";
import {
    Rocket,
    ShoppingCart,
    Building2,
    FileText,
    Headphones,
    GraduationCap,
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
            icon: Rocket,
            title: "Custom Hybrid App Development for Startups (MVPs)",
            description: "Validate your business model in record time. Our startup-focused solutions provide a cost-effective way to hit both iOS and Android markets simultaneously with a feature-rich MVP.",
            features: [
                "Rapid prototyping",
                "Fast market entry",
                "Cost-effective launch",
                "Investor-ready MVP",
            ],
            gradient: "from-[#00b4d8] to-[#0077b6]",
        },
        {
            icon: ShoppingCart,
            title: "Ecommerce and Retail Hybrid App Solutions",
            description: <><span className="text-inherit">Boost your sales with high-conversion mobile shopping. We integrate secure payment gateways and AR-driven product previews using modern </span><Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">ecommerce</Link> web view architecture.</>,
            features: [
                "Secure payments",
                "AR product previews",
                "Push notifications",
                "Inventory sync",
            ],
            gradient: "from-[#0077b6] to-[#00b4d8]",
        },
        {
            icon: Building2,
            title: "B2B Hybrid Apps for Internal Operations",
            description: "Streamline your workforce. We build secure B2B hybrid apps for internal business operations, featuring robust data encryption and seamless ERP/CRM integration.",
            features: [
                "ERP/CRM integration",
                "Data encryption",
                "Offline reporting",
                "Employee workflows",
            ],
            gradient: "from-[#48cae4] to-[#00b4d8]",
        },
        {
            icon: FileText,
            title: "Healthcare and HIPAA-Compliant Hybrid Apps",
            description: <><span className="text-inherit">Trust and security are paramount. We deliver </span><Link href="/services/web-design-development/healthcare-portals" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">healthcare</Link> hybrid applications that strictly follow HIPAA guidelines, ensuring patient data privacy and secure telehealth capabilities.</>,
            features: [
                "HIPAA compliance",
                "Telehealth features",
                "Secure messaging",
                "Patient records",
            ],
            gradient: "from-[#00b4d8] to-[#48cae4]",
        },
        {
            icon: Headphones,
            title: "Wearable and IoT Hybrid App Development",
            description: "The future is connected. Our developers build wearable and IoT hybrid solutions that sync with smartwatches and IoT devices, providing real-time data visualization.",
            features: [
                "Smartwatch sync",
                "IoT connectivity",
                "Real-time data",
                "Cross-device control",
            ],
            gradient: "from-[#0077b6] to-[#48cae4]",
        },
        {
            icon: GraduationCap,
            title: "Content, Media & EdTech Solutions",
            description: <><span className="text-inherit">Engage your audience with news portals or learning platforms. Our </span><Link href="/services/web-design-development/edtech-lms" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">EdTech</Link> apps support offline reading, video streaming, and real-time progress tracking across all devices.</>,
            features: [
                "Offline reading",
                "Video streaming",
                "Progress tracking",
                "LMS integration",
            ],
            gradient: "from-[#48cae4] to-[#0077b6]",
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
                            backgroundColor: "rgba(0, 180, 216, 0.1)",
                            borderColor: "rgba(0, 180, 216, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Hybrid Solutions for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Every Use Case
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From disruptive MVPs to complex B2B ecosystems, our hybrid app development services cater to diverse global industries.
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
                                    ${isActive ? "ring-2 ring-[#00b4d8] ring-offset-2" : "hover:border-[#00b4d8]/50"}
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
                                        absolute inset-0 opacity-0 transition-opacity duration-500
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #00b4d8, #0077b6)`,
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
                                            ? `linear-gradient(135deg, #00b4d8, #0077b6)`
                                            : "rgba(0, 180, 216, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-cyan-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)]" />
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
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-cyan-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
