import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Fotter"
import { Provider } from 'react-redux'
import appStore from "./utils/appStore"



const AppLayout =()=> {
  return(
    <div className="app">
      <Provider store={appStore}>
              <Header/>
  <Outlet/>  
  <Footer/> 
  
      </Provider>

    
     
    </div>
  )
}


export default AppLayout