import { useRef, memo } from "react"; // ✅ NEW (memo added for performance)

const categories = [
  {
    name: "Biryani",
    img: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200", // ✅ FIX (compressed)
  },
  {
    name: "Pizza",
    img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Burger",
    img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Ice Cream",
    img: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Cake",
    img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Noodles",
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Dosa",
    img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Paratha",
    img: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Pasta",
    img: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Momos",
    img: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Shakes",
    img: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Juices",
    img: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Fries",
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Kebab",
    img: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Thali",
    img: "https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Chaat",
    img: "https://images.pexels.com/photos/5560762/pexels-photo-5560762.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Sweets",
    img: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Panipuri",
    img: "https://images.pexels.com/photos/5560764/pexels-photo-5560764.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Breakfast",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

const CategorySlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mb-10">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">What's on your mind?</h2>

        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth will-change-transform 
        [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" // ✅ FIX (smooth performance)
      >
        {categories.slice(0, 15).map((item, index) => ( // ✅ FIX (limit items for performance)
          <div
            key={index}
            className="flex flex-col items-center min-w-[110px] cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy" // ✅ NEW (lazy load)
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100"; // ✅ NEW (fallback)
              }}
              className="w-20 h-20 object-cover rounded-full shadow-md hover:scale-105 transition duration-300" // ✅ UI IMPROVED
            />

            <p className="mt-2 text-gray-700 font-medium text-sm">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CategorySlider); // ✅ NEW (prevents unnecessary re-render)