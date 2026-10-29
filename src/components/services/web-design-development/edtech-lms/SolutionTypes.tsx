"use client";

import {
    BookOpen, Video, Users, Building2, Briefcase, Globe,
    ArrowRight, CheckCircle2, GraduationCap, Award, Play,
    FileText, MessageSquare, BarChart3, Zap, Target
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const solutions = [
        {
            icon: BookOpen,
            title: "Online Course Platforms",
            description: <>Create and sell <Link href="/services/web-design-development/edtech-lms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">online courses</Link> with video lessons, quizzes, assignments, and progress tracking like Udemy or Skillshare.</>,
            features: [
                { icon: Video, text: "Video Lessons" },
                { icon: FileText, text: "Downloadable Resources" },
                { icon: Award, text: "Course Certificates" },
                { icon: BarChart3, text: "Student Analytics" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#c084fc]",
            accentColor: "#c084fc",
        },
        {
            icon: Building2,
            title: "Corporate LMS",
            description: <>Enterprise <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline text-[var(--accent-pink-text)]">learning management</Link> for employee training, onboarding, compliance, and skill development.</>,
            features: [
                { icon: Users, text: "Team Management" },
                { icon: Target, text: "Skill Tracking" },
                { icon: Award, text: "Compliance Training" },
                { icon: BarChart3, text: "Performance Reports" }
            ],
            color: "#ec4899",
            textColor: "var(--accent-pink-text)",
            gradient: "from-[#ec4899] to-[#f472b6]",
            accentColor: "#f472b6",
        },
        {
            icon: GraduationCap,
            title: "Academic LMS",
            description: "Comprehensive learning platforms for schools and universities with grading, attendance, and parent portals.",
            features: [
                { icon: FileText, text: "Assignment Submission" },
                { icon: BarChart3, text: "Gradebook" },
                { icon: Users, text: "Parent Portal" },
                { icon: MessageSquare, text: "Discussion Forums" }
            ],
            color: "#f97316",
            textColor: "var(--accent-orange-text)",
            gradient: "from-[#f97316] to-[#fb923c]",
            accentColor: "#fb923c",
        },
        {
            icon: Video,
            title: "Live Learning Platforms",
            description: <>Real-time <Link href="/services/web-design-development/entertainment-media" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">virtual classrooms</Link> with video conferencing, screen sharing, and interactive whiteboards.</>,
            features: [
                { icon: Video, text: "Live Video Classes" },
                { icon: MessageSquare, text: "Real-time Chat" },
                { icon: Play, text: "Recording & Replay" },
                { icon: Users, text: "Breakout Rooms" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#ec4899]",
            accentColor: "#ec4899",
        },
        {
            icon: Briefcase,
            title: "Training Marketplaces",
            description: "Multi-instructor platforms where experts can create and monetize their courses with revenue sharing.",
            features: [
                { icon: Users, text: "Instructor Portals" },
                { icon: Zap, text: "Revenue Sharing" },
                { icon: BarChart3, text: "Sales Analytics" },
                { icon: Award, text: "Instructor Verification" }
            ],
            color: "#ec4899",
            textColor: "var(--accent-pink-text)",
            gradient: "from-[#ec4899] to-[#f97316]",
            accentColor: "#f97316",
        },
        {
            icon: Globe,
            title: "MOOC Platforms",
            description: "Massive open online courses with self-paced learning, discussion forums, and peer assessments.",
            features: [
                { icon: Globe, text: "Global Access" },
                { icon: Users, text: "Peer Learning" },
                { icon: Award, text: "Verified Certificates" },
                { icon: MessageSquare, text: "Community Forums" }
            ],
            color: "#f97316",
            textColor: "var(--accent-orange-text)",
            gradient: "from-[#f97316] to-[#a855f7]",
            accentColor: "#a855f7",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <GraduationCap className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>
                                Learning Solutions
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        EdTech <span style={{ color: "var(--brand-purple-text)" }}>Solutions</span> We Build
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Comprehensive learning platforms designed for modern education and training needs.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                onMouseEnter={() => setHoveredCard(idx)}
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
                                    {/* Gradient overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-700"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${solution.color}12, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="mb-6 relative">
                                            <div
                                                className="absolute inset-0 blur-2xl transition-all duration-500"
                                                style={{
                                                    background: solution.color,
                                                    opacity: isHovered ? 0.4 : 0.1,
                                                    transform: isHovered ? "scale(2)" : "scale(1.3)",
                                                }}
                                            />
                                            <div
                                                className={`relative inline-flex w-20 h-20 rounded-2xl items-center justify-center bg-gradient-to-br ${solution.gradient} transition-all duration-500`}
                                                style={{
                                                    transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1)",
                                                    boxShadow: isHovered ? `0 15px 40px ${solution.color}50` : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>

                                            {/* Number badge */}
                                            <div
                                                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2"
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${solution.color}, ${solution.accentColor})`
                                                        : "var(--card-bg)",
                                                    color: isHovered ? "white" : solution.textColor,
                                                    borderColor: isHovered ? "transparent" : solution.color,
                                                    transform: isHovered ? "scale(1.2) rotate(360deg)" : "scale(1)",
                                                }}
                                            >
                                                {idx + 1}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4 transition-all duration-300"
                                            style={{ color: isHovered ? solution.textColor : "var(--foreground)" }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm md:text-base mb-6 leading-relaxed flex-1" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3 pt-4 border-t" style={{ borderColor: isHovered ? `${solution.color}30` : "var(--border-color)" }}>
                                            {solution.features.map((feature, fidx) => {
                                                const FeatureIcon = feature.icon;
                                                return (
                                                    <div
                                                        key={fidx}
                                                        className="flex items-center gap-3 transition-all duration-300"
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
                                                            style={{ color: isHovered ? solution.textColor : "var(--secondary-text)" }}
                                                        >
                                                            {feature.text}
                                                        </span>
                                                        {isHovered && (
                                                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#10b981" }} />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Bottom gradient bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(90deg, ${solution.color}, ${solution.accentColor}, ${solution.color})`,
                                            backgroundSize: "200% 100%",
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                        }}
                                    />
                                </div>

                                {/* Outer glow */}
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
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                            Ready to Transform Education?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's build a learning platform that engages students and delivers results.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                        >
                            Discuss Your EdTech Project
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
