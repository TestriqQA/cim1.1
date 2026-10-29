"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What are the benefits of AI workflow automation for businesses?",
            a: <span><Link href="/blog/ai-workflows-automating-business-processes" className="underline decoration-dotted hover:text-[var(--accent-orange-text)] transition-colors">AI workflow automation</Link> drastically reduces operational costs, minimizes human error, and accelerates process execution. It allows your team to focus on high-value strategic work rather than repetitive data entry.</span>,
        },
        {
            q: "How do I implement AI into my existing business workflows?",
            a: "Start by identifying repetitive, rule-based tasks. We then assess your tech stack and design a Human-in-the-Loop (HITL) AI System that integrates smoothly without disrupting daily operations.",
        },
        {
            q: "What is the difference between RPA and AI automation?",
            a: "RPA (Robotic Process Automation) strictly follows pre-programmed rules (if X, then Y). AI Automation uses Machine Learning to understand context, make decisions, and handle unstructured data (like reading messy emails).",
        },
        {
            q: "How much does it cost to hire an AI automation agency?",
            a: <span>Costs vary based on complexity. A simple Low-code AI automation setup might start lower, while complex Enterprise AI Automation Solutions require custom development from professional <Link href="/services/web-design-development" className="underline decoration-dotted hover:text-[var(--accent-orange-text)] transition-colors">web development</Link> teams. We offer flexible engagement models focused on ROI.</span>,
        },
        {
            q: "What are the best AI workflow automation tools in 2026?",
            a: "Top tools include n8n for self-hosted privacy, LangChain for building agents, and enterprise platforms like UiPath enhanced with GenAI capabilities.",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4 text-[var(--brand-orange)]" />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--foreground)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our AI automation services, strategy, and results.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-orange)" : "var(--border-color)",
                                borderRadius: '1.25rem'
                            }}
                        >
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full text-left px-6 py-6 focus:outline-none"
                            >
                                <div className="flex gap-4 items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                                            style={{
                                                backgroundColor: faqOpen === i ? "var(--brand-orange)" : "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                                                color: faqOpen === i ? "white" : "var(--accent-orange-text)"
                                            }}
                                        >
                                            <span className="font-bold">{i + 1}</span>
                                        </div>
                                        <h3 className="font-bold text-lg md:text-xl pr-8" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${faqOpen === i ? "rotate-180" : ""}`}
                                        style={{ color: "var(--secondary-text)" }}
                                    />
                                </div>

                                {faqOpen === i && (
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}>
                                        <p className="text-[var(--foreground)] leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
