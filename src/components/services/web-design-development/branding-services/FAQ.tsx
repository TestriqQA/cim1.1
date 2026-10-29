"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is included in personal branding services?",
            answer: "Our comprehensive personal branding services include a custom website design, logo and visual identity creation, professional bio writing, SEO optimization for your name (Entity SEO), and social media profile integration. We also offer digital footprint cleanup to ensure your online reputation is pristine."
        },
        {
            question: "How do I build a professional online portfolio?",
            answer: "Building a professional portfolio starts with strategy. Identify your target audience (employers vs. clients) and curate your best work. We then focus on a clean, responsive design, fast loading speeds, and compelling case studies. We recommend using a platform you own (like a custom Next.js site) rather than relying solely on Behance or Dribbble."
        },
        {
            question: "Why is personal branding important for executives?",
            answer: "In 2026, trust is digital. Personal brand strategy for corporate executives establishes authority, attracts talent to your organization, and opens doors for board seats and speaking engagements. It differentiates you in a crowded market and gives you control over your professional narrative."
        },
        {
            question: "How can I improve my personal brand's search ranking?",
            answer: <>Improving rankings requires a mix of <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">technical SEO</Link> and <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">content strategy</Link>. We focus on optimizing your site for your name, securing high-quality backlinks, creating consistent thought leadership content (blogs/articles), and implementing Schema markup. Brand SERP management is a core part of our service.</>
        },
        {
            question: "What are the best platforms for a personal portfolio website?",
            answer: <>While builders like Squarespace are okay for beginners, the &quot;best&quot; platform for growth is a custom-coded solution (using React, Vue, or <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Next.js</Link>) or a <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">headless CMS</Link>. This offers superior speed, SEO control, and design flexibility. For personal website for academic and research professionals, we often recommend solutions that handle publications and CVs effectively.</>
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(6, 182, 212, 0.05)",
                            borderColor: "rgba(6, 182, 212, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "#06b6d4" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--accent-cyan-text)" }}>Questions</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Common questions about building your personal brand and portfolio.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: openIndex === idx ? "#06b6d4" : "var(--border-color)",
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left p-6 flex items-center justify-between gap-4"
                            >
                                <span className="font-semibold text-lg" style={{ color: "var(--foreground)" }}>
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                ) : (
                                    <Plus className="w-5 h-5 flex-shrink-0" style={{ color: "var(--secondary-text)" }} />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
