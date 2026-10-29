import React from 'react'
import Navbar from '../components/navbar'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import heroImg from '../assets/hero.jpg'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import nodeImg from '../assets/node.png'
import reactImg from '../assets/react.png'
import springImg from '../assets/spring.png'
import javaImg from '../assets/java.png'
import figmaImg from '../assets/figma.png'
import firebaseImg from '../assets/Firebase.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar pname="home" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4 leading-tight">
            Full Stack Web <br /> Developer !
          </h1>
          <p className="text-gray-300 max-w-md mb-6">
            Hi, I'm Phanuwat Torsrisakul. A passionate Full Stack Web Developer based in Thailand.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div>
          <img
            src={heroImg}
            alt="Hero"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="text-center mt-12 pb-16">
        <h2 className="text-lg font-semibold mb-6">My Tech Stacks</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          <img src={htmlImg} alt="HTML" className="h-8" />
          <img src={cssImg} alt="CSS" className="h-8" />
          <img src={nodeImg} alt="Node" className="h-8" />
          <img src={reactImg} alt="React" className="h-8" />
          <img src={springImg} alt="Spring" className="h-8" />
          <img src={javaImg} alt="Java" className="h-8" />
          <img src={figmaImg} alt="Figma" className="h-8" />
          <img src={firebaseImg} alt="Firebase" className="h-8" />
        </div>
      </div>
    </div>
  )
}
