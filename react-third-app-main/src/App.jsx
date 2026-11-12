import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Hello from './pages/Hello'
import Hi from './pages/Hi'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/hi" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
