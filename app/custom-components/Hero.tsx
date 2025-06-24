import Image from 'next/image';
import heroImage from '@/public/assets/images/hero/hero-bg.png';
import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        {/* Preload de la imagen */}
        <link
          rel="preload"
          href="/assets/images/hero/hero-bg.jpg"
          as="image"
          type="image/webp"
        />
      </Head>
      <section id="inicio" 
        className="
          relative h-[60vh] 
          md:h-[75vh] 
          lg:h-[85vh] lg:w-[101vw]
          flex 
          items-center 
          justify-center
      ">
        {/* Fondo optimizado */}
         <Image
           src={heroImage}
           alt="Hero image"
           fill
           priority
           quality={75}
           placeholder="blur"
           sizes="100vw"
           loading="eager"
           className="object-cover"
           style={{objectPosition: '60% 35%'}}
         />  
        {/* Overlay legibilidad */}
        <div className="absolute inset-0 bg-white bg-opacity-30" />

        {/* Texto */}
          <h1
            className="
              relative z-10
              text-white text-center
              font-bold
              text-4xl md:text-6xl
              drop-shadow-lg
              px-4
              lg:-translate-x-1
              transform
            "
          >
            Educando y transformando generaciones
          </h1>
      </section>
    </>
  );
}
