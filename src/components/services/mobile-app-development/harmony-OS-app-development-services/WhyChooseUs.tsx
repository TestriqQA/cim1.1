"use client";

import { useState } from "react";
import {
    Share2,
    Globe,
    Zap,
    Users,
    Award,
    Headphones,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Share2,
            title: "Distributed Expertise",
            description: "Deep expertise in HarmonyOS distributed capabilities. Build apps that seamlessly work across phones, tablets, wearables, and IoT.",
            shadowColor: "rgba(199, 0, 11, 0.3)",
        },
        {
            icon: Globe,
            title: "HMS Core Specialists",
            description: "Full integration with HMS Core services including Push Kit, Map Kit, ML Kit, Account Kit, and more.",
            shadowColor: "rgba(199, 0, 11, 0.3)",
        },
        {
            icon: Zap,
            title: "ArkTS & ArkUI Experts",
            description: "Proficient in HarmonyOS's modern development framework. Clean, performant, and maintainable code.",
            shadowColor: "rgba(199, 0, 11, 0.3)",
        },
        {
            icon: Users,
            title: "700M+ User Reach",
            description: "Access to Huawei's massive global user base through AppGallery. Optimized for discoverability and engagement.",
            shadowColor: "rgba(199, 0, 11, 0.3)",
        },
        {
            icon: Award,
            title: "Huawei Partner",
            description: "Official Huawei developer partner with early access to new HarmonyOS features and dedicated support channels.",
            shadowColor: "rgba(199, 0, 11, 0.3)",
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description: <><Link href="/services/additional-support-services" className="text-[var(--accent-red-text)] hover:underline underline underline-offset-2">Post-launch maintenance</Link>, AppGallery optimization, and feature updates to keep your app competitive.</>,
            shadowColor: "rgba(199, 0, 11, 0.3)",
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
                    style={{ backgroundColor: "#C7000B" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#C7000B" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(199, 0, 11, 0.05)",
                            borderColor: "rgba(199, 0, 11, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            HarmonyOS
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Expertise in Huawei&apos;s ecosystem delivering high-quality distributed applications.
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
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ backgroundColor: "rgba(199, 0, 11, 0.2)" }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#C7000B" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#C7000B",
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
                                            color: isHovered ? "var(--accent-red-text)" : "var(--foreground)",
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
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#C7000B",
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
