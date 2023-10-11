import React from 'react';
import Image from 'next/image';

const MenuSection = () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center h-[75vh] md:h-[calc(100vh-3.97rem)]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
        <p className="font-kanit mb-8">Discover the wide variety of mouth-watering sushi we offer.</p>
        <div className="flex justify-center">
          <Image 
            src="/images/menuai.jpg"
            alt="Menu Image"
            width={937}
            height={612}
          />
        </div>
        <a href="/menu" rel="noopener noreferrer">
          <button 
            type="button"
            className="btn btn-ghost font-kanit text-red-600 hover:bg-red-600  hover:text-white hover:border-black text-center text-3xl mt-4 mr-7 h-[4rem] px-[1.5rem]">
            View Menu
          </button>
        </a>
        <a href="https://7455sushibyroshi.blizzfull.com/" target="_blank" rel="noopener noreferrer">
          <button 
            type="button"
            className="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-3xl mt-4">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default MenuSection;
