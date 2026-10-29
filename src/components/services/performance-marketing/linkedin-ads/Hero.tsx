"use client";

import Link from "next/link";
import Image from "next/image";
import { Briefcase, ArrowRight, ChevronRight, TrendingUp, Users, Target, Building2, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";
    const linkedInDark = "#004182";

    const features = [
        "Sponsored Content",
        "Message Ads",
        "Lead Gen Forms",
        "Dynamic Ads",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Professional network style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Connection nodes pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, ${linkedInBlue} 2px, transparent 2px),
                            radial-gradient(circle at 80% 20%, ${linkedInBlue} 1.5px, transparent 1.5px),
                            radial-gradient(circle at 40% 70%, ${linkedInBlue} 1px, transparent 1px),
                            radial-gradient(circle at 70% 60%, ${linkedInBlue} 2px, transparent 2px)
                        `,
                        backgroundSize: "100px 100px",
                    }}
                />

                {/* Gradient orbs */}
                <div
                    className="absolute top-20 left-[15%] w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
                    style={{ backgroundColor: linkedInBlue }}
                />
                <div
                    className="absolute bottom-20 right-[20%] w-60 h-60 rounded-full blur-3xl opacity-10 animate-pulse"
                    style={{ backgroundColor: linkedInDark, animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/performance-marketing" className="hover:underline">Performance Marketing</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-blue-text)" }}>LinkedIn Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${linkedInBlue}10`,
                                borderColor: `${linkedInBlue}30`,
                            }}
                        >
                            <Briefcase className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="hover:underline">LinkedIn Marketing Partner</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Reach Decision-Makers with{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${linkedInBlue}, ${linkedInDark})`,
                                }}
                            >
                                LinkedIn Ads
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Target 900M+ professionals by job title, company, industry, and seniority. The ultimate <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--primary)] transition-colors">B2B advertising</Link> platform.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${linkedInBlue}, ${linkedInDark})`,
                                    boxShadow: `0 4px 20px ${linkedInBlue}40`,
                                }}
                            >
                                Get Free Audit
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center"
                                style={{
                                    borderColor: `${linkedInBlue}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 80px ${linkedInBlue}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative p-12">
                                    <Image
                                        src="/images/performance-marketing-logos/linkedin-ads-logo.svg"
                                        alt="LinkedIn Ads"
                                        fill
                                        className="object-contain p-12"
                                    />
                                </div>

                                {/* Professional network lines */}
                                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                                    <line x1="50" y1="50" x2="200" y2="200" stroke={linkedInBlue} strokeWidth="1" className="animate-pulse" />
                                    <line x1="350" y1="80" x2="200" y2="200" stroke={linkedInBlue} strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                                    <line x1="80" y1="350" x2="200" y2="200" stroke={linkedInBlue} strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1s" }} />
                                    <line x1="320" y1="320" x2="200" y2="200" stroke={linkedInBlue} strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
                                    <circle cx="50" cy="50" r="8" fill={linkedInBlue} className="animate-pulse" />
                                    <circle cx="350" cy="80" r="6" fill={linkedInBlue} className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                                    <circle cx="80" cy="350" r="7" fill={linkedInBlue} className="animate-pulse" style={{ animationDelay: "1s" }} />
                                    <circle cx="320" cy="320" r="5" fill={linkedInBlue} className="animate-pulse" style={{ animationDelay: "1.5s" }} />
                                </svg>
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${linkedInBlue}15` }}
                                    >
                                        <Users className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            900M+
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Professionals
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${linkedInBlue}15` }}
                                    >
                                        <Building2 className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            67M+
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Companies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Targeting Options Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Precision B2B Targeting
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Job Title", "Company Size", "Industry", "Seniority", "Skills", "Groups"].map((type, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${linkedInBlue}30`,
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)"
                                        }}
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
