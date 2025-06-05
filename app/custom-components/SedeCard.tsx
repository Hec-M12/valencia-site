import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface Props {
  nombre: string;
  descripcion: string;
  ubicacion: string;
}

export default function SedeCard({ nombre, descripcion, ubicacion }: Props){
  return(
  <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-instituto-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <MapPin className="text-instituto-blue" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-instituto-blue">{nombre}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{ubicacion}</p>
                  <Button
                    variant="outline"
                    className="border-instituto-blue text-instituto-blue hover:bg-instituto-blue hover:text-white"
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
  )
}