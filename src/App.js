import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Notfound from './Component/Notfound/Notfound'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import Brands from './Component/Brands/Brands'
import Products from './Component/Products/Products'
import Categories from './Component/Categories/Categories'
import Navbar from './Component/Navbar/Navbar'
export default function App() {

  let routers = createBrowserRouter(
    [
      {
        path: '/', element: <Layout/>, children: [
          {index: true, element: <Home/>},
          {path: 'cart', element: <Cart/>},
          {path: 'brands', element: <Brands/>},
          {path: 'categories', element: <Categories/>},
          {path: 'products', element: <Products/>},
          {path: 'login', element: <Login/>},
          {path: 'register', element: <Register/>},
          {path: '*', element: <Notfound/>},
        ]
      }
    ]
  )
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
