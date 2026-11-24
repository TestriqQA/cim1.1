"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import FaqSection from "@/components/ui/FaqSection";

// Vivid accents stay for backgrounds/borders/gradients elsewhere; TEXT uses the
// theme-aware AA tokens so the same hue passes in light and dark.
const textAccent = (c: string) => ({
    "#008ac1": "var(--brand-blue-text)",
    "#00b5ca": "var(--accent-teal-text)",
    "#4e51d2": "var(--accent-indigo-text)",
    "#6db75c": "var(--accent-green-text)",
    "#f72585": "var(--accent-pink-text)",
    "#bc3feb": "var(--brand-purple-text)",
    "#ee6500": "var(--accent-orange-text)",
    "#fc9700": "var(--accent-chime-text)",
}[c?.toLowerCase()] ?? c);

// Where a visible answer mentions "Privacy Policy" and the product has one, that
// phrase links to it. The FAQPage structured data (built in the route) keeps the
// plain-text answer.
function linkPrivacyPolicy(answer: string, url: string | undefined, color: string): ReactNode {
    const phrase = "Privacy Policy";
    const i = url ? answer.indexOf(phrase) : -1;
    if (!url || i < 0) return answer;
    return (
        <>
            {answer.slice(0, i)}
            <Link href={url} className="font-medium underline underline-offset-2" style={{ color }}>
                {phrase}
            </Link>
            {answer.slice(i + phrase.length)}
        </>
    );
}

export default function FAQ({ product }: { product: Product }) {
    const accent = textAccent(product.accentColor);
    return (
        <FaqSection
            faqs={product.faqs.map((f) => ({ q: f.question, a: linkPrivacyPolicy(f.answer, product.privacyUrl, accent) }))}
            accent={accent}
            title={product.faqHeading ?? "Frequently Asked Questions"}
            subtitle={`Everything you need to know about ${product.name}. Can't find what you're looking for? Our support team is always ready to help.`}
            background="var(--card-bg)"
        />
    );
}
