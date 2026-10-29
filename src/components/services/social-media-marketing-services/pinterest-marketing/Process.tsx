"use client";

import { Search, PenTool, Layers, Rocket, BarChart, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Pinterest brand color
    const pinterestRed = "#E60023";

    const steps = [
        {
            icon: Search,
            title: <Link href="/services/social-media-marketing-services" className="hover:underline">Pinterest Audit</Link>,
            description: "We analyze your current presence, competitor boards, and identify high-intent keyword opportunities.",
        },
        {
            icon: PenTool,
            title: <Link href="/services/web-design-development/branding-services" className="hover:underline">Visual Strategy</Link>,
            description: "Developing pin designs, board themes, and a content calendar aligned with Pinterest trends.",
        },
        {
            icon: Layers,
            title: <Link href="/services/seo-services" className="hover:underline">Board Architecture</Link>,
            description: "Creating SEO-optimized boards with strategic keyword placement for maximum discoverability.",
        },
        {
            icon: Rocket,
            title: "Pin Publishing",
            description: "Fresh pin creation and strategic scheduling to maintain consistent visibility in feeds.",
        },
        {
            icon: BarChart,
            title: "Performance Tracking",
            description: "Monitoring impressions, saves, clicks, and conversions to measure campaign success.",
        },
        {
            icon: RefreshCw,
            title: "Continuous Optimization",
            description: "Refining pin designs, testing new formats, and adapting to algorithm changes.",
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
                        Our Proven <span style={{ color: "var(--accent-red-text)" }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A strategic framework to turn Pinterest browsers into loyal customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Step Number */}
                                <div
                                    className="absolute top-8 right-8 text-4xl font-bold transition-colors"
                                    style={{ color: "var(--accent-red-text)" }}
                                >
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: pinterestRed,
                                        color: "white"
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
