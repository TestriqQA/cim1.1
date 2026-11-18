import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { BlogPost } from "@/data/blog";

type ArchivePost = Pick<BlogPost, "slug" | "title" | "category" | "categorySlug" | "publishedAt">;

/**
 * Every published post as a plain link, grouped by category, inside a native
 * <details> element at the foot of /blog.
 *
 * "Show the next N blogs" only renders more cards in the browser, so the /blog
 * HTML linked to just six posts and Google could reach older ones only through
 * category and author pages. Ten posts sat in Search Console as "Discovered –
 * currently not indexed" (SEO 4-week plan). These links are in the server HTML
 * whether the section is open or closed. Server component: no client JS.
 */
export default function BlogArchive({ posts }: { posts: ArchivePost[] }) {
    const groups = new Map<string, { slug: string; posts: ArchivePost[] }>();
    for (const post of posts) {
        const group = groups.get(post.category) ?? { slug: post.categorySlug, posts: [] };
        group.posts.push(post);
        groups.set(post.category, group);
    }
    const sorted = [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
    for (const [, group] of sorted) {
        group.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return (
        <details
            className="group mt-10 rounded-2xl border"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
        >
            <summary
                className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold sm:px-6 [&::-webkit-details-marker]:hidden"
                style={{ color: "var(--foreground)" }}
            >
                <span>Browse all {posts.length} articles by category</span>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div
                className="grid grid-cols-1 gap-6 border-t px-5 py-5 sm:grid-cols-2 sm:px-6"
                style={{ borderColor: "var(--border-color)" }}
            >
                {sorted.map(([category, group]) => (
                    <section key={category}>
                        <h3 className="mb-2 text-sm font-semibold">
                            <Link
                                href={`/blog/category/${group.slug}`}
                                className="hover:underline"
                                style={{ color: "var(--brand-purple-text)" }}
                            >
                                {category}
                            </Link>
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                            {group.posts.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="hover:underline"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </details>
    );
}
