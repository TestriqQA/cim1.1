import type { CSSProperties } from "react";
import {
    FileText,
    Rocket,
    Search,
    Trophy,
    Gauge,
    Component,
    Unlock,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Gauge,
            title: "Blazing Fast Performance ⚡",
            description: <>Zero JavaScript by default means your site loads instantly. Our <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">performance optimization</Link> achieves consistent sub-1-second load times.</>,
            gradient: "from-violet-500 via-purple-500 to-indigo-500",
            iconColor: "var(--color-violet-500, #8b5cf6)",
        },
        {
            icon: Search,
            title: "SEO Excellence 🔍",
            description: <>Static HTML output and fast load times result in superior rankings with built-in <Link href="/services/seo-services/technical-seo-services" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">SEO audit</Link> and optimization services.</>,
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            iconColor: "var(--color-orange-500, #f97316)",
        },
        {
            icon: Component,
            title: "Islands Architecture 🏝️",
            description: "Selective hydration loads JavaScript only where needed for interactive components, reducing TTI by up to 70%.",
            gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
            iconColor: "var(--color-purple-500, #a855f7)",
        },
        {
            icon: Unlock,
            title: "Framework Freedom 🛠️",
            description: "Astro integration with React and Vue allows you to use preferred frameworks together without conflicts or performance hits.",
            gradient: "from-pink-500 via-rose-500 to-red-500",
            iconColor: "var(--color-pink-500, #ec4899)",
        },
        {
            icon: FileText,
            title: "Content-First Design 📝",
            description: "Perfect for content-rich sites with built-in MDX and headless CMS support for flexible content management.",
            gradient: "from-cyan-500 via-blue-500 to-indigo-500",
            iconColor: "var(--color-cyan-500, #06b6d4)",
        },
        {
            icon: Rocket,
            title: "Future Ready 🚀",
            description: "Built on modern web standards with edge deployment and View Transitions API for smooth, app-like navigation.",
            gradient: "from-emerald-500 via-green-500 to-teal-500",
            iconColor: "var(--color-emerald-500, #10b981)",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 93, 1, 0.1), rgba(255, 133, 52, 0.1))",
                            border: "1px solid rgba(255, 93, 1, 0.2)",
                        }}>
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                            Why Choose Us
                        </span>
                    </div>
                    

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Astro is the </span>{" "}
                        <span
                            className="inline-block" style={{ color: "var(--accent-orange-text)" }}>
                            Right Choice
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Experience the benefits of a modern, performance-focused web framework.
                    </p>
                </div>

                {/* Cards Grid: cards side by side share one size (phones: each fits its
                    content; the card itself is the grid item). Hover: the border turns
                    the card's own icon colour and the card lifts 4px (colour change
                    only for reduced-motion users). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-3xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": reason.iconColor } as CSSProperties}
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${reason.gradient}`}>
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {reason.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
