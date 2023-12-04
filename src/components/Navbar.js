import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      {/* Mobile Navigation - hidden on medium screens and larger */}
      <nav className="flex md:hidden flex-col items-center justify-center h-[80vh] w-full bg-gray-800 text-lg">
        <div className="flex items-center justify-center p-2 text-white">
          <Link href="/">Home</Link>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <Link href="/menu">Menu</Link>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <Link href="/about">About Us</Link>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <a href="https://7455sushibyroshi.blizzfull.com/" target="_blank" rel="noopener noreferrer">Order Online</a>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <a href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer">Order via UberEats</a>
        </div>
        <div className="flex items-center justify-center p-2 text-white">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer">Order via Doordash</a>
        </div>
      </nav>

      {/* Desktop Navigation - hidden on small screens */}
      <nav className="hidden md:grid navbar grid-cols-7 items-center h-16 w-full bg-gray-800 text-lg">
        <div className="flex items-center justify-evenly col-span-1">
          <Link href="/">Home</Link>
        </div>
        <div className="flex items-center justify-evenly col-span-1">
          <Link href="/menu">Menu</Link>
        </div>
        <div className="flex items-center justify-evenly col-span-1">
          <Link href="/about">About Us</Link>
        </div>
        <div className="flex items-center justify-center col-span-1">
          <img src="/images/sushi_logo.png" alt="Sushi Logo" className="h-12 w-auto"/>
        </div>
        <div className="flex items-center justify-evenly col-span-1">
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex items-center justify-evenly col-span-1">
          <a href="https://7455sushibyroshi.blizzfull.com/" target="_blank" rel="noopener noreferrer">Order Online</a>
        </div>
        <div className="relative flex items-center justify-evenly col-span-1 group">
          <button className="inline-block align-middle h-full text-[0.7rem]">Delivery Options</button>
          <div className="absolute mt-[9rem] p-2 bg-gray-800 border-gray-100 rounded-sm shadow-lg opacity-0 group-hover:opacity-80 transition-opacity duration-200">
            <a href="https://www.ubereats.com/store/7455-sushi-by-roshi/cS0s7rjsVqmLKbo0Zp4kdw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm">UberEats Delivery</a>
            <a href="https://www.doordash.com/store/7455-sushi-by-roshi-los-angeles-24345251/?event_type=autocomplete&pickup=false" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm">DoorDash Delivery</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
