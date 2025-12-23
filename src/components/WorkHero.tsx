import Image from "next/image";
import Link from "next/link";
import { Work } from "@/src/content/works";
import { cn } from "@/src/lib/utils";

interface WorkHeroProps {
  work: Work;
}

export default function WorkHero({ work }: WorkHeroProps) {
  return (
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Cover Image */}
          <div className="relative aspect-square w-full max-w-xl mx-auto md:mx-0 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative aspect-square w-full h-full">
              <Image
                src={work.coverImage}
                alt={`${work.title} cover`}
                fill
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
          
          {/* Content */}
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
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              style={{ color: work.theme.fg }}
            >
              {work.title}
            </h1>
            <p
              className="text-xl md:text-2xl mb-10 leading-relaxed font-light opacity-90"
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
      </div>
    </section>
  );
}

