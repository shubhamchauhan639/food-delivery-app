import { lazy, Suspense ,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error"
import Contact from './components/Contact.jsx'
import Help from './components/Help.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Offer from './components/Offer.jsx'
import Cart from './components/Cart.jsx'





const Grocery = lazy(() => import('./components/Grocery.jsx'))
const appRouter= createBrowserRouter([{
  path : "/",
  element: <AppLayout/>,
children : [
  {
path : "/",
element : <Body/>
  },
  {
    path : "/help",
    element : <Help/>
  },
  {
    path : "/contact",
    element : <Contact/>
  },
  {
    path : "/offers",
    element : <Offer/>
  },
  {
    path : "/grocery",
    element :<Suspense> <Grocery/></Suspense> 
  },
  {
    path: "/restaurant/:resId",
    element : <RestaurantMenu/>
  },
   {
    path: "/cart",
    element : <Cart/>
  }
 ,
],
errorElement : <Error/>
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
<RouterProvider router={appRouter}/>
  </StrictMode>,
)
