import { CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    locality,
    sla
  } = resData;

  return (
    <div className="res-card">
      <div className="card-image">
        <img src={CDN_URL + cloudinaryImageId} alt="food" />
        <span className="offer">{costForTwo}</span>
      </div>

      <div className="card-body">
        <h3>{name}</h3>

        <div className="rating-time">
          <span className="rating">{avgRating} stars</span>
          <span>{sla?.slaString}</span>
          <span>{deliveryTime}</span>
        </div>

        <p className="cuisine">{cuisines?.join(", ")}</p>
        <p className="location">{locality}</p>
      </div>
    </div>
  );
};

export default Card;