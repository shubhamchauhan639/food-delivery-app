import Card from "./Card"
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = ()=> {
  const [listOfRes, setListOfRes] = useState(resObj)
  // let resList = 
  // console.log("resObj:", resList);
  // console.log("resObj[1]:", resList[0]);
  
 
return(
  <div className="body">
    <div className="filter">
    <button className="filter-button" onClick={()=>{
    const FilterList = listOfRes.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRes(FilterList)
    console.log(listOfRes)
  }}>Top Rated restaurant</button>
    </div>
    <div className="container">
      
    {listOfRes.map((restaurant)=>(<Card key = {restaurant.info.id} resData = {restaurant.info}/>))}
  </div>
  </div>
)
}
export default Body;