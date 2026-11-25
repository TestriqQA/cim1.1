import type { CSSProperties } from "react";
import {
    Trophy,
    Sparkles,
    ShieldCheck,
    Globe,
    BadgeCheck,
    Gauge,
    Tag,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: BadgeCheck,
            title: "Verified Expertise",
            description: <>a proven record of global delivery, including retail sites seeing <Link href="/services/seo-services" className="text-[var(--accent-amber-text)] underline underline-offset-2 hover:underline">sustained traffic growth</Link>.</>,
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            iconColor: "var(--color-amber-500, #f59e0b)",
        },
        {
            icon: Gauge,
            title: "Performance First",
            description: "Beating 2025 Google Core update signals with 90+ PageSpeed scores and mobile-first engineering.",
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            iconColor: "var(--color-green-500, #22c55e)",
        },
        {
            icon: ShieldCheck,
            title: "Security Hardening",
            description: "Hardening fintech platforms with rigorously tested deployment and military-grade encryption.",
            gradient: "from-red-500 via-orange-500 to-amber-500",
            iconColor: "var(--color-red-500, #ef4444)",
        },
        {
            icon: Tag,
            title: "White Label Ready",
            description: "Reliable white label WordPress development for agencies at a global scale.",
            gradient: "from-blue-500 via-cyan-500 to-sky-500",
            iconColor: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: <>Expertise in complex multilingual setups and <Link href="/services/seo-services" className="text-[var(--accent-indigo-text)] underline underline-offset-2 hover:underline">International WordPress SEO</Link>.</>,
            gradient: "from-indigo-500 via-violet-500 to-purple-500",
            iconColor: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: Sparkles,
            title: "Custom Solutions",
            description: "No templates. Every site is engineered to match your unique brand identity.",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            iconColor: "var(--color-purple-500, #a855f7)",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(0, 115, 170, 0.1), rgba(0, 150, 214, 0.1))",
                            border: "1px solid rgba(0, 115, 170, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Cinute
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                        <span style={{ color: "var(--foreground)" }}>Why We’re a Trusted WordPress Agency for </span>{" "}
                        <span
                            className="inline-block"
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Startups & Global Brands
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        In an era where digital first impressions are everything, generic templates no longer cut it.
                        We combine deep technical mastery with ROI-driven marketing strategies to help you dominate search results.
                    </p>
                </div>

                {/* Cards Grid: cards side by side share one size (md:auto-rows-fr; on phones each fits its content; the card
                    itself is the grid item). Hover matches Our Service: the border
                    turns the card's own colour and the card lifts 4px (colour change
                    only for reduced-motion users). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-3xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": reason.iconColor } as CSSProperties}
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${reason.gradient}`}>
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {reason.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}