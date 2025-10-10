import Image from 'next/image';
import heroTransparent from '@/public/images/hero/hero-transparent-bg.png';

export default function HeroSedeSur() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-white border-b border-valencia-blue/15 shadow-[0_12px_28px_-16px_rgba(0,55,110,0.35)]">
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <div className="relative flex w-full justify-start">
          <div className="relative w-full min-h-[20rem] -translate-x-4 sm:-translate-x-6 md:w-[75%] md:min-h-[28rem] md:-translate-x-8 lg:w-[70%] lg:min-h-[34rem] lg:-translate-x-12 xl:-translate-x-16">
            <Image
              src={heroTransparent}
              alt="Campus Valencia Sede Sur"
              fill
              className="object-contain object-left-bottom translate-x-[-20%] md:translate-x-[0%] lg:translate-x-[0%]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 60vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-end px-4 pt-10 sm:px-6 sm:pt-12 md:px-12 md:pt-10 lg:px-20 lg:pt-12">
            <h1 className="font-urbanist text-[2.5rem] font-semibold text-valencia-blue sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
              Sede Sur
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
