import React, { useEffect, useState } from 'react';
import Popup from '../components/Popup';

const images = [
  'https://images.pexels.com/photos/356860/pexels-photo-356860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Italian Coast/Village (e.g., Cinque Terre vibe)
  'https://images.pexels.com/photos/10330954/pexels-photo-10330954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Tropical beach with palm trees
  'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Mountain lake scenery (e.g., Dolomites)
  'https://images.pexels.com/photos/15862590/pexels-photo-15862590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Desert landscape with dunes
  'https://images.pexels.com/photos/10006764/pexels-photo-10006764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // bustling Cityscape at night (e.g., New York, Tokyo)
  'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Ancient ruins/historical site (e.g., Rome, Greece)
  'https://images.pexels.com/photos/2544284/pexels-photo-2544284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Snowy landscape / Winter destination
  'https://images.pexels.com/photos/1098522/pexels-photo-1098522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  // Waterfall in lush forest
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-96 md:h-[500px] w-auto overflow-hidden flex items-center justify-center rounded-xl m-2">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text content (appears over every image) */}
      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Personalized Trip Recommendations</h1>
      
  <div className='m-4'>
  <Popup />
  </div>
      </div>
    </section>
  );
};

export default HeroSection;
