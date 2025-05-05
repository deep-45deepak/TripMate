import React, { useState } from 'react';

const TravelCard = () => {
  const [savedCards, setSavedCards] = useState([]);

  const toggleSave = (id) => {
    if (savedCards.includes(id)) {
      setSavedCards(savedCards.filter(cardId => cardId !== id));
    } else {
      setSavedCards([...savedCards, id]);
    }
  };
  const destinations = [
    {
      id: 1,
      title: "Paris",
      country: "France",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=500&h=400&s=1",
      description:
        "Everyone who visits Paris for the first time probably has the same punchlist of major attractions to hit: The Louvre, Notre Dame, The Eiffel Tower, etc. Just make sure you leave some time to wander the city's charming neighborhoods.",
      tags: ["🚶 Walking Tours", "🧳 Day Trips", "🛍️ Flea & Street Markets", "⛴️ Day Cruises"],
      year: 2025,
    },
    {
      id: 2,
      title: "Barcelona",
      country: "Spain",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxYtxEpWHm5S2B3Zpmcx_K0dfQljb2G4XoQ&s",
      description:
        "Stroll Las Ramblas and enjoy Barcelona's unique blend of Catalan culture, distinctive architecture, lively nightlife and trendy hotels. You'll find Europe's best-preserved Gothic Quarter here, as well as the famous Sagrada Familia cathedral.",
      tags: ["🏛️ Visit Museums", "🍷 Wine Tasting", "🏖️ Beach Holidays"],
      year: 2025,
    },
    {
      id: 3,
      title: "Kyoto",
      country: "Japan",
      image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSn-C2tnLeijvysXy4q10PzNYGIAO7GCIZF09UNtXmyWsbr1hX0CoceM2jS_U8Y4vmf5a4NE4uCvvtx3LfxrmosY4CDFIR4eBM0IGmCTQ",
      description:
        "Kyoto, once the capital of Japan, is a city on the island of Honshu known for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
      tags: ["⛩️ Temples", "🌸 Cherry Blossom", "🍵 Tea Ceremonies"],
      year: 2025,
    },
    {
      id: 4,
      title: "Cape Town",
      country: "South Africa",
      image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSxT5tc0KNvsLoze3dEKfL_Va_l6aHYLidt_k_2fl-gv89FFlGaSRBPxL5XMMN87UObiIMDUVxD-TndYA9OzWJs9jC9aU6Lvcvf18nL0A",
      description:
        "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Ride the cable cars to the mountain’s flat top, and explore the city's beaches, vineyards, and vibrant neighborhoods.",
      tags: ["🚠 Cable Car", "🍷 Wine Estates", "🌊 Coastal Drives"],
      year: 2025,
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-ghostwhite mt-4">
      {/* Enhanced Navbar */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Foreign Tours</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white text-teal-800 rounded-lg font-medium hover:bg-teal-100 transition duration-300">
                Explore More
              </button>
              <button className="px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-teal-800 transition duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        {/* <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Destinations</label>
              <input
                type="text"
                id="search"
                placeholder="Where do you want to go?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by</label>
              <select
                id="filter"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option>All Categories</option>
                <option>Beach Holidays</option>
                <option>Cultural Tours</option>
                <option>Adventure Travel</option>
                <option>City Breaks</option>
              </select>
            </div>
            <div className="self-end">
              <button className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition duration-300">
                Search
              </button>
            </div>
          </div> 
        </div> */}

        {/* Destination Cards */}
        <div className="space-y-8">
          {destinations.map((destination, index) => (
            <div key={destination.id} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-2/5 relative">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-full w-full object-cover min-h-[300px]"
                  />
                  <div className="absolute bottom-4 left-4 bg-yellow-400 px-3 py-1 rounded-full text-black font-semibold text-sm flex items-center space-x-1 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 9.75L12 12l2.25-2.25M12 3v9m0 0l3 3m-3-3l-3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{destination.year}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-black font-semibold text-sm shadow-md">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 space-y-4 relative">
                  <h2 className="text-3xl font-bold text-gray-800">{destination.title}</h2>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 12.414a2 2 0 010-2.828l4.243-4.243M5.343 7.343l4.243 4.243a2 2 0 010 2.828l-4.243 4.243"
                      />
                    </svg>
                    <span className="text-teal-600 font-medium">{destination.country}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 text-sm">(128 reviews)</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {destination.description}
                  </p>
                  <a href="#" className="inline-block text-teal-600 font-semibold hover:underline">Read more</a>

                  {/* Tags */}
                  <div className="pt-2">
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Great Things to Do</h3>
                    <div className="flex flex-wrap gap-3">
                      {destination.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-gray-500 text-sm">Starting from</span>
                      <p className="text-2xl font-bold text-teal-700">$1,200</p>
                    </div>
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => toggleSave(destination.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${savedCards.includes(destination.id) ? 'bg-teal-100 text-teal-800 border border-teal-300' : 'border border-gray-300 hover:bg-gray-100'}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={savedCards.includes(destination.id) ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"} />
                        </svg>
                        {savedCards.includes(destination.id) ? 'Saved' : 'Save'}
                      </button>
                      <button className="px-6 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TravelCard;