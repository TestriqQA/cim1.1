import type { CSSProperties } from "react";
import {
    Building2,
    Cloud,
    Server,
    Shield,
    ArrowRightLeft,
    Gauge,
    LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Building2,
            title: "Enterprise Applications",
            description: <><Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-green-text)] underline underline-offset-2 hover:underline">Large-scale business applications</Link> with complex workflows, multi-tenancy, and high availability.</>,
            gradient: "from-green-600 to-emerald-400",
            accent: "var(--color-green-600, #16a34a)",
        },
        {
            icon: Cloud,
            title: "Microservices Architecture",
            description: "Distributed systems with Spring Cloud, service discovery, API gateways, and circuit breakers.",
            gradient: "from-orange-500 to-amber-400",
            accent: "var(--color-orange-500, #f97316)",
        },
        {
            icon: Server,
            title: "RESTful & GraphQL APIs",
            description: <><Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-sky-text)] underline underline-offset-2 hover:underline">High-performance APIs</Link> with Spring Web, WebFlux for reactive programming, and comprehensive documentation.</>,
            gradient: "from-blue-500 to-cyan-400",
            accent: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Shield,
            title: "Security Implementation",
            description: "OAuth2, JWT, Spring Security, and enterprise-grade authentication and authorization systems.",
            gradient: "from-purple-500 to-violet-400",
            accent: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: ArrowRightLeft,
            title: "Legacy Modernization",
            description: "Migrate from Java EE, Struts, or older frameworks to modern Spring Boot architecture.",
            gradient: "from-rose-500 to-pink-400",
            accent: "var(--color-rose-500, #f43f5e)",
        },
        {
            icon: Gauge,
            title: "Performance Optimization",
            description: <>JVM tuning, <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-teal-text)] underline underline-offset-2 hover:underline">caching strategies</Link>, database optimization, and high-throughput processing.</>,
            gradient: "from-teal-500 to-green-400",
            accent: "var(--color-teal-500, #14b8a6)",
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
                                background: "linear-gradient(135deg, rgba(109, 179, 63, 0.1), rgba(90, 154, 50, 0.1))",
                                color: "var(--accent-green-text)",
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
                        Enterprise{" "}
                        <span style={{ color: "var(--accent-green-text)" }}>
                            Java Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From monolithic applications to microservices, we architect and build
                        Java solutions that power mission-critical operations.
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
