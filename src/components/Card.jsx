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
    sla,
  } = resData;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      <div className="relative h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="food"
        />

        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded-md">
          {costForTwo}
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{name}</h3>

        <div className="flex items-center gap-3 text-sm font-medium mt-1">
          <span className="bg-green-600 text-white px-2 py-[2px] rounded text-xs">
            ⭐ {avgRating}
          </span>

          <span>{sla?.slaString}</span>
          <span>{deliveryTime}</span>
        </div>

        <p className="text-gray-500 text-sm truncate">
          {cuisines?.join(", ")}
        </p>

        <p className="text-gray-400 text-sm">{locality}</p>
      </div>
    </div>
  );
};
const withPromotedLabel = (Card)=>{
  return()=>{
   < div>
      <label>Promoted</label>
    <Card/>
    </div>
 
  }
}

export default Card;