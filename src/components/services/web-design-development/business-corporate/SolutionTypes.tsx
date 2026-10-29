"use client";

import { Building2, Users, FileText, ShieldCheck, Globe, Landmark, ArrowRight, CheckCircle, Sparkles, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

    const solutions = [
        {
            icon: Building2,
            title: "Corporate Websites",
            description: "Flagship digital presence for established companies, featuring brand storytelling, leadership profiles, and company milestones that communicate organizational excellence.",
            features: ["Executive profiles", "Company history timeline", "Mission & values", "News & press releases"],
            color: "from-[#008ac1] to-[#00b5ca]",
            accentColor: "#008ac1",
            bgPattern: "dots",
            link: "/services/web-design-development",
        },
        {
            icon: Users,
            title: "Company Portals",
            description: "Secure internal platforms for employees, partners, and clients with role-based access, document management, and integrated communication tools.",
            features: ["Employee directories", "Document repositories", "Partner dashboards", "Secure file sharing"],
            color: "from-[#bc3feb] to-[#f97316]",
            accentColor: "#bc3feb",
            bgPattern: "grid",
        },
        {
            icon: Landmark,
            title: "Investor Relations Sites",
            description: "Dedicated platforms for stakeholder communication with financial reports, stock information, governance documents, and regulatory filings.",
            features: ["Stock ticker integration", "Annual reports library", "Earnings call archives", "ESG disclosures"],
            color: "from-[#f97316] to-[#ea580c]",
            accentColor: "#f97316",
            bgPattern: "diagonal",
        },
        {
            icon: FileText,
            title: "Brand-Focused Microsites",
            description: "Campaign-specific digital experiences that extend your brand for product launches, initiatives, or targeted marketing efforts.",
            features: ["Campaign landing pages", "Product showcases", "Event microsites", "Brand storytelling"],
            color: "from-[#00efd6] to-[#00b5ca]",
            accentColor: "#00efd6",
            bgPattern: "dots",
            link: "/services/web-design-development/branding-services",
        },
        {
            icon: ShieldCheck,
            title: "Compliance Websites",
            description: "Regulatory-compliant platforms for industries with strict documentation requirements-healthcare, finance, legal, and government sectors.",
            features: ["WCAG accessibility", "GDPR compliance", "SOX documentation", "Audit trail logging"],
            color: "from-[#008ac1] to-[#bc3feb]",
            accentColor: "#008ac1",
            bgPattern: "grid",
            link: "/services/seo-services/technical-seo-services",
        },
        {
            icon: Globe,
            title: "Multi-Regional Platforms",
            description: "Global enterprise websites supporting multiple languages, regional content variations, and localized experiences for international audiences.",
            features: ["Multi-language CMS", "Regional content rules", "Currency localization", "Geo-targeted content"],
            color: "from-[#ea580c] to-[#f97316]",
            accentColor: "#ea580c",
            bgPattern: "diagonal",
        },
    ];

    const getPatternStyle = (pattern: string, color: string) => {
        switch (pattern) {
            case "dots":
                return {
                    backgroundImage: `radial-gradient(circle, ${color}20 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                };
            case "grid":
                return {
                    backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                };
            case "diagonal":
                return {
                    backgroundImage: `repeating-linear-gradient(45deg, ${color}10 0, ${color}10 1px, transparent 1px, transparent 20px)`,
                };
            default:
                return {};
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                }} />
            </div>

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00b5ca]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "2px solid var(--border-color)",
                            boxShadow: "0 0 30px rgba(249, 115, 22, 0.1)"
                        }}
                    >
                        <Sparkles className="w-5 h-5" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            COMPREHENSIVE SOLUTIONS
                        </span>
                        <Sparkles className="w-5 h-5" style={{ color: "var(--accent-orange-text)" }} />
                    </div>

                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        style={{ color: "var(--foreground)" }}
                    >
                        <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
                            Corporate Web Solutions
                        </span>{" "}
                        We Deliver
                    </h2>

                    <p
                        className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From flagship corporate sites to specialized portals, we build digital platforms tailored to enterprise requirements and stakeholder expectations.
                    </p>

                    <div
                        className={`relative w-32 h-2 mx-auto rounded-full overflow-hidden transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            }`}
                        style={{
                            background: "linear-gradient(90deg, #f97316, #ea580c, #f97316)",
                            backgroundSize: "200% 100%",
                            animation: "gradient-shift 3s ease infinite",
                        }}
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
                                className={`group relative rounded-3xl overflow-hidden border-2 transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                    } ${isHovered ? "scale-105 shadow-2xl" : "hover:scale-102 hover:shadow-xl"}`}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? solution.accentColor : "var(--border-color)",
                                    transitionDelay: `${400 + idx * 100}ms`,
                                }}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Background Pattern */}
                                <div
                                    className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                                    style={getPatternStyle(solution.bgPattern, solution.accentColor)}
                                />

                                {/* Gradient Overlay on Hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                                />

                                {/* Content Container */}
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div
                                            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                                        >
                                            <Icon className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" />
                                        </div>

                                        {/* Floating Badge */}
                                        <div
                                            className="inline-flex items-center gap-1.5 ml-4 px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                                            style={{
                                                backgroundColor: `${solution.accentColor}20`,
                                                color: solution.accentColor,
                                            }}
                                        >
                                            <Target className="w-3 h-3" />
                                            Enterprise Grade
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold mb-4 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? solution.accentColor : "var(--foreground)"
                                        }}
                                    >
                                        {solution.link ? (
                                            <Link href={solution.link} className="hover:underline">
                                                {solution.title}
                                            </Link>
                                        ) : (
                                            solution.title
                                        )}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-base leading-relaxed mb-6 flex-1"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {solution.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-6">
                                        {solution.features.map((feature, fidx) => (
                                            <div
                                                key={fidx}
                                                className="flex items-start gap-3 transition-all duration-300"
                                                style={{
                                                    transitionDelay: `${fidx * 50}ms`,
                                                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                                                }}
                                            >
                                                <CheckCircle
                                                    className="w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300"
                                                    style={{
                                                        color: isHovered ? solution.accentColor : "var(--secondary-text)",
                                                        opacity: isHovered ? 1 : 0.6,
                                                    }}
                                                />
                                                <span
                                                    className="text-sm font-medium transition-colors duration-300"
                                                    style={{
                                                        color: isHovered ? "var(--foreground)" : "var(--secondary-text)"
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More Link */}
                                    {/* <div
                                        className="flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-4"
                                        style={{ color: solution.accentColor }}
                                    >
                                        <span>Explore Solution</span>
                                        <ArrowRight
                                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                                        />
                                    </div> */}
                                </div>

                                {/* Corner Accent */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${solution.accentColor}, transparent 70%)`,
                                    }}
                                />

                                {/* Bottom Glow */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-20 text-center transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div
                        className="inline-flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl border-2"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                Need a Custom Solution?
                            </h3>
                            <p className="text-base" style={{ color: "var(--secondary-text)" }}>
                                We'll architect a tailored platform that meets your unique enterprise requirements
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap"
                            style={{
                                background: "linear-gradient(135deg, #f97316, #ea580c)",
                            }}
                        >
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}