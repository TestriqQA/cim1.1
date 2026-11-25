import type { CSSProperties } from "react";
import {
    Shield,
    Gauge,
    Users,
    Clock,
    Award,
    Headphones,
    Trophy,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade security with Spring Security, OAuth2, and comprehensive vulnerability protection.",
            gradient: "from-green-600 via-emerald-500 to-teal-500",
            iconColor: "var(--color-green-600, #16a34a)",
        },
        {
            icon: Gauge,
            title: <Link href="/blog/web-performance-optimization-speed" className="hover:text-[var(--accent-orange-text)] transition-colors">High Performance</Link>,
            description: "Optimized JVM applications with sub-millisecond response times and massive throughput.",
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            iconColor: "var(--color-orange-500, #f97316)",
        },
        {
            icon: Users,
            title: "Expert Java Team",
            description: "Certified Spring professionals with deep enterprise Java experience.",
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            iconColor: "var(--color-emerald-500, #10b981)",
        },
        {
            icon: Clock,
            title: "Faster Time-to-Market",
            // A plain apostrophe: "&apos;" inside a JS string is not decoded and
            // showed up literally on the page.
            description: "Spring Boot's auto-configuration and our patterns accelerate development cycles.",
            gradient: "from-blue-500 via-indigo-500 to-purple-500",
            iconColor: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Award,
            title: "Production Proven",
            description: "enterprise applications deployed, handling billions of transactions daily.",
            gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
            iconColor: "var(--color-rose-500, #f43f5e)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-cyan-text)] transition-colors">24/7 Support</Link>,
            description: "Round-the-clock monitoring and support for mission-critical applications.",
            gradient: "from-cyan-500 via-sky-500 to-blue-500",
            iconColor: "var(--color-cyan-500, #06b6d4)",
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
                            background: "linear-gradient(135deg, rgba(109, 179, 63, 0.1), rgba(90, 154, 50, 0.1))",
                            border: "1px solid rgba(109, 179, 63, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Enterprise Java </span>{" "}
                        <span className="inline-block" style={{ color: "var(--accent-green-text)" }}>
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Trusted by enterprises worldwide for building robust, scalable applications.
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
