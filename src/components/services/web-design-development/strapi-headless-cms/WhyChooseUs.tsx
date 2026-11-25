import type { CSSProperties } from "react";
import {
    Trophy,
    GitFork,
    Terminal,
    Server,
    ShieldCheck,
    TrendingUp,
    Users,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: GitFork,
            title: "100% Open Source",
            description: "Full access to source code with no vendor lock-in. Self-host or use Strapi Cloud - the choice is yours.",
            gradient: "from-violet-600 via-purple-500 to-indigo-500",
            iconColor: "var(--color-violet-600, #7c3aed)",
        },
        {
            icon: Terminal,
            title: "Developer-First",
            description: "Built by developers for developers. TypeScript native, extensible architecture, and excellent DX.",
            gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
            iconColor: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Server,
            title: "API-First Design",
            description: "RESTful and GraphQL APIs auto-generated. Focus on content, not API boilerplate.",
            gradient: "from-indigo-500 via-violet-500 to-purple-500",
            iconColor: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: ShieldCheck,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-violet-text)] transition-colors">Enterprise Security</Link>,
            description: "Role-based access control, SSO integration, audit logs, and SOC 2 certified cloud hosting.",
            gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
            iconColor: "var(--color-fuchsia-500, #d946ef)",
        },
        {
            icon: TrendingUp,
            title: "Proven at Scale",
            description: "Battle-tested in production by startups and enterprises worldwide for mission-critical content delivery.",
            gradient: "from-pink-500 via-rose-500 to-red-500",
            iconColor: "var(--color-pink-500, #ec4899)",
        },
        {
            icon: Users,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-violet-text)] transition-colors">Community & Support</Link>,
            description: "Active Discord community, extensive documentation, and enterprise support options.",
            gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
            iconColor: "var(--color-violet-500, #8b5cf6)",
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
                            background: "linear-gradient(135deg, rgba(73, 69, 255, 0.1), rgba(47, 45, 200, 0.1))",
                            border: "1px solid rgba(73, 69, 255, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Strapi </span>{" "}
                        <span
                            className="inline-block" style={{ color: "var(--accent-indigo-text)" }}>
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        The leading open-source headless CMS, trusted by startups and enterprises alike.
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
