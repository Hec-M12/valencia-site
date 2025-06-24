"use client"
import React from "react"
import Image from "next/image"
import { MapPinned, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-valencia-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Image
              src="/assets/images/logos/valencia-logo.png"
              alt="Instituto Valencia Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-gray-300 mt-4">
              Formando líderes del mañana con educación bilingüe de calidad y valores cristianos.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-valencia-yellow">Información de contacto</h4>
            <div className="space-y-5 text-gray-300">
              <p className="flex items-center gap-2"><MapPinned strokeWidth={2} size={23}/> Col. Palmira, Tegucigalpa, Honduras</p>
              <p className="flex items-center gap-2"><Phone strokeWidth={2} size={23}/> +504 2222-2222</p>
              <p className="flex items-center gap-2"><Mail strokeWidth={2} size={23}/> info@institutovalencia.edu.hn</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-valencia-yellow">Enlaces rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-300 hover:text-valencia-yellow transition-colors">Inicio</a>
              <a href="#nosotros" className="block text-gray-300 hover:text-valencia-yellow transition-colors">Nosotros</a>
              <a href="#ubicaciones" className="block text-gray-300 hover:text-valencia-yellow transition-colors">Ubicaciones</a>
              <a href="#contacto" className="block text-gray-300 hover:text-valencia-yellow transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © Instituto Valencia {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 