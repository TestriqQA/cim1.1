"use client";

import Image from "next/image";
import { Brain, Zap, Lock, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Technologies() {
    const capabilities = [
        {
            icon: Brain,
            title: "Advanced LLM Integration",
            description: "We deploy and fine-tune industry-leading models including GPT-4o, Claude 3.5 Sonnet, and Llama 3.",
            details: ["Prompt Engineering", "Fine-tuning", "Context Windows", "Zero-shot learning"],
        },
        {
            icon: Zap,
            title: "Retrieval-Augmented Generation (RAG)",
            description: <span>Eliminate hallucinations. Our <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">RAG pipelines</Link> connect your chatbot to your live internal data sources.</span>,
            details: ["Vector Databases", "Semantic Search", "Real-time sync", "Source citation"],
        },
        {
            icon: Lock,
            title: "Enterprise-Grade Security",
            description: "Your data stays yours. We implement SOC2-compliant architecture with PII masking and RBAC.",
            details: ["SOC2 compliance", "PII redaction", "End-to-End Encryption", "Role-based access"],
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics Dashboard",
            description: <span>Go beyond basic metrics. Track <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-pink-text)] transition-colors">user sentiment</Link>, intent trends, and conversation drop-off points.</span>,
            details: ["Sentiment tracking", "Intent heatmaps", "Conversion attribution", "Custom reports"],
        },
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Technology Stack & <span style={{ color: "var(--accent-indigo-text)" }}>Expertise</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We build on battle-tested frameworks and cutting-edge AI models to ensure scalability, security, and performance.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl transition-all duration-300 border"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 5%, var(--card-bg))";
                                    e.currentTarget.style.borderColor = "var(--brand-chatbot)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 50%, transparent)";
                                    e.currentTarget.style.borderColor = "var(--border-color)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-xl p-3 mb-6 group-hover:scale-110 transition-transform"
                                    style={{
                                        background: "linear-gradient(135deg, var(--brand-chatbot), var(--brand-blue))",
                                    }}
                                >
                                    <Icon className="w-full h-full text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {capability.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6" style={{ color: "var(--secondary-text)" }}>
                                    {capability.description}
                                </p>

                                {/* Details */}
                                <ul className="space-y-2">
                                    {capability.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-chatbot)" }} />
                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Tech Stack Highlight */}
                <div className="mt-16 p-8 rounded-2xl border"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Supported Platforms & Channels
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Web Chat", logo: "/images/ai_powered_chatbots_logos/web-chat.png" },
                            { name: "WhatsApp Business", logo: "/images/ai_powered_chatbots_logos/WhatsApp-logo.webp" },
                            { name: "Facebook Messenger", logo: "/images/ai_powered_chatbots_logos/Facebook-Messenger-logo.png" },
                            { name: "Telegram", logo: "/images/ai_powered_chatbots_logos/Telegram-logo.webp" },
                            { name: "Slack", logo: "/images/ai_powered_chatbots_logos/Slack-logo.png" },
                            { name: "Microsoft Teams", logo: "/images/ai_powered_chatbots_logos/Microsoft-Office-Teams-logo.png" },
                            { name: "Custom Integrations", logo: "/images/ai_powered_chatbots_logos/custom-integrations-logo.png" },
                            { name: "Mobile Apps", logo: "/images/ai_powered_chatbots_logos/mobile-apps.png" },
                        ].map((platform, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-lg text-center transition-all duration-300 flex flex-col items-center gap-3"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                    border: "1px solid var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)";
                                }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <Image
                                        src={platform.logo}
                                        alt={platform.name}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                    {platform.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
