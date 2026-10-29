"use client";

import { Rocket, Building2, Briefcase, Layers, Users, Cog, Zap, TrendingUp, Award, CheckCircle2, ArrowUpRight, Sparkles, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UseCases() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const industries = [
        {
            icon: Rocket,
            title: "Tech Startups & Scale-Ups",
            description: "Early and growth-stage companies building their core product, needing rapid iteration and scalable architecture from day one. We've helped startups achieve $5M ARR and 10K+ active users.",
            example: "Scaled from 500 to 50K users in 18 months",
            gradient: "from-purple-600 via-pink-600 to-red-600",
            bgColor: "#9333ea",
            stats: "50K Users",
            tags: ["Rapid MVP", "Scalable", "Agile"],
        },
        {
            icon: Building2,
            title: "Enterprise Digital Products",
            description: "Large organizations launching internal tools, customer portals, or new digital product lines alongside existing legacy systems. Integration-ready architecture with enterprise SSO.",
            example: "Internal workflow platform for 10K employees",
            gradient: "from-blue-600 via-cyan-600 to-teal-600",
            bgColor: "#2563eb",
            stats: "10K Users",
            tags: ["Enterprise", "SSO", "Compliance"],
            link: "/services/web-design-development/business-corporate",
        },
        {
            icon: Briefcase,
            title: "Professional Services Firms",
            description: "Consulting, legal, and accounting firms building client portals, collaboration tools, and proprietary software to automate manual processes and improve client experience.",
            example: "Reduced query response time by 65%",
            gradient: "from-amber-600 via-orange-600 to-red-600",
            bgColor: "#d97706",
            stats: "Faster",
            tags: ["Portals", "Automation", "Secure"],
            link: "/services/web-design-development/business-corporate",
        },
        {
            icon: Layers,
            title: "Marketplace Platforms",
            description: "Two-sided marketplaces connecting buyers with sellers, service providers with clients, or talent with employers. Complex matching algorithms and payment escrow.",
            example: "B2B marketplace with $2M monthly GMV",
            gradient: "from-green-600 via-emerald-600 to-teal-600",
            bgColor: "#16a34a",
            stats: "$2M GMV",
            tags: ["Marketplace", "Payments", "Escrow"],
            link: "/services/web-design-development/ecommerce-development-company",
        },
        {
            icon: Users,
            title: "Community & Collaboration Tools",
            description: "Member communities, learning management systems (LMS), and real-time collaboration platforms with live chat, video conferencing (WebRTC), and content moderation.",
            example: "Platform with 50K members & 200K interactions",
            gradient: "from-indigo-600 via-purple-600 to-pink-600",
            bgColor: "#4f46e5",
            stats: "200K Apts",
            tags: ["Real-time", "WebRTC", "Community"],
            link: "/services/web-design-development/edtech-lms",
        },
        {
            icon: Cog,
            title: "Workflow & Automation Tools",
            description: "Business process automation, project management software, and operational tools that replace spreadsheets and fragmented systems - unlocking significant productivity gains.",
            example: "Consolidated 15 tools into one dashboard",
            gradient: "from-orange-600 via-red-600 to-pink-600",
            bgColor: "#ea580c",
            stats: "$120K Saved",
            tags: ["Automation", "SaaS", "Dashboard"],
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Radial Gradients */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#008ac1]/10 via-[#bc3feb]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#bc3feb]/10 via-[#008ac1]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                            borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                            color: "var(--brand-blue-text)",
                        }}
                    >
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-semibold">Use Cases</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Who We <span style={{ color: "#008ac1" }}>Build For</span>
                    </h2>

                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We partner with ambitious teams who are building software products that transform their industries.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        const isActive = activeIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                    }`}
                                style={{
                                    transitionDelay: `${400 + idx * 100}ms`,
                                }}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div
                                    className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    {/* Gradient Header */}
                                    <div
                                        className="relative p-8 pb-6 overflow-hidden"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(0, 138, 193, 0.05), rgba(188, 63, 235, 0.05))",
                                            borderBottom: "1px solid var(--border-color)",
                                        }}
                                    >
                                        {/* Icon Container */}
                                        <div className="relative z-10 flex items-start justify-between mb-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                                style={{
                                                    background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                                    boxShadow: "0 4px 12px rgba(0, 138, 193, 0.2)",
                                                }}
                                            >
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>

                                            {/* Stats Badge */}
                                            <div
                                                className="px-3 py-1.5 rounded-full border bg-white/5 backdrop-blur-sm"
                                                style={{ borderColor: "rgba(0, 138, 193, 0.2)" }}
                                            >
                                                <p className="text-xs font-bold" style={{ color: "var(--brand-blue-text)" }}>
                                                    {industry.stats}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="relative z-10 text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {industry.link ? (
                                                <Link href={industry.link} className="hover:underline">
                                                    {industry.title}
                                                </Link>
                                            ) : (
                                                industry.title
                                            )}
                                        </h3>

                                        {/* Tags */}
                                        <div className="relative z-10 flex flex-wrap gap-2">
                                            {industry.tags.map((tag, tidx) => (
                                                <span
                                                    key={tidx}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300 group-hover:bg-[#008ac1]/10 group-hover:text-[#008ac1]"
                                                    style={{
                                                        backgroundColor: "var(--background)",
                                                        color: "var(--secondary-text)",
                                                        border: "1px solid var(--border-color)",
                                                    }}
                                                >
                                                    {tag === "Rapid MVP" ? (
                                                        <Link href="/blog/category/web-development" className="hover:underline">
                                                            {tag}
                                                        </Link>
                                                    ) : tag === "Automation" ? (
                                                        <Link href="/blog/category/ai-automation" className="hover:underline">
                                                            {tag}
                                                        </Link>
                                                    ) : (
                                                        tag
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8 pt-6">
                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed mb-6"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {industry.description}
                                        </p>

                                        {/* Example Card */}
                                        <div
                                            className={`relative p-5 rounded-2xl transition-all duration-500 overflow-hidden ${isActive ? "translate-y-0" : "translate-y-2"
                                                }`}
                                            style={{
                                                backgroundColor: `${industry.bgColor}08`,
                                                border: `1.5px solid ${industry.bgColor}25`,
                                            }}
                                        >
                                            {/* Animated Shine Effect */}
                                            <div
                                                className={`absolute inset-0 transition-all duration-1000 ${isActive ? "translate-x-full" : "-translate-x-full"
                                                    }`}
                                                style={{
                                                    background: `linear-gradient(90deg, transparent, ${industry.bgColor}15, transparent)`,
                                                }}
                                            />

                                            <div className="relative z-10 flex items-start gap-3">
                                                {/* Icon */}
                                                <div
                                                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12"
                                                    style={{
                                                        backgroundColor: `${industry.bgColor}20`,
                                                    }}
                                                >
                                                    <CheckCircle2 className="w-5 h-5" style={{ color: industry.bgColor }} />
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: industry.bgColor }}>
                                                        Success Story
                                                    </p>
                                                    <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--foreground)" }}>
                                                        {industry.example}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Corner Glow */}
                                    <div
                                        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 ${isActive ? "opacity-30" : "opacity-0"
                                            }`}
                                        style={{
                                            background: `radial-gradient(circle, ${industry.bgColor}, transparent 70%)`,
                                        }}
                                    />

                                    {/* Bottom Border Glow */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transition-all duration-500 ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                                            }`}
                                        style={{ transformOrigin: "center" }}
                                    />

                                    {/* Floating Icons */}
                                    {isActive && (
                                        <>
                                            <TrendingUp
                                                className="absolute top-24 right-6 w-5 h-5 animate-bounce"
                                                style={{ color: industry.bgColor, opacity: 0.3, animationDelay: "0.5s" }}
                                            />
                                            <Sparkles
                                                className="absolute bottom-40 left-6 w-4 h-4 animate-pulse"
                                                style={{ color: industry.bgColor, opacity: 0.4 }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div
                    className={`mt-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div
                        className="relative overflow-hidden p-12 rounded-3xl"
                        style={{
                            background: "linear-gradient(135deg, #008ac115, #bc3feb15)",
                            border: "2px solid var(--border-color)",
                        }}
                    >
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                            animation: "grid-move 20s linear infinite",
                        }} />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                            }}>
                                <DollarSign className="w-5 h-5" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-bold" style={{ color: "var(--brand-blue-text)" }}>
                                    ROI-FOCUSED DEVELOPMENT
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Don't See Your Industry?
                            </h3>

                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                We've built products across 20+ industries. Let's discuss how we can bring your vision to life with battle-tested development practices.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    style={{
                                        background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                    }}
                                >
                                    Schedule a Discovery Call
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>

                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <Sparkles className="absolute top-8 right-8 w-8 h-8 text-[#008ac1] opacity-20 animate-pulse" />
                        <Sparkles className="absolute bottom-8 left-8 w-6 h-6 text-[#bc3feb] opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shine {
                    to { background-position: 200% center; }
                }
                
                @keyframes pattern-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 40px 40px; }
                }
                
                @keyframes grid-move {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(30px, 30px); }
                }
            `}</style>
        </section>
    );
}