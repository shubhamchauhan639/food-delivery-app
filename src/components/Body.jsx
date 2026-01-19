import Card from "./Card"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
const Body = ()=> {
  const [listOfRes, setListOfRes] = useState([])
  // let resList = 
  // console.log("resObj:", resList);
  // console.log("resObj[1]:", resList[0]);
  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
      const json = await data.json();
  
 console.log("json value",json)
 setListOfRes(json?.data?.cards[1]
  ?.card.card
  ?.gridElements.infoWithStyle
  ?.restaurants)
  }
  if(listOfRes.length === 0){
    return <Shimmer/>
  }
  
  
return(
  <div className="body">
    <div className="filter">
    <button className="filter-button" onClick={()=>{
    const FilterList = listOfRes.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRes(FilterList)
    // console.log(listOfRes)
  }}>Top Rated restaurant</button>
    </div>
    <div className="container">
      
    {listOfRes.map((restaurant)=>(<Card key = {restaurant.info.id} resData = {restaurant.info}/>))}
  </div>
  </div>
)
}
export default Body;