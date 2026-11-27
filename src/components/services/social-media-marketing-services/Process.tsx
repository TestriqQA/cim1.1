"use client";

import { Search, Calendar, Palette, Send, MessageSquare, TrendingUp, Workflow } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            anchor: "step-strategy",
            number: "01",
            icon: Search,
            title: "Strategy & Research",
            description: <>Deep dive into your brand, audience <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">customer avatar & persona research</Link>, competitors, and industry trends to define clear, measurable goals.</>,
        },
        {
            anchor: "step-planning",
            number: "02",
            icon: Calendar,
            title: "Content Planning",
            description: "Developing a comprehensive content calendar, mapping out themes, formats, and messaging for the upcoming period.",
        },
        {
            anchor: "step-design",
            number: "03",
            icon: Palette,
            title: "Creative Design",
            description: <>Producing high-quality, on-brand visual assets and compelling <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">social media content creation services</Link> copy tailored for each platform.</>,
        },
        {
            anchor: "step-publishing",
            number: "04",
            icon: Send,
            title: "Publishing & Promotion",
            description: <>Executing the content calendar and launching targeted <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">paid social media advertising agency</Link> campaigns.</>,
        },
        {
            anchor: "step-engagement",
            number: "05",
            icon: MessageSquare,
            title: "Engagement & Monitoring",
            description: "Actively managing comments, messages, and mentions, and tracking real-time performance metrics and reputation.",
        },
        {
            anchor: "step-optimization",
            number: "06",
            icon: TrendingUp,
            title: "Optimization & Reporting",
            description: <>Analyzing data, identifying areas for improvement, and providing monthly <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">social media audit and analysis services</Link> reports with clear insights.</>,
        },
    ];

    return (
        <section
            className="px-4 sm:px-6 md:px-12 xl:px-20 py-10 md:py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--accent-teal-text)",
                        }}
                    >
                        <Workflow className="w-4 h-4" />
                        <span className="text-sm font-semibold">Our Process</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>A Proven 6-Step Process</span> for Measurable Social Growth
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Process Steps: connected stepper (user's pattern A, 27 Nov 2026).
                    Each step is a numbered dot with its card below; a thin line runs
                    from each dot to the next step's dot in the same row (3 per row
                    on desktop, 2 on tablets). On phones the dots sit on the left on
                    one vertical line, with each card beside its dot.
                    The line is drawn from this dot's centre across one column plus
                    the 2rem column gap, so it ends at the next dot's centre; the
                    opaque dot sits above it. */}
                <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10 list-none p-0 m-0">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;
                        const line = "color-mix(in srgb, var(--brand-teal) 45%, transparent)";
                        return (
                            <li
                                key={idx}
                                id={step.anchor}
                                className="scroll-mt-20 relative flex gap-4 md:flex-col md:items-center md:gap-5"
                            >
                                {/* Phones: vertical line down to the next dot. */}
                                {!isLast && (
                                    <span aria-hidden="true" className="md:hidden absolute left-6 top-12 -bottom-6 w-0.5 -translate-x-1/2" style={{ background: line }} />
                                )}
                                {/* Tablets: line to the next step, 2 per row. */}
                                {idx % 2 === 0 && (
                                    <span aria-hidden="true" className="hidden md:block lg:hidden absolute top-6 left-1/2 w-[calc(100%+2rem)] h-0.5 -translate-y-1/2" style={{ background: line }} />
                                )}
                                {/* Desktop: line to the next step, 3 per row. */}
                                {idx % 3 !== 2 && (
                                    <span aria-hidden="true" className="hidden lg:block absolute top-6 left-1/2 w-[calc(100%+2rem)] h-0.5 -translate-y-1/2" style={{ background: line }} />
                                )}

                                {/* Step number dot: a soft teal ring with teal text,
                                    which keeps AA contrast in both themes (white on the
                                    bright brand teal would not). Opaque, so the line
                                    stops at its edge. */}
                                <div
                                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 text-base font-bold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 15%, var(--background))",
                                        borderColor: "var(--brand-teal)",
                                        color: "var(--accent-teal-text)",
                                    }}
                                >
                                    <span className="sr-only">Step </span>
                                    {step.number}
                                </div>

                                <div
                                    className="flex-1 w-full rounded-2xl p-6 md:p-8 border"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        {/* Icon */}
                                        <div
                                            aria-hidden="true"
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-teal), var(--brand-teal))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
