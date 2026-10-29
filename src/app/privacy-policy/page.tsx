import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { getPageMetadata } from "@/lib/metadata";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = getPageMetadata({
    title: "Privacy Policy | Cinute InfoMedia",
    description: "Our commitment to protecting your privacy. Understand how we collect, use, and safeguard your data at Cinute InfoMedia.",
    url: "/privacy-policy",
    image: "/og-images/Privacy.webp",
});

export default function PrivacyPolicyPage() {
    const privacySchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Privacy Policy | Cinute InfoMedia",
            description: "Our commitment to protecting your privacy. Understand how we collect, use, and safeguard your data at Cinute InfoMedia.",
            urlPath: "/privacy-policy",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            breadcrumbId: "https://www.cinuteinfomedia.com/privacy-policy/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy-policy" },
        ], "https://www.cinuteinfomedia.com/privacy-policy/#breadcrumb")
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />
            <main>
                <PrivacyPolicyClient />
            </main>
        </>
    );
}
