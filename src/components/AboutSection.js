import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const getBackgroundColor = (dayIndex, index) => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const openTime = 11 * 60; // 11:00 AM in minutes
    const closeTime = 22 * 60; // 10:00 PM in minutes

    const alternateBgColor = index % 2 === 0 ? 'bg-neutral-100' : 'bg-white';

    if (currentDay === dayIndex) {
      return currentTime >= openTime && currentTime <= closeTime ? 'bg-green-200' : 'bg-red-200';
    }
    return alternateBgColor;
  };


  return (
    <div className="flex flex-wrap p-10 bg-gray-100 items-center">
      {/* Left Side - About Us */}
      <div className="w-full md:w-1/2 p-0 md:p-5">
        <h1 className="text-4xl font-bold mb-4">Hours</h1>
        <p className="text-lg">
          Welcome to our newest RA Sushi restaurant! Come in and explore your adventurous side. From the unique blend of creative sushi and the innovative menu from our Asian kitchen to the handcrafted cocktails from the bar, the energetic atmosphere at RA is where you can celebrate life and embrace the unexpected.
          <br></br>
          RA Times Square offers lunch and dinner service, a cocktail bar and sushi bar, private dining, group seating, catering, delivery and happy hour. With a great location blocks away from the heart of Times Square and directly across the street from The Lyric Theater, come and see us soon!
          <br></br>
          
          Located at 229 West 43rd Street between 7th & 8th avenues.
          <br></br>
          <br></br>
          <a role="button" href="tel:8187302166" target='_blank' class="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-2xl md:text-3xl mt-4">8187302166 </a>
          <br></br>
          <br></br>
          PARKING
          <br></br>
          123 Santa Monica Blvd, Unit 3, West Hollywood, CA 90046
        </p>
        <br></br>
          <a role="button" href="https://www.google.com/maps" target='_blank' 
          class="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-md md:text-3xl mt-4 md:mr-[1rem]">123 Santa Monica Blvd, West Hollywood, CA 90046 </a>
      </div>

      {/* Right Side - Hours Table */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <a href="https://maps.app.goo.gl/pA62yvXqurqa9nRh8" target="_blank" rel="noopener noreferrer">
          <div className="mockup-phone rotate-[-0deg]">
            <div className="camera"></div> 
            <div className="display">

              <div className="artboard artboard-demo phone-1">

                <img className ="h-full w-fill"
                    src="/images/map.png" 
                    alt="Description"
                  />

              </div>

            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
