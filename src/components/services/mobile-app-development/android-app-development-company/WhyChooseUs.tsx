"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Award,
    HeartHandshake,
    Users,
    Clock,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Native Performance Mastery",
            description: <><span className="text-inherit">We squeeze every ounce of performance from the hardware. Our native Android development ensures instant startup times and buttery smooth animations that </span><Link href="/services/mobile-app-development/hybrid-app-development-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">hybrid apps</Link> can&apos;t match.</>,
            gradient: "from-[#3DDC84] to-[#78C257]",
            shadowColor: "rgba(61, 220, 132, 0.3)",
        },
        {
            icon: Shield,
            title: "Material Design Guidelines Expert",
            description: <><span className="text-inherit">Our UI/UX team are purists of Google&apos;s design language, ensuring your app feels at home on any Android device while maintaining your </span><Link href="/services/brand-identity-design" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">unique brand identity</Link>.</>,
            gradient: "from-[#78C257] to-[#3DDC84]",
            shadowColor: "rgba(120, 194, 87, 0.3)",
        },
        {
            icon: Award,
            title: "Android App Security and Data Privacy",
            description: "Security is developed in, not bolted on. We implement ProGuard, R8 shrinking, and strict permission handling to protect user data and IP.",
            gradient: "from-[#073042] to-[#3DDC84]",
            shadowColor: "rgba(7, 48, 66, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Dedicated Android Developers",
            description: "Hire a team that lives in Android Studio. Our developers are active contributors to the GitHub community and stay ahead of the curve with Android App Bundles (AAB) and Jetpack Compose.",
            gradient: "from-[#3DDC84] to-[#073042]",
            shadowColor: "rgba(61, 220, 132, 0.3)",
        },
        {
            icon: Users,
            title: "Global Reach, Local Feel",
            description: "With multilingual hreflang potential capabilities, we localize your app for 18,000+ device models across 190 countries.",
            gradient: "from-[#78C257] to-[#073042]",
            shadowColor: "rgba(120, 194, 87, 0.3)",
        },
        {
            icon: Clock,
            title: "Transparent & Agile",
            description: "Zero hidden costs. You get access to Jira/Trello boards for real-time progress tracking and weekly sprint demos.",
            gradient: "from-[#073042] to-[#78C257]",
            shadowColor: "rgba(7, 48, 66, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #3DDC84, #78C257)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #78C257, #3DDC84)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(61, 220, 132, 0.1)",
                            borderColor: "rgba(61, 220, 132, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>The Cinute Infomedia</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Advantage
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with Android specialists who understand the Google ecosystem inside and out.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500 pointer-events-none
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ background: reason.shadowColor }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#3DDC84" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                            bg-gradient-to-br ${reason.gradient}
                                        `}
                                        style={{
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "var(--accent-green-text)" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 transition-all duration-500
                                            bg-gradient-to-r ${reason.gradient}
                                        `}
                                        style={{
                                            width: isHovered ? "100%" : "0%",
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
