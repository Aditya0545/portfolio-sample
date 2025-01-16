import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | Python Expert | Open Source Contributor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* Add your profile image or animation here */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-400 mx-auto overflow-hidden">
                <img
                  src="/your-profile-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 