/**
 * JSON-LD schema helpers for Valencia School.
 *
 * Each function returns a plain object ready to be serialized and
 * injected into a <script type="application/ld+json"> tag.
 *
 * Reference: https://schema.org/EducationalOrganization
 */

export const SITE_URL = "https://valencia-school.edu.hn"
export const SITE_NAME = "Valencia School"
export const SITE_ALT_NAME = "Instituto Valencia"
export const LOGO_URL = `${SITE_URL}/images/logos/valencia-logo.png`
export const CONTACT_PHONE = "+504 9438-7154"
export const FACEBOOK_URL = "https://www.facebook.com/ValenciaSchoolHN"
export const INSTAGRAM_URL = "https://www.instagram.com/valenciaschoolhn"

const DESCRIPTION =
  "Valencia School es una institución educativa bilingüe en Tegucigalpa, Honduras, con calendario nacional y anglosajón. Ofrece preescolar, primaria y secundaria en dos sedes: Residencial Valencia y Los Hidalgos."

type JsonLd = Record<string, unknown>

export interface BreadcrumbItem {
  name: string
  url: string
}

const addressSedePrincipal = {
  "@type": "PostalAddress",
  streetAddress: "Residencial Valencia",
  addressLocality: "Tegucigalpa",
  addressRegion: "Francisco Morazán",
  addressCountry: "HN",
}

const addressSedeSur = {
  "@type": "PostalAddress",
  streetAddress: "Los Hidalgos",
  addressLocality: "Comayagüela",
  addressRegion: "Francisco Morazán",
  addressCountry: "HN",
}

/**
 * EducationalOrganization schema describing the school as a whole,
 * including both campuses, the contact point and offered programs.
 */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_ALT_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description: DESCRIPTION,
    address: [addressSedePrincipal, addressSedeSur],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        contactType: "customer service",
        areaServed: "HN",
        availableLanguage: ["Spanish", "English"],
        contactOption: "TollFree",
      },
    ],
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    offers: [
      {
        "@type": "EducationalOccupationalProgram",
        name: "Preescolar",
        description:
          "Programa de preescolar bilingüe para niños en etapa inicial.",
        educationalProgramMode: "full-time",
        url: `${SITE_URL}/pre-school`,
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "Primaria",
        description:
          "Programa de primaria bilingüe con enfoque integral y calendario anglosajón.",
        educationalProgramMode: "full-time",
        url: `${SITE_URL}/elementary`,
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "Secundaria",
        description:
          "Programa de secundaria bilingüe preparatorio para estudios superiores.",
        educationalProgramMode: "full-time",
        url: `${SITE_URL}/high-school`,
      },
    ],
  }
}

/**
 * WebSite schema, used primarily for sitelinks search and site identity.
 */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: SITE_ALT_NAME,
    description: DESCRIPTION,
    inLanguage: "es-HN",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

/**
 * School (local business) schema for Sede Principal — Residencial Valencia.
 */
export function localBusinessSchemaSedePrincipal(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${SITE_URL}/sede-principal#school`,
    name: `${SITE_NAME} — Sede Principal`,
    url: `${SITE_URL}/sede-principal`,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Sede Principal de Valencia School en Residencial Valencia, Tegucigalpa.",
    address: addressSedePrincipal,
    telephone: CONTACT_PHONE,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

/**
 * School (local business) schema for Sede Sur — Los Hidalgos.
 */
export function localBusinessSchemaSedeSur(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${SITE_URL}/sede-sur#school`,
    name: `${SITE_NAME} — Sede Sur`,
    url: `${SITE_URL}/sede-sur`,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Sede Sur de Valencia School en Los Hidalgos, Comayagüela.",
    address: addressSedeSur,
    telephone: CONTACT_PHONE,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

/**
 * Generic BreadcrumbList builder. Pass an ordered array of items
 * from the root to the current page.
 *
 * Example:
 *   breadcrumbSchema([
 *     { name: "Inicio", url: "https://valencia-school.edu.hn/" },
 *     { name: "Nosotros", url: "https://valencia-school.edu.hn/nosotros" },
 *   ])
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
