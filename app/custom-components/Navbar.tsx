"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-instituto-blue text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Instituto Valencia Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="hover:text-instituto-yellow transition-colors duration-200 font-medium">
                Inicio
              </a>
              <a href="#nosotros" className="hover:text-instituto-yellow transition-colors duration-200 font-medium">
                Nosotros
              </a>
              <a
                href="#ubicaciones"
                className="hover:text-instituto-yellow transition-colors duration-200 font-medium"
              >
                Ubicaciones
              </a>
              <a href="#contacto" className="hover:text-instituto-yellow transition-colors duration-200 font-medium">
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-instituto-yellow">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-instituto-blue">
              <a
                href="#inicio"
                className="block px-3 py-2 hover:text-instituto-yellow transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 hover:text-instituto-yellow transition-colors duration-200"
              >
                Nosotros
              </a>
              <a
                href="#ubicaciones"
                className="block px-3 py-2 hover:text-instituto-yellow transition-colors duration-200"
              >
                Ubicaciones
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 hover:text-instituto-yellow transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}