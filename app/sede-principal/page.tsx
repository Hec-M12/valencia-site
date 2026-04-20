import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSedePrincipal from "@/components/sections/HeroSedePrincipal";
import SedePrincipalCoordinators from "@/components/sections/SedePrincipalCoordinators";
import SedeDescription from "@/components/shared/SedeDescription";
import DivisionsComponent from "@/components/shared/DivisionsComponent";
import LocationComponent from "@/components/shared/LocationComponent";
import {
  breadcrumbSchema,
  localBusinessSchemaSedePrincipal,
  SITE_URL,
} from "@/app/schema";

export const metadata: Metadata = {
  title: "Sede Principal — Residencial Valencia, Tegucigalpa",
  description:
    "Ubicada en Residencial Valencia, la Sede Principal de Valencia School ofrece preescolar, primaria y secundaria bilingüe con calendario nacional.",
  keywords: [
    "Sede Principal Valencia School",
    "colegio Residencial Valencia",
    "colegio bilingüe Tegucigalpa",
    "preescolar primaria secundaria Tegucigalpa",
    "calendario nacional Honduras",
  ],
  alternates: {
    canonical: "/sede-principal",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title:
      "Sede Principal — Residencial Valencia, Tegucigalpa | Valencia School",
    description:
      "Sede Principal de Valencia School en Residencial Valencia: preescolar, primaria y secundaria bilingüe con calendario nacional.",
    url: `${SITE_URL}/sede-principal`,
  },
};

export default function SedePrincipal() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Sede Principal", url: `${SITE_URL}/sede-principal` },
            ])
          ),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchemaSedePrincipal()),
        }}
      />
      <Navbar />
      <main>
        {/* El hero ya renderiza un <h1> visible con "Sede Principal"; añadimos
            contexto SEO sin duplicar H1 mediante sr-only en un h2 semántico. */}
        <span className="sr-only">
          Sede Principal Valencia School en Residencial Valencia, Tegucigalpa
        </span>
        <HeroSedePrincipal />
        <SedeDescription
          title="Descripción General"
          description="La Sede Principal está ubicada en el Residencial Valencia y es nuestra sede fundacional. Ofrece modalidades bilingüe y español, con un calendario de febrero a noviembre, desde nursery hasta undécimo, e inclusión de francés en el plan de estudios."
          items={[
            { label: "Modalidades", value: "Bilingüe y Español" },
            { label: "Calendario", value: "Febrero - Noviembre" },
            { label: "Grados", value: "Nursery a Undécimo" },
            { label: "Idiomas", value: "Español, Inglés, Francés" },
          ]}
        />
        <DivisionsComponent />
        <SedePrincipalCoordinators />
        <LocationComponent
          lat={14.07176}
          lng={-87.17384}
          address="Residencial Valencia, Tegucigalpa, Honduras"
          gMapsUrl="https://maps.app.goo.gl/bfPf6J3TrwLz8vXEA"
          wazeUrl="https://ul.waze.com/ul?venue_id=178782349.1788020095.40101966&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        />
      </main>
      <Footer />
    </>
  );
}
