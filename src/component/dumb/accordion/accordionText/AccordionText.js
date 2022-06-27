import React from 'react'
import "./AccordionText.css"

function AccordionText({children, isOpen, ...restProps}) {
  return (
    <>
    {isOpen ? <div className='accordion-text' {...restProps} >
    {children}
  </div> : null}
    </>
  )
}

export default AccordionText