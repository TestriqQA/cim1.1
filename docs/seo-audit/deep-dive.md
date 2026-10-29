# Phase 0 — Deep-Dive Analysis (cim1.1)

_Date: 2026-06-01 · Branch: `seo/cim-audit-fixes` · Read-only discovery, no edits._

## 1. Site shape
- **78 page routes** (`src/app/**/page.tsx`). Breakdown:
  - ~**60 service-silo pages** under `/services/*` (web-design-development alone = 26 sub-pages,
    performance-marketing = 9, social-media = 7, seo-services = 7, mobile-app = 7).
  - Dynamic: `/blog/[slug]`, `/blog/category/[slug]`, `/blog/author/[name]` (Sanity),
    `/products/[slug]` (+ `/privacy-policy`, `/support`) from `src/data`.
  - Utility: about, contact, get-in-touch, careers, products, 3× legal, cms.
- GSC total (~183 URLs) = 78 static routes + Sanity blog posts + product sub-pages. Tracks.

## 2. SEO plumbing — VERDICT: foundation is actually STRONG
| Area | File | Status |
|---|---|---|
| robots | `src/app/robots.ts` | ✅ allows `/`, blocks only `/private/`,`/api/`; sitemap declared. **No accidental block.** |
| sitemap | `src/app/sitemap.ts` | ✅ static + recursive service crawler + Sanity blog + products. ⚠️ every service route `priority:0.9` (inflation). |
| metadata base | `src/lib/metadata.ts` | ✅ `metadataBase` set; `getPageMetadata` sets **self-canonical**; default `robots.index:true`. |
| per-page metadata | all 79 page files | ✅ every page exports metadata/generateMetadata (unique title+desc+canonical+OG image). |
| structured data | `src/lib/schema.ts` + per page | ✅ rich JSON-LD graph: Organization, WebSite, WebPage, Breadcrumb, Service, ItemList, FAQ, HowTo, Navigation. |
| analytics | `src/app/layout.tsx` | GA4 via `@next/third-parties` (`G-X378ZPPV30`). |
| lang/html | `layout.tsx` | `lang="en"`, scroll-smooth. |
| per-page components | `src/components/services/**` | each service page has its OWN component folder (Hero/ServiceOverview/SolutionTypes/TechStack/Process/WhyChooseUs/FAQ/CTA) — copy is NOT literally duplicated. |

**Implication:** The 169 not-indexed pages are **NOT** caused by noindex/robots/canonical/missing-metadata.
The technical layer is good. The cause is (a) **site authority + crawl budget** too low for ~180 pages,
and (b) **templated structure + claim-stuffed, formulaic copy** that doesn't clear Google's quality bar
on a young/low-authority domain. Plus a few real technical errors (4×404, 1 redirect).

## 3. Concrete issues found (Phase 0)
**Indexing / technical**
- I-1: 4× "Not found (404)" + 1× "Page with redirect" in GSC — need exact URLs to fix. [Phase 1]
- I-2: sitemap priority inflation (all services 0.9) — weak prioritization signal. [Phase 3]
- I-3: thin blog taxonomy pages (`/blog/categories`, `category/[slug]`, `author/[name]`) likely part of
  "Crawled-not-indexed (24)" + crawl-budget drain → noindex decision. [Phase 3]

**Structured-data / claims (HIGH legal + Google-spam risk)**
- C-1: 🔴 **Fabricated `aggregateRating`/`reviewCount` JSON-LD** — astro (4.9/127), ecommerce-seo (4.9/312),
  local-seo (4.9/247), homepage `ratingValue:"5"`. Fake review schema → structured-data manual-action risk
  + non-defensible. `src/lib/schema.ts` also exposes a `generateReviewSchema` helper. [Phase 2/3 — TOP]
- C-2: 🔴 `src/lib/metadata.ts:38` — **global** Twitter card hardcodes **"95% client retention"** → ships on
  every page. [Phase 2]
- C-3: Claim-stuffed JSON-LD HowTo/Service copy (e.g. "<100ms load times and 100 Lighthouse scores",
  "zero downtime") across service pages. [Phase 2]
- C-4: Broad on-page claims surface (~211 files): guarantees, "zero breaches since N", bug-free %,
  ROI/ROAS %, big counts; superlatives in `<title>`/meta (#1, Best, world-class, award-winning). [Phase 2]

**Metadata correctness**
- M-1: `generateCategoryMetadata`/`generateAuthorMetadata` pass `seo.canonicalUrl` as the `url` param into
  `getPageMetadata`, which prepends `siteUrl` → if a Sanity editor enters a FULL canonical URL, output is
  `https://...comhttps://...` (broken canonical). Edge case but real. [Phase 3]

## 4. Prioritized problem list
| Sev | ID | Issue | Phase |
|---|---|---|---|
| BLOCKER | C-1 | Fabricated aggregateRating/review JSON-LD (Google spam + legal) | 2/3 |
| HIGH | I-1 | 4×404 + 1 redirect (GSC) | 1 |
| HIGH | C-2/C-4 | Non-defensible claims (incl. site-wide "95% retention") | 2 |
| HIGH | (auth) | Domain authority/crawl-budget → drives 138 Discovered-not-indexed | 5 (off-page) |
| MED | I-3 | Thin taxonomy pages → noindex decision | 3 |
| MED | C-3 | Claim-stuffed structured-data copy | 2 |
| MED | I-2 | sitemap priority inflation | 3 |
| LOW | M-1 | Canonical-doubling edge case in category/author meta | 3 |

## 5. Headline for the owner
Technical SEO foundation **achhi hai** — yeh indexing ka technical bug nahi. 96% not-indexed =
**authority + content-depth + too-many-similar-pages**. Solution = (1) chote technical fixes (404/redirect/
fake-ratings), (2) content differentiation + thin-page pruning, (3) **off-page authority (tumhara kaam)**.
