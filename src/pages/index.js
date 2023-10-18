import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoHeroSection from '../components/VideoHeroSection';
import MenuSection from '../components/Menu';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutSection';

function HomePage() {
  return (
    <div className="home">
      <Head>
        <title>Sushi Restaurant</title>
        <meta name="description" content="Learn more about our local sushi restaurant." />
        <meta name="keywords" content="sushi, local, restaurant" />
      </Head>
      <Header />
      <VideoHeroSection />
      <MenuSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
