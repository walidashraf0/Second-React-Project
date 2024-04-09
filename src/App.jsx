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
import CounterContextProvider from './Context/CounterContext'
import UserTokenProvider from './Context/UserToken'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'



export default function App() {

  let routers = createBrowserRouter(
    [
      {
        path: '/', element: <Layout />, children: [
          { index: true, element: <ProtectedRoute><Home/></ProtectedRoute>},
          { path: 'cart', element:<ProtectedRoute> <Cart /></ProtectedRoute> },
          { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
          { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
          { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: '*', element: <Notfound /> },
        ]
      }
    ]
  )
  return <>
    <UserTokenProvider>
      <CounterContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </CounterContextProvider>
    </UserTokenProvider>
  </>
}
