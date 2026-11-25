"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
    Cloud,
    FileText,
    Layers,
    Code2,
    Component,
} from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);
    // The fade-in runs only after a real tab switch: this component's <style jsx>
    // CSS is injected on the client, so animating on first load would flash.
    const [switched, setSwitched] = useState(false);

    // The content box eases between heights when the tab changes, so switching
    // between a 5-tool and a 4-tool tab glides instead of jumping. The height is
    // fixed only for the 400ms of the change; at rest it is auto, so a resize
    // (or printing) can never clip the cards.
    const boxRef = useRef<HTMLDivElement>(null);
    const fromHeight = useRef<number | null>(null);

    const selectCategory = (idx: number) => {
        if (idx === activeCategory) return;
        fromHeight.current = boxRef.current?.offsetHeight ?? null;
        setActiveCategory(idx);
        setSwitched(true);
    };

    useLayoutEffect(() => {
        const box = boxRef.current;
        const from = fromHeight.current;
        fromHeight.current = null;
        if (!box || from === null) return;
        box.style.height = "";
        const to = box.offsetHeight; // natural height with the new cards
        if (from === to) return;
        box.style.height = `${from}px`;
        void box.offsetHeight; // apply the start height before animating
        box.style.height = `${to}px`;
        const release = () => {
            box.style.height = "";
        };
        box.addEventListener("transitionend", release, { once: true });
        const fallback = window.setTimeout(release, 450);
        return () => {
            window.clearTimeout(fallback);
            box.removeEventListener("transitionend", release);
        };
    }, [activeCategory]);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Code2,
            description: "Astro ecosystem fundamentals for near-perfect PageSpeed",
            technologies: [
                { name: "Astro", description: "Zero JS by default, Islands Architecture, near-perfect PageSpeed", logo: "/images/techstack_logos/Astro-logo.svg" },
                { name: "TypeScript", description: "Type safety, better IDE support, enterprise-ready", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "JavaScript", description: "Universal language, ecosystem compatibility", logo: "/images/techstack_logos/javascript-logo.svg" },
                { name: "HTML5", description: "SEO excellence, accessibility, web standards", logo: "/images/techstack_logos/html5-logo.svg" },
                { name: "CSS3", description: "Modern styling, responsive design, animations", logo: "/images/techstack_logos/css3-logo.svg" },
            ],
        },
        {
            id: "frameworks",
            title: "UI Frameworks",
            icon: Component,
            description: "Reusable islands for rich ecosystem features",
            technologies: [
                { name: "React", description: "Rich ecosystem, familiar developer experience", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Vue.js", description: "Lightweight components, simple integration", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Svelte", description: "Zero runtime, smallest bundles, blazing performance", logo: "/images/techstack_logos/Svelte-Logo.png" },
                { name: "Solid.js", description: "Reactive Framework", logo: "/images/techstack_logos/solidjs-logo.png" },
                { name: "Tailwind CSS", description: "Rapid prototyping, design consistency", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
            ],
        },
        {
            id: "content",
            title: "Content & CMS",
            icon: FileText,
            description: "Optimized content management solutions",
            technologies: [
                { name: "MDX", description: "Rich content, component embedding", logo: "/images/techstack_logos/mdx-logo.webp" },
                { name: "Markdown", description: "Simple authoring, version control friendly", logo: "/images/techstack_logos/Markdown-logo.png" },
                { name: "Contentful", description: "Headless CMS, API-first publishing", logo: "/images/techstack_logos/Contentful-logo.webp" },
                { name: "Sanity", description: "Structured content platform", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Strapi", description: "Open source CMS, flexible management", logo: "/images/techstack_logos/Strapi-logo.png" },
            ],
        },
        {
            id: "tools",
            title: "Build & Deploy",
            icon: Cloud,
            description: "Modern static site generator solutions",
            technologies: [
                { name: "Vite", description: "Lightning-fast HMR, optimized builds", logo: "/images/techstack_logos/vitejs-logo.svg" },
                { name: "Vercel", description: "Global CDN, edge deployment, instant rollbacks", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", description: "Global CDN, preview deployments", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "Cloudflare", description: "Edge Network", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
            ],
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                            Our Tech Stack
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span style={{ color: "var(--accent-orange-text)" }}>
                            Astro
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Astro framework ecosystem and integrations seamlessly connect with your favorite tools and frameworks for modern static site generator solutions.
                    </p>
                </div>

                {/* Category Tabs: no glow or grow, 1px border. The selected tab is
                    #FF5D01; the others get a 50% accent border on
                    hover. Icon-only 44x44 tabs on phones. */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => selectCategory(idx)}
                                aria-label={category.title}
                                aria-pressed={isActive}
                                className={`flex items-center justify-center min-h-11 min-w-11 sm:min-h-0 sm:min-w-0 gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm border transition duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                    ? "bg-[#C94600] border-[#C94600] text-white focus-visible:brightness-120"
                                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#FF5D01]/50 focus-visible:border-[#FF5D01]/50"
                                    }`}
                            >
                                <Icon className="w-4 h-4" aria-hidden="true" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Height eases between tabs. pt-1/-mt-1 leave room inside the clip
                        for the cards' 4px hover lift. */}
                    <div
                        ref={boxRef}
                        className="-mt-1 pt-1 overflow-hidden transition-[height] duration-[400ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div>
                            {/* The open tab's name and short description, centred above
                                the cards at every size (phones show icon-only tabs). Keyed
                                on the tab so it fades in with the cards. */}
                            <div
                                key={`name-${activeCategory}`}
                                className={`mb-4 sm:mb-6 text-center ${switched ? "tech-card-in" : ""}`}
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-[var(--accent-orange-text)]">
                                    {categories[activeCategory].title}
                                </h3>
                                <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--secondary-text)" }}>
                                    {categories[activeCategory].description}
                                </p>
                            </div>
                            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {categories[activeCategory].technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#FF5D01]/50 hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${switched ? "tech-card-in" : ""}`}
                                        style={{
                                            backgroundColor: "var(--background)",
                                            animationDelay: switched ? `${idx * 40}ms` : undefined,
                                        }}
                                    >
                                        {/* Logo */}
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={tech.logo}
                                                alt={tech.name}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="font-semibold truncate"
                                                style={{ color: "var(--accent-orange-text)" }}
                                            >
                                                {tech.name}
                                            </p>
                                            <p
                                                className="text-sm truncate"
                                                style={{ color: "var(--secondary-text)" }}
                                            >
                                                {tech.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes techCardIn {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .tech-card-in {
                        animation: techCardIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .tech-card-in { animation: none; }
                    }
                `}</style>
            </div>
        </section>
    );
}
