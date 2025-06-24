import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Award, Users, Globe, GraduationCap} from "lucide-react"
import SistemaEducativoCard from "./SistemaEducativoCard"

export default function SistemasEducativos(){
  return(
    <section className="py-20 bg-valencia-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-valencia-blue mb-4">Dos sistemas, una misma excelencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos dos modalidades educativas para adaptarnos a las necesidades y aspiraciones de cada familia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sistema Nacional */}
            <SistemaEducativoCard 
              nombre="Sistema Nacional" 
              descripcion="Currículo oficial hondureño con enfoque en valores" 
              icono={<GraduationCap className="text-green-600" size={32} />} 
              bullet1="Programa académico aprobado por la Secretaría de Educación" 
              bullet2="Formación integral con énfasis en valores cristianos" 
              bullet3="Preparación para universidades nacionales" 
            />

            {/* Sistema Anglosajón */}
            <Card className="bg-white border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Globe className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold font-heading text-valencia-blue">Sistema Anglosajón</CardTitle>
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
  )
}
