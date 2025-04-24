import React from "react";
import { Link } from 'react-router-dom';
import Animation from './Lotify'

const TripPlanningForm = () => {
  return (
    <div id="recommendation" className="w-auto ml-2 mr-2 mx-auto grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl p-6 animate-fadeIn md:mt-8 md:mb-10">
      
            {/* Left Section: Lottie Animation */}
            <Animation />

      {/* Left Section */}
      <div className="md:order-2 md:border-l-2 border-gray-300 md:p-20">
        <div className="flex justify-between items-center m-5">
          <h1 className="text-xl font-bold text-teal-600">Trip Planner</h1>
          <button className="text-xl text-blue-600">&#9776;</button>
        </div>

        <form id="Form" className="space-y-4 animate-slideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Destination Type</span>
              <select
                id="destinationType"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              >
                <option>Domestic</option>
                <option>International</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Budget (USD)</span>
              <input
                type="number"
                id="budget"
                min="0"
                max="10000"
                step="10"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your budget"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-gray-700">Health Condition</span>
            <input
              type="text"
              id="healthCondition"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              placeholder="Enter any health considerations"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Age</span>
              <input
                type="number"
                id="age"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your age"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Number of Days</span>
              <input
                type="number"
                id="days"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="How many days can you spend?"
              />
            </label>
          </div>

            <Link className="mt-5 w-full bg-teal-500 text-white py-3 px-26 rounded-md hover:bg-teal-600 transition duration-300 shadow-md" to="/suggest">
            <button
            id="submit"
            type="submit"
            className="mt-5 w-full"
          >
            Get Recommendations
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default TripPlanningForm;
