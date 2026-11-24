"use client";

import { MonitorPlay } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductDemo({ product }: { product: Product }) {
    // No video, no section: a "Product walkthrough coming soon" placeholder read
    // as unfinished (SEO check, 24 Nov 2026). Adding demoVideoUrl brings it back.
    if (!product.demoVideoUrl) return null;

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
        "#fc9700": "var(--accent-chime-text)",
    }[c?.toLowerCase()] ?? c);
    const textColor = textAccent(color);

    return (
        <section className="py-16 md:py-20 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 max-w-6xl">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold leading-none border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30`, color: textColor }}>
                            <MonitorPlay aria-hidden="true" className="flex-shrink-0" style={{ width: "1.15em", height: "1.15em", color }} />
                            Product Demo
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        See <span style={{ color: textColor }}>{product.name}</span> in Action
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Watch how our features can streamline your workflow and boost your productivity instantly.
                    </p>
                </div>
                
                <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border shadow-2xl group" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                    {/* A 16:9 player */}
                    <div className="relative w-full bg-zinc-900" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            src={product.demoVideoUrl}
                            title={`${product.name} product demo video`}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
