import React from 'react'
import'./logo.css';
import NetflixLogo from "../../../../Images/general/Netflix_logo.svg"

function Logo() {
  return (
    <div>
      <img className='logo' src= {NetflixLogo}  alt = "Netflix Log" />
    </div>
  )
}

export default Logo