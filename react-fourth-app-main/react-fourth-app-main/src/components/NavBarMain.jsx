import React from 'react'

export default function NavBarMain() {
    const a_Style = {
        color: '#fff',
        textDecoration: 'none'
    };
    const div_Style = {display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dfa0df',
        color: '#fff',
        padding: '15px ',
        marginBottom: '50px',
        gap: '20px',
      }

  return (
    <>
        <div style={div_Style}>
        <a href="/" style={a_Style}>HOME</a> |
        <a href="/about" style={a_Style}>ABOUT</a> |
        <a href="/contact" style={a_Style}>CONTACT</a> |
        <a href="/product" style={a_Style}>PRODUCT</a>
      </div>
    </>
  )
}
