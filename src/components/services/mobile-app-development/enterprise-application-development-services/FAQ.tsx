import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

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
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--brand-blue-text)"
            title="Enterprise App FAQs"
            subtitle="Everything you need to know about enterprise application development and our security-first approach."
        />
    );
}
