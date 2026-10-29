"use client";

import { Lightbulb, Pencil, Code, TestTube, Rocket, Wrench, Sparkles } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            icon: Lightbulb,
            title: "Discovery & Strategy (Week 1-2)",
            description: "Stakeholder interviews, competitor analysis, user persona development, and feature prioritization using MoSCoW method. Technical feasibility assessment with risk mitigation planning.",
            details: ["Business Analysis", "Market Research", "Risk Assessment", "Technical Roadmap", "Budget & Timeline Estimation"]
        },
        {
            icon: Pencil,
            title: <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:text-[var(--brand-purple-text)] transition-colors">UI/UX Design (Week 3-5)</Link>,
            description: "Low to high-fidelity wireframing, interactive prototypes in Figma/Adobe XD, user flow mapping, and accessibility audit. higher engagement through conversion-focused design backed by 10,000+ hours A/B testing.",
            details: ["Wireframing", "Interactive Prototypes", "Design System", "WCAG 2.2 AA Compliance", "Usability Testing (5+ users)"]
        },
        {
            icon: Code,
            title: "Development & Coding (Week 6-16)",
            description: <span>2-week agile sprints with backend API development, frontend implementation, third-party integrations, and DevOps CI/CD pipelines. 80%+ unit test coverage with <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)] transition-colors">code review for every PR</Link>.</span>,
            details: ["Sprint Planning", "Backend (Node.js/Python/.NET)", "Frontend (Swift/Kotlin/Flutter)", "API Integration", "Git Workflow (Gitflow)"]
        },
        {
            icon: TestTube,
            title: "Testing & QA (Week 17-19)",
            description: "Comprehensive testing: 80%+ unit coverage, integration testing for all APIs, UI automation of critical flows, manual testing across 100+ devices. a rigorous QA process.",
            details: ["Unit Testing (Jest/XCTest/JUnit)", "Integration Testing", "UI Automation (Appium/Detox)", "Performance Testing (Load/Stress)", "Security Testing (OWASP Top 10)"]
        },
        {
            icon: Rocket,
            title: "Deployment & Launch (Week 20-21)",
            description: <span>App Store and Play Store submission with compliance docs, beta testing via TestFlight/Internal Track, and <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)] transition-colors">App Store Optimization</Link>. Average increase in organic downloads with top 10 keyword rankings within 90 days.</span>,
            details: ["App Store Submission", "ASO (Keyword Research)", "Beta Testing", "Screenshot Optimization", "Pre-Launch Marketing"]
        },
        {
            icon: Wrench,
            title: "Maintenance & Support (Ongoing)",
            description: "24/7 support tiers (Bronze/Silver/Gold) with 24-48 hour bug fix SLA, OS compatibility updates, performance monitoring, security patches, and monthly analytics reporting.",
            details: ["Bug Fixes (24-72hr SLA)", "OS Updates", "Feature Enhancements", "Security Patches", "Analytics & Reporting"]
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                            borderColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                        <span style={{ color: "var(--foreground)" }}>6-Phase Agile Methodology</span> <span style={{ color: "var(--brand-purple-text)" }}>(Proven Across 300+ Projects)</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our battle-tested development process ensures reliable on-time delivery. Transparent, structured approach delivering measurable results.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="space-y-8 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="animate-fadeIn"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: "both",
                                    animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="grid lg:grid-cols-12 gap-8 items-start">
                                    {/* Left Side - Number and Icon */}
                                    <div className="lg:col-span-2 flex flex-col items-center">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer relative group"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                            }}
                                        >
                                            {/* Pulsing ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl animate-ping opacity-0 group-hover:opacity-75"
                                                style={{
                                                    background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                                }}
                                            />
                                            <Icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                        <div className="text-sm font-bold" style={{ color: "var(--brand-purple-text)" }}>
                                            Step {index + 1}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className="hidden lg:block w-1 h-20 mt-4 relative overflow-hidden"
                                                style={{ backgroundColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}
                                            >
                                                {/* Animated progress line */}
                                                <div
                                                    className="absolute top-0 left-0 w-full h-0 transition-all duration-1000"
                                                    style={{
                                                        background: "linear-gradient(180deg, var(--brand-purple), var(--brand-yellow))",
                                                        animation: `fillDown 2s ease-out ${index * 0.3}s forwards`
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Side - Content */}
                                    <div
                                        className="group/card lg:col-span-10 p-6 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer relative overflow-hidden"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)"
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))",
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 text-[var(--foreground)] group-hover/card:text-[var(--brand-purple-text)]">
                                                {step.title}
                                            </h3>
                                            <p className="text-base mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {step.description}
                                            </p>

                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {step.details.map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 text-sm transition-transform duration-300 hover:translate-x-1"
                                                        style={{
                                                            animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
                                                        }}
                                                    >
                                                        <span
                                                            className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/card:w-2 group-hover/card:h-2"
                                                            style={{ backgroundColor: "var(--brand-purple)" }}
                                                        />
                                                        <span style={{ color: "var(--secondary-text)" }}>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Decorative corner accent */}
                                        <div
                                            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover/card:opacity-20 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(225deg, var(--brand-purple), transparent)",
                                                borderTopRightRadius: "1rem",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes slideInRight {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    @keyframes fillDown {
                        from {
                            height: 0%;
                        }
                        to {
                            height: 100%;
                        }
                    }
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}</style>

                {/* Process Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-purple-text)" }}>
                            Agile
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Flexible methodology with regular sprints and iterations
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent-amber-text)" }}>
                            Transparent
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Regular updates, demos, and clear communication throughout
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <div className="text-4xl font-bold mb-2" style={{ color: "var(--brand-blue-text)" }}>
                            Quality
                        </div>
                        <p style={{ color: "var(--secondary-text)" }}>
                            Rigorous testing and quality assurance at every stage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}