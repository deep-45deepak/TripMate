
const TravelCard = () => {
  return (
    <>
      {/* Navbar */}
      <div className="w-auto p-4 shadow-md bg-teal-900 rounded-lg m-4">
        <div className="text-center">
          <span className="text-3xl text-white px-4 py-2 rounded shadow">
            Foreign Tours
          </span>
        </div>
      </div>

      {/* Card 1 */}
      <div className="md:order-2 p-4">
        <div className="max-w-7xl mx-auto bg-transparent shadow-xl rounded-2xl overflow-hidden border h-lg">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=500&h=400&s=1"
                alt="Paris"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-400 px-2 py-1 rounded-full text-black font-semibold text-xs flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 9.75L12 12l2.25-2.25M12 3v9m0 0l3 3m-3-3l-3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2025</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-6 space-y-4 relative">
              <div className="text-gray-500 text-sm font-medium">01.</div>
              <h2 className="text-3xl font-bold text-gray-800">Paris</h2>
              <a href="#" className="text-blue-500 text-sm flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 12.414a2 2 0 010-2.828l4.243-4.243M5.343 7.343l4.243 4.243a2 2 0 010 2.828l-4.243 4.243"
                  />
                </svg>
                <span>France</span>
              </a>
              <p className="text-gray-700 text-sm">
                Everyone who visits Paris for the first time probably has the same punchlist of major attractions to hit: The Louvre, Notre Dame, The Eiffel Tower, etc. Just make sure you leave some time to wander the city’s...
              </p>
              <a href="#" className="text-sm text-black font-semibold underline">Read more</a>

              {/* Tags */}
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Great Things to Do</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-2 border-2 text-black font-semibold px-3 py-2 rounded-full text-sm hover:bg-gray-200">
                    🚶 Walking Tours
                  </span>
                  <span className="flex items-center gap-2 border-2 text-black font-semibold px-3 py-2 rounded-full text-sm hover:bg-gray-200">
                    🧳 Day Trips
                  </span>
                  <span className="flex items-center gap-2 border-2 text-black font-semibold px-3 py-2 rounded-full text-sm hover:bg-gray-200">
                    🛍️ Flea & Street Markets
                  </span>
                  <span className="flex items-center gap-2 border-2 text-black font-semibold px-3 py-2 rounded-full text-sm hover:bg-gray-200">
                    ⛴️ Day Cruises
                  </span>
                </div>
              </div>

              {/* Save Button */}
              <button className="absolute top-6 right-6 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Card 2 */}
      <div className='p-4' >
      {/* Second Card */}
      <div className="max-w-7xl mx-auto bg-transparent shadow-xl rounded-2xl overflow-hidden border m-4">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxYtxEpWHm5S2B3Zpmcx_K0dfQljb2G4XoQ&s"
              alt="Paris"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-400 px-2 py-1 rounded-full text-black font-semibold text-xs flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 9.75L12 12l2.25-2.25M12 3v9m0 0l3 3m-3-3l-3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>2025</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 space-y-4 relative">
            <div className="text-gray-500 text-sm font-medium">02.</div>
            <h2 className="text-3xl font-bold text-gray-800">Barcelona</h2>
            <a href="#" className="text-blue-500 text-sm flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 12.414a2 2 0 010-2.828l4.243-4.243M5.343 7.343l4.243 4.243a2 2 0 010 2.828l-4.243 4.243"
                />
              </svg>
              <span>Spain</span>
            </a>
            <p className="text-gray-700 text-sm">
              Stroll Las Ramblas and enjoy Barcelona's unique blend of Catalan culture, distinctive architecture, lively nightlife and trendy, stylish hotels. You'll find Europe's best-preserved Gothic Quarter here, as well as the famous Sagrada Familia cathedral, designed by Antoni Gaudí. Barcelona is also a great base for exploring the Costa Brava and the Pyrenees mountains.
            </p>
            <a href="#" className="text-sm text-black font-semibold underline">Read more</a>

            {/* Tags */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Great Things to Do</h3>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 00-8 0v4a4 4 0 008 0V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v1.5a2 2 0 01-2 2h-1a2 2 0 01-2-2V15h5z" />
                  </svg>
                  Visit Museums
                </span>
                <span className="flex items-center gap-2 border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  🍷 Wine Tasting
                </span>
                <span className="flex items-center gap-2 border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  🏖️ Beach Holidays
                </span>
              </div>
            </div>

            {/* Save Button */}
            <button className="absolute top-6 right-6 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TravelCard;
