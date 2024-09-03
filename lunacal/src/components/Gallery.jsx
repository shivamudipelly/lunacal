import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Side from './Side';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample image URLs
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const itemsToShow = 3;
  const totalItems = images.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalItems - itemsToShow ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <div className='hidden md:block'>
      <Side/>
      </div>
      <div>
        <div className="flex justify-between items-center pb-2 mb-4">
          <h2 className="text-lg font-bold bg-black p-2 lg:p-4 rounded-2xl">Gallery</h2>
          <div className="flex space-x-2 items-center">
            <button className="bg-gray-700 py-1 px-2 lg:px-3 rounded-full">+ ADD IMAGE</button>
            <div
              className="w-8 lg:w-10 h-8 lg:h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
              onClick={handlePrev}
            >
              <FaArrowLeft className="text-sm lg:text-xl" />
            </div>
            <div
              className="w-8 lg:w-10 h-8 lg:h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
              onClick={handleNext}
            >
              <FaArrowRight className="text-sm lg:text-xl" />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 m-4"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 h-[150px] lg:h-[200px] px-2 lg:px-4">
                <img
                  src={src}
                  alt={`Sample ${index}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
