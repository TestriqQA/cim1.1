"use client";

import {
    Search, Palette, Code, TestTube, Rocket, BarChart3,
    TrendingUp, Users, Map, Settings, FileText, Layout,
    Building, MapPin, Home, Smartphone, Zap,
    Globe, Mail, Share2, Target, LineChart, CheckCircle2,
    ArrowRight
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Market Research & Discovery",
            description: "We analyze your target market, competitor platforms, and user expectations to define a real estate platform strategy that captures leads and drives conversions.",
            deliverables: [
                { icon: TrendingUp, text: "Market analysis" },
                { icon: Users, text: "User persona mapping" },
                { icon: Target, text: "Lead funnel design" },
                { icon: Settings, text: "Feature prioritization" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#14b8a6]",
        },
        {
            number: "02",
            icon: Palette,
            title: <><Link href="/blog/ui-ux-design-principles-best-practices" className="hover:underline">UX Design</Link> & Property Presentation</>,
            description: "Creating visually stunning property showcases with intuitive search, interactive maps, and mobile-first experiences that engage property seekers.",
            deliverables: [
                { icon: FileText, text: "Listing page wireframes" },
                { icon: Layout, text: "Search interface design" },
                { icon: Map, text: "Interactive map UX" },
                { icon: Smartphone, text: <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile optimization</Link> }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#2dd4bf]",
        },
        {
            number: "03",
            icon: Code,
            title: "Platform Development",
            description: "Building your platform with MLS/IDX integration, advanced search functionality, virtual tour embedding, and CRM connections for seamless operations.",
            deliverables: [
                { icon: Settings, text: "MLS integration" },
                { icon: MapPin, text: "Map functionality" },
                { icon: Home, text: "Virtual tour setup" },
                { icon: Zap, text: "CRM connection" }
            ],
            color: "#0891b2",
            gradient: "from-[#0891b2] to-[#0d9488]",
        },
        {
            number: "04",
            icon: TestTube,
            title: "Testing & Quality Assurance",
            description: "Comprehensive testing of search algorithms, listing displays, lead capture forms, and performance across all devices and browsers.",
            deliverables: [
                { icon: Search, text: "Search testing" },
                { icon: CheckCircle2, text: "Lead form validation" },
                { icon: TrendingUp, text: "Performance testing" },
                { icon: Smartphone, text: "Cross-device QA" }
            ],
            color: "#2dd4bf",
            gradient: "from-[#2dd4bf] to-[#0d9488]",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Optimization",
            description: <>Coordinated launch with <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">SEO configuration</Link>, analytics setup, and initial marketing integrations to capture early leads and maximize visibility.</>,
            deliverables: [
                { icon: Globe, text: "Local SEO setup" },
                { icon: LineChart, text: "Analytics config" },
                { icon: Mail, text: "Lead notifications" },
                { icon: Share2, text: "Social integration" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#14b8a6]",
        },
        {
            number: "06",
            icon: BarChart3,
            title: "Growth & Analytics",
            description: "Ongoing optimization with A/B testing, lead conversion analysis, and feature enhancements based on user behavior data.",
            deliverables: [
                { icon: Target, text: "A/B testing" },
                { icon: LineChart, text: "Lead reports" },
                { icon: Map, text: "Feature roadmap" },
                { icon: TrendingUp, text: "Performance monitoring" }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#0891b2]",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-96 h-96 bg-[#0d9488]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Rocket className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                                Our Process
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "#0d9488" }}>Real Estate Development</span> Process
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        A lead-focused methodology that prioritizes property presentation while building a foundation for long-term growth.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                        }}
                    />
                </div>

                {/* Process Steps with Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line - Hidden on mobile */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "linear-gradient(180deg, #0d9488, #14b8a6, #0891b2, #2dd4bf, #0d9488, #14b8a6)",
                                opacity: 0.2,
                            }}
                        />
                        {/* Animated progress line */}
                        <div
                            className="absolute inset-0 rounded-full transition-all duration-1000"
                            style={{
                                background: "linear-gradient(180deg, #0d9488, #14b8a6, #0891b2, #2dd4bf, #0d9488, #14b8a6)",
                                transform: `scaleY(${(activeStep + 1) / steps.length})`,
                                transformOrigin: "top",
                            }}
                        />
                    </div>

                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;
                            const isHovered = hoveredStep === idx;
                            const isActive = activeStep === idx;

                            return (
                                <div
                                    key={idx}
                                    className="relative"
                                    onMouseEnter={() => {
                                        setHoveredStep(idx);
                                        setActiveStep(idx);
                                    }}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div
                                        className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                                    >
                                        {/* Left/Right Content */}
                                        <div className={`lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                                            {/* Step Number */}
                                            <div
                                                className="text-7xl md:text-8xl font-bold mb-4 opacity-20 transition-all duration-500"
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            >
                                                {step.number}
                                            </div>

                                            {/* Title - Only on desktop */}
                                            <h3
                                                className="hidden lg:block text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                                                style={{
                                                    color: isHovered ? step.color : "var(--foreground)",
                                                }}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>

                                        {/* Center Icon */}
                                        <div className="lg:w-2/12 flex justify-center relative z-20">
                                            <div
                                                className="relative transition-all duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.15) rotate(10deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            >
                                                {/* Outer glow ring */}
                                                <div
                                                    className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                        opacity: isHovered ? 0.6 : 0.3,
                                                        transform: "scale(1.5)",
                                                    }}
                                                />

                                                {/* Icon container */}
                                                <div
                                                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-2xl`}
                                                >
                                                    {/* Animated ring */}
                                                    {isActive && (
                                                        <div
                                                            className="absolute inset-0 rounded-2xl animate-ping"
                                                            style={{
                                                                background: step.color,
                                                                opacity: 0.3,
                                                            }}
                                                        />
                                                    )}

                                                    <Icon className="w-12 h-12 text-white relative z-10" />
                                                </div>

                                                {/* Connection line indicator */}
                                                <div
                                                    className={`hidden lg:block absolute top-1/2 w-16 h-0.5 transition-all duration-500 ${isEven ? "left-full ml-2" : "right-full mr-2"}`}
                                                    style={{
                                                        background: step.color,
                                                        opacity: isHovered ? 1 : 0.3,
                                                        transform: isHovered ? "scaleX(1.2)" : "scaleX(1)",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right/Left Content Card */}
                                        <div className="lg:w-5/12 w-full">
                                            {/* Title - Mobile only */}
                                            <h3
                                                className="lg:hidden text-2xl font-bold mb-4 text-center transition-colors duration-300"
                                                style={{
                                                    color: isHovered ? step.color : "var(--foreground)",
                                                }}
                                            >
                                                {step.title}
                                            </h3>

                                            <div
                                                className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500"
                                                style={{
                                                    backgroundColor: "var(--card-bg)",
                                                    borderColor: isHovered ? step.color : "var(--border-color)",
                                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                                    boxShadow: isHovered ? `0 20px 60px ${step.color}30` : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                                }}
                                            >
                                                {/* Animated background gradient */}
                                                <div
                                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                />

                                                {/* Content */}
                                                <div className="relative z-10">
                                                    <p
                                                        className="text-base md:text-lg mb-6 leading-relaxed"
                                                        style={{ color: "var(--secondary-text)" }}
                                                    >
                                                        {step.description}
                                                    </p>

                                                    {/* Deliverables Grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {step.deliverables.map((deliverable, didx) => {
                                                            const DeliverableIcon = deliverable.icon;
                                                            return (
                                                                <div
                                                                    key={didx}
                                                                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/deliverable"
                                                                    style={{
                                                                        backgroundColor: isHovered ? `${step.color}15` : `${step.color}08`,
                                                                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                                        transitionDelay: `${didx * 50}ms`,
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/deliverable:scale-110 group-hover/deliverable:rotate-12"
                                                                        style={{
                                                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                                                                        }}
                                                                    >
                                                                        <DeliverableIcon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <span
                                                                        className="text-sm font-medium transition-colors duration-300"
                                                                        style={{
                                                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                                                        }}
                                                                    >
                                                                        {deliverable.text}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Bottom accent line */}
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${step.color}, transparent)`,
                                                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                                        transformOrigin: isEven ? "left" : "right",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow connector for mobile */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center my-8">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.color}30, ${steps[idx + 1].color}30)`,
                                                }}
                                            >
                                                <ArrowRight className="w-6 h-6" style={{ color: step.color }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="inline-block p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                            Ready to Launch Your Real Estate Platform?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's discuss how our proven process can bring your property platform to life.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group"
                            style={{
                                background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
                            }}
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
