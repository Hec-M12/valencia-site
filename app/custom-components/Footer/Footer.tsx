"use client"
import React from "react"
import Image from "next/image"
import { MapPinned, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-instituto-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=40&width=120"
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
            <h4 className="text-lg font-semibold text-instituto-yellow">Información de contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p><MapPinned /> Col. Palmira, Tegucigalpa, Honduras</p>
              <p><Phone /> +504 2222-2222</p>
              <p><Mail /> info@institutovalencia.edu.hn</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-instituto-yellow">Enlaces rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-300 hover:text-instituto-yellow transition-colors">Inicio</a>
              <a href="#nosotros" className="block text-gray-300 hover:text-instituto-yellow transition-colors">Nosotros</a>
              <a href="#ubicaciones" className="block text-gray-300 hover:text-instituto-yellow transition-colors">Ubicaciones</a>
              <a href="#contacto" className="block text-gray-300 hover:text-instituto-yellow transition-colors">Contacto</a>
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