"use client";

import { ArrowRight, Apple, ChevronRight, Zap, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
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
                        radial-gradient(circle at 15% 50%, rgba(0, 122, 255, 0.12), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(90, 200, 250, 0.08), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#007AFF 1px, transparent 1px), linear-gradient(90deg, #007AFF 1px, transparent 1px)`,
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
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-float-gentle {
                    animation: float-gentle 4s ease-in-out infinite;
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
                            <Link href="/services/mobile-app-development" className="hover:underline">Mobile Apps</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-blue-text)" }}>iOS Development</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: "rgba(0, 122, 255, 0.05)",
                                borderColor: "rgba(0, 122, 255, 0.3)",
                            }}
                        >
                            <Apple className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                iOS App Development Services
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Transforming Business {" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Vision
                                {/* Underline decoration */}
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                                    style={{ color: "#5AC8FA" }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            into Native iOS Experiences
                        </h1>

                        <div className="space-y-4 animate-slideUp delay-100">
                            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                                In an era where mobile supremacy defines market leadership, our iOS App Development Services empower startups and <Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">enterprises</Link> to dominate the Apple ecosystem.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 hidden md:block" style={{ color: "var(--secondary-text)" }}>
                                We specialize in crafting high-impact, user-centric applications that strictly adhere to Apple’s Human Interface Guidelines (HIG).
                            </p>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "Native Performance",
                                "Swift & SwiftUI",
                                "App Store Ready",
                                "Apple Guidelines",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#5AC8FA" }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: "linear-gradient(135deg, #007AFF, #0055D4)",
                                    boxShadow: "0 4px 20px rgba(0, 122, 255, 0.25)",
                                }}
                            >
                                Start Your iOS Project
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
                                Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>150+</h2>
                                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>iOS Apps Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>High</h2>
                                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>Avg. App Store Rating</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>10M+</h2>
                                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>App Downloads</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: "rgba(0, 122, 255, 0.2)",
                                    background: "linear-gradient(135deg, rgba(0, 122, 255, 0.05), var(--card-bg))",
                                    boxShadow: "0 0 30px rgba(0, 122, 255, 0.15)",
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative flex items-center justify-center p-8">
                                    <Image
                                        src="/images/techstack_logos/iOS-app-dev-hero-img.png"
                                        alt="iOS App Development"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: "#007AFF" }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: "#5AC8FA" }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(0, 122, 255, 0.2)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #007AFF, #5AC8FA)" }}
                                    >
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Native Performance
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Swift & SwiftUI
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(90, 200, 250, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #5AC8FA, #007AFF)" }}
                                    >
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            App Store Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Apple Guidelines
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--brand-blue-text)" }}>
                                Apple Ecosystem Expertise
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Swift", "SwiftUI", "UIKit", "Xcode", "TestFlight", "Core Data"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(0, 122, 255, 0.05)",
                                            borderColor: "rgba(0, 122, 255, 0.15)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {tech}
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
