import React from "react";
import Footer from '../components/Footer'
import WeatherForecast from "../components/WeatherForecast";

const TravelDestinationPage = () => {
  return (
    <div className="bg-mintcream text-gray-800">
      <header className="p-2 md:px-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold bg-gradient-to-r from-teal-500 via-blue-400 to-pink-500 text-transparent bg-clip-text text-2xl">
            TripMate
          </div>
          <ul className="w-auto space-x-6 text-xl hidden md:flex">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="#Destination" className="hover:text-blue-400">Top Destinations</a></li>
            <li><a href="#Contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          <a href="/login" className="bg-red-600 text-white px-4 py-2 rounded-lg active:bg-green-700">Log Out</a>
        </nav>
      </header>

      <section
        className="hero text-center py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">
          Millions Of Experiences. <br /> One Simple Search.
        </h1>
        <p className="text-lg mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">Find and book your next happy adventure anywhere.</p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search destinations..."
            className="px-4 py-2 w-1/2 rounded-full mr-4 border-none outline-none text-black"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Search</button>
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

      <section className="bg-mintcream px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">Travel Assistant</h1>
            <p className="text-lg md:text-2xl text-gray-700 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">5-Day Weather, Currency & Health Report</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <section className="bg-white rounded-2xl shadow-2xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Nearby Health Facilities</h2>
                <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  <li className="bg-red-100 hover:bg-red-200 transition p-3 rounded-lg text-gray-800 shadow-sm">🏥 Bali International Medical Center</li>
                  <li className="bg-red-200 hover:bg-red-300 transition p-3 rounded-lg text-gray-800 shadow-sm">🏥 Bangkok Hospital</li>
                  <li className="bg-red-300 hover:bg-red-400 transition p-3 rounded-lg text-gray-900 shadow-sm">🏥 Cancún Medical Center</li>
                  <li className="bg-red-400 hover:bg-red-500 transition p-3 rounded-lg text-white shadow-sm">🏥 Nha Trang City Hospital</li>
                </ul>
              </section>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-white rounded-2xl shadow-xl p-6">
                  <h2 className="text-xl font-semibold text-teal-700 mb-4">Personalized Trip Planning</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between bg-gray-100 p-3 rounded-md">
                      <span>Economy Trip</span><span className="font-bold">$21</span>
                    </li>
                    <li className="flex justify-between bg-gray-100 p-3 rounded-md">
                      <span>Comfortable</span><span className="font-bold">$61</span>
                    </li>
                    <li className="flex justify-between bg-gray-100 p-3 rounded-md">
                      <span>Destination</span><span className="font-bold">$231</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-teal-700">Tripsing</h2>
                    <div className="flex justify-around mt-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-300 text-white rounded-full flex items-center justify-center">13</div>
                        <p className="text-xs text-gray-600 mt-1">Nese</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-300 text-white rounded-full flex items-center justify-center">68</div>
                        <p className="text-xs text-gray-600 mt-1">Places</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-300 text-white rounded-full flex items-center justify-center">10</div>
                        <p className="text-xs text-gray-600 mt-1">Services</p>
                      </div>
                    </div>

                    <div className="bg-blue-500 text-white p-4 rounded-xl mt-6">
                      <h3 className="font-bold">Tour Ailmentic</h3>
                      <p className="text-xs">Explore the most beautiful travel destinations.</p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 text-sm">
                    <div className="text-center">
                      <p className="text-gray-500">Saves</p>
                      <p className="font-bold">$240</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Discount</p>
                      <p className="font-bold">$100</p>
                    </div>
                  </div>

                  <button className="mt-4 mx-auto w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xl flex items-center justify-center shadow-md transition">+</button>
                </section>
              </div>
            </div>

          <WeatherForecast />

          </div>
        </div>
      </section>

      <section id="Destination" className="destinations text-center p-10 bg-mintcream">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">Top Destinations For Your Next Vacation</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Bali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
            { name: "Bangkok", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/07/sicily.jpg?w=500&h=400&s=1" },
            { name: "Cancún", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpRdaXzzRmAwVbDBkDxzIo64nXLsQ9q5Plw&s" },
            { name: "Nha Trang", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=500&h=400&s=1" },
          ].map(({ name, image }) => (
            <div
              key={name}
              className="bg-cover bg-center h-40 rounded-lg text-white flex items-center justify-center text-xl font-semibold shadow-lg"
              style={{ backgroundImage: `url('${image}')` }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <div id="Contact">
        <Footer />
      </div>
    </div>
  );
};

export default TravelDestinationPage;
