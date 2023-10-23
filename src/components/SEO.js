import Head from 'next/head';
import Image from 'next/image';

const SEO = () => {
  return (
    <>
      <Head>
        <title>Sushi Sensei: Premier Sushi Restaurant in West Hollywood</title>
        <meta name="description" content="Discover the epitome of fresh sushi and exquisite Japanese cuisine at Sushi Sensei in West Hollywood. Experience culinary mastery, a relaxing atmosphere, and top-notch hospitality." />
        {/* Other meta tags for SEO */}
      </Head>

      <div className="relative">
        <Image
          src="/images/water.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='z-0'
        />
        <div className='relative bg-black bg-opacity-75 text-white z-10 p-10'>
            <h2 className="text-4xl font-bold mb-4 pt-5 text-center">Sushi Sensei: The Premier Sushi Destination in West Hollywood</h2>
            <p className="text-lg mb-6 text-center">Discover the epitome of fresh sushi and exquisite Japanese cuisine right in the heart of West Hollywood at Sushi Sensei. We're not just a sushi restaurant; we're an experience you don't want to miss.</p>

            <h3 className="text-3xl font-semibold my-4">Why Dine at Sushi Sensei in West Hollywood?</h3>
            <p className="text-lg mb-4">When you're searching for the best sushi in West Hollywood, Sushi Sensei should be at the top of your list, and here's why:</p>
            
            <ul className="list-disc list-inside text-lg mb-6">
            <li className="mb-2"><strong className="font-medium">Unmatched Culinary Expertise:</strong> Our team of seasoned chefs brings years of culinary mastery to West Hollywood, crafting sushi that exceeds every expectation.</li>
            <li className="mb-2"><strong className="font-medium">A Relaxing Atmosphere:</strong> The moment you step into Sushi Sensei, you're enveloped in a warm ambiance that sets the stage for a memorable Japanese culinary adventure in West Hollywood.</li>
            <li className="mb-2"><strong className="font-medium">Top-notch Hospitality:</strong> We're more than just a sushi bar in West Hollywood. Our commitment to exceptional service ensures that you'll feel like a valued part of the Sushi Sensei family from the moment you walk in.</li>
            </ul>

            <h3 className="text-3xl font-semibold my-4">Discover a World of Japanese Culinary Delights at Sushi Sensei</h3>
            <p className="text-lg mb-6">Our menu offers a balanced mix of traditional Japanese dishes and innovative fusion creations, appealing to a wide range of palates.</p>

            <h3 className="text-3xl font-semibold my-4">Sushi Sensei: A Perfect Blend of Tradition and Innovation in West Hollywood</h3>
            <p className="text-lg mb-6">Our chefs respect the rich history of Japanese cuisine while adding a modern twist that's uniquely Sushi Sensei.</p>

            <h3 className="text-3xl font-semibold my-4">Convenient Sushi Delivery and Takeout in West Hollywood</h3>
            <p className="text-lg mb-6">We offer contactless sushi takeout and delivery options in West Hollywood for those looking to enjoy our culinary delights from the comfort of their home.</p>

            <h3 className="text-3xl font-semibold my-4">Choose the Sushi Sensei Experience in West Hollywood</h3>
            <p className="text-lg mb-6">Join us at Sushi Sensei for an unforgettable culinary journey where traditional Japanese flavors meet modern innovation. Feel the harmony of flavors and the passion of our team as they come together to create a dining experience that goes beyond mere eating. We can't wait to welcome you!</p>
        </div>
      </div>
    </>
  );
};

export default SEO;
