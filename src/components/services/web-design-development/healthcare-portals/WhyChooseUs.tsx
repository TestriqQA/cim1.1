"use client";

import {
    Shield, Zap, Heart, Users, Award, Clock,
    Lock, FileCheck, Activity, Stethoscope, Hospital,
    CheckCircle2, Star, TrendingUp, UserCheck, Database,
    Bell, Wifi, Sparkles, ArrowRight, Plus, Waypoints,
    Fingerprint, Eye
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [pulseActive, setPulseActive] = useState(true);

    const reasons = [
        {
            icon: Shield,
            title: "HIPAA Expertise",
            description: "Deep understanding of healthcare compliance requirements and security best practices to protect sensitive patient data.",
            highlights: [
                { icon: Lock, text: "Data encryption" },
                { icon: FileCheck, text: "Compliance audits" },
                { icon: Fingerprint, text: "Access control" }
            ],
            color: "#3b82f6",
            gradient: "from-[#3b82f6] to-[#6366f1]",
            accentColor: "#6366f1",
        },
        {
            icon: Zap,
            title: "Fast Implementation",
            description: "Proven methodologies to deliver compliant solutions quickly without compromising quality or security standards.",
            highlights: [
                { icon: TrendingUp, text: "Rapid deployment" },
                { icon: CheckCircle2, text: "Quality assured" },
                { icon: Activity, text: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Agile process</Link> }
            ],
            color: "#6366f1",
            gradient: "from-[#6366f1] to-[#8b5cf6]",
            accentColor: "#8b5cf6",
        },
        {
            icon: Heart,
            title: <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:underline">Patient-Centered Design</Link>,
            description: "Accessible, intuitive interfaces designed for patients of all ages and abilities with empathy-driven UX.",
            highlights: [
                { icon: Eye, text: "Accessibility" },
                { icon: Users, text: "User-friendly" },
                { icon: Heart, text: "Empathy-driven" }
            ],
            color: "#8b5cf6",
            gradient: "from-[#8b5cf6] to-[#a78bfa]",
            accentColor: "#a78bfa",
        },
        {
            icon: Database,
            title: "EHR Integration Experts",
            description: "Seamless integration with Epic, Cerner, Meditech, and other major EHR systems with real-time data synchronization.",
            highlights: [
                { icon: Waypoints, text: "Multi-system" },
                { icon: Activity, text: "Real-time sync" },
                { icon: Database, text: "Data mapping" }
            ],
            color: "#3b82f6",
            gradient: "from-[#3b82f6] to-[#8b5cf6]",
            accentColor: "#6366f1",
        },
        {
            icon: Award,
            title: "Proven Track Record",
            description: "Trusted by healthcare organizations to build secure, reliable patient platforms with high availability.",
            highlights: [
                { icon: Star, text: "Proven expertise" },
                { icon: UserCheck, text: "Trusted partner" },
                { icon: TrendingUp, text: "high availability" }
            ],
            color: "#6366f1",
            gradient: "from-[#6366f1] to-[#3b82f6]",
            accentColor: "#3b82f6",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock monitoring and support for mission-critical healthcare systems with immediate response times.",
            highlights: [
                { icon: Bell, text: "Instant alerts" },
                { icon: Wifi, text: "Always online" },
                { icon: Users, text: "Dedicated team" }
            ],
            color: "#8b5cf6",
            gradient: "from-[#8b5cf6] to-[#6366f1]",
            accentColor: "#6366f1",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Medical cross pattern background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 49px, #3b82f6 49px, #3b82f6 51px),
                            repeating-linear-gradient(90deg, transparent, transparent 49px, #3b82f6 49px, #3b82f6 51px)
                        `,
                        backgroundSize: "100px 100px",
                    }}
                />
            </div>

            {/* Animated pulse waves */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-20"
                        style={{
                            width: `${300 + i * 200}px`,
                            height: `${300 + i * 200}px`,
                            borderColor: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
                            animation: `pulse-ring ${3 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating medical icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { Icon: Heart, delay: 0, left: "10%", top: "20%" },
                    { Icon: Activity, delay: 1, left: "80%", top: "30%" },
                    { Icon: Stethoscope, delay: 2, left: "15%", top: "70%" },
                    { Icon: Hospital, delay: 1.5, left: "85%", top: "65%" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: item.left,
                            top: item.top,
                            animation: `float-medical ${5 + i}s ease-in-out infinite`,
                            animationDelay: `${item.delay}s`,
                        }}
                    >
                        <item.Icon className="w-12 h-12" style={{ color: "#3b82f6" }} />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes pulse-ring {
                    0%, 100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.2;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.1);
                        opacity: 0.1;
                    }
                }
                @keyframes float-medical {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                    66% {
                        transform: translateY(-10px) rotate(-5deg);
                    }
                }
                @keyframes heartbeat {
                    0%, 100% {
                        transform: scale(1);
                    }
                    10% {
                        transform: scale(1.1);
                    }
                    20% {
                        transform: scale(1);
                    }
                    30% {
                        transform: scale(1.15);
                    }
                    40% {
                        transform: scale(1);
                    }
                }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Activity className="w-4 h-4" style={{ color: "#3b82f6" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                Healthcare Excellence
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose <span style={{ color: "#3b82f6" }}>Us</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        We bring healthcare expertise and technical excellence to every project, ensuring HIPAA compliance and patient safety.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card */}
                                <div
                                    className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? reason.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 25px 70px ${reason.color}30, 0 0 0 2px ${reason.color}20, inset 0 0 60px ${reason.color}05`
                                            : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-700"
                                        style={{
                                            background: `radial-gradient(circle at center, ${reason.color}10, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Medical cross corner decoration */}
                                    <div
                                        className="absolute top-0 right-0 w-16 h-16 transition-all duration-500"
                                        style={{
                                            opacity: isHovered ? 0.3 : 0.1,
                                            transform: isHovered ? "scale(1)" : "scale(0.8)",
                                        }}
                                    >
                                        <Plus
                                            className="w-full h-full"
                                            style={{ color: reason.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon with heartbeat animation */}
                                        <div className="mb-6 relative">
                                            {/* Pulse ring background */}
                                            <div
                                                className="absolute inset-0 blur-2xl transition-all duration-500"
                                                style={{
                                                    background: reason.color,
                                                    opacity: isHovered ? 0.3 : 0.1,
                                                    transform: isHovered ? "scale(1.8)" : "scale(1.2)",
                                                }}
                                            />

                                            <div
                                                className={`relative inline-flex w-20 h-20 rounded-2xl items-center justify-center bg-gradient-to-br ${reason.gradient} transition-all duration-500`}
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                    boxShadow: isHovered ? `0 15px 40px ${reason.color}50` : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                    animation: isHovered && reason.icon === Heart ? "heartbeat 1.5s ease-in-out infinite" : "none",
                                                }}
                                            >
                                                {/* ECG line effect */}
                                                {isHovered && (
                                                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                        <div
                                                            className="absolute top-1/2 left-0 w-full h-0.5 opacity-30"
                                                            style={{
                                                                background: "white",
                                                                animation: "ecg-line 2s linear infinite",
                                                            }}
                                                        />
                                                    </div>
                                                )}

                                                {/* Rotating pulse ring */}
                                                {isHovered && (
                                                    <>
                                                        <div
                                                            className="absolute inset-0 rounded-2xl border-2 opacity-50"
                                                            style={{
                                                                borderColor: "white",
                                                                animation: "pulse-border 2s ease-in-out infinite",
                                                            }}
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-2xl animate-ping"
                                                            style={{
                                                                background: reason.color,
                                                                opacity: 0.2,
                                                            }}
                                                        />
                                                    </>
                                                )}

                                                <Icon
                                                    className="w-10 h-10 text-white relative z-10 transition-transform duration-500"
                                                    style={{
                                                        filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
                                                    }}
                                                />

                                                {/* Status indicator dot */}
                                                <div
                                                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                                                    style={{
                                                        background: "#10b981",
                                                        animation: isHovered ? "pulse 1.5s ease-in-out infinite" : "none",
                                                    }}
                                                />
                                            </div>

                                            {/* Card number badge */}
                                            <div
                                                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2"
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${reason.color}, ${reason.accentColor})`
                                                        : "var(--background)",
                                                    color: isHovered ? "white" : reason.color,
                                                    borderColor: isHovered ? "transparent" : reason.color,
                                                    transform: isHovered ? "scale(1.2) rotate(360deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            >
                                                {idx + 1}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4 transition-all duration-300"
                                            style={{
                                                color: isHovered ? reason.color : "var(--foreground)",
                                            }}
                                        >
                                            {reason.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base leading-relaxed mb-6 flex-1"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {reason.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-3 pt-4 border-t" style={{ borderColor: isHovered ? `${reason.color}30` : "var(--border-color)" }}>
                                            {reason.highlights.map((highlight, hidx) => {
                                                const HighlightIcon = highlight.icon;
                                                return (
                                                    <div
                                                        key={hidx}
                                                        className="flex items-center gap-3 transition-all duration-300"
                                                        style={{
                                                            transform: isHovered ? "translateX(6px)" : "translateX(0)",
                                                            transitionDelay: `${hidx * 60}ms`,
                                                        }}
                                                    >
                                                        <div
                                                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${reason.gradient} transition-all duration-300 relative overflow-hidden`}
                                                            style={{
                                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                                                boxShadow: isHovered ? `0 4px 12px ${reason.color}30` : "none",
                                                            }}
                                                        >
                                                            {/* Shine effect */}
                                                            {isHovered && (
                                                                <div
                                                                    className="absolute inset-0 opacity-30"
                                                                    style={{
                                                                        background: "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                                                                        animation: "shine 2s ease-in-out infinite",
                                                                    }}
                                                                />
                                                            )}
                                                            <HighlightIcon className="w-4 h-4 text-white relative z-10" />
                                                        </div>
                                                        <span
                                                            className="text-sm font-medium transition-colors duration-300 flex-1"
                                                            style={{
                                                                color: isHovered ? reason.color : "var(--secondary-text)",
                                                            }}
                                                        >
                                                            {highlight.text}
                                                        </span>
                                                        {isHovered && (
                                                            <CheckCircle2
                                                                className="w-5 h-5 flex-shrink-0"
                                                                style={{ color: "#10b981" }}
                                                            />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Animated bottom gradient bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(90deg, ${reason.color}, ${reason.accentColor}, ${reason.color})`,
                                            backgroundSize: "200% 100%",
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            animation: isHovered ? "gradient-shift 3s ease infinite" : "none",
                                        }}
                                    />

                                    {/* Corner glow effect */}
                                    {isHovered && (
                                        <div
                                            className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at bottom right, ${reason.color}20, transparent)`,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Outer glow halo */}
                                <div
                                    className="absolute inset-0 rounded-2xl blur-2xl transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `linear-gradient(135deg, ${reason.color}15, ${reason.accentColor}15)`,
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? "scale(1.05)" : "scale(0.95)",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { Icon: Hospital, number: "200+", label: "Healthcare Clients", color: "#3b82f6" },
                        { Icon: Users, number: "1M+", label: "Patients Served", color: "#6366f1" },
                        { Icon: Shield, number: "100%", label: "HIPAA Compliant", color: "#8b5cf6" },
                        { Icon: Star, number: "High", label: "System Uptime", color: "#a78bfa" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 group"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)` }}
                            >
                                <stat.Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color === "#a78bfa" ? "var(--accent-violet-text)" : stat.color }}>
                                {stat.number}
                            </div>
                            <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <div className="inline-block p-8 rounded-2xl border" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                            Ready to Transform Healthcare?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's build secure, compliant, and patient-centered solutions together.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-border {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                }
                @keyframes shine {
                    0% {
                        transform: translateX(-100%) translateY(-100%);
                    }
                    100% {
                        transform: translateX(100%) translateY(100%);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                @keyframes ecg-line {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
}