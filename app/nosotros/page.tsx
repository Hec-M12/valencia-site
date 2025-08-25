import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Timeline from "../nosotros/Timeline"
import MisionVisionObjetivo from "../nosotros/MisionVisionObjetivo"
import Enfoque from "../nosotros/Enfoque"

export default function NosotrosPage() { 
  return (
    <>
    <Navbar />
    <Timeline />
    <MisionVisionObjetivo />
    <Enfoque />
    <Footer />
    </>
  )  
}