import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Award, Users, Globe, GraduationCap} from "lucide-react"

interface Props {
  nombre: string;
  descripcion: string;
  icono: React.ReactNode;
  bullet1: string;
  bullet2: string;
  bullet3: string;
}

export default function SistemaEducativoCard({nombre, descripcion, icono, bullet1, bullet2, bullet3}: Props){
  return(
    <Card className="bg-white border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    {icono}
                  </div>
                  <CardTitle className="text-2xl font-bold font-heading text-valencia-blue">{nombre}</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  {descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">{bullet1}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">{bullet2}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-600">{bullet3}</p>
                </div>
              </CardContent>
            </Card>
  )
}