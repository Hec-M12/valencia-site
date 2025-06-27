import Image from 'next/image';
import heroImage from '@/public/assets/images/hero/hero-transparent-bg.png';
import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        {/* Preload de la imagen */}
        <link
          rel="preload"
          href="/assets/images/hero/hero-transparent-bg.png"
          as="image"
          type="image/webp"
        />
      </Head>
      <section id="inicio" 
        className="relative w-screen h-[50vh] md:h-[60vh] lg:h-[85vh] overflow-hidden flex items-center justify-center"
      >
        {/* Fondo optimizado como background en lg+ */}
        <Image
          src={heroImage}
          alt="Hero image"
          priority
          quality={50}
          sizes="100vw"
          loading="eager"
          className="hidden lg:block absolute inset-0 w-full h-full object-contain object-left z-0"
          style={{ width: '100%', height: '100%' }}
        />    

        {/* Texto centrado sobre la imagen */}
        <h1
          className="
            absolute top-8 right-0 md:top-8 lg:relative lg:top-auto lg:right-auto
            w-[65%] md:w-[55%] lg:w-[40%]
            text-valencia-blue text-right
            tracking-tight
            text-shadow
            sm:leading-[1.2]
            font-bold
            text-l md:text-4xl lg:text-5xl
            drop-shadow-lg
            font-urbanist
            px-4
            [@media(min-width:1020px)_and_(max-width:1250px)_and_(min-height:700px)]:translate-x-[65%]
            [@media(min-width:1020px)_and_(max-width:1250px)_and_(min-height:700px)]:-translate-y-[100%]
            transform lg:translate-x-[65%] lg:-translate-y-[55%]
            md:leading-[1.2] md:translate-x-[-10%]
            lg:leading-[1.35]
          "
        >
          Educando y Transformando Generaciones
        </h1>

        {/* Imagen en la parte inferior para sm y md */}
        <div className="block lg:hidden absolute bottom-0 left-0 w-full h-full z-0">
          <Image
            src={heroImage}
            alt="Hero image"
            priority
            fill
            quality={50}
            sizes="100vw"
            loading="eager"
            className="
            h-auto 
            object-cover 
            object-[80%_20%] 
            "
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>
    </>
  );
}
