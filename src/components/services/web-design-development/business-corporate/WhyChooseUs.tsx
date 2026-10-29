"use client";

import { Shield, Award, Zap, Clock, Headphones, Lock, CheckCircle2, TrendingUp, Users, FileCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false);
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

    const reasons = [
        {
            icon: Shield,
            title: "Enterprise Security Standards",
            description: "SOC 2 compliant development practices with enterprise-grade security protocols protecting your corporate data and reputation.",
            color: "from-[#008ac1] to-[#00b5ca]",
            accentColor: "#008ac1",
            features: ["SOC 2 Compliant", "End-to-End Encryption", "Regular Security Audits"]
        },
        {
            icon: Award,
            title: "Enterprise Experience",
            description: "Proven track record with multinational corporations, understanding the unique requirements of large-scale enterprise websites.",
            color: "from-[#f97316] to-[#ea580c]",
            accentColor: "#f97316",
            features: ["50+ Enterprise Clients", "Global Scale", "Industry Leaders"]
        },
        {
            icon: Zap,
            title: "Performance Excellence",
            description: "Sub-second load times and high availability ensure your corporate presence is always available and lightning fast.",
            color: "from-[#00efd6] to-[#00b5ca]",
            accentColor: "#00efd6",
            features: ["<1s Load Time", "High Availability", "CDN Optimized"]
        },
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "Rigorous project management with milestone-based delivery ensuring your corporate website launches when stakeholders expect it.",
            color: "from-[#bc3feb] to-[#f97316]",
            accentColor: "#bc3feb",
            features: ["Milestone Tracking", "Agile Methodology", "100% On-Time Rate"]
        },
        {
            icon: Headphones,
            title: "Dedicated Account Management",
            description: "A single point of contact who understands your business, ensuring seamless communication throughout the project lifecycle.",
            color: "from-[#008ac1] to-[#bc3feb]",
            accentColor: "#008ac1",
            features: ["24/7 Support", "Personal Account Manager", "Proactive Communication"]
        },
        {
            icon: Lock,
            title: "Regulatory Compliance",
            description: "WCAG 2.1 accessibility, GDPR data handling, and industry-specific compliance built into every corporate website we deliver.",
            color: "from-[#ea580c] to-[#f97316]",
            accentColor: "#ea580c",
            features: ["WCAG 2.1 AA", "GDPR Ready", "Industry Standards"]
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
                <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#f97316]/5 to-[#ea580c]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#00b5ca]/5 to-[#bc3feb]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                            }`}
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "1px solid var(--border-color)"
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                            TRUSTED BY INDUSTRY LEADERS
                        </span>
                    </div>

                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        style={{ color: "var(--foreground)" }}
                    >
                        Why <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Leading Enterprises</span> Choose Us
                    </h2>

                    <p
                        className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We understand that corporate websites require a different caliber of expertise-one that balances brand excellence with technical rigor.
                    </p>

                    <div
                        className={`w-24 h-1.5 mx-auto rounded-full transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            }`}
                        style={{
                            background: "linear-gradient(90deg, #f97316, #ea580c)",
                        }}
                    />
                </div>

                {/* Stats Bar */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {[
                        { value: "500+", label: "Projects Delivered", icon: FileCheck },
                        { value: "98%", label: "Client Satisfaction", icon: Users },
                        { value: "12+", label: "Years Experience", icon: Award },
                        { value: "High", label: "Uptime SLA", icon: TrendingUp },
                    ].map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <StatIcon className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--accent-orange-text)" }} />
                                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className={`group rounded-3xl overflow-hidden border transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    transitionDelay: `${500 + idx * 100}ms`,
                                }}
                            >
                                {/* Gradient Header */}
                                <div className="relative h-2 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${reason.color} transition-transform duration-500 group-hover:scale-x-110`}
                                    />
                                </div>

                                {/* Icon Section */}
                                <div className="p-8 pb-6">
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: "var(--foreground)" }}>
                                        {reason.title === "Enterprise Security Standards" ? (
                                            <Link href="/services/seo-services/technical-seo-services" className="hover:underline">
                                                {reason.title}
                                            </Link>
                                        ) : reason.title === "Regulatory Compliance" ? (
                                            <Link href="/services/seo-services/technical-seo-services" className="hover:underline">
                                                {reason.title}
                                            </Link>
                                        ) : reason.title === "Performance Excellence" ? (
                                            <Link href="/services/web-design-development/nextjs-development-services" className="hover:underline">
                                                {reason.title}
                                            </Link>
                                        ) : (
                                            reason.title
                                        )}
                                    </h3>

                                    <p className="text-base leading-relaxed mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>

                                    {/* Feature Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {reason.features.map((feature, featureIdx) => (
                                            <div
                                                key={featureIdx}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 group-hover:scale-105"
                                                style={{
                                                    backgroundColor: `${reason.accentColor}15`,
                                                    color: reason.accentColor === "#f97316" ? "var(--accent-orange-text)" : reason.accentColor,
                                                }}
                                            >
                                                <CheckCircle2 className="w-3 h-3" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect Bottom Bar */}
                                <div
                                    className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div
                    className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)" }}>
                        Ready to elevate your corporate digital presence?
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, #f97316, #ea580c)",
                        }}
                    >
                        Let's Build Your Enterprise Solution
                        <Zap className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}