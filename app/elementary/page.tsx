import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SedeHero from "@/components/sections/SedeHero"
import CurriculumSection from "@/components/sections/CurriculumSection"
import ExtracurricularSection from "@/components/sections/ExtracurricularSection"
import AdmissionsSection from "@/components/sections/AdmissionsSection"
import ContactanosSection from "@/components/sections/ContactanosSection"
import ImageSlider from "@/components/shared/ImageSlider"
import { FaBookOpen, FaUsers, FaPalette, FaLanguage } from "react-icons/fa"
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
      "Certificados de notas del grado anterior",
      "Fotografía tamaño carnet",
    ],
  },
  {
    number: 2,
    title: "Evaluación Académica",
    description: "El estudiante realizará una evaluación según su grado y nivel académico.",
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
    description: "Reunión con la familia para conocer expectativas y resolver dudas.",
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

const extracurricularActivities = [
  {
    name: "Fútbol",
    description: "Desarrollo de habilidades deportivas, trabajo en equipo y disciplina a través del deporte.",
    iconName: "FaFootballBall",
    color: "bg-green-500",
  },
  {
    name: "Música",
    description: "Aprendizaje de instrumentos musicales y desarrollo de habilidades artísticas y culturales.",
    iconName: "FaMusic",
    color: "bg-purple-500",
  },
  {
    name: "Francés",
    description: "Tercer idioma que amplía las perspectivas culturales y comunicativas de los estudiantes.",
    iconName: "Globe",
    color: "bg-blue-500",
  },
  {
    name: "Ciencias Experimentales",
    description: "Laboratorios y experimentos que despiertan la curiosidad científica y el pensamiento crítico.",
    iconName: "FaFlask",
    color: "bg-orange-500",
  },
  {
    name: "Ajedrez",
    description: "Desarrollo del pensamiento estratégico, concentración y habilidades de resolución de problemas.",
    iconName: "FaChess",
    color: "bg-gray-600",
  },
  {
    name: "Arte y Creatividad",
    description: "Expresión artística a través de diferentes técnicas que fomentan la creatividad y autoexpresión.",
    iconName: "FaPalette",
    color: "bg-pink-500",
  },
]

const extracurricularData = {
  title: "Actividades Extracurriculares",
  description: "Programa integral de actividades que complementan la formación académica y desarrollan talentos especiales.",
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