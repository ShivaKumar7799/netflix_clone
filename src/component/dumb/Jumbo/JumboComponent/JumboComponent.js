import React from 'react'
import JumboItem from '../JumboItem/JumboItem'
import "./JumboComponent.css";
import Seperator from "../../Seperator/Seperator"


const data = [
  {
  "title" : "Enjoy on your TV",
  "subheading" : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  "imageSrc" : "images/Jumbo Images/tv.jpg"
  },
  {
    "title" : "Download your shows to watch offline.",
    "subheading" : "Save your favourites easily and always have something to watch.",
    "imageSrc" : "images/Jumbo Images/mobile.jpg" 
  }, 
  {
    "title" : "Watch everywhere.",
    "subheading" : "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    "imageSrc" : "images/Jumbo Images/onlineNet.jpg"
  },
  {
    "title" : "Create profiles for children.",
    "subheading" : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    "imageSrc" : "images/Jumbo Images/chidlren.png"
  }
]

function JumboComponent() {
  return (
   <div className='jumbo-component'>
    {data.map( (item, index) => (
      <>
        <JumboItem alignmenttitle={index%2 === 0} title = {item.title} subheading = {item.subheading} imageSrc = {item.imageSrc}  />
        <Seperator /></>
    ))}
   </div>
  )
}

export default JumboComponent