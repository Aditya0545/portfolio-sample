import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../data/content';

function Home() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] -mt-16">
      <div className="container mx-auto px-8 pt-32">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white lg:max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {homeContent.greeting} <span className="text-[#4B9BFF]">{homeContent.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              {homeContent.role}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/projects" 
                className="bg-[#4B9BFF] text-white px-8 py-3 rounded-full hover:bg-[#3d8af7] transition-colors"
              >
                {homeContent.buttons.projects}
              </Link>
              <Link 
                to="/contact" 
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1a1f2e] transition-colors"
              >
                {homeContent.buttons.contact}
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-[#4B9BFF] overflow-hidden">
              <img 
                src={homeContent.profileImage} 
                alt={homeContent.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 