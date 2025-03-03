import React, { useState } from 'react';

const Navbar = ({ onNavigate, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl">ShopEase</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`px-3 py-2 rounded-md font-medium ${
                    activePage === 'home' ? 'bg-blue-700' : 'hover:bg-blue-700'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('users')}
                  className={`px-3 py-2 rounded-md font-medium ${
                    activePage === 'users' ? 'bg-blue-700' : 'hover:bg-blue-700'
                  }`}
                >
                  Users
                </button>
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:bg-blue-700">About</a>
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:bg-blue-700">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavClick('home')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activePage === 'home' ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('users')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activePage === 'users' ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Users
            </button>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;