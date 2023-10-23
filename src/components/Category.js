import Item from './Item';

const Category = ({ category }) => {

  return (
    <div id={category.id} className={`mb-12 mt-12 rounded`}>
      <h2 className="text-2xl font-semibold mt-6 pl-4">{category.name}</h2>
      <ul className="flex flex-wrap justify-start items-start gap-5 py-4">
        {category.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <hr className="mb-4 mt-4" />
    </div>
  );
};

export default Category;
