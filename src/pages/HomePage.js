import React from 'react'
import HeaderComponent from '../component/smart/HeaderComponent'
import Seperator from "../component/dumb/Seperator/Seperator";
import JumboComponent from '../component/dumb/Jumbo/JumboComponent/JumboComponent';
import AccordionComponent from '../component/dumb/accordion/accordionComponent/AccordionComponent';
import FooterComponent from '../component/dumb/Footer/FooterComponent/FooterComponent';

function HomePage() {
  return (
   <>
    <HeaderComponent />
    <Seperator />
    <JumboComponent />
    <AccordionComponent />
    <Seperator />
    <FooterComponent />
   </>
  )
}

export default HomePage