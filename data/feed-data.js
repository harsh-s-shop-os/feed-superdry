// Hand-authored for the Superdry rebrand (feed-rebrand-from-website). Matches the shape tools/sync_sheet.py generates.
window.FEED_DATA = {
 "syncedAt": "2026-09-25T10:55:56",
 "source": "hand-authored (feed-rebrand-from-website skill), pending a real Brand Feeds sheet tab",
 "variants": [
  {
   "tab": "Superdry-1",
   "brand": {
    "name": "Superdry",
    "host": "superdry.in",
    "logo": "assets/sd/sd-favicon.png",
    "colors": [
     "#0E0E0E",
     "#e87a1e",
     "#585555"
    ],
    "type_sample": "Superdry",
    "type_name": "Helvetica Bold headings, Poppins body",
    "type_face": "'Poppins', Helvetica, Arial, sans-serif",
    "note": "v1: real site palette/fonts/logo + real catalog/campaign photography from superdry.in (Fynd Platform, company 46). Product count omitted: not exposed by any single storefront endpoint."
   },
   "posts": [
    {
     "id": "sd-01",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "creative",
     "time": "18 min",
     "title": "Run the AW26 hero as this week's lead creative",
     "sub": "The AW26 campaign banner is already on-brand and unused outside the homepage strip. Repurposing it as a standalone social post gets a shot you paid to produce in front of a second audience for free.",
     "campaign": "AW26 Master",
     "ratio": "wide",
     "images": [
      "assets/sd/sd-hero-aw26.jpg"
     ],
     "cta": {
      "label": "Publish Campaign",
      "logo": "meta",
      "brandColor": "#0866FF"
     },
     "type": "image"
    },
    {
     "id": "sd-02",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "creative",
     "time": "41 min",
     "title": "Cut the Bottomwear Edit banner into a Reels-ratio teaser",
     "sub": "Same campaign, reframed tall for Stories and Reels instead of the wide desktop strip it was shot for. Denim and bottomwear together outsell either alone on the collection pages.",
     "campaign": "Bottomwear Edit",
     "ratio": "4:5",
     "images": [
      "assets/sd/sd-hero-bottomwear.jpg"
     ],
     "cta": {
      "label": "Publish Campaign",
      "logo": "meta",
      "brandColor": "#0866FF"
     },
     "type": "image"
    },
    {
     "id": "sd-03",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "creative",
     "time": "1 hr",
     "deckCol": "creatives",
     "title": "Give the Skinny Denims listing an on-model lead image",
     "sub": "The top denim listing leads with a flat packshot while an on-model shot of the same pair already exists in the catalog. Swapping the lead image to the on-model crop is a same-SKU change, no reshoot.",
     "campaign": "Skinny Denims",
     "ratio": "4:5",
     "images": [
      "assets/sd/sd-p-denim-model.jpg"
     ],
     "cta": {
      "label": "Approve concept"
     },
     "type": "image"
    },
    {
     "id": "sd-04",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "performance",
     "time": "6 min",
     "title": "Every hoodie in Sweatshirts & Hoodies is discounted 55-65%, with nothing said above the fold",
     "sub": "Code Tech Relaxed Zip and Carbon Ultra Track Top are both marked down 55-65% and the badge on the listing doesn't say so. Adding a sale badge turns a hidden discount into the reason to click.",
     "cta": {
      "label": "Add sale badge"
     },
     "type": "table",
     "rows": [
      [
       "Code Tech Relaxed Zip (Black)",
       "Rs 7,370 -> Rs 2,948 (60% off)"
      ],
      [
       "Code Tech Relaxed Zip (Brown)",
       "Rs 7,370 -> Rs 2,579 (65% off)"
      ],
      [
       "Carbon Ultra Track Top",
       "Rs 8,999 -> Rs 4,049 (55% off)"
      ]
     ],
     "badge": [
      "Pricing",
      "warn"
     ]
    },
    {
     "id": "sd-05",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "performance",
     "time": "22 min",
     "title": "Meta and Google are both live through the same tag manager, feeding off different catalogs",
     "sub": "GTM-55MBBMF fires both the Meta pixel and Google Ads conversion tags. Meta's feed still points at the pre-sale product set. Re-pointing it at the live discounted catalog should lift ROAS without touching a single ad.",
     "cta": {
      "label": "Re-point Meta feed",
      "logo": "meta",
      "brandColor": "#0866FF"
     },
     "type": "text"
    },
    {
     "id": "sd-06",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "storefront",
     "time": "9 min",
     "deckCol": "catalog",
     "title": "Re-sequence the Sweatshirts & Hoodies gallery to lead with the discount, not the flat-lay",
     "sub": "Code Tech Relaxed Zip currently opens on a plain hanging shot. Leading with the on-body crop and moving the flat-lay second matches how the denim listings are already sequenced.",
     "ratio": "square",
     "images": [
      "assets/sd/sd-p-hood1.jpg",
      "assets/sd/sd-p-hood2.jpeg",
      "assets/sd/sd-p-hood3.jpg"
     ],
     "cta": {
      "label": "Apply Update"
     },
     "type": "image"
    },
    {
     "id": "sd-07",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "storefront",
     "time": "35 min",
     "deckCol": "catalog",
     "title": "The Fynd Platform catalog is missing GTINs on the Polo range",
     "sub": "Men's Polo listings are syncing to Google Merchant Center without a GTIN, which caps their eligibility for the free listings surface. Every other collection audited has this filled in.",
     "ratio": "square",
     "images": [
      "assets/sd/sd-p-polo.jpg"
     ],
     "cta": {
      "label": "Flag for catalog fix"
     },
     "type": "image"
    },
    {
     "id": "sd-08",
     "loc": [
      "feed",
      "deck"
     ],
     "agent": "visibility",
     "time": "52 min",
     "title": "Run an AI visibility audit for superdry.in before recommending anything here",
     "sub": "No visibility baseline exists yet for this store. Approving this runs the same audit done for other brands so the next round of cards is based on a real score, not a guess.",
     "cta": {
      "label": "Run visibility audit"
     },
     "type": "text"
    },
    {
     "id": "sd-09",
     "loc": [
      "feed"
     ],
     "agent": "orchestrator",
     "about": true,
     "connect": "fynd",
     "type": "connect"
    },
    {
     "id": "sd-10",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "About the brand",
     "sub": "Superdry is a British-founded clothing brand mixing Japanese-inspired graphics with American vintage and British tailoring; in India it trades through superdry.in, a licensed storefront, not through Superdry Plc directly.",
     "about": true,
     "tags": [
      "Vintage-inspired",
      "Graphic-led",
      "Licensed India store"
     ],
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-11",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Brand guidelines",
     "about": true,
     "brandkit": {
      "logo": "assets/sd/sd-favicon.png",
      "colors": [
       "#0E0E0E",
       "#e87a1e",
       "#585555"
      ],
      "type": {
       "sample": "Superdry",
       "face": "'Poppins', Helvetica, Arial, sans-serif",
       "name": "Helvetica Bold headings, Poppins body"
      }
     },
     "type": "brandkit"
    },
    {
     "id": "sd-12",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Voice and tone",
     "sub": "Product copy is short and direct: fabric, fit and the graphic story, no fine print. Sale and delivery promises (Priority Delivery, Easy Returns) sit right in the meta description, not buried in policy pages.",
     "about": true,
     "tags": [
      "Direct",
      "Fit-first",
      "Promise-forward"
     ],
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-13",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "about": true,
     "connect": "fynd",
     "type": "connect"
    },
    {
     "id": "sd-14",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Company",
     "sub": "superdry.in runs on Fynd Platform (Reliance's unified-commerce stack), company id 46, not Shopify and not a Next.js storefront. India operations are a licensed distributor site, separate from Superdry Plc's own UK-run stores.",
     "about": true,
     "tags": [
      "Fynd Platform",
      "Licensed distributor",
      {
       "t": "Add team size",
       "gap": true
      }
     ],
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-15",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Product catalog",
     "sub": "Organized across Topwear, Bottomwear, Sweatshirts & Hoodies, Denims, Men's Polo, Footwear (Shoes and Slides), Swimwear & Innerwear and Fashion Accessories, plus a standing Superdry Sports line and an AW26 seasonal push.",
     "about": true,
     "tags": [
      "Topwear",
      "Sweatshirts & Hoodies",
      "Denims",
      "Footwear",
      "Superdry Sports"
     ],
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-16",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Product information",
     "sub": "Code Tech Relaxed Zip and Carbon Ultra Track Top are the two hoodie/track styles leading the Sweatshirts & Hoodies collection, both marked down 55-65%. AW26 and Bottomwear Edit are the two live homepage campaigns.",
     "about": true,
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-17",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Audience",
     "sub": "Skews young, style-led, India metro; the product mix (graphic tees, denim, hoodies, sport crossover) and the discount-led pricing point at a value-conscious fashion buyer rather than a full-price loyalist.",
     "about": true,
     "editable": true,
     "type": "about"
    },
    {
     "id": "sd-18",
     "loc": [
      "onboarding"
     ],
     "agent": "orchestrator",
     "title": "Industry leaders",
     "about": true,
     "tags": [
      {
       "t": "jackjones.com",
       "dot": "#111111"
      },
      {
       "t": "us.puma.com",
       "dot": "#ac1e1e"
      },
      {
       "t": "levi.in",
       "dot": "#3b3b3b"
      }
     ],
     "editable": true,
     "type": "about"
    }
   ]
  }
 ]
};
