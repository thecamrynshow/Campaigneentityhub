import { Work } from "@/src/content/works";
import { getSiteUrl } from "./utils";
import { ENTITY, ENTITY_ID, ORGANIZATIONS } from "@/src/content/entity";

const siteUrl = getSiteUrl();
const websiteId = `${siteUrl}#website`;

/**
 * Person Schema - Uses centralized ENTITY data
 * @id: https://camrynjackson.com/#campaigne
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ENTITY_ID,
    name: ENTITY.name,
    alternateName: ENTITY.alternateName,
    url: ENTITY.url,
    image: ENTITY.image,
    jobTitle: ENTITY.jobTitle,
    sameAs: ENTITY.sameAs,
    worksFor: ENTITY.worksFor,
    publisher: ENTITY.publisher,
    description: ENTITY.description,
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATIONS.iamRecords["@id"],
    name: ORGANIZATIONS.iamRecords.name,
    founder: {
      "@id": ENTITY_ID,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "Campaigne - Camryn Jackson Official Entity Hub",
    alternateName: "Campaigne",
    url: siteUrl,
    publisher: {
      "@id": ENTITY_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBookSchema(work: Work) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: work.title,
    description: work.longDescription,
    url: `${siteUrl}/books/${work.slug}`,
    author: {
      "@id": ENTITY_ID,
    },
    publisher: ENTITY.publisher.find((p) => p.name === "The Scribes Publishing")
      ? {
          "@id": ORGANIZATIONS.scribesPublishing["@id"],
        }
      : undefined,
    datePublished: work.datePublished,
    image: `${siteUrl}${work.coverImage}`,
    identifier: work.identifiers.isbn
      ? {
          "@type": "PropertyValue",
          propertyID: "ISBN",
          value: work.identifiers.isbn,
        }
      : undefined,
    offers: work.primaryCta
      ? {
          "@type": "Offer",
          url: work.primaryCta.url,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

export function getMusicAlbumSchema(work: Work) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: work.title,
    description: work.longDescription,
    url: `${siteUrl}/music/${work.slug}`,
    byArtist: {
      "@id": ENTITY_ID,
    },
    publisher: {
      "@id": ORGANIZATIONS.iamRecords["@id"],
    },
    datePublished: work.datePublished,
    image: `${siteUrl}${work.coverImage}`,
    identifier: work.identifiers.spotifyId
      ? {
          "@type": "PropertyValue",
          propertyID: "Spotify",
          value: work.identifiers.spotifyId,
        }
      : undefined,
  };
}

export function getSoftwareApplicationSchema(work: Work) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: work.title,
    description: work.longDescription,
    url: `${siteUrl}/apps/${work.slug}`,
    creator: {
      "@id": ENTITY_ID,
    },
    datePublished: work.datePublished,
    image: `${siteUrl}${work.coverImage}`,
    applicationCategory: "iOS",
    operatingSystem: "iOS",
    offers: work.primaryCta
      ? {
          "@type": "Offer",
          url: work.primaryCta.url,
          price: "0",
          priceCurrency: "USD",
        }
      : undefined,
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@id": ENTITY_ID,
    },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    about: {
      "@id": ENTITY_ID,
    },
  };
}

/**
 * ProfilePage schema for Press page
 * Includes hasPart with featured CreativeWorks
 */
export function getProfilePageSchema(featuredWorks: Work[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": ENTITY_ID,
    },
    hasPart: featuredWorks.map((work) => {
      if (work.type === "book") {
        return getBookSchema(work);
      } else if (work.type === "album") {
        return getMusicAlbumSchema(work);
      } else if (work.type === "app") {
        return getSoftwareApplicationSchema(work);
      }
      return null;
    }).filter(Boolean),
  };
}

export function getImageObjectSchema(imageUrl: string, caption?: string) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${siteUrl}${imageUrl}`,
    caption: caption || "",
  };
}

/**
 * Movie schema for film credits
 */
export function getMovieSchema(movie: {
  name: string;
  datePublished: string;
  url: string;
  imdbUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.name,
    datePublished: movie.datePublished,
    url: movie.url,
    actor: {
      "@id": ENTITY_ID,
    },
    sameAs: [movie.imdbUrl],
  };
}

