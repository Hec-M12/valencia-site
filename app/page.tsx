"use client"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Sedes from "@/components/sections/SedesSection"
import Footer from "@/components/layout/Footer"
import KeyValuesSection from "@/components/sections/KeyValuesSection"
import VideoSection from "@/components/sections/VideoSection"

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
