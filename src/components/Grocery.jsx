import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";

const Grocery = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetchGroceries();
  }, []);

  const fetchGroceries = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/category/groceries"
    );

    const json = await data.json();
    setGroceries(json.products);
  };

  if (groceries.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
      {groceries.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 text-center"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-[160px] object-cover rounded-lg mb-3"
          />

          <h3 className="text-lg font-semibold">{item.title}</h3>

          <p className="text-gray-700 font-medium">₹ {item.price}</p>

          <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Grocery;