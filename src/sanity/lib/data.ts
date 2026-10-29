import { client } from "./client";
import { categoriesQuery, moreStoriesQuery } from "./queries";
import { mapSanityPostToBlogPost, toListPost } from "./mapper";
import { BlogCategoryLink, BlogPost } from "@/data/blog";

export async function getSidebarData(): Promise<{
    categories: BlogCategoryLink[];
    popularPosts: BlogPost[];
    tags: string[];
}> {
    const [categories, popularPostsRaw] = await Promise.all([
        client.fetch(categoriesQuery),
        client.fetch(moreStoriesQuery, { limit: 5, skip: "" }), // Using recent posts as popular for now
    ]);

    // Sidebar cards render metadata only — see toListPost.
    const popularPosts = popularPostsRaw.map(mapSanityPostToBlogPost).map(toListPost);
    // Get all tags from popular posts as a simplified "tags" list for now, 
    // or we could query all tags. 
    // Let's assume tags come from the posts we fetched to avoid over-fetching.
    const tags = Array.from(new Set(popularPosts.flatMap((p: { tags: string[] }) => p.tags))) as string[];

    return {
        // Name *and* slug: the sidebar links to the category, and the slug is
        // editor-set, so it can't be derived from the name.
        categories: categories.map((c: any) => ({ name: c.name as string, slug: c.slug as string })),
        popularPosts,
        tags
    };
}
