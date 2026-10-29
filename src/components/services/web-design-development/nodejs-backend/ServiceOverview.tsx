"use client";

import Link from "next/link";
import { Code2, Database, Server, Zap, Shield, Cloud } from "lucide-react";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: Code2,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-[#339933] transition-colors">Custom API Development</Link>,
            description: "RESTful and GraphQL APIs designed for performance, security, and seamless integration.",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[#339933] transition-colors">Microservices Architecture</Link>,
            description: "Scalable, independent services that can be deployed, updated, and scaled individually.",
        },
        {
            icon: Database,
            title: "Database Design",
            description: "SQL, NoSQL, and caching strategies optimized for your data patterns and query needs.",
        },
        {
            icon: Zap,
            title: <Link href="/services/mobile-app-development" className="hover:text-[#339933] transition-colors">Real-time Systems</Link>,
            description: "WebSockets, Server-Sent Events, and pub/sub patterns for live data and notifications.",
        },
        {
            icon: Shield,
            title: "Authentication & Security",
            description: "OAuth 2.0, JWT, encryption, and security best practices to protect your data.",
        },
        {
            icon: Cloud,
            title: "Cloud Integration",
            description: "AWS, Azure, and GCP deployment with auto-scaling, load balancing, and monitoring.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #339933 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Server className="w-4 h-4" style={{ color: "#339933" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Why Backend Matters
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Power Your Apps With{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #339933, #68a063)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Robust Backend
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Your backend is the engine of your application. We build systems that
                        handle millions of requests with speed, security, and reliability.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: "linear-gradient(135deg, #339933, #215732)",
                                        boxShadow: "0 4px 16px rgba(51, 153, 51, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
