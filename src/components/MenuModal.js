import Image from 'next/image';
import { useEffect, useState } from 'react';

const MenuModal = ({ item, onClose }) => {
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(1);

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

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  const closeOnClickOutside = (e) => {
    if (e.target.classList.contains('modal-container')) {
      onClose();
    }
  };

  const totalPrice = (item.price * selectedAmount).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-container" onClick={closeOnClickOutside}>
      <div className="bg-white ml-4 rounded-lg p-8 flex justify-center items-center relative" style={{ width: '1056px', minHeight: '580px' }}>
        <button className="btn-circle absolute ml-3 top-2 left-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative mt-10" style={{ width: '492px', height: '492px' }}>
          {item.badges?.includes('Popular') && (
            <span className="absolute top-0 left-0 bg-green-200 text-green-700 px-1 py-0.5 text-xs rounded-bl-md opacity-80 z-10 select-none">🌟 Popular</span>
          )}
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
        </div>
        {/* Details */}
        <div className="flex flex-col justify-center items-start ml-8" style={{ width: '492px', height: '492px' }}>
          <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
          <span className="text-lg text-gray-600 mb-4">${item.price}</span>
          <p className="text-md text-gray-600 mb-4">Item description here...</p>
          <div className="flex flex-wrap select-none">
            {item.badges && item.badges.map((badge) => renderBadge(badge))}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-xl">Special Instructions</span>
            </label>
            <textarea className="textarea bg-white textarea-bordered h-24 text-lg" placeholder="Add a note" value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}>
            </textarea>
            <label className="label">
              <span className="text-base label-text-alt">You may be charged for extras.</span>
            </label>
          </div>
           {/* Amount Selector */}
          <div className="flex items-center mb-4 select-none">
            <select className="bg-gray-100 rounded-xl py-0 px-2 mt-4 text-lg outline outline-1 outline-gray-300" value={selectedAmount} onChange={(e) => setSelectedAmount(e.target.value)}>
              {[...Array(99).keys()].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>
          {/* Add to Cart Button */}
          <button className="btn mt-4 w-full bg-black text-white p-2 rounded">
            Add {selectedAmount} to order • ${totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
