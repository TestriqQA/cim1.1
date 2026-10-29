"use client";

import { useState } from "react";
import {
    ShoppingBag,
    Monitor,
    GraduationCap,
    HeartPulse,
    Home,
    Briefcase,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#ff0000": "var(--accent-red-text)",
            "#cc0000": "var(--accent-red-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const solutions = [
        {
            icon: Briefcase,
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:underline">Financial Services</Link>,
            description: "High-trust content for fintech & banking. We build authoritativeness through expert interviews.",
            features: [
                "Compliance-ready video",
                "Expert interviews",
                "Educational series",
                "40% lead volume boost",
            ],
            color: "#FF0000",
        },
        {
            icon: Home,
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline">Real Estate Agents</Link>,
            description: "Immersive property tours and neighborhood spotlights optimized for local search dominance.",
            features: [
                "Immersive tours",
                "Local SEO optimization",
                "Neighborhood spotlights",
                "Lead-gen funnels",
            ],
            color: "#CC0000",
        },
        {
            icon: Sparkles,
            title: "Growth for Startups",
            description: "Agile, cost-effective models allowing startups to compete with giants through creative disruption.",
            features: [
                "2026 pricing models",
                "Rapid scaling tactics",
                "Creative disruption",
                "Brand voice design",
            ],
            color: "#FF0000",
        },
        {
            icon: Monitor,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">B2B Tech & SaaS</Link>,
            description: "Deep-dive demos and founder-led thought leadership. Teams that understand technical product-market fit.",
            features: [
                "Software demos",
                "Founder-led content",
                "Technical SEO",
                "Trial-to-paid funnels",
            ],
            color: "#CC0000",
        },
        {
            icon: ShoppingBag,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Ecommerce & Retail</Link>,
            description: "Drive direct sales with shoppable ads and high-intent audience targeting.",
            features: [
                "Shoppable integrations",
                "Product feed ads",
                "High-intent targeting",
                "ROAS optimization",
            ],
            color: "#FF0000",
        },
        {
            icon: HeartPulse,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:underline">Health & Wellness</Link>,
            description: "Build trust with informative videos, client transformations, and expert advice.",
            features: [
                "Patient stories",
                "Expert AMAs",
                "Trust-building content",
                "Community growth",
            ],
            color: "#CC0000",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}08` }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}05`, animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "var(--card-bg)", border: `1px solid ${youtubeRed}30` }}>
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>Tailored Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Sector-Specific{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            YouTube Strategies
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Scalable ROI through specialized video marketing frameworks for your specific business sector.
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
                                    style={{ backgroundColor: solution.color }}
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
                                        style={{ backgroundColor: solution.color }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}`}
                                                style={{
                                                    backgroundColor: isHovered ? solution.color : `${solution.color}15`,
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
