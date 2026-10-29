"use client";

import { ArrowRight, ChevronRight, Heart, Camera, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Hero() {
    // Instagram gradient colors
    const instagramPink = "#E1306C";
    const instagramPurple = "#C13584";
    const instagramOrange = "#F77737";

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background with animated gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, rgba(225, 48, 108, 0.12), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(193, 53, 132, 0.08), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(247, 119, 55, 0.06), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${instagramPink} 1px, transparent 1px), linear-gradient(90deg, ${instagramPink} 1px, transparent 1px)`,
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
                    0%, 100% { box-shadow: 0 0 20px rgba(225, 48, 108, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(225, 48, 108, 0.4); }
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
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
                .instagram-gradient {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                            <span style={{ color: "var(--accent-pink-text)" }}>Instagram Marketing</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))",
                                borderColor: "rgba(225, 48, 108, 0.3)",
                            }}
                        >
                            <Instagram className="w-4 h-4" style={{ color: instagramPink }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-pink-text)" }}>
                                Instagram Partner
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Global Instagram Marketing Agency:{" "}
                            <span
                                className="relative inline-block bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent"
                            >
                                Scale Your Brand with 2026 Trend-First Strategies
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                                    style={{ color: instagramPink }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Dominate the world's most visual stage. With over 2+ billion monthly active users, Instagram is no longer just a photo-sharing app - it’s a global marketplace. As an expert <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)] hover:text-[var(--accent-pink-text)] transition-colors">Instagram Marketing Company</Link>, we help brands transition from "just posting" to high-impact ROI systems. Our data-driven Instagram Marketing Services leverage the latest 2026 algorithm updates to ensure your content doesn’t just look good - it converts.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                <span key="1">95% Success Rate for <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:text-[var(--accent-pink-text)] transition-colors">High-Growth E-commerce Brands</Link></span>,
                                "300% Average Increases in Organic Reach & Engagement",
                                "Deep Combined Digital Marketing & Creative Expertise",
                                "Direct-to-Consumer (D2C) & B2B Strategic Specialists",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: `linear-gradient(135deg, ${instagramPink}, ${instagramOrange})` }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{typeof feature === 'string' ? feature : feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="instagram-gradient inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            >
                                Book Your Free Instagram Audit Today
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                Explore Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-pink-text)" }}>2B+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Monthly Users</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-pink-text)" }}>High</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Product Discovery</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-pink-text)" }}>Strong</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Higher Engagement</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500 mt-15">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: "rgba(225, 48, 108, 0.2)",
                                    background: "linear-gradient(135deg, rgba(225, 48, 108, 0.05), rgba(193, 53, 132, 0.05))",
                                    boxShadow: "0 0 30px rgba(225, 48, 108, 0.15)",
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative flex items-center justify-center p-8">
                                    <Image
                                        src="/images/techstack_logos/Instagram-logo-hero-image.png"
                                        alt="Instagram Marketing"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: instagramPink }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: instagramPurple }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(225, 48, 108, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center instagram-gradient"
                                    >
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            High Engagement
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Visual Content
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(225, 48, 108, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center instagram-gradient"
                                    >
                                        <Camera className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Reels & Stories
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Short-Form Content
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-pink-text)" }}>
                                Content Formats We Optimize
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Feed Posts", "Stories", "Reels", "IGTV", "Live", "Guides"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(225, 48, 108, 0.05)",
                                            borderColor: "rgba(225, 48, 108, 0.15)",
                                            color: "var(--foreground)",
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
