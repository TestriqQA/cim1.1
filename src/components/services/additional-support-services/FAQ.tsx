"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
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
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--brand-purple-text)"
        />
    );
}
