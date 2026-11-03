"use client";

import { Zap, Smartphone, Lock, TrendingUp, Search, Accessibility } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Zap,
            title: "Performance-First Architecture",
            description: "Average 2.1s page load time (industry avg: 5.2s). Optimized for Core Web Vitals to boost engagement and search rankings.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: TrendingUp,
            title: "Global SEO Foundation",
            description: <>Built-in <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">technical SEO</Link> that has delivered 300% <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">organic traffic growth</Link> for enterprise clients across 15+ countries.</>,
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description: <>Mobile-first approach ensuring flawless display on all devices. Average <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">conversion rate</Link> improvement post-launch by using Responsive Web Design.</>,
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Lock,
            title: "Enterprise-Grade Security",
            description: <>Advanced protocols and AWS-secured architecture. <Link href="/services/web-design-development/fintech-solutions" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">Enterprise-Grade Security</Link> ensuring rigorously tested delivery on first deployment for peace of mind.</>,
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Search,
            title: "Certified Technical Team",
            description: "Google-certified developers and AWS Solutions Architects with deep combined expertise in complex web solutions.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Accessibility,
            title: "ROI-Driven UX Design",
            description: <>Data-backed <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">UI/UX</Link> focused on business value. Our sites are built to grow qualified <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">online leads</Link> for our clients.</>,
            color: "from-[#00efd6] to-[#bc3feb]",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-10 lg:py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Zap className="w-4 h-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
                        <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Global Excellence
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "var(--foreground)" }}>
                        Beyond Websites: <span style={{ fontWeight: 700, color: "var(--brand-blue-text)" }}>Strategic Digital Solutions</span>
                    </h2>

                    <p className="text-base sm:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        As a leading <span className="font-bold text-[var(--brand-blue-text)]">Web Development Company</span>, we implement high-performance technical strategies that deliver measurable business value globally.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Benefits - Enhanced Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative"
                                style={{
                                    animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both`,
                                }}
                            >
                                {/* Animated Background Glow */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                    style={{
                                        background: `linear-gradient(90deg, var(--brand-blue), var(--brand-teal))`,
                                    }}
                                />

                                <div
                                    className="relative rounded-3xl p-5 sm:p-6 md:p-8 border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                                        {/* Left Side - Icon & Number */}
                                        <div className="flex items-center gap-6">

                                            {/* Icon */}
                                            <div
                                                className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                                            >
                                                <Icon className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 text-white" />
                                            </div>
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: "var(--foreground)" }}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                    {[
                        { value: "24/7", label: "Monitoring" },
                        { value: "< 2s", label: "Load Time" },
                        { value: "100%", label: "Mobile Optimized" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-4 sm:p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                            }}
                        >
                            <div
                                className="text-2xl sm:text-4xl font-bold mb-1.5 sm:mb-2"
                                style={{
                                    background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Real case studies instead of a testimonial. The quote that used to
                    sit here was attributed to a named individual at a company matching
                    our placeholder pattern, and carried unverifiable lead-growth and
                    mobile-conversion percentages. Nothing
                    substantiated it, so it is replaced with a route to the engagements
                    we have actually documented. (Audit finding #1 / TEST-1.) */}
                <div className="mt-10 sm:mt-12 p-5 sm:p-8 md:p-10 rounded-3xl border relative overflow-hidden group shadow-2xl"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--brand-blue)",
                    }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                        <Zap className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--brand-blue)]" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[var(--foreground)]">
                                See the work, not a slogan
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-[var(--secondary-text)]">
                                Every engagement we write up names the client, the scope and what
                                changed — rebuilds, migrations and organic-growth programmes with
                                the measurements we can stand behind. Read the full case studies
                                rather than taking a number on trust.
                            </p>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                style={{ backgroundColor: "var(--brand-blue)", color: "#fff" }}
                            >
                                Browse our case studies
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 sm:mt-16 text-center">
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[var(--secondary-text)] max-w-2xl mx-auto">
                        Ready to experience the CIM difference? Partner with a professional <span className="font-bold text-[var(--brand-blue-text)]">web development agency</span> today.
                    </p>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Get Your Free Website Audit
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}