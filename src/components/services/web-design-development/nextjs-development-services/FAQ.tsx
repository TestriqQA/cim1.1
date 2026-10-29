"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "What are the benefits of using Next.js for business in 2026?",
        answer: "Next.js offers superior performance, better SEO through Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), and improved developer experience. In 2026, its ability to deliver near-instant load times and optimize Core Web Vitals is crucial for maintaining top search rankings and high user conversion rates."
    },
    {
        question: "How much does it cost to build a custom Next.js website?",
        answer: <>The cost vary significantly depending on complexity, features, and integrations. Typically, a professional Next.js project can range from $5,000 for a straightforward <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">marketing site</Link> to $50,000+ for complex enterprise <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">SaaS</Link> platforms or large-scale <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">e-commerce</Link> solutions. We provide tailored quotes after a strategic discovery phase.</>
    },
    {
        question: "How do I choose the best React development agency?",
        answer: "Look for an agency with a proven track record (E-E-A-T), deep expertise in the latest React/Next.js features (like App Router and Server Components), certified Vercel/AWS partnerships, and a focus on performance-driven results rather than just 'making it work'."
    },
    {
        question: "What is the difference between Next.js and React?",
        answer: "React is a library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides additional features like routing, server-side rendering, static site generation, and API routes out of the box, which are not included in core React. Next.js is essential for building production-ready, SEO-friendly applications."
    },
    {
        question: "How long does it take to develop a Next.js web application?",
        answer: "A standard Next.js project typically takes between 4 to 12 weeks. Small marketing sites might take 4-6 weeks, while complex SaaS products or enterprise applications can take 3-6 months or more, depending on the scope of work and integration requirements."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Common Questions
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Frequently Asked{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Questions
                        </span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isOpen ? "#61dafb50" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-lg pr-4" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#61dafb" : "color-mix(in srgb, var(--foreground) 5%, transparent)",
                                            color: isOpen ? "#000" : "var(--foreground)"
                                        }}
                                    >
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
                                            {faq.answer}
                                        </p>
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
