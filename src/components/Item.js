import { useState } from 'react';
import Image from 'next/image';
import MenuModal from './MenuModal';
import { useCart } from './CartContext';

const Item = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderBadge = (badge, isDesktop = false) => {
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
    if (badge === 'Popular') {
      return (
        <span className="absolute top-0 left-0 bg-green-200 px-1 py-0.5 text-xs rounded-lg opacity-70 z-10">
          🌟 {isDesktop ? 'Popular' : ''}
        </span>
      );
    }

    return (
      <span className={`inline-block ${bgColor} ${textColor} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
        {icon} {badge}
      </span>
    );
  };

  const cartItemCount = cart.filter(cartItem => cartItem.id === item.id).length;

  console.log(isModalOpen);

  return (
    <div onClick={openModal} className="w-full md:w-auto">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-start p-4 border rounded-md shadow-lg w-full">
        <div className="flex w-full">
          <div className="relative w-[120px] h-[120px]">
            {item.badges?.includes('Popular') && renderBadge('Popular')}
            <Image src={item.image} alt={item.name} width={120} height={120} />
          </div>
          <div className="flex-1 pl-4">
            <div className="font-medium">{item.name}</div>
            <div className="text-gray-500">${item.price}</div>
            <div className="text-sm text-black mt-1">{item.description}</div>
            <div className="mt-2 flex flex-wrap">
              {item.badges && item.badges.map(badge => badge !== 'Popular' && renderBadge(badge))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center p-6 border rounded-md shadow-sm w-full">
        {item.image && (
          <div className="relative w-48 h-48 mb-2 overflow-hidden rounded">
            {item.badges?.includes('Popular') && renderBadge('Popular', true)}
            <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="z-0" />
          </div>
        )}
        <div className="text-center">
          <span className="block font-medium">{item.name}</span>
          <span className="text-sm text-gray-500">${item.price}</span>
        </div>
        <div className="mt-2">
          {item.badges && item.badges.map(badge => badge !== 'Popular' && renderBadge(badge))}
        </div>
      </div>

      {isModalOpen && (
        <MenuModal item={item} onClose={closeModal} />
      )}
    </div>
  );
};

export default Item;
