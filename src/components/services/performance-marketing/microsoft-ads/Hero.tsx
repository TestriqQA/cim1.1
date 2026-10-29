"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Search, BarChart3, Globe, MousePointer2 } from "lucide-react";

export default function Hero() {
    // Microsoft brand colors
    const msBlue = "#0078D4"; // Fluent Blue
    const msGreen = "#107C10";
    const msYellow = "#FFB900";
    const msRed = "#D83B01";

    const features = [
        "Search Network",
        "Audience Network",
        "LinkedIn Integration",
        "Shopping Campaigns",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Metro Tile / Grid motif */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Blobs */}
                <div
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: msBlue }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: msBlue }}
                />
                {/* Grid Lines */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${msBlue} 1px, transparent 1px), linear-gradient(90deg, ${msBlue} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                            <span style={{ color: "var(--brand-blue-text)" }}>Microsoft Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border shadow-sm"
                            style={{
                                backgroundColor: `${msBlue}10`,
                                borderColor: `${msBlue}30`,
                            }}
                        >
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#F25022" }} />
                                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#7FBA00" }} />
                                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#00A4EF" }} />
                                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#FFB900" }} />
                            </div>
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                <Link href="/services/performance-marketing/linkedin-ads" className="hover:underline">Reach High-Value Audiences</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Expand Beyond{" "}
                            <span
                                className="relative inline-block"
                            >
                                <span
                                    className="relative z-10"
                                    style={{
                                        color: "var(--brand-blue-text)"
                                    }}
                                >
                                    Google
                                </span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Tap into the Microsoft Search Network and connect with millions of unique searchers across Bing, Yahoo, AOL, and LinkedIn.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:bg-blue-50/10"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: msBlue }} />
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
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-base md:text-lg text-white transition-all transform hover:scale-105 shadow-lg"
                                style={{
                                    backgroundColor: msBlue,
                                    boxShadow: `0 4px 15px ${msBlue}40`,
                                }}
                            >
                                Start Advertising
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base md:text-lg border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Explore Strategy
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6 mt-4">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-xl overflow-hidden border flex items-center justify-center group"
                                style={{
                                    borderColor: `${msBlue}30`,
                                    backgroundColor: "#f5f5f5", // Light grey bg for contrast
                                    boxShadow: `0 0 60px ${msBlue}15`
                                }}
                            >
                                {/* Floating Elements Animation */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div
                                        className="absolute top-10 right-10 w-16 h-16 border-4 opacity-20 animate-spin-slow"
                                        style={{ borderColor: msBlue, borderRadius: '1rem', animationDuration: '10s' }}
                                    />
                                    <div
                                        className="absolute bottom-20 left-10 w-10 h-10 bg-current opacity-10 animate-bounce"
                                        style={{ color: msBlue, animationDuration: '3s' }}
                                    />
                                </div>

                                {/* Hero Image / Logo */}
                                <div className="w-full h-full relative p-12 opacity-90 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                                    <Image
                                        src="/images/techstack_logos/Microsoft-logo-hero-image.png"
                                        alt="Microsoft Advertising"
                                        fill
                                        className="object-contain p-8"
                                    />
                                </div>
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-6 -left-6 p-5 rounded-xl border shadow-xl bg-background"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${msBlue}15` }}
                                    >
                                        <MousePointer2 className="w-6 h-6" style={{ color: msBlue }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            High CPC
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Cost Efficiency
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-6 -right-6 p-5 rounded-xl border shadow-xl bg-background"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${msBlue}15` }}
                                    >
                                        <BarChart3 className="w-6 h-6" style={{ color: msBlue }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            60M+
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Desktop Users
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
