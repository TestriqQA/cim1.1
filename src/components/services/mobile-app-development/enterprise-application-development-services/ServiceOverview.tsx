"use client";

import { useState } from "react";
import {
    Users,
    Briefcase,
    Link2,
    Workflow,
    Shield,
    BarChart3,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Users,
            title: "Employee Mobile Apps",
            description: "Supercharge internal productivity with custom apps for workforce management, HR self-service, and real-time company communications. Our solutions integrate seamlessly with existing Custom HR and HCM software.",
            shadowColor: "rgba(37, 99, 235, 0.4)",
        },
        {
            icon: Briefcase,
            title: "Field Service Applications",
            description: "Empower your field teams with offline-first capabilities, real-time asset management, and automated work order workflows. We build solutions that synchronize data instantly across your supply chain management (SCM) ecosystem.",
            shadowColor: "rgba(37, 99, 235, 0.4)",
        },
        {
            icon: Link2,
            title: "CRM & Sales Apps",
            description: "We build custom mobile overlays for Salesforce, HubSpot, and proprietary Custom ERP and CRM development for large businesses, ensuring your sales teams have data-driven insights at their fingertips.",
            shadowColor: "rgba(37, 99, 235, 0.4)",
        },
        {
            icon: Workflow,
            title: "Workflow & Approval Apps",
            description: "Eliminate bottlenecks with Real-time enterprise workflow automation tools. Digitize complex approval chains, expense reporting, and multi-layered business processes for secure mobile access anywhere.",
            shadowColor: "rgba(37, 99, 235, 0.4)",
        },
        {
            icon: Shield,
            title: "Secure Communications",
            description: "Protect your intellectual property with end-to-end encrypted messaging and Enterprise-grade mobile app security and MDM. We implement Identity and Access Management (IAM) and Single Sign-On (SSO).",
            shadowColor: "rgba(37, 99, 235, 0.4)",
        },
        {
            icon: BarChart3,
            title: "Executive Dashboards",
            description: "Transform raw data into actionable intelligence. Our Enterprise data analytics and BI dashboard development provides mobile-optimized KPIs for C-suite executives, powered by robust Microservices architecture.",
            shadowColor: "rgba(37, 99, 235, 0.4)",
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
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#2563eb",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#2563eb",
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "rgba(37, 99, 235, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Custom Enterprise Software Development for{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Scalable Growth
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in developing robust <Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Enterprise Web Applications</Link> and <Link href="/services/mobile-app-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">mobile solutions</Link> that solve complex workflow challenges and drive operational efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        backgroundColor: "rgba(37, 99, 235, 0.3)",
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#2563eb",
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                                            style={{
                                                backgroundColor: "#2563eb",
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#2563eb",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
