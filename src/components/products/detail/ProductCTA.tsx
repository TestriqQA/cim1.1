"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2 } from "lucide-react";
import type { Product } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2,
};

export default function ProductCTA({ product }: { product: Product }) {
    const color = product.accentColor;
    const Icon = iconMap[product.icon] || ShieldCheck;

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

    // Darker shade for SOLID fills that carry a white label — the vivid accents
    // are too light for white (e.g. #6db75c gives 2.45:1).
    const solidAccent = (c: string) => ({
        "#008ac1": "#006d97",
        "#00b5ca": "#115e59",
        "#4e51d2": "#4338ca",
        "#6db75c": "#166534",
        "#f72585": "#be185d",
        "#bc3feb": "#a21caf",
        "#ee6500": "#c2410c",
    }[c?.toLowerCase()] ?? c);
    const solidColor = solidAccent(color);

    // The closing CTA points wherever the product actually lives: its own site,
    // then a browser-extension store listing, then CIM's contact form. Both
    // external cases open in a new tab; the fallback stays an internal <Link>.
    const ctaHref = product.externalUrl ?? product.extensionUrl;
    const ctaClass =
        "w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg";
    const ctaStyle = { backgroundColor: solidColor, boxShadow: `0 4px 20px ${color}40` };

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50" />
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="relative rounded-3xl overflow-hidden border p-8 md:p-16 text-center" style={{ background: "linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%)", borderColor: "var(--border-color)" }}>
                    <div className="absolute top-8 left-8 opacity-5">
                        <Icon className="w-24 h-24" style={{ color }} />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-5">
                        <Icon className="w-32 h-32" style={{ color }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        {product.closingCtaHeading ?? (
                            <>
                                Ready to Get Started with <br />
                                <span style={{ color: textColor }}>
                                    <Link href="/contact" className="hover:underline">{product.name}?</Link>
                                </span>
                            </>
                        )}
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        {product.closingCtaBody ?? `Join thousands of businesses already using ${product.name} to save time, reduce costs, and achieve better results.`}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* This used to be an unguarded `href={`${product.extensionUrl}`}`,
                            so any product without an extensionUrl shipped a live
                            href="undefined" pointing at /products/<slug>/undefined.
                            Destination now mirrors ProductHero: the product's own site
                            if it has one, the store listing for extensions, /contact
                            otherwise. */}
                        {ctaHref ? (
                            <a
                                href={ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ctaClass}
                                style={ctaStyle}
                            >
                                {product.closingCtaLabel ?? "Get Started Free"}
                                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                            </a>
                        ) : (
                            <Link href="/contact" className={ctaClass} style={ctaStyle}>
                                {product.closingCtaLabel ?? "Get Started Free"}
                                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                            </Link>
                        )}
                    </div>
                    <div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-12 md:gap-24" style={{ borderColor: "var(--border-color)" }}>
                        {product.stats.slice(0, 3).map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>{stat.value}</p>
                                <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
