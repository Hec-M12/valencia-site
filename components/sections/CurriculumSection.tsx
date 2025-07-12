"use client"

import React from "react"
import { motion } from "framer-motion"
import { BookOpen, Users, Clock } from "lucide-react"

interface Subject {
  name: string
  description?: string
}

interface CurriculumSectionProps {
  title: string
  description: string
  subjects: Subject[]
}

export default function CurriculumSection({
  title,
  description,
  subjects,
}: CurriculumSectionProps) {
  return (
    <section className="py-16 bg-valencia-gray">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-valencia-blue mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-valencia-blue mr-3" />
                <h3 className="text-xl font-semibold text-valencia-blue">
                  {subject.name}
                </h3>
              </div>
              {subject.description && (
                <p className="text-gray-600">{subject.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}