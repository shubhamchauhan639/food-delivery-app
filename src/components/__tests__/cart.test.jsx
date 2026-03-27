import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../utils/cartSlice";
import { test, expect } from "vitest";

// ✅ helper function
const renderCart = (preloadedState) => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

// ✅ TEST 1: empty cart
test("shows empty cart message", () => {
  renderCart({
    cart: { items: [] },
  });

  expect(
    screen.getByText(/your cart is empty/i)
  ).toBeInTheDocument();
});

// ✅ TEST 2: render items correctly
test("renders cart items", () => {
  renderCart({
    cart: {
      items: [
        {
          quantity: 2,
          card: {
            info: {
              id: 1,
              name: "Pizza",
              price: 20000,
              description: "Tasty pizza",
            },
          },
        },
      ],
    },
  });

  // ✅ FIX: use role instead of getByText
  const item = screen.getByRole("heading", { name: /pizza/i });

  expect(item).toBeInTheDocument();
});

// ✅ TEST 3: quantity shown
test("shows correct quantity", () => {
  renderCart({
    cart: {
      items: [
        {
          quantity: 3,
          card: {
            info: {
              id: 2,
              name: "Burger",
              price: 15000,
              description: "Cheesy burger",
            },
          },
        },
      ],
    },
  });
const quantity = screen.getAllByText("3");
expect(quantity.length).toBeGreaterThan(0);
});