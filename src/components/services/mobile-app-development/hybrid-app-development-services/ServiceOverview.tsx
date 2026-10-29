"use client";

import { useState } from "react";
import {
    Smartphone,
    Globe,
    Zap,
    RefreshCw,
    Puzzle,
    Rocket,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Globe,
            title: "Ionic Framework App Development Services",
            description: <><span className="text-inherit">As an expert Ionic framework app development agency, we build lightning-fast apps using Angular, React, or Vue. Our performance optimization ensures your Ionic apps feel as smooth as </span><Link href="/services/mobile-app-development" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">native apps</Link>.</>,
            gradient: "from-[#00b4d8] to-[#0077b6]",
            shadowColor: "rgba(0, 180, 216, 0.4)",
        },
        {
            icon: Zap,
            title: "Capacitor & Native Bridge Integration",
            description: "Unlock the full potential of hardware with Capacitor solutions. We provide custom API integration for hybrid applications, enabling seamless access to GPS, Camera, Biometrics, and Push Notifications.",
            gradient: "from-[#0077b6] to-[#00b4d8]",
            shadowColor: "rgba(0, 119, 182, 0.4)",
        },
        {
            icon: Smartphone,
            title: "Scalable Progressive Web Apps (PWA)",
            description: "Future-proof your business with installable web apps. Our PWAs offer offline functionality and app-like experiences directly in the browser, maximizing user engagement without friction.",
            gradient: "from-[#48cae4] to-[#00b4d8]",
            shadowColor: "rgba(72, 202, 228, 0.4)",
        },
        {
            icon: RefreshCw,
            title: "Native to Hybrid App Conversion Services",
            description: "Modernize your tech stack. We specialize in hybrid app migration, converting siloed native apps into a unified, maintainable cross-platform app development architecture.",
            gradient: "from-[#00b4d8] to-[#48cae4]",
            shadowColor: "rgba(0, 180, 216, 0.4)",
        },
        {
            icon: Puzzle,
            title: "Custom Plugin & Native Container Dev",
            description: "When standard plugins fall short, our hybrid app developers build custom native bridges to handle complex requirements like specialized IoT connectivity or hardware integration.",
            gradient: "from-[#0077b6] to-[#48cae4]",
            shadowColor: "rgba(0, 119, 182, 0.4)",
        },
        {
            icon: Rocket,
            title: "App Store & Play Store Deployment",
            description: <><span className="text-inherit">Navigating global compliance is our forte. We handle the entire submission process, ensuring your apps meet the latest 2026 security and privacy standards for both </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">Android</Link>.</>,
            gradient: "from-[#48cae4] to-[#0077b6]",
            shadowColor: "rgba(72, 202, 228, 0.4)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #0077b6, #48cae4)",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                background: "linear-gradient(135deg, rgba(0, 180, 216, 0.1), rgba(0, 119, 182, 0.1))",
                                color: "var(--accent-cyan-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Hybrid App
                        </span>{" "}
                        Solutions
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Leverage your reach and minimize overhead with hybrid app development strategies that bridge the gap between web agility and native power.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.shadowColor}, transparent)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, transparent, ${service.shadowColor})`,
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${service.gradient}`}
                                            style={{
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            background: `linear-gradient(90deg, ${service.gradient})`,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
