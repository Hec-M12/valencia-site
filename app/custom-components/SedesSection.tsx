import React from "react"
import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/images/marker-shadow.png"  
import SedeCard from "./SedeCard"

export default function Sedes(){
  return(
    <section id="ubicaciones" className="md:py-20 lg:py-20 pb-20
    bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    md:bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    lg:bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-semibold font-weight-400 text-white drop-shadow-md mb-4 ">Siempre cerca de ti</h2>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md font-semibold">
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