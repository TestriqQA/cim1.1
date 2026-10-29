"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are travel and hospitality services in the context of digital development?",
            answer: <span>Travel and hospitality services encompass the strategic design, development, and marketing of digital solutions for the tourism industry. This includes building <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:underline">custom booking engines</Link>, <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline">hotel management software</Link>, OTA platforms, and implementing Travel Technology Solutions that streamline operations and enhance the guest experience.</span>
        },
        {
            question: "How can technology improve hospitality services for hotels and agencies?",
            answer: <span>Technology improves hospitality services by automating routine tasks, personalizing guest interactions, and optimizing revenue. Tools like Hotel Property Management Systems (PMS), <Link href="/services/ai-chatbots-services" className="underline underline-offset-2 hover:underline">AI-driven chatbots</Link>, and <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline">Travel Data Analytics</Link> allow businesses to offer seamless booking experiences, real-time support, and tailored recommendations, directly boosting satisfaction and loyalty.</span>
        },
        {
            question: "What makes a top-tier Hospitality Marketing Agency?",
            answer: <span>A top-tier Hospitality Marketing Agency combines creative storytelling with data-driven strategies. Look for an agency that specializes in <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">Digital Marketing for Luxury Hotels and Resorts</Link>, uses advanced <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">SEO</Link> for Travel Lead Generation, and has a proven track record of increasing direct bookings through Hospitality Social Media Management Services and paid campaigns.</span>
        },
        {
            question: "Why is custom Travel Software Development Services better than off-the-shelf solutions?",
            answer: <span><Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline">Custom Travel Software Development Services</Link> offer flexibility and scalability that off-the-shelf products cannot match. A custom solution is tailored to your specific business workflows, brands, and customer needs, allowing for unique features like specialized Travel API integration services and proprietary Hospitality Revenue Management algorithms that provide a competitive edge.</span>
        },
        {
            question: "What are the key Hospitality Technology Trends for 2026?",
            answer: <span>The key Hospitality Technology Trends 2026 include the rise of hyper-personalization via AI, the adoption of sustainable travel tech for Sustainable Travel and Tourism Consulting, biometric authentication for seamless check-ins, and the increased use of immersive AR/VR in <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline">Travel Agency Website Design</Link> to provide virtual "try-before-you-buy" experiences.</span>
        },
        {
            question: "How do you handle Travel API Integration Services (GDS/OTA)?",
            answer: "We consider Travel API Integration Services a core competency. Our team has extensive experience connecting with major GDS providers like Amadeus and Sabre, as well as OTAs like Expedia. We ensure secure, real-time data exchange for inventory and pricing, handling the technical complexity so you can focus on your business."
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
                            backgroundColor: "rgba(13, 148, 136, 0.05)",
                            borderColor: "rgba(13, 148, 136, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-teal-text)" }}>
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--accent-teal-text)" }}>Questions</span>
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
                                    borderColor: isOpen ? "#0d9488" : "var(--border-color)",
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
                                            backgroundColor: isOpen ? "#0d9488" : "transparent",
                                            border: `1px solid ${isOpen ? "#0d9488" : "var(--border-color)"}`,
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
