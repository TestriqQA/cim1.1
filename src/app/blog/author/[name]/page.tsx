import AuthorClient from "./AuthorClient";
import { generateAuthorMetadata } from "@/lib/metadata";
import { generateAuthorPageGraphSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { authorQuery, authorPostsQuery, authorsQuery } from "@/sanity/lib/queries";
import { mapSanityAuthorToAuthor, mapSanityPostToBlogPost, toListPost } from "@/sanity/lib/mapper";

type Props = {
  params: Promise<{ name: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const authors = await client.fetch(authorsQuery);
  return authors.map((author: any) => ({
    name: author.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const sanityAuthor = await client.fetch(authorQuery, { slug: name });

  if (!sanityAuthor) return {};
  const author = mapSanityAuthorToAuthor(sanityAuthor);

  const sanityPosts = await client.fetch(authorPostsQuery, { slug: name });

  return generateAuthorMetadata(author.name, author.bio, author.image, sanityPosts.length, author.seo);
}

export default async function AuthorPage({ params }: Props) {
  const { name } = await params;

  const sanityAuthor = await client.fetch(authorQuery, { slug: name });

  if (!sanityAuthor) {
    notFound();
  }
  const author = mapSanityAuthorToAuthor(sanityAuthor);

  const sanityPosts = await client.fetch(authorPostsQuery, { slug: name });
  const posts = sanityPosts.map(mapSanityPostToBlogPost);

  // Unified @graph schema — auto-generated with CMS seo overrides
  const authorSchema = generateAuthorPageGraphSchema({ author, posts });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <AuthorClient author={author} posts={posts.map(toListPost)} />
    </>
  );
}
