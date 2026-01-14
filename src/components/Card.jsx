import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
  const resData = props; 
  const {cloudinaryImageId , name , avgRating , cuisines , costForTwo , deliveryTime} = resData?.info
  return(
    
    <div className="res-card">
      <div className="card-image">
        <img src={CDN_URL + cloudinaryImageId} alt="food" />
    <span className="offer">{costForTwo}</span>
  </div>

  <div className="card-body">
    <h3>{name}</h3>

    <div className="rating-time">
      <span className="rating">{avgRating} stars</span>
      <span>{deliveryTime} min</span>
    </div>

    <p className="cuisine">{cuisines}</p>
    <p className="location">{locality}</p>
  </div>
    </div>
  )
}
export default Card ;