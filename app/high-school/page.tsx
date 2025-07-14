import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaGraduationCap, FaBookOpen, FaChild } from "react-icons/fa"

const subjects = [
  {
    name: "Preparación Universitaria",
    description:
      "Programa riguroso con asesoría académica, laboratorios especializados y formación en liderazgo para el éxito en cualquier meta futura.",
    icon: <FaGraduationCap className="text-blue-700 w-12 h-12" />,
  },
  {
    name: "Ciencias y Tecnología",
    description:
      "Laboratorios, proyectos de investigación y competencias académicas que impulsan el pensamiento científico y la innovación en los estudiantes.",
    icon: <FaBookOpen className="text-green-700 w-12 h-12" />,
  },
  {
    name: "Desarrollo Personal y Social",
    description:
      "Programas de liderazgo, orientación vocacional y actividades extracurriculares para formar ciudadanos globales y seguros de sí mismos.",
    icon: <FaChild className="text-yellow-700 w-12 h-12" />,
  },
  {
    name: "Bilingüismo y Comunicación",
    description:
      "Clases avanzadas de inglés y español, preparación para exámenes y habilidades de comunicación para un mundo globalizado y competitivo.",
    icon: <FaBookOpen className="text-pink-700 w-12 h-12" />,
  },
]

const curriculumData = {
  title: "Secundaria: Excelencia Académica y Liderazgo Global",
  description:
    "Nuestra secundaria y bachillerato preparan a los estudiantes para su educación futura, con programas rigurosos, asesoría académica, laboratorios especializados y formación en liderazgo. Nuestro enfoque es integral, bilingüe y orientado al éxito global.",
  subjects,
}

const sampleImages = [
  "/images/hero/hero-bg.png",
  "/images/backgrounds/buhos-hero1.png",
  "/images/backgrounds/buhos-hero2.png",
]

export default function Secundaria() {
  return (
    <>
      <Navbar />
      <SedeHero
        heading={
          <>
            <span>Secundaria</span>
          </>
        }
        src="/images/backgrounds/buhos-hero2.png"
      />
      <CurriculumSection
        title={curriculumData.title}
        description={curriculumData.description}
        subjects={curriculumData.subjects}
      />
      <ExtracurricularSection />
      <AdmissionsSection />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-valencia-blue mb-6">
              Galería de Imágenes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Vive la experiencia de secundaria: laboratorios, proyectos y vida estudiantil.
            </p>
          </div>
          <ImageSlider images={sampleImages} />
        </div>
      </section>
      <ContactanosSection />
      <Footer />
    </>
  )
}