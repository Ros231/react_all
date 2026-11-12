import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ pname }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center">
        <span className="text-green-500 font-mono mr-1">{'>_'}</span>
        <span className="text-white">ApisiT SAU</span>
      </Link>

      {/* Menu links */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={pname === 'home' ? 'text-yellow-400' : 'text-white hover:text-gray-300'}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={pname === 'about' ? 'text-yellow-400' : 'text-white hover:text-gray-300'}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={pname === 'portfolio' ? 'text-yellow-400' : 'text-white hover:text-gray-300'}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`border border-white px-4 py-1 rounded-full ${
            pname === 'contact' ? 'text-red-500' : 'text-white hover:bg-white hover:text-black'
          }`}
        >
          Let's talk
        </Link>
      </div>
    </div>
  )
}
