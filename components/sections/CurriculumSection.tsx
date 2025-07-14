"use client"

import React from "react"
import { motion } from "framer-motion"

interface Subject {
  name: string
  description?: string
  icon?: React.ReactElement<any>
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

        {/* Responsive grid: 2 rows, symmetrical, UI friendly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 place-items-stretch">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white rounded-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 w-full max-w-[20rem] cursor-default mx-auto"
            >
              <div className="mb-2 flex items-center justify-center">
                {subject.icon &&
                  React.cloneElement(subject.icon, {
                    className: "w-12 h-12 text-valencia-blue",
                  })}
              </div>
              <h3 className="font-semibold text-[1.125rem] text-valencia-blue mt-2">
                {subject.name}
              </h3>
              {subject.description && (
                <p className="text-[0.875rem] text-gray-600 leading-[1.6] px-2 mt-3">
                  {subject.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}