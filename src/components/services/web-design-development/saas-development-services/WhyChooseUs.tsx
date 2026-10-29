import { Code, Layers, Rocket, Shield, Users, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Code,
            title: "Clean, Maintainable Code",
            description: "SOLID principles, comprehensive unit and integration testing, and thorough documentation enable your engineering team to iterate, extend, and scale your custom SaaS platform development long-term. We follow industry-proven patterns that reduce technical debt and accelerate feature velocity. Real-world expertise: Our React & Next.js architecture reduced code complexity by 40% for a fintech SaaS client managing high-volume monthly transactions.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Layers,
            title: "Scalable Architecture for Cloud-Based SaaS Development",
            description: "Microservices architecture, serverless functions, or modular monolith - we select the optimal pattern for your current scale and future growth trajectory. Our scalable SaaS app development company approach ensures your infrastructure handles significant user growth without rewrites. Horizontal scaling with Kubernetes orchestration, database sharding for multi-tenant isolation, CDN edge caching for global performance, and event-driven architecture for decoupled services.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Rocket,
            title: "MVP to Enterprise Roadmap",
            description: "Launch fast with a lean MVP, then iteratively add features based on user feedback, analytics, and market validation. Our SaaS MVP development services follow agile methodologies with 2-week sprints, continuous delivery, and data-driven prioritization. Case study: Delivered production-ready MVPs in 6-8 weeks for 20+ startups, 70% of which secured Series A funding.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Shield,
            title: "Security-First Development",
            description: "OWASP Top 10 compliance, penetration testing, SOC 2 audit preparation, and security reviews built into every sprint. Your SaaS application development adheres to zero-trust architecture with role-based access control (RBAC) and encrypted data at rest and in transit. OAuth 2.0 / SAML authentication, SQL injection & XSS prevention, GDPR & CCPA compliance frameworks, and regular security audits & vulnerability scanning.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Users,
            title: "Product & Engineering Combined",
            description: "We don't just write code - we contribute to product strategy, UX decisions, technical architecture, and growth experiments. Our full-stack SaaS development teams include product managers, designers, and engineers collaborating to maximize business value.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: RefreshCw,
            title: "DevOps & CI/CD for Reliable SaaS Delivery",
            description: "Automated testing pipelines, infrastructure-as-code with Terraform, and zero-downtime deployments ensure your users experience high availability. Continuous integration via GitHub Actions, monitoring with Datadog/Sentry, and rollback capabilities protect your MRR growth.",
            color: "from-[#ee6500] to-[#fab900]",
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Users className="w-4 h-4" style={{ color: "#008ac1" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "#008ac1" }}>Product Teams</span> Choose Our SaaS Web Development Services
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We're not an agency that deploys and disappears-we're your technical co-founder, invested in your product's long-term success.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex items-center gap-4 p-6 bg-gradient-to-br ${reason.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold text-white relative z-10">
                                        {reason.title === "Clean, Maintainable Code" ? (
                                            <Link href="/services/web-design-development" className="hover:underline text-white">
                                                {reason.title}
                                            </Link>
                                        ) : reason.title.includes("Scalable Architecture") ? (
                                            <Link href="/services/web-design-development/nextjs-development-services" className="hover:underline text-white">
                                                {reason.title}
                                            </Link>
                                        ) : (
                                            reason.title
                                        )}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
