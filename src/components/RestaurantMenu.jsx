import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import Accordion from "./Accordian";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // custom hook
  const { resInfo, menuItems } = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo;

  const accordionData = menuItems.map((item) => ({
    title: item?.card?.info?.name,
    content: `₹${
      (item?.card?.info?.price ||
        item?.card?.info?.defaultPrice ||
        0) / 100
    }`,
  }));

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