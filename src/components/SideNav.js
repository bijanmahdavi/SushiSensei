const SideNav = ({ categories }) => {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
        <div className="sticky top-16 h-screen w-[14%] p-6 bg-gray-100 overflow-y-auto">
          <ul className="space-y-4">
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
    );
  };
  
  export default SideNav;
  