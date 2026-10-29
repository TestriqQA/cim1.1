import { Metadata } from "next";

const siteUrl = "https://www.cinuteinfomedia.com";

const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CIM - Digital Solutions | Cinute InfoMedia",
    template: "%s | Cinute InfoMedia"
  },
  description: "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
  authors: [{ name: "Cinute InfoMedia" }],
  creator: "Cinute InfoMedia",
  publisher: "Cinute InfoMedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cinute InfoMedia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cinute InfoMedia | Web Development Company & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinute InfoMedia | Web Development Company & Digital Marketing Agency",
    description: "Transform your digital presence with our web development services, mobile apps, AI automation & marketing solutions.",
    images: ["/og-image.jpg"],
    creator: "@cinute_infomedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// NOTE on keywords: <meta name="keywords"> is no longer emitted anywhere. Google
// ignores it, and ours published the keyword targeting to competitors — the blog
// generator was even building it from the first five words of the excerpt
// ("blog,article,insights,A,technical,..."). The `keywords` param below is still
// accepted so the ~49 existing call sites compile unchanged; it is discarded.
// schema.org `keywords` inside JSON-LD is a different property and is unaffected.
export function getPageMetadata(params: {
  title: string;
  description: string;
  url: string;
  /** Accepted for call-site compatibility but deliberately NOT emitted — see note above. */
  keywords?: string[];
  image?: string;
}): Metadata {
  // Guard against canonical-doubling: if a full URL is passed (e.g. a Sanity
  // editor entered an absolute canonicalUrl), use it as-is instead of prepending siteUrl.
  const absoluteUrl = /^https?:\/\//i.test(params.url) ? params.url : `${siteUrl}${params.url}`;
  return {
    ...defaultMetadata,
    title: params.title,
    description: params.description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: params.title,
      description: params.description,
      url: absoluteUrl,
      images: params.image ? [{ url: params.image }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: params.title,
      description: params.description,
      images: params.image ? [params.image] : defaultMetadata.twitter?.images,
    },
  };
}

export const blogMetadata: Metadata = getPageMetadata({
  title: "Blog & Insights | Cinute InfoMedia",
  description: "Discover the latest trends, strategies, and insights in web development, digital marketing, UI/UX design, and business growth.",
  url: "/blog",
});

export function generateBlogPostMetadata(
  title: string,
  excerpt: string,
  image: string,
  slug: string,
  publishedAt: string,
  author: string,
  updatedAt: string | undefined,
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  }
): Metadata {
  const url = `/blog/${slug}`;

  // Prioritize SEO fields
  const metaTitle = seo?.metaTitle || `${title} | Cinute InfoMedia`;
  const metaDescription = seo?.metaDescription || excerpt;
  const canonicalUrl = seo?.canonicalUrl || `${siteUrl}${url}`;

  return {
    ...defaultMetadata,
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `${siteUrl}${url}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedAt,
      // article:modified_time — only emitted when the CMS actually reports a
      // later edit, so an untouched post does not claim to have been updated.
      ...(updatedAt && updatedAt > publishedAt ? { modifiedTime: updatedAt } : {}),
      authors: [author],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: metaTitle,
      description: metaDescription,
      images: [image],
    },
  };
}

export function generateCategoryMetadata(
  category: string,
  postCount: number,
  slug: string,
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  }
): Metadata {
  const url = `/blog/category/${slug}`;

  const metaTitle = seo?.metaTitle || `${category} Articles | Cinute InfoMedia Blog`;
  const metaDescription = seo?.metaDescription || `Explore ${postCount} articles about ${category}. Learn from our experts on the latest trends and best practices.`;

  return getPageMetadata({
    title: metaTitle,
    description: metaDescription,
    url: seo?.canonicalUrl || url,
    image: "/og-images/blogcategories.webp"
  });
}

export function generateAuthorMetadata(
  name: string,
  bio: string,
  image: string,
  postCount: number,
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  }
): Metadata {
  const url = `/blog/author/${name.toLowerCase().replace(/\s+/g, "-")}`;

  const metaTitle = seo?.metaTitle || `${name} | Author at Cinute InfoMedia`;
  const metaDescription = seo?.metaDescription || bio;

  return {
    ...getPageMetadata({
      title: metaTitle,
      description: metaDescription,
      url: seo?.canonicalUrl || url,
      image: image,
    }),
    // I-3: thin author archives -> noindex (keep follow) to save crawl budget.
    // Author E-E-A-T still conveyed via per-article author bios. Also excluded from sitemap.
    robots: { index: false, follow: true },
  };
}
