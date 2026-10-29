"use client";

import { useState, useEffect } from "react";
import {
    ShoppingCart,
    Heart,
    Gamepad2,
    GraduationCap,
    Wallet,
    Home,
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
            title: "E-commerce Apps",
            description: <><Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">Shopping apps</Link> optimized for Huawei AppGallery with HMS payment and push notifications.</>,
            features: [
                "Huawei Pay integration",
                "Push Kit notifications",
                "Analytics Kit",
                "AppGallery Connect",
            ],
        },
        {
            icon: Heart,
            title: "Health & Fitness",
            description: <><Link href="/services/web-design-development/healthcare-portals" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">Health apps</Link> leveraging Huawei Health Kit. Sync with Huawei Watch and fitness bands.</>,
            features: [
                "Health Kit integration",
                "Wearable sync",
                "Activity tracking",
                "Sleep analysis",
            ],
        },
        {
            icon: Gamepad2,
            title: "Gaming Apps",
            description: <><Link href="/services/web-design-development/entertainment-media" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">High-performance games</Link> using HarmonyOS graphics APIs and Huawei Game Center.</>,
            features: [
                "Game Service",
                "Leaderboards",
                "Achievements",
                "In-app purchases",
            ],
        },
        {
            icon: GraduationCap,
            title: "Education Apps",
            description: <><Link href="/services/web-design-development/edtech-lms" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">E-learning platforms</Link> with multi-device screen sharing and distributed learning features.</>,
            features: [
                "Screen sharing",
                "Multi-device sync",
                "Video streaming",
                "Collaborative tools",
            ],
        },
        {
            icon: Wallet,
            title: "Fintech Apps",
            description: <><Link href="/services/web-design-development/fintech-solutions" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">Secure financial apps</Link> with HMS Safety Detect and FIDO authentication.</>,
            features: [
                "Safety Detect",
                "FIDO authentication",
                "Secure storage",
                "Biometric auth",
            ],
        },
        {
            icon: Home,
            title: "Smart Home Apps",
            description: "IoT control apps for HiLink ecosystem devices. Home automation and device management.",
            features: [
                "HiLink integration",
                "Device discovery",
                "Automation rules",
                "Voice control",
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
                            backgroundColor: "rgba(199, 0, 11, 0.05)",
                            borderColor: "rgba(199, 0, 11, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>HarmonyOS Solutions by</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Industry-specific HarmonyOS applications leveraging Huawei&apos;s ecosystem for maximum reach.
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
                                    ${isActive ? "ring-2 ring-[#C7000B] ring-offset-2" : "hover:border-[#C7000B]/50"}
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
                                        backgroundColor: "#C7000B",
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        backgroundColor: isActive ? "#C7000B" : "rgba(199, 0, 11, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-red-text)]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-text)]" />
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
