"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, FileText, Calendar, Phone, Clock } from "lucide-react"

interface AdmissionStep {
  number: number
  title: string
  description: string
  icon: React.ElementType
  details?: string[]
}

const admissionSteps: AdmissionStep[] = [
  {
    number: 1,
    title: "Solicitud de Inscripción",
    description: "Completa el formulario de solicitud y entrega la documentación requerida.",
    icon: FileText,
    details: [
      "Formulario de inscripción completo",
      "Partida de nacimiento original",
      "Certificados de notas del grado anterior",
      "Fotografías tamaño carnet",
    ],
  },
  {
    number: 2,
    title: "Evaluación Académica",
    description: "El estudiante realizará una evaluación según su nivel académico.",
    icon: CheckCircle,
    details: [
      "Examen de matemáticas",
      "Examen de español",
      "Evaluación de inglés (según el nivel)",
      "Entrevista con psicólogo educativo",
    ],
  },
  {
    number: 3,
    title: "Entrevista Familiar",
    description: "Reunión con la familia para conocer expectativas y resolver dudas.",
    icon: Phone,
    details: [
      "Entrevista con padres de familia",
      "Presentación del proyecto educativo",
      "Información sobre costos y calendario",
      "Resolución de dudas específicas",
    ],
  },
  {
    number: 4,
    title: "Confirmación y Matrícula",
    description: "Una vez aceptado, procede con el pago de matrícula y confirma el cupo.",
    icon: Calendar,
    details: [
      "Notificación de aceptación",
      "Pago de matrícula y primera mensualidad",
      "Entrega de lista de útiles escolares",
      "Confirmación de cupo para el año escolar",
    ],
  },
]

export default function AdmissionsSection() {
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
          <h2 className="text-4xl font-bold text-valencia-blue mb-6">
            Proceso de Admisión
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Te acompañamos paso a paso en el proceso de inscripción para que tu hijo forme parte de la familia Valencia.
          </p>
        </motion.div>

        <div className="space-y-8">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-valencia-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-valencia-light-blue rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-valencia-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {step.description}
                  </p>
                  
                  {step.details && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-valencia-green flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-valencia-blue rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Tienes preguntas sobre el proceso?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nuestro equipo de admisiones está disponible para ayudarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+504 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Lunes a Viernes: 7:00 AM - 4:00 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}