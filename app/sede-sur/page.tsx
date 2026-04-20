"use client"
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSedeSur from "@/components/sections/HeroSedeSur";
import SedeSurCoordinators from "@/components/sections/SedeSurCoordinators";
import SedeDescription from "@/components/shared/SedeDescription";
import DivisionsComponent from "@/components/shared/DivisionsComponent";
import LocationComponent from "@/components/shared/LocationComponent";
import {
  breadcrumbSchema,
  localBusinessSchemaSedeSur,
  SITE_URL,
} from "@/app/schema";

export default function SedeSur() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Sede Sur", url: `${SITE_URL}/sede-sur` },
            ])
          ),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchemaSedeSur()),
        }}
      />
      <Navbar />
      <main>
        {/* El hero ya renderiza un <h1> visible con "Sede Sur"; complementamos
            el contexto SEO con texto sr-only sin duplicar H1. */}
        <span className="sr-only">
          Sede Sur Valencia School en Los Hidalgos, Comayagüela
        </span>
        <HeroSedeSur />
        <SedeDescription
          title="Descripción General"
          description="La Sede Sur está ubicada en los Hidalgos y fue inaugurada en 2025. Es un campus moderno que ofrece la modalidad bilingüe con dos calendarios —Nacional (febrero a noviembre) y Anglosajón (agosto a junio), desde nursery hasta undécimo."
          items={[
            { label: "Modalidades", value: "Bilingüe" },
            {
              label: "Calendarios",
              value:
                "Nacional (Febrero - Noviembre) y Anglosajón (Agosto - Junio)",
            },
            { label: "Grados", value: "Nursery a Undécimo" },
            { label: "Idiomas", value: "Español, Inglés, Francés" },
          ]}
        />
        <DivisionsComponent />
        <SedeSurCoordinators />
        <LocationComponent
          lat={14.046581427334896}
          lng={-87.25486578763883}
          address="Res. Los Hidalgos, Comayagüela, Honduras"
          gMapsUrl="https://maps.app.goo.gl/pE4PzLHvuo4r2AS77"
          wazeUrl="https://www.waze.com/en/live-map/directions/hn/departamento-de-francisco-morazan/tgu/campus-valencia-school-hidalgos?place=ChIJybQXbwCXb48RJZ5GcU--5-U"
        />
      </main>
      <Footer />
    </>
  );
}
