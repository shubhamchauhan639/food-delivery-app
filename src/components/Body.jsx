import Card from "./Card"
import resObj from "../utils/mockData";
const Body = ()=> {
  console.log("resObj:", resObj);
  console.log("resObj[0]:", resObj[0]);
return(
  <div className="body">
    <div className="search">search</div>
    <div className="container">
      
    {resObj.map((restaurant)=>(<Card key = {restaurant.info.id} resData = {restaurant.info}/>))}
  </div>
  </div>
)
}
export default Body;