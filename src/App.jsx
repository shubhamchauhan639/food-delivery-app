import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Fotter"



const AppLayout =()=> {
  return(
    <div className="app">
      <Header/>
  <Outlet/>  
  <Footer/> 
  
    
     
    </div>
  )
}


export default AppLayout