import { Award, Users, Globe2, Rocket, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Rocket,
            title: "Full-Stack Strategy & Execution",
            description: <span>From <Link href="/services/web-design-development" className="hover:text-[var(--brand-blue-text)] transition-colors">custom website development</Link> to <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-blue-text)] transition-colors">AI-powered marketing automation</Link>, we provide end-to-end services that eliminate the need for multiple vendors. Our integrated approach ensures your web design, <Link href="/services/mobile-app-development" className="hover:text-[var(--brand-blue-text)] transition-colors">mobile apps</Link>, <Link href="/services/seo-services" className="hover:text-[var(--brand-blue-text)] transition-colors">SEO</Link>, and <Link href="/services/performance-marketing" className="hover:text-[var(--brand-blue-text)] transition-colors">performance marketing</Link> work in perfect harmony to drive business growth.</span>,
            colorFrom: "var(--brand-blue)",
            colorTo: "var(--brand-teal)",
        },
        {
            icon: TrendingUp,
            title: "Measurable ROI & Transparent Reporting",
            description: "Every project comes with clear KPIs and real-time analytics dashboards. We track what matters: conversion rates, page performance, organic visibility, lead quality, and revenue impact - not vanity metrics. Our clients see an average sustained organic traffic growth and consistently measurable business outcomes.",
            colorFrom: "var(--brand-purple)",
            colorTo: "var(--brand-yellow)",
        },
        {
            icon: Users,
            title: "Partner-Centric Approach & Long-Term Success",
            description: "We're not a transactional agency - we're your growth co-pilot. With strong client retention, our clients stay because we treat their business goals as our own. We build long-term partnerships focused on sustainable growth, continuous optimization, and mutual success.",
            colorFrom: "var(--brand-cyan)",
            colorTo: "var(--brand-teal)",
        },
        {
            icon: Globe2,
            title: "Global Perspective, Localized Execution",
            description: "As a globally recognized digital agency, we combine international best practices with deep local market understanding. Our solutions are designed to perform across US, EU, and APAC markets while maintaining the flexibility to adapt to specific regional requirements and cultural nuances.",
            colorFrom: "var(--brand-orange)",
            colorTo: "var(--brand-yellow)",
        },
        {
            icon: Shield,
            title: "Cutting-Edge Technology & Innovation",
            description: <span>We leverage the latest technologies - from <Link href="/services/web-design-development/nextjs-development-services" className="hover:text-[var(--brand-purple-text)] transition-colors">Next.js</Link> and React to advanced AI models and automation tools - to future-proof your digital infrastructure. Our enterprise-grade security, performance-first architecture, and scalable systems ensure your business stays ahead of the curve.</span>,
            colorFrom: "var(--brand-blue)",
            colorTo: "var(--brand-purple)",
        },
    ];

    const stats = [
        { value: "300+", label: "Successful projects delivered" },
        { value: "Trusted", label: "Businesses trust our solutions globally" },
        { value: "95%", label: "Client retention rate" },
        { value: "80%+", label: "Test coverage in mobile apps" },
        { value: "AES-256", label: "Encryption standard" },
        { value: "Sub-2s", label: "Core Web Vitals performance" },
    ];

    return (
        <section className="py-16 lg:py-24 bg-[var(--background)] transition-colors duration-300 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            borderColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                            background: "linear-gradient(90deg, color-mix(in srgb,var(--brand-blue) 8%,transparent), color-mix(in srgb,var(--brand-purple) 8%,transparent))",
                        }}
                    >
                        <Award className="w-4 h-4 text-[var(--brand-blue-text)]" />
                        <span className="text-sm font-semibold text-[var(--brand-blue-text)]">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
                        Why Choose Cinute InfoMedia
                    </h2>

                    <div
                        className="mx-auto mb-6 rounded-full"
                        style={{ width: 112, height: 6, background: "linear-gradient(90deg,var(--brand-blue),var(--brand-purple))" }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        const grad = `linear-gradient(135deg, ${reason.colorFrom}, ${reason.colorTo})`;

                        return (
                            <div
                                key={index}
                                className="relative rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer bg-[var(--card-bg)] shadow-lg border-[var(--border-color)] hover:shadow-2xl hover:border-transparent hover:-translate-y-1 hover:scale-[1.02] group"
                            >
                                {/* Subtle hover backdrop */}
                                <div
                                    className="absolute inset-0 rounded-3xl -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-5"
                                    style={{ background: grad }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-2xl p-4 shadow-lg mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                                    style={{ background: grad }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-4 text-[var(--foreground)] transition-colors duration-300">
                                    {reason.title}
                                </h3>

                                <p className="text-[var(--secondary-text)] leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Proven Track Record Stats */}
                <div className="mt-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
                        Proven Track Record
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div
                                    className="text-3xl md:text-4xl font-bold mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--secondary-text)] leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
