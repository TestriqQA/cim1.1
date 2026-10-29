# MASTER PROMPT — Cinute InfoMedia (cim1.1) Full Audit, SEO Fix & Ranking Plan

> Single source of truth for the CIM audit. Execute phases in order. Track status in
> `progress.md`; log every discrete issue in `fix-backlog.md`.

```
REPO:   C:\Users\Testriq_L59\Documents\GitHub\cim1.1
LIVE:   https://www.cinuteinfomedia.com/
STACK:  Next.js 16, React 19, Sanity 5 (next-sanity), TypeScript 5, Tailwind 4,
        framer-motion, react-hook-form+zod, nodemailer, @next/third-parties, googleapis.
        (CDPL ke identical.)
BIZ:    Digital agency — web/mobile dev, SEO, performance marketing, social,
        AI chatbots/automation, brand identity. B2B, global. CDPL ki sister brand.
NAP:    Office #3, Ashley Tower, Mira Road, Mumbai 401107 | +91 900 498 8859 |
        contact@cinuteinfomedia.com
```

## GOAL (user words)
"Pura website samjho → audit karo → gaps findout karo → fix karo → technical SEO karo →
SEO audit + fix karo → aur batao ki rank karne ke liye main (owner) kya karu. Kuch bhi
chhutna nahi chahiye."

## GLOBAL RULES (har phase pe lagu)
- **Branch:** `main` se single working branch `seo/cim-audit-fixes`. Sab kaam isi pe.
  Har phase ka apna commit (conventional prefix: `fix:`/`chore:`/`feat:`). User merge karega.
- **Attribution:** SIRF user ki git identity. **NO Co-Authored-By trailer.**
- Doosre contributors (Ratnesh/adnan/prakash/priya/Jayesh) ke unrelated kaam ko mat chhuo.
- **Edits:** Node `readFileSync/writeFileSync(path,'utf8')`, exact-substring split/join.
  PowerShell se file mat likho (UTF-8/CRLF corrupt). CRLF `\r\n` ka dhyaan.
- **Verify har file pe:** forbidden-claim grep count, U+FFFD (`\357\277\275`) corruption
  check, `git diff --stat` proportionality.
- **Typecheck only:** `NODE_OPTIONS=--max-old-space-size=8192 npx tsc --noEmit`.
  LOCAL `next build` / `ANALYZE=true` MAT chalao (Sanity prod token risk).
- Naye features/refactor mat add karo — sirf audit-driven fixes.
- **Tracking:** `docs/seo-audit/progress.md` + `fix-backlog.md` (CDPL pattern).
  Audit-doc commits sirf is branch pe.

---

## PHASE 0 — DEEP-DIVE ANALYSIS & DISCOVERY  [SABSE PEHLE, NO edits]
Maqsad: surface-scan nahi — poori website ko andar tak samajhna, taaki har fix root-cause
pe ho. Deliverable: `docs/seo-audit/deep-dive.md` + `site-map-and-baseline.md`

- **0.1 FULL ROUTE INVENTORY:** `src/app` ke har `page.tsx` → URL, purpose, target
  service/keyword, type (silo/product/blog/utility). Master URL table.
- **0.2 RENDER MODE per route:** static / SSR / dynamic / client-only? `generateStaticParams`?
  `dynamic='force-dynamic'` ya `revalidate`? (indexing ke liye critical.)
- **0.3 SEO PLUMBING TRACE:** metadata kahan se (generateMetadata vs static export vs
  central lib)? `metadataBase` set? `robots.ts`/`sitemap.ts`/`manifest` exist? JSON-LD
  generators kahan? — har ek padho, assume mat karo.
- **0.4 CONTENT SOURCE:** kaunse pages Sanity-driven, kaunse hardcoded. Blog/product
  dynamic routes ka data-fetch + metadata path trace.
- **0.5 DATA/CLAIMS HOTSPOTS:** `src/data/*.ts` (products.ts etc.) — shared claim/stat sources.
- **0.6 LIVE vs CODE CROSS-CHECK:** 5-8 representative live URLs WebFetch — rendered HTML
  mein real content + title + meta + canonical aa raha, ya empty JS-shell? (read-only.)
- **0.7 BASELINE TABLE:** har URL: current `<title>`, meta desc, canonical, h1, indexable?,
  in-sitemap?, issues[]. Yeh baaki phases ki backbone.
- **0.8 PRIORITIZED PROBLEM LIST:** severity ke saath (blocker/high/medium/low).

---

## PHASE 1 — GSC NON-INDEXING ROOT-CAUSE DIAGNOSIS  [DATA-CONFIRMED, URGENT]
GSC snapshot (2026-06-01): **Indexed 14 / Not indexed 169** (total ~183).

| Reason | Pages | Source | Bucket |
|---|---|---|---|
| Discovered – currently not indexed | **138** | Google systems | #1 driver |
| Crawled – currently not indexed | **24** | Google systems | quality |
| Not found (404) | 4 | Website | technical |
| Alternate page w/ proper canonical | 2 | Website | likely OK (verify) |
| Page with redirect | 1 | Website | technical |

**VERDICT (data-confirmed):** NO "noindex"/"robots.txt blocked" bucket → NOT a hard
technical block. 96% (138+24) = Google's **crawl-budget + content-quality** decision on a
low-authority domain that bulk-published many similar pages (graph: indexed flat ~14,
not-indexed exploded ~30→~180 across Apr–May).

**ACTION SPLIT:**
- **(A) TECHNICAL — fix now (~7 pages):**
  - A1 Pull 4 "Not found (404)" URLs from GSC → root cause (stale sitemap? renamed route?
    bad internal link?) → fix route / remove from sitemap / 301 to correct URL.
  - A2 The 1 "Page with redirect" → ensure 301 (not 302), no chain, sitemap lists FINAL URL.
  - A3 The 2 "Alternate w/ canonical" → confirm intentional; fix only if wrong target.
  - A4 Defensive sanity: confirm NO accidental site-wide noindex / robots Disallow /
    X-Robots-Tag.
  - A5 Verify `sitemap.ts` lists ALL real canonical URLs, submitted + fresh in GSC.
- **(B) CONTENT QUALITY — Phase 4 (THE real fix for 138+24):**
  - B1 Audit service-silo pages for near-duplicate boilerplate; quantify duplication.
  - B2 Each page: unique H1/intro/page-specific value (use-cases, specifics, FAQ).
  - B3 Consolidation call: irredeemably thin pages → merge / 301 into stronger parent.
  - B4 Strengthen internal linking so Google discovers + values deep pages.
- **(C) AUTHORITY / CRAWL-BUDGET — Phase 5 off-page (USER action, not code):**
  GBP, directories, reviews, backlinks, citations. Weeks-long, ongoing.
- **RE-REQUEST LOOP:** technical fix → sitemap re-submit → "Validate Fix" + URL Inspection →
  Request Indexing. Content/authority pages need time + signals, not instant.

---

## PHASE 2 — NON-DEFENSIBLE CLAIMS CLEANUP (code + Sanity/CMS)  [priority #1 content]
- **TIER 1 (remove/reframe):** "Zero breaches since N", uptime/SLA/ROI/performance/
  money-back guarantees, "99.x% bug-free / crash-free", "N-hour response guaranteed",
  "95% retention / N% satisfaction", baked-in ROI/ROAS/growth %, "Nx better", "N% faster",
  big counts (2,500+ businesses / 300+ projects / N+ happy clients / brands created)
  → capability/qualitative phrasing (numbers only if real, sourced, client-named case study).
- **TIER 2 (superlatives, esp. SEO titles/meta):** #1 / No.1 / Best / top-rated / top-tier /
  world-class / industry-leading / award-winning / leading → neutral descriptive + keyword intact.
- **CMS/SANITY:** blog/product content Sanity mein bhi audit karo — claims sirf code mein nahi.
- **KEEP:** CSS/animation %; honest disclaimers ("no agency can guarantee #1 rankings");
  real sourced results.
- Verify: forbidden-claim grep → 0; typecheck clean.

---

## PHASE 3 — TECHNICAL SEO AUDIT + FIX
- 3.1 Indexability: `robots.ts` sahi? sitemap.ts saare real routes include? lastmod/priority sane?
- 3.2 Canonical: self-canonical per page; www/trailing-slash consistency.
- 3.3 Metadata completeness: unique `<title>` (≤60), meta desc (≤155, no stuffing), OG + Twitter, og:image.
- 3.4 Structured data (JSON-LD): Organization, WebSite+SearchAction, BreadcrumbList,
  Service/Offer, FAQPage, Article+Author, Product. **NO fabricated aggregateRating/review counts.**
- 3.5 Heading hierarchy: exactly one `<h1>`, logical h2/h3.
- 3.6 Images: next/image, meaningful alt, width/height/priority for LCP, no oversized assets.
- 3.7 Internal linking: no orphans, silos cross-linked + home-linked, breadcrumbs, descriptive anchors.
- 3.8 CWV hygiene (static review): client-component overuse, above-the-fold framer-motion,
  font loading, render-blocking.
- 3.9 **Thin taxonomy/archive `noindex` decision:** blog `category/[slug]`, `author/[name]`,
  `categories`, pagination → decide index vs noindex (likely the "Crawled-not-indexed 24" + crawl-budget drain).
- 3.10 Crawl/UX basics: 404 handling, 301 redirects, lang attr, viewport, theme-color, favicon/manifest.

---

## PHASE 4 — ON-PAGE / CONTENT SEO + DUPLICATE-CONTENT FIX
- 4.1 Keyword mapping: per service page 1 primary + 2-3 secondary (intent-based).
- 4.2 Title/meta rewrite: keyword front-loaded, human, no superlative-stuffing.
- 4.3 Content depth/gaps: thin pages flag; per page a clear quotable answer-block (AEO).
- 4.4 **De-duplicate service-silo boilerplate** (drives not-indexed pages): unique copy per page.
- 4.5 E-E-A-T: author bios, credentials, site-wide NAP consistency.
- 4.6 FAQ schema ↔ visible FAQ alignment.
- 4.7 **Topical authority:** pillar→cluster internal linking; content-cluster plan.

---

## PHASE 5 — RANKING ACTION PLAN (GEO/AEO + AUTHORITY, off-page; USER action)
Deliverable: `docs/seo-audit/ranking-action-plan.md` (P0/P1/P2 + why + how).
Principle: AI answer-engines third-party signals pe rank karte, on-page self-claims pe nahi.
- 5.1 Google Business Profile (Mira Road) — claim, complete, categories, photos, reviews.
- 5.2 Directories/entity: Clutch, GoodFirms, DesignRush, Sortlist, LinkedIn, Crunchbase — consistent NAP.
- 5.3 Reviews: Google + Clutch — AI engines quote these.
- 5.4 Listicle/mention outreach ("best web development agency Mumbai" inclusion).
- 5.5 Reddit/Quora/community (genuine) — AI citation surface.
- 5.6 Content authority: real case studies (defensible numbers), comparisons, guides.
- 5.7 Backlinks: guest posts, CDPL cross-link, HARO/digital PR.
- 5.8 **Competitor / SERP keyword-gap research** — prioritize targets.
- 5.9 Tracking: GSC + GA4 verify, sitemap submit, key-query monitoring.

---

## PHASE 6 — CONVERSION + ANALYTICS + SECURITY REVIEW
- 6.1 CTA audit: clear primary CTA per key page; forms working (api/contact, api/careers/submit,
  api/get-in-touch via nodemailer/googleapis).
- 6.2 Form UX: zod validation, success/error states, spam protection (honeypot/rate-limit).
- 6.3 Trust elements (defensible only): real testimonials, case studies, response expectation.
- 6.4 **Analytics instrumentation audit:** `@next/third-parties` GA4 installed + correct?
  GSC verified? conversion/form-submit events firing?
- 6.5 **API-route security review:** api/contact, api/careers/submit, api/get-in-touch,
  and especially **api/setup-sanity** (exposed setup endpoint risk); secrets in `.env` only.

---

## PHASE 7 — FINAL REPORT + BASELINE KPIs + MONITORING
- 7.1 Baseline KPIs: indexed count (14→target), GSC impressions/clicks, target-query positions.
- 7.2 Before/after snapshot.
- 7.3 Executive-summary deliverable (Word/PDF) for stakeholders.
- 7.4 Monthly re-audit cadence; 404/redirect governance map in `next.config`.

---

## EXECUTION ORDER & TRACKING
`Phase 0 → 1 → 2 → 3 → 4 → (5 doc parallel) → 6 → 7.`
- `progress.md`: har phase ka status (D / in-progress / ✅), date.
- `fix-backlog.md`: har discrete issue ek row (ID, area, file, fix, status).
- Har phase ke baad: typecheck clean + short summary (files touched, judgement calls).
- Final: consolidated summary + ranking-action-plan.md handover.

## DO NOT
- Local `next build` / `ANALYZE`.
- Fake ratings/counts re-introduce.
- Other contributors' work touch.
- Scope creep beyond audit-driven fixes.
