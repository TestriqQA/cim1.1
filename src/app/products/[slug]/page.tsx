import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import ProductHero from "@/components/products/detail/ProductHero";
import Features from "@/components/products/detail/Features";
import HowItWorks from "@/components/products/detail/HowItWorks";
import ProductDemo from "@/components/products/detail/ProductDemo";
import FAQ from "@/components/products/detail/FAQ";
import ProductCTA from "@/components/products/detail/ProductCTA";
import ProductLinks from "@/components/products/detail/ProductLinks";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateNavigationSchema,
} from "@/lib/schema";

// SSG — pre-render all product pages at build time
export async function generateStaticParams() {
    return getAllProductSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per product
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return { title: "Product Not Found" };
    }

    const url = `https://www.cinuteinfomedia.com/products/${product.slug}`;

    // Products may supply explicit SEO copy; otherwise fall back to the derived defaults.
    const metaTitle = product.seoTitle ?? `${product.name} — ${product.tagline} | Cinute InfoMedia`;
    const socialTitle = product.seoTitle ?? `${product.name} — ${product.tagline}`;
    const metaDescription = product.seoDescription ?? product.description;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: [
            product.name,
            product.tagline,
            ...product.techStack.slice(0, 5),
            "Cinute InfoMedia",
            "AI tools",
            "digital products",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: socialTitle,
            description: metaDescription,
            url,
            type: "website",
            images: [
                {
                    url: "/og-images/Services.webp",
                    width: 1200,
                    height: 630,
                    alt: `${product.name} by Cinute InfoMedia`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: metaDescription,
            images: ["/og-images/Services.webp"],
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const siteUrl = "https://www.cinuteinfomedia.com";

    // JSON-LD: SoftwareApplication schema
    const productSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency building AI-powered products and tools for businesses worldwide.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: product.seoTitle ?? `${product.name} — ${product.tagline}`,
            description: product.seoDescription ?? product.description,
            urlPath: `/products/${product.slug}`,
            datePublished: "2025-01-01",
            dateModified: "2026-05-16",
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                { name: product.name, url: `/products/${product.slug}` },
            ],
            `${siteUrl}/products/${product.slug}/#breadcrumb`
        ),

        // SoftwareApplication schema
        {
            "@type": "SoftwareApplication",
            "@id": `${siteUrl}/products/${product.slug}/#software`,
            name: product.name,
            description: product.longDescription,
            url: `${siteUrl}/products/${product.slug}`,
            // Category and pricing come from the product record. Both used to be
            // hard-coded to ChimeGenius's shape — "BrowserApplication" plus a free
            // offer — which published, in machine-readable schema, that EVERY
            // product is a browser extension available for $0. A product that
            // publishes no citable price emits no `offers` node at all rather than
            // inheriting another product's commercial terms.
            applicationCategory: product.applicationCategory ?? "BrowserApplication",
            operatingSystem: product.extensionUrl ? "Chrome, Edge" : "Web",
            ...(product.version && { softwareVersion: product.version }),
            ...(product.offers?.length && {
                offers: product.offers.map((offer) => ({
                    "@type": "Offer",
                    price: offer.price,
                    priceCurrency: offer.priceCurrency,
                    ...(offer.description && { description: offer.description }),
                    ...(offer.url && { url: offer.url }),
                })),
            }),
            provider: {
                "@id": `${siteUrl}/#organization`,
            },
            featureList: product.features.map((f) => f.title).join(", "),
        },

        generateFAQSchema(
            product.faqs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
            })),
            `${siteUrl}/products/${product.slug}/#faq`
        ),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Products", url: "/products" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main
            style={{
                "--page-selection-bg": product.accentColor,
                scrollPaddingTop: "5rem",
                scrollMarginTop: "5rem",
            } as React.CSSProperties}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />
            <ProductHero product={product} />
            <Features product={product} />
            <HowItWorks product={product} />
            <ProductDemo product={product} />
            <FAQ product={product} />
            <ProductCTA product={product} />
            <ProductLinks product={product} />
        </main>
    );
}
