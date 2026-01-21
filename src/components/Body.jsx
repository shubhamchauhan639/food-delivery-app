import Card from "./Card"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([])
  const [filterRest , setFilterRes] = useState([])
  const [searchText , setSearchText] = useState("")
  // let resList = 
  // console.log("resObj:", resList);
  // console.log("resObj[1]:", resList[0]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.765495&lng=77.19021219999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRes(restaurants);
    setFilterRes(restaurants)
  }
  if (listOfRes.length === 0) {
    return <Shimmer />
  }


  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}  onChange={(e)=> {setSearchText(e.target.value)}}/>
          <button onClick={()=>{
             console.log(searchText)
             const filteredRes = listOfRes.filter((res)=>res?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilterRes(filteredRes)
          }
            
           
          }>Search</button>
        </div>
        <button className="filter-button" onClick={() => {
          const FilterList = listOfRes.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRes(FilterList)
          // console.log(listOfRes)
        }}>Top Rated restaurant</button>
      </div>
      <div className="container">

        {filterRest.map((restaurant) => (<Card key={restaurant.info.id} resData={restaurant.info} />))}
      </div>
    </div>
  )
}
export default Body;