"use client";

import { useState, useEffect } from "react";
import { Headphones, Shield, Clock, Rocket, ArrowRight, Sparkles, CheckCircle2, HeartHandshake, Home, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { icon: Shield, text: "24/7 Priority Support", color: "#4b277a" },
        { icon: Clock, text: "Quick Response Time", color: "#fab900" },
        { icon: Rocket, text: "Proactive Maintenance", color: "#97288e" },
        { icon: HeartHandshake, text: "Dedicated Success Team", color: "#4b277a" },
    ];

    const stats = [
        { value: "24/7", label: "Support Available" },
        { value: "<2hr", label: "Response Time" },
        { value: "24/7", label: "Monitoring" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #4b277a 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #fab900 15%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #97288e 10%, transparent)", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm mb-5 justify-center lg:justify-start flex-wrap"
                    aria-label="Breadcrumb"
                >
                    <Link href="/" className="flex items-center gap-1 hover:underline transition-colors p-2" style={{ color: "var(--secondary-text)" }}>
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link href="/services" className="hover:underline transition-colors p-2" style={{ color: "var(--secondary-text)" }}>
                        Services
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span className="font-semibold p-2" style={{ color: "var(--accent-amber-text)" }}>
                        Business Support Services
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-start lg:text-left">
                        {/* Badge */}
                        <div className="flex justify-center lg:justify-start">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                                style={{
                                    background: "linear-gradient(90deg, color-mix(in srgb, #4b277a 10%, transparent), color-mix(in srgb, #97288e 10%, transparent))",
                                    borderColor: "color-mix(in srgb, #4b277a 30%, transparent)",
                                    color: "var(--accent-violet-text)",
                                }}
                            >
                                <Headphones className="w-4 h-4" style={{ color: "var(--accent-violet-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>Business Support Services</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-center lg:text-left leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ background: "linear-gradient(135deg, #4b277a, #97288e)", WebkitBackgroundClip: "text" }}
                            >
                                Ongoing Support.
                            </span>
                            <span style={{ color: "var(--foreground)" }}>Lasting <span style={{ color: "var(--accent-amber-text)" }}>Success.</span></span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Optimize your operations with our premium Business Support Services designed for global scalability. Whether you need Outsourced Administrative assistance, <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">IT Business Support Services</Link>, or Managed Support Services, our team ensures your business runs flawlessly 24/7. We combine deep digital expertise with cutting-edge technology to deliver Business Assistance Services that drive efficiency and growth.
                        </p>

                        <p className="mt-4 text-sm md:text-base max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Join 50+ global <Link href="/services/web-design-development/fintech-solutions" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">fintech</Link> and <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">enterprise</Link> clients who trust us for rigorously tested technical maintenance and significant operational efficiency improvements.
                        </p>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = activeFeature === index;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all cursor-pointer ${isActive ? "scale-[1.02] sm:scale-105" : "hover:scale-[1.01]"}`}
                                        style={{
                                            backgroundColor: isActive ? `color-mix(in srgb, ${feature.color} 15%, var(--card-bg))` : "var(--card-bg)",
                                            borderColor: isActive ? feature.color : "var(--border-color)",
                                        }}
                                        onClick={() => setActiveFeature(index)}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: feature.color }} />
                                        <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl font-black" style={{ color: "var(--accent-amber-text)" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                                style={{ background: "linear-gradient(135deg, #4b277a, #97288e)" }}
                            >
                                Get Support Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105"
                                style={{ borderColor: "#4b277a", color: "var(--accent-violet-text)" }}
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - Support Card */}
                    <div className="relative">
                        {/* Main Visual Card */}
                        <div
                            className="relative rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 max-w-lg mx-auto"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #4b277a 10%, var(--card-bg)), var(--card-bg))",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            {/* Floating Icon */}
                            <div
                                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500"
                                style={{ background: "linear-gradient(135deg, #fab900, #97288e)" }}
                            >
                                <Headphones className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6" style={{ color: "var(--accent-violet-text)" }}>Why Choose Our Support?</h2>

                            <div className="space-y-4">
                                {[
                                    "Global Reach: Serving US, EU, India, and APAC markets.",
                                    "Expert Team: Certified developers and detailed-oriented virtual assistants.",
                                    "Proactive Approach: We monitor systems before issues arise.",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300 group cursor-pointer"
                                        style={{ backgroundColor: "color-mix(in srgb, #4b277a 5%, var(--card-bg))" }}
                                    >
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style={{ color: "#fab900" }} />
                                        <span className="text-base" style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                                {[
                                    { value: "500+", label: "Happy Clients" },
                                    { value: "12+", label: "Years Exp." },
                                    { value: "50+", label: "Support Staff" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-black" style={{ color: "var(--brand-purple-text)" }}>{stat.value}</div>
                                        <div className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Us Box */}
                        <div
                            className="mt-6 p-6 md:p-8 rounded-2xl border max-w-lg mx-auto"
                            style={{
                                backgroundColor: "color-mix(in srgb, #fab900 5%, var(--card-bg))",
                                borderColor: "color-mix(in srgb, #fab900 20%, var(--border-color))",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="w-6 h-6" style={{ color: "var(--accent-amber-text)" }} />
                                <h3 className="font-bold text-xl" style={{ color: "var(--accent-amber-text)" }}>
                                    Your Infrastructure, Our Priority
                                </h3>
                            </div>
                            <p className="text-base mb-5" style={{ color: "var(--secondary-text)" }}>
                                We don't just fix problems; we prevent them. Our comprehensive support solutions are built on a foundation of Experience, Expertise, Authoritativeness, and Trust (E-E-A-T).
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["24/7 Support", "Fast Response", "Expert Team", "Proactive Care"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 rounded-full text-sm font-medium"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #fab900 15%, transparent)",
                                            color: "var(--accent-amber-text)",
                                        }}
                                    >
                                        {tag}
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
