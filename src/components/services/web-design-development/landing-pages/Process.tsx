"use client";

import { Search, PenTool, Layout, Code, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Analysis",
            description: "We dive deep into your campaign goals, target audience, and competitors. We understand exactly who you are trying to reach and what motivates them.",
            deliverables: ["Audience Persona", "Competitor Audit", "Campaign Goals", "Message Strategy"],
        },
        {
            number: "02",
            icon: Layout,
            title: "Strategy & Wireframing",
            description: "We map out the user journey and page structure. We focus on information hierarchy and persuasion flow before applying visual design.",
            deliverables: ["Low-Fidelity Wireframes", "User Flow Map", "Conversion Path", "Offer Structure"],
        },
        {
            number: "03",
            icon: PenTool,
            title: "Design & Copywriting",
            description: "We craft compelling copy that speaks to pain points and design a stunning interface that builds trust and guides the eye to the CTA.",
            deliverables: ["High-Fidelity UI", "Persuasive Copy", "Brand Assets", "Custom Illustrations"],
        },
        {
            number: "04",
            icon: Code,
            title: "Development & Integration",
            description: "We build the page using lightweight, fast code. We integrate your analytics, CRM, and email marketing tools to ensure data flows seamlessly.",
            deliverables: ["Responsive Code", "Speed Optimization", "CRM Integration", "Pixel Setup"],
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Optimization",
            description: "We launch the page and monitor performance. We set up A/B tests to continuously improve conversion rates based on real user data.",
            deliverables: ["Live Launch", "A/B Testing Setup", "Heatmap Tracking", "Performance Report"],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(16, 185, 129, 0.05)",
                            borderColor: "rgba(16, 185, 129, 0.2)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "var(--accent-green-text)" }}>Conversion</span> Process
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology designed to turn traffic into leads and customers.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                        }}
                    />
                </div>

                {/* Process Steps */}
                <div className="space-y-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                            >
                                {/* Step Number & Icon */}
                                <div className="lg:w-1/3 flex flex-col items-center text-center">
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                                        style={{
                                            background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                        }}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div
                                        className="text-5xl font-bold mb-2"
                                        style={{
                                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Step Content */}
                                <div
                                    className="lg:w-2/3 p-8 rounded-2xl border"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                                        {step.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.deliverables.map((deliverable, didx) => (
                                            <span
                                                key={didx}
                                                className="px-4 py-2 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: "color-mix(in srgb, #10b981 10%, transparent)",
                                                    color: "var(--accent-green-text)",
                                                }}
                                            >
                                                {deliverable}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
