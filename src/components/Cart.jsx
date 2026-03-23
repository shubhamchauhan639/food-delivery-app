import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // ✅ TOTAL PRICE FIXED
  const total = cartItems.reduce((sum, item) => {
    const price =
      (item?.card?.info?.price ||
        item?.card?.info?.defaultPrice) / 100;

    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-[800px] mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Your Cart
      </h1>

      {/* EMPTY CART */}
    {cartItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center mt-20">

    <img
      src="https://thumbs.dreamstime.com/b/chef-cooking-food-cartoon-vector-clipart-created-adobe-illustrator-eps-format-illustration-use-web-print-41776416.jpg"
      alt="Empty Cart"
      className="w-80 mb-6"
    />

    <h2 className="text-xl font-semibold text-gray-700">
      Your cart is empty 😢
    </h2>

    <p className="text-gray-500 mt-2">
      Add some delicious food to continue 🍔
    </p>

  </div>
) : (
        <>
          {/* ITEMS */}
          <div className="space-y-5">

            {cartItems.map((item) => {
              const info = item?.card?.info;
              const quantity = item?.quantity;

              const price =
                (info?.price || info?.defaultPrice) / 100;

              return (
                <div
                  key={info?.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow border"
                >

                  {/* LEFT SIDE */}
                  <div className="w-[60%]">
                    <h2 className="font-semibold text-lg">
                      {info?.name}
                    </h2>

                    <p className="text-gray-500 text-sm line-clamp-2">
                      {info?.description}
                    </p>

                    {/* QUANTITY */}
                    <p className="text-sm mt-1">
                      Qty:{" "}
                      <span className="font-semibold">
                        {quantity}
                      </span>
                    </p>

                    {/* PRICE * QTY */}
                    <p className="font-semibold mt-2">
                      ₹{price * quantity}
                    </p>
                  </div>

                  {/* RIGHT SIDE (+ − BUTTONS) */}
                  <div className="flex items-center border rounded-md shadow">

                    <button
                      onClick={() =>
                        dispatch(removeItem(info?.id))
                      }
                      className="px-3 py-1 text-red-500 font-bold"
                    >
                      −
                    </button>

                    <span className="px-3 font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="px-3 py-1 text-green-600 font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

          {/* TOTAL + CLEAR */}
          <div className="mt-8 text-center">

            <h2 className="text-xl font-bold mb-4">
              Total: ₹{total}
            </h2>

            <button
              onClick={() => dispatch(clearCart())}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Clear Cart
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;