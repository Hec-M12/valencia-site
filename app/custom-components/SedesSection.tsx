import React from "react"
import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/images/marker-shadow.png"  
import SedeCard from "./SedeCard"

export default function Sedes(){
  return(
    <section id="ubicaciones" className="pb-12 
    bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    md:bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    lg:bg-[linear-gradient(to_top,_white_0%,_white_40%,_theme(colors.blue-gradient)_98%)] lg:mx-auto transform translate-y-[-1px]
    ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-body font-semibold font-weight-400 text-white drop-shadow-md mb-4 ">Siempre cerca de ti</h2>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md font-semibold">
              Contamos con dos sedes estratégicamente ubicadas para brindar educación de calidad en diferentes zonas de
              la ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SedeCard name="Sede Principal" address="Ubicada en el Hato: la primera sede que dio vida a Valencia School" lat={14.0819446} lng={-87.2057357} googleMapsUrl="https://maps.app.goo.gl/SNuHibHfF2Ta1XoH8" />
            <SedeCard name="Sede Sur" address="Nuestro nuevo campus en los Hidalgos, operativo desde 2025" lat={14.0465679} lng={-87.2549117} googleMapsUrl="https://maps.app.goo.gl/oi5HQ3ekELcMbZdu6" />
          </div>
        </div>
      </section>

    
  )
}