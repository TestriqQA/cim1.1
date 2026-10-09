"use client";

import { Code2, Layers, Rocket, LayoutDashboard, CreditCard, Puzzle, Zap, TrendingUp, Star, ArrowRight, Sparkles, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const solutions = [
        {
            icon: Code2,
            title: "Custom Web Applications",
            description: "Bespoke SaaS web app development solutions built from scratch to address unique business challenges that off-the-shelf software can't solve. From workflow automation to legacy system modernization.",
            features: ["Custom business logic & workflow engines", "Third-party API integrations", "Legacy system modernization", "Proprietary algorithm implementation"],
            color: "from-[#008ac1] to-[#00b5ca]",
            accentColor: "#008ac1",
            badge: "Most Flexible",
            timeline: "3-6 months",
            techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
            link: "/services/web-design-development",
        },
        {
            icon: Layers,
            title: "SaaS Platforms (Multi-Tenant)",
            description: "Build production-ready SaaS platforms with multi-tenant architecture, subscription billing, user provisioning, and white-label capabilities. Designed for recurring revenue models.",
            features: ["Database-per-tenant or schema isolation", "Subscription billing integration", "User provisioning (SSO, SCIM)", "White-label custom branding"],
            color: "from-[#bc3feb] to-[#fab900]",
            accentColor: "#bc3feb",
            badge: "Scalable",
            timeline: "6-12 months",
            techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
        },
        {
            icon: Rocket,
            title: "SaaS MVP Development",
            description: "Rapid prototyping and MVP development to validate your idea with real users before committing to full-scale engineering. Launch in 4-8 weeks with core features only.",
            features: ["Core value proposition features", "User authentication & onboarding", "Basic analytics & instrumentation", "Iteration-ready architecture"],
            color: "from-[#fab900] to-[#ee6500]",
            accentColor: "#fab900",
            badge: "Fastest Launch",
            timeline: "4-8 weeks",
            techStack: ["Vite", "Supabase", "Vercel", "Stripe"],
        },
        {
            icon: LayoutDashboard,
            title: "Dashboards & Admin Panels",
            description: "Data visualization dashboards, admin interfaces, and internal tools that empower operations teams to manage users, analyze metrics, and configure systems without engineering support.",
            features: ["Real-time data visualization", "Custom reports & data exports", "Role-based access control (RBAC)", "Audit logs & activity tracking"],
            color: "from-[#00efd6] to-[#00b5ca]",
            accentColor: "#00efd6",
            badge: "Data-Driven",
            timeline: "2-4 months",
            techStack: ["React Admin", "Recharts", "Node.js", "TimescaleDB"],
            link: "/services/web-design-development/nextjs-development-services",
        },
        {
            icon: CreditCard,
            title: "Billing & Subscription Systems",
            description: "Complex billing logic including usage-based pricing, tiered plans, free trials, annual contracts, and enterprise custom pricing. Automated invoicing and revenue analytics.",
            features: ["Stripe/Paddle gateway integration", "Usage tracking & metered billing", "Automated invoice generation", "Churn reduction & dunning"],
            color: "from-[#008ac1] to-[#bc3feb]",
            accentColor: "#008ac1",
            badge: "Revenue-Ready",
            timeline: "2-3 months",
            techStack: ["Stripe Billing", "Chargebee", "Node.js webhooks"],
            link: "/services/web-design-development/ecommerce-development-company",
        },
        {
            icon: Puzzle,
            title: "API-Driven Applications",
            description: <>Backend services and RESTful/GraphQL APIs that power <Link href="/blog/category/mobile-apps" className="underline text-[var(--brand-blue-text)]">mobile apps</Link>, third-party integrations, and headless frontend experiences. SDK generation and comprehensive documentation.</>,
            features: ["REST & GraphQL API development", "Webhook systems for events", "SDK generation (JS, Python)", "OpenAPI/Swagger documentation"],
            color: "from-[#ee6500] to-[#fab900]",
            accentColor: "#ee6500",
            badge: "Integration-First",
            timeline: "2-4 months",
            techStack: ["Node.js", "FastAPI", "GraphQL", "Kong Gateway"],
            link: "/services/web-design-development/nodejs-backend",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Meshes */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#008ac1]/10 via-[#bc3feb]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-[#fab900]/10 via-[#ee6500]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
                        linear-gradient(var(--foreground) 1px, transparent 1px),
                        linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                            borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                            color: "var(--brand-blue-text)",
                        }}
                    >
                        <Code2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Solution Types</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#008ac1" }}>Web Application Solutions</span> We Build
                    </h2>

                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From quick MVPs to complex enterprise platforms, we build web applications that solve real problems and scale with your business.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 -rotate-3"
                                    }`}
                                style={{
                                    transitionDelay: `${400 + idx * 80}ms`,
                                }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card Container with 3D Effect */}
                                <div
                                    className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"
                                        }`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        border: `2px solid ${isHovered ? solution.accentColor + '40' : 'var(--border-color)'}`,
                                        transform: isHovered ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Top Gradient Bar */}
                                    <div
                                        className={`h-2 bg-gradient-to-r ${solution.color} transition-all duration-500`}
                                        style={{
                                            transform: isHovered ? "scaleY(1.5)" : "scaleY(1)",
                                        }}
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div
                                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                                                }`}
                                            style={{
                                                backgroundColor: `${solution.accentColor}20`,
                                                color: solution.accentColor,
                                                border: `1px solid ${solution.accentColor}40`,
                                            }}
                                        >
                                            {solution.badge}
                                        </div>
                                    </div>

                                    {/* Icon Section */}
                                    <div className="p-8 pb-4">
                                        <div className="relative inline-block mb-6">
                                            {/* Outer Ring */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl transition-all duration-700 ${isHovered ? "scale-125 rotate-180 opacity-100" : "scale-100 rotate-0 opacity-0"
                                                    }`}
                                                style={{
                                                    border: `2px dashed ${solution.accentColor}40`,
                                                }}
                                            />

                                            {/* Icon Container */}
                                            <div
                                                className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
                                                    }`}
                                                style={{
                                                    background: `linear-gradient(135deg, ${solution.accentColor}25, ${solution.accentColor}05)`,
                                                    boxShadow: isHovered ? `0 0 30px ${solution.accentColor}40` : "none",
                                                }}
                                            >
                                                <Icon
                                                    className="w-10 h-10 transition-transform duration-500 group-hover:scale-110"
                                                    style={{ color: solution.accentColor }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-2xl font-bold mb-3 transition-colors duration-300"
                                            style={{
                                                color: isHovered ? solution.accentColor : "var(--foreground)"
                                            }}
                                        >
                                            {solution.link ? (
                                                <Link href={solution.link} className="hover:underline">
                                                    {solution.title}
                                                </Link>
                                            ) : (
                                                solution.title
                                            )}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed mb-6"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Timeline Badge */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <Clock className="w-4 h-4" style={{ color: solution.accentColor }} />
                                            <span className="text-xs font-semibold" style={{ color: solution.accentColor }}>
                                                {solution.timeline}
                                            </span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-6">
                                            {solution.features.map((feature, fidx) => (
                                                <li
                                                    key={fidx}
                                                    className="flex items-start gap-3 transition-all duration-300"
                                                    style={{
                                                        transform: isHovered ? `translateX(${fidx * 2}px)` : "translateX(0)",
                                                        transitionDelay: `${fidx * 50}ms`,
                                                    }}
                                                >
                                                    <div
                                                        className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300"
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}20`,
                                                            transform: isHovered ? "rotate(45deg)" : "rotate(0)",
                                                        }}
                                                    >
                                                        <div
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--secondary-text)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                                Tech Stack
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {solution.techStack.map((tech, tidx) => (
                                                    <div
                                                        key={tidx}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-80"
                                                            }`}
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}10`,
                                                            color: solution.accentColor,
                                                            border: `1px solid ${solution.accentColor}20`,
                                                            transitionDelay: `${tidx * 50}ms`,
                                                        }}
                                                    >
                                                        {tech}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bottom Shine Effect */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(to top, ${solution.accentColor}10, transparent)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Floating Particles */}
                                    {isHovered && (
                                        <>
                                            <Sparkles
                                                className="absolute top-20 right-8 w-5 h-5 animate-pulse"
                                                style={{ color: solution.accentColor, opacity: 0.4 }}
                                            />
                                            <Sparkles
                                                className="absolute bottom-32 left-8 w-4 h-4 animate-pulse"
                                                style={{ color: solution.accentColor, opacity: 0.3, animationDelay: "0.5s" }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div
                        className="relative overflow-hidden p-10 md:p-12 rounded-3xl"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "2px solid var(--border-color)",
                        }}
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[#008ac1] via-[#bc3feb] to-[#fab900]"
                                style={{
                                    backgroundSize: "400% 400%",
                                    animation: "gradient-move 15s ease infinite",
                                }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left max-w-2xl">
                                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                                    <TrendingUp className="w-6 h-6" style={{ color: "#008ac1" }} />
                                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-blue-text)" }}>
                                        Ready to Build?
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    Let's Turn Your Vision Into Reality
                                </h3>
                                <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                    Schedule a consultation to discuss your project requirements and get a tailored solution proposal.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap"
                                style={{
                                    background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>
                        </div>

                        {/* Corner Accents */}
                        <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[#008ac1] opacity-20" />
                        <Sparkles className="absolute bottom-6 left-6 w-6 h-6 text-[#bc3feb] opacity-20" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-slide {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}