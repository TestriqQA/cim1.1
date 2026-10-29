"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ShoppingCart, Search, Package, Star } from "lucide-react";

export default function Hero() {
    // Amazon brand colors
    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    const features = [
        "Sponsored Products",
        "Sponsored Brands",
        "Sponsored Display",
        "Amazon DSP",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Amazon style subtle mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: `${amazonOrange}0d` }}
                />
                <div
                    className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ backgroundColor: `${amazonBlue}0d` }}
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
                            <span style={{ color: "var(--accent-orange-text)" }}>Amazon Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${amazonOrange}10`,
                                borderColor: `${amazonOrange}30`,
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" style={{ color: amazonOrange }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                                <Link href="/services/seo-services/ecommerce-seo-services" className="hover:underline">E-commerce Growth Partners</Link>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Dominate the{" "}
                            <span
                                className="relative inline-block"
                            >
                                <span
                                    className="relative z-10 text-transparent bg-clip-text"
                                    style={{
                                        color: "var(--accent-orange-text)"
                                    }}
                                >
                                    Marketplace
                                </span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Scale your sales on the world's largest e-commerce platform with data-driven advertising strategies.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all hover:bg-orange-50/10"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <Star className="w-4 h-4 fill-current" style={{ color: amazonOrange }} />
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
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105 shadow-lg"
                                style={{
                                    backgroundColor: amazonOrange,
                                    backgroundImage: `linear-gradient(to bottom, ${amazonOrange}, #FF8800)`,
                                    boxShadow: `0 4px 15px ${amazonOrange}40`,
                                }}
                            >
                                Boost Sales Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                How We Work
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6 mt-4">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center group"
                                style={{
                                    borderColor: `${amazonOrange}30`,
                                    backgroundColor: "#f5f5f5bb",
                                    boxShadow: `0 0 60px ${amazonOrange}15`
                                }}
                            >
                                {/* Floating Box Animation */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <Package
                                        className="absolute top-10 right-10 w-12 h-12 opacity-10 animate-bounce"
                                        style={{ color: amazonOrange, animationDuration: '3s' }}
                                    />

                                </div>

                                {/* Hero Image */}
                                <div className="w-full h-full relative p-12 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                                    <Image
                                        src="/images/performance-marketing-logos/Amazon-ads-logo.svg"
                                        alt="Amazon Ads"
                                        fill
                                        className="object-contain p-12"
                                    />
                                </div>
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

                                    <div>

                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            Strong ROAS
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Average Return
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
                                        style={{ backgroundColor: `${amazonOrange}15` }}
                                    >
                                        <Search className="w-6 h-6" style={{ color: amazonOrange }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                            High Intent
                                        </p>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Shopper Traffic
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
                                Campaign Types
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Sponsored Products", "Sponsored Brands", "Sponsored Display", "Video Ads", "Stores", "Audio Ads"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border hover:border-orange-400 transition-colors"
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
