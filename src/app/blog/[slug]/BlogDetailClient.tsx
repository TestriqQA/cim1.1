"use client";

import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";
import { Calendar, Clock, Share2, List, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { BlogCategoryLink, BlogPost } from "@/data/blog";

// Type for table of contents items
interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Function to extract headings from content
import { ContentBlock } from "@/data/blog";

// Function to extract headings from content
function extractHeadings(markdown: string, blocks?: ContentBlock[]): TocItem[] {
    const headings: TocItem[] = [];

    // Priority 1: Extract from Content Blocks (Sanity Portable Text / Modular Blocks)
    if (blocks && blocks.length > 0) {
        blocks.forEach((block) => {
            if (block.type === 'text' && ['h1', 'h2', 'h3'].includes(block.variant)) {
                const level = parseInt(block.variant.replace('h', ''));
                // Strip HTML tags from content for clean text display
                const text = block.content.replace(/<[^>]*>/g, '');
                // Generate ID the same way as TextBlock component
                const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");
                headings.push({ id, text, level });
            }
        });
        if (headings.length > 0) return headings;
    }

    // Priority 2: Fallback to Regex on Markdown String
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
        headings.push({ id, text, level });
    }

    return headings;
}

// Table of Contents Component
function TableOfContents({ markdown = "", blocks = [] }: { markdown?: string; blocks?: ContentBlock[] }) {
    const [activeId, setActiveId] = useState<string>("");
    const headings = useMemo(() => extractHeadings(markdown, blocks), [markdown, blocks]);

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = headings.map((h) => document.getElementById(h.id));
            const validElements = headingElements.filter(Boolean) as HTMLElement[];

            for (let i = validElements.length - 1; i >= 0; i--) {
                const element = validElements[i];
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150) {
                    setActiveId(headings[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headings]);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };

    if (headings.length === 0) return null;

    return (
        <div
            className="rounded-xl border p-5 mb-6"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="flex items-center gap-2 mb-4">
                <List className="w-5 h-5 text-[var(--brand-purple-text)]" />
                <h2 className="text-lg font-bold">Table of Contents</h2>
            </div>
            <nav className="space-y-1">
                {headings.map((heading) => (
                    <button
                        key={heading.id}
                        onClick={() => scrollToHeading(heading.id)}
                        className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeId === heading.id
                            ? "bg-[color-mix(in_srgb,var(--brand-purple)_10%,transparent)] text-[var(--brand-purple-text)] font-medium"
                            : "hover:bg-[var(--hover-bg)]"
                            }`}
                        style={{
                            paddingLeft: `${(heading.level - 1) * 12 + 12}px`,
                            color: activeId === heading.id ? "var(--brand-purple-text)" : "var(--secondary-text)",
                        }}
                    >
                        {activeId === heading.id && (
                            <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        )}
                        <span className="line-clamp-1">{heading.text}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default function BlogDetailClient({
    post,
    relatedPosts,
    categories,
    popularPosts,
    tags
}: {
    post: BlogPost;
    relatedPosts: BlogPost[];
    categories: BlogCategoryLink[];
    popularPosts: BlogPost[];
    tags: string[];
}) {
    // const relatedPosts = useMemo(...) // Removed local calculation

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const authorSlug = post.author.name.toLowerCase().replace(/\s+/g, "-");

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                // Share cancelled - no action needed
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <main
            style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
                scrollPaddingTop: "5rem",
                scrollMarginTop: "5rem"
            }}
            className="min-h-screen pb-16"
        >
            {/* Hero Section */}
            <section
                className="relative overflow-hidden"
                style={{
                    backgroundColor: "var(--card-bg)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse at top, color-mix(in srgb, var(--brand-purple) 5%, transparent), transparent 70%)",
                    }}
                />

                <div className="relative px-6 md:px-12 xl:px-16 py-8 md:py-12">
                    {/* Breadcrumb */}
                    <nav className="hidden md:flex items-center gap-2 text-sm mb-8" style={{ color: "var(--secondary-text)" }}>
                        <Link href="/blog" className="hover:text-[var(--brand-purple-text)] transition-colors">
                            Blog
                        </Link>
                        <span>/</span>
                        <Link
                            href={`/blog/category/${post.categorySlug}`}
                            className="hover:text-[var(--brand-purple-text)] transition-colors"
                        >
                            {post.category}
                        </Link>
                        <span>/</span>
                        <span className="text-[var(--foreground)] line-clamp-1">{post.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Content */}
                        <div>
                            {/* Category & Date */}
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <Link
                                    href={`/blog/category/${post.categorySlug}`}
                                    className="px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                                    style={{ backgroundColor: "var(--brand-purple-btn)" }}
                                >
                                    {post.category}
                                </Link>
                                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--secondary-text)" }}>
                                    <Calendar className="w-4 h-4" />
                                    {formattedDate}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--secondary-text)" }}>
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} min read
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                {post.excerpt}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <Link
                                    href={`/blog/author/${authorSlug}`}
                                    className="flex items-center gap-3 group"
                                >
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2"
                                        style={{ borderColor: "var(--border-color)" }}
                                        unoptimized
                                    />
                                    <div>
                                        <p className="font-semibold group-hover:text-[var(--brand-purple-text)] transition-colors">
                                            {post.author.name}
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            {post.author.title}
                                        </p>
                                    </div>
                                </Link>

                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 border hover:border-[var(--brand-purple)] hover:text-[var(--brand-purple-text)]"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    <Share2 className="w-4 h-4" />
                                    Share Article
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Featured Image */}
                        <div className="relative">
                            <div
                                className="absolute -inset-4 rounded-3xl blur-2xl"
                                style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)" }}
                            />
                            <div className="relative aspect-[5/3] rounded-2xl overflow-hidden border shadow-xl"
                                style={{ borderColor: "var(--border-color)" }}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-fit"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="px-6 md:px-12 xl:px-16 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* 👇 THIS defines the sticky boundary */}
                    <div className="relative grid grid-cols-1 xl:grid-cols-3 gap-8">

                        {/* Main Content */}
                        <article className="xl:col-span-2">
                            {/* Mobile Table of Contents - visible on screens < xl */}
                            <div className="xl:hidden mb-8">
                                <TableOfContents markdown={post.content} blocks={post.contentBlocks} />
                            </div>
                            {/* Article Content */}
                            <div
                                className="prose prose-lg max-w-none rounded-2xl border p-6 md:p-10"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <BlogContentRenderer post={post} />
                            </div>

                            {/* Tags */}
                            <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-full text-sm font-medium border"
                                            style={{
                                                backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                                                color: "var(--brand-purple-text)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts && relatedPosts.length > 0 && (
                                <div className="mt-16">
                                    <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.map((relatedPost) => (
                                            <BlogCard key={relatedPost.id} post={relatedPost} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>

                        {/* Sidebar - visible only on xl+ screens */}
                        <aside className="hidden xl:block xl:col-span-1">
                            {/* 👇 Sticky applies to FULL article height */}
                            <div className="sticky top-24">
                                <TableOfContents markdown={post.content} blocks={post.contentBlocks} />
                                <BlogSidebar
                                    currentPostSlug={post.slug}
                                    categories={categories}
                                    popularPosts={popularPosts}
                                    tags={tags}
                                />
                            </div>
                        </aside>

                    </div>
                </div>

            </div>
        </main>
    );
}
