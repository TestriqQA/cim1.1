"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getRelatedServices } from "@/data/relatedServices";

/**
 * "Related services" block (SEO change report, section 2.1): three normal links
 * to neighbouring service pages, rendered by src/app/services/layout.tsx under
 * every service page. It is a client component only to read the pathname; the
 * links are still in the prerendered HTML, which is what crawlers need.
 */
export default function RelatedServices() {
    const pathname = usePathname();
    const related = getRelatedServices(pathname);
    if (related.length === 0) return null;

    return (
        <aside
            aria-labelledby="related-services-heading"
            className="py-12 sm:py-16"
            style={{ backgroundColor: "var(--background)" }}
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
                                className="group flex h-full flex-col gap-2 rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                            >
                                <span
                                    className="text-xs font-semibold uppercase tracking-wide"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {service.category}
                                </span>
                                <span className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                                    {service.name}
                                </span>
                                <span
                                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium"
                                    style={{ color: "var(--brand-blue-text)" }}
                                >
                                    View service
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
