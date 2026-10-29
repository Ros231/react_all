import React from 'react'
import Navbar from '../components/navbar'

import c1Img from '../assets/c1.png'
import c2Img from '../assets/c2.png'
import c3Img from '../assets/c3.png'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar pname="contact" />

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-serif mb-4">Let's talk</h1>
        <p className="text-gray-300 mb-20">
          Don't be a stranger! Say hello and let's collaborate
        </p>

        {/* 3 Contact Items */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
          {/* Email */}
          <div className="flex flex-col items-center">
            <img src={c1Img} alt="Email" className="h-16 mb-4" />
            <a href="" className="text-white hover:text-gray-300 text-sm">
              phanuwat.goon@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <img src={c2Img} alt="Location" className="h-16 mb-4" />
            <span className="text-white text-sm">
              Thailand, Bangkok
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <img src={c3Img} alt="LinkedIn" className="h-16 mb-4" />
            <a href="" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 text-sm">
              Phanuwat Torsrisakul
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
