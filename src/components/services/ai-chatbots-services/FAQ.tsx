"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            q: "What are the benefits of using AI chatbots for business?",
            a: <span>AI Chatbot Services maximize efficiency by handling high volumes of queries 24/7 without human fatigue. Key benefits include a significant reduction in <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">customer support costs</Link>, increased lead conversion through instant engagement, and scalable multilingual support. An ROI-driven AI chatbot implementation typically pays for itself within 6 months.</span>,
        },
        {
            q: "How do AI-powered chatbots improve customer service?",
            a: <span>AI chatbots improve customer service by providing instant, zero-latency responses to inquiries, resolving common issues without wait times. Using <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Sentiment Analysis</Link> for Customer Support, they can detect frustrated users and escalate them to human agents immediately (HITL), ensuring a high-quality Omnichannel Customer Experience (CX).</span>,
        },
        {
            q: "What is the difference between a rule-based chatbot and an AI chatbot?",
            a: "A rule-based chatbot follows a strict \"if/then\" decision tree and fails when questions deviate from the script. A Custom AI Chatbot uses Natural Language Understanding (NLU) and Machine Learning (ML) to understand intent, context, and nuance, allowing it to handle complex, unstructured conversations just like a human.",
        },
        {
            q: "How much does it cost to implement an AI chatbot for a business?",
            a: "Costs vary based on complexity. A simple Low-code AI chatbot builder solution might start from $2,000-$5,000, while a fully Custom AI Chatbot Development project for Enterprise with LLM integration and custom security protocols typically ranges from $15,000 to $50,000+. Contact us for a precise quote tailored to your tech stack.",
        },
        {
            q: "How do I choose the right AI chatbot for my company?",
            a: <span>Look for an AI Chatbot Agency that prioritizes your business goals. If you need sales, choose a bot specialized in <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Automated lead qualification</Link>. For support, ensure it offers integration for Zendesk and Multilingual capabilities. Always check for E-E-A-T compliance and security certifications.</span>,
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--accent-indigo-text)"
            subtitle="Answers to common questions about our AI chatbot services, strategy, and results."
            background="var(--card-bg)"
        />
    );
}
