import Category from './Category';

const OrderMenu = ({ menuData }) => {
    return (
        <div className="px-4 my-[-48px] md:my-[-64px] py-2 bg-white w-full shadow-md">
          {menuData.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      );
    };

export default OrderMenu;
