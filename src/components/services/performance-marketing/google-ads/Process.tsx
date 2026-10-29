"use client";

import { Search, BarChart, Settings, Target, TrendingUp, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";

    const steps = [
        {
            id: 1,
            icon: Search,
            title: "Account Audit",
            description: "Deep-dive analysis of your current Google Ads account, identifying waste and opportunities.",
            details: ["Quality Score analysis", "Wasted spend audit", "Competitor analysis"],
        },
        {
            id: 2,
            icon: Target,
            title: <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="hover:text-[var(--primary)] transition-colors">Strategy Development</Link>,
            description: "Custom campaign strategy aligned with your business goals and budget.",
            details: ["Keyword research", "Audience segmentation", "Budget allocation"],
        },
        {
            id: 3,
            icon: Settings,
            title: "Campaign Setup",
            description: "Expert implementation with proper structure, tracking, and conversion setup.",
            details: ["Campaign architecture", "Ad copy creation", "Conversion tracking"],
        },
        {
            id: 4,
            icon: Rocket,
            title: "Launch & Monitor",
            description: "Controlled launch with real-time monitoring and initial optimization.",
            details: ["Bid management", "Budget pacing", "Performance monitoring"],
        },
        {
            id: 5,
            icon: TrendingUp,
            title: "Optimize & Scale",
            description: "Continuous optimization based on data to improve ROAS and scale winners.",
            details: ["A/B testing", "Bid automation", "Audience expansion"],
        },
        {
            id: 6,
            icon: BarChart,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Report & Iterate</Link>,
            description: "Transparent reporting with actionable insights and strategic recommendations.",
            details: ["Weekly reports", "Monthly reviews", "Quarterly strategy"],
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
                    style={{
                        background: `radial-gradient(circle, ${googleBlue}, transparent 70%)`,
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                        style={{
                            backgroundColor: `${googleBlue}15`,
                            borderColor: `${googleBlue}40`,
                        }}
                    >
                        <CheckCircle className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        How We <span style={{ color: "var(--brand-blue-text)" }}>Work</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step methodology for Google Ads success.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{
                            background: `linear-gradient(to bottom, ${googleBlue}, ${googleGreen})`
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, idx) => (
                            <div
                                key={step.id}
                                className={`relative lg:flex items-center lg:mb-16 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                                    <div
                                        className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        {/* Mobile Icon */}
                                        <div
                                            className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${googleBlue}15` }}
                                        >
                                            <step.icon className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                                        </div>

                                        <div className="flex items-center gap-2 mb-2" style={{ justifyContent: idx % 2 === 0 ? "flex-end" : "flex-start" }}>
                                            <span
                                                className="text-xs font-bold px-2 py-1 rounded-full"
                                                style={{ backgroundColor: `${googleBlue}0d`, color: "var(--brand-blue-text)" }}
                                            >
                                                Step {step.id}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {step.title}
                                        </h3>
                                        <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                            {step.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                                            {step.details.map((detail, dIdx) => (
                                                <span
                                                    key={dIdx}
                                                    className="px-3 py-1 rounded-full text-xs font-medium border"
                                                    style={{
                                                        borderColor: `${googleBlue}40`,
                                                        color: "var(--brand-blue-text)",
                                                        backgroundColor: `${googleBlue}10`,
                                                    }}
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div
                                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center border-4"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: googleBlue,
                                    }}
                                >
                                    <step.icon className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                                </div>

                                {/* Empty Space */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
