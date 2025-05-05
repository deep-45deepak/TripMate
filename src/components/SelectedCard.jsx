import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaRupeeSign
} from "react-icons/fa";
import { useTrips } from "../context/TripsContext";

const SelectedCard = ({ selectedId }) => {
  const { domesticTrips, foreignTrips, loading } = useTrips();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (!selectedId) return;

    const idStr = String(selectedId).trim();
    const isForeign = idStr.includes("F") || idStr.includes("INT");
    const trips = isForeign ? foreignTrips : domesticTrips;

    const selectedTrip = trips.find((trip) => String(trip.id) === idStr);
    setTrip(selectedTrip || null);
  }, [selectedId, domesticTrips, foreignTrips]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-xl font-semibold text-gray-600 animate-pulse">
            Loading trips...
          </div>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="max-w-sm p-6 rounded-3xl shadow-xl text-center bg-gray-100 text-gray-500">
        <p>No trip selected</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6">
      <div className="relative">
        <img
          src={trip.image || "/fallback-image.jpg"} // fallback if image is null
          alt={trip.name}
          className="h-48 w-full object-cover rounded-t-3xl"
        />
        <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl text-lg">
          {trip.rating}
          <FaStar className="inline-block text-yellow-400 ml-1" />
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <h2 className="text-2xl font-semibold">{trip.name}</h2>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-300" />
          <span>{trip.location}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {trip.days} Days
          </span>
          <span className="flex items-center gap-1">
            <FaRupeeSign className="text-yellow-300" /> {trip.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;

