import React from 'react'
import {Routes,Route} from "react-router-dom"

import Login from '../login page/login'
import Product from '../Product page/product'
import Home from '../homepage/home'
import PrivateRoute from './PrivateRoute'
import Cart from '../cart/cart'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/cart" element={
            <PrivateRoute>
                <Cart/>
                </PrivateRoute>
            }>
                
            </Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes