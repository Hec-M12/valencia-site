import Image from 'next/image';
import valenciaLogo from '@/public/images/logos/valencia-logo.png';

export default function HeroHomePage() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[52vh] md:min-h-[56vh] lg:min-h-[64vh] items-center overflow-hidden py-12 md:py-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgrounds/liquid-cheese.png')" }}
      >
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 container mx-auto w-full px-6">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center">
          <div>
            <h1 className="font-urbanist font-bold text-valencia-blue leading-tight">
              <span className="block text-4xl md:text-5xl lg:text-5xl xl:text-6xl">EDUCANDO</span>
              <span className="block text-3xl md:text-3xl lg:text-3xl font-medium mt-1">Y</span>
              <span className="block text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-1">TRANSFORMANDO</span>
              <span className="block text-2xl md:text-2xl lg:text-3xl font-medium mt-1">GENERACIONES</span>
            </h1>

            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/50494387154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-valencia-green px-8 py-4 font-urbanist font-semibold text-base md:text-lg text-white shadow-lg shadow-valencia-green/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-valencia-green/90 hover:shadow-xl hover:shadow-valencia-green/40 focus:outline-none focus:ring-4 focus:ring-valencia-green/40"
              >
                Inscribe a tu hijo
              </a>
              <a
                href="#sedes"
                className="inline-flex items-center justify-center rounded-full border-2 border-valencia-blue bg-transparent px-8 py-4 font-urbanist font-semibold text-base md:text-lg text-valencia-blue transition-all duration-200 hover:-translate-y-0.5 hover:bg-valencia-blue hover:text-white hover:shadow-lg hover:shadow-valencia-blue/30 focus:outline-none focus:ring-4 focus:ring-valencia-blue/30"
              >
                Conoce nuestras sedes
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <Image
                src={valenciaLogo}
                alt="Valencia School Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
