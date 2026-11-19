import CookiesPolicyClient from "./CookiesPolicyClient";
import { getPageMetadata } from "@/lib/metadata";
import {
  generateGraphSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = getPageMetadata({
  title: "Cookies Policy | Cinute InfoMedia",
  description:
    "Learn about how Cinute InfoMedia uses cookies to enhance your experience, analyze traffic, and personalize content. Manage your preferences here.",
  url: "/cookies-policy",
  image: "/og-images/policy.webp",
});

export default function CookiesPolicyPage() {
  const cookiesSchema = generateGraphSchema(
    generateWebSiteSchema(),

    generateWebPageSchema({
      name: "Cookies Policy | Cinute InfoMedia",
      description:
        "Learn about how Cinute InfoMedia uses cookies to enhance your experience, analyze traffic, and personalize content. Manage your preferences here.",
      urlPath: "/cookies-policy",
      datePublished: "2025-01-01",
      dateModified: "2026-04-10",
      breadcrumbId:
        "https://www.cinuteinfomedia.com/cookies-policy/#breadcrumb",
    }),

    generateBreadcrumbSchema(
      [
        { name: "Home", url: "/" },
        { name: "Cookies Policy", url: "/cookies-policy" },
      ],
      "https://www.cinuteinfomedia.com/cookies-policy/#breadcrumb",
    ),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiesSchema) }}
      />
      <main>
        <CookiesPolicyClient />
      </main>
    </>
  );
}
