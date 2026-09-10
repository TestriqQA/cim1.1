import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productPrivacyPolicies, getProductPrivacyBySlug } from "@/data/productPrivacy";
import ProductPrivacyClient from "./ProductPrivacyClient";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";

// SSG — pre-render all product privacy pages at build time
export async function generateStaticParams() {
    return productPrivacyPolicies.map((p) => ({ slug: p.slug }));
}

// Dynamic metadata per product privacy policy
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const policy = getProductPrivacyBySlug(slug);

    if (!policy) {
        return { title: "Privacy Policy Not Found" };
    }

    const url = `https://www.cinuteinfomedia.com/products/${slug}/privacy-policy`;

    // The operator, not the host site. "by Cinute InfoMedia" was hard-coded into
    // both social descriptions, which would have published CIM as the data
    // controller for a product operated by another company.
    const operatorName = policy.operator?.name ?? "Cinute InfoMedia";

    return {
        title: `Privacy Policy — ${policy.productName} | Cinute InfoMedia`,
        description: `Privacy policy for ${policy.productName}. Learn how we collect, use, and protect your data when using ${policy.productName}.`,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `Privacy Policy — ${policy.productName}`,
            description: `Privacy policy for ${policy.productName} by ${operatorName}.`,
            url,
            type: "website",
            images: [
                {
                    url: "/og-images/Privacy.webp",
                    width: 1200,
                    height: 630,
                    alt: `${policy.productName} Privacy Policy`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Privacy Policy — ${policy.productName}`,
            description: `Privacy policy for ${policy.productName} by ${operatorName}.`,
            images: ["/og-images/Privacy.webp"],
        },
    };
}

export default async function ProductPrivacyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const policy = getProductPrivacyBySlug(slug);

    if (!policy) {
        notFound();
    }

    const siteUrl = "https://www.cinuteinfomedia.com";

    const privacySchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: `Privacy Policy — ${policy.productName}`,
            description: `Privacy policy for ${policy.productName}. Learn how we collect, use, and protect your data.`,
            urlPath: `/products/${slug}/privacy-policy`,
            datePublished: "2025-01-01",
            dateModified: "2026-05-16",
            breadcrumbId: `${siteUrl}/products/${slug}/privacy-policy/#breadcrumb`,
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                { name: policy.productName, url: `/products/${slug}` },
                { name: "Privacy Policy", url: `/products/${slug}/privacy-policy` },
            ],
            `${siteUrl}/products/${slug}/privacy-policy/#breadcrumb`
        )
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />
            <main>
                <ProductPrivacyClient policy={policy} slug={slug} />
            </main>
        </>
    );
}
