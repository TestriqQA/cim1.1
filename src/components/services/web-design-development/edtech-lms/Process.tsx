"use client";

import {
    Search, Palette, Code, TestTube, Rocket, BarChart3,
    ArrowRight, CheckCircle2, BookOpen, Users, Video, Settings,
    GraduationCap, Award, FileText, Zap, Target, TrendingUp,
    Globe, Play
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
            title: "Learning Needs Analysis",
            description: "We analyze your educational objectives, target audience, and learning outcomes to design a platform that truly engages learners and delivers measurable results.",
            deliverables: [
                { icon: Target, text: "Learning objectives" },
                { icon: Users, text: "Learner personas" },
                { icon: BookOpen, text: "Content strategy" },
                { icon: BarChart3, text: "Success metrics" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#c084fc]",
        },
        {
            number: "02",
            icon: Palette,
            title: "UX Design & Prototyping",
            description: <>Create intuitive, engaging interfaces that make learning enjoyable. We design for accessibility, mobile-first, and optimal learning experiences.</>,
            deliverables: [
                { icon: Palette, text: <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:underline">Interface design</Link> },
                { icon: Play, text: "Interactive mockups" },
                { icon: Users, text: "User testing" },
                { icon: Settings, text: <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile optimization</Link> }
            ],
            color: "#ec4899",
            textColor: "var(--accent-pink-text)",
            gradient: "from-[#ec4899] to-[#f472b6]",
        },
        {
            number: "03",
            icon: Code,
            title: "Platform Development",
            description: "Build your LMS with course management, video streaming, quizzes, progress tracking, and all the features needed for effective online learning.",
            deliverables: [
                { icon: BookOpen, text: "Course builder" },
                { icon: Video, text: <Link href="/services/web-design-development/entertainment-media" className="underline underline-offset-2 hover:underline">Video streaming</Link> },
                { icon: Award, text: "Certification engine" },
                { icon: Zap, text: "Quiz system" }
            ],
            color: "#f97316",
            textColor: "var(--accent-orange-text)",
            gradient: "from-[#f97316] to-[#fb923c]",
        },
        {
            number: "04",
            icon: TestTube,
            title: "Testing & Quality Assurance",
            description: "Comprehensive testing including video playback, quiz functionality, progress tracking, and multi-device compatibility.",
            deliverables: [
                { icon: Video, text: "Video testing" },
                { icon: CheckCircle2, text: "Quiz validation" },
                { icon: TrendingUp, text: "Performance testing" },
                { icon: Settings, text: "Cross-device QA" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#ec4899]",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Content Migration",
            description: "Smooth deployment with content migration support, instructor training, and learner onboarding assistance.",
            deliverables: [
                { icon: Globe, text: "Platform launch" },
                { icon: FileText, text: "Content migration" },
                { icon: Users, text: "User training" },
                { icon: Play, text: "Go-live support" }
            ],
            color: "#ec4899",
            textColor: "var(--accent-pink-text)",
            gradient: "from-[#ec4899] to-[#f97316]",
        },
        {
            number: "06",
            icon: BarChart3,
            title: "Analytics & Optimization",
            description: "Continuous improvement with learning analytics, engagement tracking, and feature enhancements based on user behavior.",
            deliverables: [
                { icon: BarChart3, text: "Learning analytics" },
                { icon: Target, text: "Engagement metrics" },
                { icon: TrendingUp, text: "Performance insights" },
                { icon: Zap, text: "Feature roadmap" }
            ],
            color: "#f97316",
            textColor: "var(--accent-orange-text)",
            gradient: "from-[#f97316] to-[#a855f7]",
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
                <div className="absolute top-40 right-20 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <GraduationCap className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>
                                Our Process
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "var(--brand-purple-text)" }}>EdTech Development</span> Process
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        A learner-focused methodology that prioritizes engagement while building scalable education platforms.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #a855f7, #ec4899)",
                        }}
                    />
                </div>

                {/* Process Steps with Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "linear-gradient(180deg, #a855f7, #ec4899, #f97316, #a855f7, #ec4899, #f97316)",
                                opacity: 0.2,
                            }}
                        />
                        <div
                            className="absolute inset-0 rounded-full transition-all duration-1000"
                            style={{
                                background: "linear-gradient(180deg, #a855f7, #ec4899, #f97316, #a855f7, #ec4899, #f97316)",
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

                                            <h3
                                                className="hidden lg:block text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                                                style={{ color: isHovered ? step.textColor : "var(--foreground)" }}
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
                                                <div
                                                    className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                        opacity: isHovered ? 0.6 : 0.3,
                                                        transform: "scale(1.5)",
                                                    }}
                                                />

                                                <div
                                                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-2xl`}
                                                >
                                                    {isActive && (
                                                        <div
                                                            className="absolute inset-0 rounded-2xl animate-ping"
                                                            style={{ background: step.color, opacity: 0.3 }}
                                                        />
                                                    )}
                                                    <Icon className="w-12 h-12 text-white relative z-10" />
                                                </div>

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
                                            <h3
                                                className="lg:hidden text-2xl font-bold mb-4 text-center transition-colors duration-300"
                                                style={{ color: isHovered ? step.textColor : "var(--foreground)" }}
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
                                                <div
                                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                />

                                                <div className="relative z-10">
                                                    <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                        {step.description}
                                                    </p>

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
                                                                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                                                                    >
                                                                        <DeliverableIcon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <span
                                                                        className="text-sm font-medium transition-colors duration-300"
                                                                        style={{ color: isHovered ? "var(--foreground)" : "var(--secondary-text)" }}
                                                                    >
                                                                        {deliverable.text}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

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

                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center my-8">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ background: `linear-gradient(135deg, ${step.color}30, ${steps[idx + 1].color}30)` }}
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
                            Ready to Build Your Learning Platform?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's discuss how our proven process can bring your EdTech vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group"
                            style={{ background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" }}
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
