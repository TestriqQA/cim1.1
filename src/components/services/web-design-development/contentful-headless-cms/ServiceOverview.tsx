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
            title: "Content Modeling",
            description: "Design flexible, reusable content types with structured fields, references, and rich text for omnichannel delivery.",
            gradient: "from-blue-600 to-cyan-400",
            accent: "var(--color-blue-600, #2563eb)",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-sky-text)] transition-colors">API Development</Link>,
            description: "Build custom integrations with Contentful's GraphQL and REST APIs, webhooks, and content management SDK.",
            gradient: "from-cyan-500 to-blue-400",
            accent: "var(--color-cyan-500, #06b6d4)",
        },
        {
            icon: Blocks,
            title: "App Framework Development",
            description: "Extend Contentful's web app with custom apps, field editors, and sidebar widgets using App Framework.",
            gradient: "from-blue-500 to-indigo-400",
            accent: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Plug,
            title: "Frontend Integration",
            description: <><span className="text-inherit">Connect Contentful with React, </span><Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 text-[var(--accent-indigo-text)] hover:underline">Next.js</Link>, Gatsby, Vue, or any frontend framework for blazing-fast sites.</>,
            gradient: "from-indigo-500 to-blue-400",
            accent: "var(--color-indigo-500, #6366f1)",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration Services",
            description: <><span className="text-inherit">Seamlessly migrate from </span><Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">legacy CMS platforms</Link> to Contentful with zero content loss and minimal downtime.</>,
            gradient: "from-sky-500 to-cyan-400",
            accent: "var(--color-sky-500, #0ea5e9)",
        },
        {
            icon: Headphones,
            title: <Link href="/services/additional-support-services" className="hover:text-[var(--accent-sky-text)] transition-colors">Support & Training</Link>,
            description: "Comprehensive support with editor training, documentation, and ongoing maintenance for your Contentful implementation.",
            gradient: "from-blue-500 to-sky-400",
            accent: "var(--color-blue-500, #3b82f6)",
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
                                background: "linear-gradient(135deg, rgba(2, 134, 255, 0.1), rgba(0, 89, 200, 0.1))",
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
                            Contentful Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From content architecture to production deployment, we deliver end-to-end Contentful implementation services.
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
