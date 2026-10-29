"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, ChevronRight, TrendingUp, Users, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";
    const tiktokBlack = "#010101";

    const features = [
        "In-Feed Ads",
        "Spark Ads",
        "TopView Ads",
        "Branded Effects",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - TikTok style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient orbs with TikTok colors */}
                <div
                    className="absolute top-20 left-[10%] w-72 h-72 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "rgba(255, 0, 80, 0.05)" }}
                />
                <div
                    className="absolute top-40 left-[15%] w-60 h-60 rounded-full blur-3xl opacity-15 animate-pulse"
                    style={{ backgroundColor: tiktokCyan, animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
                    style={{ backgroundColor: tiktokPink, animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-40 right-[20%] w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse"
                    style={{ backgroundColor: tiktokCyan, animationDelay: "1.5s" }}
                />

                {/* Floating music notes / sparkles */}
                <div className="absolute top-1/4 right-1/4 animate-bounce" style={{ animationDuration: "2s" }}>
                    <Sparkles className="w-6 h-6 opacity-30" style={{ color: tiktokPink }} />
                </div>
                <div className="absolute bottom-1/3 left-1/4 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                    <Sparkles className="w-5 h-5 opacity-25" style={{ color: tiktokCyan }} />
                </div>
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
                            <span style={{ color: "var(--accent-pink-text)" }}>TikTok Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${tiktokPink}30`,
                            }}
                        >
                            <Play className="w-4 h-4" style={{ color: tiktokPink }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-pink-text)" }}>
                                <Link href="/services/social-media-marketing-services" className="hover:underline">TikTok Marketing Partner</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Go Viral with{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})`,
                                }}
                            >
                                TikTok Ads
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Capture Gen Z and Millennials with short-form video ads that drive engagement, awareness, and conversions.
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
                                    <CheckCircle2 className="w-4 h-4" style={{ color: tiktokPink }} />
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
                                    background: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})`,
                                    boxShadow: `0 4px 20px ${tiktokPink}40`,
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
                                    borderColor: `${tiktokPink}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 60px ${tiktokPink}10, 0 0 60px ${tiktokCyan}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative p-16">
                                    <Image
                                        src="/images/performance-marketing-logos/tiktok-ads-logo.webp"
                                        alt="TikTok Ads"
                                        fill
                                        className="object-contain p-12"
                                    />
                                </div>

                                {/* Animated rings - TikTok music note style */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border-2 opacity-20 animate-[spin_20s_linear_infinite]"
                                    style={{ borderColor: tiktokPink }}
                                />
                                <div
                                    className="absolute w-80 h-80 rounded-full border-2 opacity-15 animate-[spin_25s_linear_infinite_reverse]"
                                    style={{ borderColor: tiktokCyan }}
                                />
                                <div
                                    className="absolute w-88 h-88 rounded-full border opacity-10 animate-[spin_30s_linear_infinite]"
                                    style={{ borderColor: tiktokPink }}
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
                                        style={{ backgroundColor: `${tiktokPink}15` }}
                                    >
                                        <Users className="w-6 h-6" style={{ color: tiktokPink }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            1B+ Users
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Monthly Active
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
                                        style={{ backgroundColor: `${tiktokCyan}15` }}
                                    >
                                        <TrendingUp className="w-6 h-6" style={{ color: tiktokCyan }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Strong CTR
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Avg. Click Rate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ad Format Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Ad Formats We Manage
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["In-Feed", "TopView", "Spark Ads", "Branded Hashtag", "Branded Effects", "Carousel"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${tiktokPink}30`,
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)"
                                        }}
                                    >
                                        {format}
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
