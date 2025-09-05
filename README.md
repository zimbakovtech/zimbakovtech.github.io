# Zimbakov Portfolio (Next.js + Tailwind)

Single-page developer portfolio with project detail routes, designed for static export and GitHub Pages hosting.

## Tech

- Next.js (App Router, static export)
- React
- Tailwind CSS
- Framer Motion (subtle animations)

## Local setup

1. Install Node.js 18+.
2. Install dependencies.

```powershell
npm install
```

3. Start dev server.

```powershell
npm run dev
```

## Build and export (static)

```powershell
npm run export
```

Static files will be generated in `out/`.

## Deploy to GitHub Pages

There are two common approaches:

- Using gh-pages branch (script included):

```powershell
# If your repo is https://github.com/<user>/<repo>
$env:GH_PAGES = 'true'; $env:GH_REPO = '<repo>'
npm run deploy
```

- Using docs folder on main:
  - Run `npm run export` then copy contents of `out/` into a `docs/` folder and push.
  - In GitHub repo settings, set Pages → Source to `main` branch, `/docs` folder.
  - For this method, you may not need basePath. If your site is under `/<repo>/`, set `basePath` and `assetPrefix` in `next.config.js` accordingly.

### basePath and assetPrefix

When serving under `https://<user>.github.io/<repo>/`:

- Set env vars during build:

```powershell
$env:GH_PAGES = 'true'; $env:GH_REPO = '<repo>'
npm run export
```

This activates:

- `basePath: '/<repo>'`
- `assetPrefix: '/<repo>/'`

Or edit `next.config.js` and replace `REPO_NAME` with your repo.

## Content & customization

- Colors and fonts are centralized in `tailwind.config.js` and `styles/globals.css`.
- Replace placeholder images in `public/images/` and the hero background is set in `components/Hero.tsx`.
- Update social links and metadata in `app/layout.tsx` and components.

## Accessibility & SEO

- Semantic landmarks and aria labels for nav/drawer.
- Metadata and Open Graph tags in `app/layout.tsx`.

## Notes

- Next.js Image optimization is disabled (`unoptimized: true`) to work with static export.
- No API routes or dynamic server features used to keep it static-export friendly.
