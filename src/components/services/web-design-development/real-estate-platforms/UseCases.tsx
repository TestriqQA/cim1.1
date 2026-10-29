"use client";

import {
    Building, Home, Store, Users, Briefcase,
    TrendingUp, Map, UserPlus, BarChart3, FileText,
    Key, Wrench, Calendar, Search, Building2,
    Layers, Package, Shield, ArrowRight, Sparkles,
    CheckCircle2, Target
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function UseCases() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const useCases = [
        {
            icon: Building2,
            title: "Real Estate Brokerages",
            description: "Multi-agent platforms with listing management, lead distribution, and performance tracking for growing real estate teams.",
            features: [
                { icon: FileText, text: "Listing management" },
                { icon: UserPlus, text: "Lead distribution" },
                { icon: BarChart3, text: "Performance tracking" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#14b8a6]",
            accentColor: "#14b8a6",
        },
        {
            icon: Home,
            title: "Property Developers",
            description: "Pre-construction sales portals with virtual tours, floor plans, and buyer registration systems for new developments.",
            features: [
                { icon: Map, text: "Virtual tours" },
                { icon: Layers, text: "Floor plans" },
                { icon: Users, text: "Buyer registration" }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#2dd4bf]",
            accentColor: "#2dd4bf",
        },
        {
            icon: Store,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Property Marketplaces</Link>,
            description: "Multi-vendor platforms connecting buyers, sellers, agents, and property managers in one unified ecosystem.",
            features: [
                { icon: Users, text: "Multi-vendor" },
                { icon: Target, text: "Lead matching" },
                { icon: Shield, text: "Secure transactions" }
            ],
            color: "#2dd4bf",
            gradient: "from-[#2dd4bf] to-[#5eead4]",
            accentColor: "#5eead4",
        },
        {
            icon: Key,
            title: "Property Management",
            description: "Tenant portals, maintenance tracking, and lease management systems for streamlined property operations.",
            features: [
                { icon: Users, text: "Tenant portals" },
                { icon: Wrench, text: "Maintenance tracking" },
                { icon: Calendar, text: "Lease management" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#2dd4bf]",
            accentColor: "#14b8a6",
        },
        {
            icon: Briefcase,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">Commercial Real Estate</Link>,
            description: "Office, retail, and industrial property platforms with specialized search filters and investment analytics.",
            features: [
                { icon: Search, text: "Advanced filters" },
                { icon: TrendingUp, text: "Investment analytics" },
                { icon: Package, text: "Property categories" }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#0d9488]",
            accentColor: "#0d9488",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
            }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0d9488]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Building2 className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                                Use Cases
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Who We <span style={{ color: "#0d9488" }}>Serve</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Our real estate platforms power businesses across the property industry, from small teams to enterprise operations.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                        }}
                    />
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, idx) => {
                        const Icon = useCase.icon;
                        const isHovered = hoveredCard === idx;
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => {
                                    setHoveredCard(idx);
                                    setActiveIndex(idx);
                                }}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card */}
                                <div
                                    className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? useCase.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-16px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 25px 70px ${useCase.color}30, 0 0 0 2px ${useCase.color}20`
                                            : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    {/* Animated background waves */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-700"
                                        style={{
                                            background: `radial-gradient(circle at ${isEven ? 'top left' : 'top right'}, ${useCase.color}15, transparent 60%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-40 h-40 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(135deg, ${useCase.accentColor}20, transparent)`,
                                            clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "scale(1)" : "scale(0.8)",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon with complex animation */}
                                        <div className="mb-6 relative">
                                            {/* Background glow */}
                                            <div
                                                className="absolute inset-0 blur-2xl transition-all duration-500"
                                                style={{
                                                    background: useCase.color,
                                                    opacity: isHovered ? 0.3 : 0,
                                                    transform: isHovered ? "scale(1.5)" : "scale(1)",
                                                }}
                                            />

                                            <div
                                                className={`relative inline-flex w-20 h-20 rounded-2xl items-center justify-center bg-gradient-to-br ${useCase.gradient} transition-all duration-500`}
                                                style={{
                                                    transform: isHovered ? "rotate(12deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                    boxShadow: isHovered ? `0 15px 40px ${useCase.color}50` : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                {/* Rotating ring */}
                                                {isHovered && (
                                                    <div
                                                        className="absolute inset-0 rounded-2xl border-2 animate-spin"
                                                        style={{
                                                            borderColor: `${useCase.color}30`,
                                                            borderTopColor: useCase.color,
                                                            animationDuration: "3s",
                                                        }}
                                                    />
                                                )}

                                                <Icon
                                                    className="w-10 h-10 text-white relative z-10 transition-transform duration-500"
                                                    style={{
                                                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                    }}
                                                />

                                                {/* Corner sparkle */}
                                                {isHovered && (
                                                    <div className="absolute -top-2 -right-2">
                                                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Index badge */}
                                            <div
                                                className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500"
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${useCase.color}, ${useCase.accentColor})`
                                                        : `${useCase.color}30`,
                                                    color: isHovered ? "white" : "var(--accent-teal-text)",
                                                    transform: isHovered ? "scale(1.2) rotate(-10deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            >
                                                {idx + 1}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4 transition-all duration-300"
                                            style={{
                                                color: isHovered ? useCase.color : "var(--foreground)",
                                            }}
                                        >
                                            {useCase.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base leading-relaxed mb-6 flex-1"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {useCase.description}
                                        </p>

                                        {/* Features list */}
                                        <div className="space-y-3 pt-4 border-t" style={{ borderColor: isHovered ? `${useCase.color}30` : "var(--border-color)" }}>
                                            {useCase.features.map((feature, fidx) => {
                                                const FeatureIcon = feature.icon;
                                                return (
                                                    <div
                                                        key={fidx}
                                                        className="flex items-center gap-3 group/feature transition-all duration-300"
                                                        style={{
                                                            transform: isHovered ? "translateX(6px)" : "translateX(0)",
                                                            transitionDelay: `${fidx * 75}ms`,
                                                        }}
                                                    >
                                                        <div
                                                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${useCase.gradient} transition-all duration-300`}
                                                            style={{
                                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                                                boxShadow: isHovered ? `0 4px 12px ${useCase.color}30` : "none",
                                                            }}
                                                        >
                                                            <FeatureIcon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <span
                                                            className="text-sm font-medium transition-colors duration-300"
                                                            style={{
                                                                color: isHovered ? useCase.color : "var(--secondary-text)",
                                                            }}
                                                        >
                                                            {feature.text}
                                                        </span>
                                                        {isHovered && (
                                                            <CheckCircle2
                                                                className="w-4 h-4 ml-auto transition-all duration-300"
                                                                style={{
                                                                    color: useCase.color,
                                                                    opacity: isHovered ? 1 : 0,
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    </div>

                                    {/* Animated bottom bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(90deg, ${useCase.color}, ${useCase.accentColor})`,
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                        }}
                                    />

                                    {/* Floating particles */}
                                    {isHovered && (
                                        <>
                                            {[...Array(3)].map((_, particleIdx) => (
                                                <div
                                                    key={particleIdx}
                                                    className="absolute w-2 h-2 rounded-full animate-float"
                                                    style={{
                                                        background: useCase.color,
                                                        opacity: 0.4,
                                                        left: `${20 + particleIdx * 30}%`,
                                                        bottom: `${10 + particleIdx * 20}%`,
                                                        animationDelay: `${particleIdx * 0.3}s`,
                                                        animationDuration: "3s",
                                                    }}
                                                />
                                            ))}
                                        </>
                                    )}
                                </div>

                                {/* Outer glow effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `linear-gradient(135deg, ${useCase.color}20, ${useCase.accentColor}20)`,
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-block p-8 rounded-2xl border" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                            Don't See Your Use Case?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            We build custom real estate solutions tailored to your specific needs.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group"
                            style={{
                                background: "linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)",
                            }}
                        >
                            Discuss Your Project
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 0.8;
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}