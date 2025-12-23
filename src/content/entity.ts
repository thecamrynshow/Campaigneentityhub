import { getSiteUrl } from "@/src/lib/utils";
import { getSortedSocialLinks } from "@/src/lib/social-links";

const siteUrl = getSiteUrl();

/**
 * Canonical Entity Definition for Campaigne (Camryn Jackson)
 * 
 * This is the SINGLE SOURCE OF TRUTH for entity data.
 * All JSON-LD schemas must reference this entity.
 * 
 * @id: https://camrynjackson.com/#campaigne
 */
export const ENTITY = {
  "@type": "Person" as const,
  name: "Camryn Jackson",
  alternateName: "Campaigne",
  url: siteUrl,
  image: `${siteUrl}/images/photos/Campaigne - Headshot.JPG`, // Recommended: rename to camryn-jackson-campaigne-portrait.jpg for disambiguation
  sameAs: getSortedSocialLinks().map((link) => link.url).concat([
    "https://tr.ee/V7UH3N3M74", // Linktree
  ]),
  jobTitle: [
    "Artist",
    "Author",
    "Musician",
    "Filmmaker",
    "App Developer",
  ],
  worksFor: {
    "@type": "Organization" as const,
    name: "IAM Records",
  },
  publisher: [
    {
      "@type": "Organization" as const,
      name: "IAM Records",
    },
    {
      "@type": "Organization" as const,
      name: "The Scribes Publishing",
    },
  ],
  description:
    "Camryn Jackson, professionally known as Campaigne, is a multidisciplinary creator working across music, literature, film, and software.",
};

/**
 * Entity @id - used consistently across all schemas
 */
export const ENTITY_ID = `${siteUrl}#campaigne`;

/**
 * Organization entities referenced by the Person entity
 */
export const ORGANIZATIONS = {
  iamRecords: {
    "@type": "Organization" as const,
    "@id": `${siteUrl}#org-iam-records`,
    name: "IAM Records",
  },
  scribesPublishing: {
    "@type": "Organization" as const,
    "@id": `${siteUrl}#org-scribes-publishing`,
    name: "The Scribes Publishing",
  },
};

