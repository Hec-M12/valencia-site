"use client"
import Navbar from "./custom-components/Navbar"
import Hero from "./custom-components/Hero"
import Sedes from "./custom-components/SedesSection"
import SistemasEducativos from "./custom-components/SistemasEducativosSection"
import ContactanosSection from "./custom-components/ContactanosSection"
import Footer from "./custom-components/Footer/Footer"

export default function InstitutoValencia() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Sedes />
      <SistemasEducativos />
      <ContactanosSection />
      <Footer />
    </div>
  )
}
