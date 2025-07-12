"use client"

import React from "react"
import { motion } from "framer-motion"
import { Music, Heart, Trophy, Zap, Globe } from "lucide-react"

interface Activity {
  name: string
  description: string
  icon: React.ElementType
  color: string
}

const activities: Activity[] = [
  {
    name: "Francés",
    description: "Aprende el idioma francés con metodologías modernas e interactivas.",
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    name: "Ballet",
    description: "Desarrolla gracia, disciplina y expresión artística a través de la danza clásica.",
    icon: Heart,
    color: "bg-pink-500",
  },
  {
    name: "Fútbol",
    description: "Fortalece el trabajo en equipo y la condición física jugando el deporte más popular.",
    icon: Trophy,
    color: "bg-green-500",
  },
  {
    name: "Taekwondo",
    description: "Disciplina mental y física a través de este arte marcial tradicional coreano.",
    icon: Zap,
    color: "bg-red-500",
  },
  {
    name: "Música",
    description: "Explora la creatividad y desarrolla habilidades musicales con diversos instrumentos.",
    icon: Music,
    color: "bg-purple-500",
  },
]

export default function ExtracurricularSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-valencia-blue mb-6">
            Actividades Extracurriculares
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complementamos la educación académica con actividades que desarrollan
            habilidades sociales, artísticas y deportivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-valencia-light-blue group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${activity.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-valencia-blue mb-3">
                  {activity.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}