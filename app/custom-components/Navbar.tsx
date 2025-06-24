"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-insituto-blue sticky p-2 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-29">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/images/logos/valencia-logo.png?height=60&width=160"
              alt="Instituto Valencia Logo"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Inicio */}
              <Link href="/">
                <span className="nav-link">Inicio</span>
              </Link>
              {/* Nosotros */}
              <Link href="/nosotros">
                <span className="nav-link">Nosotros</span>
              </Link>
              {/* Ubicaciones */}
              <Link href="/ubicaciones">
                <span className="nav-link">Ubicaciones</span>
              </Link>
              {/* Contacto */}
              <Link href="/contacto">
                <span className="nav-link">Contacto</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-valencia-yellow">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-valencia-blue">
              <a
                href="#inicio"
                className="block px-3 py-2 hover:text-valencia-yellow transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 hover:text-valencia-yellow transition-colors duration-200"
              >
                Nosotros
              </a>
              <a
                href="#ubicaciones"
                className="block px-3 py-2 hover:text-valencia-yellow transition-colors duration-200"
              >
                Ubicaciones
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 hover:text-valencia-yellow transition-colors duration-200"
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