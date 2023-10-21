import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import {  MainPage,Shop,ProductDetails,ContactUs } from '../pages'

export const  router = createBrowserRouter([
   
    {
        path:'/',
        element: <MainPage />
    },
    {
        path:'/shop',
        element: <Shop />
    },
    {
        path:'/productDetails',
        element: <ProductDetails />
    },
    {
        path:'/contactus',
        element: <ContactUs />
    },
   
    // {
    //     path:'*',
    //     element:<PageNotFound/>
    // }
])