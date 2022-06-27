import React from 'react'
import './JumboSubheading.css'

function JumboSubheading({children, ...restProps}) {
  return (
    <div>
      <h2 className='jumbo-sub-heading' {...restProps} >
        {children}
      </h2>
    </div>
  )
}

export default JumboSubheading