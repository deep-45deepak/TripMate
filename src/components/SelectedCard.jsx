import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";

const ManaliCard = () => {
  const trip = {
    id: 1,
    name: "Manali Adventure",
    location: "Himachal Pradesh",
    days: 5,
    price: 12000,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6">
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.name}
          className="h-48 w-full object-cover rounded-t-3xl"
        />
        <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl text-lg">
          {trip.rating} <FaStar className="inline-block text-yellow-400" />
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

export default ManaliCard;
