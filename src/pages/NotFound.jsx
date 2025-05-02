import React from "react";

const NotFound = ({ url = "/unknown", method = "GET" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 text-white p-6">
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teak-500 to-green-500 animate-float">
          404
        </h1>

        <p className="text-2xl text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
           Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
