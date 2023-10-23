import React from 'react';
import Image from 'next/image';

const HoursComponent = () => {
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
    <div className="p-10 bg-gray-200 flex">
      <div className="w-2/5 relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image
          src="/images/outside.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='z-10 hover:scale-105 transition-transform duration-500'
        />
      </div>

      <div className="w-3/5 pl-10">
        <h1 className="text-4xl font-bold mb-4">Hours of Operation</h1>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2">
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

export default HoursComponent;