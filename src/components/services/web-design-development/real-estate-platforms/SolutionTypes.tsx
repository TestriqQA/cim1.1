"use client";

import { Building2, Home, Store, Settings, Eye, Map, Users, Search, TrendingUp, Shield, Zap, Key } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const solutions = [
        {
            icon: Building2,
            title: <Link href="/services/web-design-development" className="hover:underline">Property Listing Portals</Link>,
            description: "Feature-rich property listing websites with advanced search, filtering, and MLS/IDX integration for real-time listing updates.",
            features: [
                { icon: Search, text: "Advanced property search" },
                { icon: Map, text: "Interactive map views" },
                { icon: Shield, text: "MLS/IDX integration" },
                { icon: TrendingUp, text: "Market analytics" }
            ],
            color: "from-[#0d9488] to-[#14b8a6]",
            gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
        },
        {
            icon: Users,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">Broker & Agent Platforms</Link>,
            description: "Multi-agent management systems with individual agent profiles, commission tracking, and performance dashboards.",
            features: [
                { icon: Users, text: "Agent profiles" },
                { icon: TrendingUp, text: "Commission tracking" },
                { icon: Settings, text: "Lead distribution" },
                { icon: Shield, text: "Role-based access" }
            ],
            color: "from-[#14b8a6] to-[#2dd4bf]",
            gradient: "linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",
        },
        {
            icon: Store,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Real Estate Marketplaces</Link>,
            description: "Multi-vendor platforms connecting buyers, sellers, agents, and developers with listing management and transaction tools.",
            features: [
                { icon: Store, text: "Multi-vendor support" },
                { icon: Key, text: "Listing management" },
                { icon: Users, text: "Buyer/seller matching" },
                { icon: Shield, text: "Secure transactions" }
            ],
            color: "from-[#0891b2] to-[#0d9488]",
            gradient: "linear-gradient(135deg, #0891b2 0%, #0d9488 100%)",
        },
        {
            icon: Home,
            title: "Property Management Systems",
            description: "Comprehensive systems for property managers with tenant portals, lease tracking, maintenance requests, and accounting.",
            features: [
                { icon: Users, text: "Tenant portals" },
                { icon: Settings, text: "Lease management" },
                { icon: Zap, text: "Maintenance tracking" },
                { icon: TrendingUp, text: "Financial reporting" }
            ],
            color: "from-[#2dd4bf] to-[#0d9488]",
            gradient: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)",
        },
        {
            icon: Eye,
            title: "Virtual Tours & 3D Showcase",
            description: "Immersive property experiences with 360° virtual tours, 3D walkthroughs, and interactive floor plans.",
            features: [
                { icon: Eye, text: "360° virtual tours" },
                { icon: Map, text: "Interactive floor plans" },
                { icon: Zap, text: "Matterport integration" },
                { icon: TrendingUp, text: "Engagement analytics" }
            ],
            color: "from-[#0d9488] to-[#0891b2]",
            gradient: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#0d9488]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Zap className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                                Our Solutions
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#0d9488" }}>Real Estate Solutions</span> We Build
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        From property listing portals to comprehensive brokerage platforms, we build solutions tailored to every segment of the real estate industry.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col relative"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? "transparent" : "var(--border-color)",
                                    transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                    boxShadow: isHovered ? "0 20px 60px rgba(13, 148, 136, 0.15)" : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                }}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Animated border gradient */}
                                {isHovered && (
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: solution.gradient,
                                            padding: "2px",
                                            zIndex: -1,
                                        }}
                                    >
                                        <div
                                            className="w-full h-full rounded-2xl"
                                            style={{ backgroundColor: "var(--card-bg)" }}
                                        />
                                    </div>
                                )}

                                {/* Header with Icon */}
                                <div
                                    className={`relative p-8 bg-gradient-to-br ${solution.color} overflow-hidden`}
                                    style={{
                                        transition: "all 0.5s ease",
                                    }}
                                >
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: "linear-gradient(135deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent)",
                                                backgroundSize: "20px 20px",
                                                transform: isHovered ? "translateX(20px)" : "translateX(0)",
                                                transition: "transform 1s ease",
                                            }}
                                        />
                                    </div>

                                    {/* Icon with animation */}
                                    <div
                                        className="relative z-10 mb-4"
                                        style={{
                                            transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                            transition: "transform 0.5s ease",
                                        }}
                                    >
                                        <div
                                            className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm"
                                            style={{
                                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white relative z-10">
                                        {solution.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <p
                                        className="text-base mb-8 flex-1 leading-relaxed"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {solution.description}
                                    </p>

                                    {/* Features with icons */}
                                    <div className="space-y-3">
                                        {solution.features.map((feature, fidx) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <div
                                                    key={fidx}
                                                    className="flex items-center gap-3 group/feature"
                                                    style={{
                                                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                        transition: `transform 0.3s ease ${fidx * 0.05}s`,
                                                    }}
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${solution.color} transition-transform duration-300 group-hover/feature:scale-110`}
                                                        style={{
                                                            boxShadow: isHovered ? "0 4px 12px rgba(13, 148, 136, 0.3)" : "none",
                                                        }}
                                                    >
                                                        <FeatureIcon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium transition-colors duration-300"
                                                        style={{
                                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                                        }}
                                                    >
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                    style={{
                                        background: solution.gradient,
                                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                        transformOrigin: "left",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)" }}>
                        Need a custom real estate solution? We've got you covered.
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                        style={{
                            background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
                        }}
                    >
                        Let's Discuss Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}
