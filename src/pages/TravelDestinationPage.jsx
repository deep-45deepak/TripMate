import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SuggestionHeader from "../components/Suggestion.header";
import SelectedCard from "../components/SelectedCard";
import TopDestination from "../components/TopDestination";
import WeatherForecast from "../components/WeatherForecast";
import TripMapSection from "../components/TripMapSection";
import HealthFacilities from "../components/HealthFacilities";
import RingLoader from '../components/RingLoader';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TravelDestinationPage = () => {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Comfort plan
  const [currencyData, setCurrencyData] = useState(null);
  const [error, setError] = useState(null);
  const { id, location: city } = useParams();
  const tripId = id;
  const selectedCity = city.split(",")[0].trim();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  async function getCoordinatesByCity(cityName) {

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`;


    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Attempt to read error message from response if available
        const errorText = await response.text();
        throw new Error(`Failed to fetch coordinates: ${response.status} ${response.statusText} - ${errorText.substring(0, 100)}...`);
      }
      const data = await response.json();

      if (data?.results?.length > 0) {
        const { latitude, longitude, timezone, country } = data.results[0];
        return { latitude, longitude, timezone, country };
      } else {
        throw new Error("City not found or no results returned.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
      setError(`Location error: ${error.message}`);
      return null;
    }
  }

  async function fetchCurrencyRates() {
    // Check if the environment variable is defined
    if (!import.meta.env.VITE_CURRENCY_API_URL) {
      console.warn("VITE_CURRENCY_API_URL is not defined. Using fallback currency rates.");
      setCurrencyData({
        INR: 83.25,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.47
      });
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_CURRENCY_API_URL);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Currency data unavailable: ${response.status} ${response.statusText} - ${errorText.substring(0, 100)}...`);
      }
      const data = await response.json();
      setCurrencyData(data.rates);
    } catch (err) {
      console.error("Error fetching currency:", err);
      setError(`Currency error: ${err.message}`);
      // Fallback to hardcoded rates if API fails
      setCurrencyData({
        INR: 83.25,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.47
      });
    }
  }

  useEffect(() => {
    const loadPageData = async () => {
      try {
        // Fetch trip data
        const mockTripData = {
          id: tripId,
          name: selectedCity,
          location: `${selectedCity}, Country`,
          description: `Experience the beauty of ${selectedCity} with our carefully crafted tour package.`,
          price: 25000,
          days: 7,
          rating: 4.7,
          destinationType: tripId.length > 10 ? "foreign" : "domestic",
          itinerary: [
            `Day 1: Arrival in ${selectedCity} and hotel check-in`,
            `Day 2: Guided tour of ${selectedCity} landmarks`,
            `Day 3: Free day to explore local markets`,
            `Day 4: Day trip to nearby attractions`,
            `Day 5: Cultural experiences and local cuisine`,
            `Day 6: Leisure day with optional activities`,
            `Day 7: Departure from ${selectedCity}`
          ],
          highlights: [
            "Guided city tour",
            "Local cuisine tasting",
            "Cultural performances",
            "Scenic viewpoints",
            "Shopping districts"
          ]
        };
        setTripData(mockTripData);

        // Fetch currency rates
        await fetchCurrencyRates();

        // Fetch coordinates
        const coords = await getCoordinatesByCity(selectedCity);
        if (coords) {
          setCoordinates(coords);
        }

      } catch (err) {
        console.error("Error loading page data:", err);
        setError(`An error occurred: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, [tripId, selectedCity]); // Dependencies for useEffect

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RingLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 max-w-md bg-white rounded-lg shadow-lg">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold mb-2">Error Loading Page</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{selectedCity} Travel Guide | Travel Assistant</title>
        <meta name="description" content={`Complete travel guide for ${selectedCity} including weather, attractions, and trip planning`} />
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-900 via-blue-700 to-pink-800 shadow-lg">
        <SuggestionHeader />
      </div>

      {/* Hero + Selected Destination */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-teal-600 to-blue-700 pt-16 pb-24 px-4 shadow-md"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedCity} Travel Guide
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Everything you need to plan your perfect trip to {selectedCity}
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex align-center justify-center w-full"
          >
            <SelectedCard selectedId={tripId} city={city} />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Dashboard - Prioritized Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16"
        >
          {/* ----- Left Column (Trip Planning) ----- */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {/* Trip Packages - Primary CTA */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Plan Your Trip
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  { name: "Budget", price: 120, features: ["Hostels", "Public transport", "Free walking tours"] },
                  { name: "Comfort", price: 350, features: ["3-star hotels", "Guided tours", "Some meals included"] },
                  { name: "Luxury", price: 890, features: ["5-star hotels", "Private transfers", "All meals & activities"] }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className={`border rounded-lg p-4 transition-all cursor-pointer ${
                      selectedPlan === index
                        ? "border-teal-300 bg-teal-50 scale-[1.02] shadow-sm ring-2 ring-teal-200"
                        : "border-gray-200 hover:border-teal-200"
                    }`}
                    onClick={() => handlePlanSelect(index)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <span className="font-bold text-teal-600">${plan.price}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1 mb-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-teal-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2 rounded-md text-sm font-medium transition ${
                      selectedPlan === index
                        ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md"
                        : "text-teal-600 border border-teal-600 hover:bg-teal-50"
                    }`}>
                      {selectedPlan === index ? "Selected Plan" : "Select Plan"}
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md"
              >
                Customize Your Package
              </motion.button>

              {tripData?.highlights && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-lg mb-3">Trip Highlights</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {tripData.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-teal-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Travel Tips - Secondary helpful info */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Local Tips
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Best Time to Visit
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">November to March for pleasant weather</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <h3 className="font-bold text-yellow-800 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    Must-Try Food
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">Butter Chicken, Chole Bhature, Street Chaat</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-bold text-green-800 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    Top Attractions
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">City Palace, Local Markets, Sunset Point</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ----- Right Column (Primary Travel Info) ----- */}
          <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
            {/* Row 1: Immediate Needs (Weather + Alerts) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weather Card - Top priority for travelers */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 md:col-span-1 border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                  Weather Conditions
                </h2>
                {coordinates ? (
                  <WeatherForecast coor={coordinates} cityName={selectedCity} compact={true} />
                ) : (
                  <div className="text-gray-500 italic">Loading weather data...</div>
                )}
              </motion.div>

              {/* Health Alerts - Critical info */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 h-[32rem] overflow-hidden border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Health Advisories
                </h2>
                <HealthFacilities city={selectedCity} compact={true} />
              </motion.div>
            </div>

            {/* Row 2: Trip Planning Essentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Currency Converter - Important for budgeting */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Exchange Rates
                </h2>
                {currencyData ? (
                  <div className="space-y-3">
                    {Object.entries({
                      USD: "US Dollar",
                      EUR: "Euro",
                      GBP: "British Pound",
                      JPY: "Japanese Yen"
                    }).map(([code, name]) => (
                      <div key={code} className="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-teal-50 transition">
                        <span>{name}</span>
                        <span className="font-bold text-teal-600">
                          {/* Ensure currencyData.INR exists before using it for conversion */}
                          {currencyData.INR && currencyData[code] ? `₹${(currencyData.INR / currencyData[code]).toFixed(2)}` : 'N/A'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 italic">Loading currency data...</div>
                )}
              </motion.div>

              {/* Emergency Contacts - Vital information */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 md:col-span-2 border border-gray-100"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Emergency Contacts & Help within India
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Police", number: "100", icon: "👮" },
                    { name: "Ambulance", number: "102", icon: "🚑" },
                    { name: "Fire", number: "101", icon: "🚒" },
                    { name: "Tourist Police", number: "1363", icon: "🏛️" },
                    { name: "Women's Helpline", number: "1091", icon: "👩" },
                    { name: "Child Helpline", number: "1098", icon: "🧒" }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition flex items-center"
                    >
                      <span className="text-2xl mr-3">{contact.icon}</span>
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <a href={`tel:${contact.number}`} className="text-blue-600 text-sm hover:underline">
                          {contact.number}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Row 3: Main Map - Location context */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-10 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {selectedCity} Map & Attractions
                </h2>
              </div>
              {coordinates ? (
                <TripMapSection coor={coordinates} cityName={selectedCity} />
              ) : (
                <div className="h-96 flex items-center justify-center text-gray-500">
                  Loading map data...
                </div>
              )}
            </motion.div>

            {/* Itinerary Section */}
            {tripData?.itinerary && (
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                  Suggested Itinerary
                </h2>
                <div className="space-y-4">
                  {tripData.itinerary.map((day, index) => (
                    <div key={index} className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        {index < tripData.itinerary.length - 1 && (
                          <div className="w-1 h-full bg-teal-200"></div>
                        )}
                      </div>
                      <div className="pb-4 flex-1">
                        <p className="font-medium">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Top Destinations - At bottom as discovery section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-500">Recommended Nearby Destinations</h2>
          <TopDestination currentCity={selectedCity} />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-4">Travel Assistant</h3>
            <p className="text-gray-400">Making travel planning effortless since 2023</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              {['Destinations', 'Deals', 'Travel Guides', 'Blog'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-400">
              {['Help Center', 'Safety', 'Contact Us', 'FAQ'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {['Terms', 'Privacy', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Travel Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TravelDestinationPage;