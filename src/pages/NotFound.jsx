import React from "react";

const NotFound = ({ url = "/unknown", method = "GET" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-6">
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-float">
          404
        </h1>

        <p className="text-2xl text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl w-full max-w-md mx-auto text-left text-sm space-y-2 shadow-lg">
          <p>
            <span className="text-gray-400 font-semibold">Incorrect URL:</span>{" "}
            <span className="text-pink-400">{url}</span>
          </p>
          <p>
            <span className="text-gray-400 font-semibold">Method:</span>{" "}
            <span className="text-blue-400">{method}</span>
          </p>
        </div>

        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          ⬅ Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
