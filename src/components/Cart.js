import { useCart } from './CartContext';
import { useEffect, useState } from 'react';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, addToCart, updateCartItem } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  
  const totalItems = calculateTotalItems();

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
  
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);
  
  // This useEffect recalculates the total price whenever the cart changes
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cart]);
  
  const handleSelectChange = (itemId, value) => {
    if (value === 'Remove') {
      removeFromCart(itemId);
    } else {
      const itemToUpdate = cart.find(item => item.id === itemId);
      if(itemToUpdate) {
        updateCartItem(itemId, Number(value));
      }
    }
  };
  
  const closeOnClickOutside = (e) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out overlay ${isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} onClick={closeOnClickOutside}></div>
        <div className={`fixed top-0 right-0 h-full w-full md:w-1/4 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Sushi Sensei</h2>
              <button className="btn-circle" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between mb-2 border-b">
              <h3 className="text-lg">{totalItems} {totalItems === 1 ? 'item' : 'items'}</h3>
              <h3 className="text-lg mb-2">Subtotal: ${totalPrice}</h3>
            </div>
            <ul className="flex-grow overflow-y-auto">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center border-b-2 py-2">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="h-12 w-12 rounded mr-4" />
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">${item.price.toFixed(2)} x {item.quantity}</span>
                    <select className="bg-gray-100 rounded-xl py-0 px-2 ml-2 text-lg outline outline-1 outline-gray-300" value={item.quantity} onChange={(e) => handleSelectChange(item.id, e.target.value)}>
                      <option value="Remove">Remove</option>
                      {[...Array(99).keys()].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-semibold">
                  Subtotal: ${totalPrice}
                </div>
              </div>
            <button className="w-full bg-black text-white rounded p-3">Go to checkout</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cart;
