"use client";

import { ArrowRight, ChevronRight, Smartphone, Watch, Tv, Laptop } from "lucide-react";
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
                        radial-gradient(circle at 15% 50%, rgba(199, 0, 11, 0.12), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(199, 0, 11, 0.08), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#C7000B 1px, transparent 1px), linear-gradient(90deg, #C7000B 1px, transparent 1px)`,
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
                    0%, 100% { box-shadow: 0 0 20px rgba(199, 0, 11, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(199, 0, 11, 0.4); }
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
                            <Link href="/services/mobile-app-development" className="hover:underline">Mobile Apps</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-red-text)" }}>HarmonyOS</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                background: "rgba(199, 0, 11, 0.05)",
                                borderColor: "rgba(199, 0, 11, 0.3)",
                            }}
                        >
                            <Smartphone className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                                Huawei Ecosystem
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            <Link href="/services/mobile-app-development/cross-platform-app-development-company" className="hover:text-[var(--accent-red-text)] transition-colors">Distributed Apps</Link>,{" "}
                            <span
                                className="relative inline-block"
                                style={{ color: "var(--accent-red-text)" }}
                            >
                                Seamless Experience
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                                    style={{ color: "#C7000B" }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Build next-generation apps for Huawei&apos;s HarmonyOS ecosystem. Create <Link href="/services/mobile-app-development/cross-platform-app-development-company" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">distributed applications</Link> that run seamlessly across <Link href="/services/mobile-app-development" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">smartphones</Link>, tablets, wearables, and IoT devices.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "ArkTS & ArkUI",
                                "Multi-Device",
                                "AppGallery",
                                "HMS Core",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C7000B" }} />
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
                                    backgroundColor: "#C7000B",
                                    boxShadow: "0 4px 20px rgba(199, 0, 11, 0.25)",
                                }}
                            >
                                Start Your Project
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
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>700M+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>HarmonyOS Users</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>2.5M+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Developers</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>200+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Countries</p>
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
                                    borderColor: "rgba(199, 0, 11, 0.2)",
                                    background: "rgba(199, 0, 11, 0.05)",
                                    boxShadow: "0 0 30px rgba(199, 0, 11, 0.15)",
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative flex items-center justify-center p-8">
                                    <Image
                                        src="/images/techstack_logos/harmonyos-hero-image.webp"
                                        alt="HarmonyOS App Development"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: "#C7000B" }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: "#C7000B" }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(199, 0, 11, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#C7000B" }}
                                    >
                                        <Watch className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Multi-Device
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            One App, All Devices
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(199, 0, 11, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#C7000B" }}
                                    >
                                        <Tv className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Smart TV Apps
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Vision & Panel
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Device Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-red-text)" }}>
                                Supported Devices
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Phones", "Tablets", "Wearables", "Smart TV", "Cars", "IoT"].map((device, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(199, 0, 11, 0.05)",
                                            borderColor: "rgba(199, 0, 11, 0.15)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {device}
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
