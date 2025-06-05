"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X, MapPin, Phone, Mail, MessageCircle, GraduationCap, Globe, Users, Award } from "lucide-react"
import Image from "next/image"

export default function InstitutoValencia() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section id="inicio" className="bg-instituto-gray py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-instituto-blue leading-tight">
                Educación de calidad con valores
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Formamos líderes del mañana a través de una educación bilingüe integral, fundamentada en valores
                cristianos y excelencia académica.
              </p>
              <Button className="bg-instituto-blue hover:bg-instituto-blue/90 text-white px-8 py-3 text-lg font-semibold">
                Explorar
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Estudiantes felices del Instituto Valencia"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sedes Section */}
      <section id="ubicaciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-blue mb-4">Nuestras sedes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con tres sedes estratégicamente ubicadas para brindar educación de calidad en diferentes zonas de
              la ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sede Central */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-instituto-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="text-instituto-blue" size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-instituto-blue">Sede Central</CardTitle>
                <CardDescription className="text-gray-600">
                  Nuestra sede principal con todas las facilidades educativas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Col. Palmira, Tegucigalpa</p>
                <Button
                  variant="outline"
                  className="border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>

            {/* Sede Santa Lucía */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-instituto-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="text-instituto-blue" size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-instituto-blue">Sede Santa Lucía</CardTitle>
                <CardDescription className="text-gray-600">
                  Campus moderno con instalaciones de última generación
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Santa Lucía, Francisco Morazán</p>
                <Button
                  variant="outline"
                  className="border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>

            {/* Sede El Hatillo */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-instituto-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="text-instituto-blue" size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-instituto-blue">Sede El Hatillo</CardTitle>
                <CardDescription className="text-gray-600">
                  Ambiente natural ideal para el desarrollo integral
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">El Hatillo, Francisco Morazán</p>
                <Button
                  variant="outline"
                  className="border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sistemas Educativos */}
      <section className="py-20 bg-instituto-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-blue mb-4">Dos sistemas, una misma excelencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos dos modalidades educativas para adaptarnos a las necesidades y aspiraciones de cada familia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sistema Nacional */}
            <Card className="bg-white border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <GraduationCap className="text-green-600" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-instituto-blue">Sistema Nacional</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Currículo oficial hondureño con enfoque en valores
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">Programa académico aprobado por la Secretaría de Educación</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">Formación integral con énfasis en valores cristianos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">Preparación para universidades nacionales</p>
                </div>
              </CardContent>
            </Card>

            {/* Sistema Anglosajón */}
            <Card className="bg-white border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Globe className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-instituto-blue">Sistema Anglosajón</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Educación bilingüe con estándares internacionales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-600">Certificación internacional reconocida mundialmente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-600">Inmersión total en inglés con profesores nativos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-600">Preparación para universidades internacionales</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-blue mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para resolver todas tus dudas y acompañarte en el proceso de inscripción de tu hijo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Botones de contacto rápido */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-instituto-blue mb-6">Contacto directo</h3>

              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold flex items-center justify-center space-x-3">
                  <MessageCircle size={24} />
                  <span>WhatsApp: +504 9999-9999</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white py-4 text-lg font-semibold flex items-center justify-center space-x-3"
                >
                  <Phone size={24} />
                  <span>Teléfono: +504 2222-2222</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white py-4 text-lg font-semibold flex items-center justify-center space-x-3"
                >
                  <Mail size={24} />
                  <span>info@institutovalencia.edu.hn</span>
                </Button>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-instituto-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-instituto-blue mb-6">Envíanos tu consulta</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <Input id="nombre" type="text" placeholder="Tu nombre completo" className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea id="mensaje" placeholder="Escribe tu consulta aquí..." rows={4} className="w-full" />
                </div>

                <Button className="w-full bg-instituto-blue hover:bg-instituto-blue/90 text-white py-3 text-lg font-semibold">
                  Enviar consulta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-gray-300">
                Formando líderes del mañana con educación bilingüe de calidad y valores cristianos.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-instituto-yellow">Información de contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Col. Palmira, Tegucigalpa, Honduras</p>
                <p>📞 +504 2222-2222</p>
                <p>📱 +504 9999-9999</p>
                <p>✉️ info@institutovalencia.edu.hn</p>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-instituto-yellow">Enlaces rápidos</h4>
              <div className="space-y-2">
                <a href="#inicio" className="block text-gray-300 hover:text-instituto-yellow transition-colors">
                  Inicio
                </a>
                <a href="#nosotros" className="block text-gray-300 hover:text-instituto-yellow transition-colors">
                  Nosotros
                </a>
                <a href="#ubicaciones" className="block text-gray-300 hover:text-instituto-yellow transition-colors">
                  Ubicaciones
                </a>
                <a href="#contacto" className="block text-gray-300 hover:text-instituto-yellow transition-colors">
                  Contacto
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">© Instituto Valencia 2025. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
