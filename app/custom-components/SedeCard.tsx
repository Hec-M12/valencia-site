"use client";

interface SedeCardProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
  googleMapsUrl?: string;
}

export default function SedeCard({ name, address, lat, lng, googleMapsUrl }: SedeCardProps) {
  return (
    <div className="bg-stone-100 rounded-lg shadow-lg overflow-hidden border border-gray-250 hover:shadow-2xl transition-shadow duration-300">
      <div className="p-8">
        <h4 className="text-xl font-semibold text-center text-valencia-blue mb-2">{name}</h4>
        <p className="text-gray-600 text-center mb-4">{address}</p>
        <div className="w-full h-80 rounded-md overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.001},${lat - 0.001},${lng + 0.001},${lat + 0.001}&layer=mapnik&marker=${lat},${lng}`}
            allowFullScreen
          />
        </div>
        <div className="mt-2 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-valencia-blue nav-link hover:font-semibold"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}