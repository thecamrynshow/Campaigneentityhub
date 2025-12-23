export type WorkType = "book" | "album" | "app" | "film" | "other";
export type WorkStatus = "released" | "in-progress";

export interface WorkTheme {
  bg: string; // background gradient start
  fg: string; // foreground/text color
  accent: string; // primary accent
  accent2: string; // secondary accent
}

export interface WorkCTA {
  label: string;
  url: string;
}

export interface WorkLink {
  label: string;
  url: string;
}

export interface WorkIdentifiers {
  isbn?: string;
  appleMusicId?: string;
  spotifyId?: string;
  appStoreUrl?: string;
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  type: WorkType;
  status: WorkStatus;
  shortDescription: string;
  longDescription: string;
  theme: WorkTheme;
  coverImage: string; // path under /public/images/
  primaryCta: WorkCTA;
  secondaryLinks: WorkLink[];
  creatorName: string;
  alternateName: string;
  datePublished?: string; // YYYY-MM-DD
  identifiers: WorkIdentifiers;
}

export const works: Work[] = [
  {
    id: "tales-of-time",
    slug: "tales-of-time",
    title: "Tales of Time",
    type: "book",
    status: "released",
    shortDescription: "A collection of stories exploring themes of time, destiny, and human experience.",
    longDescription: "Tales of Time is a book containing narratives set across different time periods. The work explores themes of destiny, choice, and interconnectedness.",
    theme: {
      bg: "#6B46C1", // purple
      fg: "#FFFFFF",
      accent: "#D4AF37", // gold
      accent2: "#8B5CF6",
    },
    coverImage: "/images/photos/Tales of Times by Camryn Jackson - Square image.JPG",
    primaryCta: {
      label: "Get on Amazon",
      url: "https://www.amazon.com/Tales-Time-Visionary-Collection-Spiritual/dp/B0G5DCBKZS",
    },
    secondaryLinks: [],
    creatorName: "Camryn Jackson",
    alternateName: "Campaigne",
    datePublished: "2024-01-15",
    identifiers: {
      isbn: "978-0000000000",
    },
  },
  {
    id: "pneuma",
    slug: "pneuma",
    title: "PNEUMA",
    type: "album",
    status: "released",
    shortDescription: "A house music album blending electronic rhythms with melodic elements.",
    longDescription: "PNEUMA is a house music album. The work combines electronic rhythms with melodic elements.",
    theme: {
      bg: "#000000", // black
      fg: "#FFFFFF",
      accent: "#D4AF37", // gold
      accent2: "#1A1A1A",
    },
    coverImage: "/images/photos/Campaigne - PNEUMA - album cover.JPG",
    primaryCta: {
      label: "Listen on Spotify",
      url: "https://open.spotify.com/album/2NBbSnmZzWMsULUqYx2uyh",
    },
    secondaryLinks: [
      {
        label: "Apple Music",
        url: "https://music.apple.com/album/pneuma/1851510192",
      },
      {
        label: "Amazon Music",
        url: "https://music.amazon.com/tracks/B0G1CS12NW",
      },
      {
        label: "Bandcamp",
        url: "https://campaigne.bandcamp.com",
      },
      {
        label: "All Links",
        url: "https://tr.ee/V7UH3N3M74",
      },
    ],
    creatorName: "Camryn Jackson",
    alternateName: "Campaigne",
    datePublished: "2025-01-01",
    identifiers: {
      appleMusicId: "1851510192",
      spotifyId: "2NBbSnmZzWMsULUqYx2uyh",
    },
  },
  {
    id: "pneuma-echoes",
    slug: "pneuma-echoes-of-breath",
    title: "PNEUMA: Echoes of Breath",
    type: "album",
    status: "released",
    shortDescription: "A remix album featuring reworked tracks from PNEUMA.",
    longDescription: "PNEUMA: Echoes of Breath is a remix album containing 9 remixed tracks from the original PNEUMA album. The collection includes tracks such as 'Vibin High' - Remix, 'Alive - Remix', and 'Intentional - Remix'.",
    theme: {
      bg: "#6B46C1", // purple
      fg: "#FFFFFF",
      accent: "#000000", // black
      accent2: "#8B5CF6",
    },
    coverImage: "/images/photos/Campaigne - PNEUMA Alt version - Album Cover.JPG",
    primaryCta: {
      label: "Listen on Spotify",
      url: "https://open.spotify.com/album/2qoKWw2h2SaP3OJy1fW6YX",
    },
    secondaryLinks: [
      {
        label: "Apple Music",
        url: "https://music.apple.com/album/pneuma-echoes-of-breath/id1851510192",
      },
      {
        label: "Amazon Music",
        url: "https://music.amazon.com/albums/B0G1CR6D4G",
      },
      {
        label: "Bandcamp",
        url: "https://campaigne.bandcamp.com",
      },
      {
        label: "All Links",
        url: "https://tr.ee/V7UH3N3M74",
      },
    ],
    creatorName: "Camryn Jackson",
    alternateName: "Campaigne",
    datePublished: "2025-01-01",
    identifiers: {
      appleMusicId: "1851510192",
      spotifyId: "2qoKWw2h2SaP3OJy1fW6YX",
    },
  },
  {
    id: "144-new-dawn",
    slug: "144-a-new-dawn",
    title: "144: A New Dawn",
    type: "album",
    status: "released",
    shortDescription: "A 19-track album featuring collaborations with S.K.I.T, Kyduh, and P N E U M A.",
    longDescription: "144: A New Dawn is a 19-track album. The work includes tracks such as 'A New Dawn', 'Free Spirit', 'Feels Good to Be Alive', 'Peace of Mind', and 'I'm Set Free'. The album features collaborations with S.K.I.T, Kyduh, and P N E U M A.",
    theme: {
      bg: "#1A1A1A", // dark
      fg: "#FFFFFF",
      accent: "#D4AF37", // gold (dawn)
      accent2: "#6B46C1", // purple
    },
    coverImage: "/images/photos/Campaigne - 144 A New Dawn - Album Cover.JPG",
    primaryCta: {
      label: "Listen on Spotify",
      url: "https://open.spotify.com/album/1f7AryDjygTpSmGna3UXOC",
    },
    secondaryLinks: [
      {
        label: "Apple Music",
        url: "https://music.apple.com/album/144-a-new-dawn/id1851510192",
      },
      {
        label: "Amazon Music",
        url: "https://music.amazon.com/albums/B0FHTG1NLL",
      },
      {
        label: "Bandcamp",
        url: "https://campaigne.bandcamp.com",
      },
      {
        label: "All Links",
        url: "https://tr.ee/V7UH3N3M74",
      },
    ],
    creatorName: "Camryn Jackson",
    alternateName: "Campaigne",
    datePublished: "2025-01-01",
    identifiers: {
      appleMusicId: "1851510192",
      spotifyId: "1f7AryDjygTpSmGna3UXOC",
    },
  },
  {
    id: "origen",
    slug: "origen",
    title: "ORIGEN",
    type: "app",
    status: "released",
    shortDescription: "An iOS application for mobile devices.",
    longDescription: "ORIGEN is a mobile application for iOS devices. The app is available through the Apple App Store.",
    theme: {
      bg: "#1A1A1A",
      fg: "#FFFFFF",
      accent: "#D4AF37",
      accent2: "#6B46C1",
    },
    coverImage: "/images/photos/ORIGEN app icon by Camryn Jackson.PNG",
    primaryCta: {
      label: "Download on App Store",
      url: "https://apps.apple.com/us/app/origen/id6756326466",
    },
    secondaryLinks: [],
    creatorName: "Camryn Jackson",
    alternateName: "Campaigne",
    datePublished: "2024-12-22",
    identifiers: {
      appStoreUrl: "https://apps.apple.com/us/app/origen/id6756326466",
    },
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getWorksByType(type: WorkType): Work[] {
  return works.filter((work) => work.type === type);
}

export function getReleasedWorks(): Work[] {
  return works.filter((work) => work.status === "released");
}

export function getLatestWorks(limit: number = 5): Work[] {
  return getReleasedWorks()
    .sort((a, b) => {
      if (!a.datePublished) return 1;
      if (!b.datePublished) return -1;
      return b.datePublished.localeCompare(a.datePublished);
    })
    .slice(0, limit);
}

