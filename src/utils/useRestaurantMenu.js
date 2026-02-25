import { useState, useEffect } from "react";
import { MenuApi } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MenuApi + resId);
    const json = await data.json();

    const restaurantInfo =
      json?.data?.cards[2]?.card?.card?.info;

    const itemCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    setResInfo(restaurantInfo);
    setMenuItems(itemCards || []);
  };

  return { resInfo, menuItems };
};

export default useRestaurantMenu;