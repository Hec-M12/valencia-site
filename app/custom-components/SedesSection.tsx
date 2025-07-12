import React from "react"
import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/images/marker-shadow.png"  
import SedeCard from "./SedeCard"

export default function Sedes(){
  return(
    <section id="ubicaciones" className="md:py-16 lg:py-16 py-16
    bg-gradient-to-b from-gray-50 to-slate-100 border-t border-b border-gray-200
    ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-semibold font-weight-400 text-valencia-blue filter drop-shadow-stone-lg mb-4 ">Siempre cerca de ti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto filter drop-shadow-lg ">
              Contamos con dos sedes estratégicamente ubicadas para brindar educación de calidad en diferentes zonas de
              la ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SedeCard name="Sede Principal" address="Ubicada en Residencial Valencia: la primera sede que dio vida a Valencia School" href="#"/>
            <SedeCard name="Sede Sur" address="Nuestro moderno campus en Los Hidalgos, inaugurado a principios de 2025" href="#"/>
          </div>
        </div>
      </section>

    
  )
}