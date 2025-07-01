"use client"
import Navbar from "./custom-components/Navbar"
import Hero from "./custom-components/Hero"
import Sedes from "./custom-components/SedesSection"
import SistemasEducativos from "./custom-components/SistemasEducativosSection"
import ContactanosSection from "./custom-components/ContactanosSection"
import Footer from "./custom-components/Footer"
import KeyValuesSection from "./custom-components/KeyValuesSection"

export default function InstitutoValencia() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <KeyValuesSection />
      <Sedes />
      <SistemasEducativos />
      <ContactanosSection />
      <Footer />
    </div>
  )
}
