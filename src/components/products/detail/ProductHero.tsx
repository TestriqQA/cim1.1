"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight, ArrowRight, ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2, Chrome } from "lucide-react";
import type { Product } from "@/data/products";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2,
};

// Logos for the hero's tech orbit, keyed by the names products use in
// `techStack`. Every file already lives in /public. `invert` flips logos drawn
// in black so they stay visible on the dark page. A name with no entry falls
// back to the Chrome icon (for the extension API) or to its initials.
const techLogos: Record<string, { src: string; invert?: boolean }> = {
    "React": { src: "/images/techstack_logos/react-logo.svg" },
    "TypeScript": { src: "/images/techstack_logos/typescript-logo.svg" },
    "Node.js": { src: "/images/techstack_logos/nodejs-logo.svg" },
    "OpenAI": { src: "/images/ai_automation_logos/openai-logo.svg", invert: true },
    "Claude AI": { src: "/images/techstack_logos/anthropic-logo.svg" },
    "Redis": { src: "/images/techstack_logos/redis-logo.svg" },
    "PostgreSQL": { src: "/images/techstack_logos/postgresql-logo.svg" },
    "TailwindCSS": { src: "/images/techstack_logos/tailwindcss-logo.svg" },
};

export default function ProductHero({ product }: { product: Product }) {
    const Icon = iconMap[product.icon] || ShieldCheck;
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

    // Darker shade for SOLID fills that carry a white label — the vivid accents
    // are too light for white (e.g. #6db75c gives 2.45:1).
    const solidAccent = (c: string) => ({
        "#008ac1": "#006d97",
        "#00b5ca": "#115e59",
        "#4e51d2": "#4338ca",
        "#6db75c": "#166534",
        "#f72585": "#be185d",
        "#bc3feb": "#a21caf",
        "#ee6500": "#c2410c",
        "#fc9700": "#a86500",
    }[c?.toLowerCase()] ?? c);
    const solidColor = solidAccent(color);

    // The tech orbit shows the first six technologies: three on the inner ring,
    // three on the outer. The outer ring starts 60 degrees round so its logos
    // sit between the inner ones. Each chip counter-rotates at its own ring's
    // speed, which keeps the logos upright as they travel.
    const orbitTech = product.techStack.slice(0, 6);
    const orbitRings = [
        { size: 90, items: orbitTech.slice(3), startDeg: -30, spin: "orbit-ccw", upright: "orbit-ccw-upright" },
        { size: 60, items: orbitTech.slice(0, 3), startDeg: -90, spin: "orbit-cw", upright: "orbit-cw-upright" },
    ].filter((ring) => ring.items.length > 0);
    const initials = (name: string) => name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();

    // "Add to Chrome — Free AI Comment Generator" splits at the dash into an
    // action and a description, so phones can stack the two parts.
    const chromeLabel = product.ctaPrimaryLabel ?? "Add to Chrome";
    const [chromeMain, chromeSub] = chromeLabel.split(" — ");

    return (
        <section className="relative pt-14 pb-16 transition-colors duration-300 overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            </div>
            <style jsx>{`
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes float-gentle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px ${color}1a; } 50% { box-shadow: 0 0 40px ${color}33; } }
                .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
                .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; } .delay-400 { animation-delay: 0.4s; } .delay-500 { animation-delay: 0.5s; }
                @keyframes orbit-spin { to { transform: rotate(360deg); } }
                .orbit-cw { animation: orbit-spin 25s linear infinite; }
                .orbit-cw-upright { animation: orbit-spin 25s linear infinite reverse; }
                .orbit-ccw { animation: orbit-spin 40s linear infinite reverse; }
                .orbit-ccw-upright { animation: orbit-spin 40s linear infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .orbit-cw, .orbit-cw-upright, .orbit-ccw, .orbit-ccw-upright { animation: none; }
                }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 lg:gap-20 items-center">
                    <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            {/* Not a link: there is no /products hub. Products are
                                reached through the navbar dropdown, so this crumb
                                names the section without pointing at a 404. */}
                            <span>Products</span>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: textColor }}>{product.name}</span>
                        </nav>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fadeIn">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30` }}>
                                <Icon className="w-4 h-4" style={{ color }} />
                                <span className="text-sm font-semibold" style={{ color: textColor }}>{product.tagline}</span>
                            </div>

                            {product.version && (
                                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30` }}>
                                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
                                    <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--secondary-text)" }}>
                                        Version{" "}
                                        <span className="font-mono font-semibold" style={{ color: textColor }}>{product.version}</span>
                                    </span>
                                </p>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp" style={{ color: "var(--foreground)" }}>
                            {product.heroHeadline ? (
                                product.heroHeadline
                            ) : (
                                <span className="relative inline-block" style={{ color: textColor }}>
                                    {product.name}
                                    <svg className="absolute w-full h-3 -bottom-2 left-0 opacity-50" style={{ color }} viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            )}
                        </h1>

                        {product.heroSubheadline && (
                            <p className="text-xl md:text-2xl font-semibold leading-snug max-w-xl mx-auto lg:mx-0 animate-slideUp" style={{ color: "var(--foreground)" }}>
                                {product.heroSubheadline}
                            </p>
                        )}

                        {(product.heroBody ?? [product.longDescription]).map((paragraph, i) => (
                            <p key={i} className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                                {paragraph}
                            </p>
                        ))}

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            {/* Priority: the product's own site, then a browser-extension
                                store listing (which gets the Chrome mark), then CIM's
                                contact form. ProductCTA resolves the same order. */}
                            {product.externalUrl ? (
                                <a
                                    href={product.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                    style={{ backgroundColor: solidColor }}
                                >
                                    {product.ctaPrimaryLabel ?? "Visit the product"}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            ) : product.extensionUrl ? (
                                /* Phones: full width, with a bold action over a smaller
                                   description beside the icon, instead of the label
                                   wrapping mid-phrase. From sm it is one line again. It is
                                   one set of text, so the link text is the full label. */
                                <a
                                    href={product.extensionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-lg focus-visible:brightness-120"
                                    style={{ backgroundColor: solidColor }}
                                >
                                    <Chrome className="w-5 h-5 mr-3 sm:mr-2 flex-shrink-0" />
                                    {chromeSub ? (
                                        <span className="flex flex-col items-start text-left leading-tight sm:flex-row sm:items-center sm:gap-1.5 sm:leading-normal">
                                            <span className="font-bold sm:font-semibold">{chromeMain}</span>{" "}
                                            <span className="hidden sm:inline" aria-hidden="true">—</span>{" "}
                                            <span className="text-[13px] font-medium opacity-90 sm:text-base sm:font-semibold sm:opacity-100">{chromeSub}</span>
                                        </span>
                                    ) : (
                                        chromeLabel
                                    )}
                                </a>
                            ) : (
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg" style={{ backgroundColor: solidColor }}>
                                    {product.ctaPrimaryLabel ?? "Get Started"} <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            )}
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent" style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}>
                                {product.ctaSecondaryLabel ?? "Schedule Demo"}
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 items-center justify-items-center gap-x-4 gap-y-6 sm:gap-x-8 lg:justify-items-start 2xl:flex 2xl:flex-nowrap 2xl:justify-start 2xl:gap-4 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            {product.stats.map((stat, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <div className="w-px h-10 hidden 2xl:block" style={{ backgroundColor: "var(--border-color)" }} />}
                                    <div className="text-center lg:text-left">
                                        <p className="text-2xl sm:text-3xl font-bold" style={{ color: textColor }}>{stat.value}</p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        <div className="relative flex items-center justify-center">
                            {/* Visual only: the same technology names are listed
                                for screen readers and search engines below. */}
                            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center animate-float-gentle" aria-hidden="true">
                                {orbitRings.map((ring) => (
                                    <div
                                        key={ring.size}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${ring.spin}`}
                                        style={{ width: `${ring.size}%`, height: `${ring.size}%`, borderColor: "var(--border-color)" }}
                                    >
                                        {ring.items.map((tech, k) => {
                                            const angle = ((ring.startDeg + (k * 360) / ring.items.length) * Math.PI) / 180;
                                            const logo = techLogos[tech];
                                            return (
                                                <div
                                                    key={tech}
                                                    title={tech}
                                                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 xl:w-14 xl:h-14 rounded-full border flex items-center justify-center ${ring.upright}`}
                                                    style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%`, backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                                                >
                                                    {logo ? (
                                                        <Image src={logo.src} alt={tech} width={30} height={30} className={`w-6 h-6 xl:w-[30px] xl:h-[30px] object-contain ${logo.invert ? "invert" : ""}`} />
                                                    ) : tech === "Chrome Extension API" ? (
                                                        <Chrome className="w-6 h-6 xl:w-7 xl:h-7" style={{ color }} />
                                                    ) : (
                                                        <span className="text-xs font-bold" style={{ color: textColor }}>{initials(tech)}</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                                <Image
                                    src={product.logo}
                                    alt={product.name}
                                    width={144}
                                    height={144}
                                    className="relative w-28 h-28 xl:w-36 xl:h-36 rounded-[28px] xl:rounded-[32px] shadow-xl"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>{product.name}</p>
                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{product.tagline}</p>
                        </div>

                        <ul className="sr-only" aria-label="Technologies used">
                            {orbitTech.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
