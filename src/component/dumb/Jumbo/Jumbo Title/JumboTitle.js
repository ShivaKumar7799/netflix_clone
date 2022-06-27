import React from 'react'
import "./JumboTitle.css"

function JumboTitle({children, ...restProps}) {
  return (
    <div>
      <h1 className='jumbo-title' {...restProps} >
          {children}   
      </h1>
    </div>
  )
}

export default JumboTitle