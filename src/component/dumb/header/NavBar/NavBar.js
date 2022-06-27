import React from 'react'
import "./NavBar.css"

function NavBar( {children, ...restProps} ) {
  return (
    <>
      <nav {...restProps} >
        {children}
      </nav>
    </>
  )
}

export default NavBar