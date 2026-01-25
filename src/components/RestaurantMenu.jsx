import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/123456"
    );
    const json = await data.json();

    const restaurantInfo =
      json?.data?.cards[2]?.card?.card?.info;

    console.log("Restaurant info:", restaurantInfo);

    setResInfo(restaurantInfo);
  };


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantMenu;
