"use client";

import { Home, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300 pt-32 pb-20"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative text-center">
                {/* Breadcrumbs */}
                <nav
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-8 justify-center animate-fadeIn"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span
                        className="font-semibold"
                        style={{ color: "var(--brand-blue-text)" }}
                    >
                        Services
                    </span>
                </nav>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slideUp">
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            background: "linear-gradient(135deg, var(--brand-blue), var(--brand-purple))",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Our Services
                    </span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto animate-slideUp" style={{ color: "var(--secondary-text)", animationDelay: "0.1s" }}>
                    Explore our comprehensive digital services including <Link href="/services/web-design-development" className="hover:text-[var(--brand-blue-text)] transition-colors">web development</Link>, <Link href="/services/mobile-app-development" className="hover:text-[var(--accent-teal-text)] transition-colors">mobile apps</Link>, <Link href="/services/seo-services" className="hover:text-[var(--brand-blue-text)] transition-colors">SEO</Link>, <Link href="/services/social-media-marketing-services" className="hover:text-[var(--accent-orange-text)] transition-colors">social media marketing</Link>, <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-purple-text)] transition-colors">AI automation</Link>, and more. Transform your business with CIM.
                </p>

                {/* Decorator */}
                <div className="flex justify-center animate-slideUp" style={{ animationDelay: "0.2s" }}>
                    <div className="p-2 rounded-full border" style={{ borderColor: "var(--border-color)" }}>
                        <Sparkles className="w-6 h-6" style={{ color: "var(--brand-blue-text)" }} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
