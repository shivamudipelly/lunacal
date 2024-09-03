import React from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Container - Occupies the left half on larger screens */}
      <div className="hidden md:flex md:w-1/3 lg:w-1/2 p-4 md:p-6 border-r border-gray-700">
        {/* Add content for the left container here */}
        <div className="flex flex-col items-start justify-center space-y-4 text-white">
          <h2 className="text-xl md:text-2xl font-bold">Left Container</h2>
          <p className="text-base md:text-lg">
            This area can be used for additional content or navigation.
          </p>
        </div>
      </div>

      {/* Right Container - Occupies the right half on larger screens */}
      <div className="flex flex-col items-center w-full md:w-2/3 lg:w-1/2 p-4 md:px-8 space-y-4 lg:space-y-6 lg:items-start">
        {/* Tabs Section */}
        <div className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[680px] border border-gray-700 rounded-lg shadow-lg">
          <Tabs />
        </div>
        <div className="border-2 border-gray-700 w-full max-w-[360px] sm:max-w-[500px] md:max-w-[600px] lg:w-[680px] line"></div>
        {/* Gallery Section */}
        <div className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[680px] border border-gray-700 rounded-lg shadow-lg">
          <Gallery />
        </div>
        <div className="border-2 border-gray-700 w-full max-w-[360px] sm:max-w-[500px] md:max-w-[600px] lg:w-[680px] line"></div>
      </div>
    </div>
  );
}

export default App;
