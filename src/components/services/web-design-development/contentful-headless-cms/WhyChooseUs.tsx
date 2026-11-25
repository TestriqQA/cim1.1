import type { CSSProperties } from "react";
import {
    Globe,
    Headphones,
    Trophy,
    Blocks,
    Activity,
    ShieldCheck,
    Terminal,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Blocks,
            title: "Composable Architecture",
            description: <><span className="text-inherit">Build modular, </span><Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">reusable content</Link> structures that adapt to any channel or experience without refactoring.</>,
            gradient: "from-blue-600 via-cyan-500 to-sky-500",
            iconColor: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Activity,
            title: "High Availability",
            description: "Enterprise-grade reliability with global CDN, automatic failover, and high availability.",
            gradient: "from-cyan-500 via-blue-500 to-indigo-500",
            iconColor: "var(--color-cyan-500, #06b6d4)",
        },
        {
            icon: Globe,
            title: "Global CDN Delivery",
            description: <><span className="text-inherit">Content delivered at the edge with </span><Link href="/blog/web-performance-optimization-speed" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">99ms average response times</Link> across 200+ points of presence worldwide.</>,
            gradient: "from-sky-500 via-blue-500 to-cyan-500",
            iconColor: "var(--color-sky-500, #0ea5e9)",
        },
        {
            icon: ShieldCheck,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-indigo-text)] transition-colors">Enterprise Security</Link>,
            description: "SOC 2 Type II certified, GDPR compliant, with SSO, role-based access, and comprehensive audit logs.",
            gradient: "from-indigo-500 via-blue-500 to-violet-500",
            iconColor: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: Terminal,
            title: "Developer Experience",
            description: "Robust APIs, comprehensive SDKs, and extensive documentation for rapid development.",
            gradient: "from-blue-500 via-sky-500 to-cyan-500",
            iconColor: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-teal-text)] transition-colors">Premium Support</Link>,
            description: "Dedicated success managers, 24/7 support, and professional services for enterprise customers.",
            gradient: "from-cyan-500 via-teal-500 to-emerald-500",
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
                            background: "linear-gradient(135deg, rgba(2, 134, 255, 0.1), rgba(0, 89, 200, 0.1))",
                            border: "1px solid rgba(2, 134, 255, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Contentful </span>{" "}
                        <span
                            className="inline-block" style={{ color: "var(--accent-sky-text)" }}>
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        The enterprise composable content platform powering digital experiences at scale.
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
