"use client";

import { useState } from "react";
import {
    Globe,
    Puzzle,
    RefreshCcw,
    Layers,
    Link2,
    Headphones,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Globe,
            title: "Custom Drupal Development",
            description: "Bespoke Drupal websites tailored to your specific business needs with custom themes and functionality.",
            gradient: "from-blue-600 to-cyan-400",
            shadowColor: "rgba(6, 120, 190, 0.4)",
        },
        {
            icon: Puzzle,
            title: "Module & Theme Development",
            description: "Custom modules for unique functionality and beautifully designed themes that match your brand identity.",
            gradient: "from-sky-500 to-blue-400",
            shadowColor: "rgba(41, 168, 223, 0.4)",
        },
        {
            icon: RefreshCcw,
            title: "Migration & Upgrades",
            description: "Seamless migration from Drupal 7/8/9 to Drupal 10/11 or from other CMS platforms to Drupal.",
            gradient: "from-indigo-500 to-blue-400",
            shadowColor: "rgba(99, 102, 241, 0.4)",
        },
        {
            icon: Layers,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-sky-text)] transition-colors">Multisite Management</Link>,
            description: "Centralized management of multiple Drupal sites from a single codebase with consistent branding.",
            gradient: "from-purple-500 to-indigo-400",
            shadowColor: "rgba(168, 85, 247, 0.4)",
        },
        {
            icon: Link2,
            title: "API & Integration",
            description: "Connect Drupal with CRM, ERP, marketing tools, and third-party services through REST and GraphQL APIs.",
            gradient: "from-teal-500 to-cyan-400",
            shadowColor: "rgba(20, 184, 166, 0.4)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-sky-text)] transition-colors">Support & Maintenance</Link>,
            description: <><span className="text-inherit">Ongoing security updates, </span><Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-teal-text)] hover:underline underline underline-offset-2">performance optimization</Link>, and 24/7 technical support for your Drupal site.</>,
            gradient: "from-emerald-500 to-teal-400",
            shadowColor: "rgba(16, 185, 129, 0.4)",
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
                        background: "linear-gradient(135deg, #0678BE, #054A91)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #29A8DF, #0678BE)",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                background: "linear-gradient(135deg, rgba(6, 120, 190, 0.1), rgba(5, 74, 145, 0.1))",
                                color: "var(--accent-sky-text)",
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
                                background: "linear-gradient(135deg, #0678BE, #29A8DF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Drupal Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From custom development to ongoing support, we deliver end-to-end
                        Drupal services for ambitious digital projects.
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
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
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
