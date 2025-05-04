import React , { useRef } from "react";
import { useLocation } from "react-router-dom";


const Header = () => {

  // const homeRef = useRef(null);
  // const recommendationRef = useRef(null);
  // const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const location = useLocation();
  const isPlaceRoute = location.pathname.includes("/place");

  function toggleSearch() {
    const input = document.getElementById("searchInput");
    if (input.classList.contains("w-0")) {
        input.classList.remove("w-0", "opacity-0", "invisible");
        input.classList.add("w-48", "opacity-100", "visible");
        input.focus();
    } else {
        input.classList.remove("w-48", "opacity-100", "visible");
        input.classList.add("w-0", "opacity-0", "invisible");
    }
}

  return (
    <header className="bg-gradient-to-r from-teal-900 to-teal-700 text-white flex justify-between items-center p-2 shadow-md px-4 md:px-20">
      <div className="flex items-center gap-2 rounded-full">
        <span className="font-bold text-lg bg-gradient-to-r from-teal-500 via-blue-400 to-pink-500 text-transparent bg-clip-text">
          TripMate
        </span>
      </div>

      <nav className="hidden md:flex gap-6 text-gray-700">
        {isPlaceRoute ? (
          <>
            <a href="#" className="text-white hover:text-blue-300 text-lg">Home</a>
            <a href="#form" className="text-blue-300 text-lg underline">Get Recommendation</a>
            <a href="#faq" className="text-white hover:text-blue-300">FAQs</a>
            <a href="/contacts" className="text-white hover:text-blue-300">Contact</a>
          </>
        ) : (
          <>
            <a href="#" className="text-blue-300 text-lg underline">Home</a>
            <a href="#recommendation" className="text-white hover:text-blue-300 text-lg">Get Recommendation</a>
            <a href="/contact" className="text-white hover:text-blue-300 text-lg">Contact</a>
          </>
        )}
      </nav>

      <div className="flex gap-4 items-center relative">
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          className="w-0 opacity-0 px-4 md:px-8 py-2 rounded-full transition-all duration-500 ease-in-out absolute right-24 md:right-60 md:w-auto bg-gray-100 text-black outline-none invisible"
        />
        <button id="search-btn" onClick={toggleSearch} className="p-2 rounded-full">
          <i className="fas fa-search text-white active:text-blue-400"></i>
        </button>
        <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;
