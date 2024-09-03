import React, { useState } from 'react';
import Side from './Side';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white p-4 rounded-lg shadow-md">
      {/* Conditional rendering: hide Side component on small screens */}
      <div className="hidden md:block">
        <Side />
      </div>
      <div className="flex-1">
        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row bg-black p-1 rounded-[10px] transition-all duration-300 ease-in-out space-y-2 md:space-y-0 md:space-x-4">
          {['About Me', 'Experiences', 'Recommended'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1.5 px-4 sm:px-6 rounded-full transition-transform duration-300 text-sm sm:text-base ${activeTab === tab ? 'bg-gray-600' : ''
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-3 sm:mt-4">
          {activeTab === 'About Me' && <> <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>

            <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p></>}
          {activeTab === 'Experiences' && <p>Content for Experiences...</p>}
          {activeTab === 'Recommended' && <p>Content for Recommended...</p>}
        </div>
      </div>

      <div className="hidden md:flex h flex w-[26px] items-center relative">
        <div className="border custom-line"></div>
      </div>
    </div>
  );
};

export default Tabs;
