"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const faqs = [
        {
            question: "What is hybrid app development?",
            answer: <><span className="text-inherit">Hybrid app development is a software development approach where a single codebase is written using web technologies (HTML, CSS, JavaScript) and then wrapped in a native container. This allows the app to run on multiple platforms like </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">Android</Link> while still accessing native device features like GPS and Camera.</>,
        },
        {
            question: "What are the benefits of hybrid apps vs native apps?",
            answer: "The primary benefits include cost-efficiency, faster time-to-market, and easier maintenance. Unlike native apps that require separate teams for Swift and Kotlin, hybrid apps use a single team and codebase. In 2026, frameworks like Ionic and Capacitor offer performance that is nearly indistinguishable from native for 90% of business use cases.",
        },
        {
            question: "How much does it cost to build a hybrid mobile app in 2026?",
            answer: "The cost typically ranges from $15,000 to $60,000+ depending on complexity. However, choosing hybrid development generally results in significant cost savings compared to building two separate native applications for iOS and Android.",
        },
        {
            question: "Which frameworks are best for hybrid app development in 2026?",
            answer: "Ionic and Capacitor are currently the industry leaders for hybrid development due to their stability, extensive plugin library, and support for modern web frameworks. Other notable options include Apache Cordova for legacy support and PWAs for zero-download experiences.",
        },
        {
            question: "How long does it take to develop a custom hybrid app?",
            answer: <><span className="text-inherit">A standard hybrid app MVP can be developed in 8 to 12 weeks. Complex </span><Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">enterprise applications</Link> may take 4 to 6 months. The single codebase approach significantly reduces the timeline compared to native development.</>,
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 180, 216, 0.1)",
                            borderColor: "rgba(0, 180, 216, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Common Questions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Hybrid App</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            FAQs
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Everything you need to know about hybrid app development and our approach in 2026.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border rounded-2xl px-6 transition-all duration-300 data-[state=open]:border-[#00b4d8] data-[state=open]:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-[var(--accent-cyan-text)] font-bold text-lg" style={{ color: "var(--foreground)" }}>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-lg leading-relaxed pb-6" style={{ color: "var(--foreground)" }}>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
