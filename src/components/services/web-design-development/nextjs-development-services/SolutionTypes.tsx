"use client";

import { useState } from "react";
import {
    Building2,
    ShoppingCart,
    LayoutDashboard,
    FileText,
    Smartphone,
    Server,
    Sparkles,
    Check,
    ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: Building2,
            title: <Link href="/services/mobile-app-development/enterprise-application-development-services" className="hover:text-inherit">Enterprise React Development</Link>,
            description:
                "Scalable, multi-tenant architectures for large-scale operations. We build robust systems that handle high traffic with ease.",
            features: [
                "Scalable Architectures",
                "Multi-tenant Support",
                "Enterprise Security",
                "Robust Data Handling",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-inherit">Next.js Ecommerce</Link>,
            description:
                "High-performance storefronts with Shopify or BigCommerce integration. Boost your sales with blazing-fast shopping experiences.",
            features: [
                <Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Shopify & BigCommerce</Link>,
                "Measurable CTR Boost",
                "Lower Bounce Rates",
                "Optimized Checkout",
            ],
            accentColor: "#00d4ff",
        },
        {
            icon: LayoutDashboard,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-inherit">SaaS Product Development</Link>,
            description:
                "Expert Next.js agency for SaaS products and dashboards. Secure, scalable, and high-performance applications.",
            features: [
                "SaaS Dashboards",
                "Security-First Approach",
                "High Performance",
                "Subscription Models",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: FileText,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-inherit">Next.js Headless CMS</Link>,
            description:
                "Integration with Contentful, Strapi, or Sanity. Manage your content dynamically with lightning-fast updates.",
            features: [
                <><Link href="/services/web-design-development/contentful-headless-cms" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Contentful</Link> & <Link href="/services/web-design-development/strapi-headless-cms" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Strapi</Link></>,
                "Sanity Integration",
                "Dynamic Content",
                "Faster CMS Updates",
            ],
            accentColor: "#00d4ff",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-inherit">React Native Mobile Apps</Link>,
            description:
                "Cross-platform mobile solutions with shared logic. Build faster and reduce costs while maintaining high quality.",
            features: [
                "Cross-Platform Dev",
                "Shared Logic Patterns",
                "Faster GTM",
                "Reduced Dev Costs",
            ],
            accentColor: "#61dafb",
        },
        {
            icon: Server,
            title: "Next.js Migration Services",
            description:
                "Seamless transition from legacy React, Vue, or Angular. Modernize your tech stack with minimal downtime.",
            features: [
                "Legacy Migration",
                "Zero Downtime",
                "Modernized Stack",
                "Improved Performance",
            ],
            accentColor: "#00d4ff",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(5px, -5px) rotate(1deg); }
                    50% { transform: translate(0, -10px) rotate(0deg); }
                    75% { transform: translate(-5px, -5px) rotate(-1deg); }
                }
                @keyframes border-dance {
                    0%, 100% { border-color: var(--border-color); }
                    50% { border-color: currentColor; }
                }
                @keyframes icon-bounce {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    25% { transform: scale(1.1) rotate(-3deg); }
                    50% { transform: scale(1) rotate(0deg); }
                    75% { transform: scale(1.1) rotate(3deg); }
                }
                .card-float:hover {
                    animation: float-slow 3s ease-in-out infinite;
                }
            `}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#61dafb" }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#00d4ff", animationDelay: "1s" }}
                />
                {/* Floating particles */}
                <div
                    className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: "#61dafb", animationDuration: "3s" }}
                />
                <div
                    className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full animate-bounce"
                    style={{ backgroundColor: "#00d4ff", animationDuration: "4s", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Core Services
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Specialized{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Next.js & React
                        </span>{" "}
                        Solutions
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We provide a comprehensive suite of Next.js development services designed to maximize user engagement. Our React development agency specializes in high-performance architectures that scale with multi-national enterprises.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #61dafb, #00d4ff)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative card-float cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(isActive ? null : idx)}
                                style={{
                                    perspective: "1000px",
                                }}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`
                                        absolute -inset-2 rounded-3xl blur-2xl transition-all duration-700
                                        ${isHovered || isActive ? "opacity-25" : "opacity-0"}
                                    `}
                                    style={{
                                        background: `radial-gradient(circle at center, ${solution.accentColor}, transparent 70%)`,
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 sm:p-8 rounded-3xl border-2 cursor-pointer
                                        transition-all duration-500 ease-out
                                        ${isActive ? "shadow-2xl" : "shadow-md hover:shadow-xl"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isActive || isHovered
                                            ? solution.accentColor
                                            : "var(--border-color)",
                                        transform: isHovered && !isActive
                                            ? "translateY(-12px) rotateX(2deg)"
                                            : isActive
                                                ? "scale(1.02)"
                                                : "translateY(0)",
                                    }}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-3xl transition-opacity duration-500
                                            ${isHovered || isActive ? "opacity-100" : "opacity-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}08, transparent)`,
                                        }}
                                    />

                                    {/* Corner decorations */}
                                    <div
                                        className={`
                                            absolute top-4 right-4 w-8 h-8 rounded-full
                                            flex items-center justify-center
                                            transition-all duration-500
                                            ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                                        `}
                                        style={{
                                            backgroundColor: `${solution.accentColor}20`,
                                        }}
                                    >
                                        <ArrowUpRight
                                            className="w-4 h-4"
                                            style={{ color: solution.accentColor }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6 relative">
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                `}
                                                style={{
                                                    background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}cc)`,
                                                    boxShadow: isHovered || isActive
                                                        ? `0 12px 32px ${solution.accentColor}50`
                                                        : `0 4px 12px ${solution.accentColor}30`,
                                                    transform: isHovered || isActive
                                                        ? "scale(1.15) rotate(6deg)"
                                                        : "scale(1) rotate(0)",
                                                }}
                                            >
                                                <Icon className="w-8 h-8 text-black" />
                                            </div>

                                            {/* Animated Ring */}
                                            {(isHovered || isActive) && (
                                                <>
                                                    <div
                                                        className="absolute inset-0 w-16 h-16 rounded-2xl border-2 animate-ping"
                                                        style={{
                                                            borderColor: solution.accentColor,
                                                            animationDuration: "1.5s",
                                                        }}
                                                    />
                                                    {/* Secondary ring */}
                                                    <div
                                                        className="absolute inset-0 w-16 h-16 rounded-2xl border animate-pulse"
                                                        style={{
                                                            borderColor: `${solution.accentColor}50`,
                                                            transform: "scale(1.3)",
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-3 transition-all duration-300"
                                            style={{
                                                color: isActive || isHovered
                                                    ? solution.accentColor
                                                    : "var(--foreground)",
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed transition-all duration-300"
                                            style={{
                                                color: "var(--secondary-text)",
                                                opacity: isActive ? 0.9 : 1,
                                            }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features List */}
                                        <div
                                            className={`
                                                space-y-3 overflow-hidden transition-all duration-500
                                                ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            {solution.features.map((feature, fidx) => (
                                                <div
                                                    key={fidx}
                                                    className="flex items-center gap-3 transition-all duration-300"
                                                    style={{
                                                        transform: isActive ? "translateX(0)" : "translateX(-20px)",
                                                        opacity: isActive ? 1 : 0,
                                                        transitionDelay: isActive ? `${fidx * 100}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}20`,
                                                            boxShadow: `0 0 12px ${solution.accentColor}30`,
                                                        }}
                                                    >
                                                        <Check
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--foreground)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom indicator */}
                                        <div
                                            className={`
                                                mt-4 flex items-center gap-2 text-sm font-medium
                                                transition-all duration-500
                                                ${isActive ? "opacity-0 h-0" : "opacity-100"}
                                            `}
                                            style={{ color: "var(--accent-cyan-text)" }}
                                        >
                                            <span>Click to explore</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Bottom progress bar */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-700
                                            ${isActive ? "w-full" : isHovered ? "w-1/2" : "w-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(90deg, ${solution.accentColor}, ${solution.accentColor}80)`,
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
