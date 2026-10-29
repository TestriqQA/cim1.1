"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Hash, MessageCircle, Repeat2, TrendingUp } from "lucide-react";

export default function Hero() {
    // X / Twitter Brand Colors
    const xBlack = "#000000";
    const xDarkGray = "#16181C";
    const xBlue = "#1D9BF0"; // Retention of the classic blue for accents

    const features = [
        "Real-Time Conversations",
        "Viral Potential",
        "Cultural Relevance",
        "Brand Safety",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Subtle Glitch / Noise Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, var(--border-color) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
                    style={{ backgroundColor: xBlue }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline transition-colors">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/performance-marketing" className="hover:underline transition-colors">Performance Marketing</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--foreground)" }}>X (Twitter) Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                <span style={{ color: "var(--brand-blue-text)" }}>#1</span> <Link href="/services/social-media-marketing-services" className="hover:underline decoration-dotted underline-offset-4">Platform for Brand Interaction</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Ignite the <br />
                            <span className="text-gray-500">
                                Conversation
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Connect with the most influential audiences when they are most receptive. Drive relevance and results on the world's digital town square.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    <Hash className="w-3 h-3 text-gray-500" />
                                    <span className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base md:text-lg text-white bg-black dark:bg-white dark:text-black border border-transparent transition-all transform hover:scale-105 shadow-lg"
                            >
                                Start Trending
                                <TrendingUp className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base md:text-lg border transition-all hover:bg-gray-100 dark:hover:bg-gray-400"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)"
                                }}
                            >
                                View Strategy
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6 mt-4">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center group shadow-2xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Background Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black opacity-50" />
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(29,155,240,0.1),transparent_70%)]" />

                                {/* Floating Elements Animation - Rings */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border rounded-full animate-spin-slow opacity-30"
                                        style={{ animationDuration: '20s', borderColor: "var(--border-color)" }}
                                    />
                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border rounded-full animate-reverse-spin opacity-30"
                                        style={{ animationDuration: '15s', borderStyle: 'dashed', borderColor: "var(--border-color)" }}
                                    />
                                </div>

                                {/* Hero Image / Logo */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center p-16 group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                                    <Image
                                        src="/images/techstack_logos/X-logo-hero-image.png"
                                        alt="X Ads Platform"
                                        width={300}
                                        height={300}
                                        className="object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] dark:invert"
                                    />
                                </div>

                                {/* Floating Card 1: Reach */}
                                <div
                                    className="absolute top-0 left-8 p-4 rounded-xl border border-gray-800 bg-black/90 backdrop-blur-md shadow-xl animate-float"
                                    style={{ animationDelay: '0s' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">Viral Reach</p>
                                            <p className="text-xs text-gray-500">#1 Trending</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 2: Engagement */}
                                <div
                                    className="absolute bottom-0 right-2 p-4 rounded-xl border border-gray-800 bg-white shadow-xl animate-float"
                                    style={{ animationDelay: '1.5s' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-black text-sm">High Engagement</p>
                                            <p className="text-xs text-gray-600">Real-time conversations</p>
                                        </div>
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
