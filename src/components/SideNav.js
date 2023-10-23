import { useState, useRef, useEffect } from 'react';
import SearchComponent from './SearchComponent';

const SideNav = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state to toggle search
  const indicatorRef = useRef(null);
  const containerRef = useRef(null);

  const onSearchClick = () => {
    setIsSearchOpen(true); // Open search component
  };

  const onCloseSearch = () => {
    setIsSearchOpen(false); // Close search component
  };

  const handleScroll = (categoryId, index) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const navbarHeight = 64; // header height
      const sidenavHeight = 57; // sidenav height
      const offset = window.innerWidth <= 768 ? navbarHeight + sidenavHeight : navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }

    setSelectedCategory(categoryId);

    const buttons = Array.from(containerRef.current.children).slice(1); // Start from index 1
    if (buttons[index]) {
      const rect = buttons[index].getBoundingClientRect();
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.left = `${rect.left - containerRef.current.getBoundingClientRect().left}px`;
    }
  };


  useEffect(() => {
    const handleAutoSelect = () => {
      const navbarHeight = 132;
      categories.forEach((category, index) => {
        const element = document.getElementById(category.id);
        const rect = element.getBoundingClientRect();

        if (rect.top <= navbarHeight && rect.top >= 0) {
          setSelectedCategory(category.id);
          const buttons = Array.from(containerRef.current.children).slice(1);
          if (buttons && buttons[index]) {
            const rect = buttons[index].getBoundingClientRect();
            indicatorRef.current.style.width = `${rect.width}px`;
            indicatorRef.current.style.left = `${rect.left - containerRef.current.getBoundingClientRect().left}px`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleAutoSelect);

    return () => {
      window.removeEventListener('scroll', handleAutoSelect);
    };
  }, [categories]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.nextSibling.style.width = `${containerRef.current.scrollWidth}px`;
    }
  }, [categories]);

  return (
    <>
    {isSearchOpen && <SearchComponent menuData={categories} onClose={onCloseSearch} />}
      {/* Desktop version */}
      <div className="hidden md:block sticky top-16 h-screen w-[10vw] p-6 bg-gray-100 overflow-y-auto hide-scrollbar">
        <ul className="space-y-4">
          <li>
            <button className="text-lg font-semibold focus:outline-none"
            onClick={onSearchClick}
            >
              🔍
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleScroll(category.id)}
                className="text-lg font-semibold focus:outline-none"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile version */}
      <div className="relative md:hidden flex overflow-x-auto top-0 z-25 bg-white h-[57px] hide-scrollbar">
        <div ref={containerRef} className="flex space-x-4">
          <button 
            className="text-sm ml-2 font-semibold focus:outline-none"
            onClick={onSearchClick}
          >
            🔍
          </button>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleScroll(category.id, index)}
              className={`text-sm ml-2 font-semibold focus:outline-none ${selectedCategory === category.id ? 'text-black' : 'text-black'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gray-200"
        >
        </div>
        <div
          ref={indicatorRef}
          className="absolute pl-2 bottom-0 h-1 bg-black transition-all duration-300 z-10"
        ></div>
      </div>
    </>
  );
};

export default SideNav;
