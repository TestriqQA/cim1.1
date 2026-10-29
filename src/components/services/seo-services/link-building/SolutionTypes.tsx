"use client";

import { useState } from "react";
import { FileEdit, Users, BookMarked, LinkIcon, Newspaper, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const linkTypes = [
        {
            id: 1,
            icon: FileEdit,
            title: "Editorial Links",
            frontDesc: "Natural links earned through quality content",
            backDesc: <>When other sites link to yours because your <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline" style={{ color: "white" }}>content is valuable</Link>, informative, or newsworthy. These are the most valuable type of backlinks.</>,
            examples: ["Resource citations", "Expert quotes", "Data references"],
        },
        {
            id: 2,
            icon: Users,
            title: "Guest Post Links",
            frontDesc: "Contextual links from authored content",
            backDesc: "Links placed within guest articles you write for other websites. These provide context and relevance while building relationships.",
            examples: ["Industry blogs", "Niche publications", "Partner sites"],
        },
        {
            id: 3,
            icon: BookMarked,
            title: "Resource Page Links",
            frontDesc: "Links from curated resource lists",
            backDesc: "Getting your content featured on resource pages that curate the best content in a specific topic or industry.",
            examples: ["University pages", "Industry roundups", "Tool lists"],
        },
        {
            id: 4,
            icon: LinkIcon,
            title: "Broken Link Building",
            frontDesc: "Replacing dead links with your content",
            backDesc: "Finding broken links on other sites and offering your relevant content as a replacement. Win-win for both parties.",
            examples: ["404 pages", "Outdated resources", "Moved content"],
        },
        {
            id: 5,
            icon: Newspaper,
            title: "HARO & Press",
            frontDesc: "Media coverage and journalist requests",
            backDesc: <>Responding to journalist queries and getting featured in <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline" style={{ color: "white" }}>news articles</Link>, earning high-authority editorial links.</>,
            examples: ["News articles", "Expert roundups", "Industry reports"],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${linkCyan}15`,
                            borderColor: `${linkCyan}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: linkCyan }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Link Strategies
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Types of <span style={{ color: "var(--accent-cyan-text)" }}>Backlinks</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We acquire diverse, high-quality backlinks tailored to your industry and goals.
                    </p>
                </div>

                {/* Flip Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {linkTypes.map((type) => (
                        <div
                            key={type.id}
                            className="relative h-72 perspective-1000 cursor-pointer"
                            onMouseEnter={() => setFlippedCard(type.id)}
                            onMouseLeave={() => setFlippedCard(null)}
                        >
                            {/* Card Container */}
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedCard === type.id ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front Side */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${linkCyan}15` }}
                                    >
                                        <type.icon className="w-7 h-7" style={{ color: linkCyan }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {type.title}
                                    </h3>
                                    <p className="text-sm flex-1" style={{ color: "var(--secondary-text)" }}>
                                        {type.frontDesc}
                                    </p>
                                    <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                                        <span>Hover to learn more</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col"
                                    style={{
                                        backgroundColor: "#155e75",
                                        borderColor: linkCyan,
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {type.title}
                                    </h3>
                                    <p className="text-sm flex-1 text-white">
                                        {type.backDesc}
                                    </p>
                                    <div className="mt-4">
                                        <p className="text-xs font-semibold text-white mb-2">EXAMPLES:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {type.examples.map((ex, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white"
                                                >
                                                    {ex}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for 3D perspective */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
