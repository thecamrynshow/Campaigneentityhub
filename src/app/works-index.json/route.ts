import { NextResponse } from "next/server";
import { getSiteUrl } from "@/src/lib/utils";
import { getReleasedWorks } from "@/src/content/works";

export async function GET() {
  const siteUrl = getSiteUrl();
  const works = getReleasedWorks();

  const workTypeMap: Record<string, string> = {
    book: "Book",
    album: "MusicAlbum",
    app: "SoftwareApplication",
  };

  const index = works.map((work) => ({
    type: workTypeMap[work.type] || work.type,
    title: work.title,
    url: `${siteUrl}/${work.type}s/${work.slug}`,
    datePublished: work.datePublished || null,
  }));

  return NextResponse.json(index, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

