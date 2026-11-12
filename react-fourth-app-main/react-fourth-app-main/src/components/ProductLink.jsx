import React from 'react'

export default function ProductLink({url, title, bgcolor}) { // props ชื่อ url and title
  const a_link ={textDecoration: "none", color: "#FF00FF", padding: "10px 15px", borderRadius: "5px", backgroundColor: bgcolor}
  return (
    <>
      <a href={url} style={a_link}>
        {title}
      </a>
    </>
  )
}
