"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, ChevronRight, Target, TrendingUp, DollarSign, BarChart3, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";
    const googleYellow = "#fbbc04";
    const googleRed = "#ea4335";

    const features = [
        "Search Ads",
        "Display Network",
        "Shopping Campaigns",
        <Link key="youtube" href="/services/performance-marketing/youtube-ads" className="hover:text-[var(--primary)] transition-colors">YouTube Ads</Link>,
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Google-colored gradient orbs */}
                <div
                    className="absolute top-20 left-[10%] w-72 h-72 rounded-full blur-3xl animate-pulse opacity-20"
                    style={{ backgroundColor: googleBlue }}
                />
                <div
                    className="absolute top-40 right-[15%] w-64 h-64 rounded-full blur-3xl animate-pulse opacity-15"
                    style={{ backgroundColor: googleGreen, animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-[20%] w-80 h-80 rounded-full blur-3xl animate-pulse opacity-10"
                    style={{ backgroundColor: googleYellow, animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-[25%] w-60 h-60 rounded-full blur-3xl animate-pulse opacity-15"
                    style={{ backgroundColor: googleRed, animationDelay: "1.5s" }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${googleBlue} 1px, transparent 1px), linear-gradient(90deg, ${googleBlue} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
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
                            <span style={{ color: "var(--brand-blue-text)" }}>Google Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${googleBlue}10`,
                                borderColor: `${googleBlue}30`,
                            }}
                        >
                            <Search className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                Google Premier Partner
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Maximize ROI with{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${googleBlue}, ${googleGreen})`,
                                }}
                            >
                                Google Ads
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Capture high-intent searchers at the exact moment they&apos;re looking for your products or services. Our certified experts deliver campaigns that convert.
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
                                    background: `linear-gradient(135deg, ${googleBlue}, ${googleGreen})`,
                                    boxShadow: `0 4px 20px ${googleBlue}40`,
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
                                    borderColor: `${googleBlue}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${googleBlue}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative p-8">
                                    <Image
                                        src="/images/performance-marketing-logos/google-ads-logo.svg"
                                        alt="Google Ads"
                                        fill
                                        className="object-contain p-16"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20 border-dashed animate-[spin_20s_linear_infinite]"
                                    style={{ borderColor: googleBlue }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: googleGreen }}
                                />
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
                                        style={{ backgroundColor: `${googleBlue}15` }}
                                    >
                                        <TrendingUp className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Strong ROAS
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Avg. Return
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
                                        style={{ backgroundColor: `${googleGreen}15` }}
                                    >
                                        <DollarSign className="w-6 h-6" style={{ color: "var(--accent-green-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Large-Scale
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Ad Spend Managed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Campaign Types Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Campaign Types We Manage
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Search",
                                    "Display",
                                    <Link key="shopping" href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--primary)] transition-colors">Shopping</Link>,
                                    <Link key="video" href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video</Link>,
                                    "Performance Max",
                                    <Link key="apps" href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Campaigns</Link>
                                ].map((type, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${googleBlue}30`,
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
