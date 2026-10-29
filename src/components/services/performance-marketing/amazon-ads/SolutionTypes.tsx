"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Trophy, TrendingUp, Users, DollarSign, BarChart, Target } from "lucide-react";

export default function SolutionTypes() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const textAccent = (c: string) =>
        c.toLowerCase() === "#ff9900" ? "var(--accent-orange-text)" : c;

    const solutions = [
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Search Visibility</Link>,
            description: "Own the top spots for high-value keywords.",
            backDetails: ["Keyword Research", "Bid Optimization", "Negative Keywords", "Search Term Isolation"],
            color: amazonOrange,
        },
        {
            icon: Trophy,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Brand Defense</Link>,
            description: "Protect your branded keywords from competitors.",
            backDetails: ["Brand Protection", "Competitor Conquering", "Share of Voice", "Trademark Defense"],
            color: "#ffffff",
        },
        {
            icon: TrendingUp,
            title: "Sales Growth",
            description: "Accelerate sales velocity and BSR ranking.",
            backDetails: ["Velocity Campaigns", "Coupon Strategy", "Deal Promotion", "Listing Optimization"],
            color: amazonOrange,
        },
        {
            icon: Users,
            title: "New Customer Acq.",
            description: "Reach shoppers who haven't bought from you yet.",
            backDetails: ["Audience Targeting", "Category Targeting", "Retargeting", "Lookalike Audiences"],
            color: "#ffffff",
        },
        {
            icon: DollarSign,
            title: "ACOS Reduction",
            description: "Optimize spend for maximum profitability.",
            backDetails: ["Waste Reduction", "Bid Mgmt Strategy", "Placement Optimization", "Dayparting"],
            color: amazonOrange,
        },
        {
            icon: BarChart,
            title: "Market Share",
            description: "Aggressively expand your digital shelf space.",
            backDetails: ["Shelf Analysis", "Category Dominance", "Cross-selling", "Bundling"],
            color: "#ffffff",
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
                            backgroundColor: `${amazonOrange}15`,
                            borderColor: `${amazonOrange}40`,
                        }}
                    >
                        <Target className="w-4 h-4" style={{ color: amazonOrange }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-orange-text)" }}>
                            Strategic Objectives
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Strategic{" "}
                        <span
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            Objectives
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored campaigns designed to hit your specific business goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative h-72 cursor-pointer perspective-1000"
                            onMouseEnter={() => setFlippedCard(idx)}
                            onMouseLeave={() => setFlippedCard(null)}
                            style={{ perspective: "1000px" }}
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col items-center justify-center text-center"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${solution.color}15` }}
                                    >
                                        <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col justify-center"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                        background: `linear-gradient(135deg, ${solution.color}15, ${solution.color}05)`,
                                        borderColor: solution.color,
                                    }}
                                >
                                    <h3 className="text-lg font-bold mb-4 text-center" style={{ color: textAccent(solution.color) }}>
                                        {solution.title} Strategies
                                    </h3>
                                    <ul className="space-y-2">
                                        {solution.backDetails.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-center gap-2 text-sm justify-center" style={{ color: "var(--foreground)" }}>
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: solution.color }} />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
