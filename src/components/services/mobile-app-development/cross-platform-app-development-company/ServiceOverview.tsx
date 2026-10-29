"use client";

import { useState } from "react";
import {
    Smartphone,
    Code2,
    Layers,
    Puzzle,
    Palette,
    Rocket,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Smartphone,
            title: "Custom Cross-Platform Application Solutions",
            description: <><span className="text-inherit">We design and engineer bespoke mobile applications that operate seamlessly on multiple operating systems. Our single codebase app development for </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Android</Link> ensures consistent brand identity and user experience (UX) across all devices.</>,
            gradient: "from-[#667eea] to-[#764ba2]",
            shadowColor: "rgba(102, 126, 234, 0.4)",
        },
        {
            icon: Layers,
            title: "Flutter and React Native Development Agency",
            description: "As an expert Flutter and React Native Development Agency, we leverage the power of Google's Flutter and Meta's React Native to build high-performance, visually stunning apps. Whether you need the widget-rich environment of Flutter or the native component mapping of React Native, we have the expertise.",
            gradient: "from-[#02569B] to-[#13B9FD]",
            shadowColor: "rgba(2, 86, 155, 0.4)",
        },
        {
            icon: Code2,
            title: "Cross-Platform App Migration and Modernization",
            description: "Is your legacy app slowing you down? We specialize in cross-platform app migration and modernization. We seamlessly port native apps to efficient cross-platform frameworks, preserving data integrity while upgrading performance, security, and maintainability.",
            gradient: "from-[#764ba2] to-[#667eea]",
            shadowColor: "rgba(118, 75, 162, 0.4)",
        },
        {
            icon: Puzzle,
            title: "Progressive Web App (PWA) Development Services",
            description: "Extend your reach beyond app stores. Our Progressive Web App (PWA) development services deliver app-like experiences directly in the browser. Fast loading, offline capabilities, and push notifications ensure maximum user engagement.",
            gradient: "from-[#00d4ff] to-[#667eea]",
            shadowColor: "rgba(0, 212, 255, 0.4)",
        },
        {
            icon: Palette,
            title: "Cross-Platform App Maintenance and Support",
            description: <><span className="text-inherit">Our commitment doesn&apos;t end at launch. We provide 24/7 cross-platform app </span><Link href="/services/additional-support-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">maintenance and support</Link> with strict SLAs. From OS updates (iOS 19/Android 16 ready) to security patches and performance tuning, we keep your app running at peak efficiency.</>,
            gradient: "from-[#667eea] to-[#00d4ff]",
            shadowColor: "rgba(102, 126, 234, 0.4)",
        },
        {
            icon: Rocket,
            title: "Custom API Integration for Multi-Platform Apps",
            description: <><span className="text-inherit">Unlock the full potential of your app with custom API integration for multi-platform apps. We securely connect your mobile solutions to </span><Link href="/services/web-design-development/saas-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">cloud backends</Link>, payment gateways, ERPs, and third-party services, ensuring real-time data synchronization.</>,
            gradient: "from-[#764ba2] to-[#00d4ff]",
            shadowColor: "rgba(118, 75, 162, 0.4)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #764ba2, #00d4ff)",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                                color: "var(--accent-indigo-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Professional{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Multi-Platform App Development
                        </span>{" "}
                        Solutions
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Build once, scale everywhere. We deliver comprehensive cross-platform application solutions tailored to your unique business goals using the latest frameworks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.shadowColor}, transparent)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, transparent, ${service.shadowColor})`,
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${service.gradient}`}
                                            style={{
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            background: `linear-gradient(90deg, ${service.gradient})`,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
