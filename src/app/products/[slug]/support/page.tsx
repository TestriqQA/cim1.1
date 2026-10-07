import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productSupportData, getProductSupportBySlug } from "@/data/productSupport";
import ProductSupportClient from "./ProductSupportClient"; // client component
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";

// SSG — pre-render all product support pages at build time
export async function generateStaticParams() {
    return productSupportData.map((p) => ({ slug: p.slug }));
}

// Dynamic metadata per product support page
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const support = getProductSupportBySlug(slug);

    if (!support) {
        return { title: "Support Not Found" };
    }

    const url = `https://www.cinuteinfomedia.com/products/${slug}/support`;

    return {
        title: `Support — ${support.productName} | Cinute InfoMedia`,
        description: `Get help with ${support.productName}. Contact our support team, browse documentation, and find solutions to common issues.`,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `Support — ${support.productName}`,
            description: `Support center for ${support.productName} by Cinute InfoMedia. Contact us, browse docs, and find help.`,
            url,
            type: "website",
            images: [
                {
                    url: "/og-images/Services.webp",
                    width: 1200,
                    height: 630,
                    alt: `${support.productName} Support`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Support — ${support.productName}`,
            description: `Support center for ${support.productName} by Cinute InfoMedia.`,
            images: ["/og-images/Services.webp"],
        },
    };
}

export default async function ProductSupportPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const support = getProductSupportBySlug(slug);

    if (!support) {
        notFound();
    }

    const siteUrl = "https://www.cinuteinfomedia.com";

    const supportSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: `Support — ${support.productName}`,
            description: `Get help with ${support.productName}. Contact support, browse docs, and find solutions.`,
            urlPath: `/products/${slug}/support`,
            datePublished: "2025-01-01",
            dateModified: "2026-05-16",
            breadcrumbId: `${siteUrl}/products/${slug}/support/#breadcrumb`,
        }),

        generateBreadcrumbSchema(
            [
                // No "Products" crumb: there is no /products hub — products are
                // reached through the navbar dropdown — so naming it here would
                // declare a breadcrumb parent that 404s.
                { name: "Home", url: "/" },
                { name: support.productName, url: `/products/${slug}` },
                { name: "Support", url: `/products/${slug}/support` },
            ],
            `${siteUrl}/products/${slug}/support/#breadcrumb`
        )
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }}
            />
            <main>
                <ProductSupportClient support={support} slug={slug} />
            </main>
        </>
    );
}
