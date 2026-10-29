import { Zap, Shield, Globe, Code2, Layers, Rocket } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: Zap,
            title: "Next.js SSR Services",
            description: "Deliver content instantly to users and search engines alike with server-side rendering.",
        },
        {
            icon: Shield,
            title: "Static Site Generation",
            description: "Pre-render pages for unparalleled speed and security using Next.js SSG capabilities.",
        },
        {
            icon: Globe,
            title: "Incremental Static Regeneration",
            description: "Update static content in milliseconds without rebuilding the entire application via ISR.",
        },
        {
            icon: Code2,
            title: "API Routes & Backend",
            description: <>Seamless serverless web application development with TypeScript and <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Next.js API routes</Link>.</>,
        },
        {
            icon: Layers,
            title: "Tailwind CSS & UI/UX",
            description: <>Beautiful, responsive interfaces that convert visitors into loyal customers with <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">modern design</Link>.</>,
        },
        {
            icon: Rocket,
            title: <Link href="/blog/future-web-development-nextjs" className="hover:text-[var(--accent-cyan-text)] transition-colors">App Router Expertise</Link>,
            description: "Leveraging the latest patterns for optimized data fetching and layout management.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #61dafb 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Code2 className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Technical Excellence
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        High-Performance{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Technical expertise
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        In the post-December 2025 Google update landscape, speed and user experience are non-negotiable. As a global React JS development company, we focus on Next.js speed optimization and <Link href="/blog/lazy-loading-image-optimization-core-web-vitals" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Core Web Vitals</Link> to ensure your site stays at the top of Google&apos;s AI Overviews.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                        boxShadow: "0 4px 16px rgba(97, 218, 251, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-black" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
