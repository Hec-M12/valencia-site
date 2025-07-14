import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaBookOpen, FaUsers, FaPalette, FaLanguage } from "react-icons/fa"

const subjects = [
  {
    name: "Académico Integral",
    description:
      "Desarrollamos habilidades sólidas en ciencias, matemáticas y humanidades con un enfoque práctico, colaborativo y orientado al pensamiento crítico y creativo.",
    icon: <FaBookOpen className="text-blue-500 w-12 h-12" />,
  },
  {
    name: "Bilingüismo",
    description:
      "Clases en inglés y español para potenciar la comunicación global y la comprensión intercultural en la vida diaria y académica de los estudiantes.",
    icon: <FaLanguage className="text-green-500 w-12 h-12" />,
  },
  {
    name: "Arte y Creatividad",
    description:
      "Fomentamos la creatividad a través de actividades artísticas, musicales y deportivas en un ambiente inspirador, participativo y divertido para todos.",
    icon: <FaPalette className="text-pink-500 w-12 h-12" />,
  },
  {
    name: "Valores y Liderazgo",
    description:
      "Formamos en valores, liderazgo y trabajo en equipo para una ciudadanía responsable, solidaria y comprometida con su entorno y la sociedad.",
    icon: <FaUsers className="text-yellow-500 w-12 h-12" />,
  },
]

const curriculumData = {
  title: "Primaria: Fundamentos para el Futuro",
  description:
    "Nuestra primaria se basa en aprendizaje activo, bilingüismo, laboratorios de ciencias y tecnología, y formación en valores. Los estudiantes desarrollan pensamiento crítico, creatividad y liderazgo en un ambiente colaborativo y global.",
  subjects,
}

const sampleImages = [
  "/images/hero/hero-bg.png",
  "/images/backgrounds/buhos-hero1.png",
  "/images/backgrounds/buhos-hero2.png",
]

export default function Primaria() {
  return (
    <>
      <Navbar />
      <SedeHero
        heading={
          <>
            <span>Primaria</span>
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
              Descubre cómo nuestros estudiantes de primaria aprenden, crean y se divierten.
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