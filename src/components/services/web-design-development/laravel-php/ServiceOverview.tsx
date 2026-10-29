"use client";

import {
    Code2,
    Database,
    Globe,
    Lock,
    RefreshCw,
    Rocket,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Code2,
            title: "Custom Laravel Development",
            description: "Tailor-made web applications built from scratch to meet your unique business requirements with clean, maintainable code.",
        },
        {
            icon: Rocket,
            title: "SaaS Application Development",
            description: <>Scalable multi-tenant <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">SaaS platforms</Link> with subscription management, role-based access, and robust billing systems.</>,
        },
        {
            icon: RefreshCw,
            title: "API Development & Integration",
            description: <>RESTful and GraphQL API development for <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">mobile apps</Link> and third-party integrations (Stripe, Salesforce, etc.).</>,
        },
        {
            icon: Database,
            title: "Legacy to Laravel Migration",
            description: "Modernize your aging PHP applications by migrating them to the latest Laravel version for better performance and security.",
        },
        {
            icon: Globe,
            title: "Enterprise Web Portals",
            description: "Complex B2B and B2C web portals with advanced workflows, data visualization, and reporting capabilities.",
        },
        {
            icon: Lock,
            title: "Performance & Security Audits",
            description: "Comprehensive audits to optimize your Laravel application's speed and fortify it against security vulnerabilities.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Laravel Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From MVP to enterprise-scale, we leverage the power of Laravel
                        to build digital products that drive growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card"
                                style={{ borderColor: "var(--border-color)" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255, 45, 32, 0.1), rgba(240, 83, 64, 0.1))",
                                    }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: "var(--accent-red-text)" }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{service.title}</h3>
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
