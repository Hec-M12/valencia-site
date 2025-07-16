"use client"

import React from "react"
import { motion } from "framer-motion"
import { Music, Heart, Trophy, Zap, Globe, Gamepad2 } from "lucide-react"
import { FaMusic, FaRunning, FaPalette, FaPuzzlePiece, FaFootballBall, FaFlask, FaChess, FaCode, FaGavel, FaTheaterMasks, FaMicroscope, FaUsers } from "react-icons/fa"

interface Activity {
  name: string
  description: string
  iconName: string
  color: string
}

interface ExtracurricularSectionProps {
  title?: string
  description?: string
  activities: Activity[]
}

// Icon mapping object
const iconMap: { [key: string]: React.ElementType } = {
  // Lucide icons
  Music,
  Heart,
  Trophy,
  Zap,
  Globe,
  Gamepad2,
  // React Icons
  FaMusic,
  FaRunning,
  FaPalette,
  FaPuzzlePiece,
  FaFootballBall,
  FaFlask,
  FaChess,
  FaCode,
  FaGavel,
  FaTheaterMasks,
  FaMicroscope,
  FaUsers,
}

export default function ExtracurricularSection({
  title = "Actividades Extracurriculares",
  description = "Complementamos la educación académica con actividades que desarrollan habilidades sociales, artísticas y deportivas.",
  activities,
}: ExtracurricularSectionProps) {
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
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${activities.length === 8 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
          {activities.map((activity, index) => {
            const IconComponent = iconMap[activity.iconName] || Trophy
            return (
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
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-valencia-blue mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}