import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import CategorySlider from "./CategorySlider";

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
    <div className="max-w-[1200px] mx-auto px-5">

      <div className="flex justify-center gap-5 mt-8 mb-8">
        <button
          className={`px-8 py-3 rounded-full font-semibold ${!isGrocery
              ? "bg-orange-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => setIsGrocery(false)}
        >
          Food
        </button>

        <button
          className={`px-8 py-3 rounded-full font-semibold ${isGrocery
              ? "bg-orange-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => setIsGrocery(true)}
        >
          Grocery
        </button>
      </div>

      {!isGrocery && (
        <>
          <div className="flex flex-wrap items-center gap-4 mb-8">

            <div className="flex gap-3">
              <input
                type="text"
                className="px-6 py-4 w-[580px] border rounded-lg outline-none focus:border-orange-500"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search restaurants"
              />

              <button
                className="px-6 py-4 w-[140px] bg-orange-500 text-white rounded-lg"
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

            <button
              className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white"
              onClick={() => {
                const FilterList = listOfRes.filter(
                  (res) => res.info.avgRating > 4.5
                );
                setFilterRes(FilterList);
              }}
            >
              Top Rated Restaurant
            </button>

          </div>

          <CategorySlider />
        </>
      )}

      {isGrocery ? (
        <Grocery />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
          {filterRest.map((rest) => (
            <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
              <Card resData={rest.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;