"use client";

import { useState } from "react";
import {
    Building2,
    Cloud,
    Server,
    Shield,
    ArrowRightLeft,
    Gauge,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Building2,
            title: "Enterprise Applications",
            description: <><Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-green-text)] underline underline-offset-2 hover:underline">Large-scale business applications</Link> with complex workflows, multi-tenancy, and high availability.</>,
            gradient: "from-green-600 to-emerald-400",
            shadowColor: "rgba(109, 179, 63, 0.4)",
        },
        {
            icon: Cloud,
            title: "Microservices Architecture",
            description: "Distributed systems with Spring Cloud, service discovery, API gateways, and circuit breakers.",
            gradient: "from-orange-500 to-amber-400",
            shadowColor: "rgba(248, 152, 32, 0.4)",
        },
        {
            icon: Server,
            title: "RESTful & GraphQL APIs",
            description: <><Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-sky-text)] underline underline-offset-2 hover:underline">High-performance APIs</Link> with Spring Web, WebFlux for reactive programming, and comprehensive documentation.</>,
            gradient: "from-blue-500 to-cyan-400",
            shadowColor: "rgba(59, 130, 246, 0.4)",
        },
        {
            icon: Shield,
            title: "Security Implementation",
            description: "OAuth2, JWT, Spring Security, and enterprise-grade authentication and authorization systems.",
            gradient: "from-purple-500 to-violet-400",
            shadowColor: "rgba(168, 85, 247, 0.4)",
        },
        {
            icon: ArrowRightLeft,
            title: "Legacy Modernization",
            description: "Migrate from Java EE, Struts, or older frameworks to modern Spring Boot architecture.",
            gradient: "from-rose-500 to-pink-400",
            shadowColor: "rgba(244, 63, 94, 0.4)",
        },
        {
            icon: Gauge,
            title: "Performance Optimization",
            description: <>JVM tuning, <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-teal-text)] underline underline-offset-2 hover:underline">caching strategies</Link>, database optimization, and high-throughput processing.</>,
            gradient: "from-teal-500 to-green-400",
            shadowColor: "rgba(20, 184, 166, 0.4)",
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
                        background: "linear-gradient(135deg, #6DB33F, #5A9A32)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #F89820, #E88B1C)",
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
                                background: "linear-gradient(135deg, rgba(109, 179, 63, 0.1), rgba(90, 154, 50, 0.1))",
                                color: "var(--accent-green-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Enterprise{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6DB33F, #5A9A32)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Java Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From monolithic applications to microservices, we architect and build
                        Java solutions that power mission-critical operations.
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
