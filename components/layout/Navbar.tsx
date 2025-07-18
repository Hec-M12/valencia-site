"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
      duration: 0.25,
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.01,
      staggerDirection: -1,
      duration: 0.25,
    }
  }
};

const textVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1}
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.1}
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white text-insituto-blue sticky p-5 z-30 border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-29">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logos/valencia-logo.png?height=60&width=160"
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
              <Link
                href="/"
                className={`
                  nav-link
                  hover:font-bold
                  text-valencia-blue
                  ${pathname === "/" ? "font-bold text-valencia-blue" : ""}
                `}
              >
                Inicio
              </Link>
              {/* Nosotros */}
              <Link
                href="/nosotros"
                className={`
                  nav-link
                  hover:font-bold
                  text-valencia-blue
                  ${
                    pathname === "/nosotros"
                      ? "font-bold text-valencia-blue"
                      : ""
                  }
                `}
              >
                Nosotros
              </Link>
              {/* Sede Principal */}
              <Link
                href="/sede-principal"
                className={`
                  nav-link
                  hover:font-bold
                  text-valencia-blue
                  ${
                    pathname === "/sede-principal"
                      ? "font-bold text-valencia-blue"
                      : ""
                  }
                `}
              >
                Sede Principal
              </Link>
              {/* Sede Sur */}
              <Link
                href="/sede-sur"
                className={`
                  nav-link
                  hover:font-bold
                  text-valencia-blue
                  ${
                    pathname === "/sede-sur"
                      ? "font-bold text-valencia-blue"
                      : ""
                  }
                `}
              >
                Sede Sur
              </Link>
              {/* Contacto */}
              <Link
                href="/#contacto"
                className={`
                  nav-link
                  hover:font-bold
                  text-valencia-blue
                  ${
                    pathname === "/#contacto"
                      ? "font-bold text-valencia-blue"
                      : ""
                  }
                `}
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-valencia-blue hover:text-valencia-yellow"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div variants={textVariants} className="px-2 pt-3 pb-1 space-y-1 sm:px-3 bg-white text-valencia-blue">
                <Link
                  href="/"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/nosotros" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Nosotros
                </Link>
                <Link
                  href="/sede-principal"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/sede-principal" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Sede Principal
                </Link>
                <Link
                  href="/sede-sur"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/sede-sur" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Sede Sur
                </Link>
                <Link
                  href="/extracurriculares"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/extracurriculares" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Extracurriculares
                </Link>
                <Link
                  href="/#contacto"
                  className={`
                    nav-link
                    hover:font-bold
                    text-valencia-blue
                    block px-3 py-2 transition-colors duration-200
                    ${pathname === "/#contacto" ? "font-bold text-valencia-blue" : ""}
                  `}
                >
                  Contacto
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
