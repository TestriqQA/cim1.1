"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Scale,
    ShoppingBag,
    Plane,
    Globe,
    ShoppingCart,
    Star,
    Shield,
    Users,
    TrendingUp,
    Zap,
    BookOpen,
    Building2,
    CheckCircle2,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export default function IndustriesAndUseCases() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const industries = [
        {
            icon: Building2,
            title: "Real Estate",
            description: "24/7 property tours & scheduling. Automate lead capture and qualification.",
            benefits: ["Lead capture", "Property tours", "Instant scheduling"],
            accentColor: "#FF6B6B",
            secondaryIcon: TrendingUp,
        },
        {
            icon: Zap,
            title: "SaaS",
            description: <span>Reduced churn by 15% via <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-cyan-text)] transition-colors">guided tours</Link>. Automate customer onboarding and support.</span>,
            benefits: ["Reduced churn", "Guided tours", "Automated onboarding"],
            accentColor: "#4ECDC4",
            secondaryIcon: Star,
        },
        {
            icon: Scale,
            title: "Legal",
            description: "Auto-screening of potential cases. Streamline client intake and document collection.",
            benefits: ["Auto-screening", "Client intake", "24/7 Availability"],
            accentColor: "#FFD93D",
            secondaryIcon: Shield,
        },
        {
            icon: ShoppingBag,
            title: "Retail",
            description: <span>Increase in average order value. Deliver real-time <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">personalized shopping</Link> experiences.</span>,
            benefits: ["Increased AOV", "Personalized shopping", "Inventory checks"],
            accentColor: "#A78BFA",
            secondaryIcon: ShoppingCart,
        },
        {
            icon: BookOpen,
            title: "Education",
            description: "Reduction in admin workload. Automate student support and enrollment queries.",
            benefits: ["Reduced workload", "Enrollment support", "Student FAQs"],
            accentColor: "#F59E0B",
            secondaryIcon: Users,
        },
        {
            icon: Plane,
            title: "Travel",
            description: <span>Instant changes & multilingual support. Automate <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">booking</Link> and itinerary management.</span>,
            benefits: ["Instant changes", "Booking management", "24/7 Support"],
            accentColor: "#10B981",
            secondaryIcon: Globe,
        },
    ];

    return (
        <section
            className="relative py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries Transforming with <span style={{ color: "var(--accent-indigo-text)" }}>Our AI Solutions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Intelligent AI chatbots</Link> adapt seamlessly across industries, delivering automation,
                        engagement, and real business impact.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const SecondaryIcon = industry.secondaryIcon;
                        const isHovered = hoveredCard === index;

                        return (
                            <div
                                key={index}
                                className="group relative rounded-3xl overflow-hidden"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            >
                                {/* Animated Background Gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${industry.accentColor}15, transparent 70%)`,
                                    }}
                                />

                                {/* Animated Border */}
                                <div
                                    className="absolute inset-0 rounded-3xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${industry.accentColor}40, transparent)`,
                                        opacity: isHovered ? 1 : 0,
                                        transition: "opacity 0.4s ease",
                                    }}
                                />

                                {/* Card Content */}
                                <div
                                    className="relative rounded-3xl p-8 border backdrop-blur-sm"
                                    style={{
                                        background: "color-mix(in srgb, var(--card-bg) 90%, transparent)",
                                        borderColor: isHovered ? industry.accentColor : "var(--border-color)",
                                        transition: "border-color 0.4s ease",
                                    }}
                                >
                                    {/* Floating particles effect */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Sparkles
                                            className="w-5 h-5 animate-pulse"
                                            style={{ color: industry.accentColor }}
                                        />
                                    </div>

                                    {/* Icon Container with 3D effect */}
                                    <div className="relative mb-6">
                                        <div
                                            className="relative w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden"
                                            style={{
                                                background: `linear-gradient(135deg, ${industry.accentColor}, ${industry.accentColor}80)`,
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                                boxShadow: isHovered ? `0 20px 40px ${industry.accentColor}40` : "none",
                                            }}
                                        >
                                            {/* Icon */}
                                            <Icon
                                                className="w-10 h-10 text-white relative z-10"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                    transition: "transform 0.3s ease",
                                                }}
                                            />

                                            {/* Animated background circle */}
                                            <div
                                                className="absolute inset-0 rounded-2xl"
                                                style={{
                                                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)`,
                                                    opacity: isHovered ? 1 : 0,
                                                    transition: "opacity 0.3s ease",
                                                }}
                                            />
                                        </div>

                                        {/* Secondary Icon - Animated */}
                                        <div
                                            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: "var(--card-bg)",
                                                border: `2px solid ${industry.accentColor}`,
                                                transform: isHovered ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-15deg)",
                                                opacity: isHovered ? 1 : 0.6,
                                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                            }}
                                        >
                                            <SecondaryIcon
                                                className="w-5 h-5"
                                                style={{ color: industry.accentColor }}
                                            />
                                        </div>
                                    </div>

                                    {/* Title with underline animation */}
                                    <div className="relative mb-3">
                                        <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                            {industry.title}
                                        </h3>
                                        <div
                                            className="absolute bottom-0 left-0 h-0.5 rounded-full"
                                            style={{
                                                background: industry.accentColor,
                                                width: isHovered ? "60px" : "0px",
                                                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                            }}
                                        />
                                    </div>

                                    <p
                                        className="text-sm mb-6 leading-relaxed"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {industry.description}
                                    </p>

                                    {/* Benefits with staggered animation */}
                                    <ul className="space-y-3 mb-4">
                                        {industry.benefits.map((benefit, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-sm"
                                                style={{
                                                    color: "var(--secondary-text)",
                                                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                    transition: `all 0.3s ease ${idx * 0.1}s`,
                                                }}
                                            >
                                                <div
                                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                                    style={{
                                                        background: `${industry.accentColor}20`,
                                                    }}
                                                >
                                                    <CheckCircle2
                                                        className="w-3.5 h-3.5"
                                                        style={{ color: industry.accentColor }}
                                                    />
                                                </div>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Button */}
                                    {/* Learn More Button */}
                                    {/* <div
                                        className="flex items-center gap-2 text-sm font-medium mt-6 cursor-pointer"
                                        style={{
                                            color: industry.accentColor,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translateY(0)" : "translateY(10px)",
                                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
                                        }}
                                    >
                                        <span>Explore solutions</span>
                                        <ArrowRight
                                            className="w-4 h-4"
                                            style={{
                                                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                transition: "transform 0.3s ease",
                                            }}
                                        />
                                    </div> */}
                                </div>

                                {/* Glow effect on hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl pointer-events-none"
                                    style={{
                                        boxShadow: isHovered ? `0 0 60px ${industry.accentColor}30` : "none",
                                        transition: "box-shadow 0.4s ease",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}