import { useState } from 'react'
import Router from './router/Router'
import { CloudinaryContext } from 'cloudinary-react';
import "react-image-gallery/styles/css/image-gallery.css"


function App() {

  return (
    <>
     
    
     <CloudinaryContext cloudName="dk9u6to8o" apiKey="269938217157954" apiSecret="n-LtdMLk9oDQKwtmabAaoa4SOso">
        {/* Your ProductList component or any other components that need access to Cloudinary */}
        <Router />
      </CloudinaryContext>
   
    </>
  )
}

export default App
