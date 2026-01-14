import Card from "./Card"
import resObj from "../utils/mockData";
const Body = ()=> {
return(
  <div className="body">
    <div className="search">search</div>
    <div className="container">
    {resObj.map((resturant)=> (<Card key = {resturant.info.id} resData={resturant}/>))}
  </div>
  </div>
)
}
export default Body;