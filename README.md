# mahdimp.github.io

Personal portfolio/resume site. Static, zero-JS by default (Astro), deployed to GitHub Pages via Actions.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

```
src/
  components/   Hero, Now, SelectedWork, Stack, Contact
  data/work.ts  case study content
  layouts/      base Layout (meta, OG, JSON-LD)
  pages/        index.astro
design-system/  persisted design tokens (colors, typography, spacing)
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`. One-time setup: in the repo's
Settings → Pages, set **Build and deployment → Source** to **GitHub Actions**.

## Known TODOs

- `public/cv.pdf` needs to be added (Hero download button links to it).
- `public/og-image.png` referenced in the layout but not yet created.
- straiv and Dubai Police FMS/IMS case studies in `src/data/work.ts` are drafts pending sign-off before publishing (see `status` field on each entry).
- Nx migration case study is a placeholder — needs real specifics.
- `deckle` repo is still private; once public and deployed, update its link in `work.ts`.
