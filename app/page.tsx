"use client"
import Navbar from "@/components/layout/Navbar"
import HeroSedePrincipal from "@/components/sections/HeroHomePage"
import Sedes from "@/components/sections/SedesSection"
import Footer from "@/components/layout/Footer"
import KeyValuesSection from "@/components/sections/KeyValuesSection"
import VideoSection from "@/components/sections/VideoSection"
import DivisionsComponent from "@/components/shared/DivisionsComponent"

export default function InstitutoValencia() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <HeroSedePrincipal />
      <KeyValuesSection />
      <Sedes />
      <DivisionsComponent />
      <VideoSection />
      <Footer />
    </div>
  )
}
