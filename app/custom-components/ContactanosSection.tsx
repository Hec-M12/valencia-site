"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"
import ContactButton from "./ContactButton"
import ContactForm from "./ContactForm"
import SectionTitle from "./SectionTitle"

export default function ContactanosSection() {
  const handleFormSubmit = (data: any) => {
    // Aquí puedes manejar el envío del formulario
    console.log("Form data:", data)
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contáctanos"
          description="Estamos aquí para resolver todas tus dudas y acompañarte en el proceso de inscripción de tu hijo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Botones de contacto rápido */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-valencia-blue mb-6">Contacto directo</h3>

            <div className="space-y-4">
              <ContactButton
                icon={MessageCircle}
                text="WhatsApp: +504 9999-9999"
                variant="default"
              />

              <ContactButton
                icon={Phone}
                text="Teléfono: +504 2222-2222"
              />

              <ContactButton
                icon={Mail}
                text="info@institutovalencia.edu.hn"
              />
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-valencia-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-heading text-valencia-blue mb-6">Envíanos tu consulta</h3>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  )
}
