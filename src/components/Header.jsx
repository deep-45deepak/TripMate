import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isPlaceRoute = location.pathname.includes("/place");

  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    const input = searchInputRef.current;
    if (input.classList.contains("w-0")) {
      input.classList.remove("w-0", "opacity-0", "invisible");
      input.classList.add("w-48", "opacity-100", "visible");
      input.focus();
    } else {
      input.classList.remove("w-48", "opacity-100", "visible");
      input.classList.add("w-0", "opacity-0", "invisible");
    }
  };

  return (
    <header className="bg-gradient-to-r from-teal-900 to-teal-700 text-white flex justify-between items-center p-3 shadow-md px-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-xl bg-gradient-to-r from-teal-500 via-blue-400 to-pink-500 text-transparent bg-clip-text tracking-wide">
          TripMate
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-white font-medium">
        {isPlaceRoute ? (
          <>
            <a href="/" className="hover:text-blue-300 transition">Home</a>
            <a href="#form" className="text-blue-300 underline transition">Get Recommendation</a>
            <a href="#faq" className="hover:text-blue-300 transition">FAQs</a>
            <a href="/contacts" className="hover:text-blue-300 transition">Contact</a>
          </>
        ) : (
          <>
            <a href="/" className="text-blue-300 underline transition">Home</a>
            <a href="#recommendation" className="hover:text-blue-300 transition">Get Recommendation</a>
            <a href="/contact" className="hover:text-blue-300 transition">Contact</a>
          </>
        )}
      </nav>

      {/* Search + Sign In */}
      <div className="flex gap-4 items-center relative">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
          className="w-0 opacity-0 invisible absolute right-24 md:right-60 px-4 py-2 rounded-full bg-gray-100 text-black outline-none transition-all duration-500 ease-in-out"
        />
        <button
          onClick={toggleSearch}
          aria-label="Toggle search bar"
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <i className="fas fa-search text-white active:text-blue-400"></i>
        </button>
        <a
          href="/signup"
          className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-white font-semibold"
        >
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;
