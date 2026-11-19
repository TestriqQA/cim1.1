import BlogClient from "./BlogClient";
import BlogArchive from "@/components/blog/BlogArchive";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost, toListPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";
import { BlogPost } from "@/data/blog";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog & Insights on Web Development & SEO | Cinute InfoMedia",
  description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
  alternates: {
    canonical: "https://www.cinuteinfomedia.com/blog",
  },
  openGraph: {
    title: "Blog & Insights on Web Development & SEO | Cinute InfoMedia",
    description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
    url: "https://www.cinuteinfomedia.com/blog",
    siteName: "Cinute InfoMedia",
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
    title: "Blog & Insights on Web Development & SEO | Cinute InfoMedia",
    description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
    images: ["/og-images/cim_blog.webp"],
  },
};

export const revalidate = 60; // Revalidate every minute

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
  "@context": "https://schema.org",
  ...generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ],
    "https://www.cinuteinfomedia.com/blog/#breadcrumb"
  ),
};

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
    publisher: { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
        archive={<BlogArchive posts={blogPosts} />}
      />
    </>
  );
}
