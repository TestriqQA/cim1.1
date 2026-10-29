"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, ChevronRight, BarChart2, MonitorPlay, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // YouTube brand colors
    const youtubeRed = "#FF0000";
    const darkGray = "#212121";

    const features = [
        "In-Stream Ads",
        "Video Discovery",
        "Bumper Ads",
        "Masthead Ads",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - YouTube style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Play button shapes drifting */}
                <div
                    className="absolute top-20 right-[10%] opacity-5 animate-pulse hidden lg:block"
                    style={{ color: youtubeRed }}
                >
                    <Play size={300} fill="currentColor" />
                </div>

                {/* Gradient orbs */}
                <div
                    className="absolute top-40 left-[5%] w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
                    style={{ backgroundColor: youtubeRed }}
                />

                {/* Diagonal mesh lines */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(45deg, ${youtubeRed} 1px, transparent 1px)`,
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
                            <span style={{ color: "var(--accent-red-text)" }}>YouTube Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${youtubeRed}10`,
                                borderColor: `${youtubeRed}30`,
                            }}
                        >
                            <MonitorPlay className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-red-text)" }}>
                                <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:underline">Video Marketing Experts</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Captivate with{" "}
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${youtubeRed}, #FF4444)`,
                                    textShadow: `0 0 30px ${youtubeRed}40`
                                }}
                            >
                                YouTube Ads
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Leverage the world's second-largest search engine to reach highly engaged audiences with compelling video content.
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
                                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
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
                                    background: `linear-gradient(to right, ${youtubeRed}, #cc0000)`,
                                    boxShadow: `0 4px 20px ${youtubeRed}40`,
                                }}
                            >
                                Start Campaign
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
                                How It Works
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center group"
                                style={{
                                    borderColor: `${youtubeRed}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 60px ${youtubeRed}15`
                                }}
                            >
                                {/* Play Button Overlay Animation */}
                                {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                                        <Play className="w-8 h-8 ml-1" style={{ color: youtubeRed, fill: youtubeRed }} />
                                    </div>
                                </div> */}

                                {/* Hero Image */}
                                <div className="w-full h-full relative p-12 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                                    <Image
                                        src="/images/performance-marketing-logos/youtube-ads-logo.png"
                                        alt="YouTube Ads"
                                        fill
                                        className="object-contain p-8"
                                    />
                                </div>

                                {/* Progress Bar Animation */}
                                <div className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-[3s] w-0 group-hover:w-full" style={{ backgroundColor: youtubeRed }}></div>
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-6 -left-6 p-5 rounded-2xl border shadow-xl bg-background"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${youtubeRed}15` }}
                                    >
                                        <Users className="w-6 h-6" style={{ color: "var(--accent-red-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            2B+ Users
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Monthly Active
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-6 -right-6 p-5 rounded-2xl border shadow-xl bg-background"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${youtubeRed}15` }}
                                    >
                                        <BarChart2 className="w-6 h-6" style={{ color: "var(--accent-red-text)" }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            High ROI
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Targeted Reach
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
                                Supported Formats
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Skippable", "Non-Skippable", "Bumper", "Masthead", "Overlay", "Sponsored Cards"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border hover:border-red-500 transition-colors"
                                        style={{
                                            borderColor: "var(--border-color)",
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
