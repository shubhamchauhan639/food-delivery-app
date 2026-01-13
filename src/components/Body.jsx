import Card from "./Card"
const resObj = {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1003414",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
"locality": "Chhindwara",
"areaName": "Chhindwara City",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.3,
"parentId": "721",
"avgRatingString": "4.3",
"totalRatingsString": "239",
"sla": {
"deliveryTime": 53,
"lastMileTravel": 14.1,
"serviceability": "SERVICEABLE",
"slaString": "50-60 mins",
"lastMileTravelString": "14.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-13 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹80 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-9671b781-3770-4c8e-a405-939d1157b6a2"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
const Body = ()=> {
return(
  <div className="body">
    <div className="search">search</div>
    <div className="container">
    <Card resData = {resObj} />
    {/* <Card resName = "KFC" timetaken = "10-25 mins" rating = "⭐ 4.3" />
    <Card/>
    <Card/> */}
  </div>
  </div>
)
}
export default Body;