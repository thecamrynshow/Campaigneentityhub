"use client";

import Link from "next/link";
import Image from "next/image";
import { Work } from "@/src/content/works";
import { cn } from "@/src/lib/utils";

interface FeaturedWorkCardProps {
  work: Work;
  className?: string;
}

export default function FeaturedWorkCard({ work, className }: FeaturedWorkCardProps) {
  return (
    <Link
      href={`/${work.type}s/${work.slug}`}
      className={cn(
        "group block relative overflow-hidden rounded-xl transition-all duration-500 border-2 border-transparent",
        "hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${work.theme.bg} 0%, ${work.theme.accent2} 100%)`,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 50px ${work.theme.accent}50, 0 8px 16px rgba(0, 0, 0, 0.4)`;
        e.currentTarget.style.borderColor = work.theme.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.borderColor = "transparent";
      }}
      aria-label={`View ${work.title}`}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={work.coverImage}
          alt={`${work.title} cover`}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-95"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
        
        {/* Hover effect overlay with work theme */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${work.theme.accent}20 0%, transparent 100%)`,
            boxShadow: `0 0 40px ${work.theme.accent}40`,
          }}
        />
        
        {/* Curated label */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm bg-black/60 text-brand-gold border border-brand-gold/30">
            Curated
          </span>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
          <div className="mb-3">
            <span
              className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full backdrop-blur-sm border"
              style={{
                backgroundColor: `${work.theme.accent}20`,
                borderColor: work.theme.accent,
                color: work.theme.accent,
              }}
            >
              {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
            </span>
          </div>
          <h3
            className="text-3xl font-bold mb-3 leading-tight"
            style={{ color: work.theme.fg }}
          >
            {work.title}
          </h3>
          <p
            className="text-base line-clamp-2 leading-relaxed opacity-90"
            style={{ color: work.theme.fg }}
          >
            {work.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

