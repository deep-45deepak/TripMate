import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-teal-900 text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="font-bold bg-gradient-to-r from-teal-500 via-blue-400 to-pink-500 text-transparent bg-clip-text">
              TripMate
            </span>
          </h2>
          <p className="mt-2 text-gray-300">
            Your personal travel planner for unforgettable adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Destinations</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p className="mt-2 text-gray-300">Get the latest trip updates & deals.</p>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-l-lg text-black"
              required
            />
            <button className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
        © 2025 TripPal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
