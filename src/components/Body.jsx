import Card from "./Card"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([])
  const [filterRest , setFilterRes] = useState([])
  const [searchText , setSearchText] = useState("")
  // let resList = 
 
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    const restaurants =
         json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRes(restaurants);
    setFilterRes(restaurants)
  }
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false)
    return(<h1>
      you are ofline check ur internet connnection
    </h1>
  );
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
      (res) => res.info.avgRating > 4.5
    );

    
    setFilterRes(FilterList); 
  }}>Top Rated restaurant</button>
      </div>
     <div className="container">
  {filterRest.map((rest) => (
    <Link
      key={rest.info.id}
      to={"/restaurant/" + rest.info.id}
    >
      <Card resData={rest.info} />
    </Link>
  ))}
</div>
    </div>
  )
}
export default Body;