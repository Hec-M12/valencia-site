"use client"

import { Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactanosSection() {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-valencia-blue mb-4">Contáctanos</h2>
        <p className="text-center text-gray-600 text-lg mb-">
          Estamos aquí para resolver todas tus dudas y acompañarte en el proceso de inscripción de tu hijo.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto">
          {[
            { Icon: Mail, label: "Correo", value: "info@institutovalencia.edu.hn", href: "mailto:info@institutovalencia.edu.hn" },
            { Icon: Phone, label: "Teléfono", value: "+504 9999-9999", href: "tel:+50499999999" },
            { Icon: MessageCircle, label: "WhatsApp", value: "+504 9999-9999", href: "https://wa.me/50499999999" }
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-start gap-4 p-4 md:p-6 bg-white rounded-lg w-full shadow hover:bg-valencia-blue hover:shadow-lg transition-colors duration-500 ease-in-out"
            >
              <Icon className="flex-shrink-0 block w-8 h-8 text-valencia-blue group-hover:text-white" />
              <div className="flex-1 flex flex-col text-left"> 
                <p className="text-md md:text-md text-gray-500 group-hover:text-white">{label}</p>
                <p className="text-md md:text-md font-semibold text-gray-800 break-all group-hover:text-white">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
