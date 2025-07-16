"use client"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaChild, FaBookOpen, FaPalette, FaLanguage } from "react-icons/fa"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import { FileText, CheckCircle, Calendar, Phone } from "lucide-react"

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
      "Impulsamos habilidades comunicativas en español, francés e inglés, preparando a los estudiantes para la lectoescritura.",
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
  {
    name: "Vida Práctica",
    description: "Fortalece la autonomía de los estudiantes al realizar actividades del día a día.",
    iconName: "FaHandsHelping",
    color: "bg-yellow-500",
  },
]

const extracurricularData = {
  title: "Actividades Complementarias",
  description: "Actividades diseñadas especialmente para la edad preescolar que complementan el aprendizaje académico.",
}

const admissionSteps = [
  {
    number: 1,
    title: "Solicitud de Inscripción",
    description: "Completa el formulario de inscripción y entrega los documentos requeridos en la oficina de admisiones.",
    icon: <FileText className="w-6 h-6 text-white" />,
    details: [
      "Formulario de inscripción completo",
      "Partida de nacimiento original",
      "Fotografía tamaño carnet",
      "Copia de tarjeta de vacunación",
      "Copia de identificación de los padres o tutores",
    ],
  },
  {
    number: 2,
    title: "Entrevista Familiar",
    description: "Participa en una entrevista con el equipo de admisiones para conocer a la familia y resolver dudas.",
    icon: <Phone className="w-6 h-6 text-white" />,
    details: [
      "Entrevista con padres o tutores",
      "Presentación del proyecto educativo",
      "Resolución de dudas sobre el proceso",
    ],
  },

  {
    number: 3,
    title: "Confirmación y Matrícula",
    description: "Recibe la notificación de aceptación y realiza el pago de matrícula para asegurar el cupo.",
    icon: <Calendar className="w-6 h-6 text-white" />,
    details: [
      "Notificación de aceptación",
      "Pago de matrícula y primera mensualidad",
      "Entrega de lista de útiles escolares",
    ],
  },
]

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
      <AdmissionsSection steps={admissionSteps} />
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