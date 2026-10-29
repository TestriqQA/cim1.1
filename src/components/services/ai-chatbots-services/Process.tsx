"use client";

import { useState } from "react";
import Link from "next/link";
import {
    CheckCircle2,
    Search,
    MessageSquare,
    Brain,
    Plug,
    TestTube,
    LineChart,
    Sparkles,
    ArrowRight,
    Zap,
    Target,
    Users,
    TrendingUp,
} from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description: "We audit your current support/sales workflows, identify automation opportunities, and define clear KPIs for success.",
            icon: Search,
            color: "#6366F1",
        },
        {
            number: "02",
            title: "Conversation Design",
            description: "Our linguists map out user intents, utterances, and dialogue flows to ensure natural, empathetic interactions.",
            icon: MessageSquare,
            color: "#8B5CF6",
        },
        {
            number: "03",
            title: "Development & Training",
            description: "We build the bot using best-in-class LLMs (GPT-4o, Claude 3.5), fine-tuning them on your proprietary data securely.",
            icon: Brain,
            color: "#EC4899",
        },
        {
            number: "04",
            title: "Integration",
            description: <span>We connect the chatbot to your <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Tech Stack</Link>-CRM, ERP, Helpdesk, and eCommerce platforms-for real-time data sync.</span>,
            icon: Plug,
            color: "#F59E0B",
        },
        {
            number: "05",
            title: "Testing & Optimization",
            description: "Rigorous QA including stress testing, bias detection, and fallback handling before go-live.",
            icon: TestTube,
            color: "#10B981",
        },
        {
            number: "06",
            title: "Launch & Evolve",
            description: "We deploy the bot and monitor performance 24/7, using active learning to improve accuracy over time.",
            icon: LineChart,
            color: "#06B6D4",
        },
    ];

    // Map per-step brand hue (used for borders/gradients/shadows) to an AA-contrast
    // theme-aware token when the same hue is applied as TEXT.
    const textAccentMap: Record<string, string> = {
        "#6366f1": "var(--accent-indigo-text)",
        "#8b5cf6": "var(--accent-violet-text)",
        "#ec4899": "var(--accent-pink-text)",
        "#f59e0b": "var(--accent-amber-text)",
        "#10b981": "var(--accent-green-text)",
        "#06b6d4": "var(--accent-cyan-text)",
    };
    const textAccent = (c: string) => textAccentMap[c.toLowerCase()] ?? c;

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--brand-chatbot) 30%, transparent)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-indigo-text)" }}>
                            Our Methodology
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Our 6-Step Custom AI Chatbot <span style={{ color: "var(--accent-indigo-text)" }}>Development Process</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From initial strategy to post-launch optimization, we follow a rigorous agile framework to ensure your chatbot delivers ROI from Day 1.
                    </p>
                </div>

                {/* Vertical Timeline Process */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{
                            background: "linear-gradient(180deg, var(--brand-chatbot), transparent)",
                        }}
                    />

                    {/* Process Steps */}
                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isHovered = hoveredStep === index;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Desktop Layout */}
                                    <div className="hidden md:flex items-center gap-8">
                                        {/* Left Content */}
                                        <div className={`flex-1 ${isLeft ? 'text-right' : 'flex items-center justify-center'}`}>
                                            {isLeft ? (
                                                <div
                                                    className="inline-block p-6 rounded-2xl border transition-all duration-500"
                                                    style={{
                                                        backgroundColor: isHovered
                                                            ? `color-mix(in srgb, ${step.color} 10%, var(--card-bg))`
                                                            : "var(--card-bg)",
                                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                                        transform: isHovered ? "translateX(-12px) scale(1.02)" : "translateX(0) scale(1)",
                                                        boxShadow: isHovered ? `0 20px 60px ${step.color}30` : "none",
                                                    }}
                                                >
                                                    <div className="flex items-start gap-4 flex-row-reverse">
                                                        <div
                                                            className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                                transform: isHovered ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
                                                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                            }}
                                                        >
                                                            <Icon className="w-8 h-8 text-white" />
                                                        </div>
                                                        <div className="flex-1 text-right">
                                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    className="text-8xl font-black opacity-10 transition-all duration-500"
                                                    style={{
                                                        color: textAccent(step.color),
                                                    }}
                                                >
                                                    {step.number}
                                                </div>
                                            )}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="relative flex-shrink-0 z-10">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center border-4 font-bold text-sm transition-all duration-500"
                                                style={{
                                                    backgroundColor: "var(--background)",
                                                    borderColor: isHovered ? step.color : "var(--border-color)",
                                                    color: isHovered ? textAccent(step.color) : "var(--foreground)",
                                                    transform: isHovered ? "scale(1.3)" : "scale(1)",
                                                    boxShadow: isHovered ? `0 0 30px ${step.color}60` : "none",
                                                }}
                                            >
                                                {step.number}
                                            </div>

                                            {/* Pulse Animation */}
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-ping"
                                                    style={{
                                                        backgroundColor: step.color,
                                                        opacity: 0.3,
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Right Content */}
                                        <div className={`flex-1 ${!isLeft ? 'text-left' : 'flex items-center justify-center'}`}>
                                            {!isLeft ? (
                                                <div
                                                    className="inline-block p-6 rounded-2xl border transition-all duration-500"
                                                    style={{
                                                        backgroundColor: isHovered
                                                            ? `color-mix(in srgb, ${step.color} 10%, var(--card-bg))`
                                                            : "var(--card-bg)",
                                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                                        transform: isHovered ? "translateX(12px) scale(1.02)" : "translateX(0) scale(1)",
                                                        boxShadow: isHovered ? `0 20px 60px ${step.color}30` : "none",
                                                    }}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div
                                                            className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                                transform: isHovered ? "rotate(5deg) scale(1.1)" : "rotate(0) scale(1)",
                                                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                            }}
                                                        >
                                                            <Icon className="w-8 h-8 text-white" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    className="text-8xl font-black opacity-10 transition-all duration-500"
                                                    style={{
                                                        color: textAccent(step.color),
                                                    }}
                                                >
                                                    {step.number}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="md:hidden flex items-start gap-4 pl-12">
                                        {/* Mobile Circle */}
                                        <div className="absolute left-0 top-0">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center border-4 font-bold text-sm transition-all duration-500"
                                                style={{
                                                    backgroundColor: "var(--background)",
                                                    borderColor: isHovered ? step.color : "var(--border-color)",
                                                    color: isHovered ? textAccent(step.color) : "var(--foreground)",
                                                }}
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Mobile Card */}
                                        <div
                                            className="flex-1 p-6 rounded-2xl border transition-all duration-500"
                                            style={{
                                                backgroundColor: isHovered
                                                    ? `color-mix(in srgb, ${step.color} 10%, var(--card-bg))`
                                                    : "var(--card-bg)",
                                                borderColor: isHovered ? step.color : "var(--border-color)",
                                                boxShadow: isHovered ? `0 10px 40px ${step.color}20` : "none",
                                            }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                    }}
                                                >
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Benefits */}
                <div className="mt-20 p-8 rounded-3xl border relative overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Decorative gradient */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl"
                        style={{
                            background: "radial-gradient(circle, var(--brand-chatbot), transparent)",
                        }}
                    />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                                }}
                            >
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                Why Our Process Works
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { text: "Collaborative approach ensures your vision is realized", icon: Users },
                                { text: "Data-driven optimization for continuous improvement", icon: TrendingUp },
                                { text: "Transparent communication throughout development", icon: MessageSquare },
                                { text: "Agile methodology for faster time-to-market", icon: Zap },
                            ].map((benefit, idx) => {
                                const BenefitIcon = benefit.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group hover:bg-opacity-50"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 5%, transparent)",
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                                            }}
                                        >
                                            <BenefitIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="flex-1" style={{ color: "var(--secondary-text)" }}>
                                            {benefit.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}