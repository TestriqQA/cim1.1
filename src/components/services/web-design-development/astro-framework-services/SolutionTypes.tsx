"use client";

import { useEffect, useState } from "react";
import {
    BookOpenCheck,
    Briefcase,
    Building2,
    CheckCircle2,
    Megaphone,
    PenLine,
    Puzzle,
    ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Megaphone,
            title: "Marketing Websites",
            description: <>High-performance marketing sites that rank well and convert visitors with <Link href="/services/seo-services/technical-seo-services" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">Astro SEO audit</Link> and optimization services built-in.</>,
            features: [
                "SaaS & B2B focus",
                "SEO audit included",
                "High conversion rate",
                "Advanced analytics",
            ],
            gradient: "from-[#FF5D01] to-[#FF8534]",
        },
        {
            icon: Building2,
            title: "Corporate Sites",
            description: <><Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">Professional company websites</Link> that establish credibility and trust. Custom Astro website development with brand consistency.</>,
            features: [
                "Enterprise security",
                "Brand consistency",
                "Investor relations",
                "Career portals",
            ],
            gradient: "from-[#FF5D01] to-[#FF8534]",
        },
        {
            icon: Briefcase,
            title: "Portfolio & Personal",
            description: "Showcase creative work beautifully with Astro framework for portfolio websites that load instantly and impress clients.",
            features: [
                "Instant visual load",
                "Project galleries",
                "Client testimonials",
                "Creative focus",
            ],
            gradient: "from-[#FF5D01] to-[#E14F00]",
        },
        {
            icon: BookOpenCheck,
            title: "Documentation Portals",
            description: "Technical docs and knowledge bases with excellent search powered by Astro framework ecosystem and integrations.",
            features: [
                "Versioned docs",
                "Full-text search",
                "API references",
                "Developer portals",
            ],
            gradient: "from-[#FF8534] to-[#FF5D01]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Catalogs",
            description: <>Fast product showcases that drive purchases with <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">Astro headless CMS integration services</Link> for flexible management.</>,
            features: [
                "Headless CMS sync",
                "Product filtering",
                "Cart integration",
                "B2B catalogs",
            ],
            gradient: "from-[#FF5D01] to-[#E14F00]",
        },
        {
            icon: PenLine,
            title: "Blog Platforms",
            description: "Content-focused Astro development for content-rich sites with excellent reading experience and author workflows.",
            features: [
                "MDX & CMS support",
                "Author templates",
                "RSS & Newsletters",
                "SEO excellence",
            ],
            gradient: "from-[#FF5D01] to-[#E14F00]",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(255, 93, 1, 0.05)",
                            borderColor: "rgba(255, 93, 1, 0.2)",
                        }}
                    >
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                            Solutions We Deliver
                        </span>
                    </div>

                    

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span style={{ color: "var(--accent-orange-text)" }}>
                            Deliver
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Astro framework services excel at building content-focused websites with exceptional performance. Our Astro server-side rendering (SSR) services and static site generation (SSG) with Astro JS cover every business need.
                    </p>
                </div>

                {/* Hovering a card opens the tick lists of its whole row (so the row
                    stays even) but highlights only that card. The row stays open while
                    the mouse moves between its cards; it closes when the mouse leaves
                    the grid. The lists open to their real height (grid rows 0fr to
                    1fr), and everything shares one 400ms ease. On touch, tap toggles. */}
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    onMouseLeave={() => {
                        if (window.matchMedia("(hover: hover)").matches) {
                            setActiveSolution(null);
                        }
                    }}
                >
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isOpen = activeSolution !== null && Math.floor(activeSolution / columns) === Math.floor(idx / columns);
                        const isHighlighted = activeSolution === idx;

                        return (
                            <div
                                key={idx}
                                className={`relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "border-[#FF5D01]/50" : "border-[var(--border-color)]"}`}
                                style={{ backgroundColor: "var(--card-bg)" }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Light tint on the highlighted card */}
                                <div
                                    className={`absolute inset-0 pointer-events-none transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-5" : "opacity-0"}`}
                                    style={{ background: "linear-gradient(135deg, #FF5D01, #FF8534)" }}
                                />

                                {/* Icon: the accent fill fades in rather than switching */}
                                <div
                                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "scale-110" : "scale-100"}`}
                                    style={{ background: "rgba(255, 93, 1, 0.1)" }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "opacity-100" : "opacity-0"}`}
                                        style={{ background: "linear-gradient(135deg, #C94600, #B33E00)" }}
                                    />
                                    <Icon
                                        aria-hidden="true"
                                        className={`relative w-6 h-6 transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none ${isHighlighted ? "text-white" : "text-[var(--accent-orange-text)]"}`}
                                    />
                                </div>

                                <h3 className="relative text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="relative text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features list: opens to its real height */}
                                <div
                                    className={`relative grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        {/* The gap above the list lives inside the part that
                                            collapses, so a closed card has no empty space. */}
                                        <div className="pt-6 space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                    <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-orange-text)]" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
