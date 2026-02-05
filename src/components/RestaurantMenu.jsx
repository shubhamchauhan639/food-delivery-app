import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import { MenuApi } from "../utils/constants";
// import Accordion from "./Accordian";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const {resId} = useParams();


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MenuApi+ resId
    );
    const json = await data.json();

   
    const restaurantInfo =
      json?.data?.cards[2]?.card?.card?.info;

    
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
      {/* <Accordion/> */}
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
