import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import { createBrowserRouter, Routes } from "react-router-dom"
import Error from "./components/Error"

const appRouter= createBrowserRouter([{
  path : "/",
  element: <AppLayout/>,
  errorElement : <Error/>

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
