import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Timeline from "../nosotros/Timeline"
import MisionVisionObjetivo from "../nosotros/MisionVisionObjetivo"
import Enfoque from "../nosotros/Enfoque"
import { breadcrumbSchema, SITE_URL } from "@/app/schema"

export const metadata: Metadata = {
  title: "Nosotros — Historia, Misión y Visión",
  description:
    "Conoce Valencia School: más de 40 años formando líderes críticos y creativos en Tegucigalpa. Descubre nuestra historia, misión y visión educativa bilingüe.",
  keywords: [
    "Valencia School nosotros",
    "historia Valencia School",
    "misión Valencia School",
    "visión Valencia School",
    "escuela bilingüe Tegucigalpa",
    "trayectoria educativa Honduras",
  ],
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title: "Nosotros — Historia, Misión y Visión | Valencia School",
    description:
      "Más de 40 años de trayectoria educativa en Tegucigalpa. Conoce la historia, misión y visión de Valencia School.",
    url: `${SITE_URL}/nosotros`,
  },
}

export default function NosotrosPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Nosotros", url: `${SITE_URL}/nosotros` },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <h1 className="sr-only">
          Nosotros — Valencia School: Historia, Misión y Visión
        </h1>
        <Timeline />
        <MisionVisionObjetivo />
        <Enfoque />
      </main>
      <Footer />
    </>
  )
}
