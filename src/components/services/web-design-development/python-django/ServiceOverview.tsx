import type { CSSProperties } from "react";
import {
    Code2,
    Server,
    FileJson,
    ShoppingCart,
    ArrowRightLeft,
    Gauge,
    LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Code2,
            title: "Custom Django Applications",
            description: <>Bespoke web applications tailored to your business logic, from startups to <Link href="/services/web-design-development/business-corporate" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">enterprise-grade solutions</Link>.</>,
            gradient: "from-blue-600 to-blue-400",
            accent: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Server,
            title: "API Development",
            description: "RESTful and GraphQL APIs using Django REST Framework and FastAPI for seamless integrations.",
            gradient: "from-amber-500 to-yellow-400",
            accent: "var(--color-amber-500, #f59e0b)",
        },
        {
            icon: FileJson,
            title: "Django CMS Solutions",
            description: <><Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">Content management systems</Link> with Wagtail or Django CMS for flexible content editing workflows.</>,
            gradient: "from-teal-500 to-cyan-400",
            accent: "var(--color-teal-500, #14b8a6)",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce with Django",
            description: <>Custom <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">online stores</Link> and marketplaces using Django Oscar or bespoke e-commerce solutions.</>,
            gradient: "from-purple-500 to-pink-400",
            accent: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: ArrowRightLeft,
            title: "Legacy Migration",
            description: "Migrate your outdated systems to modern Django architecture with zero data loss.",
            gradient: "from-orange-500 to-red-400",
            accent: "var(--color-orange-500, #f97316)",
        },
        {
            icon: Gauge,
            title: "Performance & Scaling",
            description: <>Optimize and scale with Celery, Redis, <Link href="/blog/web-performance-optimization-speed" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">caching strategies</Link>, and database optimization.</>,
            gradient: "from-green-500 to-emerald-400",
            accent: "var(--color-green-500, #22c55e)",
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
                                background: "linear-gradient(135deg, rgba(48, 105, 152, 0.1), rgba(75, 139, 190, 0.1))",
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
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Python Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From rapid prototypes to enterprise applications, we harness Python&apos;s power
                        to build solutions that scale.
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
