"use client";

import { useState, useEffect } from "react";
import {
    MapPin,
    Compass,
    PenTool,
    Hammer,
    Plug,
    Plane,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("process-section");
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const visibleHeight = Math.min(
                    windowHeight,
                    rect.bottom
                ) - Math.max(0, rect.top);
                const progress = visibleHeight / windowHeight;
                setScrollProgress(Math.min(progress * 1.5, 1));
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const steps = [
        {
            number: "01",
            icon: MapPin,
            title: "Discovery & Strategy",
            subtitle: "Starting Point",
            description:
                "Deep Travel and Tourism Market Research. We analyze your target audience and competitors to define a roadmap for your Travel and Hospitality Digital Transformation.",
            deliverables: [
                "Market analysis & trends",
                "Target audience profiling",
                "Competitor audit",
                "Transformation roadmap",
            ],
            gradient: "from-blue-500 to-cyan-500",
            bgColor: "#3b82f6",
        },
        {
            number: "02",
            icon: Compass,
            title: "UX/UI Design",
            subtitle: "Route Planning",
            description:
                <span>Focus on <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 hover:underline">UX/UI Design</Link> (UX) for Travel Websites. We create intuitive and visually stunning prototypes that align with your Hospitality Brand Identity.</span>,
            deliverables: [
                "User journey mapping",
                "Interactive prototypes",
                "Brand identity design",
                "Mobile-first interfaces",
            ],
            gradient: "from-purple-500 to-pink-500",
            bgColor: "#a855f7",
        },
        {
            number: "03",
            icon: PenTool,
            title: "Agile Development",
            subtitle: "Crafting Experience",
            description:
                "Sprint-based approach with rapid iterations and clean code. We prioritize Travel Tech best practices to ensure scalability and security from day one.",
            deliverables: [
                "Sprint-based iterations",
                "Clean, documented code",
                "Scaleable architecture",
                "Security best practices",
            ],
            gradient: "from-pink-500 to-rose-500",
            bgColor: "#ec4899",
        },
        {
            number: "04",
            icon: Hammer,
            title: "Integration Excellence",
            subtitle: "Construction Phase",
            description:
                <span>Expertly handle <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline">Travel API Integration Services</Link> (GDS/OTA) and Hotel Property Management System (PMS) Integration for unified operations.</span>,
            deliverables: [
                "GDS & OTA connectivity",
                "PMS system integration",
                "Third-party API sync",
                "Flawless ecosystem",
            ],
            gradient: "from-orange-500 to-amber-500",
            bgColor: "#f97316",
        },
        {
            number: "05",
            icon: Plug,
            title: "Quality Assurance",
            subtitle: "Connection Hub",
            description:
                "Rigorous automated and manual testing to ensure rigorously tested delivery across all devices and global networks.",
            deliverables: [
                "Automated/Manual testing",
                "Security validation",
                "Mobile responsiveness",
                "Global network testing",
            ],
            gradient: "from-teal-500 to-emerald-500",
            bgColor: "#14b8a6",
        },
        {
            number: "06",
            icon: Plane,
            title: "Launch & Training",
            subtitle: "Take Off",
            description:
                "Seamless deployment and Hospitality Staff Training and Development Services to ensure your team is proficient with the new tools.",
            deliverables: [
                "Production deployment",
                "Staff training sessions",
                "Comprehensive docs",
                "Launch support",
            ],
            gradient: "from-indigo-500 to-blue-500",
            bgColor: "#6366f1",
        },
        {
            number: "07",
            icon: TrendingUp,
            title: "Growth & Optimization",
            subtitle: "Destination Excellence",
            description:
                "Post-launch support, Travel and Hospitality Maintenance, and implementation of Hospitality Technology Trends 2026 updates.",
            deliverables: [
                "Continuous monitoring",
                "Trend-based updates",
                <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">SEO refinement</Link>,
                "Performance reports",
            ],
            gradient: "from-green-500 to-teal-500",
            bgColor: "#10b981",
        },
    ];

    const textAccent = (hex: string) =>
        (
            {
                "#3b82f6": "var(--accent-sky-text)",
                "#a855f7": "var(--brand-purple-text)",
                "#ec4899": "var(--accent-pink-text)",
                "#f97316": "var(--accent-orange-text)",
                "#14b8a6": "var(--accent-teal-text)",
                "#6366f1": "var(--accent-indigo-text)",
                "#10b981": "var(--accent-green-text)",
            } as Record<string, string>
        )[hex] || hex;

    // Solid-button backgrounds carrying WHITE label text. The raw step hues are
    // too light for white (2.3-4.5:1), so button fills use these darkened
    // tokens while gradients, borders and icons keep the vivid hue.
    const btnAccent = (hex: string) =>
        (
            {
                "#3b82f6": "var(--accent-sky-btn)",
                "#a855f7": "var(--brand-purple-btn)",
                "#ec4899": "var(--accent-pink-btn)",
                "#f97316": "var(--accent-orange-btn)",
                "#14b8a6": "var(--accent-teal-btn)",
                "#6366f1": "var(--accent-indigo-btn)",
                "#10b981": "var(--accent-green-btn)",
            } as Record<string, string>
        )[hex] || hex;

    return (
        <section
            id="process-section"
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                        color: "#0d9488",
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#3b82f6" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#ec4899", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Compass className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-teal-text)" }}>
                            Your Journey With Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our <span style={{ color: "var(--accent-teal-text)" }}>Development</span> Journey
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A proven methodology designed for hospitality excellence - from discovery
                        to continuous optimization.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #3b82f6, #0d9488, #ec4899)",
                        }}
                    />
                </div>

                {/* Journey Timeline - Desktop */}
                <div className="hidden lg:block relative mb-20">
                    {/* Timeline Container */}
                    <div className="relative" style={{ height: "200px" }}>
                        {/* Timeline Path SVG */}
                        <svg
                            className="w-full h-full absolute top-0 left-0"
                            viewBox="0 0 1400 200"
                            preserveAspectRatio="xMidYMid meet"
                            style={{ overflow: "visible" }}
                        >
                            {/* Background Path */}
                            <path
                                d="M 100 100 Q 200 40, 300 100 Q 400 160, 500 100 Q 600 40, 700 100 Q 800 160, 900 100 Q 1000 40, 1100 100 Q 1200 160, 1300 100"
                                fill="none"
                                stroke="var(--border-color)"
                                strokeWidth="2"
                                opacity="0.3"
                            />
                            {/* Animated Progress Path */}
                            <path
                                d="M 100 100 Q 200 40, 300 100 Q 400 160, 500 100 Q 600 40, 700 100 Q 800 160, 900 100 Q 1000 40, 1100 100 Q 1200 160, 1300 100"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeDasharray="2000"
                                strokeDashoffset={2000 - scrollProgress * 2000}
                                style={{ transition: "stroke-dashoffset 0.3s ease" }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="20%" stopColor="#a855f7" />
                                    <stop offset="40%" stopColor="#ec4899" />
                                    <stop offset="60%" stopColor="#f97316" />
                                    <stop offset="80%" stopColor="#14b8a6" />
                                    <stop offset="100%" stopColor="#10b981" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Step Markers - Positioned absolutely to align with path */}
                        <div className="absolute inset-0 flex justify-between items-center px-8">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                const isActive = activeStep === idx;
                                // Calculate Y position to follow the curve
                                const positions = [
                                    { x: "5%", y: "50%" },
                                    { x: "20%", y: "30%" },
                                    { x: "35%", y: "50%" },
                                    { x: "50%", y: "40%" },
                                    { x: "65%", y: "50%" },
                                    { x: "80%", y: "40%" },
                                    { x: "95%", y: "50%" },
                                ];

                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        className="absolute flex flex-col items-center cursor-pointer"
                                        style={{
                                            left: positions[idx].x,
                                            top: positions[idx].y,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                        onClick={() => setActiveStep(idx)}
                                        onMouseEnter={() => setActiveStep(idx)}
                                        aria-current={isActive ? "step" : undefined}
                                    >
                                        {/* Marker Dot */}
                                        <div
                                            className={`
                                                relative w-16 h-16 rounded-full flex items-center justify-center
                                                transition-all duration-500 z-10
                                                ${isActive ? "scale-125" : "scale-100 hover:scale-110"}
                                            `}
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${step.bgColor}, ${step.bgColor}dd)`
                                                    : "var(--card-bg)",
                                                border: `3px solid ${isActive ? step.bgColor : "var(--border-color)"}`,
                                                boxShadow: isActive
                                                    ? `0 8px 32px ${step.bgColor}60`
                                                    : "0 4px 12px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <Icon
                                                className={`w-7 h-7 transition-all duration-300`}
                                                style={{
                                                    color: isActive ? "#fff" : step.bgColor,
                                                }}
                                            />

                                            {/* Pulse Ring */}
                                            {isActive && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-ping"
                                                    style={{
                                                        border: `2px solid ${step.bgColor}`,
                                                        animationDuration: "2s",
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Step Number and Label */}
                                        <div className="mt-16 text-center whitespace-nowrap">
                                            <div
                                                className={`
                                                    text-xs font-bold mb-1
                                                    transition-all duration-300
                                                `}
                                                style={{
                                                    color: textAccent(step.bgColor),
                                                }}
                                            >
                                                {step.number}
                                            </div>
                                            <div
                                                className={`
                                                    text-sm font-semibold transition-all duration-300
                                                    ${isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"}
                                                `}
                                                style={{
                                                    color: isActive ? textAccent(step.bgColor) : "var(--foreground)",
                                                }}
                                            >
                                                {step.subtitle}
                                            </div>
                                            {/* Keeps the visible label ("01 Starting
                                                Point") at the start of the accessible
                                                name while naming the actual step. */}
                                            <span className="sr-only">
                                                {` — ${step.title}`}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Active Step Details - Desktop */}
                <div className="hidden lg:block mb-16">
                    {steps.map((step, idx) => {
                        const isActive = activeStep === idx;
                        const Icon = step.icon;

                        return (
                            <div
                                key={idx}
                                className={`
                                    transition-all duration-500 ease-out
                                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute pointer-events-none"}
                                `}
                            >
                                <div
                                    className="rounded-3xl border-2 p-8 md:p-12"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: step.bgColor,
                                        boxShadow: `0 20px 60px ${step.bgColor}20`,
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        {/* Left Side - Icon & Title */}
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4`}
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.bgColor}, ${step.bgColor}dd)`,
                                                }}
                                            >
                                                <Icon className="w-12 h-12 text-white" />
                                            </div>
                                            <div
                                                className="text-5xl font-bold mb-2"
                                                style={{ color: textAccent(step.bgColor) }}
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="flex-1">
                                            <h3
                                                className="text-3xl md:text-4xl font-bold mb-3"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className="text-lg mb-6 leading-relaxed"
                                                style={{ color: "var(--secondary-text)" }}
                                            >
                                                {step.description}
                                            </p>

                                            {/* Deliverables Grid */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {step.deliverables.map((deliverable, didx) => (
                                                    <div
                                                        key={didx}
                                                        className={`
                                                            flex items-center gap-3 p-4 rounded-xl
                                                            transition-all duration-300 hover:scale-105
                                                        `}
                                                        style={{
                                                            backgroundColor: `${step.bgColor}10`,
                                                            border: `1px solid ${step.bgColor}30`,
                                                        }}
                                                    >
                                                        <CheckCircle2
                                                            className="w-5 h-5 flex-shrink-0"
                                                            style={{ color: step.bgColor }}
                                                        />
                                                        <span
                                                            className="text-sm font-medium"
                                                            style={{ color: "var(--foreground)" }}
                                                        >
                                                            {deliverable}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Navigation Buttons */}
                                            {/* Every step panel renders its own copy of
                                                this row; only the active one is visible,
                                                so the hidden copies are inert (out of the
                                                tab order and the a11y tree). */}
                                            <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: "var(--border-color)" }} inert={!isActive}>
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                                                    disabled={activeStep === 0}
                                                    className={`
                                                        flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                                                        transition-all duration-300
                                                        ${activeStep === 0 ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}
                                                    `}
                                                    style={{
                                                        backgroundColor: activeStep === 0 ? "var(--border-color)" : `${steps[Math.max(0, activeStep - 1)].bgColor}20`,
                                                        color: activeStep === 0 ? "var(--secondary-text)" : textAccent(steps[Math.max(0, activeStep - 1)].bgColor),
                                                        border: `2px solid ${activeStep === 0 ? "var(--border-color)" : steps[Math.max(0, activeStep - 1)].bgColor}`,
                                                    }}
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                    <span>Previous</span>
                                                </button>

                                                <div className="flex items-center gap-2">
                                                    {steps.map((dot, dotIdx) => (
                                                        <button
                                                            key={dotIdx}
                                                            type="button"
                                                            onClick={() => setActiveStep(dotIdx)}
                                                            aria-label={`Show step ${dotIdx + 1}: ${dot.title}`}
                                                            aria-current={activeStep === dotIdx ? "step" : undefined}
                                                            /* 24x24 hit area around the 10px dot (WCAG 2.5.8) */
                                                            className="group w-6 h-6 flex items-center justify-center rounded-full"
                                                        >
                                                            <span
                                                                className={`
                                                                    block w-2.5 h-2.5 rounded-full transition-all duration-300
                                                                    ${activeStep === dotIdx ? "scale-125" : "group-hover:scale-110"}
                                                                `}
                                                                style={{
                                                                    backgroundColor: activeStep === dotIdx ? dot.bgColor : "var(--border-color)",
                                                                }}
                                                            />
                                                        </button>
                                                    ))}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                                                    disabled={activeStep === steps.length - 1}
                                                    className={`
                                                        flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                                                        transition-all duration-300
                                                        ${activeStep === steps.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}
                                                    `}
                                                    style={{
                                                        backgroundColor: activeStep === steps.length - 1 ? "var(--border-color)" : btnAccent(steps[Math.min(steps.length - 1, activeStep + 1)].bgColor),
                                                        color: activeStep === steps.length - 1 ? "var(--secondary-text)" : "#fff",
                                                        boxShadow: activeStep === steps.length - 1 ? "none" : `0 4px 16px ${steps[Math.min(steps.length - 1, activeStep + 1)].bgColor}40`,
                                                    }}
                                                >
                                                    <span>Next</span>
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile View - Cards */}
                <div className="lg:hidden space-y-6 mb-12">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `linear-gradient(135deg, ${step.bgColor}, ${step.bgColor}dd)`,
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div
                                            className="text-sm font-bold mb-1"
                                            style={{ color: textAccent(step.bgColor) }}
                                        >
                                            {step.number}
                                        </div>
                                        <h3
                                            className="text-xl font-bold"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className="text-xs"
                                            style={{ color: textAccent(step.bgColor) }}
                                        >
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    className="text-sm mb-4 leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {step.description}
                                </p>

                                {/* Deliverables */}
                                <div className="space-y-2">
                                    {step.deliverables.map((deliverable, didx) => (
                                        <div
                                            key={didx}
                                            className="flex items-center gap-2 p-2 rounded-lg"
                                            style={{ backgroundColor: `${step.bgColor}10` }}
                                        >
                                            <CheckCircle2
                                                className="w-4 h-4 flex-shrink-0"
                                                style={{ color: step.bgColor }}
                                            />
                                            <span
                                                className="text-sm"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                {deliverable}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Connector Line */}
                                {idx < steps.length - 1 && (
                                    <div className="flex justify-center mt-4">
                                        <div
                                            className="w-0.5 h-8 rounded-full"
                                            style={{
                                                background: `linear-gradient(180deg, ${step.bgColor}, ${steps[idx + 1].bgColor})`,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div
                    className="text-center p-8 md:p-12 rounded-3xl border-2"
                    style={{
                        borderColor: "#0d9488",
                        background: `linear-gradient(135deg, var(--card-bg), rgba(13, 148, 136, 0.1))`,
                    }}
                >
                    <Sparkles
                        className="w-12 h-12 mx-auto mb-4"
                        style={{ color: "#0d9488" }}
                    />
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ color: "var(--foreground)" }}
                    >
                        Ready to Start Your Journey?
                    </h3>
                    <p
                        className="text-lg mb-6 max-w-2xl mx-auto"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Let's transform your hospitality vision into a powerful digital experience
                        that drives bookings and delights guests.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            backgroundColor: "var(--accent-teal-btn)",
                            boxShadow: "0 4px 20px #0d948840",
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}