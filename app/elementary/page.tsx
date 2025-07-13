import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"

const curriculumData = {
  title: "Currículum Preescolar",
  description: "Nuestro programa preescolar está diseñado para desarrollar las habilidades fundamentales de los niños de 3 a 5 años, fomentando su curiosidad natural y preparándolos para el siguiente nivel educativo.",
  subjects: [
    { 
      name: "Desarrollo del Lenguaje", 
      description: "Fortalecimiento de habilidades comunicativas en español e inglés" 
    },
    { 
      name: "Matemáticas Tempranas", 
      description: "Conceptos básicos de números, formas y patrones" 
    },
    { 
      name: "Ciencias Naturales", 
      description: "Exploración del mundo natural a través de experimentos simples" 
    },
    { 
      name: "Arte y Creatividad", 
      description: "Expresión artística mediante pintura, dibujo y manualidades" 
    },
    { 
      name: "Educación Física", 
      description: "Desarrollo motriz y coordinación a través del juego" 
    },
    { 
      name: "Habilidades Sociales", 
      description: "Trabajo en equipo, respeto y convivencia en grupo" 
    },
  ],
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