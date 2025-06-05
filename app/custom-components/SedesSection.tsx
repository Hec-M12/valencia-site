import SedeCard from "./SedeCard"

export default function Sedes(){
  return(
    <section id="ubicaciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-blue mb-4">Nuestras sedes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con dos sedes estratégicamente ubicadas para brindar educación de calidad en diferentes zonas de
              la ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SedeCard nombre="Sede Central" descripcion="Nuestra sede principal con todas las facilidades educativas" ubicacion="Col. Palmira, Tegucigalpa" />
            <SedeCard nombre="Sede Santa Lucía" descripcion="Campus moderno con instalaciones de última generación" ubicacion="Col. Palmira, Tegucigalpa" />
            
          </div>
        </div>
      </section>

    
  )
}