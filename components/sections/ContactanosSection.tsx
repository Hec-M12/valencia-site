"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle, Target } from "lucide-react"

export default function ContactanosSection() {
  return (
    <section id="contacto">
      <div className="mx-auto max-w-4xl px-0 text-left md:px-6 lg:px-8 sm:py-12">
        <h2 className="text-3xl font-bold text-valencia-blue mb-4 px-2">Contáctanos</h2>
        <p className="text-left text-gray-600 text-lg mb-4 px-2">
          Estamos aquí para resolver todas tus dudas y acompañarte en el proceso de inscripción de tu hijo.
        </p>
        <div className="mt-8 grid grid-rows-3 gap-6 max-w-full mx-auto">
          {[
            { Icon: Mail, label: "Correo", value: "info@valencia-school.edu.hn", href: "mailto:info@valencia-school.edu.hn" },
            { Icon: Phone, label: "Teléfono", value: "+504 9438-7154", href: "tel:+50494387154" },
            { Icon: MessageCircle, label: "WhatsApp", value: "+504 9438-7154", href: "https://wa.me/50494387154", target: "_blank" }
          ].map(({ Icon, label, value, href, target }) => (
            <motion.a
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              key={label}
              href={href}
              target={target}
              className="group flex items-center justify-start w-full gap-4 p-4 md:p-6 bg-white rounded-lg w-full shadow hover:bg-valencia-blue hover:shadow-lg transition-colors duration-500 ease-in-out"
            >
              <Icon className="flex-shrink-0 block w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 text-valencia-blue group-hover:text-white" />
              <div className="flex-1 flex flex-col text-left"> 
                <p className="text-md md:text-md text-gray-500 group-hover:text-white">{label}</p>
                <p className="text-sm md:text-md font-semibold text-gray-800 break-all group-hover:text-white">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
