import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Import components for each route
import Home from './pages/Home';
import Login from './pages/AuthForm';
import Suggestion from './pages/Suggestion'
import Destination from './pages/TravelDestinationPage';
import Error from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/suggest" element={<Suggestion />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="*" element={<Error />} /> {/* This handles 404 errors */}
      </Routes>
    </Router>
  );
}

export default App;
