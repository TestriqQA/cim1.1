# Phase 4 — On-Page / Content SEO & De-duplication Plan

_Date: 2026-06-04 · Data-driven analysis of all 60 service pages (10 hubs + 50 sub-service)._

## TL;DR
The on-page **technical** foundation is strong — there is **no mechanical duplication to fix**.
The real lever for the 138 "Discovered – not indexed" + 24 "Crawled – not indexed" is
**(a) content depth on the thinnest ~12 pages** + **(b) off-page authority/crawl-budget (Phase 5)**.
Content rewriting is a content-team task (we will NOT fabricate stats/claims — that's what Phase 2 removed).

## What we verified (all GOOD — no action)
- **Meta descriptions:** all 50 sub-service descriptions are **unique** — 0 templated/repeated openings.
- **Titles:** **60/60 unique** `<title>` across all service pages — no duplicate-title cannibalization.
- **Structure:** each page has its **own component folder** (Hero/ServiceOverview/WhyChooseUs/Process/FAQ/CTA)
  — copy is page-specific, not literally duplicated (confirmed in Phase 0).
- **Internal linking:** components already cross-link heavily between silos + hubs.
- **Claims:** Phase 2 removed all fabricated stats/superlatives across these pages + Sanity.

## The real issue — content DEPTH (uneven), not duplication
Live rendered word counts (incl. ~350-word nav/footer baseline). Bottom = thinnest = priority targets:

| Priority | Page | ~Words | Note |
|---|---|---|---|
| 🔴 P0 | performance-marketing/amazon-ads | 661 | ~300 content words — thin, high-competition keyword |
| 🔴 P0 | performance-marketing/microsoft-ads | 666 | thin |
| 🔴 P0 | performance-marketing/x-ads | 675 | thin |
| 🔴 P0 | performance-marketing/youtube-ads | 691 | thin |
| 🔴 P0 | social-media-marketing-services/pinterest-marketing | 749 | thin |
| 🟠 P1 | performance-marketing/{linkedin,meta,tiktok,google}-ads | 765–830 | thin-ish |
| 🟠 P1 | web-design-development/{laravel-php, java-spring-boot, drupal-cms, strapi-headless-cms, python-django, contentful-headless-cms, nodejs-backend} | 844–919 | tech-stack pages, borderline |
| 🟠 P1 | seo-services/link-building, mobile/harmony-OS | 864–881 | borderline |
| 🟢 OK | most others 1000–2400 | — | healthy (ecommerce-seo 2383, saas 2218, local-seo 2159 are the strongest) |

## Differentiation playbook (per thin page — content team)
For each P0/P1 page, add **page-specific, defensible** depth (NO invented numbers):
1. **3–5 concrete use-cases** specific to that platform/tech (e.g. amazon-ads: Sponsored Products vs Sponsored Brands vs DSP; ACoS/TACoS management; seasonal/Prime Day strategy).
2. **A comparison / "when to choose X vs Y"** block (e.g. Microsoft Ads vs Google Ads; Pinterest vs Instagram for commerce).
3. **Process specifics** unique to the platform (setup, targeting levers, creative formats, measurement).
4. **Expanded FAQ** (4–6 genuine buyer questions) — and keep FAQ JSON-LD ↔ visible FAQ in sync (see QA below).
5. **Internal links** to 2–3 related deep guides/blog posts + the parent hub.
6. **A quotable answer-block** (40–60 words) near the top for AEO/AI-Overview.

Target: lift each P0 page to ~1,000+ words of *genuinely useful* platform-specific content.

## QA item (4.6) — FAQ schema ↔ visible FAQ
Service pages ship FAQPage JSON-LD (in `page.tsx`) AND a visible FAQ component. Google requires the
JSON-LD Q&A text to **match** the visible text. When rewriting/expanding FAQs, update **both** the
component and the inline JSON-LD together (mismatch = structured-data violation / lost rich results).

## Honest verdict
On-page is not the bottleneck — it's solid. The 96% not-indexed is **crawl-budget + low domain
authority** on a young site with ~180 pages. Biggest ROI = **Phase 5 off-page authority** (GBP,
directories, reviews, backlinks) + content depth on the ~12 thin pages above. No further *code* fix
moves the needle here.
