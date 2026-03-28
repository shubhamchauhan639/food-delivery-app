import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import CategorySlider from "./CategorySlider";
import HomeBanner from "./HomeBanner";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRest, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isGrocery, setIsGrocery] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRes(restaurants);
    setFilterRes(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1 className="text-center text-xl mt-10">
        You are offline. Check your internet connection.
      </h1>
    );

  if (!isGrocery && listOfRes.length === 0) return <Shimmer />;

 return (
 <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

    {/* Toggle Buttons */}
    <div className="flex justify-center gap-6 mt-10 mb-10">
      <button
        className={`px-8 py-3 rounded-full font-semibold text-sm shadow-sm transition duration-300 ${
          !isGrocery
            ? "bg-orange-500 text-white shadow-md scale-105"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => setIsGrocery(false)}
      >
        Food
      </button>

      <button
        className={`px-8 py-3 rounded-full font-semibold text-sm shadow-sm transition duration-300 ${
          isGrocery
            ? "bg-orange-500 text-white shadow-md scale-105"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => setIsGrocery(true)}
      >
        Grocery
      </button>
    </div>

    {!isGrocery && (
      <>
        {/* Search Section */}
        <div className="flex flex-wrap items-center gap-4 mb-10">

          {/* Search Box */}
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              className="px-5 py-3 w-full md:w-[400px] border border-gray-200 rounded-xl outline-none 
              focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200 shadow-sm"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for restaurants, food..."
            />

            <button
              className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 active:scale-95 transition duration-200"
              onClick={() => {
                const filteredRes = listOfRes.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilterRes(filteredRes);
              }}
            >
              Search
            </button>
          </div>

          {/* Filter Button */}
          <button
            className="px-5 py-3 border border-gray-200 rounded-xl bg-white shadow-sm 
            hover:bg-orange-500 hover:text-white hover:shadow-md transition duration-300"
            onClick={() => {
              const FilterList = listOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRes(FilterList);
            }}
          >
            ⭐ Top Rated
          </button>

        </div>

        {/* Category + Banner */}
        <div className="space-y-10">
          <CategorySlider />
          <HomeBanner />
        </div>
      </>
    )}

    {isGrocery ? (
      <Grocery />
    ) : (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8 mt-6">
        {filterRest.map((rest) => (
          <Link
            key={rest.info.id}
            to={"/app/restaurant/" + rest.info.id}
            className="transform hover:scale-[1.03] transition duration-300"
          >
            <Card resData={rest.info} />
          </Link>
        ))}
      </div>
    )}
  </div>
);
};

export default Body;