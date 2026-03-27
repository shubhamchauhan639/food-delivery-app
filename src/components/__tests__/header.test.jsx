import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../utils/cartSlice";
import { test, expect } from "vitest";

// 🔥 Create mock store
const renderWithStore = (store) => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
};

test("renders logo", () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
  });

  renderWithStore(store);

  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();
});

test("renders navigation links", () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
  });

  renderWithStore(store);

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/help/i)).toBeInTheDocument();
  expect(screen.getByText(/offers/i)).toBeInTheDocument();
});

test("shows cart items count from store", () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: { items: [{ id: 1 }, { id: 2 }] },
    },
  });

  renderWithStore(store);

  const cartText = screen.getByText(/cart : 2/i);
  expect(cartText).toBeInTheDocument();
});

test("login button toggles", () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
  });

  renderWithStore(store);

  const button = screen.getByRole("button", { name: /log in/i });

  fireEvent.click(button);

  expect(
    screen.getByRole("button", { name: /log out/i })
  ).toBeInTheDocument();
});