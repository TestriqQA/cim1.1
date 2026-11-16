"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            q: "What are the benefits of AI workflow automation for businesses?",
            a: <span><Link href="/blog/ai-workflows-automating-business-processes" className="underline decoration-dotted hover:text-[var(--accent-orange-text)] transition-colors">AI workflow automation</Link> drastically reduces operational costs, minimizes human error, and accelerates process execution. It allows your team to focus on high-value strategic work rather than repetitive data entry.</span>,
        },
        {
            q: "How do I implement AI into my existing business workflows?",
            a: "Start by identifying repetitive, rule-based tasks. We then assess your tech stack and design a Human-in-the-Loop (HITL) AI System that integrates smoothly without disrupting daily operations.",
        },
        {
            q: "What is the difference between RPA and AI automation?",
            a: "RPA (Robotic Process Automation) strictly follows pre-programmed rules (if X, then Y). AI Automation uses Machine Learning to understand context, make decisions, and handle unstructured data (like reading messy emails).",
        },
        {
            q: "How much does it cost to hire an AI automation agency?",
            a: <span>Costs vary based on complexity. A simple Low-code AI automation setup might start lower, while complex Enterprise AI Automation Solutions require custom development from professional <Link href="/services/web-design-development" className="underline decoration-dotted hover:text-[var(--accent-orange-text)] transition-colors">web development</Link> teams. We offer flexible engagement models focused on ROI.</span>,
        },
        {
            q: "What are the best AI workflow automation tools in 2026?",
            a: "Top tools include n8n for self-hosted privacy, LangChain for building agents, and enterprise platforms like UiPath enhanced with GenAI capabilities.",
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--accent-orange-text)"
            subtitle="Answers to common questions about our AI automation services, strategy, and results."
        />
    );
}
