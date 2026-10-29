"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What are the benefits of using AI chatbots for business?",
            a: <span>AI Chatbot Services maximize efficiency by handling high volumes of queries 24/7 without human fatigue. Key benefits include a significant reduction in <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">customer support costs</Link>, increased lead conversion through instant engagement, and scalable multilingual support. An ROI-driven AI chatbot implementation typically pays for itself within 6 months.</span>,
        },
        {
            q: "How do AI-powered chatbots improve customer service?",
            a: <span>AI chatbots improve customer service by providing instant, zero-latency responses to inquiries, resolving common issues without wait times. Using <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Sentiment Analysis</Link> for Customer Support, they can detect frustrated users and escalate them to human agents immediately (HITL), ensuring a high-quality Omnichannel Customer Experience (CX).</span>,
        },
        {
            q: "What is the difference between a rule-based chatbot and an AI chatbot?",
            a: "A rule-based chatbot follows a strict \"if/then\" decision tree and fails when questions deviate from the script. A Custom AI Chatbot uses Natural Language Understanding (NLU) and Machine Learning (ML) to understand intent, context, and nuance, allowing it to handle complex, unstructured conversations just like a human.",
        },
        {
            q: "How much does it cost to implement an AI chatbot for a business?",
            a: "Costs vary based on complexity. A simple Low-code AI chatbot builder solution might start from $2,000-$5,000, while a fully Custom AI Chatbot Development project for Enterprise with LLM integration and custom security protocols typically ranges from $15,000 to $50,000+. Contact us for a precise quote tailored to your tech stack.",
        },
        {
            q: "How do I choose the right AI chatbot for my company?",
            a: <span>Look for an AI Chatbot Agency that prioritizes your business goals. If you need sales, choose a bot specialized in <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Automated lead qualification</Link>. For support, ensure it offers integration for Zendesk and Multilingual capabilities. Always check for E-E-A-T compliance and security certifications.</span>,
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--foreground)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked <span style={{ color: "var(--accent-indigo-text)" }}>Questions</span></h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our AI chatbot services, strategy, and results.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-chatbot)" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "var(--brand-chatbot)" : "color-mix(in srgb, var(--brand-chatbot) 10%, transparent)",
                                                color: faqOpen === i ? "white" : "var(--accent-indigo-text)"
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
