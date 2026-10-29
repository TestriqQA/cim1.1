"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, ShoppingBag, Eye, Megaphone, TrendingUp, Smartphone, Sparkles } from "lucide-react";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // YouTube brand colors
    const youtubeRed = "#FF0000";

    const solutions = [
        {
            icon: Eye,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Brand Awareness</Link>,
            description: "Maximize reach and ad recall with high-impact video formats.",
            metric: "+40% Recall",
        },
        {
            icon: Users,
            title: <Link href="/services/web-design-development/landing-pages" className="hover:text-[var(--primary)] transition-colors">Lead Generation</Link>,
            description: "Capture leads directly from video ads with custom forms.",
            metric: "More Leads",
        },
        {
            icon: ShoppingBag,
            title: <Link href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--primary)] transition-colors">E-commerce Sales</Link>,
            description: "Drive purchases with shoppable video ads and product feeds.",
            metric: "Strong ROAS",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Installs</Link>,
            description: "Scale app downloads across YouTube, Shorts, and Google play.",
            metric: "-20% CPI",
        },
        {
            icon: TrendingUp,
            title: "Website Traffic",
            description: "Drive qualified traffic to your landing pages.",
            metric: "Higher CTR",
        },
        {
            icon: Megaphone,
            title: "Product Launch",
            description: "Create massive buzz for new products with Masthead ads.",
            metric: "Max Reach",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${youtubeRed}15`,
                            borderColor: `${youtubeRed}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Business Objectives
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Drive Real{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(to right, ${youtubeRed}, #ff4444)` }}
                        >
                            Business Results
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Align your video strategy with your core business objectives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="group relative p-1 rounded-3xl transition-all duration-300 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                background: hoveredCard === idx
                                    ? `linear-gradient(135deg, ${youtubeRed}, #222)`
                                    : "transparent",
                            }}
                        >
                            <div
                                className="relative h-full p-8 rounded-[22px] border transition-all duration-300 flex flex-col items-center text-center"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: hoveredCard === idx ? "transparent" : "var(--border-color)",
                                }}
                            >
                                {/* Animated Icon Bkg */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 relative"
                                    style={{
                                        backgroundColor: `${youtubeRed}10`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"
                                        style={{ border: `1px solid ${youtubeRed}` }}
                                    />
                                    <solution.icon className="w-8 h-8 relative z-10" style={{ color: "var(--accent-red-text)" }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {solution.title}
                                </h3>
                                <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Metric Badge */}
                                <div
                                    className="mt-auto px-4 py-1.5 rounded-full text-xs font-bold border transition-colors duration-300"
                                    style={{
                                        borderColor: `${youtubeRed}30`,
                                        backgroundColor: hoveredCard === idx ? youtubeRed : "transparent",
                                        color: hoveredCard === idx ? "white" : "var(--accent-red-text)",
                                    }}
                                >
                                    {solution.metric}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
