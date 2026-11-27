"use client";

import {
    Users,
    Target,
    BarChart3,
    FileText,
    Activity,
    ShoppingCart,
    TestTube2,
    DollarSign,
    Eye,
    MousePointerClick,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function Analytics() {
    const metrics = [
        {
            icon: Target,
            title: "KPI Tracking",
            description: "Monitoring core metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Customer Lifetime Value (CLV).",
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
            accentColor: "var(--brand-teal)",
        },
        {
            icon: Activity,
            title: "Engagement Metrics",
            description: "Tracking likes, shares, comments, and save rates to gauge content resonance and audience loyalty.",
            gradient: "linear-gradient(135deg, #10b981, #059669)",
            accentColor: "#10b981",
        },
        {
            icon: ShoppingCart,
            title: "Lead & Conversion Tracking",
            description: <>Implementing robust tracking and <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Conversion Rate Optimization (CRO)</Link> to attribute leads, sales, and sign-ups directly to social media campaigns.</>,
            gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            accentColor: "#8b5cf6",
        },
        {
            icon: TestTube2,
            title: "Campaign Optimization",
            description: "Continuous A/B testing of creatives, audiences, and ad copy to ensure peak campaign efficiency.",
            gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
            accentColor: "#f59e0b",
        },
        {
            icon: FileText,
            title: "Monthly Reporting",
            description: "Providing clear, executive-level reports that translate complex data into actionable business insights.",
            gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
            accentColor: "#3b82f6",
        },
        {
            icon: DollarSign,
            title: "ROI Optimization",
            description: "Continuous refinement of strategies based on performance data to maximize your return on investment.",
            gradient: "linear-gradient(135deg, #ec4899, #db2777)",
            accentColor: "#ec4899",
        },
    ];

    return (
        <section
            className="px-4 sm:px-6 md:px-12 xl:px-20 py-10 md:py-16 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--accent-teal-text)",
                        }}
                    >
                        <BarChart3 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Analytics & Performance</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>Measuring What Matters:</span> Transparent Performance and Real ROI
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We believe in full transparency. Our reporting focuses on metrics that directly impact your business goals.
                    </p>
                </div>

                {/* Metrics Grid: same cards as Platforms We Specialize In (user,
                    27 Nov 2026): full section width, icon tile with no glow, slide-in
                    on load, and on hover the border turns the card's own icon colour
                    and doubles to 2px (inset 1px ring, so nothing shifts). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl p-6 md:p-8 border overflow-hidden relative border-[var(--border-color)] transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:border-[var(--card-color)] hover:shadow-[inset_0_0_0_1px_var(--card-color)]"
                                style={{
                                    "--card-color": metric.accentColor,
                                    backgroundColor: "var(--card-bg)",
                                    animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`
                                } as CSSProperties}
                            >
                                <div className="relative z-10">
                                    <div className="relative mb-6 w-fit">
                                        {/* Icon background (no glow) */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                            style={{
                                                background: metric.gradient,
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 flex items-center gap-2"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {metric.title}
                                    </h3>

                                    <p
                                        className="mb-6 leading-relaxed"
                                        style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}
                                    >
                                        {metric.description}
                                    </p>

                                    {/* View Details CTA */}
                                    {/* <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-400">
                                        <Eye className="w-4 h-4" style={{ color: metric.accentColor }} />
                                        <span className="text-sm font-semibold" style={{ color: metric.accentColor }}>
                                            View Analytics
                                        </span>
                                        <MousePointerClick className="w-3 h-3" style={{ color: metric.accentColor }} />
                                    </div> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}