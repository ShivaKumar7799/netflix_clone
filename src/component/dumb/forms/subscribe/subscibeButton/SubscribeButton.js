import React from 'react'
import "./SubscribeButton.css"
import rightArrowImage from "../../../../../Images/Icons/right-arrow-image.png"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function SubscribeButton( {children , ...restProps} ) {
  return (
    <div>
      <a className='subscribe-button' href='./signup' {...restProps}>
        { children }
        {/* <img className='subscribe-button-image' src= {rightArrowImage} alt = "Try Now" /> */}
        <ExpandLessIcon className = "right-icon" />
      </a>
      
    </div>
  )
}

export default SubscribeButton