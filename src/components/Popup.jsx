import React, { useState } from "react";

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🌴 Bali, Indonesia",
      description:
        "Explore the beautiful beaches, lush jungles, and vibrant culture of Bali. Enjoy luxury resorts, delicious cuisine, and breathtaking sunsets.",
      points: [
        "🏝️ Stay at a 5-star beachfront resort",
        "🗿 Visit the iconic Uluwatu Temple",
        "🌊 Experience thrilling water sports",
        "🍛 Taste authentic Balinese food",
      ],
    },
    {
      title: "🏖️ Maldives",
      description:
        "Indulge in luxury at overwater bungalows, crystal-clear waters, and vibrant marine life in the Maldives.",
      points: [
        "🏝️ Private overwater bungalows",
        "🐠 Explore the coral reefs",
        "🥂 Enjoy world-class luxury",
        "🌞 Perfect for a romantic getaway",
      ],
    },
    {
      title: "🌍 Paris, France",
      description:
        "Discover the romantic streets of Paris, world-class museums, and amazing cuisine while strolling by the Eiffel Tower.",
      points: [
        "🎨 Visit the Louvre Museum",
        "🗼 Eiffel Tower view",
        "🍷 Sip wine in a Parisian cafe",
        "🥐 Taste French pastries",
      ],
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="text-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-600 hover:to-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-transform duration-300 hover:scale-105"
      >
        Special Offers
      </button>

      {isModalOpen && (
        <div
          id="popup-modal"
          onClick={(e) => e.target.id === "popup-modal" && setIsModalOpen(false)}
          className="fixed inset-0 bg-gradirnt from-blue-500 to-purple-500 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-6 md:p-10 max-w-lg w-full relative text-gray-900 shadow-2xl animate-fadeIn">
            <h2 className="text-2xl font-bold mb-2">✨ Special Trip Offers</h2>
            <p className="text-sm mb-6 text-gray-800">Get exclusive deals on your next adventure.</p>

            {/* Slide */}
            <div className="bg-white bg-opacity-70 rounded-xl p-5 md:p-6 mb-4 shadow-inner">
              <h3 className="text-lg font-semibold mb-2">{slides[currentSlide].title}</h3>
              <p className="text-gray-700 text-sm">{slides[currentSlide].description}</p>
              <ul className="text-left mt-4 list-disc pl-6 space-y-1 text-sm text-gray-800">
                {slides[currentSlide].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
              >
                ⬅
              </button>
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
              >
                ➡
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-400 hover:bg-red-500 rounded-full p-2 shadow-md"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
