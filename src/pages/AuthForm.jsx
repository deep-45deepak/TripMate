import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  updateDoc,
  getDocs,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const AuthForm = () => {
  const [formType, setFormType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const switchForm = (type) => {
    setFormType(type);
    setError("");
  };

  // Save user data to Firestore
  const saveUserToFirestore = async (userId, email, username) => {
    try {
      await setDoc(doc(db, "users", userId), {
        email,
        username,
        createdAt: new Date(),
        lastLogin: new Date(),
      });
      console.log("User data saved to Firestore");
    } catch (error) {
      console.error("Error saving user data:", error);
      setError("Failed to save user data");
    }
  };

  // Check if username exists in Firestore
  const checkUsernameExists = async (username) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        // Create a username from email if not exists
        const generatedUsername = user.email.split('@')[0];
        await saveUserToFirestore(user.uid, user.email, generatedUsername);
      } else {
        // Update last login time for existing Google user
        await updateDoc(doc(db, "users", user.uid), {
          lastLogin: new Date(),
        });
      }

      console.log("Google sign-in successful", user);
      // Redirect or update app state here
    } catch (error) {
      setError(error.message);
      console.error("Google sign-in error", error);
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      // Check if username exists
      const usernameExists = await checkUsernameExists(username);
      if (usernameExists) {
        throw new Error("Username already exists");
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save additional user data to Firestore
      await saveUserToFirestore(user.uid, email, username);

      console.log("Signup successful", user);
      // Redirect or update app state here
    } catch (error) {
      setError(error.message);
      console.error("Signup error", error);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update last login time in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        lastLogin: new Date(),
      });

      console.log("Login successful", user);
      // Redirect or update app state here
    } catch (error) {
      setError(error.message);
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-blue-400 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300">
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        {formType === "login" && (
          <div id="loginForm">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
            <form onSubmit={handleEmailLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            {/* Google Sign-In Button */}
            <div className="mb-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
            </div>
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
            <form onSubmit={handleEmailSignUp}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
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