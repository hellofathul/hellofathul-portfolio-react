import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MUFAMIN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://facebook.com/hellofathul"><FaFacebookSquare/></a>
        <a href="https://instagram.com/"><FiInstagram/></a>
        <a href="https://linkedin.com/in/hellofathul"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Fathul Amin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer