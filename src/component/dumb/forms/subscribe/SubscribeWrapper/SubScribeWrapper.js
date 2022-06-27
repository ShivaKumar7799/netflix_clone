import React from 'react'
import "./SubScribeWrapper.css"

function SubScribeWrapper({ children, ...restProps }) {
  return (
    <div className = "subscribe-wrapper" {...restProps} >
      {children}
    </div>
  )
}

export default SubScribeWrapper