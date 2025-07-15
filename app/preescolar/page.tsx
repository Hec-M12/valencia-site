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

const extracurricularActivities = [
  {
    name: "Música Inicial",
    description: "Iniciación musical con canciones, ritmos y instrumentos sencillos que desarrollan la creatividad.",
    iconName: "FaMusic",
    color: "bg-purple-400",
  },
  {
    name: "Educación Física",
    description: "Actividades motrices y juegos que fortalecen el desarrollo físico y la coordinación.",
    iconName: "FaRunning",
    color: "bg-green-400",
  },
  {
    name: "Arte y Manualidades",
    description: "Expresión artística a través de dibujo, pintura y manualidades que estimulan la creatividad.",
    iconName: "FaPalette",
    color: "bg-pink-400",
  },
  {
    name: "Juegos Didácticos",
    description: "Actividades lúdicas que refuerzan el aprendizaje y desarrollan habilidades cognitivas.",
    iconName: "FaPuzzlePiece",
    color: "bg-yellow-400",
  },
  {
    name: "Juego Libre",
    description: "Tiempo de exploración y socialización que fomenta la imaginación y la independencia.",
    iconName: "Gamepad2",
    color: "bg-blue-400",
  },
]

const extracurricularData = {
  title: "Actividades Complementarias",
  description: "Actividades diseñadas especialmente para la edad preescolar que complementan el aprendizaje académico.",
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
      <ExtracurricularSection
        title={extracurricularData.title}
        description={extracurricularData.description}
        activities={extracurricularActivities}
      />
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