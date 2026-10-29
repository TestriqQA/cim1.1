"use client";

import { useState } from "react";
import {
    ShoppingBag,
    Home,
    Utensils,
    Shirt,
    Heart,
    GraduationCap,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Pinterest brand color
    const pinterestRed = "#E60023";

    const solutions = [
        {
            id: "ecommerce",
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">E-commerce & Retail</Link>,
            description: "Showcase products with shoppable pins and drive direct sales from inspiration to checkout.",
            icon: ShoppingBag,
            color: pinterestRed,
        },
        {
            id: "home",
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline">Home & Decor</Link>,
            description: "Connect with users designing their dream spaces through room visualization and style boards.",
            icon: Home,
            color: "#F7DC6F",
        },
        {
            id: "food",
            title: "Food & Recipes",
            description: "Inspire home cooks with recipe pins that drive recipe saves and ingredient purchases.",
            icon: Utensils,
            color: "#FF6B6B",
        },
        {
            id: "fashion",
            title: <Link href="/services/web-design-development/branding-services" className="hover:underline">Fashion & Beauty</Link>,
            description: "Showcase seasonal trends and beauty looks with shoppable outfit and product pins.",
            icon: Shirt,
            color: "#9B59B6",
        },
        {
            id: "wedding",
            title: "Weddings & Events",
            description: "Reach engaged couples planning their special day with venue, decor, and vendor inspiration.",
            icon: Heart,
            color: "#E91E63",
        },
        {
            id: "education",
            title: "Education & DIY",
            description: "Tutorial pins and how-to content that positions your brand as a trusted resource.",
            icon: GraduationCap,
            color: "#3498DB",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industry <span style={{ color: "var(--accent-red-text)" }}>Solutions</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Pinterest marketing strategies tailored to your industry's unique audience and buying journey.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeCard === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div
                                    className={`
                                        relative h-full p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isActive ? "scale-[1.02] -translate-y-1" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 20px 40px ${solution.color}20` : "none"
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-5" : "opacity-0"}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.color}, transparent)`
                                        }}
                                    />

                                    {/* Icon with animated ring */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isActive ? "rotate-6" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-300"
                                                style={{
                                                    color: isActive ? "white" : solution.color,
                                                }}
                                            />
                                        </div>
                                        {/* Animated ring */}
                                        <div
                                            className={`
                                                absolute inset-0 w-16 h-16 rounded-2xl border-2 transition-all duration-500
                                                ${isActive ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: solution.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>
                                        <p className="leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>

                                        {/* Learn more indicator - Commented out for now
                                        <div
                                            className={`
                                                flex items-center gap-2 text-sm font-semibold transition-all duration-300
                                                ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
                                            `}
                                            style={{ color: solution.color }}
                                        >
                                            <span>Learn More</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        */}
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
