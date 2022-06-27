import React from 'react'
import "./SignButton.css"

function SignButton({children, ...restProps}) {
  return (
    <div>
        <button className='sign-form-button' {...restProps}>
          {children}
        </button>
    </div>
  )
}

export default SignButton