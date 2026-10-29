"use client";

import { ArrowRight, ChevronRight, Eye, ShoppingBag, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    // Pinterest brand color
    const pinterestRed = "#E60023";

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, rgba(230, 0, 35, 0.08), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(230, 0, 35, 0.05), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(230, 0, 35, 0.03), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${pinterestRed} 1px, transparent 1px), linear-gradient(90deg, ${pinterestRed} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(230, 0, 35, 0.1); }
                    50% { box-shadow: 0 0 40px rgba(230, 0, 35, 0.2); }
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-float-gentle {
                    animation: float-gentle 4s ease-in-out infinite;
                }
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/social-media-marketing-services" className="hover:underline">Social Media</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-red-text)" }}>Pinterest Marketing</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: `${pinterestRed}10`,
                                borderColor: `${pinterestRed}30`,
                            }}
                        >
                            {/* Pinterest Icon SVG */}
                            <svg className="w-4 h-4" style={{ color: pinterestRed }} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                            </svg>
                            <Link href="/about" className="text-sm font-medium hover:underline" style={{ color: "var(--accent-red-text)" }}>
                                Pinterest Marketing Partner
                            </Link>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Inspire & Convert with{" "}
                            <span className="relative inline-block" style={{ color: "var(--accent-red-text)" }}>
                                <Link href="/services/web-design-development/branding-services" className="hover:underline">Visual Discovery</Link>
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-50"
                                    style={{ color: pinterestRed }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Drive traffic and sales with Pinterest's visual platform. Reach users who are actively planning
                            purchases and ready to discover your brand.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "Visual Discovery",
                                "Shopping Pins",
                                "Idea Pins",
                                "Pinterest Ads",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: `${pinterestRed}30`
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pinterestRed }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: pinterestRed }}
                            >
                                Start Pinning
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)"
                                }}
                            >
                                Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>450M+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Monthly Users</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>97%</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Unbranded Searches</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>Strong</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Higher ROAS</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: `${pinterestRed}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${pinterestRed}10`
                                }}
                            >
                                {/* Pinterest Logo */}
                                <div className="w-[70%] h-[70%] relative flex items-center justify-center">
                                    <Image
                                        src="/images/techstack_logos/Pinterest-logo.png"
                                        alt="Pinterest Marketing"
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: pinterestRed }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: pinterestRed }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${pinterestRed}15` }}
                                    >
                                        <Eye className="w-6 h-6" style={{ color: pinterestRed }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            High Intent
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Ready to Buy
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
                                        style={{ backgroundColor: `${pinterestRed}15` }}
                                    >
                                        <ShoppingBag className="w-6 h-6" style={{ color: pinterestRed }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Shop-Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Shoppable Pins
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Pinterest Ad Formats We Master
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Standard Pins", "Video Pins", "Shopping Ads", "Carousel Pins", "Idea Pins", "Collection Ads"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${pinterestRed}30`,
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
