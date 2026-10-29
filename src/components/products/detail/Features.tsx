"use client";

import { useState } from "react";
import React from "react";
import { Brain, Eye, Zap, GitBranch, BarChart3, Shield, BookOpen, Globe, UserCheck, Languages, BarChart, Workflow, Puzzle, Mail, FileText, Clock, GitMerge, LayoutDashboard, TrendingUp, Target, PieChart, Lightbulb, Users, MousePointer2, Sparkles, Gauge, Search, ShoppingCart, Rocket, CalendarDays, Wand2, BarChart2, Inbox, Hash } from "lucide-react";
import type { Product } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    Brain, Eye, Zap, GitBranch, BarChart3, Shield, BookOpen, Globe, UserCheck, Languages, BarChart, Workflow, Puzzle, Mail, FileText, Clock, GitMerge, LayoutDashboard, TrendingUp, Target, PieChart, Lightbulb, Users, MousePointer2, Sparkles, Gauge, Search, ShoppingCart, Rocket, CalendarDays, Wand2, BarChart2, Inbox, Hash,
};

export default function Features({ product }: { product: Product }) {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const color = product.accentColor;
    const featureColors = [color, "#3B82F6", "#F59E0B", "#8B5CF6", "#EC4899", "#06B6D4"];

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
        <section className="py-24 relative overflow-hidden transition-colors duration-300 border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse" style={{ backgroundColor: color, animationDuration: "4s" }} />
            </div>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30`, color: textColor }}>Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        {product.featuresHeading ?? (
                            <>Powerful Features for <span style={{ color: textColor }}>Maximum Impact</span></>
                        )}
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        {product.featuresIntro ?? "Everything you need to supercharge your workflow — built with cutting-edge technology and designed for simplicity."}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.features.map((feature, idx) => {
                        const Icon = iconMap[feature.icon] || Zap;
                        const isHovered = hoveredCard === idx;
                        const cardColor = featureColors[idx % featureColors.length];
                        return (
                            <div key={idx} className="group" onMouseEnter={() => setHoveredCard(idx)} onMouseLeave={() => setHoveredCard(null)}>
                                <div className={`relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full ${isHovered ? "-translate-y-2" : ""}`} style={{ borderColor: isHovered ? cardColor : "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`} style={{ background: `radial-gradient(circle at top right, ${cardColor}, transparent)` }} />
                                    <div className="relative mb-6">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`} style={{ backgroundColor: isHovered ? cardColor : "var(--background)" }}>
                                            <Icon className="w-8 h-8 transition-all duration-500" style={{ color: isHovered ? "white" : "var(--foreground)" }} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: "var(--foreground)" }}>{feature.title}</h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
