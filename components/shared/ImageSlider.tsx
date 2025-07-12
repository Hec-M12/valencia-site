"use client"

import React from "react"
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
}

export default function ImageSlider({ images, className = "" }: ImageSliderProps) {
  return (
    <Carousel className={`w-full max-w-4xl mx-auto ${className}`}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video w-full">
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}