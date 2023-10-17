import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import { router } from "../utils/router";



const Router = () => {
  return (

         <RouterProvider router={router}></RouterProvider>

  )
}

export default Router