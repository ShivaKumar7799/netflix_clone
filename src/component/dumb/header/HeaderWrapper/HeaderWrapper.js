import React from 'react'
import "./HeaderWrapper.css"

function HeaderWrapper({children , ...restProps}) {
  return (
    <header className='header-wrapper' {...restProps} >
      {children}
    </header>
  )
}

export default HeaderWrapper