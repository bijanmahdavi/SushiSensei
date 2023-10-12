import Category from './Category';

const OrderMenu = ({ menuData }) => {
    return (
        <div className="p-4 bg-white w-full rounded shadow-md">
          {menuData.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      );
    };

export default OrderMenu;
