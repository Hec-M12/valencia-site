import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
export interface MapComponentProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  return (
    <div className="w-full h-80 rounded-md overflow-hidden">
      <iframe
        width="100%"
        height="100%"
            frameBorder="0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.001},${lat - 0.001},${lng + 0.001},${lat + 0.001}&layer=mapnik&marker=${lat},${lng}`}
            allowFullScreen
          />
        </div>
  );
};

//https://maps.app.goo.gl/SNuHibHfF2Ta1XoH8 
//https://maps.app.goo.gl/oi5HQ3ekELcMbZdu6
export default MapComponent;
