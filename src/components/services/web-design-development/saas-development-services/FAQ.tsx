"use client";

import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "What is SaaS web application development?",
            answer: <><Link href="/services/web-design-development" className="text-[var(--brand-blue-text)] underline">SaaS web application development</Link> is the process of building cloud-based software platforms delivered over the internet via subscription models. Unlike traditional software, SaaS applications are hosted on <Link href="/blog/category/web-development" className="text-[var(--brand-blue-text)] underline">cloud infrastructure</Link> (AWS, GCP, Azure), support multiple users (multi-tenancy), and offer features like automated billing, user management, and API integrations. Examples include Salesforce, Slack, and Zoom.</>
        },
        {
            question: "How much does SaaS development cost in India?",
            answer: "SaaS development costs in India range from $15,000 for a basic MVP (6-8 weeks) to $100,000+ for enterprise-grade platforms with advanced features like AI/ML, microservices architecture, and custom integrations. Factors affecting cost include feature complexity (50-100+ user stories), tech stack, third-party integrations, and team composition. Average hourly rates: $25-50/hour for mid-senior developers in India vs. $100-200/hour in the US."
        },
        {
            question: "What are the best SaaS development companies in Mumbai?",
            answer: "Top SaaS development companies in Mumbai include firms with proven track records in cloud-based SaaS platforms, multi-tenant architecture, and agile methodologies. Key selection criteria: Portfolio of successfully launched SaaS products, technical expertise in React/Node.js/AWS, and security certifications (ISO 27001, SOC 2). Hire SaaS developers Mumbai with experience in your industry for faster time-to-market."
        },
        {
            question: "How to build a scalable SaaS app?",
            answer: "To build a scalable SaaS application, follow these steps: 1) Choose microservices or modular architecture, 2) Implement database sharding, 3) Use managed cloud services (AWS RDS, Lambda), 4) Optimize database queries with caching (Redis), 5) Configure load balancing, 6) Integrate CDN for static assets, 7) Set up monitoring & alerting (Datadog), and 8) Configure auto-scaling policies with Kubernetes or AWS Auto Scaling Groups."
        },
        {
            question: "What are the steps to develop a custom SaaS platform?",
            answer: "Steps to develop custom SaaS platform: 1) Discovery & Requirements Gathering, 2) Technical Architecture Design (multi-tenancy approach), 3) UI/UX Prototyping, 4) Agile Development with 2-week sprints, 5) Quality Assurance using automated testing, 6) Beta Launch, 7) Production Deployment on cloud infrastructure, and 8) Iterative Feature Development based on user analytics. Timeline: 3-6 months for MVP, 6-12 months for full-featured SaaS platform."
        },
        {
            question: "How long does it take to build a SaaS MVP?",
            answer: "A SaaS MVP typically takes 6-12 weeks to develop with a focused scope of 10-15 core features. Timeline depends on feature complexity (auth, billing, dashboards), user roles, third-party integrations, and team size. Using modern frameworks like Next.js, Supabase, and Vercel can reduce development time to 4-6 weeks."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "#008ac1" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "#008ac1" }}>Questions</span>
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border overflow-hidden transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: openIndex === idx ? "#008ac1" : "var(--border-color)",
                                boxShadow: openIndex === idx ? "0 4px 20px rgba(0, 138, 193, 0.1)" : "none"
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === idx ? "text-[var(--brand-blue-text)]" : "text-[var(--foreground)]"}`}>
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? "bg-[#008ac1] rotate-180" : "bg-[var(--background)]"
                                        }`}
                                >
                                    {openIndex === idx ? (
                                        <Minus className="w-4 h-4 text-white" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-[var(--foreground)]" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div style={{ color: "var(--foreground)", lineHeight: "1.7" }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
