# Cinute InfoMedia — SEO Audit & Fix: Final Report

_Date: 2026-06-04 · Branch: `seo/cim-audit-fixes` (off `main`, 25+ commits) · Owner owns merge/deploy._

---

## 1. Executive summary
A full website audit + fix pass was completed across 8 phases. The site's **technical & on-page SEO
foundation was already strong** (clean robots/sitemap, unique per-page canonical/metadata/JSON-LD).
The work focused on the **real problems**: non-defensible/fabricated marketing claims, a few technical
SEO gaps, a **critical exposed API endpoint**, and a data-driven plan for the actual ranking lever
(off-page authority).

**Headline:** The 169/183 not-indexed pages are **not a code bug** — they are driven by **low domain
authority + crawl budget**. The fix is **off-page authority + content depth** (see the ranking plan),
not more code. All code-side issues found have been fixed.

---

## 2. What was done (by phase)

| Phase | Outcome |
|---|---|
| **0 Deep-dive** | Mapped 78 routes, render modes, SEO plumbing. Verdict: foundation strong. |
| **1 Indexing diagnosis** | Root cause = authority/crawl-budget (96%), not technical block. Owner redirected the 4 GSC 404 URLs — **QA-verified live** (308 → correct target → 200). |
| **2 Claims cleanup** | **~700 code edits** removed/reframed fabricated claims: fake review schema, guarantees, zero-breach, bug-free %, ROI/ROAS/CTR/growth %, inflated counts, superlatives — across code **and 8 Sanity blog posts** (live-patched + verified). |
| **3 Technical SEO** | Real CIM NAP in JSON-LD (was placeholder/US), sitemap depth-tiered priorities, canonical-doubling guard, author archives `noindex,follow` + de-listed from sitemap, case-sensitive slug 301s, fixed a pre-existing redirect-to-404. |
| **4 On-page/content** | Audited all 60 service pages: metas + titles **all unique**, no mechanical duplication. Real gap = content depth on ~12 thin pages → `phase4-content-plan.md` (priority list + playbook). |
| **5 Off-page plan** | `ranking-action-plan.md` — P0/P1/P2 owner playbook (GBP, reviews, citations, backlinks). **This is the real ranking lever.** |
| **6 Conversion/analytics/security** | 🔴 **Critical fix:** gated the destructive unauthenticated `/api/setup-sanity` endpoint. Analytics + form findings below. |
| **7 Final report** | This document. |

---

## 3. Key wins
- ✅ Removed **all** fabricated stats/claims (legal + Google-spam risk eliminated) — code + CMS.
- ✅ Fixed a **critical security hole**: `GET /api/setup-sanity` could let anyone overwrite the live blog.
- ✅ Corrected placeholder/US business data (NAP) in structured data → real Mira Road NAP.
- ✅ Technical SEO hardening (sitemap, canonical, noindex, redirects) — all `tsc`-clean, diffs balanced.
- ✅ Delivered the data-backed **content** + **off-page** plans that actually move indexing/ranking.

## 4. Verification discipline (every batch)
forbidden-claim grep → 0 · `tsc --noEmit` exit 0 · line-balanced diffs (no CRLF flip) · no U+FFFD
corruption · `package-lock.json` untouched · temp scripts deleted · commits = owner identity, no
Co-Authored-By trailer.

---

## 5. Baseline KPIs (record now; re-check monthly)
| Metric | Baseline (2026-06) | 90-day target |
|---|---|---|
| Indexed pages (GSC) | **14 / 183** | 60+ |
| Discovered–not-indexed | 138 | shrinking |
| GSC impressions / clicks | record current | growth |
| Google reviews | current | 15+ |
| Referring domains | current | +20 quality |
| Key-query positions | record current | top-20 → top-10 |

---

## 6. ⚠️ Owner action items (in priority order)
1. **🔴 Deploy / merge** `seo/cim-audit-fixes` so all fixes go live — **including the API-1 security fix**.
   Interim: remove `SANITY_API_TOKEN` from Vercel prod (endpoint → 401) until deployed.
2. **Execute Phase 5** (`ranking-action-plan.md`): GBP, real Google/Clutch reviews, directory citations
   with the exact NAP block, backlinks. *(Biggest ranking impact.)*
3. **Content depth** on the ~12 thin pages (`phase4-content-plan.md`) — content team.
4. **Resolve verify-flags:** C-7 (GDPR/HIPAA/PCI/SOC2 — hold these certs? if not → "-aligned"),
   TEST-1 (testimonials real?), C-9 ($ figures real?).
5. **GSC re-request loop** after deploy: re-submit sitemap → Validate Fix → Request Indexing on hubs.

## 7. Recommended enhancements (Phase 6 findings — not critical)
- **Analytics (6.4):** GA4 pageviews work, but **no conversion/form-submit events** — add a GA4 event on
  successful contact/careers/get-in-touch submit so leads are measurable.
- **Form spam protection (6.2):** forms have **no honeypot / rate-limit / captcha** — add a honeypot
  (cheap) + basic rate-limit.
- **Server-side validation:** API routes lack zod validation (only careers form validates client-side) —
  add server-side schema validation for robustness.
- **Redirect governance:** the 4 GSC redirects live in Vercel dashboard, not `next.config.mjs` — consider
  consolidating into code for version-control.
- **api/setup-sanity:** ideally **delete** this one-time seed endpoint entirely (now gated, but unused).

## 8. Deliverables (in `docs/seo-audit/`)
`MASTER-PROMPT.md` · `progress.md` · `fix-backlog.md` (every issue + status) · `deep-dive.md` ·
`phase4-content-plan.md` · `ranking-action-plan.md` · `FINAL-REPORT.md` (this file).

> A stakeholder-friendly Word/PDF version of this report can be generated on request.
