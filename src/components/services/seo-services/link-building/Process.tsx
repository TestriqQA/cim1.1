"use client";

import { Search, Users, Mail, FileText, CheckCircle, BarChart, Link2 } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const steps = [
        {
            id: 1,
            icon: Search,
            title: "Research & Analysis",
            description: "We analyze your backlink profile, study competitors, and identify high-value link opportunities in your niche.",
            details: [<Link href="/services/seo-services/technical-seo-services" className="hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Competitor backlink audit</Link>, "Gap analysis", "Industry opportunity mapping"],
        },
        {
            id: 2,
            icon: Users,
            title: "Prospecting",
            description: "Our team builds a curated list of relevant, high-authority websites that align with your brand and goals.",
            details: ["Domain authority vetting", "Relevance scoring", "Contact discovery"],
        },
        {
            id: 3,
            icon: Mail,
            title: "Personalized Outreach",
            description: "We craft personalized pitches and build genuine relationships with site owners and editors.",
            details: ["Custom email templates", "Relationship nurturing", "Follow-up sequences"],
        },
        {
            id: 4,
            icon: FileText,
            title: "Content Creation",
            description: "Our writers create compelling, valuable content that deserves to be linked and shared.",
            details: ["Guest post writing", "Resource creation", "Infographic design"],
        },
        {
            id: 5,
            icon: CheckCircle,
            title: "Link Placement",
            description: "We secure contextual, do-follow backlinks from approved, high-quality sources.",
            details: ["Editorial review", <Link href="/services/seo-services/on-page-seo-services" className="hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Anchor text optimization</Link>, "Contextual placement"],
        },
        {
            id: 6,
            icon: BarChart,
            title: "Reporting & Optimization",
            description: "Transparent monthly reports with detailed metrics, and continuous strategy refinement.",
            details: ["Link acquisition reports", "DA/DR tracking", "ROI analysis"],
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
                    style={{
                        background: `radial-gradient(circle, ${linkCyan}, transparent 70%)`,
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                        style={{
                            backgroundColor: `${linkCyan}15`,
                            borderColor: `${linkCyan}40`,
                        }}
                    >
                        <Link2 className="w-4 h-4" style={{ color: linkCyan }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Link Building <span style={{ color: "var(--accent-cyan-text)" }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our proven 6-step methodology for sustainable link acquisition.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{ backgroundColor: `${linkCyan}30` }}
                    />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, idx) => (
                            <div
                                key={step.id}
                                className={`relative lg:flex items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                                    <div
                                        className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        {/* Mobile Icon */}
                                        <div
                                            className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${linkCyan}15` }}
                                        >
                                            <step.icon className="w-6 h-6" style={{ color: linkCyan }} />
                                        </div>

                                        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {step.title}
                                        </h3>
                                        <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                            {step.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                                            {step.details.map((detail, dIdx) => (
                                                <span
                                                    key={dIdx}
                                                    className="px-3 py-1 rounded-full text-xs font-medium border"
                                                    style={{
                                                        borderColor: `${linkCyan}40`,
                                                        color: "var(--accent-cyan-text)",
                                                        backgroundColor: `${linkCyan}10`,
                                                    }}
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div
                                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center border-4"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: linkCyan,
                                    }}
                                >
                                    <step.icon className="w-6 h-6" style={{ color: linkCyan }} />
                                </div>

                                {/* Empty Space for Other Side */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
