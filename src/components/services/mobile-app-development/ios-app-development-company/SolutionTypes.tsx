"use client";

import { useState, useEffect } from "react";
import {
    ShoppingCart,
    Building2,
    Heart,
    Wallet,
    Gamepad2,
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
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--brand-blue-text)] transition-colors">E-commerce & Retail</Link>,
            description: "Boost sales with Ecommerce and retail iOS app solutions. We integrate Apple Pay, ARKit, and personalized recommendation engines.",
            features: [
                "Apple Pay checkout",
                "ARKit 'Try-Before-Buy'",
                "Recommendation engines",
                "Higher cart values",
            ],
            gradient: "from-[#007AFF] to-[#5AC8FA]",
        },
        {
            icon: Building2,
            title: <Link href="/services/mobile-app-development/enterprise-application-development-services" className="hover:text-[var(--accent-sky-text)] transition-colors">Enterprise & B2B</Link>,
            description: "Streamline operations with B2B iOS app development. Secure MDM-compatible apps featuring SSO, VPN, and custom analytics.",
            features: [
                "MDM compatibility",
                "SSO & VPN integration",
                "Workforce productivity",
                "Custom analytics",
            ],
            gradient: "from-[#5AC8FA] to-[#007AFF]",
        },
        {
            icon: Heart,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--brand-blue-text)] transition-colors">Healthcare & Fitness</Link>,
            description: "Trust is paramount. We deliver HIPAA-compliant iOS apps. Secure patient portals, telemedicine, and fitness trackers with HealthKit.",
            features: [
                "HIPAA compliance",
                "HealthKit integration",
                "Telemedicine features",
                "Secure patient data",
            ],
            gradient: "from-[#0055D4] to-[#007AFF]",
        },
        {
            icon: Wallet,
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--brand-blue-text)] transition-colors">Fintech & Banking</Link>,
            description: "Bank on security. Fintech solutions with biometric auth (FaceID/TouchID), data privacy consulting, and secure Metal visualization.",
            features: [
                "Biometric auth",
                "Real-time processing",
                "Data privacy consulting",
                "Metal data viz",
            ],
            gradient: "from-[#007AFF] to-[#0055D4]",
        },
        {
            icon: Gamepad2,
            title: <Link href="/services/web-design-development/entertainment-media" className="hover:text-[var(--accent-sky-text)] transition-colors">Gaming & Entertainment</Link>,
            description: "Create immersive worlds. We utilize Metal, SpriteKit, and SceneKit to build console-quality games and AR adventures.",
            features: [
                "Metal graphics",
                "SpriteKit & SceneKit",
                "Console-quality visual",
                "AR adventures",
            ],
            gradient: "from-[#5AC8FA] to-[#0055D4]",
        },
        {
            icon: GraduationCap,
            title: <Link href="/services/web-design-development/edtech-lms" className="hover:text-[var(--brand-blue-text)] transition-colors">Education & eLearning</Link>,
            description: "Revolutionize learning. Interactive apps leveraging ClassKit for progress tracking, PencilKit for drawing, and AR demonstrations.",
            features: [
                "ClassKit tracking",
                "PencilKit drawing",
                "AR demonstrations",
                <Link key="ui" href="/services/web-design-development/branding-services" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Interactive UI/UX</Link>,
            ],
            gradient: "from-[#0055D4] to-[#5AC8FA]",
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
                            backgroundColor: "rgba(0, 122, 255, 0.05)",
                            borderColor: "rgba(0, 122, 255, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>iOS Solutions for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Every Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored strategies for vertical-specific challenges.
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
                                    ${isActive ? "ring-2 ring-[#007AFF] ring-offset-2" : "hover:border-[#007AFF]/50"}
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
                                        background: `linear-gradient(135deg, #007AFF, #5AC8FA)`,
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
                                            ? `linear-gradient(135deg, #007AFF, #5AC8FA)`
                                            : "rgba(0, 122, 255, 0.1)",
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
