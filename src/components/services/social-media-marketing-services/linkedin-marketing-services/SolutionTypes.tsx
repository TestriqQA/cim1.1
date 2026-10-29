"use client";

import { useState } from "react";
import {
    Building2,
    Cpu,
    Stethoscope,
    GraduationCap,
    Briefcase,
    Landmark,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const linkedinBlue = "#0A66C2";

    const solutions = [
        {
            icon: Cpu,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Technology & SaaS</Link>,
            description: "LinkedIn ads management for SaaS tailored to reach CTOs and IT decision-makers.",
            features: [
                "IT decision-maker targeting",
                "Product demo campaigns",
                "Webinar promotion",
                "Case study distribution",
            ],
            color: "#0A66C2",
        },
        {
            icon: Building2,
            title: "Professional Services",
            description: "Targeted LinkedIn lead generation services for consulting, legal, and accounting firms.",
            features: [
                "Thought leadership",
                "Service awareness",
                "Partner recruitment",
                "Industry networking",
            ],
            color: "#0077B5",
        },
        {
            icon: Stethoscope,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:underline">Healthcare & Pharma</Link>,
            description: "Compliance-focused messaging for medical professionals and hospital administrators.",
            features: [
                "HCP targeting",
                "Medical conference promo",
                "Research distribution",
                "Compliance-friendly ads",
            ],
            color: "#004182",
        },
        {
            icon: Landmark,
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:underline">Financial Services</Link>,
            description: "LinkedIn marketing for financial services designed to build high-level trust and authority.",
            features: [
                "Wealth advisors",
                "Corporate finance",
                "Investment products",
                "Fintech solutions",
            ],
            color: "#0A66C2",
        },
        {
            icon: Briefcase,
            title: <Link href="/services/web-design-development/blog-design-services" className="hover:underline">Recruiting & HR</Link>,
            description: "Dominate LinkedIn recruitment advertising services to attract top global talent.",
            features: [
                "Employer branding",
                "Job promotion",
                "Talent acquisition",
                "Company culture",
            ],
            color: "#004182",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${linkedinBlue}08` }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${linkedinBlue}05`, animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "var(--card-bg)", border: `1px solid ${linkedinBlue}30` }}>
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>Industry Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>LinkedIn for</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Your Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Customized B2B marketing strategies tailored for high-growth sectors.
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
                                                    style={{ color: isHovered ? "white" : "var(--brand-blue-text)" }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-500" style={{ color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)" }}>
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
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: "var(--brand-blue-text)" }} />
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
