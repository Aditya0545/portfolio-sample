import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/experience" className="hover:text-gray-300">Experience</Link>
            <Link to="/achievements" className="hover:text-gray-300">Achievements</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/projects" className="block px-3 py-2 rounded-md hover:bg-gray-700">Projects</Link>
            <Link to="/experience" className="block px-3 py-2 rounded-md hover:bg-gray-700">Experience</Link>
            <Link to="/achievements" className="block px-3 py-2 rounded-md hover:bg-gray-700">Achievements</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 