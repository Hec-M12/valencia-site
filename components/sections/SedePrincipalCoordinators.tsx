import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const coordinators = [
  {
    name: "Mr. Deni Raúl García",
    image: "/images/sede-principal-coordinadores/Mr. Deni Raúl García.jpeg",
    description: "Coordinador de 4.º a 11.º grado Bilingüe",
    message: [
      "En nuestra institución, la metodología de enseñanza-aprendizaje está centrada en el desarrollo integral del estudiante, promoviendo habilidades cognitivas, comunicativas en el idioma inglés, tecnológicas y socioemocionales que les permitan enfrentar con éxito los retos académicos y personales. También impulsamos el hábito lector mediante plataformas donde los estudiantes pueden interactuar con los autores y recibir reconocimientos de acuerdo con sus logros.",
      "Uno de nuestros principales objetivos es que los alumnos egresen preparados para enfrentar evaluaciones externas como la Prueba PHUMA. Para ello, implementamos estrategias de nivelación, resolución de problemas, comprensión lectora crítica y manejo del tiempo de examen, todo dentro de un currículo articulado y exigente.",
      "Además, promovemos el uso adecuado de las normas APA desde los primeros niveles de secundaria como parte del desarrollo de competencias investigativas y pensamiento crítico. De esta manera, los estudiantes sustentan sus ideas con fuentes confiables, redactan trabajos académicos formales y presentan proyectos siguiendo estándares internacionales, en un ambiente bilingüe que los prepara para entornos globales, universitarios y laborales.",
    ],
  },
  {
    name: "Mrs. Johanna Lozano",
    image: "/images/sede-principal-coordinadores/Mrs. Johanna Lozano.jpeg",
    description: "Coordinadora de Preescolar y 1.º a 3.º grado",
    message: [
      "En nuestro centro educativo nos hemos destacado por las metodologías de trabajo en Preescolar, enfocadas en el aprendizaje mediante el juego, la exploración y la experimentación de saberes. Favorecemos un aprendizaje activo y significativo centrado en cada niño y niña, implementando estrategias como rincones de aprendizaje (lectura, arte, construcción, juego simbólico), proyectos basados en intereses, canciones, cuentos, dramatizaciones y actividades sensoriales y motrices.",
      "Todo esto se realiza con el objetivo de desarrollar habilidades socioemocionales, lenguaje, motricidad y pensamiento lógico de forma lúdica, activa, medible y tangible. Damos seguimiento a esta metodología en Básica – 1er Ciclo (1.º a 3.º grado), donde nuestro enfoque se basa en el aprendizaje cooperativo y por competencias, manteniendo clases dinámicas con recursos visuales y manipulativos, trabajo por proyectos y resolución de problemas.",
      "Integramos la lectura comprensiva y creativa, impulsando a nuestros estudiantes a realizar experimentos prácticos en matemáticas y ciencias, sin dejar de lado el uso de TIC y recursos interactivos. Así, consolidamos la lectoescritura, el pensamiento lógico-matemático, los hábitos de estudio y los valores que fortalecerán su trayectoria académica de éxito.",
    ],
  },
  {
    name: "Mrs. Karla Lizeth Rodríguez",
    image: "/images/sede-principal-coordinadores/Mrs. Karla Lizeth Rodríguez.jpeg",
    description: "Coordinadora de 4.º a 11.º grado Español",
    message: [
      "En el área secundaria, nuestra metodología se centra en un aprendizaje activo, reflexivo y significativo. Favorecemos la participación del estudiante como protagonista de su proceso, promoviendo la investigación, el trabajo colaborativo y el pensamiento crítico.",
      "Combinamos estrategias teórico-prácticas con actividades que vinculan los contenidos académicos a situaciones reales, fomentando la resolución de problemas y la aplicación de conocimientos en contextos diversos.",
      "Integramos recursos digitales y metodologías innovadoras como el aprendizaje basado en proyectos, la aplicación de normas APA y el uso de TIC para motivar y conectar los saberes con la vida cotidiana, brindando herramientas que les permitan enfrentar con éxito tanto la vida universitaria como el mundo laboral.",
    ],
  },
];

export default function SedePrincipalCoordinators() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-valencia-blue/70">
            Nuestro equipo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-valencia-blue md:text-4xl">
            Coordinadores de la Sede Principal
          </h2>
          <p className="mt-4 text-base text-valencia-blue/70 md:text-lg">
            Líderes comprometidos con el acompañamiento académico y humano de toda la comunidad.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map(({ name, image, description, message }) => (
            <Dialog.Root key={name}>
              <article className="flex flex-col items-center text-center">
                <div className="relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={image}
                    alt={`Retrato de ${name}, ${description} en Valencia School Sede Principal`}
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
