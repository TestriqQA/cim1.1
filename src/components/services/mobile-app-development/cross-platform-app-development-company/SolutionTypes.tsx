"use client";

import { useState, useEffect } from "react";
import {
    Rocket,
    ShoppingCart,
    Building2,
    MessageCircle,
    Car,
    Wallet,
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
            title: "Startups & MVPs",
            description: "Validate your idea fast. Our custom cross-platform app development for startups focuses on rapid MVP delivery. Launch on both platforms simultaneously to gather user feedback and secure funding without burning your runway.",
            features: [
                "Rapid MVP delivery",
                "Simultaneous launch",
                "User feedback gathering",
                "Cost-effective scaling",
            ],
            gradient: "from-[#667eea] to-[#764ba2]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce & Retail Solutions",
            description: <><span className="text-inherit">Drive sales with immersive </span><Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">ecommerce</Link> and retail multi-platform app solutions. We build shoppable apps with unified inventory management, secure checkout, and personalized recommendations that convert visitors into loyal customers.</>,
            features: [
                "Shoppable apps",
                "Unified inventory",
                "Secure checkout",
                "Personalized recommendations",
            ],
            gradient: "from-[#764ba2] to-[#667eea]",
        },
        {
            icon: Building2,
            title: "Enterprise Mobility",
            description: <><span className="text-inherit">Empower your workforce. We deliver Flutter app development services for </span><Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">enterprise</Link> that streamline internal operations. Secure, scalable, and integrated with your existing IT infrastructure (SAP, Salesforce, Oracle).</>,
            features: [
                "Streamlined operations",
                "IT infrastructure integration",
                "Secure & scalable",
                "Workforce empowerment",
            ],
            gradient: "from-[#00d4ff] to-[#667eea]",
        },
        {
            icon: MessageCircle,
            title: "Social & Chat Applications",
            description: <><span className="text-inherit">Build the next big community. We develop real-time </span><Link href="/services/social-media-marketing-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">social and chat apps</Link> with features like live messaging, video calling, and media sharing, ensuring a consistent and engaging experience across devices.</>,
            features: [
                "Real-time messaging",
                "Video calling",
                "Media sharing",
                "Consistent experience",
            ],
            gradient: "from-[#667eea] to-[#00d4ff]",
        },
        {
            icon: Car,
            title: "On-Demand Services",
            description: "Dominate the gig economy. Our on-demand cross-platform app developers for hire build Uber-style booking, tracking, and delivery apps. robust driver/customer modules with real-time geolocation and payment integration.",
            features: [
                "Booking & tracking",
                "Driver/customer modules",
                "Real-time geolocation",
                "Payment integration",
            ],
            gradient: "from-[#764ba2] to-[#00d4ff]",
        },
        {
            icon: Wallet,
            title: "Fintech & Healthcare (HIPAA Compliant)",
            description: <><span className="text-inherit">Security first. We build </span><Link href="/services/web-design-development/healthcare-portals" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Healthcare</Link> and HIPAA-compliant cross-platform apps and secure <Link href="/services/web-design-development/fintech-solutions" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Fintech apps</Link> with biometric authentication, encryption, and regulatory compliance baked into the core architecture.</>,
            features: [
                "HIPAA compliance",
                "Biometric authentication",
                "Data encryption",
                "Secure architecture",
            ],
            gradient: "from-[#00d4ff] to-[#764ba2]",
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
                            backgroundColor: "rgba(102, 126, 234, 0.1)",
                            borderColor: "rgba(102, 126, 234, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-indigo-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Custom Cross-Platform Application Solutions for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Every Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From disruptive startups to large enterprises, we engineer scalable multi-platform apps that drive digital transformation across sectors.
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
                                    ${isActive ? "ring-2 ring-[#667eea] ring-offset-2" : "hover:border-[#667eea]/50"}
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
                                        background: `linear-gradient(135deg, #667eea, #764ba2)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 relative z-10
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        background: isActive
                                            ? `linear-gradient(135deg, #667eea, #764ba2)`
                                            : "rgba(102, 126, 234, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-indigo-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-indigo-text)]" />
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
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-indigo-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
