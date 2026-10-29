"use client";

import { useState } from "react";
import {
    Shield,
    Scale,
    FileCheck,
    Headphones,
    Lock,
    TrendingUp,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            description: "We don't just follow standards; we set them. Our apps undergo quarterly third-party penetration tests and follow the latest Enterprise-grade mobile app security protocols.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Scale,
            title: "Infinite Scalability",
            description: "Our Cloud-native enterprise app development approach ensures your infrastructure scales automatically to handle millions of requests without latency.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Sparkles,
            title: "Deep Collective Authority",
            description: <><span className="text-inherit">Our strategists have seen the evolution of the web. We apply deep, hard-won experience to ensure your </span><Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Enterprise Software Development</Link> project avoids common pitfalls.</>,
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Headphones,
            title: "24/7 Enterprise Support",
            description: <><span className="text-inherit">Dedicated </span><Link href="/services/additional-support-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">support</Link> team with clear SLAs, proactive monitoring, and rapid incident response.</>,
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Lock,
            title: "SSO & MDM Integration",
            description: "Seamless integration with Azure AD, Okta, and enterprise MDM solutions (InTune, MobileIron) for secure global deployment.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: TrendingUp,
            title: "Global Multi-Platform Reach",
            description: <><span className="text-inherit">Target users across the globe with Multi-platform enterprise app development (</span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">iOS</Link>/<Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Android</Link>/<Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Web</Link>). We ensure your apps are localization-ready.</>,
            shadowColor: "rgba(37, 99, 235, 0.3)",
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
                    style={{ backgroundColor: "#2563eb" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#2563eb" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "rgba(37, 99, 235, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us as Your</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Enterprise App Development Company?
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        The enterprise expertise, security, and deep collective authority your organization demands for massive ROI.
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
                                    style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#2563eb" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#2563eb",
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
                                            color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
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
                                            backgroundColor: "#2563eb",
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
