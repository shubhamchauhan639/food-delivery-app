import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet } from "react-router-dom"



const AppLayout =()=> {
  return(
    <div className="app">
      <Header/>
     
      <Body/>
    
     
    </div>
  )
}


export default AppLayout