import TermsOfServiceClient from "./TermsOfServiceClient";
import { getPageMetadata } from "@/lib/metadata";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = getPageMetadata({
    title: "Terms of Service | Cinute InfoMedia",
    description: "Understand the terms and conditions for using Cinute InfoMedia's services, tools, and digital solutions. Quality and transparency in every project.",
    url: "/terms-of-service",
    image: "/og-images/Terms-Services.webp",
});

export default function TermsOfServicePage() {
    const termsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Terms of Service | Cinute InfoMedia",
            description: "Understand the terms and conditions for using Cinute InfoMedia's services, tools, and digital solutions. Quality and transparency in every project.",
            urlPath: "/terms-of-service",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            breadcrumbId: "https://www.cinuteinfomedia.com/terms-of-service/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Terms of Service", url: "/terms-of-service" },
        ], "https://www.cinuteinfomedia.com/terms-of-service/#breadcrumb")
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />
            <main>
                <TermsOfServiceClient />
            </main>
        </>
    );
}
