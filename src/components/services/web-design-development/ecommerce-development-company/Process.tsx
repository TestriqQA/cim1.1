import { Search, Palette, Code, Plug, TestTube, Rocket, BarChart3, CheckCircle, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            anchor: "step-strategy",
            number: "01",
            icon: Search,
            title: "Commerce Strategy & Discovery",
            description: "We audit your current setup and define KPIs, mapping out the full Customer Journey.",
            details: ["Market analysis", "Customer journey mapping", "Conversion funnel design", "Tech stack selection"],
        },
        {
            anchor: "step-design",
            number: "02",
            icon: Palette,
            title: "UX Design & Product Merchandising",
            description: "Creating intuitive Digital Storefront designs that align with your brand identity.",
            details: ["Product page wireframes", "Collection layouts", "Checkout flow design", "Mobile optimization"],
        },
        {
            anchor: "step-development",
            number: "03",
            icon: Code,
            title: "Platform Development",
            description: "Coding your store on Shopify, Magento, BigCommerce, or custom stacks with clean, standards-compliant code.",
            details: ["Platform setup", "Payment integration", "Shipping configuration", "Inventory sync"],
        },
        {
            anchor: "step-integration",
            number: "04",
            icon: Plug,
            title: "Integration & Migration",
            description: "Seamless Ecommerce inventory management solutions and Ecommerce payment gateway integration.",
            details: ["Inventory Management", "Payment Gateway", "Data Migration", "CRM Integration"],
        },
        {
            anchor: "step-qa",
            number: "05",
            icon: TestTube,
            title: "Testing & Quality Assurance",
            description: "Rigorous testing for bugs, Ecommerce ADA compliance and accessibility, and security vulnerabilities, ensuring rigorously tested launches.",
            details: ["Checkout testing", "Payment validation", "Load testing", "ADA Compliance"],
        },
        {
            anchor: "step-launch",
            number: "06",
            icon: Rocket,
            title: "Launch & Optimization",
            description: <>Smooth go-live support followed by immediate monitoring and <Link href="/services/seo-services/ecommerce-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-teal-text)]">Ecommerce SEO</Link> and <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-teal-text)]">digital marketing services</Link>.</>,
            details: ["SEO setup", "Analytics config", "Email integration", "Social pixels"],
        },
        {
            anchor: "step-growth",
            number: "07",
            icon: BarChart3,
            title: "Growth & Iteration",
            description: "Continuous improvement based on real user data and Omnichannel Retailing trends.",
            details: ["A/B testing", "Conversion reports", "Feature roadmap", "Performance monitoring"],
        },
    ];

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                    >
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "var(--accent-cyan-text)" }}>E-commerce Development</span> Process
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        A Proven Agile Methodology for On-Time Delivery
                    </p>
                </div>

                {/* Numbered stepper (website-type pages). From lg: rows of four, the
                    number circles joined by a line (none after the end of a row or the
                    last step). Below lg: a list with the numbers on a rail at the left.
                    Hover (CSS only): the card's border turns cyan and lifts 4px, and the
                    number circle fills. */}
                <ol className="grid lg:grid-cols-4 gap-8 lg:gap-x-6 lg:gap-y-12">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;
                        const endsRow = idx % 4 === 3;

                        return (
                            <li
                                key={idx}
                                id={step.anchor}
                                className="group scroll-mt-20 relative flex lg:flex-col gap-4"
                            >
                                {/* Number on the line */}
                                <div className="relative flex-shrink-0">
                                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#00b5ca] flex items-center justify-center text-sm font-bold text-[var(--accent-cyan-text)] bg-[var(--card-bg)] transition-colors duration-200 group-hover:bg-[#0e7490] group-hover:border-[#0e7490] group-hover:text-white motion-reduce:transition-none">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Connector: across to the next step from lg, down to it below lg */}
                                {!isLast && !endsRow && (
                                    <div aria-hidden="true" className="hidden lg:block absolute top-5 left-12 -right-4 h-0.5 bg-[#00b5ca]/50" />
                                )}
                                {!isLast && (
                                    <div aria-hidden="true" className="lg:hidden absolute left-5 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-[#00b5ca]/50" />
                                )}

                                {/* Step card */}
                                <div
                                    className="flex-1 min-w-0 p-6 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out group-hover:border-[#00b5ca] group-hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    {/* Icon above the title in the narrow 1024–1279 columns, beside it otherwise.
                                        Hidden on phones: the numbered circle already marks the step,
                                        and the title gets the full width (2 lines instead of 3). */}
                                    <div className="flex lg:flex-col xl:flex-row items-start gap-3 mb-3">
                                        <div
                                            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #0e7490, #155e75)" }}
                                        >
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                    </div>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail) => (
                                            <li key={detail} className="flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-cyan-text)]" aria-hidden="true" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {/* CTA: no card, border or tint, so it sits on the section's own
                    background; top/bottom padding dropped. No side padding on phones, so
                    "Schedule a Consultation" is one line at 320 (px-8 from 640px). */}
                <div className="mt-12 md:mt-16 text-center px-0 sm:px-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Ready to Start Your E-commerce Journey?
                    </h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Let&apos;s discuss how our proven process can bring your online store to life.
                    </p>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-base sm:text-lg bg-gradient-to-r from-[#0e7490] to-[#155e75] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                    >
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
