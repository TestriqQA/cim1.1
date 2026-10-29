"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the benefits of custom WordPress development?",
            answer: "Custom WordPress development ensures your site is built specifically for your brand’s needs, without the bloat of pre-made themes. This leads to faster load times, better security, and a unique user experience that increases conversions."
        },
        {
            question: "How much does it cost to build a custom WordPress website in 2026?",
            answer: "The WordPress development cost for business 2026 varies by complexity. A standard business site may range from $3,000 to $10,000, while enterprise portals or complex e-commerce builds can exceed $25,000. Contact us for a precise quote."
        },
        {
            question: "How do I choose the best WordPress development agency?",
            answer: <>Look for an agency with a deep portfolio, transparent <Link href="/services/additional-support-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress maintenance and support services</Link>, and verifiable reviews. A top-tier agency should prioritize SEO, speed, and mobile responsiveness.</>
        },
        {
            question: "What is included in WordPress maintenance services?",
            answer: "Our WordPress maintenance services include weekly core/plugin updates, daily backups, 24/7 security monitoring, and uptime checks to ensure your business never goes offline."
        },
        {
            question: "How long does it take to develop a custom WordPress site?",
            answer: <>A custom project typically takes 4–12 weeks depending on features like <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WooCommerce development</Link> or WordPress API integration. We provide a detailed timeline during the discovery phase.</>
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
                            backgroundColor: "rgba(0, 115, 170, 0.05)",
                            borderColor: "rgba(0, 115, 170, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--brand-blue-text)" }}>Questions</span>
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
                                    borderColor: isOpen ? "#0073AA" : "var(--border-color)",
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
                                            backgroundColor: isOpen ? "#0073AA" : "transparent",
                                            border: `1px solid ${isOpen ? "#0073AA" : "var(--border-color)"}`,
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
