import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const coordinators = [
  {
    name: "Mrs. Ada Amalia Raudales",
    image: "/images/sede-sur-coordinadores/Mrs. Ada Amalia Raudales.jpeg",
    description: "Pre-school • Calendarios Nacional y Anglosajón",
    message: [
      "En nuestro nivel de Prebásica, aplicamos una metodología activa y personalizada que coloca al niño como protagonista de su propio aprendizaje. Respetamos su ritmo biológico, emocional y cognitivo, y brindamos un entorno seguro y afectivo que favorece su desarrollo integral.",
      "Nuestro currículo está alineado con los estándares nacionales y enriquecido con estándares internacionales, brindando así una formación sólida y global. Desde los niveles iniciales, ofrecemos la mayor parte de nuestras clases en el idioma inglés, reforzando el español e introduciendo el francés, lo que estimula el desarrollo cognitivo y la flexibilidad mental de nuestros estudiantes. Complementamos su formación con actividades extracurriculares como ballet y taekwon do, que fortalecen la expresión corporal, la disciplina, la coordinación y la autoestima.",
      "Además, contamos con clases de estimulación del lenguaje (especialmente en el nivel de Nursery), así como programas específicos para el desarrollo del área motora fina y gruesa. También promovemos la autonomía y el sentido de responsabilidad a través de la clase de vida práctica, basada en la pedagogía Montessori, que permite a los niños adquirir habilidades cotidianas desde temprana edad.",
      "Todo este proceso es acompañado de cerca por nuestra psicóloga escolar, quien guía al equipo docente en la aplicación de estrategias inclusivas y en las adecuaciones necesarias para apoyar a cada estudiante según sus necesidades. De esta forma, aseguramos que cada niño crezca feliz, seguro y plenamente preparado para la siguiente etapa de su formación escolar.",
    ],
  },
  {
    name: "Mrs. Gisell Yalina Maradiaga",
    image: "/images/sede-sur-coordinadores/Mrs. Gisell Yalina Maradiaga.jpeg",
    description: "Elementary • Calendario Nacional",
    message: [
      "Nuestra visión holística nos permite combinar y utilizar metodologías de enseñanza-aprendizaje innovadoras. Es importante integrar diferentes enfoques pedagógicos para crear un ambiente dinámico y efectivo que potencie al máximo las habilidades, competencias y conocimientos de manera integral.",
      "Nuestra metodología principal es el enfoque universal y activo; como institución es trascendental detectar cómo aprenden los estudiantes, fomentándoles la reflexión, la interacción y la aplicación práctica del conocimiento, haciéndolos parte de su propio proceso de aprendizaje.",
      "Las actividades están diseñadas para que nuestros estudiantes procesen, apliquen y conecten el conocimiento con situaciones reales que les permitan pensar objetivamente sobre el mundo que les rodea. Creemos fielmente que, al brindarles las herramientas adecuadas, nuestros estudiantes serán capaces de competir en una sociedad cambiante.",
    ],
  },
  {
    name: "Mrs. Stephany Yamileth Zaldaña",
    image: "/images/sede-sur-coordinadores/Mrs. Stephany Yamileth Zaldaña.jpeg",
    description: "Elementary • Calendario Anglosajón",
    message: [
      "La metodología de trabajo utilizada en el nivel de básica se caracteriza por un enfoque integral, activo y centrado en el estudiante, combinando estrategias pedagógicas innovadoras para garantizar el desarrollo de las competencias. El éxito de esta metodología se ve reforzado por el compromiso y la preparación del cuerpo docente, conformado por profesionales altamente calificados que reciben formación continua en metodologías activas, estrategias y enfoques educativos.",
      "Ofrecemos una enseñanza equilibrada y eficaz, ajustándonos a las necesidades de un grupo estudiantil diverso. Las clases se organizan de manera dinámica, utilizando recursos visuales, tecnológicos y manipulativos que favorecen el aprendizaje significativo, promoviendo la construcción de nuevos conocimientos a partir de la experiencia, la participación activa y la resolución de problemas.",
      "Además, fomentamos una estrecha relación entre la escuela y las familias: este trabajo conjunto asegura una educación bilingüe de calidad, centrada en el desarrollo integral de los estudiantes.",
    ],
  },
  {
    name: "Ms. Cindy Geraldina Torres",
    image: "/images/sede-sur-coordinadores/Ms. Cindy Geraldina Torres.jpeg",
    description: "High School • Calendario Anglosajón",
    message: [
      "En nuestro centro educativo, el aprendizaje en educación media se basa en una metodología innovadora, flexible y centrada en el estudiante. Fomentamos el pensamiento crítico, la reflexión y la creatividad mediante estrategias activas como el aprendizaje por proyectos, el trabajo colaborativo y el análisis de situaciones reales.",
      "Integramos la tecnología de manera transversal, no solo como herramienta, sino como medio para potenciar la autonomía, la investigación y la participación activa. Utilizamos plataformas digitales y recursos interactivos que enriquecen el proceso educativo y preparan a los estudiantes para los retos del mundo actual.",
      "El arte y el deporte son pilares fundamentales de nuestra formación integral. A través de la expresión artística, los estudiantes desarrollan sensibilidad, imaginación y pensamiento creativo. Por medio del deporte, fortalecen la disciplina, el trabajo en equipo, la salud física y el bienestar emocional.",
      "Nuestros docentes son facilitadores del aprendizaje: diseñan experiencias significativas y evalúan de forma continua para acompañar el desarrollo integral de cada alumno. Además, promovemos la mejora constante mediante la formación docente y la innovación pedagógica.",
    ],
  },
  {
    name: "Ms. Egla Sulamita Cálix",
    image: "/images/sede-sur-coordinadores/Ms. Egla Sulamita Cálix.jpeg",
    description: "High School • Calendario Nacional",
    message: [
      "En Valencia School Sede Sur, en el área de secundaria ofrecemos una formación académica de calidad, orientada al éxito dentro y fuera del país. Aplicamos metodologías de enseñanza innovadoras con clases dinámicas, participativas y apoyadas en el uso de tecnologías, fomentando la investigación, el aprendizaje colaborativo y la resolución de problemas.",
      "Potenciamos el pensamiento crítico y analítico, desarrollando en los estudiantes la capacidad de argumentar, cuestionar y proponer soluciones creativas a los retos académicos y de la vida real. Nuestros estudiantes egresan altamente preparados en el uso de normas APA, fortaleciendo sus competencias en redacción e investigación.",
      "Además, reciben una preparación sólida para enfrentar con éxito la prueba PHUMA, asegurando un alto rendimiento académico. Como resultado, muchos de nuestros graduados han sido aceptados en universidades del extranjero, demostrando que su formación tiene un alcance internacional.",
      "¡Te invitamos a ser parte de nuestra comunidad educativa que impulsa el conocimiento, la innovación y la proyección global!",
    ],
  },
];

export default function SedeSurCoordinators() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-valencia-blue/70">
            Nuestro equipo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-valencia-blue md:text-4xl">
            Coordinadoras de la Sede Sur
          </h2>
          <p className="mt-4 text-base text-valencia-blue/70 md:text-lg">
            Un equipo dedicado a guiar y acompañar a las familias de nuestra comunidad.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map(({ name, image, description, message }) => (
            <Dialog.Root key={name}>
              <article className="flex flex-col items-center text-center">
                <div className="relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                    priority={false}
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-valencia-blue md:text-xl">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-valencia-blue/70 md:text-base">
                  {description}
                </p>
                <Dialog.Trigger className="mt-4 inline-flex items-center justify-center rounded-full bg-valencia-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-valencia-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-valencia-blue/60">
                  Leer mensaje
                </Dialog.Trigger>
              </article>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-150" />
                <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-150">
                  <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white px-6 py-8 shadow-2xl sm:px-10 sm:py-10">
                    <Dialog.Title className="text-2xl font-semibold text-valencia-blue sm:text-3xl">
                      {name}
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-valencia-blue/70 sm:text-base">
                      {description}
                    </Dialog.Description>
                    <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-valencia-dark-gray">
                      {message.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                    <Dialog.Close className="absolute right-5 top-5 rounded-full bg-valencia-blue/10 p-2 text-valencia-blue transition hover:bg-valencia-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-valencia-blue/60">
                      <span className="sr-only">Cerrar</span>
                      <XMarkIcon className="h-5 w-5" />
                    </Dialog.Close>
                    <Dialog.Close className="mt-8 inline-flex items-center justify-center rounded-full bg-valencia-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-valencia-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-valencia-blue/60">
                      Cerrar
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
