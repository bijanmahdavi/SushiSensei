import Head from 'next/head';
import Header from '../components/Header';
import Menu from '../components/OrderMenu';
import SideNav from '../components/SideNav';

const menuData = [
    {
      id: '1',
      name: 'Sushi',
      items: [
        { id: '1', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'] },
        { id: '2', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
        { id: '3', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
        { id: '4', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
        // ... more items
      ],
    },
    {
      id: '2',
      name: 'Drinks',
      items: [
        { id: '1', name: 'Coke', price: 2.99, image: '/images/rolls_royce_roll.jpg' },
        // ... more items
      ],
    },
    {
        id: '3',
        name: 'Baked Rolls',
        items: [
          { id: '1', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'] },
          { id: '2', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          { id: '3', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          { id: '4', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          // ... more items
        ],
      },
      {
        id: '4',
        name: 'Hand Rolls',
        items: [
          { id: '1', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg', badges: ['Popular', 'Spicy', 'Vegan'] },
          { id: '2', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          { id: '3', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          { id: '4', name: 'California Roll', price: 12.99, image: '/images/rolls_royce_roll.jpg' },
          // ... more items
        ],
      },
    // ... more categories
  ];
  

export default function Order() {
  return (
    <>      <Head>
    <title>About Us - Local Sushi Restaurant</title>
    <meta name="description" content="Learn more about our local sushi restaurant." />
    <meta name="keywords" content="sushi, local, restaurant" />
  </Head>
  <Header />
    <div className="flex">
      <SideNav categories={menuData} />
      <Menu menuData={menuData} />
    </div>
    </>
  );
}
