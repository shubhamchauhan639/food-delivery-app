import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/123456"
    );
    const json = await data.json();

    // ✅ restaurant info
    const restaurantInfo =
      json?.data?.cards[2]?.card?.card?.info;

    // ✅ item cards (Recommended)
    const itemCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    setResInfo(restaurantInfo);
    setMenuItems(itemCards || []);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <p>{costForTwo}</p>

      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} – ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
