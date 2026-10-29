import { Metadata } from "next";
import GetInTouchClient from "./GetInTouchClient";
import { getPageMetadata } from "@/lib/metadata";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = getPageMetadata({
    title: "Get in Touch | Cinute Infomedia",
    description: "Ready to grow your business? Let's discuss your project and build something amazing together.",
    url: "/get-in-touch",
    image: "/og-images/get_in_touch.webp"
});

export default function GetInTouchPage() {
    const jsonLd = [
        generateOrganizationSchema(),
        generateBreadcrumbSchema([
            { name: "Home", url: "https://www.cinuteinfomedia.com" },
            { name: "Get in Touch", url: "/get-in-touch" }
        ])
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <GetInTouchClient />
        </>
    );
}
