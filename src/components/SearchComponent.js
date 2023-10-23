import React, { useState } from 'react';
import Menu from '../components/OrderMenu';

const SearchComponent = ({ menuData, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '' || term.length < 2) {
      setFilteredCategories([]);
      return;
    }

    const filtered = menuData.map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase())
      ),
    })).filter(category => category.items.length > 0);

    setFilteredCategories(filtered);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center z-50 overflow-y-auto hide-scrollbar">
      <div className="w-full p-4 flex justify-center items-center">
        <div className="relative bg-white w-full border rounded p-2 focus-within:outline-none shadow-md">
          <button onClick={onClose} className="absolute top-1/2 transform -translate-y-1/2 left-2 focus:outline-none">
            &larr;
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 w-full focus:outline-none bg-transparent"
            placeholder="Search the menu"
          />
        </div>
      </div>
      <div className='w-full overflow-auto hide-scrollbar'>
        {filteredCategories.map(category => (
          <div className="pb-3" key={category.id}>
            <Menu menuData={category} />
          </div>
        ))}
      </div>
      {filteredCategories.length === 0 && (
        <div className="flex justify-center items-center w-full h-full">
          <img src="/images/search.png" alt="Menu illustration" />
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
