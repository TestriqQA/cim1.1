"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Rocket, Eye, Users, Download, Repeat, Sparkles } from "lucide-react";

export default function SolutionTypes() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    // Map brand color -> theme-aware text token (contrast-safe in light & dark)
    const textAccent = (c: string) =>
        c === tiktokCyan ? "var(--accent-cyan-text)" : "var(--accent-pink-text)";

    const solutions = [
        {
            icon: Eye,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Brand Awareness</Link>,
            description: "Maximize reach with TopView and In-Feed ads.",
            backDetails: ["Video views optimization", "Reach & frequency", "Brand lift studies", "Sound-on engagement"],
            color: tiktokPink,
        },
        {
            icon: Users,
            title: "Community Building",
            description: "Grow followers and drive engagement with Spark Ads.",
            backDetails: ["Follower growth", "Engagement campaigns", "Comment optimization", "Profile visits"],
            color: tiktokCyan,
        },
        {
            icon: ShoppingCart,
            title: <Link href="/services/seo-services/ecommerce-seo-services" className="hover:text-[var(--primary)] transition-colors">E-commerce Sales</Link>,
            description: "Drive purchases with TikTok Shop and Shopping Ads.",
            backDetails: ["Shop integration", "Catalog ads", "Dynamic product ads", "Live shopping"],
            color: tiktokPink,
        },
        {
            icon: Rocket,
            title: "Traffic & Clicks",
            description: "Send users to your website or landing page.",
            backDetails: ["Click optimization", "Landing pages", "UTM tracking", "Conversion API"],
            color: tiktokCyan,
        },
        {
            icon: Download,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--primary)] transition-colors">App Installs</Link>,
            description: "Drive quality app downloads and in-app events.",
            backDetails: ["App installs", "In-app events", "Value optimization", "Playable ads"],
            color: tiktokPink,
        },
        {
            icon: Repeat,
            title: "Retargeting",
            description: "Re-engage viewers and website visitors.",
            backDetails: ["Custom audiences", "Pixel retargeting", "Engagement retargeting", "Lookalikes"],
            color: tiktokCyan,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${tiktokPink}15`,
                            borderColor: `${tiktokPink}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: tiktokPink }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-pink-text)" }}>
                            Ad Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Campaign{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Objectives
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Full-funnel strategies for every marketing goal.
                    </p>
                </div>

                {/* Solutions Grid with 3D Flip */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative h-72 cursor-pointer perspective-1000"
                            onMouseEnter={() => setFlippedCard(idx)}
                            onMouseLeave={() => setFlippedCard(null)}
                            style={{ perspective: "1000px" }}
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col items-center justify-center text-center"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${solution.color}15` }}
                                    >
                                        <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                        background: `linear-gradient(135deg, ${solution.color}15, ${solution.color}05)`,
                                        borderColor: solution.color,
                                    }}
                                >
                                    <h3 className="text-lg font-bold mb-4" style={{ color: textAccent(solution.color) }}>
                                        {solution.title}
                                    </h3>
                                    <div className="space-y-3 flex-1">
                                        {solution.backDetails.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-2">
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: solution.color }}
                                                />
                                                <span className="text-sm" style={{ color: "var(--foreground)" }}>
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
