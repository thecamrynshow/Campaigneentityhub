import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSiteUrl } from "@/src/lib/utils";
import { getWorkBySlug } from "@/src/content/works";
import {
  getSoftwareApplicationSchema,
} from "@/src/lib/structured-data";
import { cn } from "@/src/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || work.type !== "app") {
    return {
      title: "App Not Found",
    };
  }

  const siteUrl = getSiteUrl();

  return {
    title: work.title,
    description: work.shortDescription,
    openGraph: {
      title: `${work.title} | Campaigne`,
      description: work.shortDescription,
      url: `${siteUrl}/apps/${slug}`,
      images: [
        {
          url: `${siteUrl}${work.coverImage}`,
          width: 1200,
          height: 1200,
          alt: `${work.title} cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.shortDescription,
      images: [`${siteUrl}${work.coverImage}`],
    },
    alternates: {
      canonical: `${siteUrl}/apps/${slug}`,
    },
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || work.type !== "app") {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const appSchema = getSoftwareApplicationSchema(work);
  // Person schema is in root layout - no need to duplicate

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <div
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom, ${work.theme.bg} 0%, ${work.theme.accent2} 50%, black 100%)`,
        }}
      >
        {/* Custom Hero for Apps */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${work.theme.bg} 0%, ${work.theme.accent2} 50%, ${work.theme.bg} 100%)`,
          }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px" }} />
          </div>
          
          {/* Accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto container-padding py-24">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <span
                  className="inline-block px-5 py-2.5 text-sm font-semibold rounded-full backdrop-blur-sm border"
                  style={{
                    backgroundColor: `${work.theme.accent}20`,
                    borderColor: work.theme.accent,
                    color: work.theme.accent,
                  }}
                >
                  {work.type.charAt(0).toUpperCase() + work.type.slice(1)} • {work.status === "released" ? "Released" : "In Progress"}
                </span>
              </div>
              
              {/* Title with Icon */}
              <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src={work.coverImage}
                    alt={`${work.title} icon`}
                    fill
                    className="object-contain rounded-2xl"
                    priority
                    sizes="96px"
                  />
                </div>
                <h1
                  className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                  style={{ color: work.theme.fg }}
                >
                  {work.title}
                </h1>
              </div>
              
              <p
                className="text-xl md:text-2xl mb-10 leading-relaxed font-light opacity-90 max-w-3xl mx-auto md:mx-0"
                style={{ color: work.theme.fg }}
              >
                {work.shortDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={work.primaryCta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-8 py-4 rounded-md font-semibold text-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    "shadow-lg hover:shadow-xl"
                  )}
                  style={{
                    backgroundColor: work.theme.accent,
                    color: work.theme.bg,
                  }}
                  aria-label={`${work.primaryCta.label} - opens in new tab`}
                >
                  {work.primaryCta.label}
                </a>
                {work.secondaryLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "px-8 py-4 rounded-md font-semibold text-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
                      "border-2 hover:bg-white/5"
                    )}
                    style={{
                      borderColor: work.theme.accent,
                      color: work.theme.fg,
                      backgroundColor: "transparent",
                    }}
                    aria-label={`${link.label} - opens in new tab`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* About This Work */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: work.theme.accent }}
            >
              About This Work
            </h2>
            <div
              className="prose prose-lg max-w-none"
              style={{ color: work.theme.fg }}
            >
              <p className="text-lg leading-relaxed">{work.longDescription}</p>
            </div>
          </section>

          {/* Metadata */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: work.theme.accent }}
            >
              Metadata
            </h2>
            <dl className="space-y-4">
              {work.datePublished && (
                <div>
                  <dt
                    className="font-semibold mb-1"
                    style={{ color: work.theme.accent }}
                  >
                    Release Date
                  </dt>
                  <dd style={{ color: work.theme.fg }}>
                    {new Date(work.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </dd>
                </div>
              )}
              {work.identifiers.appStoreUrl && (
                <div>
                  <dt
                    className="font-semibold mb-1"
                    style={{ color: work.theme.accent }}
                  >
                    App Store
                  </dt>
                  <dd style={{ color: work.theme.fg }}>
                    <a
                      href={work.identifiers.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:underline"
                    >
                      View on App Store
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt
                  className="font-semibold mb-1"
                  style={{ color: work.theme.accent }}
                >
                  Creator
                </dt>
                <dd style={{ color: work.theme.fg }}>{work.creatorName}</dd>
              </div>
            </dl>
          </section>

          {/* Back to Index */}
          <div className="pt-8 border-t" style={{ borderColor: work.theme.accent }}>
            <Link
              href="/apps"
              className="inline-flex items-center text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
              style={{
                color: work.theme.accent,
              }}
            >
              ← Back to Apps
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

