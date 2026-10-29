import React from 'react'
// com app by ninnin style
// จะใช้ React Router ในการจัดการ routing ของหน้าเว็บ
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Smartphone from './pages/Smartphone'
import Computer from './pages/Computer'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/product/computer" element={<Computer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
