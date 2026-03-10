# Camryn Jackson — Portfolio

Portfolio website for Camryn Jackson — Product Builder, Founder @ PNEUOMA, and Creative. Built with Next.js 14, TypeScript, and Tailwind CSS. Deployed on Vercel.

**Live:** [camryn-jackson-portfolio.vercel.app](https://camryn-jackson-portfolio.vercel.app)

## Pages

- **`/`** — Portfolio landing page with links to all sections
- **`/product`** — Recruiter-ready PM portfolio: 5 featured case studies, product ecosystem index, systems thinking framework, product philosophy, and professional CTA
- **`/campaigne`** — Official entity hub for Campaigne: books, music, apps, and creative works
- **`/apps`** — Shipped apps (PNEU, ORIGEN, SOVEREIGNTY) with App Store links
- **`/books`**, **`/music`** — Work indexes with individual detail pages
- **`/acting`** — Film and acting credits
- **`/about`**, **`/press`**, **`/photos`**, **`/contact`** — Supporting pages
- **`/ai`**, **`/disambiguation`** — Machine-readable identity and clarification

## Product Portfolio (`/product`)

5 featured case studies with PM-style structure:

| # | Product | Domain | Live |
|---|---------|--------|------|
| 01 | PNEU | Health / Education | [App Store](https://apps.apple.com/us/app/pneu/id6757112120) |
| 02 | PNEUOMA Capture | AI / Education | [pneuoma.com](https://pneuoma.com) |
| 03 | Playground | Education / Gaming | In Progress |
| 04 | DIBBS Copilot | AI / Workflow | In Progress |
| 05 | PilotEngine | AI / Sales | [pilot-engine.vercel.app](https://pilot-engine.vercel.app) |

Product ecosystem index covers 10+ products across AI, education, workflow automation, and gaming.

All product data lives in `src/content/products.ts` — add new case studies or index items by editing that file.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Playfair Display
- **Deployment**: Vercel (auto-deploys on push to `main`)

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://camrynjackson.com
```

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Portfolio landing page
│   ├── product/page.tsx      # PM portfolio & case studies
│   ├── campaigne/page.tsx    # Campaigne entity hub
│   ├── books/                # Books index + [slug] detail
│   ├── music/                # Music index + [slug] detail
│   ├── apps/                 # Apps index + [slug] detail
│   ├── acting/               # Acting & film
│   ├── about/                # Bio & background
│   ├── press/                # Media kit & press materials
│   ├── photos/               # Photo gallery
│   ├── contact/              # Contact info
│   ├── layout.tsx            # Root layout
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/               # Navigation, Footer, WorkCard, etc.
├── content/
│   ├── products.ts           # Case studies + product index (modular)
│   ├── works.ts              # Books, albums, apps
│   ├── bio.ts                # Short, medium, long bios
│   ├── links.ts              # Social links
│   ├── entity.ts             # Entity identity
│   └── facts.ts              # Wikidata-style facts
└── lib/                      # Utilities (structured data, helpers)
```

## Deployment

Push to `main` to auto-deploy on Vercel, or:

```bash
npx vercel --prod
```

## License

Private project — All rights reserved.
