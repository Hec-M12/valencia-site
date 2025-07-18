"use client";

import React from "react";
import Image from "next/image";

interface DivisionHeroProps {
  heading: React.ReactNode;
  src: string;
}

export default function DivisionHero({ heading, src }: DivisionHeroProps) {
  return (
    <section
      className="relative bg-white md:flex md:items-center opacity-90"
      style={{
        backgroundImage: "url('images/backgrounds/large-triangles.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "225px 225px",
      }}
    >
      {/* Icono de fondo con baja opacidad */}
      <div className="hidden md:flex md:static md:flex-shrink-0 md:opacity-100 md:w-1/2 md:justify-center opacity-25">
        {/* Owl for desktop */}
        <Image
          src={src}
          alt="Búho Valencia"
          width={400}
          height={400}
          className="hidden md:block lg:block xl:block 2xl:block"
        />
      </div>
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto pt-8 px-6 text-center md:py-32 md:text-left md:mx-0 md:px-10 md:w-1/2">
        <h1 className="text-6xl md:text-8xl font-urbanist text-white">
          {heading}
        </h1>
      </div>
      {/* Owl below title on mobile */}
      <div className="block md:hidden flex justify-center pt-4 pb-4">
        <Image src={src} alt="Búho Valencia" width={275} height={275} />
      </div>
    </section>
  );
}
