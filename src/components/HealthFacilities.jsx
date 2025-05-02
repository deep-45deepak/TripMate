import React, { useEffect, useState } from "react";

const HealthFacilities = ({ city = "Delhi" }) => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFacilities = async () => {
    setLoading(true);
    setError("");

    try {
      // Step 1: Get coordinates from city name using Nominatim
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
      );
      const geoData = await geoRes.json();
      if (!geoData || geoData.length === 0) throw new Error("City not found");

      const { lat, lon } = geoData[0];

      // Step 2: Fetch hospitals using Overpass API
      const query = `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:10000,${lat},${lon});
          way["amenity"="hospital"](around:10000,${lat},${lon});
          relation["amenity"="hospital"](around:10000,${lat},${lon});
        );
        out center;
      `;
      const res = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      });
      const data = await res.json();

      const names = data.elements
        .map((el) => el.tags && el.tags.name)
        .filter(Boolean)
        .slice(0, 7);

      setFacilities(names);
    } catch (err) {
      setError("Could not fetch health facilities");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFacilities();
  }, [city]);

  return (
    <section className="h-full">

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ul className="space-y-3 h-full overflow-y-auto pr-2">
          {facilities.length > 0 ? (
            facilities.map((name, index) => (
              <li
                key={index}
                className={`transition p-3 rounded-lg shadow-sm ${
                  index % 2 === 0
                    ? "bg-teal-100 hover:bg-teal-200"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
              >
                🏥 {name}
              </li>
            ))
          ) : (
            <li className="text-center text-gray-600">
              No facilities found nearby.
            </li>
          )}
        </ul>
      )}
    </section>
  );
};

export default HealthFacilities;
