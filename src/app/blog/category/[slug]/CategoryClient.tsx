"use client";

import { BlogCategoryLink, CategoryDetails, BlogPost } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
    Code,
    Smartphone,
    TrendingUp,
    Bot,
    Palette,
    Search,
    Target,
    FileText,
    BookOpen,
    Sparkles,
    Tag,
    Clock,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";


// Icon mapping for categories
const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />,
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    Bot: <Bot className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />,
    Search: <Search className="w-8 h-8" />,
    Target: <Target className="w-8 h-8" />,
    FileText: <FileText className="w-8 h-8" />,
};

const smallIconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Bot: <Bot className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Search: <Search className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
};

// Map CMS-provided accent hexes to theme-aware, WCAG AA-safe text tokens (text sites only)
const textAccent = (c?: string) => (({"#6b00d7":"var(--accent-violet-text)","#00b5ca":"var(--accent-cyan-text)","#ff6b35":"var(--accent-orange-text)","#9b59b6":"var(--brand-purple-text)","#e91e63":"var(--accent-pink-text)","#27ae60":"var(--accent-green-text)","#3498db":"var(--accent-sky-text)","#f39c12":"var(--accent-amber-text)","#1a56db":"var(--accent-indigo-text)"} as Record<string,string>)[(c ?? "").toLowerCase()] ?? "var(--brand-purple-text)");

export default function CategoryClient({
    categoryName,
    categoryInfo,
    posts,
    categories,
    popularPosts,
    tags
}: {
    categoryName: string;
    categoryInfo: CategoryDetails;
    posts: BlogPost[];
    categories: BlogCategoryLink[];
    popularPosts: BlogPost[];
    tags: string[];
}) {
    const categoryPosts = useMemo(() => {
        return posts.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }, [posts]);

    const latestPosts = categoryPosts.slice(0, 3);
    const allPosts = categoryPosts;

    const totalReadTime = categoryPosts.reduce((acc, post) => acc + post.readTime, 0);
    const uniqueAuthors = new Set(categoryPosts.map((p) => p.author.id)).size;

    return (
        <main
            style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
            }}
            className="min-h-screen pb-16"
        >
            {/* Hero Section */}
            <section className="px-6 md:px-12 xl:px-16 py-12">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="rounded-3xl border overflow-hidden relative"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        {/* Background Gradient */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(135deg, color-mix(in srgb, ${categoryInfo.color} 10%, transparent), transparent 70%)`,
                            }}
                        />

                        <div className="relative z-10 p-8 md:p-12 lg:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 20%, transparent)`,
                                                color: textAccent(categoryInfo.color),
                                            }}
                                        >
                                            {iconMap[categoryInfo.icon] || <BookOpen className="w-8 h-8" />}
                                        </div>
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-semibold"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 20%, transparent)`,
                                                color: textAccent(categoryInfo.color),
                                            }}
                                        >
                                            CATEGORY
                                        </span>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        {categoryInfo.name}
                                    </h1>
                                    <p
                                        className="text-lg md:text-xl leading-relaxed mb-8"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {categoryInfo.longDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)` }}>
                                                <BookOpen className="w-5 h-5" style={{ color: textAccent(categoryInfo.color) }} />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold">{categoryPosts.length}</p>
                                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Articles</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${categoryInfo.color} 15%, transparent)` }}>
                                                <Clock className="w-5 h-5" style={{ color: textAccent(categoryInfo.color) }} />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold">{totalReadTime}</p>
                                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Min Read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-1 space-y-6">
                                    <div className="rounded-2xl border p-6" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}>
                                        <h2 className="font-semibold mb-4 flex items-center gap-2">
                                            <Tag className="w-4 h-4" style={{ color: textAccent(categoryInfo.color) }} />
                                            Related Topics
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            {(categoryInfo.relatedTopics ?? []).map((topic) => (
                                                <span key={topic} className="px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "var(--hover-bg)" }}>
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Posts */}
            {latestPosts.length > 0 && (
                <section className="px-6 md:px-12 xl:px-16 py-12">
                    <div className="max-w-7xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Latest in {categoryInfo.name}</h2>
                        <div className="h-1 w-20 bg-[var(--brand-purple)] mx-auto rounded-full" />
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPosts.map((post) => (
                            <BlogCard key={post.id} post={post} variant="featured" />
                        ))}
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="px-6 md:px-12 xl:px-16 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {allPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <BlogSidebar
                                    categories={categories}
                                    popularPosts={popularPosts}
                                    tags={tags}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
