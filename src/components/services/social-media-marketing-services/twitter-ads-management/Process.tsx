"use client";

import { Search, PenTool, Calendar, Zap, BarChart, Rocket } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            icon: Search,
            title: "X Channel Audit & Strategy",
            description: "We analyze your current X presence, competitor landscape, and the specific Twitter audience targeting segments that matter for your niche.",
        },
        {
            icon: PenTool,
            title: "Audience & Voice Development",
            description: <>Crafting a unique, authentic brand voice while setting up <Link href="/services/seo-services/technical-seo-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Twitter conversion tracking</Link> to ensure every interaction is measurable.</>,
        },
        {
            icon: Calendar,
            title: "Strategic Content Planning",
            description: "Planning a dynamic mix of viral threads and polls, integrated with hashtag optimization to maximize your discoverability.",
        },
        {
            icon: Zap,
            title: "Real-Time Trend Hijacking",
            description: "24/7 monitoring of global trends to insert your brand into the cultural zeitgeist and drive massive viral reach.",
        },
        {
            icon: Rocket,
            title: "Growth Acceleration & X Ads",
            description: <>Scaling reach through targeted <Link href="/services/performance-marketing" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Twitter ads management</Link>, from promoted tweets to <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">X video ads</Link> using data-driven tactics.</>,
        },
        {
            icon: BarChart,
            title: "ROI Reporting & Optimization",
            description: "Monthly X ads reporting and ROI analytics, focusing on performance metrics that translate to bottom-line growth.",
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our Proven <span style={{ color: "var(--secondary-text)" }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A data-backed framework to turn followers into loyal customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Step Number */}
                                <div aria-hidden="true" className="absolute top-8 right-8 text-4xl font-bold transition-colors" style={{ color: "#8a8a8a" }}>
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: "var(--foreground)",
                                        color: "var(--background)"
                                    }}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
