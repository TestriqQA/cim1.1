"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What are Instagram marketing services?",
            a: <>Instagram marketing services encompass a wide range of activities designed to grow a brand's presence on the platform. This includes <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram Management Services</Link>, content creation, <Link href="/services/performance-marketing" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram Advertising Services</Link>, influencer outreach, and community engagement to drive brand awareness and sales.</>,
        },
        {
            q: "How much do Instagram marketing services cost?",
            a: "The cost varies based on the scope of work (e.g., number of Reels, ad spend management, or full-service management). Most agencies offer tiers ranging from $1,500 to $10,000+ per month. Contact us for a custom quote tailored to your business needs.",
        },
        {
            q: "What should an Instagram marketing strategy include?",
            a: <>A robust strategy includes <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">visual brand guidelines</Link>, a content calendar (Reels, Stories, Posts), a targeted hashtag strategy, <Link href="/services/performance-marketing" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram ad campaign management</Link>, and a plan for community engagement and influencer partnerships.</>,
        },
        {
            q: "Why should businesses use Instagram marketing services?",
            a: <>With the platform's shift toward <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Social Commerce</Link> and Reels, professional management ensures you stay ahead of algorithm changes, maintain high-quality aesthetics, and achieve a higher CTR than in-house management often yields.</>,
        },
        {
            q: "How do I choose the best Instagram marketing agency?",
            a: <>Look for an agency with a proven track record (<Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">EEAT</Link>), industry-specific experience, transparency in reporting, and a focus on ROI rather than just follower counts.</>,
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4 text-[#E1306C]" />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--accent-pink-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our Instagram marketing services, strategy, and results.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "#E1306C" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "#be185d" : "rgba(225, 48, 108, 0.1)",
                                                color: faqOpen === i ? "white" : "var(--accent-pink-text)"
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
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "rgba(225, 48, 108, 0.2)" }}>
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
