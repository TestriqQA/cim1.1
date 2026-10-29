"use client";

import { useState } from "react";
import {
    Store,
    Sparkles,
    Heart,
    Palette,
    Coffee,
    Shirt,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Theme-aware TEXT variants of the per-industry accent hues below.
    // The raw hues stay in the data (they drive gradients/borders/icons/tints);
    // this map is applied ONLY where a hue colors text.
    const accentTextMap: Record<string, string> = {
        "#E1306C": "var(--accent-pink-text)",
        "#C13584": "var(--accent-violet-text)",
        "#F77737": "var(--accent-orange-text)",
        "#833AB4": "var(--accent-violet-text)",
        "#405DE6": "var(--accent-indigo-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex] ?? hex;

    const solutions = [
        {
            icon: Store,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">E-commerce & D2C</Link>,
            description: "Instagram Shop Setup, Shoppable Posts. Driving product discovery and high-intent sales conversions.",
            features: [
                "Return on Ad Spend (ROAS)",
                "Full-Funnel Ad Strategy",
                "UGC Integration",
                "Shoppable Reels",
            ],
            color: "#E1306C",
        },
        {
            icon: Palette,
            title: <Link href="/services/web-design-development/shopify-development-services" className="hover:underline">Fashion & Beauty</Link>,
            description: "Influencer Partnerships, Aesthetic Consistency. Showcase products with trend-driven visual storytelling.",
            features: [
                "Brand Recognition",
                "Aesthetic Curation",
                "Tutorial Reels",
                "Influencer Collabs",
            ],
            color: "#C13584",
        },
        {
            icon: Heart,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:underline">Healthcare & Medical</Link>,
            description: "Educational Content, Trust Signals, Compliance. Building patient community through credible content.",
            features: [
                "Patient Appointments",
                "Medical Compliance",
                "Trust-Building Assets",
                "Live Q&As",
            ],
            color: "#F77737",
        },
        {
            icon: Shirt,
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline">Real Estate & Luxury</Link>,
            description: "High-End Product Showcases, Visual Storytelling. Crafting aspirational content for premium audiences.",
            features: [
                "Inquiry Volume",
                "Visual Brand Strategy",
                "Lifestyle Imagery",
                "Case Studies",
            ],
            color: "#833AB4",
        },
        {
            icon: Sparkles,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">B2B & Tech</Link>,
            description: "Thought Leadership, Case Studies, Lead Magnets. Positioning your brand as an industry authority.",
            features: [
                "High-Quality Leads",
                "Whitepaper Content",
                "LinkedIn Cross-promotion",
                "Webinar Outreach",
            ],
            color: "#405DE6",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(225, 48, 108, 0.05)" }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(193, 53, 132, 0.05)", animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))", border: "1px solid rgba(225, 48, 108, 0.2)" }}>
                        <Sparkles className="w-4 h-4" style={{ color: "#E1306C" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-pink-text)" }}>Industry Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Instagram for Your Industry:</span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Precision Targeting
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Whether you need local Instagram marketing services for retail stores or a B2B Instagram marketing strategy for lead generation, our industry-specific blueprints deliver results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""}`}
                                    style={{ background: `linear-gradient(135deg, ${solution.color}40, ${solution.color}20)` }}
                                />

                                <div
                                    className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 h-full ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? solution.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Gradient background */}
                                    <div
                                        className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-5" : ""}`}
                                        style={{ background: `linear-gradient(135deg, ${solution.color}, transparent)` }}
                                    />

                                    {/* Top line */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-500 origin-left ${isHovered ? "scale-x-100" : "scale-x-0"}`}
                                        style={{ background: `linear-gradient(90deg, ${solution.color}, transparent)` }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}`}
                                                style={{
                                                    background: isHovered ? `linear-gradient(135deg, ${solution.color}, ${solution.color}CC)` : `${solution.color}15`,
                                                }}
                                            >
                                                <Icon
                                                    className={`w-8 h-8 transition-all duration-500 ${isHovered ? "text-white scale-110" : ""}`}
                                                    style={{ color: isHovered ? "white" : solution.color }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-500" style={{ color: isHovered ? textAccent(solution.color) : "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>

                                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div
                                                    key={fIdx}
                                                    className={`flex items-center gap-3 text-sm transition-all duration-300 ${isHovered ? "translate-x-2" : "translate-x-0"}`}
                                                    style={{ color: "var(--secondary-text)", transitionDelay: isHovered ? `${fIdx * 50}ms` : "0ms" }}
                                                >
                                                    <div
                                                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                                        style={{ backgroundColor: `${solution.color}15` }}
                                                    >
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: solution.color }} />
                                                    </div>
                                                    <span className={isHovered ? "font-medium" : ""}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
