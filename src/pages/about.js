import Head from 'next/head';
import Header from '../components/Header';
import ImageModal from '../components/ImageModal';

const AboutUs = () => {
  const staffImages = [
    {
      src: "/images/owner.png",
      title: "The Owner",
      description: "The person behind the vision."
    },
    {
      src: "/images/chef.png",
      title: "Our Head Chef",
      description: "The culinary master."
    },
    {
      src: "/images/chef2.png",
      title: "Our Chef",
      description: "The culinary apprentance."
    },
    {
      src: "/images/waitress.png",
      title: "Our Waitress",
      description: "The culinary master."
    },
    // ... add more staff images with titles and descriptions
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
        <h1 className="text-4xl mb-6 text-center text-black">Our Amazing Staff</h1>
        <ImageModal images={staffImages} columns="md:grid-cols-2" />
      </div>
    </div>
  );
};

export default AboutUs;
