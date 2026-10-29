import { Search, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Stakeholder Alignment",
            description: "We begin with executive interviews and stakeholder workshops to understand your organizational goals, brand positioning, and the key messages that need to resonate with different audiences.",
            deliverables: ["Stakeholder interviews", "Brand audit", "Competitive analysis", "Requirements document"],
        },
        {
            number: "02",
            icon: Palette,
            title: "Brand-Aligned Design",
            description: "Our designers create visual concepts that extend your existing brand identity into digital, ensuring consistency across all touchpoints while elevating the user experience.",
            deliverables: ["Mood boards", "Wireframes", "Visual mockups", "Brand guidelines integration"],
        },
        {
            number: "03",
            icon: Code,
            title: "Enterprise Development",
            description: "We build using enterprise-grade technologies with clean, maintainable code that scales with your organization and integrates with existing business systems.",
            deliverables: ["CMS integration", "API connections", "Security implementation", "Performance optimization"],
        },
        {
            number: "04",
            icon: TestTube,
            title: "Quality Assurance & Compliance",
            description: "Rigorous testing across devices and browsers, accessibility audits, security penetration testing, and compliance verification before any stakeholder review.",
            deliverables: ["Cross-browser testing", "WCAG audit", "Security scan", "Performance benchmarks"],
        },
        {
            number: "05",
            icon: Rocket,
            title: "Controlled Launch",
            description: "Coordinated deployment with your marketing and communications teams, including staged rollouts for global organizations and comprehensive training for content editors.",
            deliverables: ["Deployment plan", "CDN configuration", "SEO handoff", "Editor training"],
        },
        {
            number: "06",
            icon: Headphones,
            title: "Ongoing Partnership",
            description: "Post-launch support with dedicated account management, regular performance reviews, content updates, and strategic enhancements as your business evolves.",
            deliverables: ["SLA agreement", "Monthly reports", "Quarterly reviews", "Enhancement roadmap"],
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
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(249, 115, 22, 0.05)",
                            borderColor: "rgba(249, 115, 22, 0.2)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-orange-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "var(--accent-orange-text)" }}>Corporate Development</span> Process
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        A structured methodology designed for enterprise requirements-with stakeholder checkpoints, governance alignment, and executive-level reporting at every stage.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #f97316, #ea580c)",
                        }}
                    />
                </div>

                {/* Process Steps */}
                <div className="space-y-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                            >
                                {/* Step Number & Icon */}
                                <div className="lg:w-1/3 flex flex-col items-center text-center">
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                                        style={{
                                            background: "linear-gradient(135deg, #f97316, #ea580c)",
                                        }}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div
                                        className="text-5xl font-bold mb-2"
                                        style={{
                                            background: "linear-gradient(90deg, #f97316, #ea580c)",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {step.title === "Brand-Aligned Design" ? (
                                            <Link href="/services/web-design-development/branding-services" className="hover:underline">
                                                {step.title}
                                            </Link>
                                        ) : step.title === "Quality Assurance & Compliance" ? (
                                            <Link href="/services/seo-services/technical-seo-services" className="hover:underline">
                                                {step.title}
                                            </Link>
                                        ) : step.title === "Controlled Launch" ? (
                                            <Link href="/services/seo-services" className="hover:underline">
                                                {step.title}
                                            </Link>
                                        ) : (
                                            step.title
                                        )}
                                    </h3>
                                </div>

                                {/* Step Content */}
                                <div
                                    className="lg:w-2/3 p-8 rounded-2xl border"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                                        {step.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.deliverables.map((deliverable, didx) => (
                                            <span
                                                key={didx}
                                                className="px-4 py-2 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: "color-mix(in srgb, #f97316 10%, transparent)",
                                                    color: "var(--accent-orange-text)",
                                                }}
                                            >
                                                {deliverable}
                                            </span>
                                        ))}
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
