import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's marker icon paths in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const TripMapSection = ({ coor }) => {
  if (!coor || !coor.latitude || !coor.longitude) {
    return <p className="text-red-500">Coordinates not available.</p>;
  }

  const position = [coor.latitude, coor.longitude];
  // console.log(`Position is ${coor.latitude}, ${coor.longitude}`);

  return (
    <section className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
      <h2 className="text-xl font-semibold text-teal-700 mb-4">🗺️ Your Trip Map</h2>
      <div className="w-full h-64 rounded-xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              You're here! <br /> Latitude: {coor.latitude}, Longitude: {coor.longitude}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default TripMapSection;
