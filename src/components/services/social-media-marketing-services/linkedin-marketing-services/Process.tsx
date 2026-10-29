"use client";

import { useState } from "react";
import {
    Search,
    Target,
    Palette,
    Rocket,
    BarChart3,
    RefreshCw,
    CheckCircle2,
    Clock,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const linkedinBlue = "#0A66C2";

    const steps = [
        {
            icon: Search,
            title: "Account & Audience Audit",
            description: "Analyze your LinkedIn presence, competitor activity, and identify your ideal B2B audience segments.",
            details: [
                "Company page audit",
                "Competitor analysis",
                "Audience research",
                "Industry benchmarking",
                "Opportunity mapping",
            ],
            duration: "Week 1",
            color: "#0A66C2",
        },
        {
            icon: Target,
            title: "Strategy Development",
            description: "Create a comprehensive LinkedIn strategy including targeting, messaging, and campaign structure.",
            details: [
                "Targeting strategy",
                "Campaign architecture",
                "Budget allocation",
                "KPI definition",
                "Content calendar",
            ],
            duration: "Week 2",
            color: "#0077B5",
        },
        {
            icon: Palette,
            title: "Ad Creative & Copy",
            description: "Develop compelling ad creatives and copy optimized for B2B LinkedIn audiences.",
            details: [
                "Ad creative design",
                "Copywriting",
                "A/B test variants",
                "Lead gen forms",
                "Landing pages",
            ],
            duration: "Week 2-3",
            color: "#004182",
        },
        {
            icon: Rocket,
            title: "Campaign Launch",
            description: "Launch campaigns with precise targeting and implement tracking for performance monitoring.",
            details: [
                "Campaign setup",
                "Audience targeting",
                "Conversion tracking",
                "Budget pacing",
                "Quality checks",
            ],
            duration: "Week 3",
            color: "#0A66C2",
        },
        {
            icon: BarChart3,
            title: "Optimization & Testing",
            description: "Continuously optimize campaigns based on performance data and run strategic A/B tests.",
            details: [
                "Bid optimization",
                "Audience refinement",
                "Creative testing",
                "Copy iterations",
                "Placement optimization",
            ],
            duration: "Ongoing",
            color: "#0077B5",
        },
        {
            icon: RefreshCw,
            title: "Reporting & Scaling",
            description: "Provide detailed performance reports and scale successful campaigns for maximum ROI.",
            details: [
                "Weekly reports",
                "ROI analysis",
                "Lead quality review",
                "Scaling strategy",
                "Quarterly reviews",
            ],
            duration: "Monthly",
            color: "#004182",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${linkedinBlue}08` }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${linkedinBlue}05`, animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "var(--card-bg)", border: `1px solid ${linkedinBlue}30` }}>
                        <Zap className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>6-Step Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our LinkedIn</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Marketing Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven, data-backed methodology to dominate the B2B landscape.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Search,
                            title: "Account & Audience Audit",
                            description: "Deep-dive LinkedIn ads audit to find wasted spend and growth opportunities.",
                            details: [
                                "Company profile audit",
                                "Wasted spend analysis",
                                "Audience segmentation",
                                "Competitor benchmarking",
                                "Growth mapping",
                            ],
                            duration: "Week 1",
                            color: "#0A66C2",
                        },
                        {
                            icon: Target,
                            title: "Strategy Development",
                            description: "Crafting a comprehensive Account Based Marketing (ABM) roadmap.",
                            details: [
                                "ABM strategy design",
                                "Lead funnel mapping",
                                "Budget optimization",
                                "Target account lists",
                                "KPI framework",
                            ],
                            duration: "Week 2",
                            color: "#0077B5",
                        },
                        {
                            icon: Palette,
                            title: "Creative & Copy Excellence",
                            description: <><Link href="/services/web-design-development/branding-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Ad Creative</Link> - Developing high-CTR LinkedIn sponsored content and visuals.</>,
                            details: [
                                "Persuasive ad copy",
                                "Visual asset creation",
                                "Ad format selection",
                                "Lead gen form design",
                                "A/B test planning",
                            ],
                            duration: "Week 2-3",
                            color: "#004182",
                        },
                        {
                            icon: Rocket,
                            title: "Campaign Launch",
                            description: "Multi-variant testing and LinkedIn Matched Audiences setup.",
                            details: [
                                "Technical tracking setup",
                                "Matched audiences",
                                "Campaign structure",
                                "Direct outreach launch",
                                "Insight tag validation",
                            ],
                            duration: "Week 3",
                            color: "#0A66C2",
                        },
                        {
                            icon: Zap,
                            title: "AI-Driven Optimization",
                            description: "Continuous LinkedIn dynamic ads optimization for lower CPL.",
                            details: [
                                "AI bidding management",
                                "Dynamic ad iterations",
                                "Real-time adjustments",
                                <Link key="conv-opt" href="/services/performance-marketing" className="hover:text-[var(--brand-blue-text)] transition-colors">Conversion optimization</Link>,
                                "Lead quality filtering",
                            ],
                            duration: "Ongoing",
                            color: "#0077B5",
                        },
                        {
                            icon: BarChart3,
                            title: "Scaling & ROI Reporting",
                            description: "Bi-weekly deep dives into performance and revenue growth.",
                            details: [
                                "ROI tracking reports",
                                "Executive deep-dives",
                                "Budget scaling strategy",
                                "New market expansion",
                                "Quarterly roadmaps",
                            ],
                            duration: "Ongoing",
                            color: "#004182",
                        },
                    ].map((step, idx) => {
                        const Icon = step.icon;
                        const isHovered = hoveredStep === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredStep(idx)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Glow */}
                                <div
                                    className={`absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-20" : ""}`}
                                    style={{ backgroundColor: step.color }}
                                />

                                <div
                                    className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 h-full overflow-hidden ${isHovered ? "shadow-2xl scale-[1.03]" : "shadow-lg"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number */}
                                    <div
                                        className={`absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}`}
                                                style={{
                                                    backgroundColor: isHovered ? step.color : `${step.color}15`,
                                                }}
                                            >
                                                <Icon className={`w-7 h-7 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`} style={{ color: isHovered ? "white" : "var(--brand-blue-text)" }} />
                                            </div>

                                            <div
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
                                                style={{ backgroundColor: `${step.color}15`, color: "var(--brand-blue-text)" }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {step.duration}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-all duration-500" style={{ color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)" }}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {step.description}
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className={`flex items-start gap-3 transition-all duration-300 ${isHovered ? "translate-x-1" : "translate-x-0"}`}
                                                    style={{ transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms" }}
                                                >
                                                    <div
                                                        className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                                        style={{ backgroundColor: `${step.color}15` }}
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--brand-blue-text)" }} />
                                                    </div>
                                                    <span className={`text-sm leading-relaxed transition-all duration-300 ${isHovered ? "font-medium" : ""}`} style={{ color: "var(--secondary-text)" }}>
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-6 pt-6 border-t" style={{ borderColor: isHovered ? `${step.color}30` : "var(--border-color)" }}>
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
                                                    style={{ backgroundColor: step.color }}
                                                />
                                            </div>
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
