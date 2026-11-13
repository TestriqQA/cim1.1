"use client";

import { Zap, ShieldCheck, Globe, Trophy, Users, BarChart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Trophy,
            title: "Proven Leadership",
            description: "As a global agency, we bring deep marketing excellence, navigating every shift from microblogging to the current X ecosystem.",
        },
        {
            icon: Zap,
            title: "Sustained Traffic Growth",
            description: <>We've consistently delivered 300% <Link href="/services/seo-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">traffic growth</Link> for tech and SaaS clients, helping them dominate through aggressive X business strategies.</>,
        },
        {
            icon: ShieldCheck,
            title: "95% Precision Targeting",
            description: "Using proprietary data layers and audience segments, we achieve high accuracy in reaching decision-makers, skyrocketing conversion success.",
        },
        {
            icon: Users,
            title: "Real-Time & Agile Team",
            description: "We move at the speed of X. Our 24/7 'War Room' ensures your brand is always part of the right viral conversation at the right moment.",
        },
        {
            icon: Globe,
            title: "Global Reach, Local Nuance",
            description: "From the US to APAC, we understand regional cultural nuances, providing multilingual services to help global companies scale across borders.",
        },
        {
            icon: BarChart,
            title: "ROI-Focused & Transparent",
            description: "We are an ROI-driven X marketing company. No fluff, no 'vanity' retweets - we focus on leads, sales, and brand authority.",
        },
    ];

    return (
        <section
            className="py-12 md:py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--foreground)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        Why Choose Us for <span style={{ color: "var(--secondary-text)" }}>X Marketing?</span>
                    </h2>
                    <p className="text-lg max-w-7xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        X is the town square of the internet. You need a partner who understands the nuance, speed, and
                        culture of the platform to truly stand out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                    {/* Six benefits */}
                    <div className="lg:col-span-3">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {benefits.map((benefit, idx) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={idx} className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg transition-colors duration-300 group-hover:bg-accent" style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold underline-offset-4 transition-all" style={{ color: "var(--foreground)" }}>
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Visual - Abstract Representation */}
                    <div
                        className="lg:col-span-2 relative w-full max-w-md mx-auto lg:max-w-none aspect-square rounded-3xl overflow-hidden border flex items-center justify-center p-6"
                        style={{
                            borderColor: "var(--border-color)",
                            backgroundColor: "var(--card-bg)"
                        }}
                    >
                        {/* Central Element */}
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 min-[1440px]:w-24 min-[1440px]:h-24 mx-auto rounded-full flex items-center justify-center shadow-lg animate-pulse mb-3 min-[1440px]:mb-6" style={{ backgroundColor: "var(--foreground)" }}>
                                <svg className="w-8 h-8 min-[1440px]:w-12 min-[1440px]:h-12" style={{ color: "var(--background)" }} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                            <h3 className="text-xl min-[1440px]:text-3xl font-bold mb-1 min-[1440px]:mb-2" style={{ color: "var(--foreground)" }}>Dominating</h3>
                            <p className="text-sm min-[1440px]:text-xl" style={{ color: "var(--secondary-text)" }}>The Conversation</p>
                        </div>

                        {/* Orbiting Elements */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute aspect-square border rounded-full animate-[spin_10s_linear_infinite]"
                                style={{
                                    height: `${[60, 77, 92][i]}%`,
                                    animationDuration: `${(i + 2) * 10}s`,
                                    animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                                    borderColor: "var(--border-color)"
                                }}
                            >
                                <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: "var(--foreground)" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
