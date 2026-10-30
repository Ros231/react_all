import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home"
import Car from "./pages/car"
import Bmi from "./pages/bmi"
import Bmr from "./pages/bmr"
 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car' element={<Car />} />
          <Route path='/bmi' element={<Bmi />} />
          <Route path='/bmr' element={<Bmr />} />
          <Route path='/Car' element={<Car />} />
          <Route path='/Bmi' element={<Bmi />} />
          <Route path='/Bmr' element={<Bmr />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
