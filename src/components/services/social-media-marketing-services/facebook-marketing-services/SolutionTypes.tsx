"use client";

import { useState } from "react";
import {
    Store,
    Building2,
    GraduationCap,
    Briefcase,
    Home,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Map the decorative brand colour -> theme-aware text token (contrast-safe in light & dark).
    // Only used where the colour is applied to TEXT; gradients/borders/icons keep the raw value.
    const accentTextMap: Record<string, string> = {
        "#0ea5e9": "var(--accent-sky-text)",
        "#a855f7": "var(--accent-violet-text)",
        "#f97316": "var(--accent-orange-text)",
        "#10b981": "var(--accent-green-text)",
        "#ef4444": "var(--accent-red-text)",
        "#6366f1": "var(--accent-indigo-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex.toLowerCase()] ?? hex;

    const solutions = [
        {
            icon: Store,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline text-inherit">E-commerce Brands</Link>,
            description: <>Dynamic Catalog Ads + <Link href="/services/web-design-development/shopify-development-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Shopify</Link> Integration. Scale your online store with Facebook ads management for ecommerce.</>,
            features: [
                "Strong ROAS Growth",
                "Product catalog sync",
                "Dynamic retargeting",
                "Conversion tracking",
            ],
            gradient: "from-blue-500 to-cyan-500",
            color: "#0EA5E9",
        },
        {
            icon: Building2,
            title: "B2B Companies",
            description: "Whitepaper Lead Gen + Professional Targeting. Generate qualified leads for B2B services with precision targeting.",
            features: [
                "$12 Average CPL",
                "Lead gen forms",
                "LinkedIn mirror targeting",
                "CRM integration",
            ],
            gradient: "from-purple-500 to-pink-500",
            color: "#A855F7",
        },
        {
            icon: Home,
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline text-inherit">Real Estate</Link>,
            description: "Real estate Facebook advertising services. Showcase properties to qualified buyers via map-based targeting and virtual tour ads.",
            features: [
                "90% Lead Quality Rate",
                "Location targeting",
                "Property listings",
                "Virtual tour ads",
            ],
            gradient: "from-orange-500 to-red-500",
            color: "#F97316",
        },
        {
            icon: GraduationCap,
            title: <Link href="/services/web-design-development/edtech-lms" className="hover:underline text-inherit">Education & Courses</Link>,
            description: "Course Enrollment + Webinar Funnels. Enroll students with targeted campaigns promoting online courses and educational content.",
            features: [
                "300% Scaling Results",
                "Course promotion",
                "Webinar registration",
                "Student targeting",
            ],
            gradient: "from-green-500 to-emerald-500",
            color: "#10B981",
        },
        {
            icon: Sparkles,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:underline text-inherit">Healthcare Services</Link>,
            description: "Facebook marketing for healthcare services. HIPPA compliant strategies to build trust and increase patient registrations.",
            features: [
                "HIPAA Compliant Ads",
                "Patient outreach",
                "Appointment setup",
                "Medical authority",
            ],
            gradient: "from-red-500 to-pink-500",
            color: "#EF4444",
        },
        {
            icon: Briefcase,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline text-inherit">Professional Services</Link>,
            description: "Facebook advertising for professional services. Build authority and generate leads for consulting, legal, and financial services.",
            features: [
                "Trust-First Ad Creative",
                "Authority building",
                "Appointment booking",
                "Client testimonials",
            ],
            gradient: "from-indigo-500 to-blue-500",
            color: "#6366F1",
        },
    ];

    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 mb-6" style={{ backgroundColor: "var(--card-bg)" }}>
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-[var(--brand-blue-text)]">Industry Solutions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Facebook Ads by</span>{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored Facebook advertising strategies for every business type and industry vertical.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-6">
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
                                <div
                                    className={`
                                        relative p-6 md:p-8 rounded-3xl border backdrop-blur-sm overflow-hidden
                                        transition-all duration-500 h-full
                                        ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? solution.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                                            ${isHovered ? "opacity-5" : ""}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.color}, transparent)`,
                                        }}
                                    />

                                    {/* Top decorative line */}
                                    <div
                                        className={`
                                            absolute top-0 left-0 right-0 h-1 rounded-t-3xl
                                            transition-all duration-500 origin-left
                                            ${isHovered ? "scale-x-100" : "scale-x-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(90deg, ${solution.color}, transparent)`,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon with animated background */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                    ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}
                                                `}
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${solution.color}, ${solution.color}CC)`
                                                        : `${solution.color}15`,
                                                }}
                                            >
                                                <Icon
                                                    className={`
                                                        w-8 h-8 transition-all duration-500
                                                        ${isHovered ? "text-white scale-110" : ""}
                                                    `}
                                                    style={{
                                                        color: isHovered ? "white" : solution.color,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title with hover effect */}
                                        <h3
                                            className={`
                                                text-xl font-bold mb-3 transition-colors duration-500
                                            `}
                                            style={{
                                                color: isHovered ? textAccent(solution.color) : "var(--foreground)"
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        <p
                                            className="text-sm mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features List - Always visible */}
                                        <div className="space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div
                                                    key={fIdx}
                                                    className={`
                                                        flex items-center gap-3 text-sm
                                                        transition-all duration-300
                                                        ${isHovered ? "translate-x-2" : "translate-x-0"}
                                                    `}
                                                    style={{
                                                        color: "var(--secondary-text)",
                                                        transitionDelay: isHovered ? `${fIdx * 50}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className={`
                                                            w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                                                            transition-all duration-300
                                                            ${isHovered ? "scale-110 rotate-12" : "scale-100"}
                                                        `}
                                                        style={{
                                                            backgroundColor: isHovered ? `${solution.color}20` : `${solution.color}10`,
                                                            transitionDelay: isHovered ? `${fIdx * 50}ms` : "0ms",
                                                        }}
                                                    >
                                                        <CheckCircle2
                                                            className="w-3 h-3"
                                                            style={{ color: solution.color }}
                                                        />
                                                    </div>
                                                    <span className={isHovered ? "font-medium" : ""}>
                                                        {feature}
                                                    </span>
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