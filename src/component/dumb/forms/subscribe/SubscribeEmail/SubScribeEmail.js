import React from 'react'
import "./SubScribeEmail.css"

function SubScribeEmail({...restProps}) {
  return (
    <div>
      <input className='subscribe-email' {...restProps} />
    </div>
  )
}

export default SubScribeEmail