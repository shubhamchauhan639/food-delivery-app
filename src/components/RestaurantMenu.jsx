import React, { useState } from "react";
import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import Accordion from "./Accordian";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, menuItems } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo, avgRating, totalRatingsString } = resInfo;

  return (
    <div className="max-w-[850px] mx-auto px-4 py-10">

      {/* Restaurant Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 mb-8 text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {name}
        </h1>

        <p className="text-gray-500 text-sm mb-1">
          {cuisines?.join(", ")}
        </p>

        <p className="text-gray-600 text-sm mb-3">
          {costForTwo}
        </p>

        {/* Rating */}
        {avgRating && (
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            ⭐ {avgRating}
            <span className="text-gray-500 text-xs">
              ({totalRatingsString})
            </span>
          </div>
        )}
      </div>

      {/* Menu Heading */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Menu
      </h3>

      {/* Accordion Menu */}
      <div className="space-y-5">
        {menuItems?.map((category, index) => (
          <Accordion
            key={index}
            title={category?.card?.card?.title}
            items={category?.card?.card?.itemCards}
            isOpen={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default RestaurantMenu;