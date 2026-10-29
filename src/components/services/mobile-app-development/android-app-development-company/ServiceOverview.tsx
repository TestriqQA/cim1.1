"use client";

import { useState } from "react";
import {
    Smartphone,
    Tablet,
    Watch,
    Tv,
    Car,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Smartphone,
            title: "Android Phone Apps",
            description: <><span className="text-inherit">Custom native Android apps built with Kotlin and </span><Link href="/services/web-design-development/java-spring-boot" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Java</Link> that leverage device-specific features like cameras, GPS, and sensors. We ensure silky smooth 120Hz scrolling and instant load times.</>,
            gradient: "from-[#3DDC84] to-[#78C257]",
            shadowColor: "rgba(61, 220, 132, 0.4)",
        },
        {
            icon: Tablet,
            title: "Android Tablet Apps",
            description: "Optimized for larger screens, our tablet applications utilize adaptive layouts and multi-window support to boost productivity for enterprise and education sectors.",
            gradient: "from-[#78C257] to-[#3DDC84]",
            shadowColor: "rgba(120, 194, 87, 0.4)",
        },
        {
            icon: Watch,
            title: "Wear OS Apps",
            description: "Extend your reach with wearable Android app development. We create companion apps for health tracking, notifications, and quick actions on Pixel Watch and Galaxy Watch.",
            gradient: "from-[#073042] to-[#3DDC84]",
            shadowColor: "rgba(7, 48, 66, 0.4)",
        },
        {
            icon: Tv,
            title: "Android TV and OTT Apps",
            description: <><span className="text-inherit">Capture the living room with immersive Android TV app development solutions. We build </span><Link href="/services/web-design-development/entertainment-media" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">streaming platforms</Link> using the Leanback library for intuitive remote-control navigation.</>,
            gradient: "from-[#3DDC84] to-[#073042]",
            shadowColor: "rgba(61, 220, 132, 0.4)",
        },
        {
            icon: Car,
            title: "Android Auto Apps",
            description: "Drive engagement with safe, voice-enabled driver experiences. Our apps integrate seamlessly with vehicle infotainment systems for tailored media and navigation.",
            gradient: "from-[#78C257] to-[#073042]",
            shadowColor: "rgba(120, 194, 87, 0.4)",
        },
        {
            icon: Sparkles,
            title: <Link href="/services/seo-services" className="hover:text-[var(--accent-green-text)] transition-colors">App Store Optimization (ASO)</Link>,
            description: "Our data-driven ASO services ensure your app ranks higher for high-intent keywords. We optimize titles, descriptions, and visuals significantly improving organic downloads.",
            gradient: "from-[#073042] to-[#78C257]",
            shadowColor: "rgba(7, 48, 66, 0.4)",
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
                        background: "linear-gradient(135deg, #3DDC84, #78C257)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #78C257, #3DDC84)",
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
                                background: "linear-gradient(135deg, rgba(61, 220, 132, 0.1), rgba(120, 194, 87, 0.1))",
                                color: "var(--accent-green-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Build Powerful{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Android Apps
                        </span>{" "}
                        for Every Device
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We go beyond smartphones to deliver multi-device compatibility across the entire Google ecosystem.
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
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
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
