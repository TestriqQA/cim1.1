import BlogClient from "./BlogClient";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost, toListPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";
import { BlogPost } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Insights | CIM - Digital Marketing & Web Development",
  description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
  alternates: {
    canonical: "https://www.cinuteinfomedia.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | CIM - Digital Marketing & Web Development",
    description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
    url: "https://www.cinuteinfomedia.com/blog",
    siteName: "Cinute Infomedia",
    images: [
      {
        url: "/og-images/cim_blog.webp",
        width: 1200,
        height: 630,
        alt: "CIM Blog - Digital Marketing & Web Development Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | CIM - Digital Marketing & Web Development",
    description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
    images: ["/og-images/cim_blog.webp"],
  },
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  // Fetch data from Sanity
  const sanityPosts = await client.fetch(allPostsQuery);
  const blogPosts = sanityPosts.map(mapSanityPostToBlogPost);

  const { categories, popularPosts, tags } = await getSidebarData();

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CIM Blog",
    description: "Expert insights on web development, digital marketing, and business growth.",
    url: "https://www.cinuteinfomedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "CIM",
    },
    blogPost: blogPosts.slice(0, 10).map((post: BlogPost) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <BlogClient
        initialPosts={blogPosts.map(toListPost)}
        categories={categories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </>
  );
}
