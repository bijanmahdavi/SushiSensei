import Category from './Category';

const OrderMenu = ({ menuData }) => {
  const categories = Array.isArray(menuData) ? menuData : [menuData];

  return (
    <div className="px-4 my-[-48px] md:my-[-64px] py-2 bg-white w-full">
      {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      );
    };

export default OrderMenu;
