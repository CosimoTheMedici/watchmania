import React from 'react'
import Navbar from '../common/navbar/Navbar'
import { Navbar ,Sidebar } from '../index'



const MainLayoutAuthcopy = (Component) => function HOC() {

  
    return (
      <div class="main-wrapper">
             <Navbar />
             <Sidebar />
        <div class="page-wrapper">
            <Component />
        </div>
        </div>

  
    )
  }
  
  export default MainLayoutAuthcopy