"use client";

import { useState } from "react";
import { Check, MapPin, Search, Users, Phone, BarChart, Award } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const reasons = [
        {
            icon: MapPin,
            title: "Proximity & Relevance Mastery",
            description: <><Link href="/services/seo-services/on-page-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">By creating neighborhood-specific content clusters</Link>, we ensure your business appears for the highest-converting proximity searches within 1-5 miles.</>,
        },
        {
            icon: Search,
            title: "Proprietary Map Pack Ranking Strategies",
            description: "Exclusive tactics to outrank competitors - Our team reverse-engineered Google's local search algorithm through 10,000+ A/B tests. We know which GBP categories trigger featured snippets and which citation sources Google weighs heaviest in 2026.",
        },
        {
            icon: Users,
            title: "Manual Human Verification (No Bots)",
            description: "Real people verifying every citation - While competitors use automated bots that create formatting errors, our team manually submits and double-checks every listing. This attention to detail prevents the NAP inconsistencies that tank local rankings.",
        },
        {
            icon: Phone,
            title: "Full Call Tracking & Attribution",
            description: <><Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">Know exactly which keywords generate paying customers</Link> - We implement dynamic number insertion (DNI) and call recording to track every phone lead back to its source.</>,
        },
        {
            icon: BarChart,
            title: "Conversion Rate Optimization for GBP",
            description: <><Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">Traffic means nothing without conversions</Link> - We A/B test GBP descriptions, service menu layouts, booking button placements, and photo sequences to maximize click-to-call rates. Our optimized profiles convert higher than industry benchmarks.</>,
        },
        {
            icon: Check,
            title: "No Long-Term Lock-In Contracts",
            description: "We earn your business every month - Unlike agencies requiring 12-month commitments, we offer month-to-month agreements. If we don't deliver top 5 Map Pack rankings within 90 days, cancel anytime. 92% of clients renew.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Header Area */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: `${localAmber}40`,
                                }}
                            >
                                <Award className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                                <span className="text-sm font-medium" style={{ color: "var(--accent-amber-text)" }}>
                                    Why Trust Us
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Why Trust Us With Your <span style={{ color: "var(--accent-amber-text)" }}>Local Market?</span>
                            </h2>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                We're a global local SEO company serving hospitality, medical, legal, home services, retail, and real estate sectors. Our proprietary geo-targeting strategies combined with Google's 2026 local search algorithms transform your Google Business Profile into a lead-generating powerhouse that drives more phone calls and foot traffic.
                            </p>

                            <div
                                className="p-6 rounded-2xl border bg-opacity-50 backdrop-blur-sm"
                                style={{
                                    borderColor: `${localAmber}30`,
                                    backgroundColor: `${localAmber}05`
                                }}
                            >
                                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent-amber-text)" }}>High</div>
                                <p style={{ color: "var(--secondary-text)" }}>Of clients stay with us for more than 12 months because our strategies deliver consistent, measurable results.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-3xl border transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? localAmber : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-5px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${localAmber}10` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? localAmber : `${localAmber}15`,
                                            color: isHovered ? "white" : localAmber
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
