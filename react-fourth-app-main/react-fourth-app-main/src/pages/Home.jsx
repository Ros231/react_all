import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'
import Hero from './../assets/hero.png'

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
      {/*  <h2 style="text-align: center;color: blue;">Home</h2> */}
      <h2 style={{ textAlign: 'center', color: '#FF00FF' }}>Home</h2>
      <p style={{ textAlign: 'center' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt sapiente aliquam illum culpa maiores odit ipsum, repellat a consectetur facilis beatae cumque ducimus possimus inventore modi voluptates maxime. Perspiciatis, eum autem quia quam quo inventore aperiam temporibus eaque ex et corporis, esse quis saepe quasi, cum fugiat nemo ullam!</p>
      {/* show pic form public */}
      <img src="super.png" alt="super" style={{width: '100px' }} />
      {/* show pic form src/assets */}
      <img src={Hero} alt="hero" style={{width: '100px' }} />
      <Footer />
    </>
  )
}
