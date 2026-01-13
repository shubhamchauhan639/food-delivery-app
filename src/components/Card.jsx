const Card = (props)=>{
  const {resData} = props
  return(
    
    <div className="res-card">
      <div className="card-image">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="food" />
    <span className="offer">{resData.info.costForTwo}</span>
  </div>

  <div className="card-body">
    <h3>{resData.info.name}</h3>

    <div className="rating-time">
      <span className="rating">{resData.info.avgRating}</span>
      <span>{resData.info.deliveryTime}</span>
    </div>

    <p className="cuisine">{resData.info.cuisines}</p>
    <p className="location">{resData.info.locality}</p>
  </div>
    </div>
  )
}
export default Card ;