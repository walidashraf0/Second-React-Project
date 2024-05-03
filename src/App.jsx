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
import ProductDetails from './Component/ProductDetails/ProductDetails'
import CounterContextProvider from './Context/CounterContext'
import UserTokenProvider from './Context/UserToken'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import Profile from './Component/Profile/Profile'
import CartContextProvider from './Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { x } from './rtx/store'
import Address from './Component/address/address'
import Orders from './Component/Orders/Orders'



export default function App() {

  let routers = createBrowserRouter(
    [
      {
        path: '/', element: <Layout />, children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { index: true, element: <ProtectedRoute><Home/></ProtectedRoute>},
          { path: 'cart', element:<ProtectedRoute> <Cart /></ProtectedRoute> },
          { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
          { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
          { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
          { path: 'address', element: <ProtectedRoute><Address /></ProtectedRoute> },
          { path: 'allorders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
          { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
          
          { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
          { path: '*', element: <Notfound /> },
        ]
      }
    ]
  )
  return <CartContextProvider>
    <UserTokenProvider>
      {/* <CounterContextProvider> */}
      <Provider store={x}>
        <RouterProvider router={routers} />
      </Provider>
      {/* </CounterContextProvider> */}
      <Toaster />
    </UserTokenProvider>
  </CartContextProvider>


}
