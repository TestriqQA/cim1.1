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
            question: "What is enterprise application development?",
            answer: "Enterprise application development is the process of building complex, scalable, and secure software solutions designed to support the mission-critical operations of large organizations. Unlike regular apps, enterprise apps require deep integration with existing systems (ERP/CRM), high-level security (SSO/IAM), and the ability to scale for thousands of internal or external users.",
        },
        {
            question: "How much does enterprise app development cost?",
            answer: "The cost of Enterprise Application Development services typically ranges from $50,000 to $500,000+, depending on the complexity, number of integrations, and security requirements. We provide detailed roadmap planning to ensure your investment delivers a clear ROI through automation and efficiency.",
        },
        {
            question: "What are the benefits of custom enterprise software?",
            answer: "Custom enterprise software provides a competitive edge by automating unique business processes, improving data security, and ensuring seamless interoperability between legacy systems and modern cloud-native infrastructures. It eliminates the limitations of rigid, one-size-fits-all platforms.",
        },
        {
            question: "How long does it take to build an enterprise-grade app?",
            answer: <><span className="text-inherit">A typical timeline for a production-ready enterprise app is 4 to 9 months. This includes strategy, </span><Link href="/services/brand-identity-design" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">UI/UX design</Link>, integration, security hardening, and deployment. Our Agile and DevOps approach allows for faster time-to-market through continuous delivery cycles.</>,
        },
        {
            question: "What is the difference between enterprise and regular app development?",
            answer: <><span className="text-inherit">The primary differences lie in security, scale, and integration. Enterprise apps must meet strict compliance standards (SOC 2, HIPAA), integrate with complex corporate databases, and support massive concurrent user loads, whereas </span><Link href="/services/mobile-app-development" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">regular apps</Link> often focus on single-use cases for the general consumer.</>,
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "rgba(37, 99, 235, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Common Questions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Enterprise App</span>{" "}
                        <span
                            style={{
                                color: "var(--brand-blue-text)"
                            }}
                        >
                            FAQs
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Everything you need to know about enterprise application development and our security-first approach.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border rounded-2xl px-6 transition-all duration-300 data-[state=open]:border-[#2563eb] data-[state=open]:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-[var(--brand-blue-text)] font-bold text-lg" style={{ color: "var(--foreground)" }}>
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
