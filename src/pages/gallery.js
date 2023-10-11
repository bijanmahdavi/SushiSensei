// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>About Us - Local Sushi Restaurant</title>
        <meta name="description" content="Learn more about our local sushi restaurant." />
        <meta name="keywords" content="sushi, local, restaurant" />
      </Head>
      <Header />
      {/* About Us content here */}
    </>
  );
};

export default Gallery;
