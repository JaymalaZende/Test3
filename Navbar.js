import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,  // Changed from 10 to 0 for scrolling to the top
      behavior: 'smooth',
    });
  };

  return (
    <nav className="bg-black sticky top-0 left-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex  items-center">
            <img className="w-20 h-20 mr-4" src={require('./Logo1.2.png')} alt="Logo" />
            <Link to="/" className="text-white font-serif text-2xl font-bold">Prabhuram Gurukul</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden font-serif text-lg md:flex md:items-center text-white md:space-x-4">
            <div onClick={scrollToTop}>
              <Link to="/" className =" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/aboutuspage" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/admission" className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Admission Process</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/Contact-us" className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact Us</Link>
            </div>
            {/* <div onClick={scrollToTop}>
              <Link to="/news" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">News</Link>
            </div> */}
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col space-y-4 md:hidden mt-4">
            <div onClick={scrollToTop}>
              <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/aboutuspage" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About s</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/admission" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Admission Process</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/Contact-us" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact Us</Link>
            </div>
            <div onClick={scrollToTop}>
              <Link to="/news" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">News</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
