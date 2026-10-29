"use client";

import { TrendingUp, Zap, Smartphone, Split, PenTool, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: TrendingUp,
            title: "Conversion-Focused Strategy",
            description: "We don't just design; we strategize. We analyze your target audience and goals to build pages that drive specific actions.",
            color: "from-[#10b981] to-[#0ea5e9]",
        },
        {
            icon: Zap,
            title: "Rapid Turnaround",
            description: "Launch your campaigns faster. Our streamlined process ensures your landing pages are live and generating leads in days, not weeks.",
            color: "from-[#0ea5e9] to-[#22c55e]",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "With over 60% of traffic coming from mobile, we ensure your landing pages look and perform perfectly on every device.",
            color: "from-[#22c55e] to-[#10b981]",
        },
        {
            icon: Split,
            title: "A/B Testing Ready",
            description: "Our pages are built to be tested. We set up variants and tracking so you can continuously optimize for better results.",
            color: "from-[#0ea5e9] to-[#10b981]",
        },
        {
            icon: PenTool,
            title: "Copywriting That Sells",
            description: "Design captures attention, but copy converts. We can help craft headlines and CTAs that speak directly to your audience's pain points.",
            color: "from-[#10b981] to-[#22c55e]",
        },
        {
            icon: BarChart3,
            title: "Deep Analytics Integration",
            description: "Know exactly what's working. We integrate with GA4, GTM, Hotjar, and your CRM to track every click, scroll, and conversion.",
            color: "from-[#22c55e] to-[#0ea5e9]",
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
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(16, 185, 129, 0.05)",
                            borderColor: "rgba(16, 185, 129, 0.2)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "var(--accent-green-text)" }}>Marketers</span> Choose Us
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We understand that landing pages are the tip of the spear for your marketing campaigns. We build them to be sharp, fast, and effective.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex items-center gap-4 p-6 bg-gradient-to-br ${reason.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold text-white relative z-10">
                                        {reason.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
