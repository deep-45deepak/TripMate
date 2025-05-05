import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SuggestionHeader from "../components/Suggestion.header";
import SelectedCard from "../components/SelectedCard";
import TopDestination from "../components/TopDestination";
import WeatherForecast from "../components/WeatherForecast";
import TripMapSection from "../components/TripMapSection";
import HealthFacilities from "../components/HealthFacilities";

const TravelDestinationPage = () => {
  const [coordinates, setCoordinates ] = useState({});
  const { id, location: city } = useParams(); // alias 'location' to 'city'
  const tripId = id;
  const selectedCity = city.split(",")[0].trim();

  // console.log("City:", selectedCity);
  // console.log("Trip ID:", tripId);

  async function getCoordinatesByCity(cityName) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.results && data.results.length > 0) {
        const { latitude, longitude } = data.results[0];
        return { latitude, longitude };
      } else {
        throw new Error("City not found.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
      return null;
    }
  }

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coordinates = await getCoordinatesByCity(selectedCity);
      if (coordinates) {
        console.log("Coordinates:", coordinates.latitude, coordinates.longitude );
        setCoordinates(coordinates);
      }
    };

    if (selectedCity) {
      fetchCoordinates();
    }
  }, [selectedCity]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <SuggestionHeader />

      {/* Hero + Selected Destination */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Personalized Travel Guide
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Everything you need to plan your perfect trip in one place
            </p>
          </div>
          <div className="flex align-center justify-center w-full">
          <SelectedCard selectedId={tripId}/>
          </div>
        </div>
      </div>

      {/* Main Dashboard - Prioritized Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* ----- Left Column (Trip Planning) ----- */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {/* Trip Packages - Primary CTA */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
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
                  <div key={index} className={`border rounded-lg p-4 transition-all ${
                    index === 1 
                      ? "border-teal-300 bg-teal-50 scale-[1.02] shadow-sm" 
                      : "border-gray-200 hover:border-teal-200"
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <span className="font-bold text-teal-600">Rs{plan.price}</span>
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
                    <button className={`w-full py-2 rounded-md text-sm font-medium ${
                      index === 1 
                        ? "bg-teal-600 text-white hover:bg-teal-700" 
                        : "text-teal-600 border border-teal-600 hover:bg-teal-50"
                    }`}>
                      {index === 1 ? "Recommended" : "Select Plan"}
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md">
                Customize Your Package
              </button>
            </div>

            {/* Travel Tips - Secondary helpful info */}
            <div className="bg-white rounded-xl shadow-md p-6">
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
              </div>
            </div>
          </div>

          {/* ----- Right Column (Primary Travel Info) ----- */}
          <div className="lg:col-span-8 space-y-6 order-1 order-2">
            {/* Row 1: Immediate Needs (Weather + Alerts) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weather Card - Top priority for travelers */}
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-1">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                  Weather Conditions
                </h2>
                <WeatherForecast coor={coordinates} cityName={city} compact={true} />
              </div>

              {/* Health Alerts - Critical info */}
              <div className="bg-white rounded-xl shadow-md p-6 h-[32rem] overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Health Advisories
                </h2>
                <HealthFacilities city={selectedCity} compact={true} />
              </div>
            </div>

            {/* Row 2: Trip Planning Essentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Currency Converter - Important for budgeting */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Exchange Rates
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>1 USD</span>
                    <span className="font-bold text-teal-600">83.25 INR</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>1 EUR</span>
                    <span className="font-bold text-teal-600">89.47 INR</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts - Vital information */}
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Emergency Contacts & Help within India
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Police", number: "100" },
                    { name: "Ambulance", number: "102" },
                    { name: "Fire", number: "101" },
                    { name: "Tourist Police", number: "1363" }
                  ].map((contact, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded hover:bg-red-50 transition">
                      <div className="font-medium">{contact.name}</div>
                      <a href={`tel:${contact.number}`} className="text-blue-600 text-sm hover:underline">
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3: Main Map - Location context */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-10 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Area Map & Attractions
                </h2>
              </div>
              <TripMapSection coor={coordinates} />
            </div>
          </div>
        </div>

        {/* Top Destinations - At bottom as discovery section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-500">Recommended Nearby Destinations</h2>
          <TopDestination />
        </section>
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