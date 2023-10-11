import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center bg-gray-800 opacity-80 sticky top-0 z-50 h-16">
        <Navbar />
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center p-4 sticky top-0 z-50 bg-gray-800 opacity-80">
        <button onClick={toggleMenu} className={isOpen ? 'close-icon turn' : 'hamburger'}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className="flex items-center">
          <Image src="/images/sushi_logo.png" alt="Sushi Logo" width={50} height={50} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 bg-gray-800 opacity-95 w-3/4 h-screen top-14 overflow-y-auto md:hidden`}>
        {<Navbar/>}
      </div>
    </>
  );
};

export default Header;
