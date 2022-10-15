import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Homepage from './HomePage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default MainRoutes;