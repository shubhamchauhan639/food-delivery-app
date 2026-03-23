import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Total Price
  const total = cartItems.reduce((sum, item) => {
    const price =
      item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return sum + price / 100;
  }, 0);

  return (
    <div className="max-w-[800px] mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Your Cart
      </h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Cart is empty 😢
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-5">
            {cartItems.map((item) => {
              const info = item?.card?.info;

              return (
                <div
                  key={info?.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow border"
                >
                  {/* Info */}
                  <div className="w-[70%]">
                    <h2 className="font-semibold text-lg">
                      {info?.name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {info?.description}
                    </p>

                    <p className="font-semibold mt-2">
                      ₹{(info?.price || info?.defaultPrice) / 100}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(info?.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          {/* Total + Clear */}
          <div className="mt-8 text-center">

            <h2 className="text-xl font-bold mb-3">
              Total: ₹{total}
            </h2>

            <button
              onClick={handleClearCart}
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