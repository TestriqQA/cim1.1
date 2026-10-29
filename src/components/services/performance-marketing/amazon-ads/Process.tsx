"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Package, TrendingUp, BarChart2, Zap, Award } from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const textAccent = (c: string) =>
        c.toLowerCase() === "#ff9900" ? "var(--accent-orange-text)" : c;

    const steps = [
        {
            id: 1,
            icon: Search,
            title: "Listing Audit",
            description: <>Deep dive into product content, <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--primary)] transition-colors">SEO keywords</Link>, and conversion rate readiness.</>,
            color: amazonOrange,
        },
        {
            id: 2,
            icon: Package,
            title: <Link href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--primary)] transition-colors">Retail Readiness</Link>,
            description: "Optimizing titles, bullets, images, and A+ content for maximum conversion.",
            color: amazonBlue,
        },
        {
            id: 3,
            icon: Zap,
            title: "Campaign Structure",
            description: "Building a granular account structure for portfolio-level control.",
            color: amazonOrange,
        },
        {
            id: 4,
            icon: TrendingUp,
            title: "Bid Management",
            description: "Aggressive bid testing to find the sweet spot between volume and ACOS.",
            color: amazonBlue,
        },
        {
            id: 5,
            icon: Award,
            title: "Brand Defense",
            description: "Strategies to block competitors from stealing your product page traffic.",
            color: amazonOrange,
        },
        {
            id: 6,
            icon: BarChart2,
            title: "Scale & Grow",
            description: "Expanding into new categories and ad formats like DSP and Video.",
            color: amazonBlue,
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-widest uppercase mb-2 block" style={{ color: "var(--accent-orange-text)" }}>
                        Our Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Path to{" "}
                        <span
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            Best Seller
                        </span>
                    </h2>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Central Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30"
                    />

                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isHovered = hoveredStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative lg:flex items-center gap-12 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                    onMouseEnter={() => setHoveredStep(step.id)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Timeline Node - Amazon Box Style */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl border-4 items-center justify-center bg-background z-10 shadow-lg transform rotate-45"
                                        style={{
                                            borderColor: isHovered ? step.color : "var(--border-color)",
                                            backgroundColor: "var(--background)",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <div className="transform -rotate-45">
                                            <span className="font-bold text-lg" style={{ color: isHovered ? textAccent(step.color) : "var(--secondary-text)" }}>
                                                {step.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="lg:w-1/2">
                                        <div
                                            className="p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group"
                                            style={{
                                                backgroundColor: "var(--background)",
                                                borderColor: isHovered ? step.color : "var(--border-color)",
                                            }}
                                        >
                                            {/* Corner Ribbon */}
                                            <div
                                                className="absolute -top-10 -right-10 w-20 h-20 rotate-45 transition-opacity"
                                                style={{ backgroundColor: step.color, opacity: isHovered ? 0.2 : 0 }}
                                            />

                                            <div className="flex flex-col gap-4 relative z-10">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${step.color}15` }}
                                                >
                                                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block lg:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
