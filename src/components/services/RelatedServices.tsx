"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getRelatedServices } from "@/data/relatedServices";
import { getServiceAccent } from "@/data/serviceAccents";

/**
 * "Related services" block (SEO change report, section 2.1): three normal links
 * to neighbouring service pages, rendered by src/app/services/layout.tsx under
 * every service page. It is a client component to read the pathname and the
 * page's colour; the links are still in the prerendered HTML, which is what
 * crawlers need.
 *
 * Colour: every service page sets its accent as --page-selection-bg on its own
 * <main> (Shopify green, WordPress blue...). This block renders after the page,
 * so it can't inherit it; it copies it into --related-accent once the page is in
 * the DOM. Text uses the accent mixed 55% with --foreground: checked against all
 * 44 accents the service pages use, the worst case is 5.0:1 in light mode
 * (#61dafb) and 5.2:1 in dark (#C7000B), so every page passes 4.5:1. Until the
 * copy runs, the neutral fallbacks apply.
 */
const ACCENT_TEXT = "color-mix(in srgb, var(--related-accent, var(--secondary-text)) 55%, var(--foreground))";

export default function RelatedServices() {
    const pathname = usePathname();
    const related = getRelatedServices(pathname);
    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        const main = document.querySelector<HTMLElement>('main[style*="--page-selection-bg"]');
        const accent = main ? getComputedStyle(main).getPropertyValue("--page-selection-bg").trim() : "";
        if (accent) el.style.setProperty("--related-accent", accent);
        else el.style.removeProperty("--related-accent");
    }, [pathname]);

    if (related.length === 0) return null;

    const accent = getServiceAccent(pathname);
    const accentVars = {
        "--rs-accent": accent,
    } as CSSProperties;

    return (
        <aside
            ref={ref}
            aria-labelledby="related-services-heading"
            className="py-16 md:py-20"
            style={{ backgroundColor: "var(--background)", ...accentVars }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-20">
                <h2
                    id="related-services-heading"
                    className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-12"
                    style={{ color: "var(--foreground)" }}
                >
                    Related <span style={{ color: ACCENT_TEXT }}>Services</span>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {related.map((service) => (
                        <li key={service.href}>
                            <Link
                                href={service.href}
                                className="group flex h-full flex-col gap-2 rounded-2xl border border-[var(--border-color)] p-6 md:p-8 transition duration-200 ease-out hover:border-[var(--related-accent,var(--border-color))] hover:-translate-y-1 focus-visible:outline-none focus-visible:border-[var(--related-accent,var(--border-color))] focus-visible:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <span className="text-xs font-semibold" style={{ color: "var(--secondary-text)" }}>
                                    {service.category}
                                </span>
                                <span className="text-lg font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--rs-accent)]">
                                    {service.name}
                                </span>
                                <span
                                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium"
                                    style={{ color: ACCENT_TEXT }}
                                >
                                    View service
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
