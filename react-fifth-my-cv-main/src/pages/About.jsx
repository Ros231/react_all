import React from 'react'
import Navbar from '../components/navbar'
import aboutImg from '../assets/img1.png'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar pname="about" />

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-5xl font-serif mb-8">About Me</h1>
          <img src={aboutImg} alt="About Me" className="w-72" />
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">
            Hi, I'm ApisiT SAU. A passionate Full Stack Web Developer based in Thailand.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
          </p>
          <a
            href="#"
            className="border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}
