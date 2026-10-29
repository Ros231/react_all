import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'
import ProductLink from './../components/ProductLink'

export default function Product() {
  return (
    <>
    <NavBarMain />
      <Header />
      <h2  style={{ textAlign: 'center', color: '#FF00FF' }}>Product</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <ProductLink url="/product/computer" title="COMPUTER" bgcolor="#bbfd7e"/>
        <ProductLink url="/product/smartphone" title="SMARTPHONE" bgcolor="#fc9494"/>
        </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt sapiente aliquam illum culpa maiores odit ipsum, repellat a consectetur facilis beatae cumque ducimus possimus inventore modi voluptates maxime. Perspiciatis, eum autem quia quam quo inventore aperiam temporibus eaque ex et corporis, esse quis saepe quasi, cum fugiat nemo ullam!</p>
      <Footer />
    </>
  )
}
