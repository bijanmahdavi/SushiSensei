import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  let lastScroll = 0;

  const handleScroll = () => {
    const heroText = document.querySelector('.heroText');
    const imageContainer = document.querySelector('.imageContainer');
    const scrollY = window.scrollY;

    // Null check for heroText and imageContainer
    if (heroText && imageContainer) {
      try {
        // Move text up while scrolling down
        heroText.style.transform = `translate(-50%, calc(-50% + ${-scrollY * 0.3}px))`;
        heroText.style.opacity = 1 - scrollY / 1000;

        // If scrolling direction changes to upwards, instantly reset image position
        if (scrollY < lastScroll) {
          imageContainer.style.transform = 'translateY(0)';
        } else {
          // Otherwise, continue with the parallax effect
          imageContainer.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

      // Update lastScroll for the next scroll event
      lastScroll = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="heroSection">
      <div className="imageContainer">
        <Image 
          src="/images/water.jpg" 
          alt="Description" 
          quality={100}
          layout="fill"
          objectFit="cover" 
        />
      </div>
      <div className="heroText">
        <h1>Welcome to Sushi Sensei</h1>
        <p>Experience the finest sushi in West Hollywood.</p>
        <a href="/order" target="_blank" rel="noopener noreferrer">
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

export default HeroSection;
