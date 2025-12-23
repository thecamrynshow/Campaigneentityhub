import { Metadata } from "next";
import Image from "next/image";
import { getSiteUrl } from "@/src/lib/utils";
import { getImageObjectSchema } from "@/src/lib/structured-data";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Official photos and images of Camryn Jackson (Campaigne) and creative works.",
  openGraph: {
    title: "Photos | Campaigne",
    description: "Official photos and images.",
    url: `${siteUrl}/photos`,
  },
  alternates: {
    canonical: `${siteUrl}/photos`,
  },
};

// Official photos
const photos = [
  {
    src: "/images/photos/Campaigne - Headshot.JPG",
    alt: "Camryn Jackson, musician and author",
    caption: "Campaigne - Official Headshot",
  },
  {
    src: "/images/photos/Campaigne Head Shot Closeup.JPG",
    alt: "Campaigne - Headshot Closeup",
    caption: "Campaigne - Headshot Closeup",
  },
  {
    src: "/images/photos/Camryn Jackson Headshot.JPG",
    alt: "Camryn Jackson - Headshot",
    caption: "Camryn Jackson - Headshot",
  },
  {
    src: "/images/photos/Campaigne - Editorial.JPG",
    alt: "Campaigne - Editorial",
    caption: "Campaigne - Editorial",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot.JPG",
    alt: "Campaigne - Editorial Shot",
    caption: "Campaigne - Editorial Shot",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot 2.JPG",
    alt: "Campaigne - Editorial Shot 2",
    caption: "Campaigne - Editorial Shot 2",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot 3.JPG",
    alt: "Campaigne - Editorial Shot 3",
    caption: "Campaigne - Editorial Shot 3",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot 4.JPG",
    alt: "Campaigne - Editorial Shot 4",
    caption: "Campaigne - Editorial Shot 4",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot 5.JPG",
    alt: "Campaigne - Editorial Shot 5",
    caption: "Campaigne - Editorial Shot 5",
  },
  {
    src: "/images/photos/Campaigne - Editorial shot 6.JPG",
    alt: "Campaigne - Editorial Shot 6",
    caption: "Campaigne - Editorial Shot 6",
  },
  {
    src: "/images/photos/Campaigne - PNEUMA - album cover.JPG",
    alt: "PNEUMA Album Cover",
    caption: "PNEUMA Album Cover",
  },
  {
    src: "/images/photos/Campaigne - PNEUMA Alt version - Album Cover.JPG",
    alt: "PNEUMA: Echoes of Breath Album Cover",
    caption: "PNEUMA: Echoes of Breath Album Cover",
  },
  {
    src: "/images/photos/Campaigne - 144 A New Dawn - Album Cover.JPG",
    alt: "144: A New Dawn Album Cover",
    caption: "144: A New Dawn Album Cover",
  },
  {
    src: "/images/photos/Bonus Triip.jpg",
    alt: "Bonus Trip - Film still",
    caption: "Bonus Trip",
  },
  {
    src: "/images/photos/Camryn Jackson and Bonus Trip cast at Premiere.JPG",
    alt: "Camryn Jackson and Bonus Trip cast at Premiere",
    caption: "Camryn Jackson and Bonus Trip cast at Premiere",
  },
];

export default function PhotosPage() {
  const imageSchemas = photos.map((photo) =>
    getImageObjectSchema(photo.src, photo.caption)
  );

  return (
    <>
      {imageSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-7xl mx-auto container-padding section-padding">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-brand-gold font-serif tracking-tight">
              Photos
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Official photos and album covers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-xl overflow-hidden group shadow-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

