import type { CSSProperties } from "react";
import {
    Headphones,
    LayoutGrid,
    Code2,
    Blocks,
    ArrowRightLeft,
    Network,
    Plug,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Code2,
            title: "Custom Drupal Development",
            description: "Bespoke Drupal websites tailored to your specific business needs with custom themes and functionality.",
            gradient: "from-blue-600 to-cyan-400",
            accent: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Blocks,
            title: "Module & Theme Development",
            description: "Custom modules for unique functionality and beautifully designed themes that match your brand identity.",
            gradient: "from-sky-500 to-blue-400",
            accent: "var(--color-sky-500, #0ea5e9)",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration & Upgrades",
            description: "Seamless migration from Drupal 7/8/9 to Drupal 10/11 or from other CMS platforms to Drupal.",
            gradient: "from-indigo-500 to-blue-400",
            accent: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: Network,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-sky-text)] transition-colors">Multisite Management</Link>,
            description: "Centralized management of multiple Drupal sites from a single codebase with consistent branding.",
            gradient: "from-purple-500 to-indigo-400",
            accent: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Plug,
            title: "API & Integration",
            description: "Connect Drupal with CRM, ERP, marketing tools, and third-party services through REST and GraphQL APIs.",
            gradient: "from-teal-500 to-cyan-400",
            accent: "var(--color-teal-500, #14b8a6)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-sky-text)] transition-colors">Support & Maintenance</Link>,
            description: <><span className="text-inherit">Ongoing security updates, </span><Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-teal-text)] hover:underline underline underline-offset-2">performance optimization</Link>, and 24/7 technical support for your Drupal site.</>,
            gradient: "from-emerald-500 to-teal-400",
            accent: "var(--color-emerald-500, #10b981)",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4">
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold leading-none"
                            style={{
                                background: "linear-gradient(135deg, rgba(6, 120, 190, 0.1), rgba(5, 74, 145, 0.1))",
                                color: "var(--accent-sky-text)",
                            }}
                        >
                            <LayoutGrid aria-hidden="true" className="flex-shrink-0" style={{ width: "1.15em", height: "1.15em" }} />
                            Our Service
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive{" "}
                        <span style={{ color: "var(--accent-sky-text)" }}>
                            Drupal Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From custom development to ongoing support, we deliver end-to-end
                        Drupal services for ambitious digital projects.
                    </p>
                </div>

                {/* Cards side by side share one size (phones: each fits its content).
                    Hover: the border turns the card's own icon colour and the card
                    lifts 4px (colour change only for reduced-motion users). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-3xl border border-[var(--border-color)] bg-card transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ "--card-accent": service.accent } as CSSProperties}
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
