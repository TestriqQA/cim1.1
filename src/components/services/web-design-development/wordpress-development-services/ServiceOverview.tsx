"use client";

import { useState } from "react";
import {
    Paintbrush,
    ShoppingBag,
    Package,
    ArrowLeftRight,
    Gauge,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Paintbrush,
            title: "WordPress Theme Development Services",
            description: "Custom WordPress website design and development for startups and global corporations alike. High speed, unique UI, and zero code bloat.",
            gradient: "from-purple-500 to-pink-500",
            shadowColor: "rgba(168, 85, 247, 0.4)",
        },
        {
            icon: ShoppingBag,
            title: "WooCommerce Development",
            description: <>Specialized <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WooCommerce development</Link> and customization services. High conversion flows, secure payments, and smart inventory management.</>,
            gradient: "from-emerald-500 to-teal-500",
            shadowColor: "rgba(16, 185, 129, 0.4)",
        },
        {
            icon: Package,
            title: "WordPress Plugin Development Services",
            description: "We don't just install plugins; we engineer custom solutions for small business and large enterprises, focusing on core stability and niche features.",
            gradient: "from-orange-500 to-red-500",
            shadowColor: "rgba(249, 115, 22, 0.4)",
        },
        {
            icon: ArrowLeftRight,
            title: "WordPress Migration",
            description: "Seamless WordPress migration services from other platforms. Zero data loss, full SEO retention, and 2026-ready architecture.",
            gradient: "from-blue-500 to-cyan-500",
            shadowColor: "rgba(59, 130, 246, 0.4)",
        },
        {
            icon: Gauge,
            title: "Performance & Speed",
            description: <>Elite <Link href="/blog/web-performance-optimization-speed" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress speed optimization services</Link>. Better Core Web Vitals, 90+ PageSpeed scores, and advanced caching strategies.</>,
            gradient: "from-yellow-500 to-amber-500",
            shadowColor: "rgba(245, 158, 11, 0.4)",
        },
        {
            icon: ShieldCheck,
            title: "Security & Hardening",
            description: <>24/7 <Link href="/blog/cybersecurity-small-businesses" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress security audit</Link> and hardening services. Malware protection, SSL encryption, and robust firewall setup.</>,
            gradient: "from-indigo-500 to-violet-500",
            shadowColor: "rgba(99, 102, 241, 0.4)",
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
                        background: "linear-gradient(135deg, #0073AA, #0096D6)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #0096D6, #0073AA)",
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
                                background: "linear-gradient(135deg, rgba(0, 115, 170, 0.1), rgba(0, 150, 214, 0.1))",
                                color: "var(--brand-blue-text)",
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
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            WordPress Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in delivering enterprise-grade, SEO-optimized, and lightning-fast WordPress solutions.
                        From core stability to advanced API integrations, we engineer websites that turn visitors into loyal customers.
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

                                    {/* Icon container with animated gradient background */}
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

                                        {/* Animated icon particles */}
                                        {isHovered && (
                                            <>
                                                <div
                                                    className="absolute top-0 left-0 w-2 h-2 rounded-full animate-ping"
                                                    style={{
                                                        background: service.shadowColor,
                                                        animationDuration: "1.5s",
                                                    }}
                                                />
                                                <div
                                                    className="absolute bottom-0 right-0 w-2 h-2 rounded-full animate-ping"
                                                    style={{
                                                        background: service.shadowColor,
                                                        animationDuration: "2s",
                                                        animationDelay: "0.5s",
                                                    }}
                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered
                                                ? `var(--foreground)`
                                                : "var(--foreground)",
                                        }}
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

                                    {/* Hover indicator - commented out */}
                                    {/* <div
                                        className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        style={{
                                            color: "#0073AA",
                                            transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                                        }}
                                    >
                                        <span className="text-sm font-semibold">Learn more</span>
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.15;
                        transform: scale(1.05);
                    }
                }
                
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .animate-pulse {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                .animate-ping {
                    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </section>
    );
}