"use client"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import HeroSedePrincipal from "@/components/sections/HeroHomePage"
import Sedes from "@/components/sections/SedesSection"
import Footer from "@/components/layout/Footer"
import KeyValuesSection from "@/components/sections/KeyValuesSection"
import VideoSection from "@/components/sections/VideoSection"
import DivisionsComponent from "@/components/shared/DivisionsComponent"
import { breadcrumbSchema, SITE_URL } from "@/app/schema"

// Nota: el archivo es "use client" (requerido por componentes hijos animados),
// por lo que la metadata propia de la Home se define en app/layout.tsx (el
// default title del root ya cubre "Valencia School — Escuela Bilingüe..."),
// y el canonical "/" también se declara allí.
//
// Sobre el H1: HeroHomePage ya renderiza un <h1> visible con el slogan
// "EDUCANDO Y TRANSFORMANDO GENERACIONES". Para evitar penalizaciones por
// múltiples H1 no agregamos un sr-only H1 adicional aquí; en su lugar
// reforzamos el contexto SEO con el <title> del layout, la estructura
// semántica <main> y el BreadcrumbList.

export default function InstitutoValencia() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Inicio", url: `${SITE_URL}/` }])
          ),
        }}
      />
      <Navbar />
      <main>
        <HeroSedePrincipal />
        <KeyValuesSection />
        <Sedes />
        <DivisionsComponent />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
}
