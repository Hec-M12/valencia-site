"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ImageSliderProps {
  images: string[]
  className?: string
  /** Alt base para cada slide; se concatena con el índice para formar el alt final. */
  altBase?: string
}

export default function ImageSlider({ images, className = "", altBase = "Instalaciones de Valencia School" }: ImageSliderProps) {
  const carouselApi = useRef<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!carouselApi.current) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (carouselApi.current) {
        carouselApi.current.scrollNext();
      }
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [carouselApi.current])

  return (
    <Carousel
      className={`w-full md:max-w-xl lg:max-w-xl max-w-lg mx-auto ${className}`}
      setApi={api => {
        carouselApi.current = api;
      }}
      opts={{ loop: true }}
      aria-roledescription="carrusel"
      aria-label={altBase}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            aria-roledescription="diapositiva"
            aria-label={`Diapositiva ${index + 1} de ${images.length}`}
          >
            <div className="relative aspect-square w-full mx-auto">
              <Image
                src={image}
                alt={`${altBase} — imagen ${index + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:-ml-8 lg:-ml-12" aria-label="Diapositiva anterior" />
      <CarouselNext className="md:-mr-8 lg:-mr-12" aria-label="Siguiente diapositiva" />
    </Carousel>
  )
}