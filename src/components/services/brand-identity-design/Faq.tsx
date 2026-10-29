"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is brand identity design and why is it important?",
            answer: "Brand identity design is the creation of all visual and verbal elements that represent your company, including your logo, color palette, typography, and voice. It is crucial because it builds Brand Recognition and Awareness, creates trust with customers, and differentiates you from competitors in a crowded global market. A strong identity directly influences purchasing decisions and customer loyalty."
        },
        {
            question: "What is the difference between branding and brand identity?",
            answer: "Branding is the holistic process of shaping how your audience perceives your company (the \"why\" and \"feeling\"). Brand identity is the tangible collection of visual tools (the \"what\")-logo, fonts, colors-that you use to communicate that brand. Think of branding as the personality and brand identity as the clothes and style."
        },
        {
            question: "How long does the brand identity design process take?",
            answer: "For a standard brand identity design for startups, the timeline is typically 2-4 weeks. For comprehensive corporate rebranding services or enterprise systems involving extensive guidelines and collateral, the process can take 6-12 weeks. We emphasize quality and strategic alignment at every step."
        },
        {
            question: "How much does brand identity design cost?",
            answer: <span>Costs vary based on scope. An affordable brand identity design service for a small business might start from $1,500 - $3,000. Comprehensive agencies packages for <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">B2B</Link> or <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">SaaS companies</Link> often range from $5,000 to $20,000+ depending on the depth of strategy, number of deliverables, and market research required.</span>
        },
        {
            question: "What are the key elements of a brand identity?",
            answer: "The key elements include a primary Logo, Color Palette, Typography (Fonts), Imagery/Photography Style, Iconography, Brand Voice/Tone, and a Brand Style Guide to govern their usage."
        },
        {
            question: "Do you offer rebranding services for established companies?",
            answer: <span>Yes, we specialize in <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">rebranding services</Link> for small business and large enterprises. We carefully audit your existing brand equity to ensure we retain what works while modernizing your visual language to meet current market standards and Graphic Design Principles.</span>
        },
        {
            question: "Will I own the copyright to my brand files?",
            answer: "Absolutely. Upon final payment and delivery, full copyright ownership of all approved designs is transferred to you. You will receive all source files necessary for trademark registration and unrestricted commercial use."
        }
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-amber-text)" }}>
                            FAQs
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Frequently Asked <span style={{ color: "var(--accent-amber-text)" }}>Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-center" style={{ color: "var(--secondary-text)" }}>
                        Expert Answers to Your Branding Questions
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                                style={{
                                    backgroundColor: isOpen ? "color-mix(in srgb, var(--brand-yellow) 5%, var(--card-bg))" : "var(--card-bg)",
                                    borderColor: isOpen ? "var(--brand-yellow)" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? '' : ''}`} style={{ color: isOpen ? "var(--accent-amber-text)" : "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: isOpen ? "var(--brand-yellow)" : "rgba(128,128,128,0.1)" }}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-black" />
                                        ) : (
                                            <Plus className="w-5 h-5" style={{ color: "var(--secondary-text)" }} />
                                        )}
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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
