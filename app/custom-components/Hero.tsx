import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="bg-instituto-gray py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-instituto-blue leading-tight">
                Educando y tranformando generaciones
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
  )
}