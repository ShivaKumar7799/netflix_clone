import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import "./AccordionTitle.css"

function AccordionTitle({children, isOpen, handleClick,  ...restProps}) {
  return (
    <div className='accordion-title' {...restProps} onClick = { () => handleClick()} >
        {children}
        {
          isOpen === false && (
            <AddIcon className='accordion-icon' />
          )
        }
        {
          isOpen === true && (
            <CloseIcon className = "accordion-icon" />
          )
        }
    </div>
  )
}

export default AccordionTitle