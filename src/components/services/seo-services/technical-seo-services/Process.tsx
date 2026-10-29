"use client";

import { Search, FileCode, Gauge, Shield, BarChart, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const steps = [
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:underline">Comprehensive Technical SEO Audit</Link>,
            description: "We check 200+ checkpoints, from 404 error and redirect audit to server response times.",
        },
        {
            icon: FileCode,
            title: "Crawl & Indexability Optimization",
            description: "Fixing robots.txt, XML sitemaps, and ensuring efficient search engine crawl.",
        },
        {
            icon: Gauge,
            title: "Speed & Core Web Vitals Fixes",
            description: <>Implementing <Link href="/blog/web-performance-optimization-speed" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">professional website speed optimization services</Link> to hit green scores across the board.</>,
        },
        {
            icon: Shield,
            title: "Security & SSL Deployment",
            description: "Ensuring robust HTTPS and SSL security for SEO across all subdomains.",
        },
        {
            icon: BarChart,
            title: <Link href="/blog/mastering-seo-organic-growth" className="hover:underline">Schema Markup Implementation Services</Link>,
            description: "Deploying Structured data and JSON-LD to secure rich snippets and AI Overview visibility.",
        },
        {
            icon: RefreshCw,
            title: "Ongoing Technical Monitoring",
            description: "Regular audits to ensure new deployments don't introduce technical debt.",
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        6 Steps to Flawless <span style={{ color: "var(--accent-violet-text)" }}>Technical Performance</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our systematic approach ensures every technical bottleneck is identified and resolved, delivering rigorously tested implementations for our clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Step Number */}
                                <div
                                    className="absolute top-8 right-8 text-4xl font-bold transition-colors"
                                    style={{ color: "var(--accent-violet-text)" }}
                                >
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: techPurple,
                                        color: "white"
                                    }}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
