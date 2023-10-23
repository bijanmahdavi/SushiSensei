import Head from 'next/head';
import Header from '../components/Header';
import Menu from '../components/OrderMenu';
import SideNav from '../components/SideNav';
import Cart from '../components/Cart';
import { useState } from 'react';
import { useCart } from '../components/CartContext';

const menuData = [
    {
      id: '1',
      name: 'Sushi',
      items: [
        { id: '1', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
        { id: '2', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
        { id: '3', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
        { id: '4', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
        // ... more items
      ],
    },
    {
      id: '2',
      name: 'Drinks',
      items: [
        { id: '5', name: 'Coke', price: 2.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
        // ... more items
      ],
    },
    {
        id: '3',
        name: 'Baked Rolls',
        items: [
          { id: '8', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '9', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '10', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '11', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
      {
        id: '4',
        name: 'Hand Rolls1',
        items: [
          { id: '12', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '13', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '14', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '15', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
      {
        id: '5',
        name: 'Hand Rolls2',
        items: [
          { id: '16', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '17', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '18', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '19', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
      {
        id: '6',
        name: 'Hand Rolls3',
        items: [
          { id: '20', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '21', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '22', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '23', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
      {
        id: '7',
        name: 'Hand Rolls4',
        items: [
          { id: '24', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '25', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '26', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '27', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
      {
        id: '8',
        name: 'Hand Rolls5',
        items: [
          { id: '12', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'], description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '13', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '14', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          { id: '15', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', description: 'A classic roll with crab, avocado, and cucumber.' },
          // ... more items
        ],
      },
    // ... more categories
  ];
  

  export default function Order() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useCart();
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen); 
    };
  
    const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    return (
      <>
        <Head>
          <title>About Us - Local Sushi Restaurant</title>
          <meta name="description" content="Learn more about our local sushi restaurant." />
          <meta name="keywords" content="sushi, local, restaurant" />
        </Head>
  
        {/* Mobile view: Header and SideNav in sticky container */}
        <div className="md:hidden sticky top-0 z-50 bg-gray-800">
          <Header />
          <div className="overflow-x-auto whitespace-nowrap">
            <SideNav categories={menuData} />
          </div>
        </div>
  
        {/* Desktop view: Header (Make sure it has 'position: sticky; top: 0;' in its CSS) */}
        <div className="hidden md:block sticky top-0 z-50">
          <Header />
        </div>
  
        <button 
          onClick={toggleCart} 
          className="hidden md:block fixed top-16 right-4 bg-blue-500 text-white p-4 rounded-full z-50"
        >
          🛒
        </button>
  
        {totalItemsInCart > 0 && (
  <>
          <div 
            className="md:hidden fixed bottom-0 left-0 right-0 h-[calc(5vh)] bg-white z-40">
          </div>
          <button 
            onClick={toggleCart}
            className="md:hidden fixed btn bottom-4 ml-2.5 mt-4 w-[95%] bg-black text-white p-2 rounded z-50"
          >
          View Cart ({totalItemsInCart})
          </button>
          </>
          )}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  
      {/* Main content */}
      <div className="flex flex-col md:flex-row hide">
        {/* Desktop SideNav */}
        <div className="hidden md:block">
          <SideNav categories={menuData} />
        </div>
        {/* Main Menu */}
        <div className="flex-1">
          <Menu menuData={menuData} />
        </div>
      </div>
    </>
  );
}
  