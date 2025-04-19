import React from 'react';

// Import components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Form from '../components/TripPlanningForm';
import TravelCard from '../components/TravelCard';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className="bg-blue-100">
      <Header />
      <HeroSection />
      <Form />
      <TravelCard />
      <Footer />
    </div>
  );
}

export default Home;
