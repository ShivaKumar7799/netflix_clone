import React from 'react'
import "./JumboImage.css"

function JumboImage({...restProps}) {
  return (
    <div>
        <img className='jumob-image' {...restProps} />
    </div>
  )
}

export default JumboImage