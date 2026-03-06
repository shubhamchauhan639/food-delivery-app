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
    <div className="grocery-container">
      {groceries.map((item) => (
        <div className="grocery-card" key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
          <p>⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Grocery;