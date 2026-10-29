"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, TrendingUp, DollarSign, Users, Award, Zap } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Amazon Verified Partner",
            description: "Certified experts with access to beta features and dedicated support.",
            color: amazonBlue,
        },
        {
            icon: TrendingUp,
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">Profitable Growth</Link>,
            description: "Focus on increasing Net Profit, not just vanity revenue metrics.",
            color: amazonOrange,
        },
        {
            icon: DollarSign,
            title: "TACOS Optimization",
            description: "Managing Total ACOS to ensure long-term brand health.",
            color: amazonBlue,
        },
        {
            icon: Users,
            title: "Full-Funnel Strategy",
            description: "From DSP brand awareness to bottom-of-funnel conversion.",
            color: amazonOrange,
        },
        {
            icon: Award,
            title: "Category Leaders",
            description: "Proven track record of building Best Seller status brands.",
            color: amazonBlue,
        },
        {
            icon: Zap,
            title: "Tech-Enabled",
            description: "Using proprietary API tools for real-time bid adjustments.",
            color: amazonOrange,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
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
                        <Award className="w-4 h-4" style={{ color: amazonOrange }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-orange-text)" }}>
                            Why Partner With Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Partner{" "}
                        <span
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            With Us?
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="relative p-6 rounded-2xl border transition-all duration-300"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === idx ? reason.color : "var(--border-color)",
                                transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)",
                                boxShadow: hoveredCard === idx ? `0 10px 30px ${reason.color}15` : "none",
                            }}
                        >
                            {/* 5-Star Rating Motif */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" style={{ color: amazonOrange }}>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                                    style={{
                                        backgroundColor: `${reason.color}15`,
                                        color: reason.color,
                                    }}
                                >
                                    <reason.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
