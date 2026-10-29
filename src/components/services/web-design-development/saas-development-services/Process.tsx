import { Lightbulb, Palette, Code, TestTube, Rocket, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Lightbulb,
            title: "Discovery & Product Strategy",
            description: "We collaborate with you to define the problem, understand target users, and create a feature roadmap that prioritizes business value and technical feasibility. Competitive analysis, user journey mapping, and technical specification documents ensure aligned expectations.",
            deliverables: ["Product requirements document (PRD)", "Technical architecture diagram", "Project roadmap"],
        },
        {
            number: "02",
            icon: Palette,
            title: "UX/UI Design & Prototyping",
            description: "Interactive Figma prototypes and user flows validate the experience before development begins, reducing costly changes later. We conduct usability testing with target users to optimize conversion funnels.",
            deliverables: ["Wireframes", "High-fidelity mockups", "Clickable prototypes", "Design system components"],
        },
        {
            number: "03",
            icon: Code,
            title: "Agile Development Sprints",
            description: "Two-week sprints with continuous delivery, regular demos, and the flexibility to adapt based on user feedback and changing market requirements. Daily standups, sprint retrospectives, and velocity tracking ensure predictable delivery.",
            deliverables: ["Jira/Linear tracking", "Regular demos", "Velocity tracking", "Continuous delivery"],
        },
        {
            number: "04",
            icon: TestTube,
            title: "Quality Assurance & Testing",
            description: "Comprehensive testing including unit tests (Jest, Pytest), integration tests, end-to-end tests (Playwright, Cypress), and security audits ensure production-ready quality. Automated testing coverage >80%.",
            deliverables: ["Unit & integration testing", "E2E browser automation", "Load testing", "Security penetration testing"],
        },
        {
            number: "05",
            icon: Rocket,
            title: "Deployment & Launch",
            description: "CI/CD pipelines via GitHub Actions, infrastructure provisioning with Terraform, and coordinated product launches with monitoring (Datadog), error tracking (Sentry), and alerting to catch issues before users report them.",
            deliverables: ["CI/CD pipelines", "Infrastructure provisioning", "Error tracking", "Alerting setup"],
        },
        {
            number: "06",
            icon: RefreshCw,
            title: "Iteration & Growth",
            description: "Post-launch support with feature enhancements, performance optimization (Core Web Vitals), and infrastructure scaling as your user base grows. Monthly performance reviews and quarterly roadmap planning.",
            deliverables: ["Feature enhancements", "Performance optimization", "Infrastructure scaling", "Security patches"],
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
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "#008ac1" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "#008ac1" }}>Product Development</span> Process
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        An iterative, agile methodology that balances speed-to-market with technical excellence and product-market fit validation.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
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
                                            background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                        }}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div
                                        className="text-5xl font-bold mb-2"
                                        style={{
                                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {step.title === "UX/UI Design & Prototyping" ? (
                                            <>
                                                <Link href="/services/web-design-development/branding-services" className="hover:underline">UX/UI Design</Link> & <Link href="/blog/category/ui-ux-design" className="hover:underline">Prototyping</Link>
                                            </>
                                        ) : step.title === "Quality Assurance & Testing" ? (
                                            <Link href="/services/seo-services/technical-seo-services" className="hover:underline">
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
                                                    backgroundColor: "color-mix(in srgb, #008ac1 10%, transparent)",
                                                    color: "var(--brand-blue-text)",
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
