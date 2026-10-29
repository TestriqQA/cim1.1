"use client";

import { useState } from "react";
import { Target, Users, ShoppingBag, Building, Briefcase, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";
    const googleYellow = "#fbbc04";
    const googleRed = "#ea4335";

    // Map brand hue → theme-aware text token (WCAG-safe in light & dark)
    const textAccent = (c: string) =>
        c === googleBlue ? "var(--brand-blue-text)" :
        c === googleGreen ? "var(--accent-green-text)" :
        c === googleYellow ? "var(--accent-amber-text)" :
        c === googleRed ? "var(--accent-red-text)" : c;

    // Darker brand shades for the flip-card BACK face, so its white text clears AA
    const cardBack = (c: string) =>
        c === googleBlue ? "#1d4ed8" :
        c === googleGreen ? "#166534" :
        c === googleYellow ? "#a16207" :
        c === googleRed ? "#c5221f" : c;

    const solutions = [
        {
            icon: ShoppingBag,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--primary)] transition-colors">E-commerce</Link>,
            frontDescription: "Shopping and Performance Max campaigns that drive product sales.",
            backDetails: ["Product feed management", "Dynamic remarketing", "Smart Shopping", "ROAS optimization"],
            color: googleBlue,
        },
        {
            icon: Building,
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">Lead Generation</Link>,
            frontDescription: "Search campaigns optimized for high-quality leads and conversions.",
            backDetails: ["Form optimization", "Call tracking", "Lead scoring", "CRM integration"],
            color: googleGreen,
        },
        {
            icon: Users,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Brand Awareness</Link>,
            frontDescription: "Display and YouTube campaigns that build brand recognition.",
            backDetails: ["Custom audiences", "Affinity targeting", "Frequency capping", "Viewability tracking"],
            color: googleYellow,
        },
        {
            icon: Briefcase,
            title: <Link href="/services/performance-marketing/linkedin-ads" className="hover:text-[var(--primary)] transition-colors">B2B Marketing</Link>,
            frontDescription: "Targeting decision-makers with search and display campaigns.",
            backDetails: ["Industry targeting", "Company size filters", "LinkedIn integration", "ABM campaigns"],
            color: googleRed,
        },
        {
            icon: Globe,
            title: <Link href="/services/seo-services/local-seo-services" className="hover:text-[var(--primary)] transition-colors">Local Business</Link>,
            frontDescription: "Drive foot traffic and local leads with geo-targeted campaigns.",
            backDetails: ["Local search ads", "Google Maps ads", "Location extensions", "Store visit tracking"],
            color: googleBlue,
        },
        {
            icon: Target,
            title: "Remarketing",
            frontDescription: "Re-engage website visitors and past customers across Google.",
            backDetails: ["RLSA campaigns", "Dynamic ads", "Customer match", "Similar audiences"],
            color: googleGreen,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${googleBlue}15`,
                            borderColor: `${googleBlue}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Solutions for <span style={{ color: "var(--brand-blue-text)" }}>Every Business</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored Google Ads strategies for your specific industry and goals.
                    </p>
                </div>

                {/* Flip Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative h-64 cursor-pointer perspective-1000"
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
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col justify-center items-center text-center"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)",
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${solution.color}15` }}
                                    >
                                        <solution.icon className="w-8 h-8" style={{ color: textAccent(solution.color) }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {solution.frontDescription}
                                    </p>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col justify-center"
                                    style={{
                                        backgroundColor: cardBack(solution.color),
                                        borderColor: solution.color,
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <h4 className="text-lg font-bold mb-4 text-white">
                                        {/* Ideally we'd use solution.title here, but since title is now a ReactNode (Link), 
                                            we might want to render just the text content for the back card title if it's meant to be just text.
                                            However, keeping the Link component usually works if styled correctly, or we can extract the text.
                                            Given the instruction "Do NOT modify... content", let's keep it as is, but check if it renders well.
                                            React renders components fine inside {} */}
                                        {solution.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {solution.backDetails.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-center gap-2 text-white text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
