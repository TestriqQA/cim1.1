"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
    Globe,
    Layers,
    Server,
    Zap,
    Smartphone,
    Link2,
    Sparkles,
    Check,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    // The hovered (or tapped) card; its whole row opens so the row stays even.
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            setColumns(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Globe,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-[#339933] transition-colors">REST API Development</Link>,
            description:
                "Standard RESTful APIs with clean endpoints, proper HTTP methods, and comprehensive documentation.",
            features: [
                "OpenAPI/Swagger Docs",
                "Versioning Strategies",
                "Rate Limiting",
                "Caching Layers",
            ],
            accentColor: "#339933",
            type: "core",
        },
        {
            icon: Layers,
            title: "GraphQL APIs",
            description:
                "Flexible, query-based APIs that let clients request exactly the data they need.",
            features: [
                "Schema Design",
                "Resolvers & Mutations",
                "Subscriptions",
                "Apollo/GraphQL Yoga",
            ],
            accentColor: "#68a063",
            type: "modern",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[#339933] transition-colors">Microservices</Link>,
            description:
                "Distributed systems with independent services that scale and deploy separately.",
            features: [
                "Service Discovery",
                "API Gateway",
                "Message Queues",
                "Container Orchestration",
            ],
            accentColor: "#215732",
            type: "architecture",
        },
        {
            icon: Zap,
            title: "Real-time Applications",
            description:
                "Live updates, chat systems, and streaming data with WebSockets and Server-Sent Events.",
            features: [
                "WebSocket Servers",
                "Socket.io Integration",
                "Pub/Sub Systems",
                "Live Notifications",
            ],
            accentColor: "#339933",
            type: "realtime",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[#339933] transition-colors">Backend for Mobile</Link>,
            description:
                "APIs optimized for iOS and Android applications with push notifications and offline sync.",
            features: [
                "Mobile-First APIs",
                "Push Notifications",
                "Offline Sync",
                "App Analytics",
            ],
            accentColor: "#68a063",
            type: "mobile",
        },
        {
            icon: Link2,
            title: "Enterprise Integrations",
            description:
                "Connect your systems with third-party APIs, ERPs, CRMs, and payment gateways.",
            features: [
                "API Aggregation",
                "Data Transformation",
                "Webhook Handling",
                "Legacy System Bridges",
            ],
            accentColor: "#215732",
            type: "integration",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" aria-hidden="true" style={{ color: "#339933" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                            Backend Solutions
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--accent-green-text)" }}>
                            What We
                        </span>{" "}
                        Build
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From simple APIs to complex distributed systems,
                        we architect backends that grow with your business.
                    </p>
                </div>

                {/* Hovering a card opens the feature lists of its whole row (so the row
                    stays even) but highlights only that card, with a border in its own
                    icon colour. The row stays open while the mouse moves between its
                    cards; it closes when the mouse leaves the grid. Lists open to their
                    real height (grid rows 0fr to 1fr) with one 400ms ease. On touch,
                    tap toggles. */}
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    onMouseLeave={() => {
                        if (window.matchMedia("(hover: hover)").matches) {
                            setActiveSolution(null);
                        }
                    }}
                >
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isOpen = activeSolution !== null && Math.floor(activeSolution / columns) === Math.floor(idx / columns);
                        const isHighlighted = activeSolution === idx;

                        return (
                            <div
                                key={idx}
                                className={`relative p-6 md:p-8 rounded-3xl border transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[var(--card-accent)]" : "border-[var(--border-color)]"}`}
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": solution.accentColor } as CSSProperties}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Type Badge */}
                                <div
                                    className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium capitalize"
                                    style={{
                                        backgroundColor: `${solution.accentColor}15`,
                                        color: "var(--accent-green-text)",
                                    }}
                                >
                                    {solution.type}
                                </div>

                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                        style={{ background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}cc)` }}
                                    >
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {solution.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features list: opens to its real height */}
                                <div
                                    className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        {/* The gap above the list lives inside the part that
                                            collapses, so a closed card has no empty space. */}
                                        <div className="pt-6 space-y-3">
                                            {solution.features.map((feature, fidx) => (
                                                <div key={fidx} className="flex items-start gap-3">
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: `${solution.accentColor}20` }}
                                                    >
                                                        {/* The text token, not solution.accentColor: #215732
                                                            is 2.0:1 on the dark card, under the 3:1 an
                                                            icon needs. */}
                                                        <Check
                                                            aria-hidden="true"
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: "var(--accent-green-text)" }}
                                                        />
                                                    </div>
                                                    <span className="text-base font-medium" style={{ color: "var(--foreground)" }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
