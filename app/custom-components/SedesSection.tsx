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
            <h2 className="text-4xl font-body font-semibold font-weight-400 text-white mb-4">Nuestras sedes</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Contamos con dos sedes estratégicamente ubicadas para brindar educación de calidad en diferentes zonas de
              la ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SedeCard name="Sede Central" address="Nuestra sede principal con todas las facilidades educativas" lat={14.1234} lng={-87.1234} />
            <SedeCard name="Sede Santa Lucía" address="Campus moderno con instalaciones de última generación" lat={14.5678} lng={-87.5678} />
          </div>
        </div>
      </section>

    
  )
}