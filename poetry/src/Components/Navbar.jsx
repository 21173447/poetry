import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#41352e] bg-opacity-90 text-white p-4 fixed top-0 left-0 w-full z-10">  {/* Added fixed, top-0, left-0, w-full, z-10 */}
      <div className="flex items-center justify-between">
        <div className="text-[#9c5d36] font-bold text-xl">POETRY<span className='text-white'>ZONE</span></div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-white hover:text-[#9c5d36]">Home</a></li>
            <li><a href="/about" className="text-white hover:text-[#9c5d36]">About</a></li>
            <li><a href="/services" className="text-white hover:text-[#9c5d36]">Services</a></li>
            <li><a href="/contact" className="text-white hover:text-[#9c5d36]">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
