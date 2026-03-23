import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Accordion = ({ title, items }) => {
  const [open, setOpen] = useState(title === "Recommended");

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find(
      (i) => i?.card?.info?.id === id
    );
    return item ? item.quantity : 0;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div
        className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>{open ? "−" : "+"}</span>
      </div>

      {/* Content */}
      {open && (
        <div className="border-t">
          {items?.map((item) => {
            const info = item?.card?.info;
            if (!info) return null;

            const quantity = getItemQuantity(info?.id);
            const isVeg = info?.veg === true;

            return (
              <div
                key={info?.id}
                className="flex justify-between p-5 border-b"
              >
                {/* Left */}
                <div className="w-[70%]">
                  
                  {/* Veg/Non-Veg */}
                  <div
                    className={`w-4 h-4 border mb-2 flex items-center justify-center
                    ${isVeg ? "border-green-600" : "border-red-600"}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full
                      ${isVeg ? "bg-green-600" : "bg-red-600"}`}
                    ></div>
                  </div>

                  <h3 className="font-semibold">{info?.name}</h3>

                  <p className="text-sm text-gray-500">
                    {info?.description}
                  </p>

                  <p className="font-semibold mt-2">
                    ₹{(info?.price || info?.defaultPrice) / 100}
                  </p>
                </div>

                {/* Right */}
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

                  {/* BUTTON UI */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">

                    {quantity === 0 ? (
                      <button
                        onClick={() => handleAddItem(item)}
                        className="bg-white border px-4 py-1 rounded-md text-green-600 text-sm shadow"
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex items-center bg-white border rounded-md shadow">

                        <button
                          onClick={() => dispatch(removeItem(info?.id))}
                          className="px-2 text-red-500 font-bold"
                        >
                          −
                        </button>

                        <span className="px-2 text-sm font-semibold">
                          {quantity}
                        </span>

                        <button
                          onClick={() => handleAddItem(item)}
                          className="px-2 text-green-600 font-bold"
                        >
                          +
                        </button>

                      </div>
                    )}

                  </div>
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