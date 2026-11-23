"use client";

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

export default function FAQ({ product }: { product: Product }) {
    return (
        <FaqSection
            faqs={product.faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent={textAccent(product.accentColor)}
            title={product.faqHeading ?? "Frequently Asked Questions"}
            subtitle={`Everything you need to know about ${product.name}. Can't find what you're looking for? Our support team is always ready to help.`}
            background="var(--card-bg)"
        />
    );
}
