import { useRef } from "react";
const categories = [
  { name: "Biryani", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Pizza", img: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png" },
  { name: "Burger", img: "https://cdn-icons-png.flaticon.com/512/877/877951.png" },
  { name: "Ice Cream", img: "https://cdn-icons-png.flaticon.com/512/685/685352.png" },
  { name: "Cake", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Chinese", img: "https://cdn-icons-png.flaticon.com/512/5787/5787063.png" },
  { name: "Noodles", img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "Rolls", img: "https://cdn-icons-png.flaticon.com/512/5787/5787100.png" },
  { name: "Sandwich", img: "https://cdn-icons-png.flaticon.com/512/3480/3480823.png" },
  { name: "Dosa", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Paratha", img: "https://cdn-icons-png.flaticon.com/512/5787/5787103.png" },
  { name: "South Indian", img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "North Indian", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Pasta", img: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png" },
  { name: "Momos", img: "https://cdn-icons-png.flaticon.com/512/3480/3480823.png" },
  { name: "Shakes", img: "https://cdn-icons-png.flaticon.com/512/3050/3050154.png" },
  { name: "Juices", img: "https://cdn-icons-png.flaticon.com/512/135/135620.png" },
  { name: "Salad", img: "https://cdn-icons-png.flaticon.com/512/135/135620.png" },
  { name: "Fries", img: "https://cdn-icons-png.flaticon.com/512/5787/5787100.png" },
  { name: "Kebab", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Thali", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Chaat", img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "Sweets", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Panipuri", img: "https://cdn-icons-png.flaticon.com/512/5787/5787063.png" },
  { name: "Breakfast", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" }
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

   <div
  ref={sliderRef}
  className="flex gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
>
  {categories.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center min-w-[110px] cursor-pointer"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-full"
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

export default CategorySlider;