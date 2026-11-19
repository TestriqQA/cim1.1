import type { GuideItem } from "@/components/services/ServiceGuide";

// Extra depth for the two biggest "average drag" pages (SEO 4-week plan, week 2):
// general, factual descriptions of the service. No prices, client names or
// result figures are claimed here.

export const microsoftAdsIncludes: GuideItem[] = [
    { title: "Account and competitor audit", text: "We review your current Microsoft Ads or Google Ads account, search terms, budgets and competitors to find wasted spend and quick wins before changing anything." },
    { title: "Keyword research for Bing", text: "People search differently on Bing, so we build keyword and negative keyword lists from Microsoft's own keyword data and your search term reports." },
    { title: "Campaign build or Google Ads import", text: "We set up Search, Shopping or Performance Max campaigns, or import your Google Ads campaigns and rework them for Microsoft's audience and auction." },
    { title: "Ads and assets", text: "Responsive search ads with tested headlines, plus sitelinks, callouts and other assets so your ads take up more space and earn more clicks." },
    { title: "Audience targeting", text: "LinkedIn profile targeting by company, industry and job function in supported markets, plus remarketing and in-market audiences." },
    { title: "Bidding and budgets", text: "Bid strategies matched to your goal, such as maximise conversions or target cost per acquisition, with budget moved toward the campaigns that bring leads or sales." },
    { title: "Conversion tracking", text: "Universal Event Tracking (UET) for forms, calls and purchases, so every part of your spend can be tied to a real result." },
    { title: "Reporting and optimisation", text: "Regular reports on cost per lead or sale, search terms and next steps, followed by ongoing tests of keywords, ads and landing pages." },
];

export const microsoftAdsFit: GuideItem[] = [
    { title: "B2B companies", text: "LinkedIn profile targeting lets your search ads reach decision-makers by company, industry and job function." },
    { title: "Businesses already on Google Ads", text: "Importing campaigns that already work is a low-effort way to reach searchers that Google Ads alone misses." },
    { title: "Desktop and professional audiences", text: "Bing is the default search engine in Windows and the Edge browser, so many searches happen on work computers." },
    { title: "E-commerce stores", text: "Shopping campaigns show your products, prices and images in Bing results, often at a lower cost per click than on Google." },
];

export const xAdsCost: GuideItem[] = [
    { title: "Campaign objective", text: "You pay for the result you choose, such as reach, video views, website clicks, app installs or followers, and each objective costs a different amount." },
    { title: "Audience and targeting", text: "Focused audiences built from keywords, follower look-alikes or conversation topics can cost more per result but waste less of your budget." },
    { title: "Creative quality", text: "Posts that people engage with tend to win auctions at a lower cost, so we test several creatives and keep the ones that perform." },
    { title: "Timing and competition", text: "Costs rise around big events and busy seasons, when more advertisers compete for the same audience." },
];

export const xAdsMeasure: GuideItem[] = [
    { title: "Conversion tracking", text: "We install the X Pixel or connect the Conversions API to track sign-ups, leads and purchases that come from your ads." },
    { title: "Metrics that match the goal", text: "Cost per result for the objective you chose, engagement rate, video completion rate and the leads or sales each campaign brings in." },
    { title: "Clear, regular reports", text: "A plain report on spend, results and what we will change next, so you always know what your budget is doing." },
];

// Technical SEO page (4-week plan, Group A: "add a checklist section").
export const technicalSeoChecklist: GuideItem[] = [
    { title: "Crawlability", text: "robots.txt, crawl errors and internal links, so every important page can be reached in a few clicks and nothing Google needs is blocked." },
    { title: "Indexing", text: "The Search Console Page indexing report: noindex tags, and pages Google has discovered or crawled but not added to its index." },
    { title: "Canonicals and duplicates", text: "One self-referencing canonical tag per page, and every www, non-www, http and https version redirecting to the same address." },
    { title: "XML sitemap", text: "Only live, indexable pages, with last-modified dates that match real content changes, submitted in Search Console." },
    { title: "Redirects and broken links", text: "301 redirects for moved pages, no redirect chains, and no internal links pointing to a redirect or a 404 page." },
    { title: "Core Web Vitals", text: "Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift, measured in PageSpeed Insights, with images, scripts and fonts fixed first." },
    { title: "Rendering and mobile", text: "Headings, text and links present in the HTML Google renders, and pages that work properly on phones." },
    { title: "Structured data", text: "Breadcrumb, organization and FAQ markup that matches what visitors see, tested in Google's Rich Results Test." },
];

// SaaS page (4-week plan, Group A: "add a short comparison block"). Neutral
// trade-offs only; no claims about competitors.
export const saasComparison: GuideItem[] = [
    { title: "In-house team", text: "Your own developers know the product best and you keep full control. Hiring takes months and you pay salaries between releases, so it suits steady, long-term product work." },
    { title: "Freelancers", text: "A cost-effective choice for small, well-defined tasks. It is harder to cover design, backend, DevOps and testing at once, and progress depends on one or two people being available." },
    { title: "SaaS development company", text: "A ready team for product design, development, testing and DevOps, with a set process from discovery to launch. The hourly cost is higher than a freelancer's, so compare scope, code ownership and support." },
];
