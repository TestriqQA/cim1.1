"use client";

import { useState, useEffect } from "react";
import {
    Building,
    GraduationCap,
    HeartPulse,
    Heart,
    Newspaper,
    Building2,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Building,
            title: "Government Portals",
            description: "Secure, accessible, and compliant digital platforms for federal, state, and local government agencies.",
            features: [
                "WCAG accessibility",
                "FedRAMP compliance",
                "Multilingual support",
                "Document management",
            ],
            gradient: "from-[#0678BE] to-[#054A91]",
        },
        {
            icon: GraduationCap,
            title: <Link href="/services/web-design-development/edtech-lms" className="hover:text-[var(--accent-sky-text)] transition-colors">Higher Education</Link>,
            description: "University websites, student portals, and learning management systems for academic institutions.",
            features: [
                "Student portals",
                "Course catalogs",
                "Alumni networks",
                "Research repositories",
            ],
            gradient: "from-[#29A8DF] to-[#0678BE]",
        },
        {
            icon: HeartPulse,
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-sky-text)] transition-colors">Healthcare Organizations</Link>,
            description: "HIPAA-compliant healthcare portals with patient engagement and provider directories.",
            features: [
                "HIPAA compliance",
                "Patient portals",
                "Provider directories",
                "Appointment booking",
            ],
            gradient: "from-[#0678BE] to-[#29A8DF]",
        },
        {
            icon: Heart,
            title: "Non-Profit & NGOs",
            description: "Engaging websites for fundraising, volunteer management, and cause awareness campaigns.",
            features: [
                "Donation integration",
                "Volunteer management",
                "Event calendars",
                "Impact storytelling",
            ],
            gradient: "from-[#054A91] to-[#0678BE]",
        },
        {
            icon: Newspaper,
            title: <Link href="/services/web-design-development/entertainment-media" className="hover:text-[var(--accent-sky-text)] transition-colors">Media & Publishing</Link>,
            description: "High-traffic content platforms with editorial workflows and subscription management.",
            features: [
                "Editorial workflows",
                "Paywall integration",
                "Content syndication",
                "Archive management",
            ],
            gradient: "from-[#0678BE] to-[#054A91]",
        },
        {
            icon: Building2,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-sky-text)] transition-colors">Enterprise Corporations</Link>,
            description: "Large-scale corporate websites and intranets with complex content hierarchies.",
            features: [
                "Multisite management",
                "Brand consistency",
                "Employee intranets",
                "Global deployment",
            ],
            gradient: "from-[#29A8DF] to-[#054A91]",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Industry</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0678BE, #29A8DF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Solutions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Drupal powers mission-critical websites for organizations that demand security, scalability, and accessibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#0678BE] ring-offset-2" : "hover:border-[#0678BE]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #0678BE, #29A8DF)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        background: isActive
                                            ? `linear-gradient(135deg, #0678BE, #054A91)`
                                            : "rgba(6, 120, 190, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--accent-sky-text)]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-sky-text)]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[var(--accent-sky-text)]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
