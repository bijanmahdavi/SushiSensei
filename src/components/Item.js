import { useState } from 'react';
import Image from 'next/image';
import MenuModal from './MenuModal';
import { useCart } from './CartContext';

const Item = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

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

    return (
      <span key={badge} className={`inline-block ${bgColor} ${textColor} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
        {icon} {badge}
      </span>
    );
  };

  const cartItemCount = cart.filter(cartItem => cartItem.id === item.id).length;
  
  console.log(isModalOpen);
  return (
    <div onClick={openModal}>
     {/* Mobile Layout */}
     <div className="md:hidden flex flex-col items-start p-6 border rounded-md shadow-sm w-full">
        {item.image ? (
          <div className="flex w-full">
            <div className="w-[112px] h-[112px]">
              <Image src={item.image} alt={item.name} width={112} height={112} />
            </div>
            <div className="flex-1 pl-4">
              <div className="font-medium">{item.name}</div>
              <div className="text-gray-500">${item.price}</div>
              <div className="mt-2">{item.badges && item.badges.map(renderBadge)}</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="font-medium">{item.name}</div>
            <div className="text-gray-500">${item.price}</div>
            <div className="mt-2">{item.badges && item.badges.map(renderBadge)}</div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center p-6 border rounded-md shadow-sm w-full">
        {item.image && (
          <div className="w-48 h-48 relative mb-2 overflow-hidden rounded">
            <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="z-0" />
          </div>
        )}
        <div className="text-center">
          <span className="block font-medium">{item.name}</span>
          <span className="text-sm text-gray-500">${item.price}</span>
        </div>
        <div className="mt-2">
          {item.badges && item.badges.map(renderBadge)}
        </div>
      </div>
      
      {isModalOpen && (
        <MenuModal item={item} onClose={closeModal} />
      )}
    </div>
  );
};

export default Item;
