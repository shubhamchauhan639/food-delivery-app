import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import Accordion from "./Accordian";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, menuItems } = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo;

  // ⭐ CATEGORY BASED MENU
  const accordionData = [
    {
      title: "Pizzas",
      content: menuItems.map((item) => ({
        name: item?.card?.info?.name,
        price:
          (item?.card?.info?.price ||
            item?.card?.info?.defaultPrice ||
            0) / 100,
      })),
    },
    {
      title: "Drinks",
      content: [
        { name: "Coca Cola", price: 60 },
        { name: "Pepsi", price: 60 },
        { name: "Sprite", price: 60 },
      ],
    },
    {
      title: "Snacks",
      content: [
        { name: "Garlic Bread", price: 120 },
        { name: "French Fries", price: 99 },
        { name: "Cheese Balls", price: 140 },
      ],
    },
  ];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <p>{costForTwo}</p>

      <h3>Menu</h3>

      <Accordion items={accordionData} />
    </div>
  );
};

export default RestaurantMenu;