"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SedeHero from "@/components/sections/SedeHero";
import CurriculumSection from "@/components/sections/CurriculumSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import ContactanosSection from "@/components/sections/ContactanosSection";
import ImageSlider from "@/components/shared/ImageSlider";
import { FaChild, FaBookOpen, FaPalette, FaLanguage } from "react-icons/fa";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import { FileText, CheckCircle, Calendar, Phone } from "lucide-react";

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
      "Impulsamos el aprendizaje de idiomas con actividades en español, francés e inglés, fomentando la expresión verbal y preparando a los estudiantes para la lectoescritura.",
    icon: <FaLanguage className="text-blue-400 w-12 h-12" />,
  },
  {
    name: "Matemáticas Iniciales",
    description:
      "Introducimos conceptos matemáticos de forma lúdica, cultivando el pensamiento crítico para cimentar su éxito a futuro.",
    icon: <FaBookOpen className="text-yellow-400 w-12 h-12" />,
  },
  {
    name: "Ciencias y Descubrimiento",
    description:
      "Exploramos el entorno natural con actividades interactivas que despiertan la curiosidad y el interés por el aprendizaje en cada niño.",
    icon: <FaPalette className="text-green-400 w-12 h-12" />,
  },
];

const curriculumData = {
  title: "Preescolar: Descubriendo el Mundo con Curiosidad",
  description:
    "Nuestro preescolar se enfoca en desarrollo integral, estimulación temprana, bilingüismo y aprendizaje a través del juego. Aquí los niños exploran, se expresan, crecen y se divierten en un ambiente seguro y estimulante.",
  subjects,
};

const extracurricularActivities = [
  {
    name: "Introducción Musical",
    description:
      "Desarrollamos la creatividad y fomentamos el pensamiento divergente a través de canciones, ritmos y juegos musicales.",
    iconName: "FaMusic",
    color: "bg-purple-400",
  },
  {
    name: "Estimulación Motriz",
    description:
      "Diseñamos actividades para el desarrollo de la coordinación, el equilibrio y la autonomía de los niños.",
    iconName: "FaRunning",
    color: "bg-green-400",
  },
  {
    name: "Arte y Manualidades",
    description:
      "Desarrollamos nuestra motricidad fina explorando el arte y conociendo artistas famosos que inspiran nuestra creatividad.",
    iconName: "FaPalette",
    color: "bg-pink-400",
  },
  {
    name: "Juegos Didácticos",
    description:
      "Actividades lúdicas que refuerzan el aprendizaje y desarrollan habilidades cognitivas.",
    iconName: "FaPuzzlePiece",
    color: "bg-yellow-400",
  },
  {
    name: "Juego Libre",
    description:
      "Tiempo de exploración y socialización que fomenta la imaginación y la independencia.",
    iconName: "Gamepad2",
    color: "bg-blue-400",
  },
  {
    name: "Vida Práctica",
    description:
      "Fortalece la autonomía de los estudiantes al realizar actividades del día a día.",
    iconName: "FaHandsHelping",
    color: "bg-yellow-500",
  },
];

const extracurricularData = {
  title: "Actividades Complementarias",
  description:
    "Actividades diseñadas especialmente para la edad preescolar que complementan el aprendizaje académico.",
};

const admissionSteps = [
  {
    number: 1,
    title: "Solicitud de Información",
    description:
      "El padre o tutor se presenta en la oficina de admisiones y expresa su interés en matricular al estudiante.",
    icon: <FileText className="w-6 h-6 text-white" />,
    details: [
      "Confirmar la edad del niño",
      "Recibir información inicial sobre el proceso",
    ],
  },
  {
    number: 2,
    title: "Entrevista Académica",
    description:
      "Se realiza una entrevista con la coordinadora académica de preescolar para intercambiar preguntas y respuestas sobre el estudiante y el programa educativo.",
    icon: <Phone className="w-6 h-6 text-white" />,
    details: [
      "Intercambio de preguntas y respuestas con la coordinadora",
      "Presentación del proyecto educativo",
      "Resolución de dudas sobre el programa",
    ],
  },
  {
    number: 3,
    title: "Confirmación y Matrícula",
    description:
      "Se entregan la información económica y se realiza el proceso de matrícula, incluyendo la entrega de documentos requeridos. Después de repasar y firmar los documentos, se entrega a los padres una copia de nuestro manual de convivencia y la lista de útiles escolares.",
    icon: <Calendar className="w-6 h-6 text-white" />,
    details: [
      "Entrega de precios y confirmación de inscripción",
      "Documentos requeridos: partida de nacimiento original, copia de identificación de los padres, copia del carnet de vacunación",
      "Entrega del manual de convivencia y lista de útiles escolares",
    ],
  },
];

const sampleImages = [
  "/images/hero/hero-bg.png",
  "/images/backgrounds/buhos-hero1.png",
  "/images/backgrounds/buhos-hero2.png",
];

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
  );
}
