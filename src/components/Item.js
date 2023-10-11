import { useState } from 'react';
import Image from 'next/image';
import MenuModal from './MenuModal';

const Item = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderBadge = (badge) => {
    let bgColor = 'bg-gray-200';
    let textColor = 'text-gray-700';
    let icon = '';

    if (badge === 'Spicy') {
      bgColor = 'bg-orange-200';
      textColor = 'text-orange-700';
      icon = '🔥';
    }
    if (badge === 'Vegan') {
      bgColor = 'bg-green-200';
      textColor = 'text-green-700';
      icon = '🌿';
    }

    return badge === 'Popular' ? null : (
      <span key={badge} className={`inline-block ${bgColor} ${textColor} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
        {icon} {badge}
      </span>
    );
  };

  return (
    <div>
      <li className="flex flex-col items-center p-6 border rounded-md shadow-sm relative transform transition-transform duration-300 hover:scale-105 m-4 cursor-pointer" onClick={openModal}>
        <div className="w-48 h-48 relative mb-2 overflow-hidden rounded">
          {item.badges?.includes('Popular') && (
            <span className="absolute top-0 left-0 bg-green-200 text-green-700 px-1 py-0.5 text-xs rounded-bl-md opacity-80 z-10">🌟 Popular</span>
          )}
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="z-0" />
        </div>
        <div className="text-center">
          <span className="block font-medium">{item.name}</span>
          <span className="text-sm text-gray-500">${item.price}</span>
        </div>
        <div className="mt-2">
          {item.badges && item.badges.map((badge) => renderBadge(badge))}
        </div>
      </li>
      {isModalOpen && (
        <MenuModal item={item} onClose={closeModal} />
      )}
    </div>
  );
};

export default Item;
