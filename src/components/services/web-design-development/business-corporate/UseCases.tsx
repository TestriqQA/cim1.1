"use client";

import { Building2, Briefcase, GraduationCap, Stethoscope, Scale, Landmark, TrendingUp, ArrowUpRight, Sparkle, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UseCases() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
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
            icon: Building2,
            title: "Multinational Corporations",
            description: "Global enterprises requiring multi-region websites with localized content, unified brand standards, and integration with corporate systems.",
            example: "Global enterprise manufacturer with 40+ country sites",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            stats: "50+ Countries",
            color: "#0ea5e9",
        },
        {
            icon: Briefcase,
            title: "Professional Services Firms",
            description: "Law firms, consultancies, and accounting practices needing sophisticated websites that convey expertise and generate qualified leads.",
            example: "Global consulting firm with partner profiles and case studies",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            stats: "100+ Partners",
            color: "#a855f7",
            link: "/services/web-design-development",
        },
        {
            icon: GraduationCap,
            title: "Educational Institutions",
            description: "Universities, colleges, and private schools with complex information architecture serving students, faculty, parents, and alumni.",
            example: "Private university with 200k+ pages and student portal",
            gradient: "from-amber-500 via-orange-500 to-red-500",
            stats: "200K+ Pages",
            color: "#f59e0b",
            link: "/services/web-design-development/edtech-lms",
        },
        {
            icon: Stethoscope,
            title: "Healthcare Organizations",
            description: "Hospital systems, medical groups, and healthcare networks requiring HIPAA-compliant websites with physician directories and patient resources.",
            example: "Regional hospital network with 15 facility sites",
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            stats: "15+ Facilities",
            color: "#10b981",
            link: "/services/web-design-development/healthcare-portals",
        },
        {
            icon: Scale,
            title: "Government & Public Sector",
            description: "Government agencies and public institutions requiring accessible, secure websites that serve diverse citizen needs and meet compliance standards.",
            example: "State agency with ADA-compliant citizen services portal",
            gradient: "from-indigo-500 via-violet-500 to-purple-500",
            stats: "ADA Compliant",
            color: "#6366f1",
            link: "/services/web-design-development/drupal-cms",
        },
        {
            icon: Landmark,
            title: "Financial Institutions",
            description: "Banks, investment firms, and insurance companies needing secure, trust-building websites with investor relations and regulatory content.",
            example: "Regional bank with branch locator and IR section",
            gradient: "from-orange-500 via-red-500 to-pink-500",
            stats: "SOC 2 Certified",
            color: "#f97316",
            link: "/services/web-design-development/fintech-solutions",
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
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#f97316]/5 via-[#bc3feb]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#00b5ca]/5 via-[#008ac1]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

                {/* Animated Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="50%" stopColor="#bc3feb" />
                            <stop offset="100%" stopColor="#00b5ca" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="10,10">
                        <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                    </line>
                </svg>
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-12"
                            }`}
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "2px solid var(--border-color)",
                            boxShadow: "0 0 40px rgba(249, 115, 22, 0.15)"
                        }}
                    >
                        <TrendingUp className="w-5 h-5" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-bold tracking-wider" style={{ color: "var(--accent-orange-text)" }}>
                            TRUSTED ACROSS SECTORS
                        </span>
                    </div>

                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                        style={{ color: "var(--foreground)" }}
                    >
                        Industries We{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">
                                Serve
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.5" />
                            </svg>
                        </span>
                    </h2>

                    <p
                        className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We have deep expertise in building corporate websites for organizations across industries with complex requirements and high stakeholder expectations.
                    </p>

                    <div
                        className={`flex items-center justify-center gap-2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-transparent to-[#f97316]" />
                        <Sparkle className="w-5 h-5" style={{ color: "var(--accent-orange-text)" }} />
                        <div className="w-12 h-1.5 rounded-full bg-gradient-to-l from-transparent to-[#f97316]" />
                    </div>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        const isActive = activeCard === idx;

                        return (
                            <div
                                key={idx}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    } ${isActive ? "scale-105" : "hover:scale-102"}`}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    transitionDelay: `${400 + idx * 100}ms`,
                                }}
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl p-[2px]" style={{
                                    backgroundImage: isActive
                                        ? `linear-gradient(135deg, ${industry.color}, transparent, ${industry.color})`
                                        : "none",
                                    backgroundColor: isActive ? "transparent" : "var(--border-color)",
                                    backgroundSize: "200% 200%",
                                    animation: isActive ? "border-flow 3s ease infinite" : "none",
                                }}>
                                    <div
                                        className="w-full h-full rounded-3xl"
                                        style={{ backgroundColor: "var(--card-bg)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Icon and Stats Badge */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? "scale-110 rotate-6" : "scale-100 rotate-0"
                                                }`}
                                            style={{
                                                background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}05)`,
                                                border: `2px solid ${industry.color}30`,
                                            }}
                                        >
                                            {/* Rotating Ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl transition-all duration-700"
                                                style={{
                                                    border: `2px solid ${industry.color}`,
                                                    opacity: isActive ? 0.6 : 0,
                                                    transform: isActive ? "scale(1.3) rotate(45deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            />
                                            <Icon
                                                className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110"
                                                style={{ color: industry.color }}
                                            />
                                        </div>

                                        {/* Stats Badge */}
                                        <div
                                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                                                }`}
                                            style={{
                                                backgroundColor: `${industry.color}15`,
                                                color: industry.color,
                                            }}
                                        >
                                            {industry.stats}
                                        </div>
                                    </div>

                                    {/* Title with Arrow */}
                                    <div className="flex items-start justify-between gap-2 mb-4">
                                        <h3
                                            className="text-xl font-bold transition-colors duration-300"
                                            style={{
                                                color: isActive ? industry.color : "var(--foreground)"
                                            }}
                                        >
                                            {industry.link ? (
                                                <Link href={industry.link} className="hover:underline">
                                                    {industry.title}
                                                </Link>
                                            ) : (
                                                industry.title
                                            )}
                                        </h3>
                                        <ArrowUpRight
                                            className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isActive ? "translate-x-1 -translate-y-1" : "translate-x-0 translate-y-0"
                                                }`}
                                            style={{ color: industry.color, opacity: isActive ? 1 : 0.3 }}
                                        />
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed mb-6"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {industry.description}
                                    </p>

                                    {/* Example Card */}
                                    <div
                                        className={`relative p-4 rounded-2xl transition-all duration-500 overflow-hidden ${isActive ? "translate-y-0" : "translate-y-1"
                                            }`}
                                        style={{
                                            backgroundColor: `${industry.color}08`,
                                            border: `1px solid ${industry.color}20`,
                                        }}
                                    >
                                        {/* Animated Gradient Background */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 transition-opacity duration-500 ${isActive ? "opacity-10" : "opacity-0"
                                                }`}
                                        />

                                        <div className="relative z-10 flex items-start gap-3">
                                            <BadgeCheck
                                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                                style={{ color: industry.color }}
                                            />
                                            <div>
                                                <p className="text-xs font-semibold mb-1" style={{ color: industry.color === "#f97316" ? "var(--accent-orange-text)" : industry.color }}>
                                                    Success Story
                                                </p>
                                                <p className="text-xs font-medium leading-relaxed" style={{ color: "var(--foreground)" }}>
                                                    {industry.example}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Gradient Accent */}
                                <div
                                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${industry.gradient} blur-3xl transition-opacity duration-500 ${isActive ? "opacity-20" : "opacity-0"
                                        }`}
                                />

                                {/* Bottom Shine Effect */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats Section */}
                <div
                    className={`mt-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div
                        className="relative overflow-hidden p-10 rounded-3xl"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "2px solid var(--border-color)",
                        }}
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 via-transparent to-[#00b5ca]/5" />

                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Your Industry Not Listed?
                            </h3>
                            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                We've worked with organizations across dozens of sectors. Let's discuss how we can support your unique requirements.
                            </p>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                                }}
                            >
                                Discuss Your Project
                                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4">
                            <Sparkle className="w-6 h-6 text-[var(--accent-orange-text)] opacity-30 animate-pulse" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <Sparkle className="w-6 h-6 text-[#00b5ca] opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes border-flow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}