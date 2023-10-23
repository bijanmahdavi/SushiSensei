// pages/about.js (or wherever your Menu component is)
import Head from 'next/head';
import Header from '../components/Header';
import ImageModal from '../components/ImageModal';  // <-- Import the ImageModal component

const Menu = () => {
  const menuImages = [
    "/images/menu2.png",
    "/images/menu4.png",
    "/images/menu3.png",
    "/images/menu1.png",
    "/images/menuai.jpg",
    // ... add more menu images
  ];

  return (
    <div className='bg-white'>
      <Head>
        <title>About Us - Local Sushi Restaurant</title>
        <meta name="description" content="Learn more about our local sushi restaurant." />
        <meta name="keywords" content="sushi, local, restaurant" />
      </Head>
      <Header />
      <div className="mx-auto py-12 w-full px-4 lg:px-16">
        <h1 className="text-4xl mb-6 text-center text-black">Our Menus</h1>
        <ImageModal images={menuImages} columns="md:grid-cols-3" />
      </div>
    </div>
  );
};

export default Menu;
