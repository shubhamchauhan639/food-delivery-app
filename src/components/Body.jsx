import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

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

  if (onlineStatus === false)
    return <h1>You are offline. Check your internet connection.</h1>;

  if (!isGrocery && listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      {/* Toggle Tabs */}
      <div className="toggle-container">
        <button
          className={!isGrocery ? "active-tab" : ""}
          onClick={() => setIsGrocery(false)}
        >
          Food
        </button>

        <button
          className={isGrocery ? "active-tab" : ""}
          onClick={() => setIsGrocery(true)}
        >
          Grocery
        </button>
      </div>

      {/* Show filters only in Food tab */}
      {!isGrocery && (
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
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
            className="filter-button"
            onClick={() => {
              const FilterList = listOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRes(FilterList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      )}

      {/* Main Content */}
      {isGrocery ? (
        <Grocery />
      ) : (
        <div className="container">
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