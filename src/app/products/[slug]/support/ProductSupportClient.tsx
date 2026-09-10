"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Headphones,
    Mail,
    MessageSquare,
    BookOpen,
    Users,
    Video,
    Zap,
    Palette,
    Calendar,
    HelpCircle,
    Presentation,
    Phone,
    Clock,
    ChevronDown,
    ArrowUpRight,
} from "lucide-react";
import type { ProductSupport } from "@/data/productSupport";

const iconMap: Record<string, React.ElementType> = {
    Mail,
    MessageSquare,
    BookOpen,
    Users,
    Video,
    Zap,
    Palette,
    Calendar,
    HelpCircle,
    Presentation,
};

interface ProductSupportClientProps {
    support: ProductSupport;
    slug: string;
}

const ProductSupportClient: React.FC<ProductSupportClientProps> = ({ support, slug }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="mx-auto py-12 px-6 md:px-12 xl:px-16"
            style={{
                background: "var(--background)",
                color: "var(--foreground)",
                scrollPaddingTop: "5rem",
                scrollMarginTop: "5rem",
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Back link */}
                <div
                    className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <Link
                        href={`/products/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "var(--accent-teal-text)" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {support.productName}
                    </Link>
                </div>

                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                        style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))" }}
                    >
                        <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Support Center
                    </h1>
                    <p className="text-lg font-semibold" style={{ color: "var(--secondary-text)" }}>
                        {support.productName}
                    </p>
                    <p className="text-base mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        {support.intro}
                    </p>
                </div>

                {/* Quick Contact Banner */}
                <div
                    className={`mb-12 p-6 rounded-xl transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{
                        background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                    }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Need Immediate Help?</h2>
                            <p className="text-sm text-white/80">
                                {support.responseTime
                                    ? `Our support team responds ${support.responseTime.toLowerCase()}.`
                                    : `Email the ${support.productName} team and they will get back to you.`}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`mailto:${support.supportEmail}`}
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white text-gray-900"
                            >
                                <Mail className="w-4 h-4" />
                                {support.supportEmail}
                            </a>
                            {/* Optional. A product whose team publishes no phone
                                number must not ship a `tel:` link — an empty
                                supportPhone used to render one with no number in it. */}
                            {support.supportPhone && (
                                <a
                                    href={`tel:${support.supportPhone.replace(/-/g, "")}`}
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white/15 text-white border border-white/30"
                                >
                                    <Phone className="w-4 h-4" />
                                    {support.supportPhone}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Response Time Badge — omitted for products whose team publishes
                    no response-time commitment, rather than advertising one on
                    their behalf. */}
                {support.responseTime && (
                    <div
                        className={`flex items-center justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        <Clock className="w-4 h-4" style={{ color: "var(--accent-teal-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>
                            Average Response Time: <strong style={{ color: "var(--foreground)" }}>{support.responseTime}</strong>
                        </span>
                    </div>
                )}

                {/* Support Channels Grid */}
                <div className="mb-16">
                    <h2
                        className={`text-2xl font-bold text-center mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            How Can We Help?
                        </span>
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {support.channels.map((channel, index) => {
                            const IconComponent = iconMap[channel.icon] || Mail;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl border transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        transitionDelay: `${250 + index * 100}ms`,
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                        style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))" }}
                                    >
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {channel.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {channel.description}
                                    </p>
                                    {channel.action && channel.href && (
                                        <a
                                            href={channel.href}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
                                            style={{ color: "var(--accent-teal-text)" }}
                                        >
                                            {channel.action}
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Common Issues / FAQ */}
                <div className="mb-16">
                    <h2
                        className={`text-2xl font-bold text-center mb-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg, var(--brand-orange), var(--brand-yellow))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Common Issues & Solutions
                        </span>
                    </h2>
                    <p
                        className={`text-center text-sm mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Quick answers to the most frequently reported issues with {support.productName}.
                    </p>

                    <div className="space-y-3">
                        {support.commonIssues.map((issue, index) => (
                            <div
                                key={index}
                                className="rounded-xl border overflow-hidden transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: openFaq === index ? "var(--brand-cyan)" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    <span className="text-base font-semibold pr-4">{issue.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                                        style={{ color: "var(--accent-teal-text)" }}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96 pb-5" : "max-h-0"}`}
                                >
                                    <p
                                        className="px-5 text-sm leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {issue.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA Section */}
                <div
                    className="p-8 rounded-xl text-center"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--brand-yellow)",
                        borderWidth: "2px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-3">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Still Need Help?
                        </span>
                    </h3>
                    <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Can&apos;t find what you&apos;re looking for? Our dedicated support team is always ready to assist you with any {support.productName} related queries.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${support.supportEmail}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                            style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}
                        >
                            <Mail className="w-4 h-4" />
                            Email Support Team
                        </a>
                        {support.supportPhone && (
                            <a
                                href={`tel:${support.supportPhone.replace(/-/g, "")}`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all hover:shadow-md"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                <Phone className="w-4 h-4" />
                                Call Us
                            </a>
                        )}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-6 text-xs" style={{ color: "var(--secondary-text)" }}>
                        <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" style={{ color: "var(--accent-teal-text)" }} />
                            {support.supportEmail}
                        </span>
                        {support.supportPhone && (
                            <span className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5" style={{ color: "var(--accent-teal-text)" }} />
                                {support.supportPhone}
                            </span>
                        )}
                    </div>
                </div>

                {/* Back to product link */}
                <div className="mt-8 text-center">
                    <Link
                        href={`/products/${slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                        style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {support.productName}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductSupportClient;
