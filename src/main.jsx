import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/Error";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Offer from "./components/Offer.jsx";
import Cart from "./components/Cart.jsx";

import Splash from "./components/Splash.jsx";
import Onboarding from "./components/Onboarding.jsx";
import Login from "./components/Login.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const appRouter = createBrowserRouter([
  // ✅ Intro Flow
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/intro",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // ✅ Main App
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "/app",
        element: <Body />,
      },
      {
        path: "/app/help",
        element: <Help />,
      },
      {
        path: "/app/contact",
        element: <Contact />,
      },
      {
        path: "/app/offers",
        element: <Offer />,
      },
      {
        path: "/app/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/app/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/app/cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
    <RouterProvider router={appRouter} />
   </StrictMode> 
);