import React, { useEffect, useState } from 'react';
import Popup from '../components/Popup';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Hhw6Z4SH93Al6wtLuOL8j2MigZ7DVtSgdQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvlwvvOAqmFcjpUf3EvL_K84vfwHwZUGsYg&s',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nnBNZWgDOqF0rBqB0kyQnmRHaA7jSsSITA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3SPCrd4Jg5b0XjXzbF5K67KDjXPXYKZjTA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wWl10Dfq2IXs9U-Xmi3KDrV52clg62GJhw&s'
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
