import Category from './Category';

const OrderMenu = ({ menuData }) => {
    return (
        <div className="p-4 bg-white w-full rounded shadow-md">
          {menuData.map((category, index) => (
            <Category key={category.id} category={category} index={index} />
          ))}
        </div>
      );
    };

export default OrderMenu;
