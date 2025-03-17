import React from 'react'
import './Footer.css'
import instagram_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="" alt="" />
        <p>WittyWares</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="foote-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="foote-icon-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="foote-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-copyright">
            <br />
            
        </div>
        
      </div>
      <p>Copyright @ 2023 - All Right Reserved.</p>

    </div>
  )
}

export default Footer
