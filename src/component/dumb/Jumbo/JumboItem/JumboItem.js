import React from 'react'
import "./JumboItem.css"
import JumboTitle from "../Jumbo Title/JumboTitle"
import JumboSubheading from "../Jumbo Subheading/JumboSubheading"
import JumboImage from "../Jumbo Image/JumboImage"

function JumboItem({children, alignmenttitle, subheading,imageSrc,imageAlt, title, ...restProps}) {
  return (
    <div className='jumbo-item' >
      {
        alignmenttitle === true && (
          <div>
        <JumboTitle>
          {title}
        </JumboTitle>
        <JumboSubheading>
          {subheading}
        </JumboSubheading>
      </div>
        )
      }
      {
        alignmenttitle === false && (
          <div className='jumbo-image-wrapper' >
        <JumboImage src = {imageSrc} alt = {imageAlt} />
      </div>
        )
      }
      
      {
        alignmenttitle === true &&(
          <div  >
        <JumboImage src = {imageSrc} alt = {imageAlt} />
      </div>
        )
      }
      {
        alignmenttitle === false && (
          <div>
        <JumboTitle>
          {title}
        </JumboTitle>
        <JumboSubheading>
          {subheading}
        </JumboSubheading>
      </div>
        )
      }
      
    </div>
  )
}

export default JumboItem