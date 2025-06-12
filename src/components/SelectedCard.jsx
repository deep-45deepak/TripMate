import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaRupeeSign
} from "react-icons/fa";
import { useTrips } from "../context/TripsContext";

const SelectedCard = ({ selectedId, city }) => {
  const { recommendations = [] } = useTrips();
  const selectedTrip = recommendations.find(trip => trip.id === selectedId);
  // console.log("Selected Trip:", selectedTrip);

  if (!selectedTrip) {
    return (
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 text-center">
        <p>Trip details not found</p>
      </div>
    );
  }

  // Extract city name from location if city prop is not available
  const displayCity =
    city ||
    (selectedTrip.location && selectedTrip.location.split(',')[0].trim()) ||
    'Unknown Location';

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6">
      <div className="relative">
        <img
          src={
            selectedTrip.image ||
            `https://source.unsplash.com/random/600x400/?${displayCity}`
          }
          alt={selectedTrip.name}
          className="h-48 w-full object-cover rounded-t-3xl"
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop
            e.target.src =
              "https://source.unsplash.com/random/600x400/?travel";
          }}
        />
        <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl text-lg">
          {selectedTrip.rating || "4.5"}
          <FaStar className="inline-block text-yellow-400 ml-1" />
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <h2 className="text-2xl font-semibold">{selectedTrip.name}</h2>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-300" />
          <span>{displayCity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {selectedTrip.numberOfDays || "N/A"} Days
          </span>
          <span className="flex items-center gap-1">
            <FaRupeeSign className="text-yellow-300" />
            ₹{selectedTrip.price || "N/A"}
          </span>
        </div>

        <div className="pt-4 border-t border-white border-opacity-20">
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-sm">
            {selectedTrip.description ||
              `Experience the beauty of ${displayCity} with our carefully crafted tour package.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
