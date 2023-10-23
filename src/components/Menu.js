import React from 'react';
import Image from 'next/image';

const MenuSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[75vh] md:h-[calc(100vh-3.97rem)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/background.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Black overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-80"></div>
      {/* Content */}
      <div className="relative z-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Menu</h2>
        <p className="font-kanit mb-8 px-4 text-white">Discover the wide variety of mouth-watering sushi we offer.</p>
        <div className="flex justify-center pb-4">
          <Image 
            src="/images/menuai.jpg"
            alt="Menu Image"
            width={937}
            height={612}
          />
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 mt-4">
          <a href="/menu" rel="noopener noreferrer">
            <button 
              type="button"
              className="btn btn-ghost font-kanit text-red-600 hover:bg-red-600 hover:text-white hover:border-black text-center text-xl md:text-3xl h-[3rem] md:h-[4rem] px-[1rem] md:px-[1.5rem]"
            >
              View Menu
            </button>
          </a>
          <a href="https://7455sushibyroshi.blizzfull.com/" target="_blank" rel="noopener noreferrer">
            <button 
              type="button"
              className="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-xl md:text-3xl h-[3rem] md:h-[4rem] px-[1rem] md:px-[1.5rem]"
            >
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;


/* import React from 'react';
import Image from 'next/image';

const MenuSection = () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center h-[75vh] md:h-[calc(100vh-3.97rem)]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
        <p className="font-kanit mb-8 px-4">Discover the wide variety of mouth-watering sushi we offer.</p>
        <div className="flex justify-center pb-4">
          <Image 
            src="/images/menuai.jpg"
            alt="Menu Image"
            width={937}
            height={612}
          />
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 mt-4">
          <a href="/menu" rel="noopener noreferrer">
            <button 
              type="button"
              className="btn btn-ghost font-kanit text-red-600 hover:bg-red-600 hover:text-white hover:border-black text-center text-xl md:text-3xl h-[3rem] md:h-[4rem] px-[1rem] md:px-[1.5rem]">
              View Menu
            </button>
          </a>
          <a href="https://7455sushibyroshi.blizzfull.com/" target="_blank" rel="noopener noreferrer">
            <button 
              type="button"
              className="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-xl md:text-3xl h-[3rem] md:h-[4rem] px-[1rem] md:px-[1.5rem]">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
 */