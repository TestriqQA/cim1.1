import type { CSSProperties } from "react";
import {
    Trophy,
    Shield,
    Server,
    Brain,
    HeartHandshake,
    Network,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Trophy,
            title: "Python Expertise",
            description: "Deep, dedicated Python development across diverse industries and applications.",
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            iconColor: "var(--color-amber-500, #f59e0b)",
        },
        {
            icon: Network,
            title: "Scalable Architecture",
            description: <>We design systems that grow with your business, from <Link href="/services/web-design-development/saas-development-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">startup to enterprise scale</Link>.</>,
            gradient: "from-blue-600 via-blue-500 to-cyan-500",
            iconColor: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Shield,
            title: "Security First",
            description: <>Leveraging <Link href="/blog/cybersecurity-small-businesses" className="text-[var(--accent-green-text)] underline underline-offset-2 hover:underline">Django&apos;s built-in security features</Link> and industry best practices.</>,
            gradient: "from-emerald-500 via-green-500 to-teal-500",
            iconColor: "var(--color-emerald-500, #10b981)",
        },
        {
            icon: Server,
            title: "API Specialists",
            description: "Expert REST and GraphQL API development with Django REST Framework and FastAPI.",
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            iconColor: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Brain,
            title: "Data & AI Ready",
            description: <>Seamlessly integrate <Link href="/services/ai-workflows-automations-services" className="text-[var(--accent-pink-text)] underline underline-offset-2 hover:underline">machine learning</Link> and data science into your applications.</>,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            iconColor: "var(--color-pink-500, #ec4899)",
        },
        {
            icon: HeartHandshake,
            title: "Ongoing Support",
            description: <>Long-term partnership with <Link href="/services/additional-support-services" className="text-[var(--accent-orange-text)] underline underline-offset-2 hover:underline">maintenance, updates</Link>, and continuous improvements.</>,
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            iconColor: "var(--color-orange-500, #f97316)",
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
                            background: "linear-gradient(135deg, rgba(48, 105, 152, 0.1), rgba(75, 139, 190, 0.1))",
                            border: "1px solid rgba(48, 105, 152, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why We&apos;re the </span>{" "}
                        <span className="inline-block" style={{ color: "var(--brand-blue-text)" }}>
                            Right Choice
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Deep Python expertise combined with a focus on scalable, maintainable solutions.
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
