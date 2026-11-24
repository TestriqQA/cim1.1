import type { CSSProperties } from "react";
import {
    Paintbrush,
    ShoppingBag,
    Package,
    ArrowLeftRight,
    Gauge,
    ShieldCheck,
    LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Paintbrush,
            title: "WordPress Theme Development Services",
            description: "Custom WordPress website design and development for startups and global corporations alike. High speed, unique UI, and zero code bloat.",
            gradient: "from-purple-500 to-pink-500",
            accent: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: ShoppingBag,
            title: "WooCommerce Development",
            description: <>Specialized <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WooCommerce development</Link> and customization services. High conversion flows, secure payments, and smart inventory management.</>,
            gradient: "from-emerald-500 to-teal-500",
            accent: "var(--color-emerald-500, #10b981)",
        },
        {
            icon: Package,
            title: "WordPress Plugin Development Services",
            description: "We don't just install plugins; we engineer custom solutions for small business and large enterprises, focusing on core stability and niche features.",
            gradient: "from-orange-500 to-red-500",
            accent: "var(--color-orange-500, #f97316)",
        },
        {
            icon: ArrowLeftRight,
            title: "WordPress Migration",
            description: "Seamless WordPress migration services from other platforms. Zero data loss, full SEO retention, and 2026-ready architecture.",
            gradient: "from-blue-500 to-cyan-500",
            accent: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Gauge,
            title: "Performance & Speed",
            description: <>Elite <Link href="/blog/web-performance-optimization-speed" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress speed optimization services</Link>. Better Core Web Vitals, 90+ PageSpeed scores, and advanced caching strategies.</>,
            gradient: "from-yellow-500 to-amber-500",
            accent: "var(--color-yellow-500, #eab308)",
        },
        {
            icon: ShieldCheck,
            title: "Security & Hardening",
            description: <>24/7 <Link href="/blog/cybersecurity-small-businesses" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress security audit</Link> and hardening services. Malware protection, SSL encryption, and robust firewall setup.</>,
            gradient: "from-indigo-500 to-violet-500",
            accent: "var(--color-indigo-500, #6366f1)",
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
                                background: "linear-gradient(135deg, rgba(0, 115, 170, 0.1), rgba(0, 150, 214, 0.1))",
                                color: "var(--brand-blue-text)",
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
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            WordPress Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in delivering enterprise-grade, SEO-optimized, and lightning-fast WordPress solutions.
                        From core stability to advanced API integrations, we engineer websites that turn visitors into loyal customers.
                    </p>
                </div>

                {/* Six cards, all the same size: auto-rows-fr makes every row as tall
                    as the tallest card, and each card stretches to fill it. Hover is
                    kept simple: the border turns the card's own icon colour (as in
                    Why Choose Cinute) and the card lifts 4px (colour change only for
                    reduced-motion users). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
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