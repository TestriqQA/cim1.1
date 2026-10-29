"use client";

import { useState } from "react";
import {
    Globe,
    Layers,
    Server,
    Zap,
    Smartphone,
    Link2,
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
            icon: Globe,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-[#339933] transition-colors">REST API Development</Link>,
            description:
                "Standard RESTful APIs with clean endpoints, proper HTTP methods, and comprehensive documentation.",
            features: [
                "OpenAPI/Swagger Docs",
                "Versioning Strategies",
                "Rate Limiting",
                "Caching Layers",
            ],
            accentColor: "#339933",
            type: "core",
        },
        {
            icon: Layers,
            title: "GraphQL APIs",
            description:
                "Flexible, query-based APIs that let clients request exactly the data they need.",
            features: [
                "Schema Design",
                "Resolvers & Mutations",
                "Subscriptions",
                "Apollo/GraphQL Yoga",
            ],
            accentColor: "#68a063",
            type: "modern",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[#339933] transition-colors">Microservices</Link>,
            description:
                "Distributed systems with independent services that scale and deploy separately.",
            features: [
                "Service Discovery",
                "API Gateway",
                "Message Queues",
                "Container Orchestration",
            ],
            accentColor: "#215732",
            type: "architecture",
        },
        {
            icon: Zap,
            title: "Real-time Applications",
            description:
                "Live updates, chat systems, and streaming data with WebSockets and Server-Sent Events.",
            features: [
                "WebSocket Servers",
                "Socket.io Integration",
                "Pub/Sub Systems",
                "Live Notifications",
            ],
            accentColor: "#339933",
            type: "realtime",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[#339933] transition-colors">Backend for Mobile</Link>,
            description:
                "APIs optimized for iOS and Android applications with push notifications and offline sync.",
            features: [
                "Mobile-First APIs",
                "Push Notifications",
                "Offline Sync",
                "App Analytics",
            ],
            accentColor: "#68a063",
            type: "mobile",
        },
        {
            icon: Link2,
            title: "Enterprise Integrations",
            description:
                "Connect your systems with third-party APIs, ERPs, CRMs, and payment gateways.",
            features: [
                "API Aggregation",
                "Data Transformation",
                "Webhook Handling",
                "Legacy System Bridges",
            ],
            accentColor: "#215732",
            type: "integration",
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
                .card-float:hover {
                    animation: float-slow 3s ease-in-out infinite;
                }
            `}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#339933" }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#68a063", animationDelay: "1s" }}
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
                        <Sparkles className="w-4 h-4" style={{ color: "#339933" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Backend Solutions
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span
                            style={{
                                background: "linear-gradient(135deg, #339933, #68a063)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            What We
                        </span>{" "}
                        Build
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From simple APIs to complex distributed systems,
                        we architect backends that grow with your business.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #339933, #68a063)",
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
                                        relative p-8 rounded-3xl border-2 cursor-pointer
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
                                    {/* Type Badge */}
                                    <div
                                        className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium uppercase"
                                        style={{
                                            backgroundColor: `${solution.accentColor}15`,
                                            color: "var(--accent-green-text)",
                                        }}
                                    >
                                        {solution.type}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6 relative">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
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
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Animated Ring */}
                                            {(isHovered || isActive) && (
                                                <div
                                                    className="absolute inset-0 w-16 h-16 rounded-2xl border-2 animate-ping"
                                                    style={{
                                                        borderColor: solution.accentColor,
                                                        animationDuration: "1.5s",
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-3 transition-all duration-300"
                                            style={{
                                                color: isActive || isHovered
                                                    ? solution.accentColor
                                                    : "var(--foreground)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
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
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}20`,
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
                                            style={{ color: "var(--accent-green-text)" }}
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
