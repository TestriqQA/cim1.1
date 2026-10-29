"use client";

import { useState } from "react";
import { Check, Zap, Star, Crown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { RupeeSign } from "@/components/RupeeSign";

export default function SupportPlans() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Essential",
            icon: Zap,
            description: "Perfect for Additional support services for small businesses needing basic help.",
            monthlyPrice: 299,
            yearlyPrice: 2990,
            color: "#4b277a",
            popular: false,
            features: [
                { text: "10 Hours/Month Virtual Assistant", included: true },
                { text: "Basic IT Monitoring", included: true },
                { text: "Email Support", included: true },
                { text: "Monthly Status Reports", included: true },
                { text: "Priority Managed Support", included: false },
                { text: "Dedicated Project Manager", included: false },
                { text: "24/7 Security", included: false },
                { text: "Custom SLA", included: false },
            ],
        },
        {
            name: "Professional",
            icon: Star,
            description: <span>Ideal for <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)]">startups</Link> requiring Supplementary administrative services and tech maintenance.</span>,
            monthlyPrice: 599,
            yearlyPrice: 5990,
            color: "#fab900",
            popular: true,
            features: [
                { text: "40 Hours/Month Dedicated Support", included: true },
                { text: "Priority Managed Support services", included: true },
                { text: "Weekly Reporting", included: true },
                { text: "Proactive Maintenance", included: true },
                { text: "Email & Phone Support", included: true },
                { text: "Dedicated Project Manager", included: false },
                { text: "24/7 Security", included: false },
                { text: "Custom SLA", included: false },
            ],
        },
        {
            name: "Enterprise",
            icon: Crown,
            description: "Complete Business operational support for remote teams and large organizations.",
            monthlyPrice: 1299,
            yearlyPrice: 12990,
            color: "#97288e",
            popular: false,
            features: [
                { text: "Dedicated Project Manager", included: true },
                { text: "24/7 IT Business support Services", included: true },
                { text: "Comprehensive Security", included: true },
                { text: "Custom SLA & Partnership", included: true },
                { text: "Daily Reporting", included: true },
                { text: "Unlimited Virtual Assistant", included: true },
                { text: "Priority 30-min Response", included: true },
                { text: "On-site support options", included: true },
            ],
        },
    ];

    // Theme-aware text equivalents. Only for TEXT sites — backgrounds/gradients/
    // shadows keep the raw hex so `${plan.color}15`-style interpolation stays valid.
    const textAccent = (c: string) =>
        c === "#fab900" ? "var(--accent-amber-text)" :
            c === "#4b277a" ? "var(--accent-violet-text)" :
                c === "#97288e" ? "var(--brand-purple-text)" : c;

    // Opaque fill that keeps a white label readable (white on #fab900 is only 2.15:1).
    const solidAccent = (c: string) => (c === "#fab900" ? "#b45309" : c);

    return (
        <section
            className="py-12 md:py-16 lg:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#4b277a] rounded-full blur-[150px] opacity-10" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#97288e] rounded-full blur-[150px] opacity-10" />
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-4 md:px-5 py-2 md:py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "#97288e",
                        }}
                    >
                        <Star className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                        <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: "var(--brand-purple-text)" }}>
                            SUPPORT PLANS
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Flexible <span style={{ color: "var(--brand-purple-text)" }}>Pricing</span> Options
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4" style={{ color: "var(--secondary-text)" }}>
                        Choose Scalable business support for growing companies. All plans include customized onboarding.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 rounded-full" style={{ backgroundColor: "var(--hover-bg)" }}>
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: billingCycle === "monthly" ? "#4b277a" : "transparent",
                                color: billingCycle === "monthly" ? "#fff" : "var(--secondary-text)",
                            }}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
                            style={{
                                backgroundColor: billingCycle === "yearly" ? "#4b277a" : "transparent",
                                color: billingCycle === "yearly" ? "#fff" : "var(--secondary-text)",
                            }}
                        >
                            Yearly
                            <span
                                className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: "#fab900", color: "#000" }}
                            >
                                Save 17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        const isHovered = hoveredIndex === index;
                        const isPopular = plan.popular;
                        const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

                        return (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div
                                        className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold z-10 flex items-center gap-1 sm:gap-1.5"
                                        style={{ backgroundColor: "#fab900", color: "#000" }}
                                    >
                                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                        Most Popular
                                    </div>
                                )}

                                <div
                                    className="relative p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-500 h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isPopular ? plan.color : isHovered ? plan.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                                        boxShadow: isPopular
                                            ? `0 25px 50px -12px ${plan.color}30`
                                            : isHovered
                                                ? `0 25px 50px -12px ${plan.color}25`
                                                : "none",
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300"
                                            style={{
                                                background: `linear-gradient(135deg, ${plan.color}25, ${plan.color}10)`,
                                                transform: isHovered ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
                                            }}
                                        >
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" style={{ color: plan.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>
                                            <p className="text-[10px] sm:text-xs" style={{ color: "var(--secondary-text)" }}>
                                                {billingCycle === "yearly" ? "Billed annually" : "Billed monthly"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-3 sm:mb-4">
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: textAccent(plan.color) }}>
                                            <RupeeSign />{price}
                                        </span>
                                        <span className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>
                                            /{billingCycle === "yearly" ? "year" : "month"}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm mb-4 sm:mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {plan.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex items-center gap-2 sm:gap-3 ${!feature.included ? "opacity-60" : ""}`}
                                            >
                                                <div
                                                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: feature.included ? `${plan.color}20` : "var(--hover-bg)",
                                                    }}
                                                >
                                                    <Check
                                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                                        style={{ color: feature.included ? plan.color : "var(--secondary-text)" }}
                                                    />
                                                </div>
                                                <span
                                                    className={`text-xs sm:text-sm ${!feature.included ? "line-through" : ""}`}
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="/contact"
                                        className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                                        style={{
                                            backgroundColor: isPopular ? solidAccent(plan.color) : `${plan.color}15`,
                                            color: isPopular ? "#fff" : textAccent(plan.color),
                                        }}
                                    >
                                        Get Started
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Note */}
                <p className="text-center mt-8 md:mt-12 text-xs sm:text-sm px-4" style={{ color: "var(--secondary-text)" }}>
                    Need Custom business support packages for agencies?{" "}
                    <a href="/contact" className="font-bold underline underline-offset-2" style={{ color: "var(--accent-amber-text)" }}>
                        Contact our sales team
                    </a>{" "}
                    for a tailored quote.
                </p>
            </div>
        </section>
    );
}
