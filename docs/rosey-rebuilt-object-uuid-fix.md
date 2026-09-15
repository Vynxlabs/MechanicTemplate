# Fix: rebuilt component data drops `_uuid`, so repeated items share one Rosey key

**For:** a coding agent working in the upstream SiteStitcher repo.
**Found in:** exampleBookShop, `src/pages/demo/demo-image-carousel.md` (`/demo/ic/`), 2026-09-13.

## Symptom

In the Visual Editor, translating one card's heading or description in a `sections/informationCards` section changes the other cards too, and the other cards show the dashed "out of date" outline. In the built locale pages, every card shows the same translation.

Every card heading in the content has its own `_uuid`, so this isn't the earlier missing-UUID problem.

## Cause

Many components don't pass a child's data straight through. They rebuild it as YAML in a `{% capture %}`, turn it back into an object with `ymlify`, and bind that:

```liquid
{% for card in content.cards %}
  {% capture heading %}
    content:
        headline: {{card.heading.content.headline | stringifyFilter}}
        …
    styles:
        …
  {% endcapture %}
  {% assign heading = heading | ymlify %}
  {% bookshop "generic/heading" bind: heading %}
{% endfor %}
```

Only `content` and `styles` are copied, so **the source object's `_uuid` is dropped**. The child's `{{ _uuid | roseyNs }}` then resolves `_uuid` from the enclosing scope, which is the parent section's. Inside a loop, every item gets the same namespace, so every item's text resolves to the same key.

In the build, all three card headings on `/demo/ic/` carry `data-rosey-ns="d4261e56…"`, the informationCards section's own UUID. `npm run test:roseyKeys` reports:

```
demo-ic:d4261e56-…:headline      "Generic Lightbox" / "Dynamic grid" / "Responsive"
demo-ic:d4261e56-…:description   (three different descriptions)
```

Adding `_uuid` to the informationCards capture gave each card its own namespace and cleared both collisions. The change was tested, then reverted locally.

## Fix

**Rule: any object built with `ymlify` for a component that outputs Rosey keys must carry an explicit `_uuid`.**

1. **Rebuilt from a content object:** forward the source's UUID as the first line of the capture. Quote it, so a missing value becomes `""`. The empty string produces no namespace and blocks inheriting the parent's UUID, the same trick the `textBlock` includes already use with `_uuid: ""`.
   ```liquid
   {% capture heading %}
     _uuid: "{{ card.heading._uuid }}"
     content:
   ```
2. **Several blocks generated from one source item** (the `page-sections/*` pattern: one feature → icon + title + text + grid-item): give each generated block its own stable ID derived from the item, e.g. `_uuid: "{{ feature._uuid }}-title"`, `"{{ feature._uuid }}-text"`. The items need a UUID for this, so add `_uuid:` to the array-item blueprint (e.g. `features[*]`). The sync script (`tests/validateUsedComponents.js`) then backfills existing content.

## Where

Find every instance with `grep -rn "ymlify" _component-library/components`.

**Causes collisions today** (a rebuild inside a loop over content items):
- `sections/informationCards`: `heading` per card; forward `card.heading._uuid`. This is the demo/ic bug.
- `sections/featuresCenterImage`: `heading` per card, in both loops; forward `card.heading._uuid`.
- `generic/leftRightAnimation`: `entryHeading` per entry, in both loops; forward `entry.entry.heading._uuid`.
- `sections/sideBySideStandard`: `entryContent` per entry; forward `entry._uuid`. Also fix `generic/leftRight` (below), which it renders.

**Single rebuild; harmless today, but forward `_uuid` anyway** so it can't break when reused in a loop or next to other text:
`generic/leftRight` (both `entryHeading` captures), `generic/mediaCards/defaultMediaCard`, `generic/pricingCard`, `generic/services/cleanCard`, `sections/bannerHero`, `sections/bigTextHero`, `sections/coloredCTA` (`content.CallToAction`), `sections/imageBottomHero`, `sections/leftRightHero`, `sections/simpleHero`, `sections/hero`, `sections/feature`, `sections/cards` (`heading`).

**Generated block trees, rule 2:** `page-sections/cards`, `cta`, `editorial-content`, `faq`, `feature`, `hero`, `pricing`, `side-by-side`, `team`, `testimonials`. None of the generated blocks carry `_uuid`, and the repeated item arrays (features, plans, members, testimonials, FAQ items, cards) have no `_uuid` in their blueprints. exampleBookShop's content only uses `page-sections/base-section`, so none of these were exercised there. Verify each on a page with two or more items.

**Not affected:**
- The collection-card loops (`blogCards`, `happeningCards`, `listingsAll`, `collectionsAll`, `servicesSection`, `upcomingHappening`) key off an `item:<url>` root.
- The `countdown`/`simple-text` snippet wrappers render inside rich text, where the enclosing region is the translation unit.

## Related: posts aren't backfilled

`tests/validateUsedComponents.js` only backfills `hero` and `content_blocks`, so posts' `editorial_blocks` never get UUIDs. That's the other remaining collision in exampleBookShop (`blog-my-blog-is-cool:text`). Extend the collection step to `editorial_blocks`, and to any other top-level block arrays.

## Verify

```bash
rm -rf dist && ROSEY_ENABLED=true npm run cc:build
npm run test:roseyKeys          # expect no "shared by elements with different content"
npm run test:roseyIds           # no blocks without _uuid after the sync script has run
```

Then, with `cloudcannon dev --no-app-sync dist` running:
`npm run test:roseyEditor -- --path /src/pages/demo/demo-image-carousel.md` should pass. Add a test page for each `page-sections/*` component with multiple items, and check it the same way.
