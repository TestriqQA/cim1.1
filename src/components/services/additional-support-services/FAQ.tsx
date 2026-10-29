"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are additional support services in business?",
            answer: <span>Additional support services encompass external assistance for non-core business activities, including <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">IT business support</Link>, outsourced administrative tasks, data management, and customer service. These services allow your core team to focus on strategic growth while we handle the operational details.</span>
        },
        {
            question: "Why should businesses outsource their support services?",
            answer: "Outsourcing offers Cost-Effective Solutions and instant Scalability. By leveraging our Managed Support services, you gain access to expert talent and advanced technology without the overhead of hiring full-time staff, ensuring Resource Optimization and 24/7 coverage."
        },
        {
            question: "What are the benefits of supplementary business support?",
            answer: <span>Benefits include increased Operational Efficiency, access to Core Competencies not available in-house, <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">Workflow Automation</Link>, and reduced operational risks. Our clients often see a meaningful reduction in overhead costs.</span>
        },
        {
            question: "How do I choose the right business support service provider?",
            answer: "Look for E-E-A-T signals: proven experience (case studies), technical expertise (modern tech stack), and clear communication. We offer transparent Service Level Agreements (SLAs) and have a track record of serving global clients in the US, EU, and APAC."
        },
        {
            question: "What is included in a business support services package?",
            answer: "Our packages are flexible. A standard package might include Professional virtual assistant support, basic IT monitoring, and Outsourced back-office support solutions. Enterprise packages add dedicated project management, advanced security, and Supplementary project management support."
        }
    ];

    return (
        <section
            className="py-12 md:py-16 lg:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "#97288e",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                        <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: "var(--brand-purple-text)" }}>
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Frequently Asked <span style={{ color: "var(--brand-purple-text)" }}>Questions</span>
                    </h2>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                                style={{
                                    backgroundColor: isOpen ? "color-mix(in srgb, #97288e 5%, var(--card-bg))" : "var(--card-bg)",
                                    borderColor: isOpen ? "#97288e" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                                >
                                    <span className="font-bold text-base sm:text-lg pr-4" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#97288e" : "var(--hover-bg)",
                                            color: isOpen ? "#fff" : "var(--secondary-text)",
                                        }}
                                    >
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
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
