"use client"
import Navbar from "./custom-components/Navbar"
import Hero from "./custom-components/Hero"
import Sedes from "./custom-components/SedesSection"
import Footer from "./custom-components/Footer"
import KeyValuesSection from "./custom-components/KeyValuesSection"
import VideoSection from "./custom-components/VideoSection"

export default function InstitutoValencia() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <KeyValuesSection />
      <Sedes />
      <VideoSection />
      <Footer />
    </div>
  )
}
