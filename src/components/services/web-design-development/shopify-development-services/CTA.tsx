"use client";

import { ArrowRight, ShoppingCart, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CTA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What are the benefits of using Shopify for ecommerce?",
            answer: <span>Shopify remains the world&apos;s leading e-commerce platform in 2026 due to its unparalleled reliability, security, and massive app ecosystem. It offers a user-friendly backend for merchants while allowing developers the flexibility to build highly customized stores via <Link href="/services/web-design-development/shopify-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Shopify Plus</Link> and <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Headless Commerce</Link> architectures.</span>
        },
        {
            question: "How much do professional Shopify development services cost in 2026?",
            answer: "The Shopify ecommerce cost for startups typically ranges from $5,000 to $15,000 for a custom store setup. Mid-market and enterprise projects involving Shopify Plus development or complex migrations can range from $25,000 to $100,000+. The ROI usually pays for itself within 6-12 months."
        },
        {
            question: "How do I choose the best Shopify agency for my business?",
            answer: "Look for a certified Shopify Partner with a deep understanding of both technical development and digital marketing. The best agency should prioritize performance (speed) and SEO, as these are the primary drivers of e-commerce revenue in the 2026 search era."
        },
        {
            question: "What is included in a full-service Shopify marketing package?",
            answer: <span>A comprehensive package usually includes <Link href="/services/seo-services/ecommerce-seo-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Shopify SEO services</Link>, <Link href="/services/performance-marketing" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">PPC management</Link> (Google/Meta Ads), email marketing automation (Klaviyo), and <Link href="/services/performance-marketing" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Conversion Rate Optimization (CRO)</Link> to handle every stage of the funnel - from attraction to retention.</span>
        },
        {
            question: "How long does it take to launch a custom Shopify store?",
            answer: "A standard custom store launch usually takes 6-10 weeks, covering strategy, design, development, and testing. More complex enterprise projects or headless builds may take 3-5 months to ensure every integration is perfectly optimized."
        },
        {
            question: "Can you integrate Shopify POS with my existing retail software?",
            answer: <span>Yes, we specialize in <Link href="/services/web-design-development/shopify-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Shopify POS integration</Link> for retail businesses. We can sync your online Shopify store with physical retail locations, ensuring real-time inventory management, unified customer profiles, and consistent pricing across all channels.</span>
        },
        {
            question: "Do you offer ongoing Shopify maintenance and support?",
            answer: "Absolutely. Our Shopify maintenance and ongoing support services include monthly security audits, theme updates, app performance monitoring, and fresh SEO implementation to keep your store operational, secure, and ahead of competitors 24/7."
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background elements omitted for brevity - keeping them from original */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #96bf48, #5c8a1e, transparent)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#96bf48 1px, transparent 1px), linear-gradient(90deg, #96bf48 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* FAQ Section */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <HelpCircle className="w-4 h-4" style={{ color: "#96bf48" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                                FAQ
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: "var(--foreground)" }}
                        >
                            Your Shopify Questions{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Answered
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: openIndex === index ? "#96bf48" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "#96bf48" }} />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "var(--secondary-text)" }} />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Card */}
                <div
                    className="relative p-6 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #96bf48 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #96bf48 40%, var(--border-color))",
                    }}
                >
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #96bf48 15%, transparent), color-mix(in srgb, #5c8a1e 10%, transparent))",
                                borderColor: "color-mix(in srgb, #96bf48 40%, transparent)",
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" style={{ color: "#96bf48" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                                Ready to Dominate Shopify?
                            </span>
                        </div>

                        <h2
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Your Global E-commerce{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Success Starts Here
                            </span>
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Don&apos;t let a generic store hold back your revenue. Partner with the hire Shopify experts who deliver measurable results. Whether you need a simple store audit or a complete Shopify Plus migration, our team is ready to scale your brand.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    color: "#ffffff",
                                    boxShadow: "0 8px 32px rgba(150, 191, 72, 0.4)",
                                }}
                            >
                                Contact Us Today for a Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
