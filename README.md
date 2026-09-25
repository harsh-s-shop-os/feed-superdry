# Superdry Feed — prototype

A single-page prototype of the ShopOS Feed, rebranded for **Superdry** (superdry.in).
Forked from feed-cosmix (the standing base fork). URL onboarding, live setup, the feed,
and the Pro deck with a Signals column. No build step, no framework, no dependencies.

## Brand

- Site: https://superdry.in — runs on **Fynd Platform** (Reliance's unified-commerce
  stack, company id 46), not Shopify. No `/products.json`, no Next.js `__NEXT_DATA__`.
- Ad stack: Google Tag Manager (`GTM-55MBBMF`) fires both the **Meta pixel** and
  **Google Ads** conversion tags — confirmed from the live GTM container payload, not
  guessed.
- Palette (read off the live site's CSS custom properties): `#0E0E0E` (near-black),
  `#e87a1e` (accent orange), `#585555` (secondary grey).
- Type: Helvetica Bold headings, Poppins body (both are used live on superdry.in).
- Logo: real logomark pulled from the site's own CDN (`cdn.fynd.com/.../free-logo/...`
  and the site favicon for the square brand mark).
- Catalog imagery and prices (Code Tech Relaxed Zip, Carbon Ultra Track Top, the
  Skinny Denims on-model shot, the AW26 and Bottomwear Edit campaign banners) are all
  pulled directly from live superdry.in collection pages, not invented.
- The Google Drive folder shared for this brand (`SuperDry`) is currently empty — no
  campaign assets were supplied there as of this build.

## Content: hand-authored, not yet in the Brand Feeds sheet

The base fork's content pipeline reads from a shared "Brand Feeds" Google Sheet
(`tools/sync_sheet.py` + `tools/sheet.config.json`). For this build, `data/feed-data.js`
was **hand-authored** in the exact shape `sync_sheet.py` produces (tab `Superdry-1`),
since no Superdry tab exists in that sheet yet. To move it onto the live pipeline:
add a `Superdry-1` tab to the Brand Feeds sheet with this same content, then run

    python3 tools/sync_sheet.py

which will overwrite `data/feed-data.js` from the sheet instead.

## Run it locally

    python3 -m http.server 5173

Then open http://localhost:5173

## Known limits (v1)

- No product/campaign video wired in — a real product-detail route on superdry.in
  needs the client-rendered app to resolve (curl alone returns the wrong/unrelated
  product), which this build didn't attempt; left as an open item, not faked.
- Campaign/creative imagery currently reuses the site's own homepage banners and
  on-model catalog shots; deeper per-post art direction (custom crops/grades per
  card) has not been done.
- No AI-visibility (GEO) numbers — rather than invent a score, the one visibility
  card in this build proposes running a real audit instead.
- Exact live product count isn't exposed by any single storefront endpoint, so it's
  omitted rather than guessed.
- Git history/remote have not been rewritten yet (see the handoff notes) — this repo
  still carries `feed-cosmix` lineage under the hood.
