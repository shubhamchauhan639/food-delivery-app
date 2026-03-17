import { useState } from "react";

const Accordion = ({ title, items }) => {
  const [open, setOpen] = useState(title === "Recommended");

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      
   
      <div
        className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <span className="text-xl text-gray-500">
          {open ? "−" : "+"}
        </span>
      </div>


      {open && (
        <div className="border-t border-gray-100">
          {items?.map((item) => {
            const info = item?.card?.info;

            if (!info) return null;

            // Veg / Non-Veg detection from API
            const isVeg = info?.veg === true;

            return (
              <div
                key={info?.id}
                className="flex justify-between items-center p-5 hover:bg-gray-50 transition border-b last:border-none"
              >
                
         
                <div className="w-[70%]">

            
                  <div
                    className={`w-4 h-4 border mb-2 flex items-center justify-center
                    ${isVeg ? "border-green-600" : "border-red-600"}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full
                      ${isVeg ? "bg-green-600" : "bg-red-600"}`}
                    ></div>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-md">
                    {info?.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {info?.description}
                  </p>

                  <p className="font-semibold text-gray-800 mt-2">
                    ₹{(info?.price || info?.defaultPrice) / 100}
                  </p>
                </div>

                {/* Food Image */}
                <div className="relative">
                  {info?.imageId && (
                    <img
                      className="w-28 h-20 object-cover rounded-lg"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        info?.imageId
                      }
                      alt={info?.name}
                    />
                  )}

                  <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-gray-300 px-4 py-1 rounded-md text-green-600 font-semibold text-sm shadow hover:bg-gray-50">
                    ADD
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;