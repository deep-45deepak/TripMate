// App.jsx
import React, { useState } from "react";
import { CitySelector } from "./components/CitySelector";
import { FacilityList } from "./components/FacilityList";

export default function App() {
  const [facilities, setFacilities] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Nearby Health Facilities
      </h1>
      <CitySelector setFacilities={setFacilities} />
      <FacilityList facilities={facilities} />
    </div>
  );
}

// components/CitySelector.jsx
import React from "react";

const cityCoordinates = {
  Jaipur: { lat: 26.9124, lng: 75.7873 },
  Delhi: { lat: 28.6139, lng: 77.209 },
  Mumbai: { lat: 19.076, lng: 72.8777 },
};

export function CitySelector({ setFacilities }) {
  const handleCityChange = async (e) => {
    const city = e.target.value;
    if (!city) return;
    const { lat, lng } = cityCoordinates[city];
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=YOUR_API_KEY`
    );
    const data = await response.json();
    setFacilities(data.results || []);
  };

  return (
    <div className="flex justify-center mb-6">
      <select
        onChange={handleCityChange}
        className="border border-gray-300 rounded-xl px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select a city</option>
        {Object.keys(cityCoordinates).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

// components/FacilityList.jsx
import React from "react";

export function FacilityList({ facilities }) {
  if (!facilities.length)
    return <p className="text-center text-gray-600">No facilities to show.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.02] transition-transform"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            {facility.name}
          </h2>
          <p className="text-gray-700 text-sm">{facility.vicinity}</p>
          {facility.rating && (
            <p className="text-yellow-600 text-sm">Rating: {facility.rating}</p>
          )}
          {facility.opening_hours && (
            <p className="text-sm text-green-600">
              {facility.opening_hours.open_now ? "Open Now" : "Closed"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
