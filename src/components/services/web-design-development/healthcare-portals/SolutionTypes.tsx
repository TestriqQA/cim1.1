"use client";

import {
    Heart, Video, Building2, Pill, Brain, Activity,
    ArrowRight, CheckCircle2, Calendar, MessageSquare,
    CreditCard, FileText, Stethoscope, Clock, Users,
    Clipboard, DollarSign, UserCheck, Package, AlertCircle,
    BookOpen, TrendingUp, BarChart3, Target, Shield,
    Sparkles, Plus, Zap
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            icon: Heart,
            title: "Patient Portals",
            description: "Empower patients with secure access to their health records, appointment scheduling, prescription refills, and provider messaging.",
            features: [
                { icon: FileText, text: "Health Records Access" },
                { icon: Calendar, text: "Appointment Booking" },
                { icon: MessageSquare, text: "Secure Messaging" },
                { icon: CreditCard, text: "Bill Pay Integration" }
            ],
            color: "#3b82f6",
            gradient: "from-[#3b82f6] to-[#60a5fa]",
            accentColor: "#60a5fa",
        },
        {
            icon: Video,
            title: "Telehealth Platforms",
            description: "Enable virtual care delivery with HIPAA-compliant video consultations, remote patient monitoring, and digital health tools.",
            features: [
                { icon: Video, text: "Video Consultations" },
                { icon: Activity, text: "Remote Monitoring" },
                { icon: Pill, text: "E-Prescriptions" },
                { icon: Clock, text: "Virtual Waiting Rooms" }
            ],
            color: "#6366f1",
            gradient: "from-[#6366f1] to-[#818cf8]",
            accentColor: "#818cf8",
        },
        {
            icon: Building2,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">Practice Management</Link>,
            description: "Streamline clinical operations with scheduling, billing, documentation, and workflow automation tools.",
            features: [
                { icon: Calendar, text: "Scheduling Systems" },
                { icon: DollarSign, text: "Billing & Claims" },
                { icon: Clipboard, text: "Clinical Documentation" },
                { icon: Users, text: "Staff Management" }
            ],
            color: "#8b5cf6",
            gradient: "from-[#8b5cf6] to-[#a78bfa]",
            accentColor: "#a78bfa",
        },
        {
            icon: Pill,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Pharmacy Systems</Link>,
            description: "Digital platforms for medication management, prescription processing, and pharmacy operations.",
            features: [
                { icon: FileText, text: "Prescription Processing" },
                { icon: Package, text: "Inventory Management" },
                { icon: AlertCircle, text: "Drug Interactions" },
                { icon: BookOpen, text: "Patient Education" }
            ],
            color: "#3b82f6",
            gradient: "from-[#3b82f6] to-[#6366f1]",
            accentColor: "#6366f1",
        },
        {
            icon: Brain,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Mental Health Platforms</Link>,
            description: "Specialized solutions for behavioral health including therapy scheduling, progress tracking, and secure communication.",
            features: [
                { icon: Calendar, text: "Therapy Scheduling" },
                { icon: TrendingUp, text: "Progress Tracking" },
                { icon: Shield, text: "Crisis Resources" },
                { icon: Users, text: "Group Sessions" }
            ],
            color: "#6366f1",
            gradient: "from-[#6366f1] to-[#8b5cf6]",
            accentColor: "#8b5cf6",
        },
        {
            icon: Activity,
            title: "Health Analytics",
            description: "Data-driven insights for population health management, outcome tracking, and quality improvement.",
            features: [
                { icon: Users, text: "Population Health" },
                { icon: BarChart3, text: "Outcome Analytics" },
                { icon: Target, text: "Quality Metrics" },
                { icon: TrendingUp, text: "Predictive Modeling" }
            ],
            color: "#8b5cf6",
            gradient: "from-[#8b5cf6] to-[#3b82f6]",
            accentColor: "#3b82f6",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Medical DNA Helix Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, #3b82f6 2px, transparent 2px),
                            radial-gradient(circle at 80% 70%, #6366f1 2px, transparent 2px),
                            radial-gradient(circle at 40% 80%, #8b5cf6 2px, transparent 2px)
                        `,
                        backgroundSize: "100px 100px",
                        backgroundPosition: "0 0, 50px 50px, 25px 75px",
                    }}
                />
            </div>

            {/* Animated pulse waves */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            top: `${20 + i * 30}%`,
                            left: i % 2 === 0 ? "-10%" : "auto",
                            right: i % 2 === 1 ? "-10%" : "auto",
                            width: "500px",
                            height: "500px",
                            background: `radial-gradient(circle, ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#6366f1' : '#8b5cf6'}10, transparent 70%)`,
                            animation: `float-pulse ${8 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 1.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating medical icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[
                    { Icon: Stethoscope, delay: 0, left: "5%", top: "15%" },
                    { Icon: Heart, delay: 2, left: "90%", top: "25%" },
                    { Icon: Activity, delay: 1, left: "10%", top: "75%" },
                    { Icon: Pill, delay: 3, left: "85%", top: "80%" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: item.left,
                            top: item.top,
                            animation: `medical-float ${6 + i}s ease-in-out infinite`,
                            animationDelay: `${item.delay}s`,
                        }}
                    >
                        <item.Icon className="w-16 h-16" style={{ color: "#3b82f6" }} />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes float-pulse {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-30px) scale(1.1);
                        opacity: 0.5;
                    }
                }
                @keyframes medical-float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(-5deg);
                    }
                    75% {
                        transform: translateY(-15px) rotate(3deg);
                    }
                }
                @keyframes heartbeat-pulse {
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
                @keyframes vital-sign {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(200%);
                    }
                }
                @keyframes shimmer {
                    0% {
                        background-position: -200% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Plus className="w-4 h-4" style={{ color: "#3b82f6" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                Healthcare Solutions
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Healthcare <span style={{ color: "#3b82f6" }}>Solutions</span> We Build
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Comprehensive digital health platforms designed for modern healthcare delivery with HIPAA compliance and patient safety at the core.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => {
                                    setHoveredCard(idx);
                                    setActiveTab(idx);
                                }}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? solution.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 25px 60px ${solution.color}25, 0 0 0 2px ${solution.color}20`
                                            : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-700"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${solution.color}12, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Medical cross corner decoration */}
                                    <div
                                        className="absolute top-0 right-0 w-20 h-20 transition-all duration-500"
                                        style={{
                                            opacity: isHovered ? 0.15 : 0.05,
                                            transform: isHovered ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(45deg)",
                                        }}
                                    >
                                        <Plus className="w-full h-full" style={{ color: solution.color }} />
                                    </div>

                                    {/* Vital signs line animation */}
                                    {isHovered && (
                                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                            <div
                                                className="absolute top-1/2 left-0 w-full h-0.5 opacity-20"
                                                style={{
                                                    background: solution.color,
                                                    animation: "vital-sign 3s linear infinite",
                                                    clipPath: "polygon(0 50%, 10% 50%, 15% 20%, 20% 80%, 25% 50%, 100% 50%)",
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon with complex animation */}
                                        <div className="mb-6 relative">
                                            {/* Outer glow ring */}
                                            <div
                                                className="absolute inset-0 blur-2xl transition-all duration-500"
                                                style={{
                                                    background: solution.color,
                                                    opacity: isHovered ? 0.4 : 0.1,
                                                    transform: isHovered ? "scale(2)" : "scale(1.3)",
                                                }}
                                            />

                                            {/* Icon container */}
                                            <div
                                                className={`relative inline-flex w-20 h-20 rounded-2xl items-center justify-center bg-gradient-to-br ${solution.gradient} transition-all duration-500 overflow-hidden`}
                                                style={{
                                                    transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
                                                    boxShadow: isHovered ? `0 15px 40px ${solution.color}50` : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                    animation: solution.icon === Heart && isHovered ? "heartbeat-pulse 1.5s ease-in-out infinite" : "none",
                                                }}
                                            >
                                                {/* Shimmer effect */}
                                                {isHovered && (
                                                    <div
                                                        className="absolute inset-0"
                                                        style={{
                                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                                            backgroundSize: "200% 100%",
                                                            animation: "shimmer 2s linear infinite",
                                                        }}
                                                    />
                                                )}

                                                {/* Rotating border */}
                                                {isHovered && (
                                                    <div
                                                        className="absolute inset-0 rounded-2xl"
                                                        style={{
                                                            border: `2px solid ${solution.color}50`,
                                                            animation: "spin 3s linear infinite",
                                                        }}
                                                    />
                                                )}

                                                <Icon
                                                    className="w-10 h-10 text-white relative z-10 transition-all duration-500"
                                                    style={{
                                                        filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.6))" : "none",
                                                    }}
                                                />

                                                {/* Active indicator */}
                                                <div
                                                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                                                    style={{
                                                        background: "#10b981",
                                                        animation: isHovered ? "pulse 1.5s ease-in-out infinite" : "none",
                                                        boxShadow: isHovered ? "0 0 10px #10b98180" : "none",
                                                    }}
                                                />

                                                {/* Sparkle effect */}
                                                {isHovered && (
                                                    <div className="absolute -top-2 -right-2">
                                                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Solution number badge */}
                                            <div
                                                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2"
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${solution.color}, ${solution.accentColor})`
                                                        : "var(--card-bg)",
                                                    color: isHovered ? "white" : solution.color,
                                                    borderColor: isHovered ? "transparent" : solution.color,
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
                                                color: isHovered ? solution.color : "var(--foreground)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed flex-1"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features with icons */}
                                        <div className="space-y-3 pt-4 border-t" style={{ borderColor: isHovered ? `${solution.color}30` : "var(--border-color)" }}>
                                            {solution.features.map((feature, fidx) => {
                                                const FeatureIcon = feature.icon;
                                                return (
                                                    <div
                                                        key={fidx}
                                                        className="flex items-center gap-3 transition-all duration-300 group/feature"
                                                        style={{
                                                            transform: isHovered ? "translateX(6px)" : "translateX(0)",
                                                            transitionDelay: `${fidx * 60}ms`,
                                                        }}
                                                    >
                                                        <div
                                                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${solution.gradient} transition-all duration-300`}
                                                            style={{
                                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                                                boxShadow: isHovered ? `0 4px 12px ${solution.color}30` : "none",
                                                            }}
                                                        >
                                                            <FeatureIcon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <span
                                                            className="text-sm font-medium transition-colors duration-300 flex-1"
                                                            style={{
                                                                color: isHovered ? solution.color : "var(--secondary-text)",
                                                            }}
                                                        >
                                                            {feature.text}
                                                        </span>
                                                        {isHovered && (
                                                            <CheckCircle2
                                                                className="w-4 h-4 flex-shrink-0"
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
                                            background: `linear-gradient(90deg, ${solution.color}, ${solution.accentColor}, ${solution.color})`,
                                            backgroundSize: "200% 100%",
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                            animation: isHovered ? "shimmer 3s ease infinite" : "none",
                                        }}
                                    />

                                    {/* Corner shine effect */}
                                    {isHovered && (
                                        <div
                                            className="absolute bottom-0 right-0 w-40 h-40 rounded-tl-full transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at bottom right, ${solution.accentColor}15, transparent 70%)`,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Outer glow halo */}
                                <div
                                    className="absolute inset-0 rounded-2xl blur-2xl transition-all duration-500 -z-10"
                                    style={{
                                        background: `linear-gradient(135deg, ${solution.color}20, ${solution.accentColor}20)`,
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? "scale(1.08)" : "scale(0.95)",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-block p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Shield className="w-8 h-8" style={{ color: "#3b82f6" }} />
                            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--foreground)" }}>
                                HIPAA-Compliant Solutions
                            </h3>
                        </div>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's build secure, patient-centered healthcare platforms that transform care delivery.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                        >
                            Discuss Your Healthcare Project
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}