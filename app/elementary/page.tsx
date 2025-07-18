import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DivisionHero from "@/components/sections/DivisionHero";
import CurriculumSection from "@/components/sections/CurriculumSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactanosSection from "@/components/sections/ContactanosSection";
import ImageSlider from "@/components/shared/ImageSlider";
import { FaBookOpen, FaUsers, FaPalette, FaLanguage } from "react-icons/fa";
import { FileText, Calendar, Phone } from "lucide-react";

const admissionSteps = [
  {
    number: 1,
    title: "Solicitud de Información",
    description:
      "El padre o tutor se presenta en la oficina de admisiones y expresa su interés en matricular al estudiante. También se recopila información sobre el historial académico del estudiante.",
    icon: <FileText className="w-6 h-6 text-white" />,
    details: [
      "Confirmar la edad del niño",
      "Recibir información inicial sobre el proceso",
      "Recopilar historial del estudiante y razones para el cambio de escuela",
    ],
  },
  {
    number: 2,
    title: "Entrevista Académica",
    description:
      "Se realiza una entrevista con la coordinadora académica o directora para intercambiar preguntas y respuestas sobre el estudiante y el programa educativo.",
    icon: <Phone className="w-6 h-6 text-white" />,
    details: [
      "Intercambio de preguntas y respuestas con la coordinadora",
      "Presentación del proyecto educativo",
      "Resolución de dudas sobre el programa",
    ],
  },
  {
    number: 3,
    title: "Entrega de Documentos",
    description:
      "Los padres deben entregar los documentos requeridos para completar el proceso de matrícula.",
    icon: <FileText className="w-6 h-6 text-white" />,
    details: [
      "Partida de nacimiento original",
      "Copia de identificación de los padres",
      "Diploma de preescolar (si aplica)",
      "Copia de certificados de estudios previos",
      "Constancia de solvencia",
      "Constancia de conducta de la escuela anterior",
    ],
  },
  {
    number: 4,
    title: "Confirmación y Matrícula",
    description:
      "Se entregan la información económica y se realiza el proceso de matrícula, incluyendo la entrega de documentos requeridos. Después de repasar y firmar los documentos, se entrega a los padres una copia de nuestro manual de convivencia y la lista de útiles escolares.",
    icon: <Calendar className="w-6 h-6 text-white" />,
    details: ["Entrega de precios y confirmación de inscripción"],
  },
];

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
];

const curriculumData = {
  title: "Primaria: Fundamentos para el Futuro",
  description:
    "Nuestra primaria se basa en aprendizaje activo, bilingüismo, laboratorios de ciencias y tecnología, y formación en valores. Los estudiantes desarrollan pensamiento crítico, creatividad y liderazgo en un ambiente colaborativo y global.",
  subjects,
};

const extracurricularActivities = [
  {
    name: "Ballet",
    description:
      "Desarrollo de habilidades artísticas, coordinación y expresión corporal a través de la danza.",
    iconName: "FaChild",
    color: "bg-pink-500",
  },
  {
    name: "Taekwondo",
    description:
      "Fomento de la disciplina, el respeto y el desarrollo físico mediante artes marciales.",
    iconName: "FaRunning",
    color: "bg-red-500",
  },
  {
    name: "Música",
    description:
      "Aprendizaje de instrumentos musicales y desarrollo de habilidades artísticas y culturales.",
    iconName: "FaMusic",
    color: "bg-purple-500",
  },
  {
    name: "Francés",
    description:
      "Tercer idioma que amplía las perspectivas culturales y comunicativas de los estudiantes.",
    iconName: "Globe",
    color: "bg-blue-500",
  },
  {
    name: "Ciencias Experimentales",
    description:
      "Laboratorios y experimentos que despiertan la curiosidad científica y el pensamiento crítico.",
    iconName: "FaFlask",
    color: "bg-orange-500",
  },
  {
    name: "Club de Inteligencias Múltiples",
    description:
      "Los estudiantes pueden elegir participar en clubes como cocina, arte, música, entre otros, para desarrollar talentos específicos.",
    iconName: "FaPuzzlePiece",
    color: "bg-yellow-500",
  },
  {
    name: "Laboratorio de Computación",
    description:
      "Espacio dedicado al aprendizaje de habilidades tecnológicas y programación básica.",
    iconName: "FaCode",
    color: "bg-gray-500",
  },
  {
    name: "Plataforma de Lectura",
    description:
      "Trabajamos con una plataforma donde los estudiantes pueden leer libros e interactuar con sus autores.",
    iconName: "FaBookOpen",
    color: "bg-green-500",
  },
];

const extracurricularData = {
  title: "Actividades Extracurriculares",
  description:
    "Programa integral de actividades que complementan la formación académica y desarrollan talentos especiales.",
};

const sampleImages = [
  "/images/sliders/primary-1.jpg",
  "/images/sliders/primary-2.jpg",
  "/images/sliders/primary-3.jpg",
];

export default function Primaria() {
  return (
    <>
      <Navbar />
      <DivisionHero
        heading={
          <>
            <span>Primaria</span>
          </>
        }
        src="/images/backgrounds/buho-primaria.png"
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
              Descubre cómo nuestros estudiantes de primaria aprenden, crean y
              se divierten.
            </p>
          </div>
          <ImageSlider images={sampleImages} />
        </div>
      </section>
      <div className="w-[90%] mx-auto pb-8">
        <ContactanosSection/>
      </div>
      <Footer />
    </>
  );
}
