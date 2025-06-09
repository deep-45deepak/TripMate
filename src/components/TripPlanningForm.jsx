import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Animation from './Lotify';

const TripPlanningForm = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("INR");
  const [formData, setFormData] = useState({
    destinationType: "Domestic",
    budget: "",
    healthCondition: "",
    age: "",
    days: ""
  });

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setCurrency(value === "International" ? "$" : "INR");
    setFormData({ ...formData, destinationType: value });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const isIncomplete = Object.values(formData).some(val => val === "");
    if (isIncomplete) {
      alert("Please fill out all fields before continuing.");
      return;
    }

    // Navigate only if the form is completely filled
    navigate("/suggest");
  };

  return (
    <div id="recommendation" className="w-auto ml-2 mr-2 mx-auto grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl p-6 animate-fadeIn md:mt-8 md:mb-10">

      {/* Left Section: Lottie Animation */}
      <Animation />

      {/* Right Section */}
      <div className="md:order-2 md:border-l-2 border-gray-300 md:p-20">
        <div className="flex justify-between items-center m-5">
          <h1 className="text-xl font-bold text-teal-600">Trip Planner</h1>
          <button className="text-xl text-blue-600">&#9776;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block mb-4">
              <span className="text-gray-700">Destination Type</span>
              <select
                id="destinationType"
                value={formData.destinationType}
                onChange={handleDestinationChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              >
                <option>Domestic</option>
                <option>International</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Budget ({currency})</span>
              <input
                type="number"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder={`Enter budget in ${currency}`}
              />
            </label>
          </div>

          <label className="block">
            <span className="text-gray-700">Health Condition</span>
            <input
              type="text"
              id="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
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
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your age"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Number of Days</span>
              <input
                type="number"
                id="days"
                value={formData.days}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="How many days can you spend?"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-teal-500 text-white py-3 px-26 rounded-md hover:bg-teal-600 transition duration-300 shadow-md"
          >
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripPlanningForm;
