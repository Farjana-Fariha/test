import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Womens from './Pages/Fruits'
import Kids from './Pages/Healthy'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import Cooking from './Pages/Cooking'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>
  },
  {
    path: "/cooking",
    element: <><Navbar/><Cooking/><Footer/></>
  },
  {
    path: "/fruits",
    element: <><Navbar/><Womens/><Footer/></>
  },
  {
    path: "/healthy",
    element: <><Navbar/><Kids/><Footer/></>
  },
  {
    path: "/login",
    element: <><Navbar/><Login/><Footer/></>
  },
  {
    path: "/cart",
    element: <><Navbar/><Cart/><Footer/></>
  },
  {
    path: "/products/:productId",
    element: <><Navbar/><SingleProduct/><Footer/></>
  }
])

const App = () => {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
