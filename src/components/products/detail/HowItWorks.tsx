"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export default function HowItWorks({ product }: { product: Product }) {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
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

    // Darker shade for SOLID fills that carry a white label — the vivid accents
    // are too light for white (e.g. #6db75c gives 2.15:1).
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

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30`, color: textColor }}>Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        {product.howItWorksHeading ?? (
                            <>How <span style={{ color: textColor }}>{product.name}</span> Works</>
                        )}
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Get up and running in minutes with our simple, streamlined process.
                    </p>
                </div>
                {/* Columns follow the step count. The fixed `lg:grid-cols-4`
                    left a visibly empty fourth cell for any product whose
                    process has three steps, which reads as a missing step
                    rather than a deliberate three-step flow. */}
                <div
                    className={`grid gap-6 ${
                        product.process.length === 3
                            ? "md:grid-cols-3"
                            : product.process.length === 2
                                ? "md:grid-cols-2"
                                : "md:grid-cols-2 lg:grid-cols-4"
                    }`}
                >
                    {product.process.map((step, idx) => {
                        const isHovered = hoveredStep === idx;
                        return (
                            <div key={idx} className="relative" onMouseEnter={() => setHoveredStep(idx)} onMouseLeave={() => setHoveredStep(null)}>
                                {idx < product.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 z-0" style={{ background: `linear-gradient(90deg, ${color}40, ${color}10)` }} />
                                )}
                                <div className={`relative z-10 p-8 rounded-3xl border transition-all duration-300 h-full ${isHovered ? "-translate-y-2" : ""}`} style={{ borderColor: isHovered ? color : "var(--border-color)", backgroundColor: "var(--background)", boxShadow: isHovered ? `0 10px 30px ${color}15` : "none" }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-white shadow-lg transition-all duration-300" style={{ background: isHovered ? solidColor : `linear-gradient(135deg, ${solidColor}, ${solidColor}dd)` }}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
