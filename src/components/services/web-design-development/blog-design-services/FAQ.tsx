"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How much does it cost to build a professional news portal?",
            answer: <>The cost varies based on complexity. A basic <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">WordPress blog development</Link> for businesses starts from $3,000, while a robust <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Custom news portal design</Link> for media agencies with custom robust features can range from $15,000 to $50,000+. We offer transparent pricing packages tailored to your Digital Publishing Solutions needs.</>
        },
        {
            question: "What is the best CMS for a high-traffic news website?",
            answer: <>For scalability and flexibility, we recommend <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Headless CMS</Link> architectures (like <Link href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Strapi</Link> with <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Next.js</Link>) or optimized WordPress VIP for Digital magazine publishing platform services. These ensure your Mobile-responsive news website development remains fast under heavy loads.</>
        },
        {
            question: "How can I improve my blog's search engine ranking?",
            answer: <>Focus on <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Topical Authority</Link>, E-E-A-T signals, and technical health. Our <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal SEO</Link> and audience growth services include schema markup, site speed optimization, and <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Blog content strategy</Link> and management solutions to target low-competition, high-value keywords.</>
        },
        {
            question: "What are the essential features of a modern news portal?",
            answer: "Key features include mobile responsiveness, fast loading speeds (News portal performance and speed optimization), Multi-author blog management systems, paywall integration, AMP support, and Interactive blog features like comments and social sharing."
        },
        {
            question: "How do I monetize a news portal or business blog?",
            answer: <>We implement diverse Content Monetization Models including display ads (Google AdSense), sponsored content, subscription paywalls, and affiliate marketing modules as part of our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal monetization</Link> and ad integration services.</>
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(168, 85, 247, 0.05)",
                            borderColor: "rgba(168, 85, 247, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "#a855f7" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "#a855f7" }}>Questions</span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border overflow-hidden transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isOpen ? "#a855f7" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-semibold pr-8" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#a855f7" : "transparent",
                                            border: `1px solid ${isOpen ? "#a855f7" : "var(--border-color)"}`,
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 text-white" />
                                        ) : (
                                            <Plus className="w-4 h-4" style={{ color: "var(--foreground)" }} />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{
                                        maxHeight: isOpen ? "500px" : "0",
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <div className="p-6 pt-0 text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                                        {faq.answer}
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
