import type { CSSProperties } from "react";
import {
    Headphones,
    LayoutGrid,
    Shapes,
    Server,
    Blocks,
    Plug,
    ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Shapes,
            title: "Custom Content Modeling",
            description: "Design flexible content types with custom fields, relations, and components tailored to your content strategy.",
            gradient: "from-violet-600 to-purple-400",
            accent: "var(--color-violet-600, #7c3aed)",
        },
        {
            icon: Server,
            title: "API Development",
            description: "Build powerful REST and GraphQL APIs with custom endpoints, middleware, and authentication strategies.",
            gradient: "from-purple-500 to-indigo-400",
            accent: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Blocks,
            title: "Plugin Development",
            description: "Extend Strapi's functionality with custom plugins or integrate from the marketplace ecosystem.",
            gradient: "from-indigo-500 to-violet-400",
            accent: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: Plug,
            title: "Frontend Integration",
            description: <><span className="text-inherit">Seamlessly connect Strapi with React, </span><Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-violet-text)] hover:underline underline underline-offset-2">Next.js</Link>, Vue, Nuxt, or any frontend framework of your choice.</>,
            gradient: "from-fuchsia-500 to-purple-400",
            accent: "var(--color-fuchsia-500, #d946ef)",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration Services",
            description: <><span className="text-inherit">Migrate from </span><Link href="/services/web-design-development/wordpress-development-services" className="text-[var(--accent-pink-text)] hover:underline underline underline-offset-2">WordPress</Link>, <Link href="/services/web-design-development/contentful-headless-cms" className="text-[var(--accent-pink-text)] hover:underline underline underline-offset-2">Contentful</Link>, or legacy CMS platforms to Strapi with zero data loss.</>,
            gradient: "from-pink-500 to-fuchsia-400",
            accent: "var(--color-pink-500, #ec4899)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-indigo-text)] transition-colors">Support & Maintenance</Link>,
            description: <><span className="text-inherit">Ongoing support with security updates, </span><Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-violet-text)] hover:underline underline underline-offset-2">performance optimization</Link>, and 24/7 technical assistance.</>,
            gradient: "from-violet-500 to-pink-400",
            accent: "var(--color-violet-500, #8b5cf6)",
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
                                background: "linear-gradient(135deg, rgba(73, 69, 255, 0.1), rgba(47, 45, 200, 0.1))",
                                color: "var(--accent-indigo-text)",
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
                        <span style={{ color: "var(--accent-indigo-text)" }}>
                            Strapi Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From headless architecture design to production deployment, we deliver end-to-end Strapi development services.
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
