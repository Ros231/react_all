import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import NavBarMain from './../components/NavBarMain'


export default function NotFound() {
  return (
    <>
    <NavBarMain />
      <Header />
      <h2 style={{ textAlign: 'center', color: '#FF00FF' }}>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Footer />
    </>
  )
}
