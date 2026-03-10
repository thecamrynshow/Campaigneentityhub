# Camryn Jackson — Portfolio

A portfolio website for Camryn Jackson — Product Manager, Founder, and Creative. Built with Next.js 14, TypeScript, and Tailwind CSS.

## What's Inside

- **`/`** — Portfolio landing page linking to all major sections
- **`/product`** — Product Manager portfolio with 3 case studies (PNEU, PNEUOMA Capture, Educational Sandbox Game), flow diagrams, hardest product decisions, and metrics
- **`/campaigne`** — Official entity hub for Campaigne: books, music, apps, and creative works
- **`/books`**, **`/music`**, **`/apps`** — Work indexes with individual detail pages
- **`/acting`** — Film and acting credits
- **`/about`**, **`/press`**, **`/photos`**, **`/contact`** — Supporting pages
- **`/ai`**, **`/disambiguation`** — Machine-readable identity and clarification

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Playfair Display
- **Deployment**: Vercel

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
├── components/
│   ├── Navigation.tsx        # Top nav
│   ├── Footer.tsx            # Site footer
│   ├── WorkCard.tsx          # Work card
│   ├── FeaturedWorkCard.tsx  # Featured work card
│   ├── LatestReleaseCard.tsx # Release card
│   └── WorkHero.tsx          # Work detail hero
├── content/                  # Content data (works, bio, links, facts)
└── lib/                      # Utilities (structured data, helpers)
```

## Deployment

Push to `main` to deploy on Vercel, or:

```bash
npx vercel
```

## License

Private project — All rights reserved.
