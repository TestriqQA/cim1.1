"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How much does it cost to build an ecommerce store?",
            answer: <>Pricing varies based on complexity. A basic <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Shopify store development</Link> project might start at $3k, while a custom proven Ecommerce Agency solution for enterprise B2B can range from $20k to $100k+. We offer transparent pricing tailored to your specific feature needs.</>
        },
        {
            question: "What is the best ecommerce platform for small businesses?",
            answer: <>For most small businesses, <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">WooCommerce development</Link> or Shopify offers the best balance of ease-of-use and scalability. We help you choose the right platform to minimize overhead while maximizing growth potential.</>
        },
        {
            question: "How can I improve my ecommerce store's conversion rate?",
            answer: <>Start with speed and trust. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Ecommerce conversion rate optimization</Link> (CRO) audits often reveal that speeding up page loads and adding clear trust signals (like security badges and reviews) are the quickest wins.</>
        },
        {
            question: "How long does it take to launch a custom ecommerce store?",
            answer: "A template-based store can go live in 2-4 weeks. A fully custom Ecommerce website design company project typically takes 8-12 weeks, depending on the number of Custom API integrations and unique design requirements."
        },
        {
            question: "Do you offer post-launch support and maintenance?",
            answer: "Yes! We provide ongoing Ecommerce Management Services, including security patches, feature updates, and performance monitoring to ensure your store remains competitive in 2026."
        },
        {
            question: "Can you help migrate my store from Magento to Shopify?",
            answer: <>Absolutely. Our <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Magento to Shopify migration services</Link> ensure that your product data, customer history, and SEO rankings are preserved during the transition, with minimal downtime.</>
        },
        {
            question: "Is my e-commerce store ADA compliant?",
            answer: <>We build with inclusivity in mind. Our <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Ecommerce ADA compliance</Link> and accessibility services ensure your site meets WCAG 2.1 standards, protecting you from lawsuits and opening your market to all users.</>
        }
    ];

    return (
        <section className="py-20 bg-background transition-colors duration-300" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--accent-cyan-text)" }}>Questions</span>
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                        Answers to Your Common E-commerce Development Questions
                    </p>
                    <div className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border rounded-lg transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isOpen ? "#00b5ca" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-lg font-medium" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "var(--secondary-text)" }} />
                                    )}
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
