import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import "./FooterComponent.css"

function FooterComponent() {
  return (
    <div className='footer-section' >
      <div className='footer-wrapper'>
      <h3 className='footer-text' > Questions? Call 000-800-040-1843  </h3>
      </div>
      <div className='footer-wrapper-grid'>
        <div className = "footer-column">
          <FooterLink> FAQ</FooterLink>
          <FooterLink> Investor Relations</FooterLink>
          <FooterLink> Privacy </FooterLink>
          <FooterLink> Speed Test</FooterLink>
        </div>
        <div className = "footer-column">
          <FooterLink> Help Center</FooterLink>
          <FooterLink> Jobs</FooterLink>
          <FooterLink> Cookie Preferences</FooterLink>
          <FooterLink> Legal Notices</FooterLink>
        </div>
        <div className = "footer-column">
          <FooterLink> Acconts</FooterLink>
          <FooterLink> Ways to Watch</FooterLink>
          <FooterLink> Corporate Information</FooterLink>
          <FooterLink> Only on Netflix</FooterLink>
        </div>
        <div className = "footer-column">
          <FooterLink> Media Center</FooterLink>
          <FooterLink> Terms Of USe</FooterLink>
          <FooterLink> Contact Us</FooterLink>
        </div>
      </div>
     
    </div>
  )
}

export default FooterComponent