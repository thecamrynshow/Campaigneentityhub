import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";

const siteUrl = getSiteUrl();

const wrestlingVideos = [
  {
    id: "0wxBsXfO7-4",
    url: "https://youtu.be/0wxBsXfO7-4",
  },
  {
    id: "8Fmx-A5rpd4",
    url: "https://youtu.be/8Fmx-A5rpd4",
  },
  {
    id: "DgxdGxAAyWA",
    url: "https://youtu.be/DgxdGxAAyWA",
  },
  {
    id: "Ir3ytZVtdmQ",
    url: "https://youtu.be/Ir3ytZVtdmQ",
  },
  {
    id: "e5io0Y8wvdQ",
    url: "https://youtu.be/e5io0Y8wvdQ",
  },
];

export const metadata: Metadata = {
  title: "Wrestling",
  description:
    "Wrestling highlights and match footage featuring Camryn Jackson (Campaigne).",
  openGraph: {
    title: "Wrestling | Campaigne",
    description:
      "Wrestling highlights and match footage featuring Camryn Jackson (Campaigne).",
    url: `${siteUrl}/wrestling`,
  },
  alternates: {
    canonical: `${siteUrl}/wrestling`,
  },
};

export default function WrestlingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-gold font-serif tracking-tight">
            Wrestling
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Match highlights and wrestling footage featuring Camryn Jackson.
          </p>
        </section>

        {/* Videos */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wrestlingVideos.map((video) => (
              <div
                key={video.id}
                className="relative aspect-video rounded-xl overflow-hidden border border-brand-gold/20 shadow-2xl bg-black/40"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Wrestling video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Identity Note */}
        <section className="mt-16">
          <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-4">
            <p className="text-sm text-white/70 leading-relaxed">
              This page documents wrestling activities by Camryn Jackson, professionally known as Campaigne.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
