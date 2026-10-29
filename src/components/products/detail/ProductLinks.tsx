"use client";

import Link from "next/link";
import { Headphones, FileText, ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductLinks({ product }: { product: Product }) {
    const color = product.accentColor;

    // Vivid accents stay for backgrounds/borders/gradients; TEXT uses the
    // theme-aware AA tokens so the same hue passes in light and dark.
    const textAccent = (c: string) => ({
        "#008ac1": "var(--brand-blue-text)",
        "#00b5ca": "var(--accent-teal-text)",
        "#4e51d2": "var(--accent-indigo-text)",
        "#6db75c": "var(--accent-green-text)",
        "#f72585": "var(--accent-pink-text)",
        "#bc3feb": "var(--brand-purple-text)",
        "#ee6500": "var(--accent-orange-text)",
    }[c?.toLowerCase()] ?? c);
    const textColor = textAccent(color);

    return (
        <section className="py-12 border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="rounded-3xl border p-8 md:p-10" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                {product.name} Resources
                            </h3>
                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                Need help or want to learn more about our policies?
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={product.supportUrl} className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" style={{ borderColor: color, color: textColor, backgroundColor: `${color}08` }}>
                                <Headphones className="w-4 h-4" />
                                Support
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                            {product.privacyUrl && (
                                <Link href={product.privacyUrl} className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" style={{ borderColor: "var(--border-color)", color: "var(--foreground)", backgroundColor: "var(--card-bg)" }}>
                                    <FileText className="w-4 h-4" />
                                    Privacy Policy
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
