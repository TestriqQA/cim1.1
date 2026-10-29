import { Metadata } from "next";

const siteUrl = "https://www.cinuteinfomedia.com";

const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CIM - Digital Solutions | Cinute Infomedia",
    template: "%s | Cinute Infomedia"
  },
  description: "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
  keywords: ["Web Design", "Mobile App Development", "UI/UX Branding", "Digital Marketing", "SEO", "AI Automation"],
  authors: [{ name: "Cinute Infomedia" }],
  creator: "Cinute Infomedia",
  publisher: "Cinute Infomedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cinute Infomedia",
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

export function getPageMetadata(params: {
  title: string;
  description: string;
  url: string;
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
    keywords: [...(defaultMetadata.keywords as string[]), ...(params.keywords || [])],
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
  title: "Blog & Insights | Cinute Infomedia",
  description: "Discover the latest trends, strategies, and insights in web development, digital marketing, UI/UX design, and business growth.",
  url: "/blog",
  keywords: ["blog", "web development insights", "digital marketing trends", "AI automation blog"],
});

export function generateBlogPostMetadata(
  title: string,
  excerpt: string,
  image: string,
  slug: string,
  publishedAt: string,
  author: string,
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  }
): Metadata {
  const url = `/blog/${slug}`;

  // Prioritize SEO fields
  const metaTitle = seo?.metaTitle || `${title} | Cinute Infomedia`;
  const metaDescription = seo?.metaDescription || excerpt;
  const canonicalUrl = seo?.canonicalUrl || `${siteUrl}${url}`;

  return {
    ...defaultMetadata,
    title: metaTitle,
    description: metaDescription,
    keywords: ["blog", "article", "insights", ...excerpt.split(" ").slice(0, 5)],
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

  const metaTitle = seo?.metaTitle || `${category} Articles | Cinute Infomedia Blog`;
  const metaDescription = seo?.metaDescription || `Explore ${postCount} articles about ${category}. Learn from our experts on the latest trends and best practices.`;

  return getPageMetadata({
    title: metaTitle,
    description: metaDescription,
    url: seo?.canonicalUrl || url,
    keywords: [category, "blog", "articles"],
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

  const metaTitle = seo?.metaTitle || `${name} | Author at Cinute Infomedia`;
  const metaDescription = seo?.metaDescription || bio;

  return {
    ...getPageMetadata({
      title: metaTitle,
      description: metaDescription,
      url: seo?.canonicalUrl || url,
      image: image,
      keywords: [name, "author", "blog"],
    }),
    // I-3: thin author archives -> noindex (keep follow) to save crawl budget.
    // Author E-E-A-T still conveyed via per-article author bios. Also excluded from sitemap.
    robots: { index: false, follow: true },
  };
}
