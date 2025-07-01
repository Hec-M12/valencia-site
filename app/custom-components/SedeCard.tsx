// app/custom-components/SedeCard.tsx
'use client'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';

interface SedeCardProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export default function SedeCard({ name, address, lat, lng }: SedeCardProps) {
  const markerIcon = new L.Icon({
    iconUrl: markerIconPng.src,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  });

  return (
    <div className="bg-white/70 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h4 className="text-xl font-semibold text-center text-valencia-blue mb-2">{name}</h4>
        <p className="text-gray-600 text-center mb-4">{address}</p>
        {/* Mapa */}
        <MapContainer
          center={[lat, lng]}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-48 rounded-md"
        >
          <TileLayer
            // OpenStreetMap estándar; puedes cambiar por Mapbox o Stamen
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[lat, lng]} icon={markerIcon} />
        </MapContainer>
      </div>
    </div>
  );
}