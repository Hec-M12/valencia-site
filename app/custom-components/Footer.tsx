"use client"
import React from "react"
import Image from "next/image"
import { MapPinned, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 border-t-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Image
              src="/images/logos/valencia-logo.png"
              alt="Instituto Valencia Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-black/80 mt-4 pr-2">
              Educando y transformando generaciones con excelencia académica y valores sólidos. En Instituto Valencia, formamos líderes del futuro.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-valencia-blue">Información de contacto</h4>
            <div className="space-y-5 text-black/80">
              <p className="flex items-center gap-2"><MapPinned strokeWidth={2} size={23} color="#216B8D"/> Col. Palmira, Tegucigalpa, Honduras</p>
              <p className="flex items-center gap-2"><Phone strokeWidth={2} size={23} color="#216B8D"/> +504 2222-2222</p>
              <p className="flex items-center gap-2"><Mail strokeWidth={2} size={23} color="#216B8D"/> info@institutovalencia.edu.hn</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-valencia-blue">Enlaces rápidos</h4>
            <div className="space-y-2">
              <a href="/" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Inicio</a>
              <a href="/nosotros" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Nosotros</a>
              <a href="/sede-principal" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Sede Principal</a>
              <a href="/sede-sur" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Sede Sur</a>
              <a href="/extracurriculares" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Extracurriculares</a>
              <a href="/contacto" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-black/30 mt-8 pt-8 text-center">
          <p className="text-black/60 text-sm">
            © Instituto Valencia {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}