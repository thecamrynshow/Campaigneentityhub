import { getSiteUrl } from "@/src/lib/utils";

const siteUrl = getSiteUrl();

/**
 * Wikidata-Compatible Facts
 * 
 * Neutral, factual information only.
 * No adjectives, no marketing copy, no promotional language.
 * Suitable for citation by third parties including Wikipedia and Wikidata.
 */
export const FACTS = {
  legalName: "Camryn Jackson",
  professionalName: "Campaigne",
  occupations: [
    "Musician",
    "Artist",
    "Author",
    "Filmmaker",
    "Software Developer",
  ],
  nationality: "American",
  activeYears: "2012–present",
  primaryLanguage: "English",
  officialWebsite: siteUrl,
  knownFor: [
    "PNEUMA",
    "144: A New Dawn",
    "PNEUMA: Echoes of Breath",
    "Tales of Time",
    "ORIGEN",
  ],
};

