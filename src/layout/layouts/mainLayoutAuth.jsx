import React from 'react'
import { Navbar ,Sidebar } from '../index'
import Footer from '../common/footer/Footer'


const MainLayoutAuth = (Component) => function HOC() {

  
    return (
      <>
      <div className="offcanvas-menu-overlay"></div>
      <Navbar />
      <Component/>
      <Footer/>
     
      </>
  
    )
  }
  
  export default MainLayoutAuth