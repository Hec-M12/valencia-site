import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaGraduationCap, FaBookOpen, FaChild } from "react-icons/fa"
import { FileText, CheckCircle, Calendar, Phone } from "lucide-react"
const admissionSteps = [
  {
    number: 1,
    title: "Solicitud de Inscripción",
    description: "Completa el formulario de inscripción y entrega los documentos requeridos en la oficina de admisiones.",
    icon: <FileText className="w-6 h-6 text-white" />,
    details: [
      "Formulario de inscripción completo",
      "Partida de nacimiento original",
      "Certificados de notas de secundaria",
      "Fotografía tamaño carnet",
    ],
  },
  {
    number: 2,
    title: "Evaluación Académica",
    description: "El estudiante realizará una evaluación de conocimientos y habilidades según el grado.",
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    details: [
      "Examen de matemáticas",
      "Examen de español",
      "Evaluación de inglés (según el grado)",
      "Entrevista con psicólogo educativo",
    ],
  },
  {
    number: 3,
    title: "Entrevista Familiar",
    description: "Reunión con la familia para conocer expectativas, historial académico y resolver dudas.",
    icon: <Phone className="w-6 h-6 text-white" />,
    details: [
      "Entrevista con padres de familia",
      "Presentación del proyecto educativo",
      "Información sobre costos y calendario",
      "Resolución de dudas específicas",
    ],
  },
  {
    number: 4,
    title: "Confirmación y Matrícula",
    description: "Una vez aceptado, procede con el pago de matrícula y confirma el cupo.",
    icon: <Calendar className="w-6 h-6 text-white" />,
    details: [
      "Notificación de aceptación",
      "Pago de matrícula y primera mensualidad",
      "Entrega de lista de útiles escolares",
      "Confirmación de cupo para el año escolar",
    ],
  },
]

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

const extracurricularActivities = [
  {
    name: "Modelo de Naciones Unidas",
    description: "Simulaciones diplomáticas que desarrollan habilidades de debate, negociación y liderazgo global.",
    iconName: "Globe",
    color: "bg-blue-600",
  },
  {
    name: "Robótica y Programación",
    description: "Proyectos tecnológicos avanzados que preparan para las carreras del futuro.",
    iconName: "FaCode",
    color: "bg-cyan-600",
  },
  {
    name: "Debate y Oratoria",
    description: "Desarrollo de habilidades de comunicación, argumentación y pensamiento crítico.",
    iconName: "FaGavel",
    color: "bg-red-600",
  },
  {
    name: "Teatro y Drama",
    description: "Expresión artística que fortalece la confianza, creatividad y habilidades comunicativas.",
    iconName: "FaTheaterMasks",
    color: "bg-purple-600",
  },
  {
    name: "Deportes Competitivos",
    description: "Equipos deportivos que representan al colegio en competencias locales y nacionales.",
    iconName: "Trophy",
    color: "bg-green-600",
  },
  {
    name: "Investigación Científica",
    description: "Proyectos de investigación avanzada en laboratorios especializados con metodología universitaria.",
    iconName: "FaMicroscope",
    color: "bg-orange-600",
  },
  {
    name: "Liderazgo Estudiantil",
    description: "Gobierno estudiantil y proyectos de servicio comunitario que forman ciudadanos responsables.",
    iconName: "FaUsers",
    color: "bg-indigo-600",
  },
  {
    name: "Taekwondo Avanzado",
    description: "Arte marcial que desarrolla disciplina, respeto y autocontrol en niveles competitivos.",
    iconName: "Zap",
    color: "bg-yellow-600",
  },
]

const extracurricularData = {
  title: "Actividades de Excelencia",
  description: "Programa avanzado de actividades que preparan a nuestros estudiantes para el liderazgo universitario y profesional.",
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