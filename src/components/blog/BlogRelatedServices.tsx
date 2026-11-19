import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServicesForBlogPost } from "@/data/blogServiceLinks";

/**
 * Three service pages related to the post (its platform, else its category),
 * rendered on the server under each blog post (SEO 4-week plan: links from blog
 * posts to priority service pages, with descriptive anchor text). No client
 * JavaScript.
 */
export default function BlogRelatedServices({ categorySlug, postSlug }: { categorySlug?: string; postSlug?: string }) {
    const services = getServicesForBlogPost(categorySlug, postSlug);
    return (
        <section aria-labelledby="blog-related-services" className="mt-16">
            <h2 id="blog-related-services" className="text-2xl font-bold mb-6">
                Related Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map((service) => (
                    <li key={service.href}>
                        <Link
                            href={service.href}
                            className="group flex h-full items-center justify-between gap-3 rounded-xl border p-4 transition-colors hover:bg-[var(--hover-bg)]"
                            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                        >
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                {service.name}
                            </span>
                            <ArrowRight
                                aria-hidden="true"
                                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                                style={{ color: "var(--brand-purple-text)" }}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
