# Campaigne Entity Hub

A production-ready canonical entity hub website serving as the source-of-truth for public metadata (bio, photos, books, albums, apps) from Camryn Jackson (Campaigne). Built with Next.js 14+, TypeScript, and Tailwind CSS, optimized for technical SEO with comprehensive structured data (JSON-LD), Open Graph, and Twitter cards.

## Features

- **Majestic Home Page**: "Entering a kingdom" theme with premium, cinematic design
- **Adaptive Theming**: Each work page has its own theme colors that match the work
- **Full SEO Optimization**: JSON-LD structured data, sitemap.xml, robots.txt, Open Graph, Twitter cards
- **Canonical URLs**: Every page has proper canonical tags
- **Responsive Design**: Mobile-first, premium experience on all devices
- **Type-Safe**: Full TypeScript implementation
- **No External CMS**: All content managed through a single data file

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Deployment**: Vercel-ready

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── books/             # Books index + [slug] detail pages
│   │   ├── music/             # Music index + [slug] detail pages
│   │   ├── apps/              # Apps index + [slug] detail pages
│   │   ├── press/             # Press page
│   │   ├── photos/            # Photos gallery
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout with navigation
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   └── robots.ts          # Robots.txt generation
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Top navigation bar
│   │   ├── WorkCard.tsx       # Work card component
│   │   └── WorkHero.tsx       # Work detail page hero
│   ├── content/               # Content data
│   │   └── works.ts           # Single source of truth for all works
│   └── lib/                   # Utilities
│       ├── utils.ts           # Helper functions
│       └── structured-data.ts # JSON-LD schema generators
├── public/
│   └── images/                # All images (cover art, photos, etc.)
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SITE_URL=https://camrynjackson.com
```

**Important**: This domain is used for:
- Canonical URLs
- Open Graph images
- Structured data (JSON-LD) @id anchors
- Sitemap URLs

### 3. Add Images

Place your images in the `public/images/` directory:

```
public/
└── images/
    ├── tales-of-time-cover.jpg
    ├── pneuma-cover.jpg
    ├── pneuma-alt-cover.jpg
    ├── origen-cover.jpg
    ├── og-default.jpg              # Default Open Graph image (1200x630)
    ├── photos/                     # Photo gallery images
    │   ├── photo-1.jpg
    │   ├── photo-2.jpg
    │   └── ...
    └── press/                      # Press photos
        ├── press-photo-1.jpg
        ├── press-photo-2.jpg
        └── ...
```

### 4. Update Works Data

Edit `src/content/works.ts` to:
- Replace placeholder URLs with real Amazon, streaming, and App Store links
- Update image paths if needed
- Add or modify works as needed
- Update identifiers (ISBN, Spotify IDs, Apple Music IDs, etc.)

### 5. Update Content

- **About Page** (`src/app/about/page.tsx`): Update bios and add official links
- **Press Page** (`src/app/press/page.tsx`): Update press email and add real press photos
- **Contact Page** (`src/app/contact/page.tsx`): Update email addresses
- **Structured Data** (`src/lib/structured-data.ts`): Add `sameAs` links in `getPersonSchema()`

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### 7. Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variable in Vercel dashboard:
   - Go to your project settings
   - Add `NEXT_PUBLIC_SITE_URL` with your production domain

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add `NEXT_PUBLIC_SITE_URL` environment variable in project settings
4. Deploy automatically on push

## Where to Update Content

### Adding a New Work

Edit `src/content/works.ts` and add a new entry to the `works` array:

```typescript
{
  id: "unique-id",
  slug: "url-friendly-slug",
  title: "Work Title",
  type: "book" | "album" | "app" | "film" | "other",
  status: "released" | "in-progress",
  shortDescription: "Brief description",
  longDescription: "Detailed description",
  theme: {
    bg: "#HEXCOLOR",      // Background gradient start
    fg: "#HEXCOLOR",      // Foreground/text color
    accent: "#HEXCOLOR",  // Primary accent
    accent2: "#HEXCOLOR", // Secondary accent
  },
  coverImage: "/images/cover.jpg",
  primaryCta: {
    label: "Get on Amazon",
    url: "https://amazon.com/...",
  },
  secondaryLinks: [
    { label: "Goodreads", url: "https://..." },
  ],
  creatorName: "Camryn Jackson",
  alternateName: "Campaigne",
  datePublished: "2024-01-15", // YYYY-MM-DD or omit
  identifiers: {
    isbn: "978-...",              // For books
    appleMusicId: "...",          // For albums
    spotifyId: "...",              // For albums
    appStoreUrl: "https://...",   // For apps
  },
}
```

### Updating Links

- **Amazon links**: Update `primaryCta.url` in `works.ts`
- **Streaming links**: Update `primaryCta.url` and `secondaryLinks` in `works.ts`
- **App Store links**: Update `primaryCta.url` and `identifiers.appStoreUrl` in `works.ts`
- **Social media links**: Add to `sameAs` array in `src/lib/structured-data.ts` → `getPersonSchema()`

### Updating Images

1. Add images to `public/images/`
2. Update `coverImage` paths in `works.ts` to match
3. Ensure images are optimized (Next.js Image component handles this)

## SEO Features

### Structured Data (JSON-LD)

- **Home Page**: WebSite, Organization, Person schemas with @id anchors
- **About Page**: AboutPage schema
- **Press Page**: WebPage schema
- **Book Pages**: Book schema with author reference
- **Album Pages**: MusicAlbum schema with byArtist reference
- **App Pages**: SoftwareApplication schema with creator reference
- **Photos Page**: ImageObject schemas per image

All schemas use `@id` anchors for entity linking (e.g., `https://camrynjackson.com#campaigne`).

### Metadata

- Canonical URLs on every page
- Open Graph tags for social sharing
- Twitter Card tags
- Proper title and description meta tags
- Dynamic sitemap.xml generation
- robots.txt allowing all crawlers

## Launch Checklist

Before going live, ensure:

- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable to production domain
- [ ] Upload all cover images to `public/images/`
- [ ] Replace all placeholder URLs in `works.ts` with real links
- [ ] Update email addresses in contact and press pages
- [ ] Add social media links to `sameAs` in structured data
- [ ] Create and upload `og-default.jpg` (1200x630px) for Open Graph
- [ ] Test all pages load correctly
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console: `https://camrynjackson.com/sitemap.xml`
- [ ] Verify robots.txt: `https://camrynjackson.com/robots.txt`
- [ ] Test Open Graph previews with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test all external links (Amazon, streaming, App Store)

## Customization

### Changing Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    purple: "#YOUR_COLOR",
    black: "#YOUR_COLOR",
    gold: "#YOUR_COLOR",
  },
}
```

### Changing Fonts

Edit `src/app/layout.tsx` to import different Google Fonts and update the `className` in the `<html>` tag.

### Adding New Routes

1. Create a new directory in `src/app/`
2. Add `page.tsx` with your content
3. Add route to `Navigation.tsx`
4. Add route to `sitemap.ts`

## Performance

- Images are optimized with Next.js Image component
- Static generation for all pages
- Minimal JavaScript bundle
- CSS optimized with Tailwind

## License

Private project - All rights reserved.

## Support

For questions or issues, contact: camryncjackson@gmail.com

# Campaigneentityhub
