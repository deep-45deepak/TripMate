import React, { useState, useMemo, useEffect } from "react";
import RingLoader from '../components/RingLoader';
import { useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaRupeeSign,
  FaSearch,
  FaGlobeAmericas,
  FaHome,
  FaWallet,
  FaCompass
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TopDestination from '../components/TopDestination';
import SuggestionHeader from '../components/Suggestion.header';
import axios from 'axios';

const TripSuggestions = () => {
  const navigate = useNavigate();

  // State management
  const [selectedDomesticId, setSelectedDomesticId] = useState(null);
  const [selectedForeignId, setSelectedForeignId] = useState(null);
  const [city, setCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("domestic");
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [foreignTrips, setForeignTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trips data
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const domesticResponse = await axios.get('/preferences/domestic-trip');
        const foreignResponse = await axios.get('/preferences/foreign-trip');

        // console.log(domesticResponse.data)
        setDomesticTrips(domesticResponse.data.sort(() => 0.5 - Math.random()));
        setForeignTrips(foreignResponse.data.sort(() => 0.5 - Math.random()));
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // Filter trips based on search term
  const filteredTrips = useMemo(() => {
    const trips = activeTab === "domestic" ? domesticTrips : foreignTrips;
    return trips.filter(trip =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeTab, domesticTrips, foreignTrips]);

  // Feature cards data
  const features = [
    {
      icon: <FaCompass className="text-3xl mb-2" />,
      title: "Discover Breathtaking Locations",
      bg: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FaWallet className="text-3xl mb-2" />,
      title: "Enjoy deals & delights",
      bg: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FaGlobeAmericas className="text-3xl mb-2" />,
      title: "Exploring made easy",
      bg: "from-purple-500 to-fuchsia-600"
    },
    {
      icon: <FaHome className="text-3xl mb-2" />,
      title: "Travel your way",
      bg: "from-rose-500 to-pink-600"
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RingLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <SuggestionHeader />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-500 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f3084f6e686cc40e9a53e4b_pattern.svg')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Millions Of Experiences. <br /> One Simple Search.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
          >
            Find and book your next happy adventure anywhere in the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          >
            <div className="relative flex-grow">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search trips by name or location..."
                className="w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${feature.bg} p-6 rounded-xl text-white shadow-lg`}
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trip Suggestions Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-full shadow-md">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === "domestic" ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"}`}
            >
              Domestic Trips
            </button>
            <button
              onClick={() => setActiveTab("foreign")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === "foreign" ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"}`}
            >
              Foreign Trips
            </button>
          </div>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
            {activeTab === "domestic" ? "Domestic" : "Foreign"} Suggestions
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mt-2"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked {activeTab === "domestic" ? "domestic" : "international"} travel experiences
          </p>
        </motion.div>

        {/* Trip Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredTrips.length > 0 ? (
              filteredTrips.slice(0, 6).map((trip) => (
                <motion.div
                  key={trip.id}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 bg-white ${(activeTab === "domestic" ? selectedDomesticId === trip.id : selectedForeignId === trip.id)
                    ? "ring-4 ring-blue-500"
                    : ""
                    }`}
                  onClick={() => {
                    const city = activeTab === "domestic" ? trip.location : trip.location.split(",")[0].trim();
                    navigate(`/trip-details/${trip.id}/${city}`);
                  }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      {trip.rating}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-800">{trip.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="text-red-500 mr-2" />
                      <span>{activeTab === "domestic" ? trip.location : trip.location.split(",")[0].trim()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 pt-2 border-t border-gray-100">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        {trip.days} Days
                      </span>
                      <span className="flex items-center font-semibold">
                        <FaRupeeSign className="mr-1 text-green-600" />
                        {trip.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <div className="text-6xl mb-4">😢</div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  No {activeTab === "domestic" ? "Domestic" : "Foreign"} Trips found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or check back later for new adventures!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Top Destinations */}
      <TopDestination />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-teal-800 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg mb-2">Made with ❤️ for your next adventure!</p>
          <p className="text-blue-200">© {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TripSuggestions;
