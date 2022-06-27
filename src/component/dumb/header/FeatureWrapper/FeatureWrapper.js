import React from 'react'
import "./FeatureWrapper.css"

function FeatureWrapper({ children, ...restProps}) {
  return (
    <div {...restProps} >
      {children}
    </div>
  )
}

export default FeatureWrapper