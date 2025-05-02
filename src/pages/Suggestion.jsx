import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import TopDestination from '../components/TopDestination'
import SuggestionHeader from '../components/Suggestion.header';
import DomesticTrip from '../assets/DomesticTrip.json'
import ForeignTrip from '../assets/ForeignTrip.json'

const domesticTrips = DomesticTrip.sort(() => 0.5 - Math.random());
const foreignTrips = ForeignTrip.sort(() => 0.5 - Math.random());

const TripSuggestions = () => {
  const [selectedDomesticId, setSelectedDomesticId] = useState(null);
  const [selectedForeignId, setSelectedForeignId] = useState(null);
  const [city, setCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  

  // Filter domesticTrips based on search term (case-insensitive match)
  const filteredDomesticTrips = domesticTrips.filter(trip =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Filter domesticTrips based on search term (case-insensitive match)
  const filteredForeignTrips = foreignTrips.filter(trip =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(foreignTrips);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SuggestionHeader />


      <section
        className="hero text-center py-20 bg-cover bg-center text-white"
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">
          Millions Of Experiences. <br /> One Simple Search.
        </h1>
        <p className="text-lg mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">Find and book your next happy adventure anywhere.</p>
        <div className="mt-6 flex justify-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search domesticTrips by name or location..."
            className="px-4 py-2 w-1/2 rounded-full mr-4 border-none outline-none text-black bg-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700">Search</button>
        </div>
      </section>

      <section className="features grid grid-cols-1 md:grid-cols-4 gap-6 p-10 text-center">
        <div className="p-4 bg-green-500 shadow-lg rounded-lg text-white">
          <h3 className="font-semibold">Discover Breathtaking Locations</h3>
        </div>
        <div className="p-4 bg-blue-500 shadow-lg rounded-lg text-white">
          <h3 className="font-semibold">Enjoy deals & delights</h3>
        </div>
        <div className="p-4 bg-purple-500 shadow-lg rounded-lg text-white">
          <h3 className="font-semibold">Exploring made easy</h3>
        </div>
        <div className="p-4 bg-red-600 shadow-lg rounded-lg text-white">
          <h3 className="font-semibold">Travel your way</h3>
        </div>
      </section>

      <div className="text-center width-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-6 relative inline-block">
          Domestic Suggestions
          <span className="block h-1 w-2/3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mx-auto"></span>
        </h1>
      </div>
      {/* Filtered Trip Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-12 p-4">

        {filteredDomesticTrips.length > 0 ? (
          filteredDomesticTrips.slice(0, 3).map((trip) => (
            <div
              key={trip.id}
              className={`rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-r from-teal-600 to-blue-500 text-white p-6 ${selectedDomesticId === trip.id ? "ring-4 ring-indigo-500" : ""
                }`}
                onClick={() => {
                  setSelectedDomesticId(trip.id);
                  setCity(trip.location);
                }}                
            >
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
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{trip.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {trip.days} Days
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRupeeSign className="text-yellow-400" /> {trip.price}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl font-medium text-gray-600">
            😢 No Domestic Trips found. Try a different search!
          </div>
        )}
      </div>

      {selectedDomesticId && (
        <div className=" m-12 p-4 md:mx-96 text-center text-lg font-semibold text-green-700 border-2 border-gray-200 rounded-lg">
          ✅ You selected:{" "}
          <span className="text-indigo-800 mb-4 block">
            {domesticTrips.find((t) => t.id === selectedDomesticId).name}
          </span>
          <Link
              // to={`/destination`}
              to={`/trip-details/${selectedDomesticId}/${city}`}
              className="inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-xl shadow-lg"
            >
              View Trip Details
            </Link>
        </div>
      )}

      <div className="text-center width-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-6 relative inline-block">
          Foreign Suggestions
          <span className="block h-1 w-2/3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mx-auto"></span>
        </h1>
      </div>
      {/* Filtered Trip Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-12 p-4">

        {filteredForeignTrips.length > 0 ? (
          filteredForeignTrips.slice(0, 3).map((trip) => (
            <div
              key={trip.id}
              className={`rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-r from-teal-600 to-blue-500 text-white p-6 ${selectedForeignId === trip.id ? "ring-4 ring-indigo-500" : ""
                }`}
                onClick={() => {
                  setSelectedForeignId(trip.id);
                  setCity(trip.location.split(",")[0].trim());
                }}
                
            >
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
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{trip.location.split(",")[0].trim()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {trip.days} Days
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRupeeSign className="text-yellow-400" /> {trip.price}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl font-medium text-gray-600">
            😢 No Foreign Trip found. Try a different search!
          </div>
        )}
      </div>

      {selectedForeignId && (
        <div className=" m-12 p-4 md:mx-96 text-center text-lg font-semibold text-green-700 border-2 border-gray-200 rounded-lg">
          ✅ You selected:{" "}
          <span className="text-indigo-800">
            {foreignTrips.find((t) => t.id === selectedForeignId).name}
          </span>

          <div className="mt-6">
            <Link
              // to={`/destination`}
              to={`/trip-details/${selectedForeignId}/${city}`}
              className="inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-xl shadow-lg"
            >
              View Trip Details
            </Link>
          </div>
        </div>
      )}


      <TopDestination />

      {/* Footer */}
      <footer className="bg-teal-900 py-6 mt-12 text-center text-white">
        <p>Made with ❤️ for your next adventure! 🚀</p>
      </footer>
    </div>
  );
};

export default TripSuggestions;
