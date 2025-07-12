"use client";

import React from "react";
import MapComponent from "@/components/ui/MapComponent";

export interface LocationComponentProps {
  address: string;
  lat: number;
  lng: number;
  gMapsUrl?: string;
  wazeUrl?: string;
}

export default function LocationSection({
  address,
  lat,
  lng,
  gMapsUrl,
  wazeUrl,
}: LocationComponentProps) {
  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4 text-valencia-blue">
        Ubicación
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-lg text-center text-gray-700 mb-8">{address}</p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <MapComponent lat={lat} lng={lng} />
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href={gMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-valencia-blue text-white px-4 py-2 rounded"
          >
            Google Maps
          </a>
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-valencia-blue text-white px-4 py-2 rounded"
          >
            Waze
          </a>
        </div>
      </div>
    </section>
  );
}
