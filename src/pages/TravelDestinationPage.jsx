import React from "react";
import SuggestionHeader from '../components/Suggestion.header'
import SelectedCard from '../components/SelectedCard'
import TopDestination from '../components/TopDestination'
import WeatherForecast from "../components/WeatherForecast";

const TravelDestinationPage = () => {
  return (
    <div className="bg-mintcream text-gray-800 text-center">

      {/* Header */}
      <SuggestionHeader />

      <section className="bg-mintcream px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">Travel Assistant</h1>
            <p className="text-lg md:text-2xl text-gray-700 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold">5-Day Weather, Currency & Health Report</p>
          </header>


          {/* SelectedCard */}
          <div className="flex justify-center items-center mx-4 md:mx-64 md:mb-8 my-6 w-auto rounded-2xl bg-gradient-to-r from-mint-cream to-white shadow-xl py-6 px-4 min-h-[300px] transition-all duration-300 hover:scale-[1.01]">
            <SelectedCard />
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <section className="bg-teal-50 rounded-2xl shadow-2xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">Nearby Health Facilities</h2>
                <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  <li className="bg-teal-100 hover:bg-teal-200 transition p-3 rounded-lg text-gray-800 shadow-sm">🏥 Bali International Medical Center</li>
                  <li className="bg-teal-200 hover:bg-teal-300 transition p-3 rounded-lg text-gray-800 shadow-sm">🏥 Bangkok Hospital</li>
                  <li className="bg-blue-100 hover:bg-blue-200 transition p-3 rounded-lg text-gray-800 shadow-sm">🏥 Cancún Medical Center</li>
                  <li className="bg-blue-200 hover:bg-blue-300 transition p-3 rounded-lg text-gray-900 shadow-sm">🏥 Nha Trang City Hospital</li>
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

      <TopDestination />

      {/* Footer */}
      <footer className="bg-teal-900 py-6 mt-12 text-center text-white">
        <p>Made with ❤️ for your next adventure! 🚀</p>
      </footer>
    </div>
  );
};

export default TravelDestinationPage;
