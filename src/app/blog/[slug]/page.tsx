import BlogDetailClient from "./BlogDetailClient";
import { generateBlogPostMetadata } from "@/lib/metadata";
import { generateBlogPostGraphSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { postQuery, allPostsQuery, moreStoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost, toListPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery);
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sanityPost = await client.fetch(postQuery, { slug });

  if (!sanityPost) return {};
  const post = mapSanityPostToBlogPost(sanityPost);

  return generateBlogPostMetadata(
    post.title,
    post.excerpt,
    post.image,
    post.slug,
    post.publishedAt,
    post.author.name,
    post.seo
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const sanityPost = await client.fetch(postQuery, { slug });

  if (!sanityPost) {
    notFound();
  }

  const post = mapSanityPostToBlogPost(sanityPost);

  const { categories, popularPosts, tags } = await getSidebarData();
  const relatedPostsRaw = await client.fetch(moreStoriesQuery, { skip: sanityPost._id, limit: 3 });
  const relatedPosts = relatedPostsRaw.map(mapSanityPostToBlogPost).map(toListPost);

  // Unified @graph schema — auto-generated from post data with CMS overrides
  const blogPostSchema = generateBlogPostGraphSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <BlogDetailClient
        post={post}
        relatedPosts={relatedPosts}
        categories={categories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </>
  );
}
