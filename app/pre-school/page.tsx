import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaChild, FaBookOpen, FaPalette, FaLanguage } from "react-icons/fa"

const subjects = [
  {
    name: "Desarrollo Integral",
    description:
      "Fomentamos el desarrollo físico, emocional y social a través de juegos, arte y actividades que estimulan la curiosidad y la convivencia entre los niños.",
    icon: <FaChild className="text-pink-400 w-12 h-12" />,
  },
  {
    name: "Lenguaje y Comunicación",
    description:
      "Impulsamos habilidades comunicativas en español e inglés, promoviendo la expresión oral y escrita en un ambiente seguro y participativo para todos.",
    icon: <FaLanguage className="text-blue-400 w-12 h-12" />,
  },
  {
    name: "Matemáticas Iniciales",
    description:
      "Introducimos conceptos de números, formas y patrones mediante actividades lúdicas que desarrollan el pensamiento lógico y creativo desde pequeños.",
    icon: <FaBookOpen className="text-yellow-400 w-12 h-12" />,
  },
  {
    name: "Ciencias y Descubrimiento",
    description:
      "Exploramos el entorno natural con experimentos sencillos y proyectos que despiertan la curiosidad y el amor por aprender en cada niño.",
    icon: <FaPalette className="text-green-400 w-12 h-12" />,
  },
]

const curriculumData = {
  title: "Preescolar: Descubriendo el Mundo con Curiosidad",
  description:
    "Nuestro preescolar integra desarrollo integral, estimulación temprana, bilingüismo y aprendizaje a través del juego. Aquí los niños exploran, se expresan y crecen en un ambiente seguro y estimulante.",
  subjects,
}

const sampleImages = [
  "/images/hero/hero-bg.png",
  "/images/backgrounds/buhos-hero1.png",
  "/images/backgrounds/buhos-hero2.png",
]

export default function Preescolar() {
  return (
    <>
      <Navbar />
      <SedeHero
        heading={
          <>
            <span>Pre</span>
            <br />
            <span>Escolar</span>
          </>
        }
        src="/images/backgrounds/buhos-hero1.png"
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
              Conoce nuestras instalaciones y actividades del nivel preescolar.
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