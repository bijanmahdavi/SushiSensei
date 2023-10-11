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
      <div className="w-full md:w-1/2 p-5">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to our newest RA Sushi restaurant! Come in and explore your adventurous side. From the unique blend of creative sushi and the innovative menu from our Asian kitchen to the handcrafted cocktails from the bar, the energetic atmosphere at RA is where you can celebrate life and embrace the unexpected.
          <br></br>
          RA Times Square offers lunch and dinner service, a cocktail bar and sushi bar, private dining, group seating, catering, delivery and happy hour. With a great location blocks away from the heart of Times Square and directly across the street from The Lyric Theater, come and see us soon!
          <br></br>
          
          Located at 229 West 43rd Street between 7th & 8th avenues.
          <br></br>
          <br></br>
          <a role="button" href="tel:8187302166" target='_blank' class="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-3xl mt-4">8187302166 </a>
          <br></br>
          <br></br>
          PARKING
          <br></br>
          123 w. Pear Street, Unit 3, West Hollywood, CA 90036
        </p>
        <br></br>
          <a role="button" href="https://www.google.com/maps" target='_blank' 
          class="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-3xl mt-4 mr-[1rem]">123 w. Pear Street, Unit 3, West Hollywood, CA 90036 </a>
        
{/*         <div className="mockup-phone rotate-[-0deg]">
          <div className="camera"></div> 
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img className ="h-full w-fill"
                  src="/images/water.jpg" 
                  alt="Description"
                />
            </div>
          </div>
        </div> */}
      </div>

      {/* Right Side - Hours Table */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-3/4">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-lg">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-10 py-5">Hours</th>
                    <th scope="col" className="px-10 py-5">Open</th>
                    <th scope="col" className="px-10 py-5">Close</th>
                  </tr>
                </thead>
                <tbody>
                  {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
                    <tr key={index} className={`border-b hover:bg-neutral-200 ${getBackgroundColor(index, index)}`}>
                      <td className="whitespace-nowrap px-10 py-5 font-medium">{day}</td>
                      <td className="whitespace-nowrap px-10 py-5">11:00 AM</td>
                      <td className="whitespace-nowrap px-10 py-5">10:00 PM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
