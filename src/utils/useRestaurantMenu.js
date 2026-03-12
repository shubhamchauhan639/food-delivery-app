import { useEffect, useState } from "react";
import { MenuApi } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResinfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MenuApi + resId);
    const json = await data.json();

    setResinfo(json?.data?.cards?.[2]?.card?.card?.info);

    const categories =
      json?.data?.cards
        ?.find((c) => c?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    setMenuItems(categories);
  };

  return { resInfo, menuItems };
};

export default useRestaurantMenu;