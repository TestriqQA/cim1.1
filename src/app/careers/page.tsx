import Hero from "@/components/careers/Hero";
import Benefits from "@/components/careers/Benefits";
import Culture from "@/components/careers/Culture";
import OpenPositions from "@/components/careers/OpenPositions";
import CTA from "@/components/careers/CTA";
import { getPageMetadata } from "@/lib/metadata";
import CareersJSONLD from "@/components/careers/CareersJSONLD";
import { client } from "@/sanity/lib/client";
import { jobsQuery } from "@/sanity/lib/queries";
import { mapSanityJobToJob } from "@/sanity/lib/mapper";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

export const metadata = getPageMetadata({
    title: 'Careers at Cinute InfoMedia | Join Our Growth Team',
    description: 'Build the future of digital growth with Cinute InfoMedia. We are hiring Frontend Developers, UI/UX Designers, and Digital Marketers. Apply now!',
    url: '/careers',
    image: '/og-images/Career.webp',
});

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers" },
        ],
        "https://www.cinuteinfomedia.com/careers/#breadcrumb"
    ),
};

export default async function CareersPage() {
    const sanityJobs = await client.fetch(jobsQuery);
    const jobs = sanityJobs.map(mapSanityJobToJob);

    return (
        <main className="transition-colors duration-300" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CareersJSONLD jobs={jobs} />
            <Hero />
            <Benefits />
            <Culture />
            <OpenPositions jobs={jobs} />
            <CTA />
        </main>
    );
}
