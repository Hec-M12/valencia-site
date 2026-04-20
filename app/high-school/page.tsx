import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DivisionHero from "@/components/sections/DivisionHero";
import CurriculumSection from "@/components/sections/CurriculumSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactanosSection from "@/components/sections/ContactanosSection";
import ImageSlider from "@/components/shared/ImageSlider";
import { FaGraduationCap, FaBookOpen, FaChild } from "react-icons/fa";
import { FileText, Calendar, Phone } from "lucide-react";
import { breadcrumbSchema, SITE_URL } from "@/app/schema";

export const metadata: Metadata = {
  title: "Secundaria — Preparación Universitaria Bilingüe",
  description:
    "Secundaria bilingüe en Valencia School: preparación académica rigurosa, formación integral, liderazgo y proyección universitaria.",
  keywords: [
    "secundaria Valencia School",
    "secundaria bilingüe Tegucigalpa",
    "bachillerato Honduras",
    "preparación universitaria Tegucigalpa",
    "high school Tegucigalpa",
  ],
  alternates: {
    canonical: "/high-school",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title: "Secundaria — Preparación Universitaria Bilingüe | Valencia School",
    description:
      "Secundaria bilingüe en Valencia School: preparación académica rigurosa, formación integral, liderazgo y proyección universitaria.",
    url: `${SITE_URL}/high-school`,
  },
};

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
      "Clases de inglés, español y francés que fortalecen las habilidades de comunicación y preparan a los estudiantes para interactuar en un mundo globalizado y competitivo.",
    icon: <FaBookOpen className="text-pink-700 w-12 h-12" />,
  },
];

const curriculumData = {
  title: "Secundaria: Excelencia Académica y Liderazgo Global",
  description:
    "Nuestra secundaria y bachillerato preparan a los estudiantes para su educación futura, con programas rigurosos, asesoría académica, laboratorios especializados y formación en liderazgo. Nuestro enfoque es integral, bilingüe y orientado al éxito global.",
  subjects,
};

const extracurricularActivities = [
  {
    name: "Robótica y Programación",
    description:
      "Proyectos tecnológicos avanzados que preparan para las carreras del futuro.",
    iconName: "FaCode",
    color: "bg-cyan-600",
  },
  {
    name: "Investigación Científica",
    description:
      "Proyectos de investigación avanzada en laboratorios especializados con metodología universitaria.",
    iconName: "FaMicroscope",
    color: "bg-orange-600",
  },
  {
    name: "Liderazgo Estudiantil",
    description:
      "Gobierno estudiantil y proyectos de servicio comunitario que forman ciudadanos responsables.",
    iconName: "FaUsers",
    color: "bg-indigo-600",
  },
  {
    name: "Arte y Creatividad",
    description:
      "Actividades artísticas que fomentan la imaginación, la autoexpresión y el desarrollo de habilidades creativas.",
    iconName: "FaPalette",
    color: "bg-pink-600",
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
  title: "Actividades de Excelencia",
  description:
    "Programa avanzado de actividades que preparan a nuestros estudiantes para el liderazgo universitario y profesional.",
};

const sampleImages = [
  "/images/sliders/hs-1.jpg",
  "/images/sliders/hs-2.jpg",
  "/images/sliders/hs-3.jpg",
  "/images/sliders/hs-4.jpg",
];

export default function Secundaria() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Secundaria", url: `${SITE_URL}/high-school` },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <DivisionHero
          heading={
            <>
              <span>Secundaria</span>
            </>
          }
          src="/images/backgrounds/buho-secundaria.png"
          seoTitle="Secundaria en Valencia School — Preparación Universitaria Bilingüe"
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
                Vive la experiencia de secundaria: laboratorios, proyectos y vida
                estudiantil.
              </p>
            </div>
            <ImageSlider images={sampleImages} />
          </div>
        </section>
        <div className="w-[90%] mx-auto pb-8">
          <ContactanosSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
