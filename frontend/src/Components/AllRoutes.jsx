import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { BookListing } from '../Pages/BookListing'
import { Checkout } from '../Pages/Checkout'
import { ShoppingCart } from '../Pages/ShoppingCart'
import { BookDetails } from '../Pages/BookDetails'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bookdetails' element={<BookDetails/>}/>
            <Route path='/booklisting' element={<BookListing/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        </Routes>
    </div>
  )
}
