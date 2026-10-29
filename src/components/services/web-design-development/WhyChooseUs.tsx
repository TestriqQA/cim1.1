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
            description: <>Mobile-first approach ensuring flawless display on all devices. Average <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">conversion rate</Link> improvement post-launch by using <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">Responsive Web Design</Link>.</>,
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
            description: <>Data-backed <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">UI/UX</Link> focused on business value. Our sites have increased <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">online leads</Link> by up to 425% for our clients.</>,
            color: "from-[#00efd6] to-[#bc3feb]",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-10 lg:py-20 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Zap className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Global Excellence
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Beyond Websites: <span style={{ fontWeight: 700, color: "var(--brand-blue-text)" }}>Strategic Digital Solutions</span>
                    </h2>

                    <p className="text-xl max-w-4xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
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
                <div className="space-y-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
                                    className="relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        {/* Left Side - Icon & Number */}
                                        <div className="flex items-center gap-6">

                                            {/* Icon */}
                                            <div
                                                className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: "var(--foreground)" }}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                {benefit.description}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${benefit.color} transition-all duration-1000 group-hover:w-full`}
                                                    style={{
                                                        width: "0%",
                                                        animation: `expandWidth 1.5s ease-out ${idx * 0.15}s forwards`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "24/7", label: "Monitoring" },
                        { value: "< 2s", label: "Load Time" },
                        { value: "100%", label: "Mobile Optimized" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                            }}
                        >
                            <div
                                className="text-4xl font-bold mb-2"
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

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes slideInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    @keyframes expandWidth {
                        from {
                            width: 0%;
                        }
                        to {
                            width: 85%;
                        }
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>

                {/* Success Story / Testimonial */}
                <div className="mt-20 p-8 md:p-12 rounded-3xl border relative overflow-hidden group shadow-2xl"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--brand-blue)",
                    }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Zap className="w-32 h-32 text-[var(--brand-blue)]" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                                Transformation Success Story
                            </h3>
                            <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-8 text-[var(--secondary-text)]">
                                &quot;This <Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] font-bold underline hover:underline transition-colors">web design agency</Link> increased our online leads by <span className="text-[var(--accent-teal-text)] font-bold">425% in 6 months</span> through their <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">custom web development</Link> approach. Their <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">responsive web design services</Link> transformed our mobile conversion rate from 1.2% to 8.7%.&quot;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)]" />
                                <div>
                                    <div className="font-bold text-[var(--foreground)]">Sarah Chen</div>
                                    <div className="text-sm text-[var(--secondary-text)]">VP Marketing, TechFlow Solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl mb-8 text-[var(--secondary-text)] max-w-2xl mx-auto">
                        Ready to experience the CIM difference? Partner with a professional <span className="font-bold text-[var(--brand-blue-text)]">web development agency</span> today.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Get Your Free Website Audit
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}