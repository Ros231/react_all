import React from 'react'
import ProductHeader from './../components/ProductHeader'
import Footer from './../components/Footer'
export default function Smartphone() {
  return (
    <>
    <a href="/product" style={{textDecoration: "none"}}><ProductHeader /></a>
      <h2 style={{ textAlign: 'center', color: '#FF00FF' }}>Smartphone</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt sapiente aliquam illum culpa maiores odit ipsum, repellat a consectetur facilis beatae cumque ducimus possimus inventore modi voluptates maxime. Perspiciatis, eum autem quia quam quo inventore aperiam temporibus eaque ex et corporis, esse quis saepe quasi, cum fugiat nemo ullam!</p>
      <Footer />
    </>
  )
}
