"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Trophy, BarChart, Clock, Target, Users } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const reasons = [
        {
            icon: Trophy,
            title: "Video Experts",
            description: "Specialized team of video strategists and editors.",
        },
        {
            icon: Target,
            title: "Precise Targeting",
            description: "Advanced audience segmentation and placement targeting.",
        },
        {
            icon: BarChart,
            title: <Link href="/blog/data-analytics-insights-action" className="hover:text-[var(--primary)] transition-colors">Data-Driven</Link>,
            description: "Optimization based on view rate, CTR, and conversions.",
        },
        {
            icon: Users,
            title: "Full Funnel",
            description: "Strategies for awareness, consideration, and action.",
        },
        {
            icon: Clock,
            title: "Fast Turnaround",
            description: "Quick creative iteration and campaign launches.",
        },
        {
            icon: CheckCircle,
            title: "Transparent",
            description: "Clear reporting on where your budget is going.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${youtubeRed}15`,
                            borderColor: `${youtubeRed}40`,
                        }}
                    >
                        <Trophy className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(to right, ${youtubeRed}, #ff4444)` }}
                        >
                            Us?
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredCard === idx ? youtubeRed : "var(--border-color)",
                                transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)",
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                                    style={{
                                        backgroundColor: hoveredCard === idx ? youtubeRed : `${youtubeRed}15`,
                                        color: hoveredCard === idx ? "white" : "var(--accent-red-text)",
                                    }}
                                >
                                    <reason.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
