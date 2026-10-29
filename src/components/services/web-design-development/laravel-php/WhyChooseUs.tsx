"use client";

import { useState } from "react";
import {
    Clock,
    DollarSign,
    HeartHandshake,
    ShieldCheck,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Users,
            title: "Expert Laravel Developers",
            description: "Our team consists of certified Laravel developers with deep expertise in the PHP ecosystem.",
            gradient: "from-[#FF2D20] to-[#E0261A]",
        },
        {
            icon: Clock,
            title: "Rapid Development",
            description: "We leverage Laravel's tools and ecosystem to deliver robust applications faster than the competition.",
            gradient: "from-[#F05340] to-[#FF2D20]",
        },
        {
            icon: ShieldCheck,
            title: "Security First",
            description: "We implement Laravel's best security practices to protect your application against vulnerabilities.",
            gradient: "from-[#E0261A] to-[#F05340]",
        },
        {
            icon: Zap,
            title: "Performance Optimized",
            description: <>We fine-tune database queries, caching strategies, and server configs for <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">maximum speed</Link>.</>,
            gradient: "from-[#FF2D20] to-[#C92218]",
        },
        {
            icon: DollarSign,
            title: "Cost-Effective",
            description: "Open-source technology and rapid development cycles mean lower total cost of ownership.",
            gradient: "from-[#F05340] to-[#E0261A]",
        },
        {
            icon: HeartHandshake,
            title: "Long-Term Partnership",
            description: <>We provide ongoing <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">maintenance, updates, and support</Link> to ensure your app grows with you.</>,
            gradient: "from-[#FF2D20] to-[#F05340]",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(255, 45, 32, 0.05)",
                            borderColor: "rgba(255, 45, 32, 0.2)",
                        }}
                    >
                        <Users className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why We're the </span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Right Choice
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Combining technical excellence with business understanding.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden group
                                    ${isHovered ? "shadow-2xl -translate-y-2 border-[#FF2D20]/30" : "shadow-sm"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? "" : "var(--border-color)",
                                }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Animated Background Blob */}
                                <div
                                    className={`
                                        absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 transition-opacity duration-500 blur-3xl pointer-events-none
                                        ${isHovered ? "opacity-10" : ""}
                                    `}
                                    style={{ background: "#FF2D20" }}
                                />

                                <div
                                    className={`
                                        w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500
                                        ${isHovered ? "scale-110 rotate-6" : ""}
                                    `}
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255, 45, 32, 0.1), rgba(240, 83, 64, 0.1))",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-[var(--accent-red-text)]" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: isHovered ? "var(--accent-red-text)" : "var(--foreground)" }}>
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
        </section>
    );
}
