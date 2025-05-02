import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import DomesticTrip from "../assets/DomesticTrip.json";
import ForeignTrip from "../assets/ForeignTrip.json";

const SelectedCard = ({ selectedId }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (!selectedId) return;

    const idStr = String(selectedId);
    const isForeign = idStr.includes("F");
    const trips = isForeign ? ForeignTrip : DomesticTrip;

    const selectedTrip = trips.find((trip) => String(trip.id) === idStr);

    if (selectedTrip) {
      setTrip(selectedTrip);
    }
  }, [selectedId]);

  // Optional fallback content
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
          src={trip.image}
          alt={trip.name}
          className="h-48 w-full object-cover rounded-t-3xl"
        />
        <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl text-lg">
          {trip.rating} <FaStar className="inline-block text-yellow-400 ml-1" />
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
