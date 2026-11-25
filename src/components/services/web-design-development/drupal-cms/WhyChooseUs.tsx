import type { CSSProperties } from "react";
import {
    Trophy,
    ShieldCheck,
    Languages,
    BadgeCheck,
    Network,
    Accessibility,
    HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Enterprise Security",
            description: "Dedicated security team with proactive updates, vulnerability monitoring, and compliance-ready architecture.",
            gradient: "from-blue-600 via-cyan-500 to-sky-500",
            iconColor: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Languages,
            title: "Multilingual Excellence",
            description: "Built-in support for 100+ languages with proper RTL handling and localization workflows.",
            gradient: "from-sky-500 via-blue-500 to-indigo-500",
            iconColor: "var(--color-sky-500, #0ea5e9)",
        },
        {
            icon: BadgeCheck,
            title: "Certified Drupal Experts",
            description: "Acquia-certified developers with deep enterprise Drupal experience.",
            gradient: "from-indigo-500 via-purple-500 to-violet-500",
            iconColor: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: Network,
            title: <Link href="/blog/web-performance-optimization-speed" className="hover:text-[var(--brand-purple-text)] transition-colors">Scalable Architecture</Link>,
            description: "Designed for high-traffic sites with caching strategies, CDN integration, and load balancing.",
            gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
            iconColor: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Accessibility,
            title: "Accessibility First",
            description: "WCAG 2.1 AA compliant websites ensuring equal access for all users regardless of ability.",
            gradient: "from-teal-500 via-cyan-500 to-blue-500",
            iconColor: "var(--color-teal-500, #14b8a6)",
        },
        {
            icon: HeartHandshake,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-green-text)] transition-colors">Ongoing Partnership</Link>,
            description: "Long-term support agreements with clear SLAs, training, and continuous improvement.",
            gradient: "from-emerald-500 via-teal-500 to-cyan-500",
            iconColor: "var(--color-emerald-500, #10b981)",
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
                            background: "linear-gradient(135deg, rgba(6, 120, 190, 0.1), rgba(5, 74, 145, 0.1))",
                            border: "1px solid rgba(6, 120, 190, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Drupal </span>{" "}
                        <span
                            className="inline-block" style={{ color: "var(--accent-sky-text)" }}>
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Trusted by government agencies, universities, and enterprises for mission-critical digital experiences.
                    </p>
                </div>

                {/* Cards Grid: cards side by side share one size (phones: each fits its
                    content; the card itself is the grid item). Hover: the border turns
                    the card's own icon colour and the card lifts 4px (colour change
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
