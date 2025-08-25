'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaCogs, FaHandsHelping } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const pillars = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Aprendizaje inclusivo y diferenciado",
    description: "Adaptamos contenidos y estrategias para atender diversidad de ritmos y estilos de aprendizaje."
  },
  {
    icon: <FaUsers />,
    title: "Evaluación formativa y auténtica",
    description: "Utilizamos evidencias reales del desempeño para guiar la mejora continua."
  },
  {
    icon: <FaCogs />,
    title: "Desarrollo de competencias",
    description: "Fomentamos habilidades de comunicación, colaboración y pensamiento crítico."
  },
  {
    icon: <FaHandsHelping />,
    title: "Vinculación comunitaria",
    description: "Articulamos proyectos con familias e instituciones para contextualizar el aprendizaje."
  }
];

export default function Enfoque() {
  return (
    <section id="enfoque-pedagogico" className="py-16 bg-gradient-to-b from-white to-valencia-light-blue/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-valencia-blue mb-4">
            Nuestro Enfoque Pedagógico
          </h2>
          <div className="w-24 h-1 bg-valencia-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Adoptamos un enfoque integral centrado en el estudiante, combinando innovación educativa
            con valores fundamentales para formar líderes del mañana.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-valencia-blue mb-4">
              Nuestra Metodología
            </h3>
            <p className="text-gray-700 mb-6">
              Implementamos metodologías activas que integran tecnología educativa como herramienta para
              el aprendizaje. El acompañamiento docente es formativo, con evaluaciones continuas y
              personalizadas que favorecen la progresión individual.
            </p>
            <p className="text-gray-700">
              Este enfoque busca formar personas competentes, críticas y comprometidas, preparadas para
              afrontar los retos del siglo XXI con creatividad, ética y responsabilidad social.
            </p>
          </motion.div>

          {/* Right Column - Pillars Grid */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-valencia-blue"
              >
                <div className="text-valencia-blue text-2xl mb-3">
                  {pillar.icon}
                </div>
                <h4 className="font-semibold text-valencia-blue mb-2">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-lg italic text-gray-700">
            "Formamos estudiantes que no solo aprenden, sino que comprenden; 
            que no solo memorizan, sino que analizan; 
            que no solo escuchan, sino que participan activamente en su proceso de aprendizaje."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
