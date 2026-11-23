"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import type { Product } from "@/data/products";

export default function TechStack({ product }: { product: Product }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold leading-none border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30`, color: textColor }}>
                            <Layers aria-hidden="true" className="flex-shrink-0" style={{ width: "1.15em", height: "1.15em", color }} />
                            Tech Stack
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        Built With <span style={{ color: textColor }}>Modern Technology</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Powered by the same battle-tested technologies we use to deliver enterprise solutions for our clients.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {product.techStack.map((tech, idx) => {
                        const isHovered = hoveredIdx === idx;
                        return (
                            <div key={idx} className="px-8 py-4 rounded-2xl border text-sm font-semibold transition-all duration-300 cursor-pointer" style={{ backgroundColor: isHovered ? `${color}10` : "var(--card-bg)", borderColor: isHovered ? color : "var(--border-color)", color: isHovered ? textColor : "var(--foreground)", transform: isHovered ? "translateY(-4px)" : "none", boxShadow: isHovered ? `0 10px 30px ${color}15` : "none" }} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
                                {tech}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
