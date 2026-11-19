"use client";

import { useState } from "react";
import { Package, Check, Star, ArrowRight, Crown, Zap } from "lucide-react";
import Link from "next/link";

// Gray used for features a package does not include (tick, text and strike line).
const EXCLUDED_GRAY = "color-mix(in srgb, var(--secondary-text) 65%, transparent)";

export default function BrandPackages() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Theme-aware text equivalents. Only for TEXT sites — backgrounds/gradients/
    // shadows keep the raw hex so `${color}NN`-style interpolation stays valid.
    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#fab900": "var(--accent-amber-text)",
            "#bc3feb": "var(--brand-purple-text)",
            "#00b5ca": "var(--accent-teal-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const packages = [
        {
            name: "Startup / SME",
            icon: Zap,
            description: "Perfect for startups & small businesses launching their brand",
            price: "Investment",
            amount: "Request Quote",
            popular: false,
            features: [
                { text: "3 Unique Concepts", included: true },
                { text: "2 Revision Rounds", included: true },
                { text: "Basic usage guide", included: true },
                { text: "Business Cards", included: true },
                { text: "Social Profile Images", included: true },
                { text: "AI, PNG, JPG, PDF", included: true },
                { text: "Email Support", included: true },
                { text: "Full Corporate Suite", included: false },
                { text: "Copyright Transfer", included: false },
            ],
            color: "#00b5ca",
            cta: "Get Custom Quote",
        },
        {
            name: "Growth / Corporate",
            icon: Star,
            description: <span>Complete brand identity for <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">SaaS</Link> & <Link href="/services/web-design-development/healthcare-portals" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">Healthcare</Link> companies</span>,
            price: "Investment",
            amount: "Most Popular",
            popular: true,
            features: [
                { text: "5 Unique Concepts", included: true },
                { text: "Unlimited Revisions", included: true },
                { text: "Comprehensive Book (30pgs)", included: true },
                { text: "Letterhead & Envelope", included: true },
                { text: "& 4 Templates (Canva/Figma)", included: true },
                { text: "+ EPS, SVG, Source Files", included: true },
                { text: "Priority Support", included: true },
                { text: "Full Corporate Suite", included: false },
                { text: "Copyright Transfer", included: false },
            ],
            color: "#fab900",
            cta: "Get Custom Quote",
        },
        {
            name: "Enterprise / Global",
            icon: Crown,
            description: <span>Premium brand ecosystem for Multi-National & <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">Luxury Brands</Link></span>,
            price: "Investment",
            amount: "Contact Us",
            popular: false,
            features: [
                { text: "Unlimited Concepts", included: true },
                { text: "Unlimited Revisions", included: true },
                { text: "Full Design System (Web + Print)", included: true },
                { text: "Full Corporate Suite", included: true },
                { text: "+ 10 Templates & Motion Assets", included: true },
                { text: "All Formats + Copyright Transfer", included: true },
                { text: "Dedicated Design Lead", included: true },
                { text: "Brand Strategy Workshop", included: true },
                { text: "Global Launch Support", included: true },
            ],
            color: "#bc3feb",
            cta: "Contact Us",
        },
    ];

    return (
        <section
            className="py-12 md:py-16 lg:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background */}

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10 lg:mb-12">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <Package className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-amber-text)" }}>
                            Packages
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Brand Identity <span style={{ color: "var(--accent-amber-text)" }}>Packages</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Choose the perfect package for your business needs. All packages include dedicated support.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center gap-6 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;
                        const isHovered = hoveredIndex === index;
                        const isPopular = pkg.popular;

                        return (
                            <div
                                key={index}
                                className="relative transition-transform duration-500"
                                style={{ transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)" }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold text-black z-10"
                                        style={{ backgroundColor: "var(--brand-yellow)" }}
                                    >
                                        Recommended
                                    </div>
                                )}

                                <div
                                    className={`relative px-6 md:px-8 rounded-2xl border transition-all duration-500 h-full ${isPopular ? 'py-6 md:py-8 border-2' : 'py-5 md:py-6'}`}
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isPopular ? "var(--brand-yellow)" : isHovered ? pkg.color : "var(--border-color)",
                                        boxShadow: isPopular
                                            ? `0 25px 50px -12px var(--brand-yellow)30`
                                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl p-2.5 transition-all duration-300"
                                            style={{
                                                backgroundColor: `${pkg.color}20`,
                                                transform: isHovered ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
                                            }}
                                        >
                                            <Icon className="w-full h-full" style={{ color: pkg.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                                {pkg.name}
                                            </h3>
                                            <span className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                {pkg.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-4xl font-black" style={{ color: textAccent(pkg.color) }}>
                                            {pkg.amount}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {pkg.description}
                                    </p>

                                    {/* Features */}
                                    <div className={`${isPopular ? 'space-y-3' : 'space-y-2.5'} mb-8`}>
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className={`flex items-center gap-3 ${feature.included ? '' : 'relative w-fit'}`}>
                                                <div
                                                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: feature.included ? `${pkg.color}20` : "color-mix(in srgb, var(--foreground) 8%, transparent)",
                                                    }}
                                                >
                                                    <Check
                                                        className="w-2.5 h-2.5"
                                                        style={{
                                                            color: feature.included ? pkg.color : EXCLUDED_GRAY,
                                                        }}
                                                    />
                                                </div>
                                                <span
                                                    className="text-base"
                                                    style={{ color: feature.included ? "var(--foreground)" : EXCLUDED_GRAY }}
                                                >
                                                    {feature.text}
                                                </span>
                                                {/* Not included: one strike line across the tick and the text */}
                                                {!feature.included && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                                                        style={{ backgroundColor: EXCLUDED_GRAY }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="/contact"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: isPopular ? "var(--brand-yellow)" : `${pkg.color}20`,
                                            color: isPopular ? "#000" : textAccent(pkg.color),
                                        }}
                                    >
                                        {pkg.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Note */}
                <p className="text-center mt-8 text-sm" style={{ color: "var(--secondary-text)" }}>
                    Need a custom solution? <a href="/contact" className="font-semibold underline underline-offset-2" style={{ color: "var(--accent-amber-text)" }}>Contact us</a> for a tailored quote.
                </p>
            </div>
        </section>
    );
}
