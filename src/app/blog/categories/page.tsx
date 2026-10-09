import { Metadata } from "next";
import BlogCategoriesClient from "./BlogCategoriesClient";
import { getPageMetadata } from "@/lib/metadata";
import {
  generateGraphSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateItemListSchema,
  generateNavigationSchema,
} from "@/lib/schema";

export const metadata: Metadata = getPageMetadata({
  title: "Blog Categories | Cinute Infomedia",
  description: "Explore our blog articles organized by category. From web development to digital marketing, find the insights you need.",
  url: "/blog/categories",
  image: "/og-images/blogcategories.webp"
});

import { client } from "@/sanity/lib/client";
import { allPostsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost, toListPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";

export const revalidate = 60;

export default async function BlogCategoriesPage() {
  const [sanityPosts, categories] = await Promise.all([
    client.fetch(allPostsQuery),
    client.fetch(categoriesQuery)
  ]);

  const posts = sanityPosts.map(mapSanityPostToBlogPost);
  const { popularPosts, tags } = await getSidebarData();
  const sidebarCategories = categories.map((c: any) => ({ name: c.name as string, slug: c.slug as string }));

  // Unified @graph schema
  const categoriesSchema = generateGraphSchema(
    generateOrganizationSchema({
      description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
      slogan: "Build. Market. Scale.",
    }),

    generateWebSiteSchema(),

    {
      "@type": "CollectionPage",
      "@id": "https://www.cinuteinfomedia.com/blog/categories/#collectionpage",
      "url": "https://www.cinuteinfomedia.com/blog/categories",
      "name": "Blog Categories | Cinute Infomedia",
      "description": "Explore our blog articles organized by category. From web development to digital marketing, find the insights you need.",
      "isPartOf": { "@id": "https://www.cinuteinfomedia.com/#website" },
      "about": { "@id": "https://www.cinuteinfomedia.com/#organization" },
      "breadcrumb": { "@id": "https://www.cinuteinfomedia.com/blog/categories/#breadcrumb" },
      "mainEntity": { "@id": "https://www.cinuteinfomedia.com/blog/categories/#categoriesList" },
      "inLanguage": "en-US",
    },

    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: "Categories", url: "/blog/categories" },
    ], "https://www.cinuteinfomedia.com/blog/categories/#breadcrumb"),

    generateItemListSchema({
      id: "/blog/categories/#categoriesList",
      name: "All Blog Categories",
      description: "All content categories covering digital growth topics.",
      items: categories.map((cat: any) => ({
        name: cat.name,
        url: `/blog/category/${cat.slug}`,
        description: cat.description || '',
      })),
    }),

    generateNavigationSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Blog", url: "/blog" },
      { name: "About", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Contact", url: "/contact" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoriesSchema) }}
      />
      <BlogCategoriesClient
        categories={categories}
        posts={posts.map(toListPost)}
        sidebarCategories={sidebarCategories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </>
  );
}
