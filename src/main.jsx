import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error"
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Offer from './components/Offer.jsx'

const appRouter= createBrowserRouter([{
  path : "/",
  element: <AppLayout/>,
children : [
  {
path : "/",
element : <Body/>
  },
  {
    path : "/about",
    element : <About/>
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
    path: "/restaurant/:resId",
    element : <RestaurantMenu/>
  }
],
errorElement : <Error/>
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
<RouterProvider router={appRouter}/>
  </StrictMode>,
)
