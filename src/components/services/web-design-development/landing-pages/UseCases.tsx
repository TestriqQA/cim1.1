"use client";

import { Rocket, ShoppingBag, Briefcase, Home, GraduationCap, Heart, Users, TrendingUp, CheckCircle2, ArrowUpRight, Sparkles, Target } from "lucide-react";
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
            title: "SaaS & Tech Startups",
            description: "Drive free trials, demo requests, and webinar signups for your software products. Explain complex value props simply.",
            example: "Increase in demo requests",
            gradient: "from-emerald-600 via-green-600 to-teal-600",
            bgColor: "#10b981",
            stats: "Demo Requests",
            tags: ["B2B SaaS", "Demos", "Trials"],
        },
        {
            icon: ShoppingBag,
            title: "E-commerce Brands",
            description: "Dedicated product launch pages and seasonal promo pages that convert traffic better than standard product pages.",
            example: "Higher conversion on Black Friday",
            gradient: "from-blue-600 via-cyan-600 to-sky-600",
            bgColor: "#0ea5e9",
            stats: "Sales Boost",
            tags: ["Product Launch", "Promos", "DTC"],
        },
        {
            icon: Briefcase,
            title: "Professional Services",
            description: "Generate high-quality leads for legal, consulting, and financial services. Build trust and authority instantly.",
            example: "High-ticket client acquisition",
            gradient: "from-teal-600 via-emerald-600 to-green-600",
            bgColor: "#14b8a6",
            stats: "Qualified Leads",
            tags: ["Consulting", "Legal", "Finance"],
        },
        {
            icon: Home,
            title: "Real Estate Agents",
            description: "Capture seller leads with home valuation pages or showcase luxury properties with immersive listing pages.",
            example: "Seller lead generation machine",
            gradient: "from-cyan-600 via-sky-600 to-blue-600",
            bgColor: "#06b6d4",
            stats: "Property Leads",
            tags: ["Listings", "Valuations", "Realtors"],
        },
        {
            icon: GraduationCap,
            title: "Education & Courses",
            description: "Fill your webinars and sell your online courses with persuasive long-form sales pages that overcome objections.",
            example: "Sold out webinar seats",
            gradient: "from-green-600 via-lime-600 to-emerald-600",
            bgColor: "#22c55e",
            stats: "Enrollments",
            tags: ["Courses", "Webinars", "Coaching"],
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Book more appointments for clinics, gyms, and spas. Local landing pages that rank and convert.",
            example: "New patient bookings",
            gradient: "from-sky-600 via-blue-600 to-indigo-600",
            bgColor: "#3b82f6",
            stats: "Appointments",
            tags: ["Clinics", "Gyms", "Spas"],
        },
    ];

    const accentTextMap: Record<string, string> = {
        "#10b981": "var(--accent-green-text)",
        "#0ea5e9": "var(--accent-sky-text)",
        "#14b8a6": "var(--accent-teal-text)",
        "#06b6d4": "var(--accent-cyan-text)",
        "#22c55e": "var(--accent-green-text)",
        "#3b82f6": "var(--accent-sky-text)",
    };

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
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#10b981]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#0ea5e9]/10 via-[#10b981]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

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
                                "linear-gradient(90deg, color-mix(in srgb, #10b981 8%, transparent), color-mix(in srgb, #0ea5e9 8%, transparent))",
                            borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                            color: "var(--accent-green-text)",
                        }}
                    >
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-semibold">Industries</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Who Needs <span style={{ color: "var(--accent-green-text)" }}>Landing Pages?</span>
                    </h2>

                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We build high-performance pages for any business that relies on online traffic to generate leads or sales.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
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
                                            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(14, 165, 233, 0.05))",
                                            borderBottom: "1px solid var(--border-color)",
                                        }}
                                    >
                                        {/* Icon Container */}
                                        <div className="relative z-10 flex items-start justify-between mb-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                                style={{
                                                    background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                                    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
                                                }}
                                            >
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>

                                            {/* Stats Badge */}
                                            <div
                                                className="px-3 py-1.5 rounded-full border bg-white/5 backdrop-blur-sm"
                                                style={{ borderColor: "rgba(16, 185, 129, 0.2)" }}
                                            >
                                                <p className="text-xs font-bold" style={{ color: "var(--accent-green-text)" }}>
                                                    {industry.stats}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="relative z-10 text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {industry.title}
                                        </h3>

                                        {/* Tags */}
                                        <div className="relative z-10 flex flex-wrap gap-2">
                                            {industry.tags.map((tag, tidx) => (
                                                <span
                                                    key={tidx}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300 group-hover:bg-[#10b981]/10 group-hover:text-[var(--accent-green-text)]"
                                                    style={{
                                                        backgroundColor: "var(--background)",
                                                        color: "var(--secondary-text)",
                                                        border: "1px solid var(--border-color)",
                                                    }}
                                                >
                                                    {tag}
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
                                                    <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: accentTextMap[industry.bgColor] }}>
                                                        Proven Result
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
                            background: "linear-gradient(135deg, #10b98115, #0ea5e915)",
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
                                <Target className="w-5 h-5" style={{ color: "var(--accent-green-text)" }} />
                                <span className="text-sm font-bold" style={{ color: "var(--accent-green-text)" }}>
                                    INDUSTRY-AGNOSTIC APPROACH
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Any Industry. Any Goal.
                            </h3>

                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Whether you're B2B, B2C, or non-profit, the principles of persuasion remain the same. We apply universal conversion strategies tailored to your niche.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    style={{
                                        background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                    }}
                                >
                                    Get Your Landing Page
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>

                                <Link
                                    href="/services"
                                    className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        color: "var(--accent-green-text)",
                                        border: "2px solid var(--border-color)",
                                    }}
                                >
                                    View Other Services
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <Sparkles className="absolute top-8 right-8 w-8 h-8 text-[var(--accent-green-text)] opacity-20 animate-pulse" />
                        <Sparkles className="absolute bottom-8 left-8 w-6 h-6 text-[var(--accent-sky-text)] opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
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
