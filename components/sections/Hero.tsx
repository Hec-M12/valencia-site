import Image from 'next/image';
import heroImage from '@/public/images/hero/hero-transparent-bg.png';
import Head from 'next/head';
import { motion } from 'framer-motion';

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
        className="relative max-w-full overflow-x-hidden h-[50vh] md:h-[60vh] lg:h-[85vh] flex items-center justify-center shadow-md"
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
        <motion.h1
          initial={{ opacity: 0 }}
					whileInView="visible"
          animate={{ opacity: 1}}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 1 }}
          className="
            absolute top-8 right-0 md:top-8 lg:relative lg:top-auto lg:right-auto
            max-w-full w-[55%] md:w-[40%] lg:w-[40%]
            text-valencia-blue text-right
            tracking-tight
            text-shadow
            sm:leading-[1.2]
            font-bold
            text-l md:text-4xl lg:text-5xl
            drop-shadow-lg
            font-urbanist
            px-4
            [@media(min-width:1020px)_and_(max-width:1250px)_and_(min-height:700px)]:translate-x-[60%]
            [@media(min-width:1020px)_and_(max-width:1250px)_and_(min-height:700px)]:-translate-y-[100%]
            transform lg:translate-x-[60%] lg:-translate-y-[55%]
            md:leading-[1.2] md:translate-x-[-15%]
            lg:leading-[1.35]
            overflow-x-hidden
          "
        >
          Educando y Transformando Generaciones
        </motion.h1>

        {/* Imagen en la parte inferior para sm y md */}
        <div className="block lg:hidden absolute bottom-0 left-0 w-full h-full z-0 overflow-x-hidden">
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
