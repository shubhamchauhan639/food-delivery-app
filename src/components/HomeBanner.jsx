import { useState, useEffect } from "react";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600",
    title: "FLAT 50% OFF",
    subtitle: "On All Pizzas Today"
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600",
    title: "BUY 1 GET 1 FREE",
    subtitle: "Delicious Burgers"
  },
  {
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600",
    title: "SPECIAL COMBO DEAL",
    subtitle: "Save Up To ₹200"
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1600",
    title: "FLAT ₹100 OFF",
    subtitle: "On Biryani Orders"
  },
  {
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600",
    title: "SWEET DESSERT SALE",
    subtitle: "Up To 40% Off"
  }
];

const HomeBanner = () => {

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % banners.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="w-full py-6">

      <div className="max-w-[1400px] mx-auto relative overflow-hidden rounded-xl">

        {/* Banner Images */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >

          {banners.map((item, index) => (

            <div
              key={index}
              className="min-w-full h-[300px] relative"
            >

              <img
                src={item.img}
                alt="food-banner"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">

                <h1 className="text-5xl font-extrabold">
                  {item.title}
                </h1>

                <p className="text-lg mt-2">
                  {item.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Dot Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-3">

          {banners.map((_, index) => (

            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all 
              ${current === index ? "bg-white scale-125" : "bg-gray-400"}`}
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default HomeBanner;