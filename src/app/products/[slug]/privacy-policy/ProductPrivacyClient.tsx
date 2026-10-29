"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import type { PrivacyOperator, ProductPrivacyPolicy } from "@/data/productPrivacy";

interface ProductPrivacyClientProps {
    policy: ProductPrivacyPolicy;
    slug: string;
}

// Cinute InfoMedia's own details, used for the products CIM operates. These
// were hard-coded into this component and therefore printed on EVERY product
// privacy page, including one whose policy names a different data controller.
// A policy that carries its own `operator` now overrides them.
const CIM_OPERATOR: PrivacyOperator = {
    name: "Cinute InfoMedia",
    addressLines: [
        "Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park",
        "Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107",
        "India",
    ],
    email: "contact@cinuteinfomedia.com",
    phones: ["+91-9004988859", "+91-7700995410"],
    websiteLabel: "www.cinuteinfomedia.com",
    websiteUrl: "https://www.cinuteinfomedia.com",
};

const ProductPrivacyClient: React.FC<ProductPrivacyClientProps> = ({ policy, slug }) => {
    const [isVisible, setIsVisible] = useState(false);
    const operator: PrivacyOperator = policy.operator ?? CIM_OPERATOR;

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
            <div className="max-w-4xl mx-auto">
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
                        Back to {policy.productName}
                    </Link>
                </div>

                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))" }}>
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Privacy Policy
                    </h1>
                    <p className="text-lg font-semibold" style={{ color: "var(--secondary-text)" }}>
                        {policy.productName}
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--secondary-text)" }}>
                        Last Updated: {policy.lastUpdated}
                    </p>
                </div>

                {/* Introduction */}
                <div
                    className={`mb-12 p-6 rounded-lg transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderLeft: "4px solid var(--brand-purple)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        {policy.intro}
                    </p>
                    <p className="text-base leading-relaxed mt-4" style={{ color: "var(--secondary-text)" }}>
                        By using {policy.productName}, you agree to the collection and processing described in this policy. If you do not agree, please do not use the service.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-8">
                    {policy.sections.map((section, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                borderWidth: "1px",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                                transitionDelay: `${150 + index * 80}ms`,
                            }}
                        >
                            <h2
                                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(90deg,var(--brand-purple),var(--brand-cyan))",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.content.map((item, idx) => (
                                    <div key={idx}>
                                        {item.subtitle && (
                                            <h3
                                                className="text-lg font-semibold mb-2"
                                                style={{ color: "var(--accent-amber-text)" }}
                                            >
                                                {item.subtitle}
                                            </h3>
                                        )}
                                        <p
                                            className="text-base leading-relaxed"
                                            style={{ color: "var(--secondary-text)", whiteSpace: "pre-line" }}
                                        >
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div
                    className="mt-12 p-8 rounded-lg"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--brand-yellow)",
                        borderWidth: "2px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg,var(--brand-orange),var(--brand-yellow))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Get In Touch
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                {operator.name}
                            </p>
                            {operator.addressLines?.map((line, i) => (
                                <p
                                    key={i}
                                    className="text-sm mb-1 last:mb-0"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {line}
                                </p>
                            ))}
                            {operator.canonicalUrl && (
                                <p className="text-sm mt-4" style={{ color: "var(--secondary-text)" }}>
                                    This policy is reproduced from{" "}
                                    <a
                                        href={operator.canonicalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:no-underline"
                                    >
                                        the version published by {operator.name}
                                    </a>
                                    , which is the authoritative copy.
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="mb-3">
                                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                    Email:
                                </p>
                                <a
                                    href={`mailto:${operator.email}`}
                                    className="text-sm hover:underline"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {operator.email}
                                </a>
                            </div>

                            {operator.phones && operator.phones.length > 0 && (
                                <div className="mb-3">
                                    <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                        Phone:
                                    </p>
                                    {operator.phones.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                                            className="text-sm block hover:underline py-2"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            )}

                            <div>
                                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                    Website:
                                </p>
                                <a
                                    href={operator.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {operator.websiteLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                        Thank you for trusting {policy.productName} with your information.
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--secondary-text)" }}>
                        {operator.name} is committed to maintaining the highest standards of
                        privacy and security.
                    </p>
                </div>

                {/* Back to product link */}
                <div className="mt-8 text-center">
                    <Link
                        href={`/products/${slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                        style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {policy.productName}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductPrivacyClient;
