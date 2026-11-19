"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getRelatedServices } from "@/data/relatedServices";
import { getServiceAccent } from "@/data/serviceAccents";

/**
 * "Related services" block (SEO change report, section 2.1): three normal links
 * to neighbouring service pages, rendered by src/app/services/layout.tsx under
 * every service page. It is a client component only to read the pathname; the
 * links are still in the prerendered HTML, which is what crawlers need.
 *
 * Colours follow the page it sits on (src/data/serviceAccents.ts). Hover is kept
 * simple: the border and title take the accent colour and a soft shadow appears.
 */
export default function RelatedServices() {
    const pathname = usePathname();
    const related = getRelatedServices(pathname);
    if (related.length === 0) return null;

    const accent = getServiceAccent(pathname);
    const accentVars = {
        "--rs-accent": accent,
        "--rs-glow": `color-mix(in srgb, ${accent} 25%, transparent)`,
    } as CSSProperties;

    return (
        <aside
            aria-labelledby="related-services-heading"
            className="py-12 sm:py-16"
            style={{ backgroundColor: "var(--background)", ...accentVars }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-20">
                <h2
                    id="related-services-heading"
                    className="text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10"
                    style={{ color: "var(--foreground)" }}
                >
                    Related Services
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {related.map((service) => (
                        <li key={service.href}>
                            <Link
                                href={service.href}
                                className="group flex h-full flex-col gap-2 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 sm:p-6 transition duration-300 hover:border-[var(--rs-accent)] hover:shadow-[0_12px_30px_-12px_var(--rs-glow)]"
                            >
                                <span
                                    className="text-xs font-semibold uppercase tracking-wide"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {service.category}
                                </span>
                                <span className="text-lg font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--rs-accent)]">
                                    {service.name}
                                </span>
                                <span
                                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium"
                                    style={{ color: "var(--rs-accent)" }}
                                >
                                    View service
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
