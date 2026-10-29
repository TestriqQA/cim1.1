"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { Product } from "@/data/products";

export default function FAQ({ product }: { product: Product }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const color = product.accentColor;

    // Vivid accents stay for backgrounds/borders/gradients; TEXT uses the
    // theme-aware AA tokens so the same hue passes in light and dark.
    const textAccent = (c: string) => ({
        "#008ac1": "var(--brand-blue-text)",
        "#00b5ca": "var(--accent-teal-text)",
        "#4e51d2": "var(--accent-indigo-text)",
        "#6db75c": "var(--accent-green-text)",
        "#f72585": "var(--accent-pink-text)",
        "#bc3feb": "var(--brand-purple-text)",
        "#ee6500": "var(--accent-orange-text)",
    }[c?.toLowerCase()] ?? c);
    const textColor = textAccent(color);

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}40` }}>
                            <HelpCircle className="w-4 h-4" style={{ color }} />
                            <span className="text-sm font-medium" style={{ color: textColor }}>FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            {product.faqHeading ?? (
                                <>Frequently Asked <span style={{ color: textColor }}>Questions</span></>
                            )}
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Everything you need to know about <strong>{product.name}</strong>. Can&apos;t find what you&apos;re looking for? Our support team is always ready to help.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--background)" }}>
                                <h3 className="text-3xl font-bold mb-2" style={{ color: textColor }}>{product.faqs.length}</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Common Questions</p>
                            </div>
                            <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--background)" }}>
                                <h3 className="text-3xl font-bold mb-2" style={{ color: textColor }}>24/7</h3>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Support Available</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {product.faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div key={idx} className="rounded-2xl border overflow-hidden transition-all duration-300" style={{ borderColor: isOpen ? color : "var(--border-color)", backgroundColor: "var(--background)", boxShadow: isOpen ? `0 4px 20px ${color}10` : "none" }}>
                                    <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center justify-between p-6 text-left transition-colors" style={{ color: "var(--foreground)" }}>
                                        <span className="font-semibold pr-4">{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} style={{ color: isOpen ? color : "var(--secondary-text)" }} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                                        <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
