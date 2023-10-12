import { useCart } from './CartContext';
import { useEffect } from 'react';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

  // Close sidebar on "Esc" press
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
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out overlay ${isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} onClick={closeOnClickOutside}></div>
      <div className={`fixed top-0 right-0 h-full w-full md:w-4/12 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="btn-circle absolute top-2 right-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4 mt-8">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex flex-col md:flex-row justify-between items-center mt-4">
                <div className="mb-2 md:mb-0">
                  {item.name} - ${item.price} x {item.quantity}
                </div>
                <button className="bg-red-500 text-white rounded p-2" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-semibold">
              Total: ${totalPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
