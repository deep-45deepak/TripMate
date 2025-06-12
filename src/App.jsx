import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components for each route
import Home from './pages/Home';
import AuthForm from './pages/AuthForm';
import Suggestion from './pages/Suggestion'
import Destination from './pages/TravelDestinationPage';
import ContactMe from "./components/ContactMe";
import Error from './pages/NotFound';
import { TripsProvider } from './context/TripsContext';
import { TripFormProvider } from './context/TripFormContext';


function App() {
  return (
    <TripFormProvider>
      <TripsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<AuthForm />} />
            <Route path="/suggest" element={<Suggestion />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/trip-details/:id/:location" element={<Destination />} />
            <Route path="*" element={<Error />} /> {/* This handles 404 errors */}
          </Routes>
        </Router>
      </TripsProvider>
    </TripFormProvider>
  );
}

export default App;
