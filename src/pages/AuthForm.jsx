import React, { useState } from "react";

const AuthForm = () => {
  const [formType, setFormType] = useState("login");

  const switchForm = (type) => {
    setFormType(type);
  };

  const putData = () => {
    // Handle signup logic here
    console.log("Signup data submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-blue-400 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300">
        {/* Login Form */}
        {formType === "login" && (
          <div id="loginForm">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
            <form action="/login" method="POST">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  autoComplete="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-800 to-blue-400 hover:opacity-90 text-white py-2 rounded-lg font-semibold"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => switchForm("signup")}
                className="text-green-500 hover:underline"
              >
                Create an account
              </button>
            </div>
          </div>
        )}

        {/* Signup Form */}
        {formType === "signup" && (
          <div id="signupForm">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Signup</h2>
            <form action="/signup" method="POST">
              <div className="mb-4">
                <label htmlFor="newUsername" className="block text-gray-600">Username:</label>
                <input
                  type="text"
                  id="newUsername"
                  name="username"
                  required
                  autoComplete="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newEmail" className="block text-gray-600">Email:</label>
                <input
                  type="email"
                  id="newEmail"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-gray-600">Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  name="password"
                  required
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="button"
                onClick={putData}
                className="w-full bg-gradient-to-r from-green-800 to-blue-400 hover:opacity-90 text-white py-2 rounded-lg font-semibold"
              >
                Signup
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => switchForm("login")}
                className="text-green-500 hover:underline"
              >
                Already have an account?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;