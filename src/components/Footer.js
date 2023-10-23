import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer h-[65vh] p-4 bg-gray-900 flex items-center justify-center flex-col">
      {/* Social Media Icons */}
      <div className="flex space-x-6 justify-center mb-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-gray-500 hover:animate-bounce hover:text-white" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-gray-500 hover:animate-bounce hover:text-white" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-gray-500 hover:animate-bounce hover:text-white" />
        </a>
      </div>
      
      {/* Hours */}
      <div className="text-center text-xl">Hours</div>
      <div className="flex justify-center items-start w-full">
        <div className="text-right flex-1 pr-4"> {/* Right align the text and add padding to separate from border */}
          MON TO SUN<br />
          11:00 to 10:00<br /><br />
          SUN<br />
          Noon to 9:00
        </div>
        <div className="border-l border-white border-opacity-40 h-full self-center"></div>
        <div className="text-left flex-1 pl-4"> {/* Left align the text and add padding to separate from border */}
          HOLIDAYS<br /><br /><br />
          CLOSED<br />
          July 4th, Labor Day<br />
          Thanksgiving Day<br />
          Christmas Day<br />
          New Year's Day<br /><br />
        </div>
      </div>


      {/* Logo */}
      <Image src="/images/search.png" alt="Sushi Sensei Logo" width={150} height={50} className="mt-4 mb-2" />

      {/* Copyright */}
      <div className="font-kanit text-center text-xl tracking-wider leading-relaxed">
        © 2023 by Sushi Sensei. Proudly created with love.
      </div>
    </div>
  );
};

export default Footer;
