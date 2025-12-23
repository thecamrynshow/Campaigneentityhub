export interface SocialLink {
  label: string;
  url: string;
  order: number;
}

export const socialLinks: SocialLink[] = [
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@thecamrynshow",
    order: 1,
  },
  {
    label: "Bandcamp",
    url: "https://campaigne.bandcamp.com",
    order: 2,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/campaigneee",
    order: 3,
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/45jy2IFhNPcvvV7MVpNuKQ?si=gYhOOvXpQFOkz7oWE3jFLw",
    order: 4,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/channel/UCwBKwhp-ZdOyzpbQj7El7fw",
    order: 5,
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/artist/campaigne",
    order: 6,
  },
  {
    label: "TIDAL",
    url: "https://tidal.com/artist/campaigne",
    order: 7,
  },
];

export const getSortedSocialLinks = (): SocialLink[] => {
  return [...socialLinks].sort((a, b) => a.order - b.order);
};

