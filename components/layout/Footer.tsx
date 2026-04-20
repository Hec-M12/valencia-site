"use client"
import React from "react"
import Image from "next/image"
import { MapPinned, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer aria-label="Pie de página" className="bg-white text-black py-12 border-t-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Image
              src="/images/logos/valencia-logo.png"
              alt="Valencia School"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-black/80 mt-4 pr-2">
              Educando y transformando generaciones con excelencia académica y valores sólidos. En Instituto Valencia, formamos líderes del futuro.
            </p>
            <nav aria-label="Redes sociales" className="flex flex-col space-y-4 mt-4">
              <p className="flex items-center gap-2">
                <Instagram strokeWidth={2} size={30} color="#216B8D" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/valenciaschoolhn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Valencia School en Instagram (abre en nueva pestaña)"
                  className="hover:underline"
                >
                  @valenciaschoolhn
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Facebook strokeWidth={2} size={30} color="#216B8D" aria-hidden="true" />
                <a
                  href="https://www.facebook.com/ValenciaSchoolHN"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Valencia School en Facebook (abre en nueva pestaña)"
                  className="hover:underline"
                >
                  @ValenciaSchoolHN
                </a>
              </p>
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-valencia-blue">Información de contacto</h2>
            <address className="space-y-5 text-black/80 not-italic">
              <p className="flex items-center gap-2"><MapPinned strokeWidth={2} size={36} color="#216B8D" aria-hidden="true"/> Sede Sur: Res. Los Hidalgos, Comayagüela, Honduras </p>
              <p className="flex items-center gap-2"><MapPinned strokeWidth={2} size={36} color="#216B8D" aria-hidden="true"/> Sede Principal: Res. Valencia, Tegucigalpa, Honduras </p>
              <p className="flex items-center gap-2">
                <Phone strokeWidth={2} size={30} color="#216B8D" aria-hidden="true"/>
                <a href="tel:+50494387154" className="hover:underline">+504 9438-7154</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail strokeWidth={2} size={30} color="#216B8D" aria-hidden="true"/>
                <a href="mailto:info@valencia-school.edu.hn" className="hover:underline">info@valencia-school.edu.hn</a>
              </p>
            </address>
          </div>

          {/* Enlaces rápidos */}
          <nav aria-label="Enlaces rápidos" className="space-y-4">
            <h2 className="text-lg font-semibold text-valencia-blue">Enlaces rápidos</h2>
            <div className="space-y-2">
              <a href="/" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Inicio</a>
              <a href="/nosotros" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Nosotros</a>
              <a href="/sede-principal" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Sede Principal</a>
              <a href="/sede-sur" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Sede Sur</a>
              <a href="/#contacto" className="hover:font-bold block text-black/80 hover:text-valencia-yellow transition-colors">Contacto</a>
            </div>
          </nav>
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